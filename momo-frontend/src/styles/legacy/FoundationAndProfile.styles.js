import { createGlobalStyle } from "styled-components";

// 기존 className과 선택자를 그대로 유지하는 호환 스타일 모듈입니다.
const FoundationAndProfileStyles = createGlobalStyle`
/* ========================================
   MOMO Design System - "영화를 메모하다, 가볍고 따뜻한 기록"
======================================== */
/* 전체 바디 및 공통 설정 */
body {
  background-color: var(--momo-bg);
  color: var(--momo-text);
  font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif;
  letter-spacing: -0.01em;
}

/* ========================================
   마이페이지 / 프로필 수정 / 회원 탈퇴 스타일
======================================== */
.profile-page {
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 12px 0 64px;
}

.profile-container {
  display: grid;
  gap: 24px;
}

.profile-heading h1 {
  margin: 0 0 8px;
  font-size: clamp(28px, 3vw, 36px);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--momo-text);
}

.profile-heading p {
  margin: 0;
  color: var(--momo-muted);
  font-size: 14px;
}

.profile-eyebrow {
  margin-bottom: 8px;
  color: var(--momo-accent-ink);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.profile-card {
  padding: clamp(22px, 3vw, 32px);
  background: linear-gradient(145deg, var(--momo-surface), var(--momo-surface-raised));
  border: 1px solid var(--momo-glass-border);
  border-radius: var(--momo-radius-lg);
  box-shadow: 0 12px 34px rgba(54, 45, 28, .055);
  position: relative;
  overflow: hidden;
}

/* 메모지 감성 포인트 라인 */
.profile-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 28px;
  right: 28px;
  height: 2px;
  background: linear-gradient(90deg, var(--momo-accent), rgba(255,212,59,0));
  border-radius: 2px;
}

.profile-card-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
}

.profile-card-heading h2 {
  margin: 0 0 4px;
  font-size: 19px;
  font-weight: 750;
  color: var(--momo-text);
}

.profile-card-heading p {
  margin: 0;
  color: var(--momo-muted);
  font-size: 13px;
}

.profile-card-actions {
  display: flex;
  gap: 8px;
}

.profile-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  background: var(--momo-surface);
  border: 1px solid var(--momo-border);
  border-radius: 8px;
  color: var(--momo-text);
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.02);
}

.profile-button:hover {
  background: var(--momo-note);
  border-color: var(--momo-accent-ink);
  transform: translateY(-1px);
}

.profile-button-secondary {
  background: var(--momo-note);
  border-color: var(--momo-note-border);
}

.profile-delete-button {
  background: var(--momo-danger-bg);
  border-color: var(--momo-dislike-border);
  color: var(--momo-danger);
  text-decoration: none;
}

/* 회원 탈퇴 버튼 - 활성화 상태에서만 호버 적용 (추가 / 11.02 )*/
.profile-delete-button:not(:disabled):hover {
  background: var(--momo-dislike-bg-hover);
}

/* 체크박스 선택 전 - 비활성화 */
.profile-delete-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* 체크박스 선택 후 - 활성화 */
.profile-delete-button:not(:disabled) {
  opacity: 1;
  cursor: pointer;
}

.profile-user {
  display: flex;
  align-items: center;
  gap: 20px;
}

.profile-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  background: var(--momo-accent);
  border: 2px solid var(--momo-surface);
  box-shadow: 0 4px 12px rgba(255, 212, 59, 0.3);
  border-radius: 50%;
  font-size: 26px;
  font-weight: 800;
  color: var(--momo-accent-ink);
  flex-shrink: 0;
}

.profile-user-info {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
}

.profile-user-info h3 {
  margin: 0 0 4px;
  font-size: 18px;
  font-weight: 700;
}

.profile-user-info p {
  display: flex;
  justify-content: space-between;
  margin: 0;
  font-size: 13px;
  color: var(--momo-text);
  border-bottom: 1px dashed var(--momo-border);
  padding-bottom: 6px;
}

.profile-user-info span {
  color: var(--momo-muted);
  font-weight: 600;
}

/* 영화 활동 섹션 */

/* 영화 활동 섹션 */
.profile-activity-grid {
  display: grid;
  /* 화면이 좁을 때는 줄바꿈되거나 유연하게 줄어들고, 
     넓어질 때는 150px 이상 크기로 각 카드가 공간을 나눠 갖도록 설정 */
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  width: 100%;
}

.profile-activity-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 0; /* 내부 텍스트나 flex 아이템이 칸을 뚫고 나가지 않게 방지 */
  min-height: 168px;
  padding: 22px 14px;
  background: linear-gradient(145deg, var(--momo-note), #FFFDF6);
  border: 1px solid var(--momo-note-border);
  border-radius: 16px;
  text-align: center;
  text-decoration: none;
  color: var(--momo-text);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.profile-activity-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 14px rgba(0, 0, 0, 0.06);
}

.profile-activity-icon {
  font-size: 22px;
}

.profile-activity-item h3 {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
}

.profile-activity-item p {
  margin: 0;
  color: var(--momo-muted);
  font-size: 12px;
}

.profile-reviews-count,
.profile-liked-reviews-count,
.profile-favorites-count {
  margin-top: 4px;
  font-size: 12px;
  font-weight: 700;
  color: var(--momo-accent-ink);
}

@media (max-width: 600px) {
  .profile-activity-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
  }

  .profile-activity-item {
    min-height: 125px;
    padding: 14px 6px;
  }

  .profile-activity-item p {
    display: none;
  }
}


.profile-coming {
  display: inline-block;
  margin-top: auto;
  padding: 3px 8px;
  width: fit-content;
  background: var(--momo-surface);
  border: 1px solid var(--momo-border);
  border-radius: 6px;
  font-size: 11px;
  color: var(--momo-muted);
  font-weight: 600;
}

.profile-delete-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.profile-form {
  display: grid;
  gap: 12px;
}

.profile-form label {
  font-size: 13px;
  font-weight: 700;
}

.profile-form input {
  padding: 13px 16px;
  border: 1px solid var(--momo-border);
  border-radius: 8px;
  font-size: 14px;
  background: var(--momo-surface);
  color: var(--momo-text);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.profile-form input:read-only {
  background: var(--momo-bg);
  color: var(--momo-muted);
}

.profile-form input:focus {
  border-color: var(--momo-accent-ink);
  box-shadow: 0 0 0 3px rgba(255, 212, 59, 0.2);
  outline: none;
}

.profile-form-buttons {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}

.profile-delete-check {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 16px 0;
  font-size: 14px;
  cursor: pointer;
}

@media (max-width: 600px) {
  .profile-activity-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
  }

  .profile-activity-item {
    min-height: 125px;
    padding: 14px 6px;
  }

  .profile-activity-item p {
    display: none;
  }

  .profile-delete-section {
    flex-direction: column;
    align-items: flex-start;
  }
}


/* Member dashboard composition */
.profile-page { max-width:1240px; }
.profile-container { grid-template-columns:minmax(0,.82fr) minmax(0,1.18fr); align-items:start; gap:22px; }
.profile-heading { grid-column:1 / -1; padding:8px 0 14px; }
.profile-heading h1 { font-size:clamp(36px,4.4vw,58px); letter-spacing:-.065em; }
.profile-container > .profile-card:first-of-type { grid-column:1; grid-row:2 / span 2; min-height:300px; display:flex; flex-direction:column; justify-content:center; }
.profile-container > .profile-card:nth-of-type(2) { grid-column:2; }
.profile-container > .profile-card:last-of-type { grid-column:2; }
.profile-user { align-items:flex-start; flex-direction:column; gap:20px; }
.profile-avatar { width:96px; height:96px; font-size:34px; box-shadow:0 12px 28px rgba(140,105,0,.18); }
.profile-activity-grid { gap:12px; }
.profile-activity-item { min-height:142px; border-radius:8px 18px 8px 18px; background:linear-gradient(145deg,#FFFDF7,#F6EEDC); box-shadow:0 9px 20px rgba(54,45,28,.055); }
.profile-activity-item:nth-child(2) { transform:translateY(9px); }
.profile-activity-item:hover { transform:translateY(-4px); }
@media(max-width:800px) { .profile-container { grid-template-columns:1fr; } .profile-container > .profile-card:first-of-type,.profile-container > .profile-card:nth-of-type(2),.profile-container > .profile-card:last-of-type { grid-column:1; grid-row:auto; } .profile-user { flex-direction:row; } .profile-activity-item:nth-child(2) { transform:none; } }
@media(max-width:600px) { .profile-user { align-items:center; flex-direction:row; } .profile-avatar { width:68px; height:68px; font-size:25px; } }

`;

export default FoundationAndProfileStyles;
