import { createGlobalStyle } from "styled-components";

const LikedReviewsStyles = createGlobalStyle`

/* 좋아요한 리뷰 페이지 */
.liked-reviews-page {
  min-height: 100vh;
  padding: 12px 0 64px;
  background: transparent;
}

.liked-reviews-container {
  max-width: 980px;
  margin: 0 auto;
}

/* 페이지 제목 */
.liked-reviews-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: clamp(26px, 3.4vw, 42px);
  margin-bottom: 24px;
  background: linear-gradient(120deg, var(--momo-note), rgba(255,255,255,.9));
  border: 1px solid var(--momo-note-border);
  border-radius: 24px;
}

.liked-reviews-eyebrow {
  display: block;
  margin-bottom: 8px;
  color: var(--momo-link);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.5px;
}

.liked-reviews-heading h1 {
  margin: 0 0 8px;
  color: var(--momo-text);
  font-size: clamp(30px, 4vw, 40px);
  font-weight: 800;
}

.liked-reviews-heading p {
  margin: 0;
  color: var(--momo-muted);
  font-size: 14px;
}

.liked-reviews-heading > a {
  color: var(--momo-link);
  font-size: 14px;
  font-weight: 800;
  text-decoration: none;
}

/* 흰색 메인 카드 */
.liked-reviews-card {
  padding: clamp(20px, 2.8vw, 34px);
  background: var(--momo-surface);
  border: 1px solid var(--momo-border);
  border-radius: var(--momo-radius-lg);
  box-shadow: var(--momo-shadow-sm);
}

/* 카드 상단 */
.liked-reviews-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--momo-border);
}

.liked-reviews-toolbar h2 {
  margin: 0 0 7px;
  color: var(--momo-text);
  font-size: 19px;
  font-weight: 800;
}

.liked-reviews-toolbar p {
  margin: 0;
  color: var(--momo-muted);
  font-size: 13px;
}

.liked-reviews-toolbar > span {
  padding: 7px 12px;
  background: var(--momo-note);
  border: 1px solid var(--momo-note-border);
  border-radius: 8px;
  color: var(--momo-link);
  font-size: 12px;
  font-weight: 800;
  white-space: nowrap;
}

/* 리뷰 목록 */
.liked-reviews-list {
  display: flex;
  flex-direction: column;
}

.liked-review-item {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 22px 12px;
  border-bottom: 1px solid var(--momo-border);
  border-radius: 12px;
  transition: background .18s ease, transform .18s ease;
  transition: background 0.2s ease;
}

.liked-review-item:hover {
  background: var(--momo-note);
}

/* 영화 포스터 */
.liked-review-poster {
  width: 100px;
  height: 145px;
  flex-shrink: 0;
  overflow: hidden;
  border: 1px solid var(--momo-border);
  border-radius: 9px;
  background: var(--momo-note);
}

.liked-review-poster img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.liked-poster-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: var(--momo-link);
  font-size: 13px;
  font-weight: 800;
}

/* 리뷰 내용 */
.liked-review-info {
  flex: 1;
  min-width: 0;
}

.liked-review-movie {
  display: block;
  margin-bottom: 7px;
  color: var(--momo-link);
  font-size: 12px;
  font-weight: 800;
}

.liked-review-title {
  display: block;
  margin-bottom: 9px;
  color: var(--momo-text);
  font-size: 18px;
  font-weight: 800;
  text-decoration: none;
  overflow-wrap: anywhere;
}

.liked-review-title:hover {
  color: var(--momo-link);
}

.liked-review-content {
  display: -webkit-box;
  margin: 0 0 12px;
  overflow: hidden;
  color: var(--momo-text-soft);
  font-size: 13px;
  line-height: 1.6;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.liked-review-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  color: var(--momo-placeholder);
  font-size: 11px;
}

.liked-review-stats {
  display: flex;
  gap: 16px;
  margin-top: 12px;
  color: var(--momo-muted);
  font-size: 12px;
}

.liked-review-stats strong {
  color: var(--momo-link);
}

/* 좋아요 취소 버튼 */
.liked-review-unlike {
  flex-shrink: 0;
  padding: 8px 11px;
  border: 1px solid var(--momo-dislike-border);
  border-radius: 8px;
  background: var(--momo-dislike-bg);
  color: var(--momo-danger);
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
}

.liked-review-unlike:hover {
  background: var(--momo-dislike-bg-hover);
}

.liked-review-unlike:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* 로딩 / 오류 / 빈 목록 */
.liked-reviews-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 250px;
  color: var(--momo-muted);
  text-align: center;
}

.liked-reviews-state h3 {
  margin: 0;
  color: var(--momo-text);
  font-size: 17px;
}

.liked-reviews-state p {
  margin: 0;
  font-size: 13px;
}

.liked-empty-icon {
  color: var(--momo-danger);
  font-size: 40px;
}

.liked-reviews-state a {
  margin-top: 8px;
  color: var(--momo-link);
  font-weight: 800;
  text-decoration: none;
}

.liked-reviews-state.error {
  color: var(--momo-danger);
}

/* 페이지네이션 */
.liked-reviews-pagination {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 28px;
}

.liked-reviews-pagination button {
  min-width: 38px;
  height: 38px;
  padding: 0 12px;
  border: 1px solid var(--momo-border);
  border-radius: 8px;
  background: var(--momo-surface);
  color: var(--momo-text-soft);
  font-weight: 700;
  cursor: pointer;
}

.liked-reviews-pagination button.active {
  background: var(--momo-accent);
  border-color: var(--momo-accent);
  color: var(--momo-text);
}

.liked-reviews-pagination button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* 마이페이지 좋아요 리뷰 링크 */
.profile-liked-reviews-link {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

.profile-liked-reviews-link:hover {
  background: var(--momo-note);
  border-color: var(--momo-accent);
}

.profile-liked-reviews-count {
  flex-shrink: 0;
  color: var(--momo-link);
  font-size: 13px;
  font-weight: 800;
  white-space: nowrap;
}

/* 모바일 */
@media (max-width: 600px) {
  .liked-reviews-page {
    padding: 28px 14px 60px;
  }

  .liked-reviews-card {
    padding: 18px;
  }

  .liked-review-item {
    flex-wrap: wrap;
    gap: 12px;
  }

  .liked-review-poster {
    width: 76px;
    height: 112px;
  }

  .liked-review-unlike {
    margin-left: auto;
  }

  .liked-reviews-heading h1 {
    font-size: 25px;
  }
}


/* Liked review archive: poster-led rows with a calm reading surface. */
.liked-reviews-container { max-width: 1080px; }
.liked-reviews-heading {
  padding: 24px 28px;
  margin-bottom: 20px;
  background: #FFF9E9;
  border-radius: 15px;
}
.liked-reviews-heading h1 { font-size: clamp(26px, 3vw, 34px); letter-spacing: -.04em; }
.liked-reviews-card {
  padding: clamp(18px, 2.5vw, 28px);
  border-radius: 14px;
  box-shadow: none;
}
.liked-review-item { gap: 16px; padding: 18px 10px; border-radius: 8px; }
.liked-review-item:hover { background: #FFFAEC; }
.liked-review-poster { width: 86px; height: 126px; border-radius: 7px; }
.liked-review-title { font-size: 16px; }
.liked-review-unlike { min-height: 36px; border-radius: 7px; }
@media (max-width: 600px) {
  .liked-reviews-heading { padding: 20px 17px; }
  .liked-reviews-card { padding: 16px 13px; }
  .liked-review-poster { width: 70px; height: 104px; }
}

`;

export default LikedReviewsStyles;
