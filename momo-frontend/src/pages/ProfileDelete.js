import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosApi, {
  clearAuthSession,
  getAuthSessionVersion,
  isAuthSessionCurrent,
} from "../api/AxiosApi";
import { prepareSocialDelete, DELETE_CONFIRMATION } from "../auth/socialOAuthFlow";
import { safeRequestFailure } from "../utils/safeRequestFailure";

function ProfileDelete() {
  const navigate = useNavigate();
  const [member, setMember] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let active = true;
    AxiosApi.memberMe()
      .then(({ data }) => {
        if (active) setMember(data);
      })
      .catch((error) => {
        if (active) {
          setErrorMessage(
            error.response?.data?.message || "회원 정보를 불러오지 못했습니다.",
          );
        }
      });
    return () => {
      active = false;
    };
  }, []);

  const provider = (member?.provider || "LOCAL").toUpperCase();
  const isLocal = provider === "LOCAL";
  const isKakao = provider === "KAKAO";
  const socialName = provider === "NAVER" ? "네이버" : "Google";
  const canSubmit =
    Boolean(member) &&
    isConfirmed &&
    confirmation === DELETE_CONFIRMATION &&
    (!isLocal || Boolean(password.trim()));

  const handleDelete = async () => {
    if (!canSubmit) return;

    const consent = {
      agreed: true,
      confirmation: DELETE_CONFIRMATION,
    };
    const sessionVersion = getAuthSessionVersion();

    try {
      if (isLocal) {
        if (!window.confirm("정말 회원 탈퇴하시겠습니까?")) return;
        await AxiosApi.memberDelete(password);
      } else if (isKakao) {
        await AxiosApi.socialMemberDelete(consent);
      } else if (provider === "NAVER" || provider === "GOOGLE") {
        const url = await prepareSocialDelete(provider.toLowerCase(), consent);
        if (!isAuthSessionCurrent(sessionVersion)) return;
        window.location.assign(url);
        return;
      } else {
        setErrorMessage("지원하지 않는 소셜 로그인 방식입니다.");
        return;
      }

      if (!clearAuthSession(sessionVersion)) return;
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      window.alert("회원 탈퇴가 완료되었습니다.");
      navigate("/login", { replace: true });
    } catch (error) {
      if (
        !isAuthSessionCurrent(sessionVersion) ||
        error.code === "MOMO_AUTH_SESSION_CHANGED"
      ) {
        return;
      }
      console.error("회원 탈퇴 실패:", safeRequestFailure(error));
      setErrorMessage(
        error.response?.data?.message ||
          (typeof error.response?.data === "string"
            ? error.response.data
            : "회원 탈퇴 중 오류가 발생했습니다."),
      );
    }
  };

  return (
    <main className="profile-page" data-archive-page="delete">
      <section className="profile-container">
        <header className="profile-heading">
          <h1>회원 탈퇴</h1>
          <p>탈퇴하기 전에 안내 사항을 확인해 주세요.</p>
        </header>

        <section className="profile-card profile-delete-page-card">
          <h2>정말 탈퇴하시겠습니까?</h2>
          {!member && !errorMessage && <p role="status">회원 정보를 확인하고 있습니다.</p>}

          {isLocal && (
            <>
              <p>계정을 삭제하려면 본인 확인을 위해 현재 비밀번호를 입력해 주세요.</p>
              <label htmlFor="delete-password">현재 비밀번호</label>
              <input
                id="delete-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="비밀번호를 입력해 주세요."
              />
            </>
          )}

          {!isLocal && member && (
            <>
              {isKakao ? (
                <p>카카오 연결을 해제한 뒤 MOMO 회원 정보와 활동 데이터를 삭제합니다.</p>
              ) : (
                <>
                  <p>회원 탈퇴를 완료하려면 외부 계정 확인이 한 번 더 필요합니다.</p>
                  <p>
                    탈퇴 버튼을 누르면 {socialName} 로그인·계정 선택 화면으로 이동합니다.
                    현재 MOMO에 연결된 동일한 계정으로 인증해 주세요.
                  </p>
                  <p>인증이 완료되면 외부 연결 해제와 MOMO 회원 탈퇴가 자동으로 진행됩니다.</p>
                  <p>{socialName} 계정 자체는 삭제되지 않습니다.</p>
                </>
              )}
              <label htmlFor="social-delete-confirmation">탈퇴 확인 문구</label>
              <input
                id="social-delete-confirmation"
                value={confirmation}
                onChange={(event) => setConfirmation(event.target.value)}
                placeholder={DELETE_CONFIRMATION}
                autoComplete="off"
              />
            </>
          )}

          <label className="profile-delete-check">
            <input
              type="checkbox"
              checked={isConfirmed}
              onChange={(event) => setIsConfirmed(event.target.checked)}
            />
            회원 탈퇴 안내에 동의합니다.
          </label>

          {errorMessage && <p role="alert">{errorMessage}</p>}

          <div className="profile-form-buttons" style={{ marginTop: "20px" }}>
            <button
              type="button"
              className="profile-button profile-delete-button"
              onClick={handleDelete}
              disabled={!canSubmit}
            >
              {isLocal || isKakao
                ? "회원 탈퇴"
                : `${socialName} 계정 확인 후 탈퇴`}
            </button>
            <button
              type="button"
              className="profile-button profile-button-secondary"
              onClick={() => navigate("/profile")}
            >
              취소
            </button>
          </div>
        </section>
      </section>
    </main>
  );
}

export default ProfileDelete;
