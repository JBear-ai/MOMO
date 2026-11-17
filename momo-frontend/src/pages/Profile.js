import { safeRequestFailure } from "../utils/safeRequestFailure";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFavoriteMovies } from "../utils/favorites";
import AxiosApi from "../api/AxiosApi";
import ProfileAvatar from "../components/ProfileAvatar";
import { ProfileDeleteLink } from "../styles/legacy/Profile.styles";

function ActivityIcon({ type }) {
  const shared = {
    viewBox: "0 0 28 28",
    width: 20,
    height: 20,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.65,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    focusable: "false",
  };

  if (type === "writing") {
    return (
      <svg {...shared}>
        <path d="m18.9 5.3 3.8 3.8M6 22l4.3-.9L22 9.4a2.7 2.7 0 0 0-3.8-3.8L6.5 17.7 6 22Z" />
        <path d="M5 25h18" />
      </svg>
    );
  }

  if (type === "liked") {
    return (
      <svg {...shared}>
        <path d="M23 9.3c0 5.2-9 11-9 11s-9-5.8-9-11a4.8 4.8 0 0 1 9-2.2 4.8 4.8 0 0 1 9 2.2Z" />
      </svg>
    );
  }

  return (
    <svg {...shared}>
      <path d="M6.5 4.75h15A2.25 2.25 0 0 1 23.75 7v2.4a2.6 2.6 0 0 0 0 5.2V17A2.25 2.25 0 0 1 21.5 19.25h-15A2.25 2.25 0 0 1 4.25 17v-2.4a2.6 2.6 0 0 0 0-5.2V7A2.25 2.25 0 0 1 6.5 4.75Z" />
      <rect x="9.25" y="7.75" width="9.5" height="8.5" rx="1.2" />
      <path d="m13 10.1 3.1 1.9-3.1 1.9v-3.8Z" />
      <path d="M7 7.2v1.1M7 15.8v1.1M21 7.2v1.1M21 15.8v1.1" />
    </svg>
  );
}

function Profile() {
  const [userId, setUserId] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [profileUserId, setProfileUserId] = useState(null);
  const [hasProfileImage, setHasProfileImage] = useState(false);

  // 영화 활동 개수
  const [favoriteCount, setFavoriteCount] = useState(
    () => getFavoriteMovies().length,
  );
  const [reviewCount, setReviewCount] = useState(null);
  const [likedReviewCount, setLikedReviewCount] = useState(null);

  // 브라우저에 저장된 회원 정보 불러오기
  useEffect(() => {
    setUserId(localStorage.getItem("username") || "");
    setNickname(localStorage.getItem("nickname") || "");
    setEmail(localStorage.getItem("email") || "");
  }, []);

  // 관심 영화 등록 및 해제 상태 감지
  useEffect(() => {
    const updateFavorites = (event) => {
      const favorites = event.detail || getFavoriteMovies();
      setFavoriteCount(favorites.length);
    };

    window.addEventListener("momo-favorites-changed", updateFavorites);

    return () => {
      window.removeEventListener("momo-favorites-changed", updateFavorites);
    };
  }, []);

  // 프로필 및 영화 활동 정보 조회
  useEffect(() => {
    const controller = new AbortController();

    const loadProfile = async () => {
      try {
        const response = await AxiosApi.memberMe(controller.signal);

        if (controller.signal.aborted) return;

        setProfileUserId(response.data.userId || null);
        setHasProfileImage(Boolean(response.data.profileImage));
      } catch (error) {
        if (error.code !== "ERR_CANCELED" && error.name !== "CanceledError") {
          console.error("프로필 정보 조회 실패:", safeRequestFailure(error));
        }
      }
    };

    // 작성한 리뷰와 좋아요한 리뷰의 전체 개수 조회
    const loadReviewCounts = async () => {
      const [myReviewsResult, likedReviewsResult] = await Promise.allSettled([
        AxiosApi.myReviews(0, controller.signal),
        AxiosApi.myLikedReviews(0, controller.signal),
      ]);

      if (controller.signal.aborted) return;

      // Spring Data Page 응답의 전체 데이터 개수 추출
      const getTotalCount = (result) => {
        if (result.status !== "fulfilled") return null;

        const data = result.value.data;

        return data.page?.totalElements ?? data.totalElements ?? null;
      };

      const myCount = getTotalCount(myReviewsResult);
      const likedCount = getTotalCount(likedReviewsResult);

      if (myCount !== null) {
        setReviewCount(myCount);
      }

      if (likedCount !== null) {
        setLikedReviewCount(likedCount);
      }

      if (myReviewsResult.status === "rejected") {
        console.error("작성한 리뷰 개수 조회 실패:", safeRequestFailure(myReviewsResult.reason));
      }

      if (likedReviewsResult.status === "rejected") {
        console.error(
          "좋아요한 리뷰 개수 조회 실패:",
          safeRequestFailure(likedReviewsResult.reason),
        );
      }
    };

    loadProfile();
    loadReviewCounts();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <main className="profile-page">
      <div className="profile-container">
        {/* 페이지 제목 */}
        <header className="profile-heading">
          <h1>마이페이지</h1>
          <p>나의 계정 정보와 영화 활동을 확인해 보세요.</p>
        </header>

        {/* 내 프로필 */}
        <section className="profile-card">
          <div className="profile-card-heading">
            <div>
              <h2>내 프로필</h2>
              <p>나의 회원 정보를 확인할 수 있어요.</p>
            </div>

            <div className="profile-card-actions">
              <Link to="/profile/edit" className="profile-button">
                프로필 수정
              </Link>
            </div>
          </div>

          <div className="profile-user">
            <div className="profile-avatar">
              <ProfileAvatar
                userId={profileUserId}
                hasImage={hasProfileImage}
                alt="프로필 이미지"
              />
            </div>

            <div className="profile-user-info">
              <h3>{nickname || userId || "로그인 사용자"}</h3>

              <p>
                <span>아이디</span>
                {userId || "정보 없음"}
              </p>

              <p>
                <span>닉네임</span>
                {nickname || "정보 없음"}
              </p>

              <p>
                <span>이메일</span>
                {email || "등록된 이메일 정보 없음"}
              </p>
            </div>
          </div>
        </section>

        {/* 나의 영화 활동 */}
        <section className="profile-card">
          <div className="profile-card-heading">
            <div>
              <h2>나의 영화 활동</h2>
              <p>내가 남긴 영화 기록을 모아볼 수 있어요.</p>
            </div>
          </div>

          {/* 영화 활동: 숫자와 이동 액션이 구분되는 메모 카드 */}
          <div className="profile-activity-grid">
            <Link
              to="/profile/reviews"
              className="profile-activity-item profile-reviews-link"
              data-tone="writing"
            >
              <div className="profile-activity-top">
                <span className="profile-activity-icon"><ActivityIcon type="writing" /></span>
              </div>
              <h3>작성한 리뷰</h3>
              <div className="profile-activity-count-row">
                <strong className="profile-activity-count">
                  {reviewCount === null ? "-" : reviewCount}
                </strong>
                <span className="profile-activity-unit">개</span>
              </div>
              <div className="profile-activity-footer">
                <p>내가 남긴 영화 기록</p>
                <span className="profile-activity-arrow" aria-hidden="true">↗</span>
              </div>
            </Link>

            <Link
              to="/profile/liked-reviews"
              className="profile-activity-item profile-liked-reviews-link"
              data-tone="liked"
            >
              <div className="profile-activity-top">
                <span className="profile-activity-icon"><ActivityIcon type="liked" /></span>
              </div>
              <h3>좋아요한 리뷰</h3>
              <div className="profile-activity-count-row">
                <strong className="profile-activity-count">
                  {likedReviewCount === null ? "-" : likedReviewCount}
                </strong>
                <span className="profile-activity-unit">개</span>
              </div>
              <div className="profile-activity-footer">
                <p>마음에 남은 다른 사람의 기록</p>
                <span className="profile-activity-arrow" aria-hidden="true">↗</span>
              </div>
            </Link>

            <Link
              to="/profile/favorites"
              className="profile-activity-item profile-favorites-link"
              data-tone="saved"
            >
              <div className="profile-activity-top">
                <span className="profile-activity-icon"><ActivityIcon type="saved" /></span>
              </div>
              <h3>관심 영화</h3>
              <div className="profile-activity-count-row">
                <strong className="profile-activity-count">{favoriteCount}</strong>
                <span className="profile-activity-unit">편</span>
              </div>
              <div className="profile-activity-footer">
                <p>다시 보고 싶은 영화 모음</p>
                <span className="profile-activity-arrow" aria-hidden="true">↗</span>
              </div>
            </Link>
          </div>
        </section>

        {/* 회원 탈퇴 */}
        <section className="profile-card profile-delete-section">
          <div>
            <h2>회원 탈퇴</h2>
            <p>회원 탈퇴를 진행하면 계정 이용에 제한이 생길 수 있습니다.</p>
          </div>

          <ProfileDeleteLink
            to="/profile/delete"
            className="profile-button profile-delete-button"
          >
            회원 탈퇴
          </ProfileDeleteLink>
        </section>
      </div>
    </main>
  );
}

export default Profile;
