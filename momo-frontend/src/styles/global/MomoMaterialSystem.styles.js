import { createGlobalStyle } from "styled-components";

const MomoMaterialSystemStyles = createGlobalStyle`
  /* Final material pass: visible glass depth, reflection and tactile elevation. */
  :root {
    --momo-material-glass: rgba(255,250,236,.48);
    --momo-material-clear: rgba(255,255,255,.58);
    --momo-material-edge: rgba(255,255,255,.94);
    --momo-material-shadow: 0 2px 5px rgba(48,39,22,.035), 0 15px 32px rgba(48,39,22,.09), 0 30px 58px rgba(48,39,22,.045), inset 0 1px rgba(255,255,255,1), inset 0 -1px rgba(216,201,159,.22);
    --momo-material-shadow-raised: 0 5px 10px rgba(48,39,22,.045), 0 24px 44px rgba(48,39,22,.145), 0 40px 70px rgba(48,39,22,.065), inset 0 1px rgba(255,255,255,1);
    --momo-material-ease: 240ms cubic-bezier(.2,.72,.2,1);
  }

  /* The page title is a floating glass sheet, not plain text above the cards. */
  #root .profile-dashboard .profile-dashboard-heading,
  #root .profile-edit-page .profile-edit-heading,
  #root .favorite-page .favorite-page-heading,
  #root .search-page-heading,
  #root .all-reviews-heading,
  #root .my-reviews-heading,
  #root .liked-reviews-heading {
    position: relative;
    isolation: isolate;
    overflow: hidden;
    border: 1px solid var(--momo-route-line);
    border-radius: 21px;
    background: linear-gradient(132deg, rgba(255,255,255,.74), rgba(255,250,236,.42) 58%, rgba(255,243,194,.3));
    box-shadow: var(--momo-material-shadow);
    backdrop-filter: blur(26px) saturate(158%);
    -webkit-backdrop-filter: blur(26px) saturate(158%);
  }
  #root .profile-dashboard .profile-dashboard-heading::after,
  #root .profile-edit-page .profile-edit-heading::after,
  #root .favorite-page .favorite-page-heading::after,
  #root .search-page-heading::after,
  #root .all-reviews-heading::after,
  #root .my-reviews-heading::after,
  #root .liked-reviews-heading::after {
    position: absolute;
    inset: 0;
    content: "";
    background:
      linear-gradient(112deg, transparent 16%, rgba(255,255,255,.44) 43%, transparent 68%),
      linear-gradient(180deg, rgba(255,255,255,.14), transparent 48%);
    opacity: .86;
    pointer-events: none;
  }
  #root .profile-dashboard .profile-dashboard-heading > *,
  #root .profile-edit-page .profile-edit-heading > *,
  #root .favorite-page .favorite-page-heading > *,
  #root .search-page-heading > *,
  #root .all-reviews-heading > *,
  #root .my-reviews-heading > *,
  #root .liked-reviews-heading > * {
    position: relative;
    z-index: 1;
  }

  #root .profile-dashboard .profile-dashboard-heading {
    min-height: 132px;
    padding: clamp(24px, 3.4vw, 36px);
  }

  /* Identity, edit form, saved movies and review panels share one optical material. */
  #root .profile-dashboard .profile-card,
  #root .profile-edit-page .profile-edit-card,
  #root .profile-edit-page .profile-edit-photo-card,
  #root .profile-edit-page .profile-edit-details,
  #root .profile-delete-page-card,
  #root .favorite-page-empty,
  #root .favorite-page .favorite-page-card,
  #root .search-page .movie-card,
  #root .search-page .movie-item,
  #root .search-page .movie-grid > *,
  #root .all-reviews-card,
  #root .my-reviews-card,
  #root .liked-reviews-card,
  #root .review-detail-card,
  #root .review-comment-card,
  #root .movie-detail-page .movie-detail-header,
  #root .movie-detail-page .movie-rating-panel,
  #root .movie-detail-page .detail-content-section,
  #root .movie-detail-page .review-write-section,
  #root .movie-detail-page .detail-review-card {
    border: 1px solid var(--momo-material-edge);
    background:
      radial-gradient(ellipse at 90% 0%, rgba(255,255,255,.62), transparent 46%),
      linear-gradient(145deg, rgba(255,255,255,.62), rgba(255,250,236,.38) 58%, rgba(255,243,194,.28));
    box-shadow: var(--momo-material-shadow);
    backdrop-filter: blur(28px) saturate(158%);
    -webkit-backdrop-filter: blur(28px) saturate(158%);
    transition: transform var(--momo-material-ease), border-color var(--momo-material-ease), box-shadow var(--momo-material-ease), background var(--momo-material-ease);
  }

  /* Double edge-light creates a readable glass rim without a flat white outline. */
  #root .profile-dashboard .profile-card,
  #root .profile-edit-page .profile-edit-card,
  #root .profile-edit-page .profile-edit-photo-card,
  #root .profile-edit-page .profile-edit-details,
  #root .favorite-page-empty,
  #root .favorite-page .favorite-page-card,
  #root .search-page .movie-card,
  #root .search-page .movie-item,
  #root .all-reviews-card,
  #root .my-reviews-card,
  #root .liked-reviews-card,
  #root .review-detail-card,
  #root .review-comment-card,
  #root .movie-detail-page .movie-rating-panel,
  #root .movie-detail-page .detail-content-section,
  #root .movie-detail-page .review-write-section,
  #root .movie-detail-page .detail-review-card {
    position: relative;
    isolation: isolate;
  }
  #root .profile-dashboard .profile-card::before,
  #root .profile-edit-page .profile-edit-card::before,
  #root .profile-edit-page .profile-edit-photo-card::before,
  #root .profile-edit-page .profile-edit-details::before,
  #root .favorite-page-empty::before,
  #root .favorite-page .favorite-page-card::before,
  #root .search-page .movie-card::before,
  #root .search-page .movie-item::before,
  #root .all-reviews-card::before,
  #root .my-reviews-card::before,
  #root .liked-reviews-card::before,
  #root .review-detail-card::before,
  #root .review-comment-card::before,
  #root .movie-detail-page .movie-rating-panel::before,
  #root .movie-detail-page .detail-content-section::before,
  #root .movie-detail-page .review-write-section::before,
  #root .movie-detail-page .detail-review-card::before {
    position: absolute;
    z-index: 0;
    inset: 0;
    content: "";
    border-radius: inherit;
    background:
      linear-gradient(118deg, rgba(255,255,255,.42), transparent 34%, transparent 76%, rgba(255,255,255,.12)),
      radial-gradient(ellipse at 82% 0%, rgba(255,255,255,.22), transparent 42%);
    pointer-events: none;
  }
  #root .profile-dashboard .profile-card > *,
  #root .profile-edit-page .profile-edit-card > *,
  #root .profile-edit-page .profile-edit-photo-card > *,
  #root .profile-edit-page .profile-edit-details > *,
  #root .favorite-page-empty > *,
  #root .favorite-page .favorite-page-card > *,
  #root .search-page .movie-card > *,
  #root .search-page .movie-item > *,
  #root .all-reviews-card > *,
  #root .my-reviews-card > *,
  #root .liked-reviews-card > *,
  #root .review-detail-card > *,
  #root .review-comment-card > *,
  #root .movie-detail-page .movie-rating-panel > *,
  #root .movie-detail-page .detail-content-section > *,
  #root .movie-detail-page .review-write-section > *,
  #root .movie-detail-page .detail-review-card > * {
    position: relative;
    z-index: 1;
  }

  /* Soft 3D hover — small Z lift with layered shadow, never a harsh jump. */
  #root .profile-dashboard .profile-card:hover,
  #root .profile-edit-page .profile-edit-photo-card:hover,
  #root .profile-edit-page .profile-edit-details:hover,
  #root .favorite-page .favorite-page-card:hover,
  #root .search-page .movie-card:hover,
  #root .search-page .movie-item:hover,
  #root .all-reviews-card:hover,
  #root .my-reviews-card:hover,
  #root .liked-reviews-card:hover,
  #root .movie-detail-page .movie-rating-panel:hover,
  #root .movie-detail-page .detail-content-section:hover {
    border-color: rgba(214,180,63,.62);
    box-shadow: var(--momo-material-shadow-raised);
    transform: perspective(1100px) translateY(-4px) rotateX(.45deg) translateZ(2px);
  }

  /* Profile data and activity cards: distinct elevated surfaces within the main pane. */
  #root .profile-dashboard .profile-activity-item {
    position: relative;
    isolation: isolate;
    border: 1px solid rgba(233,223,197,.9);
    border-left-color: #D6B43F;
    border-radius: 15px;
    background:
      radial-gradient(ellipse at 92% 0%, rgba(255,255,255,.78), transparent 48%),
      linear-gradient(145deg, rgba(255,255,255,.62), rgba(255,250,236,.4));
    box-shadow: 0 2px 4px rgba(48,39,22,.035), 0 10px 22px rgba(48,39,22,.08), inset 0 1px rgba(255,255,255,1), inset 0 -1px rgba(216,201,159,.18);
    backdrop-filter: blur(24px) saturate(152%);
    -webkit-backdrop-filter: blur(24px) saturate(152%);
    transition: transform var(--momo-material-ease), box-shadow var(--momo-material-ease), border-color var(--momo-material-ease);
  }
  #root .profile-dashboard .profile-activity-item::before {
    position: absolute;
    inset: 0;
    content: "";
    border-radius: inherit;
    background: linear-gradient(116deg, rgba(255,255,255,.46), transparent 48%, rgba(255,255,255,.1));
    pointer-events: none;
  }
  #root .profile-dashboard .profile-activity-item > * { position: relative; z-index: 1; }
  #root .profile-dashboard .profile-activity-item:hover {
    border-color: rgba(214,180,63,.68);
    border-left-color: #D6B43F;
    box-shadow: 0 5px 9px rgba(48,39,22,.045), 0 18px 32px rgba(48,39,22,.13), inset 0 1px rgba(255,255,255,1);
    transform: perspective(900px) translateY(-4px) rotateX(.6deg) translateZ(2px);
  }
  #root .profile-dashboard .profile-activity-icon {
    border: 1px solid rgba(214,180,63,.44);
    background: linear-gradient(145deg, rgba(255,255,255,.88), rgba(255,241,178,.62));
    box-shadow: 0 3px 7px rgba(68,55,27,.08), inset 0 1px rgba(255,255,255,1);
  }

  /* Movie / person detail hero reads as a thick lens over the poster atmosphere. */
  #root .movie-detail-page .movie-detail-header {
    position: relative;
    isolation: isolate;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.88);
    border-radius: 22px;
    background:
      radial-gradient(ellipse at 88% 0%, rgba(255,212,59,.22), transparent 38%),
      linear-gradient(130deg, rgba(255,255,255,.68), rgba(255,250,236,.38));
    box-shadow: 0 4px 10px rgba(48,39,22,.045), 0 24px 52px rgba(48,39,22,.13), inset 0 1px rgba(255,255,255,1);
    backdrop-filter: blur(32px) saturate(160%);
    -webkit-backdrop-filter: blur(32px) saturate(160%);
  }
  #root .movie-detail-page .movie-detail-header::after {
    position: absolute;
    inset: 0;
    content: "";
    background: linear-gradient(116deg, transparent 17%, rgba(255,255,255,.34) 45%, transparent 72%);
    pointer-events: none;
  }
  #root .movie-detail-page .movie-detail-poster,
  #root .favorite-page .favorite-page-poster,
  #root .search-page .poster-frame,
  #root .search-page .movie-poster,
  #root .search-page .poster-placeholder {
    border: 1px solid rgba(255,255,255,.96);
    border-radius: 13px;
    box-shadow: 0 3px 7px rgba(42,35,20,.08), 0 14px 25px rgba(42,35,20,.16), inset 0 1px rgba(255,255,255,.92);
  }

  #root .profile-dashboard .profile-card {
    border-radius: 20px;
    backdrop-filter: blur(26px) saturate(158%);
    -webkit-backdrop-filter: blur(26px) saturate(158%);
  }
  #root .profile-edit-page .profile-edit-heading {
    backdrop-filter: blur(24px) saturate(150%);
    -webkit-backdrop-filter: blur(24px) saturate(150%);
  }
  #root .movie-detail-page .movie-rating-panel {
    border: 1px solid rgba(255,255,255,.82);
  }
  #root .profile-edit-page .profile-edit-photo-card,
  #root .profile-edit-page .profile-edit-details {
    border: 1px solid rgba(233,223,197,.9);
    border-radius: 18px;
    backdrop-filter: blur(24px) saturate(150%);
    -webkit-backdrop-filter: blur(24px) saturate(150%);
  }
  #root .favorite-page .favorite-page-card {
    border-color: var(--momo-route-line);
    border-radius: 15px;
    backdrop-filter: blur(24px) saturate(152%);
    -webkit-backdrop-filter: blur(24px) saturate(152%);
  }
  #root .movie-detail-page .movie-rating-panel {
    backdrop-filter: blur(26px) saturate(156%);
    -webkit-backdrop-filter: blur(26px) saturate(156%);
  }

  /* Inputs retain legibility while reflecting the glass surface around them. */
  #root .profile-edit-page .profile-edit-field input,
  #root .profile-edit-page .profile-edit-file-input,
  #root .movie-detail-page input,
  #root .movie-detail-page textarea,
  #root .search-page input,
  #root .search-page select,
  #root .all-reviews-search-input,
  #root .all-reviews-search-select {
    background: rgba(255,254,250,.76);
    border-color: rgba(216,201,159,.76);
    box-shadow: inset 0 1px 2px rgba(48,39,22,.04), 0 1px rgba(255,255,255,.9);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
  }

  /* Navigation controls float above the graph-paper canvas. */
  #root .momo-app-header {
    border-bottom-color: rgba(255,255,255,.88);
    background: rgba(255,250,236,.62);
    box-shadow: 0 5px 12px rgba(48,39,22,.04), 0 14px 30px rgba(48,39,22,.075), inset 0 1px rgba(255,255,255,.98);
    backdrop-filter: blur(32px) saturate(165%);
    -webkit-backdrop-filter: blur(32px) saturate(165%);
  }

  @media (max-width:700px) {
    #root .profile-dashboard .profile-dashboard-heading,
    #root .profile-edit-page .profile-edit-heading {
      min-height: 116px;
      padding: 22px 18px;
    }
    #root .profile-dashboard .profile-card,
    #root .profile-edit-page .profile-edit-card,
    #root .profile-edit-page .profile-edit-photo-card,
    #root .profile-edit-page .profile-edit-details {
      border-radius: 18px;
    }
  }
  @media (prefers-reduced-motion:reduce) {
    #root .profile-dashboard .profile-card,
    #root .profile-dashboard .profile-activity-item,
    #root .profile-edit-page .profile-edit-photo-card,
    #root .profile-edit-page .profile-edit-details,
    #root .favorite-page .favorite-page-card,
    #root .search-page .movie-card,
    #root .search-page .movie-item {
      transition-duration: .01ms;
      transform: none;
    }
  }

`;

export default MomoMaterialSystemStyles;
