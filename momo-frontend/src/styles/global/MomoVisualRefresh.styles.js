import { createGlobalStyle } from "styled-components";

/**
 * MOMO visual refresh
 * 기존 DOM, className, 컴포넌트와 기능은 유지하고 표현 계층만 덮어씁니다.
 * Liquid Glass + Tactile Realism + Reality Warp
 */
const MomoVisualRefreshStyles = createGlobalStyle`
  :root {
    color-scheme: dark;
    --momo-bg: #090d18;
    --momo-surface: rgba(22, 29, 48, .72);
    --momo-border: rgba(202, 218, 255, .16);
    --momo-text: #f4f5fb;
    --momo-muted: #a6afc5;
    --momo-accent: #f6d66b;
    --momo-accent-ink: #29210b;
    --momo-note: rgba(255, 255, 255, .075);
    --momo-note-border: rgba(255, 255, 255, .16);
    --momo-shadow: 0 22px 70px rgba(0, 0, 0, .34);
    --momo-radius: 20px;
    --momo-glass: linear-gradient(145deg, rgba(255,255,255,.13), rgba(255,255,255,.035));
    --momo-glass-edge: inset 0 1px 0 rgba(255,255,255,.18);
  }

  html { background: var(--momo-bg); scroll-behavior: smooth; }
  body {
    color: var(--momo-text);
    background:
      radial-gradient(ellipse at 12% 8%, rgba(93, 75, 190, .26), transparent 34rem),
      radial-gradient(ellipse at 88% 18%, rgba(31, 147, 177, .18), transparent 32rem),
      radial-gradient(ellipse at 55% 88%, rgba(185, 94, 139, .12), transparent 38rem),
      #090d18;
    background-attachment: fixed;
  }
  body::before {
    content: "";
    position: fixed;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    opacity: .17;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.82' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.2'/%3E%3C/svg%3E");
    mix-blend-mode: soft-light;
  }
  ::selection { color: #10131e; background: #f6d66b; }
  :focus-visible { outline: 2px solid #f6d66b !important; outline-offset: 3px; }
  button, input, textarea, select { font-family: inherit; }
  button { transition: transform .22s ease, border-color .22s ease, background .22s ease, box-shadow .22s ease; }
  button:disabled { opacity: .48; cursor: not-allowed; }

  /* App shell and navigation */
  header:not(.review-comment-heading) {
    border-color: rgba(210,222,255,.12);
  }
  nav a { transition: color .2s ease, opacity .2s ease; }
  main { color: var(--momo-text); }
  footer { color: var(--momo-muted); }

  /* Shared visual surfaces */
  .home-page .hero-banner,
  .all-reviews-card,
  .review-detail-card,
  .profile-card,
  .favorite-page-card,
  .my-reviews-card,
  .liked-reviews-card,
  .signup-card,
  .review-modal,
  .review-comment-card,
  .community-review,
  .review-detail-movie,
  .favorite-page-container,
  .profile-activity-item {
    color: var(--momo-text);
    background: var(--momo-glass);
    border: 1px solid var(--momo-border);
    border-radius: var(--momo-radius);
    box-shadow: var(--momo-shadow), var(--momo-glass-edge);
    backdrop-filter: blur(24px) saturate(145%);
    -webkit-backdrop-filter: blur(24px) saturate(145%);
  }

  .home-page .hero-banner {
    isolation: isolate;
    overflow: hidden;
    background:
      radial-gradient(ellipse at 80% 15%, rgba(119,104,255,.28), transparent 45%),
      radial-gradient(ellipse at 12% 100%, rgba(50,190,207,.18), transparent 48%),
      var(--momo-glass);
  }
  .home-page .hero-banner::before {
    width: 3px;
    background: linear-gradient(180deg, #f6d66b, #a58bff, #64d5d2);
    box-shadow: 0 0 24px rgba(165,139,255,.55);
  }
  .home-page .hero-content h1,
  .all-reviews-heading,
  .review-detail-title,
  .profile-heading,
  .my-reviews-heading,
  .liked-reviews-heading,
  .favorite-page-heading,
  .search-heading h1 {
    color: #f6f5ff;
    letter-spacing: -.045em;
  }
  .home-page .hero-description,
  .home-page .section-description,
  .home-page .community-review small,
  .all-reviews-description,
  .review-detail-meta,
  .review-detail-updated,
  .profile-user-info,
  .my-review-date,
  .liked-review-meta { color: var(--momo-muted); }

  /* Translucent navigation and controls */
  .momo-search-form,
  .momo-search-dropdown,
  .home-page .home-search,
  .all-reviews-search,
  .all-reviews-search-input,
  .all-reviews-search-select,
  .review-write-content,
  .review-title-field,
  .review-content-field,
  .review-comment-form,
  .review-edit-area,
  .signup-field,
  .profile-form input,
  .profile-form textarea,
  .profile-form select,
  .search-input {
    color: var(--momo-text);
    background: rgba(10, 15, 29, .68);
    border: 1px solid rgba(196,211,255,.18);
    border-radius: 14px;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.055);
    backdrop-filter: blur(18px);
  }
  input, textarea, select { color: var(--momo-text); }
  input::placeholder, textarea::placeholder { color: #78839c; opacity: 1; }
  input:focus, textarea:focus, select:focus {
    border-color: rgba(246,214,107,.72) !important;
    box-shadow: 0 0 0 3px rgba(246,214,107,.12), 0 0 24px rgba(115,100,255,.12) !important;
    outline: none;
  }
  .momo-search-result {
    color: var(--momo-text);
    background: rgba(18,25,42,.96);
    border-color: rgba(196,211,255,.09);
  }
  .momo-search-result:hover, .momo-search-result.is-active { background: rgba(108,97,177,.24); }
  .momo-search-title, .review-title-link, .all-reviews-table,
  .review-movie-title, .review-detail-movie-info { color: var(--momo-text); }

  /* Tactile buttons */
  .outline-button, .like-button, .movie-review-button, .movie-like-button,
  .recommend-button, .all-reviews-search-submit, .all-reviews-search-reset,
  .profile-button, .favorite-browse-button, .favorite-back-button,
  .review-action-button, .review-like-button, .review-dislike-button,
  .comment-like-button, .comment-dislike-button, .signup-submit,
  .review-write-toggle, .review-form-actions button, .review-edit-buttons button,
  .all-reviews-pagination button, .my-reviews-pagination button,
  .liked-reviews-pagination button, .favorite-page-open-button,
  .home-favorites-more, .retry-button {
    color: #211b0a;
    background: linear-gradient(145deg, #ffe99a, #e9c65a);
    border: 1px solid rgba(255,244,190,.72);
    border-radius: 13px;
    box-shadow: 0 5px 0 rgba(117,88,20,.45), 0 12px 26px rgba(0,0,0,.2), inset 0 1px 0 rgba(255,255,255,.8);
    font-weight: 750;
  }
  .outline-button:hover, .like-button:hover, .movie-review-button:hover,
  .movie-like-button:hover, .recommend-button:hover, .profile-button:hover,
  .favorite-browse-button:hover, .review-action-button:hover,
  .signup-submit:hover, .review-write-toggle:hover,
  .all-reviews-pagination button:hover, .my-reviews-pagination button:hover,
  .liked-reviews-pagination button:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 0 rgba(117,88,20,.36), 0 18px 34px rgba(0,0,0,.3), 0 0 24px rgba(246,214,107,.16);
  }
  .profile-button-secondary, .review-action-button.delete,
  .all-reviews-search-reset {
    color: #e2e7f5;
    background: rgba(255,255,255,.075);
    border: 1px solid rgba(210,222,255,.17);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.08);
  }
  .reaction-button, .review-like-button, .comment-like-button { border-radius: 999px; }
  .selected-like { box-shadow: 0 0 0 2px rgba(246,214,107,.28), 0 0 24px rgba(246,214,107,.16); }

  /* Movie imagery: tactile film frames */
  .poster-frame, .poster-wrap, .favorite-page-poster, .liked-review-poster,
  .my-review-poster, .all-review-poster, .review-detail-movie-poster,
  .movie-poster, .momo-search-poster {
    overflow: hidden;
    border: 1px solid rgba(224,231,255,.22);
    border-radius: 13px;
    background: #151b2d;
    box-shadow: 0 12px 32px rgba(0,0,0,.34), 0 0 0 1px rgba(255,255,255,.035);
  }
  .movie-grid .movie-card, .home-page .movie-card, .favorite-page-card,
  .liked-review-item, .my-review-item, .all-reviews-mobile-item {
    transition: transform .28s ease, filter .28s ease;
  }
  .movie-grid .movie-card:hover, .home-page .movie-card:hover,
  .favorite-page-card:hover, .liked-review-item:hover, .my-review-item:hover {
    transform: translateY(-5px);
    filter: drop-shadow(0 14px 24px rgba(0,0,0,.25));
  }
  .movie-info h3, .movie-info p, .favorite-page-movie-info,
  .liked-review-movie, .my-review-movie { color: var(--momo-text); }
  .poster-rank, .rank { text-shadow: 0 3px 14px rgba(0,0,0,.8); }

  /* Movie detail / people */
  .movie-detail-page, .person-detail-page, .search-page,
  .all-reviews-page, .review-detail-page, .profile-page,
  .my-reviews-page, .liked-reviews-page, .favorite-page {
    color: var(--momo-text);
  }
  .movie-detail-header, .movie-detail-header-no-poster,
  .detail-content-section, .person-filmography,
  .review-detail-content-section, .review-write-section {
    color: var(--momo-text);
    border-color: rgba(205,218,255,.14);
  }
  .movie-detail-info h1, .movie-detail-info h2, .detail-content-section h2,
  .people-group h3, .person-filmography h2 { color: #f6f5ff; }
  .person-chip { color: #e9e7ff; background: rgba(133,119,219,.18); border: 1px solid rgba(176,164,255,.25); }
  .person-role, .movie-release-date, .movie-audience-info { color: var(--momo-muted); }

  /* Review surfaces */
  .all-reviews-table-wrap { overflow: hidden; border: 1px solid var(--momo-border); border-radius: 18px; background: rgba(14,20,35,.62); }
  .all-reviews-table th { color: #bfc8df; background: rgba(255,255,255,.06); border-color: var(--momo-border); }
  .all-reviews-table td { color: #e9ecf6; border-color: rgba(205,218,255,.1); }
  .all-reviews-table tr:hover, .review-clickable-row:hover { background: rgba(141,126,231,.1); }
  .review-detail-content, .review-comment-content, .my-review-info,
  .liked-review-content { color: #e8eaf4; line-height: 1.8; }
  .review-comment-item { border-color: rgba(205,218,255,.12); }
  .review-comment-avatar, .profile-avatar { border: 1px solid rgba(255,255,255,.25); box-shadow: 0 5px 18px rgba(0,0,0,.25); }
  .review-detail-back, .favorite-back-button { color: #e9e7ff; }

  /* Surreal cinematic feature banner */
  .recommend-banner { isolation: isolate; }
  .recommend-banner::after, .feature-visual::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(115deg, transparent 20%, rgba(137,126,255,.16) 48%, transparent 72%);
    mix-blend-mode: screen;
  }
  .recommend-overlay {
    background: linear-gradient(90deg, rgba(5,8,18,.92), rgba(5,8,18,.48) 58%, rgba(5,8,18,.08)) !important;
  }
  .recommend-label { color: #251d08; background: linear-gradient(135deg,#fff0b6,#e7c65e); border: 1px solid rgba(255,255,255,.65); }
  .recommend-title { color: #fff; text-shadow: 0 5px 24px rgba(0,0,0,.5); }

  /* Status, empty states and pagination */
  .state-message, .empty-review-panel, .all-reviews-state,
  .my-reviews-state, .liked-reviews-state, .favorite-page-empty,
  .movie-message, .review-detail-state {
    color: var(--momo-muted);
    background: rgba(255,255,255,.045);
    border: 1px dashed rgba(205,218,255,.2);
    border-radius: 16px;
  }
  .all-reviews-pagination button.active, .my-reviews-pagination button.active,
  .liked-reviews-pagination button.active {
    color: #17192a;
    background: #f6d66b;
    border-color: #f6d66b;
  }
  .all-reviews-pagination button:disabled, .my-reviews-pagination button:disabled,
  .liked-reviews-pagination button:disabled { opacity: .35; }

  /* Toast and chat float above the scene */
  .momo-toast, .chat-panel {
    color: var(--momo-text);
    background: rgba(19,26,44,.86);
    border: 1px solid rgba(221,229,255,.2);
    box-shadow: 0 24px 70px rgba(0,0,0,.48);
    backdrop-filter: blur(28px) saturate(150%);
  }
  .momo-toast-copy strong { color: #fff; }
  .chat-panel { border-radius: 22px; }
  .chat-header { color: #fff; background: rgba(112,99,186,.34); }
  .chat-message-input { color: var(--momo-text); background: rgba(255,255,255,.08); }

  /* Scrollbars */
  * { scrollbar-color: rgba(166,177,211,.36) rgba(255,255,255,.035); scrollbar-width: thin; }
  *::-webkit-scrollbar { width: 9px; height: 9px; }
  *::-webkit-scrollbar-track { background: rgba(255,255,255,.025); }
  *::-webkit-scrollbar-thumb { background: rgba(166,177,211,.32); border: 2px solid transparent; background-clip: padding-box; border-radius: 99px; }

  @media (max-width: 768px) {
    body { background-attachment: scroll; }
    .home-page .hero-banner { border-radius: 18px; }
    .all-reviews-card, .review-detail-card, .profile-card,
    .favorite-page-card, .my-reviews-card, .liked-reviews-card { border-radius: 16px; }
  }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; animation-duration: .01ms !important; animation-iteration-count: 1 !important; }
  }
`;

export default MomoVisualRefreshStyles;
