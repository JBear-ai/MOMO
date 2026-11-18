import { createGlobalStyle } from "styled-components";

/*
 * MOMO material language
 * Glass is defined by visible transparency, optical edge light and layered
 * reflections. Interaction uses light/pressure feedback rather than dated lift.
 */
const MomoMaterialSystemStyles = createGlobalStyle`
  :root {
    --momo-glass-tint: rgba(255, 250, 236, .42);
    --momo-glass-clear: rgba(255, 255, 255, .28);
    --momo-glass-edge: rgba(255, 255, 255, .88);
    --momo-glass-edge-warm: rgba(214, 180, 63, .34);
    --momo-glass-blur: 30px;
    --momo-glass-saturation: 168%;
    --momo-glass-depth:
      0 1px 2px rgba(50, 41, 22, .035),
      0 9px 24px rgba(50, 41, 22, .075),
      0 26px 56px rgba(50, 41, 22, .075),
      inset 0 1px 0 rgba(255, 255, 255, .96),
      inset 0 -1px 0 rgba(216, 201, 159, .24);
    --momo-glass-depth-raised:
      0 2px 5px rgba(50, 41, 22, .045),
      0 14px 30px rgba(50, 41, 22, .12),
      0 34px 64px rgba(50, 41, 22, .10),
      inset 0 1px 0 rgba(255, 255, 255, 1);
    --momo-motion-material: 320ms cubic-bezier(.16, 1, .3, 1);
    --momo-motion-press: 110ms cubic-bezier(.2, .7, .2, 1);
  }

  /* Ambient desk: the graph remains visible through every glass surface. */
  html, body, #root {
    min-height: 100%;
  }
  body {
    background-color: #F5F2EB;
    background-image:
      radial-gradient(ellipse at 12% 4%, rgba(255, 212, 59, .16), transparent 34rem),
      radial-gradient(ellipse at 88% 24%, rgba(255, 255, 255, .78), transparent 42rem),
      linear-gradient(rgba(166, 148, 108, .075) 1px, transparent 1px),
      linear-gradient(90deg, rgba(166, 148, 108, .075) 1px, transparent 1px);
    background-size: auto, auto, 32px 32px, 32px 32px;
    background-attachment: fixed;
  }

  /* Navigation is a continuous glass plane, not an opaque cream bar. */
  #root .momo-app-header {
    background: linear-gradient(180deg, rgba(255,255,255,.72), rgba(255,250,236,.42));
    border-bottom: 1px solid rgba(255,255,255,.86);
    box-shadow: 0 8px 28px rgba(48,39,22,.075), inset 0 1px rgba(255,255,255,.96);
    -webkit-backdrop-filter: blur(34px) saturate(175%);
    backdrop-filter: blur(34px) saturate(175%);
  }

  /* Shared glass panels across home, profile, archive, search and detail. */
  #root .profile-dashboard .profile-dashboard-heading,
  #root .profile-dashboard .profile-card,
  #root .profile-dashboard .profile-activity-item,
  #root .profile-edit-page .profile-edit-heading,
  #root .profile-edit-page .profile-edit-card,
  #root .profile-edit-page .profile-edit-photo-card,
  #root .profile-edit-page .profile-edit-details,
  #root .favorite-page-heading,
  #root .favorite-page-empty,
  #root .favorite-page .favorite-page-card,
  #root .search-page-heading,
  #root .search-page .movie-card,
  #root .search-page .movie-item,
  #root .search-page .movie-grid > *,
  #root .my-reviews-heading,
  #root .my-reviews-card,
  #root .liked-reviews-heading,
  #root .liked-reviews-card,
  #root .all-reviews-heading,
  #root .all-reviews-card,
  #root .all-reviews-search,
  #root .all-reviews-search-panel,
  #root .all-reviews-table-wrap,
  #root .movie-detail-page .movie-detail-header,
  #root .movie-detail-page .movie-rating-panel,
  #root .movie-detail-page .detail-content-section,
  #root .movie-detail-page .review-write-section,
  #root .movie-detail-page .detail-review-card,
  #root .person-detail-page .person-detail-header,
  #root .review-detail-card,
  #root .review-comment-card {
    background:
      radial-gradient(ellipse at 14% 0%, rgba(255,255,255,.78), transparent 43%),
      radial-gradient(ellipse at 100% 100%, rgba(255,212,59,.12), transparent 48%),
      linear-gradient(138deg, rgba(255,255,255,.58), rgba(255,250,236,.34) 56%, rgba(255,243,194,.26));
    border: 1px solid var(--momo-glass-edge);
    box-shadow: var(--momo-glass-depth);
    -webkit-backdrop-filter: blur(var(--momo-glass-blur)) saturate(var(--momo-glass-saturation));
    backdrop-filter: blur(var(--momo-glass-blur)) saturate(var(--momo-glass-saturation));
  }

  /* A thin lens reflection and inner rim are shared by every major surface. */
  #root .profile-dashboard .profile-card,
  #root .profile-dashboard .profile-activity-item,
  #root .profile-edit-page .profile-edit-card,
  #root .profile-edit-page .profile-edit-photo-card,
  #root .profile-edit-page .profile-edit-details,
  #root .favorite-page .favorite-page-card,
  #root .search-page .movie-card,
  #root .search-page .movie-item,
  #root .my-reviews-card,
  #root .liked-reviews-card,
  #root .all-reviews-card,
  #root .movie-detail-page .movie-rating-panel,
  #root .movie-detail-page .detail-content-section,
  #root .movie-detail-page .review-write-section,
  #root .movie-detail-page .detail-review-card,
  #root .review-detail-card,
  #root .review-comment-card {
    position: relative;
    isolation: isolate;
    overflow: hidden;
  }
  #root .profile-dashboard .profile-card::before,
  #root .profile-dashboard .profile-activity-item::before,
  #root .profile-edit-page .profile-edit-card::before,
  #root .profile-edit-page .profile-edit-photo-card::before,
  #root .profile-edit-page .profile-edit-details::before,
  #root .favorite-page .favorite-page-card::before,
  #root .search-page .movie-card::before,
  #root .search-page .movie-item::before,
  #root .my-reviews-card::before,
  #root .liked-reviews-card::before,
  #root .all-reviews-card::before,
  #root .movie-detail-page .movie-rating-panel::before,
  #root .movie-detail-page .detail-content-section::before,
  #root .movie-detail-page .review-write-section::before,
  #root .movie-detail-page .detail-review-card::before,
  #root .review-detail-card::before,
  #root .review-comment-card::before {
    position: absolute;
    z-index: 0;
    inset: 0;
    content: "";
    border-radius: inherit;
    background:
      linear-gradient(116deg, rgba(255,255,255,.52) 0%, rgba(255,255,255,.12) 24%, transparent 44%),
      linear-gradient(180deg, rgba(255,255,255,.24), transparent 26%, transparent 78%, rgba(214,180,63,.055));
    pointer-events: none;
  }
  #root .profile-dashboard .profile-card > *,
  #root .profile-dashboard .profile-activity-item > *,
  #root .profile-edit-page .profile-edit-card > *,
  #root .profile-edit-page .profile-edit-photo-card > *,
  #root .profile-edit-page .profile-edit-details > *,
  #root .favorite-page .favorite-page-card > *,
  #root .search-page .movie-card > *,
  #root .search-page .movie-item > *,
  #root .my-reviews-card > *,
  #root .liked-reviews-card > *,
  #root .all-reviews-card > *,
  #root .movie-detail-page .movie-rating-panel > *,
  #root .movie-detail-page .detail-content-section > *,
  #root .movie-detail-page .review-write-section > *,
  #root .movie-detail-page .detail-review-card > *,
  #root .review-detail-card > *,
  #root .review-comment-card > * {
    position: relative;
    z-index: 1;
  }

  /* Buttons: glass capsule, refractive rim, light sweep and physical press. */
  #root button,
  #root [role="button"],
  #root .profile-button,
  #root .favorite-browse-button,
  #root .all-reviews-search-submit,
  #root .rating-vote-button,
  #root .person-chip,
  #root .page-back-link,
  #root .detail-back-button {
    position: relative;
    isolation: isolate;
    overflow: hidden;
    border-color: rgba(255,255,255,.84);
    box-shadow:
      0 2px 4px rgba(50,41,22,.045),
      0 7px 16px rgba(50,41,22,.075),
      inset 0 1px 0 rgba(255,255,255,.96),
      inset 0 -1px 0 rgba(216,201,159,.18);
    transition:
      background-color var(--momo-motion-material),
      border-color var(--momo-motion-material),
      box-shadow var(--momo-motion-material),
      filter var(--momo-motion-material),
      transform var(--momo-motion-press);
  }
  #root button::after,
  #root [role="button"]::after,
  #root .profile-button::after,
  #root .favorite-browse-button::after,
  #root .all-reviews-search-submit::after,
  #root .rating-vote-button::after,
  #root .person-chip::after,
  #root .page-back-link::after,
  #root .detail-back-button::after {
    position: absolute;
    z-index: -1;
    inset: 0;
    content: "";
    border-radius: inherit;
    background: linear-gradient(112deg, rgba(255,255,255,.52), transparent 38%, rgba(255,255,255,.18) 72%, transparent);
    opacity: .56;
    pointer-events: none;
    transition: opacity var(--momo-motion-material);
  }
  #root button:hover:not(:disabled),
  #root [role="button"]:hover,
  #root .profile-button:hover:not(:disabled),
  #root .favorite-browse-button:hover:not(:disabled),
  #root .all-reviews-search-submit:hover:not(:disabled),
  #root .rating-vote-button:hover:not(:disabled),
  #root .person-chip:hover,
  #root .page-back-link:hover,
  #root .detail-back-button:hover {
    border-color: rgba(255,255,255,.98);
    box-shadow:
      0 3px 7px rgba(50,41,22,.055),
      0 12px 24px rgba(50,41,22,.105),
      inset 0 1px 0 rgba(255,255,255,1),
      inset 0 0 0 1px rgba(255,255,255,.2);
    filter: saturate(1.12) brightness(1.025);
  }
  #root button:hover:not(:disabled)::after,
  #root [role="button"]:hover::after,
  #root .profile-button:hover:not(:disabled)::after,
  #root .favorite-browse-button:hover:not(:disabled)::after,
  #root .all-reviews-search-submit:hover:not(:disabled)::after,
  #root .rating-vote-button:hover:not(:disabled)::after,
  #root .person-chip:hover::after,
  #root .page-back-link:hover::after,
  #root .detail-back-button:hover::after {
    opacity: .96;
  }
  #root button:active:not(:disabled),
  #root [role="button"]:active,
  #root .profile-button:active:not(:disabled),
  #root .favorite-browse-button:active:not(:disabled),
  #root .all-reviews-search-submit:active:not(:disabled),
  #root .rating-vote-button:active:not(:disabled),
  #root .person-chip:active,
  #root .page-back-link:active,
  #root .detail-back-button:active {
    transform: scale(.975);
    box-shadow:
      0 1px 2px rgba(50,41,22,.06),
      inset 0 2px 5px rgba(50,41,22,.08),
      inset 0 1px 0 rgba(255,255,255,.78);
    transition-duration: var(--momo-motion-press);
  }
  #root button:focus-visible,
  #root [role="button"]:focus-visible,
  #root a:focus-visible,
  #root input:focus-visible,
  #root textarea:focus-visible,
  #root select:focus-visible {
    outline: 3px solid rgba(214,180,63,.72);
    outline-offset: 3px;
  }

  /* Soft 3D surfaces respond optically, not by the old translateY hover trick. */
  #root .profile-dashboard .profile-activity-item:hover,
  #root .favorite-page .favorite-page-card:hover,
  #root .search-page .movie-card:hover,
  #root .search-page .movie-item:hover {
    border-color: rgba(255,255,255,.98);
    box-shadow: var(--momo-glass-depth-raised);
  }
  #root .profile-dashboard .profile-activity-item,
  #root .favorite-page .favorite-page-card,
  #root .search-page .movie-card,
  #root .search-page .movie-item {
    transform: translateZ(0);
    transition: border-color var(--momo-motion-material), box-shadow var(--momo-motion-material), background var(--momo-motion-material);
  }

  /* Nested controls stay translucent rather than becoming opaque white boxes. */
  #root input,
  #root textarea,
  #root select {
    background-color: rgba(255,254,250,.68);
    border-color: rgba(216,201,159,.78);
    box-shadow: inset 0 1px 2px rgba(50,41,22,.035), 0 1px 0 rgba(255,255,255,.82);
    -webkit-backdrop-filter: blur(16px) saturate(145%);
    backdrop-filter: blur(16px) saturate(145%);
  }

  @media (hover: none) {
    #root button:hover:not(:disabled),
    #root [role="button"]:hover,
    #root .profile-button:hover:not(:disabled),
    #root .favorite-browse-button:hover:not(:disabled),
    #root .all-reviews-search-submit:hover:not(:disabled),
    #root .rating-vote-button:hover:not(:disabled) {
      filter: none;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    #root *,
    #root *::before,
    #root *::after {
      scroll-behavior: auto;
      animation-duration: .01ms;
      animation-iteration-count: 1;
      transition-duration: .01ms;
    }
  }
`;

export default MomoMaterialSystemStyles;
