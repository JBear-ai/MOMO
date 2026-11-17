import { createGlobalStyle } from "styled-components";

// 기존 className과 선택자를 그대로 유지하는 호환 스타일 모듈입니다.
const HomeAndMovieStyles = createGlobalStyle`
/* ========================================
   MOMO 홈 화면 (.home-page)
======================================== */
.home-page {
  width: 100%;
}

.home-page .hero-banner {
  padding: clamp(28px, 5vw, 44px);
  background: var(--momo-note);
  border: 1px solid var(--momo-note-border);
  border-radius: var(--momo-radius);
  box-shadow: var(--momo-shadow);
  position: relative;
  overflow: hidden;
}

/* 히어로 배너 왼쪽 포인트 바 */
.home-page .hero-banner::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 6px;
  background-color: var(--momo-accent);
}

.home-page .hero-content h1 {
  font-size: clamp(27px, 4vw, 38px);
  line-height: 1.45;
  font-weight: 800;
}

.home-page .hero-description {
  color: var(--momo-muted);
  line-height: 1.8;
}

.home-page .eyebrow {
  margin-bottom: 12px;
  color: var(--momo-accent-ink);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.5px;
}

.home-page .section-block {
  margin: 40px 0;
  scroll-margin-top: 90px;
}

.home-page .section-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
}

.home-page .section-heading h2 {
  margin-bottom: 4px;
  font-size: 22px;
  font-weight: 800;
}

.home-page .section-description {
  margin-bottom: 0;
  color: var(--momo-muted);
}

.home-page .home-search {
  max-width: 420px;
  margin-bottom: 20px;
}

.home-page .state-message,
.home-page .empty-review-panel {
  padding: 28px;
  color: var(--momo-muted);
  background: var(--momo-surface);
  border: 1px dashed var(--momo-border);
  border-radius: var(--momo-radius);
  text-align: center;
  font-weight: 600;
}

.home-page .movie-info h3 {
  margin: 12px 0 5px;
  overflow-wrap: anywhere;
}

.home-page .movie-info p {
  margin: 0;
  color: var(--momo-muted);
  font-size: 13px;
}

.home-page .movie-info .outline-button,
.home-page .movie-info .like-button {
  width: 100%;
  margin-top: 8px;
}

.home-page .like-button {
  background: var(--momo-note);
}

.home-page .review-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.home-page .community-review {
  min-width: 0;
  padding: 22px;
  background: var(--momo-note);
  border: 1px solid var(--momo-note-border);
  border-left: 5px solid var(--momo-accent);
  border-radius: 8px 12px 12px 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.02);
  overflow-wrap: anywhere;
}

.home-page .community-review p {
  white-space: pre-wrap;
  margin: 8px 0 12px;
}

.home-page .community-review small {
  color: var(--momo-muted);
}

.home-page .modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(45, 38, 26, 0.4);
  backdrop-filter: blur(2px);
}

.home-page .review-modal {
  width: 100%;
  max-width: 480px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 30px;
  background: var(--momo-surface);
  border: 1px solid var(--momo-border);
  border-radius: var(--momo-radius);
  box-shadow: 0 16px 40px rgba(45, 38, 26, 0.15);
}

.home-page .modal-close {
  display: flex;
  margin-left: auto;
}

.home-page .review-modal form {
  display: grid;
  gap: 12px;
}

.home-page .review-modal label {
  font-weight: 700;
}

.home-page .review-modal textarea {
  min-height: 120px;
}

/* ========================================
   영화 카드 및 그리드 목록 (.movie-grid, .movie-card)
======================================== */
.movie-search-input {
  width: 100%;
  max-width: 420px;
  padding: 14px 18px;
  margin: 24px 0;
  border: 1px solid var(--momo-border);
  border-radius: 10px;
  background: var(--momo-surface);
  color: var(--momo-text);
  font-size: 14px;
  outline: none;
  box-shadow: 0 2px 6px rgba(0,0,0,0.02);
  transition: all 0.2s ease;
}

.movie-search-input:focus {
  border-color: var(--momo-accent-ink);
  box-shadow: 0 0 0 3px rgba(255, 212, 59, 0.2);
}

.movie-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
}

.movie-grid > * {
  min-width: 0;
  max-width: 100%;
}

.movie-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 0;
  padding: 14px;
  color: inherit;
  background: var(--momo-surface);
  border: 1px solid var(--momo-border);
  border-radius: var(--momo-radius);
  box-shadow: var(--momo-shadow);
  text-decoration: none;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
}

.movie-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px -10px rgba(45, 39, 28, 0.14);
  border-color: var(--momo-accent-ink);
}

.movie-card img {
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  background: var(--momo-note);
  border-radius: 8px;
}

.movie-card h3 {
  margin: 12px 0 5px;
  font-size: 16px;
  font-weight: 800;
  color: var(--momo-text);
  word-break: keep-all;
}

.movie-card p {
  margin-bottom: 0;
  color: var(--momo-muted);
  font-size: 13px;
}

.movie-card .movie-info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 5px;
}

.movie-release-date,
.movie-audience-info p {
  margin: 6px 0;
  color: var(--momo-muted);
  font-size: 12px;
}

.movie-audience-info {
  margin: 12px 0;
}

.movie-audience-info strong {
  color: var(--momo-text);
}

.movie-review-button,
.movie-like-button {
  width: 100%;
  padding: 11px;
  margin-top: 8px;
  border: 1px solid var(--momo-note-border);
  border-radius: 8px;
  background: var(--momo-note);
  color: var(--momo-text);
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.movie-review-button:hover,
.movie-like-button:hover {
  background: var(--momo-accent);
  color: var(--momo-accent-ink);
}

.poster-frame {
  position: relative;
  overflow: hidden;
  aspect-ratio: 2 / 3;
  background: var(--momo-note);
  border-radius: 8px;
}

.poster-frame .movie-poster {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.poster-rank {
  position: absolute;
  z-index: 2;
  top: 10px;
  left: 10px;
  padding: 5px 10px;
  color: var(--momo-accent-ink);
  background: var(--momo-accent);
  border: 1px solid rgba(0,0,0,0.05);
  border-radius: 6px;
  font-size: 12px;
  font-weight: 800;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.poster-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  min-height: 220px;
  aspect-ratio: 2 / 3;
  padding: 12px;
  color: var(--momo-muted);
  background: var(--momo-note);
  border: 1px dashed var(--momo-border);
  border-radius: 8px;
  text-align: center;
  overflow-wrap: anywhere;
}

.placeholder-mark {
  font-size: 36px;
  font-weight: 800;
}

.movie-message {
  padding: 30px 10px;
  color: var(--momo-muted);
  text-align: center;
  font-weight: 600;
}

.error-message {
  color: var(--momo-danger);
}

/* ========================================
   MOMO 영화 상세 페이지 (.movie-detail-page)
======================================== */
.movie-detail-page {
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding-bottom: 64px;
  color: var(--momo-text);
}

.detail-back-button {
  padding: 11px 18px;
  margin: 10px 0 24px;
  border: 1px solid var(--momo-border);
  border-radius: 8px;
  background: var(--momo-surface);
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0,0,0,0.02);
  transition: background 0.15s ease;
}

.detail-back-button:hover {
  background: var(--momo-note);
}

.movie-detail-header {
  display: grid;
  grid-template-columns: minmax(240px, 320px) minmax(0, 1fr);
  gap: clamp(24px, 3vw, 40px);
  padding: clamp(22px, 3vw, 36px);
  background: linear-gradient(145deg, var(--momo-surface), var(--momo-surface-raised));
  border: 1px solid var(--momo-border);
  border-radius: var(--momo-radius-lg);
  box-shadow: var(--momo-shadow-sm);
}

.movie-detail-header-no-poster {
  grid-template-columns: minmax(0, 1fr);
}

.movie-detail-poster {
  width: 100%;
  overflow: hidden;
  aspect-ratio: 2 / 3;
  background: var(--momo-note);
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
}

.movie-detail-poster img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.movie-detail-info {
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

.movie-detail-info h1 {
  margin: 0 0 8px;
  font-size: clamp(25px, 3vw, 34px);
  overflow-wrap: anywhere;
  font-weight: 800;
}

.movie-detail-info > p:not(.eyebrow) {
  margin: 0;
  color: var(--momo-muted);
  font-size: 14px;
}

.movie-rating-panel {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  margin-top: 18px;
  padding: 20px 22px;
  background: linear-gradient(135deg, var(--momo-note), #FFFDF6);
  border: 1px solid var(--momo-note-border);
  border-radius: 16px;
}

.rating-label {
  color: var(--momo-muted);
  font-size: 12px;
  font-weight: 700;
}

.movie-rating-number {
  color: var(--momo-text);
  font-size: 36px;
  font-weight: 900;
  margin: 6px 0;
}

.movie-rating-panel small {
  color: var(--momo-muted);
  font-size: 12px;
}

.detail-reaction-counts {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 10px;
}

.detail-reaction-count {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 14px;
  background: var(--momo-surface);
  border: 1px solid var(--momo-border);
  border-radius: 8px;
}

.detail-reaction-count span {
  font-size: 13px;
  color: var(--momo-muted);
}

.detail-reaction-count strong {
  font-size: 18px;
}

.detail-content-section {
  margin-top: 28px;
  padding: clamp(22px, 3vw, 32px);
  background: var(--momo-surface);
  border: 1px solid var(--momo-border);
  border-radius: var(--momo-radius-lg);
  box-shadow: var(--momo-shadow-sm);
}

.detail-content-section > h2 {
  margin: 0 0 22px;
  font-size: 22px;
  font-weight: 800;
}

.people-group + .people-group {
  margin-top: 28px;
  padding-top: 24px;
  border-top: 1px solid var(--momo-border);
}

.people-group h3 {
  margin: 0 0 14px;
  font-size: 16px;
  font-weight: 750;
}

.people-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.person-chip {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 10px 15px;
  color: var(--momo-text);
  background: var(--momo-note);
  border: 1px solid var(--momo-note-border);
  border-radius: 8px;
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
}

.person-chip:hover {
  background: var(--momo-accent);
  color: var(--momo-accent-ink);
}

.person-chip > span {
  color: var(--momo-accent-ink);
  font-size: 11px;
}

.person-role {
  padding-left: 8px;
  border-left: 1px solid var(--momo-note-border);
  color: var(--momo-muted);
  font-size: 12px;
}

.people-empty {
  margin: 0;
  padding: 16px;
  color: var(--momo-muted);
  background: var(--momo-bg);
  border: 1px dashed var(--momo-border);
  border-radius: 8px;
  font-size: 13px;
  line-height: 1.7;
}

.person-filmography {
  margin-top: 24px;
  padding: 24px;
  border-left: 5px solid var(--momo-accent);
  background: var(--momo-note);
  border: 1px solid var(--momo-note-border);
  border-radius: var(--momo-radius);
}

.filmography-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  padding-left: 0;
  list-style: none;
}

.filmography-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-width: 0;
  padding: 14px;
  background: var(--momo-surface);
  border: 1px solid var(--momo-note-border);
  border-radius: 8px;
}

.filmography-item strong {
  min-width: 0;
  font-size: 13px;
  overflow-wrap: anywhere;
}

.filmography-item span {
  flex-shrink: 0;
  color: var(--momo-muted);
  font-size: 12px;
}


/* Spatial cinema composition — movie detail */
.movie-detail-page { max-width: 1440px; padding-bottom: 96px; }
.movie-detail-header {
  position: relative;
  isolation: isolate;
  grid-template-columns: minmax(220px,310px) minmax(0,1fr);
  align-items: center;
  gap: clamp(28px,5vw,76px);
  min-height: 500px;
  padding: clamp(28px,4.5vw,64px);
  overflow: hidden;
  border: 1px solid rgba(255,255,255,.82);
  border-radius: 28px;
  background:
    radial-gradient(ellipse at 90% 10%,rgba(255,212,59,.22),transparent 28rem),
    repeating-linear-gradient(0deg,rgba(91,78,50,.025) 0 1px,transparent 1px 5px),
    linear-gradient(135deg,#FFFEFA,#F1E8D8);
  box-shadow: 0 28px 68px rgba(54,45,28,.12);
}
.movie-detail-header::after {
  content: "NOW SHOWING";
  position: absolute;
  z-index: -1;
  right: -22px;
  bottom: 22px;
  color: rgba(118,90,10,.07);
  font: 900 clamp(58px,10vw,150px)/.9 ui-monospace,monospace;
  letter-spacing: -.09em;
  white-space: nowrap;
}
.movie-detail-poster {
  position: relative;
  z-index: 1;
  width: min(100%,310px);
  aspect-ratio: 2 / 3;
  border: 8px solid rgba(255,254,250,.94);
  border-radius: 5px;
  box-shadow: 0 26px 50px rgba(35,29,18,.25),0 0 0 1px rgba(41,40,32,.12);
  transform: rotate(-2deg);
  transition: transform .4s cubic-bezier(.2,.7,.2,1);
}
.movie-detail-poster:hover { transform: rotate(0) translateY(-5px); }
.movie-detail-info { position: relative; z-index: 1; gap: 14px; }
.movie-detail-info h1 { max-width: 900px; font-size: clamp(34px,5vw,68px); line-height: 1.04; letter-spacing: -.065em; }
.movie-detail-info > p:not(.eyebrow) { color: #625B4E; font-size: 14px; }
.movie-detail-page .detail-content-section {
  position: relative;
  margin-top: 24px;
  padding: clamp(24px,3.2vw,42px);
  border: 1px solid rgba(229,222,209,.86);
  border-radius: 22px;
  background: rgba(255,254,250,.78);
  box-shadow: 0 14px 34px rgba(54,45,28,.055);
  backdrop-filter: blur(14px);
}
.movie-detail-page .detail-content-section > h2 { display:flex; align-items:center; gap:12px; font-size:clamp(20px,2.2vw,28px); letter-spacing:-.05em; }
.movie-detail-page .detail-content-section > h2::before { content:""; width:22px; height:3px; border-radius:3px; background:#FFD43B; }
.movie-detail-page .person-chip { border-radius:6px 14px 6px 14px; background:linear-gradient(135deg,#FFFEFA,#FFF7DF); box-shadow:0 5px 14px rgba(54,45,28,.055); transition:transform .2s ease,box-shadow .2s ease; }
.movie-detail-page .person-chip:hover { transform:translateY(-3px); box-shadow:0 12px 24px rgba(54,45,28,.1); }
@media(max-width:700px) { .movie-detail-header { grid-template-columns:1fr; min-height:0; padding:20px; gap:24px; } .movie-detail-poster { width:min(62%,240px); margin:0 auto; } .movie-detail-info h1 { font-size:34px; } }

`;

export default HomeAndMovieStyles;
