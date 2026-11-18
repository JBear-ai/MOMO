import { createGlobalStyle } from "styled-components";

/*
 * MOMO reference-led glass material layer.
 * Notebook paper remains the only canvas. UI surfaces use thick, milky glass;
 * floating controls use a brighter, more refractive liquid-glass treatment.
 */
const MomoReferenceLiquidGlassStyles = createGlobalStyle`
  :root {
    --momo-glass-paper: rgba(255, 253, 247, .94);
    --momo-glass-paper-strong: rgba(255, 255, 252, .975);
    --momo-glass-paper-warm: rgba(255, 248, 225, .94);
    --momo-glass-stroke: rgba(255, 255, 255, .98);
    --momo-glass-stroke-warm: rgba(224, 195, 112, .42);
    --momo-glass-shadow:
      0 2px 5px rgba(73, 57, 22, .035),
      0 12px 28px rgba(73, 57, 22, .075),
      0 26px 54px rgba(73, 57, 22, .045),
      inset 0 1px 0 rgba(255,255,255,1),
      inset 0 -1px 0 rgba(214,180,63,.16);
    --momo-glass-shadow-hover:
      0 5px 10px rgba(73,57,22,.05),
      0 18px 38px rgba(73,57,22,.11),
      0 30px 60px rgba(73,57,22,.06),
      inset 0 1px 0 rgba(255,255,255,1),
      inset 0 -1px 0 rgba(214,180,63,.24);
    --momo-glass-filter: blur(28px) saturate(175%);
    --momo-glass-control-filter: blur(22px) saturate(190%);
    --momo-glass-radius: 22px;
    --momo-glass-motion: 240ms cubic-bezier(.2,.72,.2,1);
  }

  /* Floating navigation: a separate, brighter functional glass layer. */
  #root .momo-app-header {
    position: sticky;
    isolation: isolate;
    background:
      linear-gradient(112deg, rgba(255,255,255,.98) 0%, rgba(255,255,255,.88) 38%, rgba(255,248,225,.86) 100%) !important;
    border: 1px solid rgba(255,255,255,.98) !important;
    border-bottom-color: rgba(218,190,111,.34) !important;
    box-shadow: 0 10px 34px rgba(72,57,24,.095), inset 0 1px 0 #fff, inset 0 -1px 0 rgba(214,180,63,.16) !important;
    -webkit-backdrop-filter: blur(34px) saturate(190%) !important;
    backdrop-filter: blur(34px) saturate(190%) !important;
  }
  #root .momo-app-header nav a {
    position: relative;
    border: 1px solid rgba(255,255,255,.96) !important;
    background: linear-gradient(150deg, rgba(255,255,255,.96), rgba(255,250,235,.88)) !important;
    box-shadow: 0 2px 7px rgba(72,57,24,.055), inset 0 1px 0 #fff, inset 0 -1px 0 rgba(214,180,63,.12) !important;
    -webkit-backdrop-filter: var(--momo-glass-control-filter) !important;
    backdrop-filter: var(--momo-glass-control-filter) !important;
    transition: transform var(--momo-glass-motion), box-shadow var(--momo-glass-motion), background var(--momo-glass-motion) !important;
  }
  #root .momo-app-header nav a.active {
    background: linear-gradient(145deg, #fff 0%, rgba(255,248,222,.98) 58%, rgba(255,229,139,.92) 100%) !important;
    border-color: rgba(255,255,255,1) !important;
    box-shadow: 0 3px 10px rgba(104,78,16,.1), inset 0 1px 0 #fff, inset 0 -1px 0 rgba(214,180,63,.3) !important;
  }
  #root .momo-app-header nav a:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 15px rgba(72,57,24,.11), inset 0 1px 0 #fff !important;
  }

  /* Dense content glass: opaque enough for long-form text and data. */
  #root .home-feature-section,
  #root .home-feature-info,
  #root .home-brand-line,
  #root .home-favorites-empty,
  #root .home-section,
  #root .search-page-heading,
  #root .search-filter-panel,
  #root .search-movie-card,
  #root .search-message,
  #root .favorite-page-heading,
  #root .favorite-page-card,
  #root .favorite-page-empty,
  #root .profile-dashboard-heading,
  #root .profile-card,
  #root .profile-overview-card,
  #root .profile-activity-section,
  #root .profile-activity-item,
  #root .profile-delete-section,
  #root .profile-edit-heading,
  #root .profile-edit-card,
  #root .profile-edit-photo-card,
  #root .profile-edit-details,
  #root .profile-delete-page-card,
  #root .all-reviews-heading,
  #root .all-reviews-card,
  #root .all-reviews-search,
  #root .all-reviews-state,
  #root .my-reviews-heading,
  #root .my-reviews-card,
  #root .liked-reviews-heading,
  #root .liked-reviews-card,
  #root .review-detail-card,
  #root .review-detail-movie,
  #root .review-detail-content,
  #root .review-comment-card,
  #root .review-comment-form,
  #root .movie-detail-page .movie-detail-header,
  #root .movie-detail-page .detail-content-section,
  #root .movie-detail-page .movie-rating-panel,
  #root .movie-detail-page .rating-distribution,
  #root .movie-detail-page .movie-score-display,
  #root .movie-detail-page .detail-reaction-counts,
  #root .movie-detail-page .people-section,
  #root .movie-detail-page .detail-review-card,
  #root .movie-detail-page .review-write-section,
  #root .person-detail-page .person-detail-header,
  #root .person-detail-page .person-filmography,
  #root .signup-page .signup-card,
  #root .login-page .login-card {
    position: relative;
    background-color: var(--momo-glass-paper) !important;
    background-image:
      linear-gradient(128deg, rgba(255,255,255,.99) 0%, rgba(255,255,255,.93) 24%, rgba(255,251,237,.92) 68%, rgba(255,246,215,.9) 100%),
      radial-gradient(ellipse at 8% 0%, rgba(255,255,255,.9), transparent 62%) !important;
    border-color: var(--momo-glass-stroke) !important;
    box-shadow: var(--momo-glass-shadow) !important;
    -webkit-backdrop-filter: var(--momo-glass-filter) !important;
    backdrop-filter: var(--momo-glass-filter) !important;
  }

  /* Feature content and nested information planes have their own glass depth. */
  #root .home-feature-info,
  #root .profile-overview-card,
  #root .profile-activity-section,
  #root .profile-delete-section,
  #root .detail-content-section,
  #root .movie-rating-panel,
  #root .rating-distribution,
  #root .movie-score-display,
  #root .detail-reaction-counts,
  #root .people-section,
  #root .review-detail-content,
  #root .review-detail-movie {
    background:
      linear-gradient(145deg, rgba(255,255,255,.985), rgba(255,253,245,.955) 52%, rgba(255,247,220,.94)) !important;
    box-shadow:
      0 3px 8px rgba(73,57,22,.045),
      0 10px 24px rgba(73,57,22,.065),
      inset 0 1px 0 #fff,
      inset 0 -1px 0 rgba(214,180,63,.14) !important;
  }

  /* Glass edge optics: fine double rim and a restrained warm refraction line. */
  #root .home-feature-section,
  #root .home-brand-line,
  #root .home-favorites-empty,
  #root .search-page-heading,
  #root .search-movie-card,
  #root .favorite-page-card,
  #root .profile-card,
  #root .profile-overview-card,
  #root .profile-activity-section,
  #root .profile-delete-section,
  #root .all-reviews-card,
  #root .my-reviews-card,
  #root .liked-reviews-card,
  #root .review-detail-card,
  #root .movie-detail-page .movie-detail-header,
  #root .movie-detail-page .movie-rating-panel,
  #root .movie-detail-page .detail-content-section {
    border: 1px solid rgba(255,255,255,.99) !important;
    outline: 1px solid rgba(214,180,63,.13);
    outline-offset: -3px;
  }

  /* Smaller information tiles and metadata chips remain glass, not flat paper. */
  #root .home-movie-card,
  #root .home-movie-info,
  #root .profile-stat-card,
  #root .profile-activity-item,
  #root .movie-meta-item,
  #root .movie-genre-chip,
  #root .person-chip,
  #root .detail-reaction-count,
  #root .rating-distribution-row,
  #root .review-list-item,
  #root .all-reviews-mobile-item,
  #root .all-reviews-page-info,
  #root .review-detail-reaction,
  #root .review-comment-item,
  #root .momo-search-result,
  #root .momo-search-dropdown,
  #root .momo-toast {
    background: linear-gradient(145deg, rgba(255,255,255,.97), rgba(255,250,233,.93)) !important;
    border-color: rgba(255,255,255,.99) !important;
    box-shadow: 0 3px 10px rgba(73,57,22,.055), inset 0 1px 0 #fff, inset 0 -1px 0 rgba(214,180,63,.1) !important;
    -webkit-backdrop-filter: var(--momo-glass-control-filter) !important;
    backdrop-filter: var(--momo-glass-control-filter) !important;
  }

  /* Buttons: convex glass with a bright crown, dark lower bevel and tactile response. */
  #root .momo-app-main button,
  #root .momo-app-header button,
  #root .momo-app-footer button,
  #root .momo-chat-launcher,
  #root .signup-page button,
  #root .login-page button {
    position: relative;
    isolation: isolate;
    border: 1px solid rgba(255,255,255,1) !important;
    background:
      linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,.96) 34%, rgba(255,250,232,.95) 100%) !important;
    box-shadow:
      0 2px 5px rgba(73,57,22,.055),
      0 7px 16px rgba(73,57,22,.075),
      inset 0 1px 0 #fff,
      inset 0 -1px 0 rgba(214,180,63,.2) !important;
    -webkit-backdrop-filter: var(--momo-glass-control-filter) !important;
    backdrop-filter: var(--momo-glass-control-filter) !important;
    transition: transform var(--momo-glass-motion), box-shadow var(--momo-glass-motion), filter var(--momo-glass-motion), background var(--momo-glass-motion) !important;
  }
  #root .momo-app-main button::before,
  #root .momo-app-header button::before,
  #root .momo-app-footer button::before,
  #root .momo-chat-launcher::before,
  #root .signup-page button::before,
  #root .login-page button::before {
    position: absolute;
    z-index: -1;
    top: 1px;
    left: 12%;
    width: 76%;
    height: 1px;
    content: "";
    border-radius: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,1), transparent);
    pointer-events: none;
  }
  #root .momo-app-main button:hover:not(:disabled),
  #root .momo-app-header button:hover:not(:disabled),
  #root .momo-app-footer button:hover:not(:disabled),
  #root .momo-chat-launcher:hover,
  #root .signup-page button:hover:not(:disabled),
  #root .login-page button:hover:not(:disabled) {
    transform: translateY(-1px);
    filter: saturate(1.06) brightness(1.015);
    box-shadow: var(--momo-glass-shadow-hover) !important;
  }
  #root .momo-app-main button:active:not(:disabled),
  #root .momo-app-header button:active:not(:disabled),
  #root .momo-app-footer button:active:not(:disabled),
  #root .signup-page button:active:not(:disabled),
  #root .login-page button:active:not(:disabled) {
    transform: translateY(0) scale(.985);
    box-shadow: inset 0 2px 6px rgba(73,57,22,.12), inset 0 1px 0 #fff !important;
  }

  /* Gold is a refracted tint inside the glass, not a flat yellow fill. */
  #root .momo-app-main button[class*="primary"],
  #root .momo-app-main button[class*="submit"],
  #root .momo-app-main .all-reviews-search-submit,
  #root .momo-app-main .profile-edit-submit,
  #root .momo-app-main .favorite-browse-button,
  #root .momo-app-main .recommend-button,
  #root .signup-page .signup-submit,
  #root .login-page .login-submit {
    color: #51400F !important;
    background:
      linear-gradient(180deg, rgba(255,255,255,.99), rgba(255,249,224,.97) 38%, rgba(255,226,133,.94) 100%) !important;
    box-shadow:
      0 3px 8px rgba(124,91,14,.09),
      0 9px 18px rgba(124,91,14,.09),
      inset 0 1px 0 #fff,
      inset 0 -1px 0 rgba(190,143,20,.25) !important;
  }

  /* Inputs and selects: milky optical glass with a recessed inner well. */
  #root .momo-app-main input:not([type="checkbox"]):not([type="radio"]),
  #root .momo-app-main textarea,
  #root .momo-app-main select,
  #root .momo-app-header input,
  #root .signup-page input,
  #root .login-page input {
    background:
      linear-gradient(180deg, rgba(255,255,255,.99), rgba(255,253,246,.96)) !important;
    border: 1px solid rgba(255,255,255,1) !important;
    box-shadow:
      inset 0 2px 5px rgba(73,57,22,.045),
      inset 0 1px 0 #fff,
      0 2px 7px rgba(73,57,22,.045) !important;
    -webkit-backdrop-filter: blur(18px) saturate(185%) !important;
    backdrop-filter: blur(18px) saturate(185%) !important;
  }
  #root .momo-app-main input:focus,
  #root .momo-app-main textarea:focus,
  #root .momo-app-main select:focus,
  #root .momo-app-header input:focus,
  #root .signup-page input:focus,
  #root .login-page input:focus {
    border-color: rgba(190,143,20,.55) !important;
    box-shadow: 0 0 0 3px rgba(255,212,59,.16), inset 0 1px 0 #fff, 0 5px 14px rgba(73,57,22,.07) !important;
  }

  /* Search overlays, chat windows and toast layers float above the content. */
  #root .momo-app-header .momo-search-dropdown,
  #root .momo-chat-popup,
  #root .momo-chat-window,
  #root .momo-chat-panel,
  #root .momo-toast,
  #root [role="dialog"],
  #root [role="listbox"] {
    background: linear-gradient(145deg, rgba(255,255,255,.985), rgba(255,250,231,.965)) !important;
    border: 1px solid rgba(255,255,255,1) !important;
    box-shadow: 0 18px 48px rgba(73,57,22,.16), inset 0 1px 0 #fff, inset 0 -1px 0 rgba(214,180,63,.16) !important;
    -webkit-backdrop-filter: blur(34px) saturate(190%) !important;
    backdrop-filter: blur(34px) saturate(190%) !important;
  }

  /* Poster art and the ruled-paper canvas must stay untouched. */
  #root .momo-app-main img,
  #root .momo-app-main video,
  #root .momo-app-main canvas,
  #root .momo-app-main picture,
  #root .momo-app-main svg {
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
  }
  #root .momo-app-main .search-poster-frame,
  #root .momo-app-main .favorite-page-poster,
  #root .momo-app-main .movie-detail-poster,
  #root .momo-app-main .recommend-banner,
  #root .momo-app-main .recommend-poster {
    background-color: transparent;
    box-shadow: none;
    outline: none;
  }

  @media (max-width: 700px) {
    #root .home-feature-section,
    #root .profile-card,
    #root .profile-overview-card,
    #root .profile-activity-section,
    #root .profile-delete-section,
    #root .all-reviews-card,
    #root .my-reviews-card,
    #root .liked-reviews-card,
    #root .review-detail-card,
    #root .movie-detail-page .movie-detail-header,
    #root .movie-detail-page .movie-rating-panel,
    #root .movie-detail-page .detail-content-section {
      border-radius: 18px;
      box-shadow: 0 8px 24px rgba(73,57,22,.075), inset 0 1px 0 #fff !important;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    #root .momo-app-header nav a,
    #root .momo-app-main button,
    #root .momo-app-header button,
    #root .momo-app-footer button {
      transition-duration: .01ms !important;
    }
  }
`;

export default MomoReferenceLiquidGlassStyles;
