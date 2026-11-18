import { createGlobalStyle } from "styled-components";

/*
 * MOMO translucent liquid-glass material.
 * The notebook remains visible through every surface. White is reserved for
 * reflected light and fine edges; it is not used as an opaque panel fill.
 */
const MomoReferenceLiquidGlassStyles = createGlobalStyle`
  :root {
    --momo-glass-surface:
      linear-gradient(132deg, rgba(245,249,247,.34), rgba(222,231,229,.2) 48%, rgba(238,226,216,.17));
    --momo-glass-surface-raised:
      linear-gradient(132deg, rgba(250,252,250,.42), rgba(225,235,232,.25) 54%, rgba(239,228,217,.2));
    --momo-glass-edge: rgba(255,255,255,.68);
    --momo-glass-edge-low: rgba(255,255,255,.34);
    --momo-glass-prism-cyan: rgba(159,213,211,.12);
    --momo-glass-prism-lilac: rgba(194,177,218,.1);
    --momo-glass-prism-amber: rgba(232,205,155,.1);
    --momo-glass-blur: blur(30px) saturate(155%);
    --momo-glass-control-blur: blur(22px) saturate(165%);
    --momo-glass-depth:
      0 2px 5px rgba(38,43,40,.035),
      0 13px 32px rgba(38,43,40,.075),
      inset 0 1px 0 rgba(255,255,255,.78),
      inset 0 -1px 0 rgba(104,120,116,.12);
    --momo-glass-depth-hover:
      0 6px 12px rgba(38,43,40,.05),
      0 20px 42px rgba(38,43,40,.11),
      inset 0 1px 0 rgba(255,255,255,.9),
      inset 0 -1px 0 rgba(104,120,116,.16);
    --momo-glass-transition: 260ms cubic-bezier(.2,.72,.2,1);
  }

  /* Navigation is a floating, clear glass sheet rather than a white bar. */
  #root .momo-app-header {
    position: sticky;
    isolation: isolate;
    background:
      linear-gradient(112deg, rgba(248,251,249,.42), rgba(220,230,228,.24) 54%, rgba(237,225,213,.2)) !important;
    border: 1px solid rgba(255,255,255,.66) !important;
    border-bottom-color: rgba(255,255,255,.42) !important;
    box-shadow: 0 9px 30px rgba(40,46,43,.075), inset 0 1px 0 rgba(255,255,255,.82), inset 0 -1px 0 rgba(121,137,132,.12) !important;
    -webkit-backdrop-filter: blur(34px) saturate(165%) !important;
    backdrop-filter: blur(34px) saturate(165%) !important;
  }
  #root .momo-app-header nav a {
    border: 1px solid rgba(255,255,255,.44) !important;
    background: linear-gradient(145deg, rgba(250,252,251,.3), rgba(215,227,224,.16)) !important;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.62), 0 2px 8px rgba(38,43,40,.035) !important;
    -webkit-backdrop-filter: var(--momo-glass-control-blur) !important;
    backdrop-filter: var(--momo-glass-control-blur) !important;
    transition: transform var(--momo-glass-transition), background var(--momo-glass-transition), box-shadow var(--momo-glass-transition) !important;
  }
  #root .momo-app-header nav a.active {
    background: linear-gradient(145deg, rgba(255,255,255,.48), rgba(225,232,225,.3) 58%, rgba(228,214,190,.2)) !important;
    border-color: rgba(255,255,255,.72) !important;
    box-shadow: 0 3px 12px rgba(38,43,40,.07), inset 0 1px 0 rgba(255,255,255,.88), inset 0 -1px 0 rgba(153,164,153,.12) !important;
  }
  #root .momo-app-header nav a:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(38,43,40,.09), inset 0 1px 0 rgba(255,255,255,.9) !important;
  }

  /* Main content panes: transparent smoke glass with a soft, restrained prism. */
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
    background-color: rgba(222,231,227,.16) !important;
    background-image:
      linear-gradient(126deg, rgba(255,255,255,.24) 0%, transparent 30%, rgba(159,213,211,.075) 56%, rgba(194,177,218,.065) 75%, rgba(232,205,155,.07) 100%),
      radial-gradient(ellipse at 8% 0%, rgba(255,255,255,.3), transparent 52%),
      linear-gradient(145deg, rgba(231,239,235,.29), rgba(220,229,225,.17) 58%, rgba(235,222,207,.15)) !important;
    background-blend-mode: screen, normal, normal !important;
    border-color: var(--momo-glass-edge) !important;
    box-shadow: var(--momo-glass-depth) !important;
    -webkit-backdrop-filter: var(--momo-glass-blur) !important;
    backdrop-filter: var(--momo-glass-blur) !important;
  }

  /* Inner planes sit one step deeper and remain more transparent than cards. */
  #root .home-feature-info,
  #root .profile-overview-card,
  #root .profile-activity-section,
  #root .profile-delete-section,
  #root .movie-detail-page .detail-content-section,
  #root .movie-detail-page .movie-rating-panel,
  #root .movie-detail-page .rating-distribution,
  #root .movie-detail-page .movie-score-display,
  #root .movie-detail-page .detail-reaction-counts,
  #root .movie-detail-page .people-section,
  #root .review-detail-content,
  #root .review-detail-movie {
    background-color: rgba(218,229,224,.13) !important;
    background-image:
      linear-gradient(140deg, rgba(255,255,255,.2), rgba(255,255,255,.035) 42%, rgba(183,204,199,.1) 100%),
      radial-gradient(ellipse at 100% 0%, rgba(194,177,218,.075), transparent 52%) !important;
    box-shadow: 0 3px 8px rgba(38,43,40,.04), 0 10px 24px rgba(38,43,40,.055), inset 0 1px 0 rgba(255,255,255,.62), inset 0 -1px 0 rgba(104,120,116,.1) !important;
  }

  /* Fine optical rim. A subtle cool/warm split hints at glass refraction. */
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
    border: 1px solid rgba(255,255,255,.62) !important;
    outline: 1px solid rgba(172,190,185,.13);
    outline-offset: -3px;
  }

  /* Compact tiles: less blur and less tint, so they do not look like white pills. */
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
    background: linear-gradient(140deg, rgba(248,251,249,.3), rgba(213,226,222,.16) 58%, rgba(232,219,204,.13)) !important;
    border-color: rgba(255,255,255,.48) !important;
    box-shadow: 0 3px 10px rgba(38,43,40,.045), inset 0 1px 0 rgba(255,255,255,.66), inset 0 -1px 0 rgba(104,120,116,.08) !important;
    -webkit-backdrop-filter: var(--momo-glass-control-blur) !important;
    backdrop-filter: var(--momo-glass-control-blur) !important;
  }

  /* Convex glass controls: translucent body, brighter upper rim, soft lower bevel. */
  #root .momo-app-main button,
  #root .momo-app-header button,
  #root .momo-app-footer button,
  #root .momo-chat-launcher,
  #root .signup-page button,
  #root .login-page button {
    position: relative;
    isolation: isolate;
    border: 1px solid rgba(255,255,255,.66) !important;
    background: linear-gradient(180deg, rgba(255,255,255,.4), rgba(220,231,226,.22) 48%, rgba(205,218,212,.17)) !important;
    box-shadow: 0 3px 9px rgba(38,43,40,.055), inset 0 1px 0 rgba(255,255,255,.82), inset 0 -1px 0 rgba(105,123,116,.14) !important;
    -webkit-backdrop-filter: var(--momo-glass-control-blur) !important;
    backdrop-filter: var(--momo-glass-control-blur) !important;
    transition: transform var(--momo-glass-transition), box-shadow var(--momo-glass-transition), filter var(--momo-glass-transition), background var(--momo-glass-transition) !important;
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
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.96), transparent);
    pointer-events: none;
  }
  #root .momo-app-main button:hover:not(:disabled),
  #root .momo-app-header button:hover:not(:disabled),
  #root .momo-app-footer button:hover:not(:disabled),
  #root .momo-chat-launcher:hover,
  #root .signup-page button:hover:not(:disabled),
  #root .login-page button:hover:not(:disabled) {
    transform: translateY(-1px);
    filter: saturate(1.08) brightness(1.035);
    box-shadow: var(--momo-glass-depth-hover) !important;
  }
  #root .momo-app-main button:active:not(:disabled),
  #root .momo-app-header button:active:not(:disabled),
  #root .momo-app-footer button:active:not(:disabled),
  #root .signup-page button:active:not(:disabled),
  #root .login-page button:active:not(:disabled) {
    transform: translateY(0) scale(.985);
    box-shadow: inset 0 2px 6px rgba(38,43,40,.11), inset 0 1px 0 rgba(255,255,255,.76) !important;
  }

  /* Brand actions use a pale champagne transmission, never a flat yellow slab. */
  #root .momo-app-main button[class*="primary"],
  #root .momo-app-main button[class*="submit"],
  #root .momo-app-main .all-reviews-search-submit,
  #root .momo-app-main .profile-edit-submit,
  #root .momo-app-main .favorite-browse-button,
  #root .momo-app-main .recommend-button,
  #root .signup-page .signup-submit,
  #root .login-page .login-submit {
    color: #51451F !important;
    background: linear-gradient(145deg, rgba(255,255,255,.48), rgba(245,225,175,.34) 48%, rgba(209,190,145,.22)) !important;
    box-shadow: 0 4px 12px rgba(95,78,39,.075), inset 0 1px 0 rgba(255,255,255,.86), inset 0 -1px 0 rgba(150,125,69,.15) !important;
  }

  /* Form fields are recessed translucent glass, not white input boxes. */
  #root .momo-app-main input:not([type="checkbox"]):not([type="radio"]),
  #root .momo-app-main textarea,
  #root .momo-app-main select,
  #root .momo-app-header input,
  #root .signup-page input,
  #root .login-page input {
    background: linear-gradient(180deg, rgba(250,252,250,.34), rgba(210,224,218,.2)) !important;
    border: 1px solid rgba(255,255,255,.58) !important;
    box-shadow: inset 0 2px 6px rgba(38,43,40,.055), inset 0 1px 0 rgba(255,255,255,.62), 0 2px 7px rgba(38,43,40,.035) !important;
    -webkit-backdrop-filter: blur(18px) saturate(155%) !important;
    backdrop-filter: blur(18px) saturate(155%) !important;
  }
  #root .momo-app-main input:focus,
  #root .momo-app-main textarea:focus,
  #root .momo-app-main select:focus,
  #root .momo-app-header input:focus,
  #root .signup-page input:focus,
  #root .login-page input:focus {
    border-color: rgba(255,255,255,.82) !important;
    box-shadow: 0 0 0 3px rgba(171,195,190,.18), inset 0 1px 0 rgba(255,255,255,.78), 0 5px 14px rgba(38,43,40,.065) !important;
  }

  /* Floating overlays catch more light and sit above the content plane. */
  #root .momo-app-header .momo-search-dropdown,
  #root .momo-chat-popup,
  #root .momo-chat-window,
  #root .momo-chat-panel,
  #root .momo-toast,
  #root [role="dialog"],
  #root [role="listbox"] {
    background: linear-gradient(140deg, rgba(247,251,249,.56), rgba(213,226,222,.36) 58%, rgba(233,219,205,.28)) !important;
    border: 1px solid rgba(255,255,255,.74) !important;
    box-shadow: 0 18px 48px rgba(38,43,40,.15), inset 0 1px 0 rgba(255,255,255,.88), inset 0 -1px 0 rgba(104,120,116,.13) !important;
    -webkit-backdrop-filter: blur(34px) saturate(170%) !important;
    backdrop-filter: blur(34px) saturate(170%) !important;
  }

  /* Keep poster photography and the paper canvas free of glass filters. */
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
      box-shadow: 0 8px 24px rgba(38,43,40,.075), inset 0 1px 0 rgba(255,255,255,.72) !important;
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
  /* FINAL TRANSLUCENT MATERIAL ENFORCEMENT */
  /* Last in the cascade: legacy page rules must not repaint glass opaque. */
  body {
    background-color: #E9E8E2 !important;
    background-image: linear-gradient(to right, transparent 0, transparent 62px, rgba(157,105,100,.10) 62px, rgba(157,105,100,.10) 63px, transparent 63px), repeating-linear-gradient(to bottom, transparent 0, transparent 31px, rgba(104,126,137,.055) 31px, rgba(104,126,137,.055) 32px), radial-gradient(ellipse at 12% 0%, rgba(255,255,255,.34), transparent 46rem), radial-gradient(ellipse at 88% 18%, rgba(194,177,218,.055), transparent 42rem), linear-gradient(140deg, #EFEEE8 0%, #E9E8E2 56%, #E3E3DD 100%) !important;
    background-attachment: fixed !important;
  }
  #root .momo-app-header, #root .momo-app-footer,
  #root .home-feature-section, #root .home-feature-info, #root .home-brand-line, #root .home-favorites-empty, #root .home-section,
  #root .search-page-heading, #root .search-filter-panel, #root .search-movie-card,
  #root .favorite-page-heading, #root .favorite-page-card, #root .favorite-page-empty,
  #root .profile-dashboard-heading, #root .profile-card, #root .profile-overview-card, #root .profile-activity-section, #root .profile-activity-item, #root .profile-delete-section,
  #root .profile-edit-heading, #root .profile-edit-card, #root .profile-edit-photo-card, #root .profile-edit-details, #root .profile-delete-page-card,
  #root .all-reviews-heading, #root .all-reviews-card, #root .all-reviews-search, #root .my-reviews-heading, #root .my-reviews-card, #root .liked-reviews-heading, #root .liked-reviews-card,
  #root .review-detail-card, #root .review-detail-content, #root .review-detail-movie, #root .review-comment-card, #root .review-comment-form,
  #root .movie-detail-page .movie-detail-header, #root .movie-detail-page .detail-content-section, #root .movie-detail-page .movie-rating-panel, #root .movie-detail-page .rating-distribution, #root .movie-detail-page .movie-score-display, #root .movie-detail-page .detail-reaction-counts, #root .movie-detail-page .people-section, #root .movie-detail-page .detail-review-card, #root .movie-detail-page .review-write-section,
  #root .person-detail-page .person-detail-header, #root .person-detail-page .person-filmography, #root .signup-page .signup-card, #root .login-page .login-card {
    background-color: rgba(218,231,225,.15) !important;
    background-image: linear-gradient(128deg, rgba(255,255,255,.25), rgba(255,255,255,.055) 32%, rgba(159,213,211,.075) 58%, rgba(194,177,218,.07) 78%, rgba(232,205,155,.075)) !important;
    border: 1px solid rgba(255,255,255,.66) !important;
    box-shadow: 0 3px 9px rgba(38,43,40,.045), 0 16px 36px rgba(38,43,40,.075), inset 0 1px 0 rgba(255,255,255,.78), inset 0 -1px 0 rgba(104,120,116,.13) !important;
    -webkit-backdrop-filter: blur(30px) saturate(158%) !important;
    backdrop-filter: blur(30px) saturate(158%) !important;
  }
  #root .home-feature-info, #root .profile-overview-card, #root .profile-activity-section, #root .profile-delete-section,
  #root .movie-detail-page .detail-content-section, #root .movie-detail-page .movie-rating-panel, #root .movie-detail-page .rating-distribution, #root .movie-detail-page .movie-score-display, #root .movie-detail-page .detail-reaction-counts, #root .movie-detail-page .people-section, #root .review-detail-content, #root .review-detail-movie {
    background-color: rgba(211,225,219,.11) !important;
    background-image: linear-gradient(138deg, rgba(255,255,255,.19), rgba(255,255,255,.025) 48%, rgba(183,204,199,.085)) !important;
    box-shadow: 0 3px 8px rgba(38,43,40,.035), 0 10px 24px rgba(38,43,40,.05), inset 0 1px 0 rgba(255,255,255,.62), inset 0 -1px 0 rgba(104,120,116,.1) !important;
  }
  #root .momo-app-main button, #root .momo-app-header button, #root .momo-app-footer button, #root .momo-chat-launcher, #root .signup-page button, #root .login-page button, #root .momo-app-main [role="button"] {
    border: 1px solid rgba(255,255,255,.7) !important;
    background: linear-gradient(180deg, rgba(255,255,255,.43), rgba(220,231,226,.2) 52%, rgba(205,218,212,.16)) !important;
    box-shadow: 0 3px 9px rgba(38,43,40,.05), inset 0 1px 0 rgba(255,255,255,.84), inset 0 -1px 0 rgba(105,123,116,.13) !important;
    -webkit-backdrop-filter: blur(22px) saturate(165%) !important; backdrop-filter: blur(22px) saturate(165%) !important;
  }
  #root .momo-app-main button[class*="primary"], #root .momo-app-main button[class*="submit"], #root .momo-app-main .recommend-button, #root .momo-app-main .all-reviews-search-submit, #root .momo-app-main .favorite-browse-button, #root .momo-app-main .profile-edit-submit, #root .signup-page .signup-submit, #root .login-page .login-submit {
    background: linear-gradient(140deg, rgba(255,255,255,.48), rgba(245,225,175,.32) 52%, rgba(209,190,145,.2)) !important; color: #51451F !important;
  }
  #root .momo-app-main input:not([type="checkbox"]):not([type="radio"]), #root .momo-app-main textarea, #root .momo-app-main select, #root .momo-app-header input, #root .signup-page input, #root .login-page input {
    background: linear-gradient(180deg, rgba(250,252,250,.34), rgba(210,224,218,.19)) !important; border: 1px solid rgba(255,255,255,.58) !important;
    box-shadow: inset 0 2px 6px rgba(38,43,40,.055), inset 0 1px 0 rgba(255,255,255,.62) !important;
    -webkit-backdrop-filter: blur(18px) saturate(155%) !important; backdrop-filter: blur(18px) saturate(155%) !important;
  }
  #root .momo-app-main img, #root .momo-app-main video, #root .momo-app-main canvas, #root .momo-app-main picture, #root .momo-app-main svg { -webkit-backdrop-filter: none !important; backdrop-filter: none !important; }
`;

export default MomoReferenceLiquidGlassStyles;
