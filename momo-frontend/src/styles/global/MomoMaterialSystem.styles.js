import { createGlobalStyle } from "styled-components";

/*
 * MOMO material system
 * Shared material rules are applied after legacy page styles in GlobalStyles.js.
 * Page layouts stay in their own style modules; this file owns only surface,
 * colour-field, button, input and motion behavior.
 */
const MomoMaterialSystemStyles = createGlobalStyle`
  :root {
    --momo-glass-blur: 26px;
    --momo-glass-saturation: 165%;
    --momo-glass-edge: rgba(255,255,255,.9);
    --momo-glass-edge-soft: rgba(233,223,197,.72);
    --momo-glass-surface: linear-gradient(138deg, rgba(255,255,255,.68), rgba(255,250,236,.34) 54%, rgba(255,241,178,.24));
    --momo-glass-depth:
      0 2px 5px rgba(41,40,32,.035),
      0 14px 34px rgba(41,40,32,.075),
      inset 0 1px 0 rgba(255,255,255,.98),
      inset 0 -1px 0 rgba(216,201,159,.2);
    --momo-glass-depth-hover:
      0 5px 10px rgba(41,40,32,.045),
      0 18px 38px rgba(41,40,32,.1),
      inset 0 1px 0 rgba(255,255,255,1),
      inset 0 -1px 0 rgba(216,201,159,.26);
    --momo-glass-depth-active:
      0 1px 3px rgba(41,40,32,.045),
      inset 0 2px 5px rgba(41,40,32,.075),
      inset 0 1px 0 rgba(255,255,255,.88);
    --momo-glass-button:
      linear-gradient(145deg, rgba(255,255,255,.58), rgba(255,250,236,.34) 54%, rgba(255,241,178,.24)),
      rgba(255,255,255,.16);
    --momo-glass-button-hover:
      linear-gradient(145deg, rgba(255,255,255,.9), rgba(255,250,236,.58) 54%, rgba(255,250,236,.38)),
      rgba(255,255,255,.2);
    --momo-glass-button-primary:
      linear-gradient(140deg, rgba(255,255,255,.66), rgba(255,231,151,.48) 48%, rgba(255,212,59,.26)),
      rgba(255,255,255,.18);
    --momo-glass-button-primary-hover:
      linear-gradient(140deg, rgba(255,255,255,.94), rgba(255,230,132,.72) 48%, rgba(255,212,59,.46)),
      rgba(255,255,255,.22);
    --momo-motion-material: 230ms cubic-bezier(.2,.72,.2,1);
    --momo-motion-press: 100ms cubic-bezier(.2,.7,.2,1);
  }

  /* Warm notebook paper is the canvas; glass surfaces float above it. */
  body {
    background-color: #F5F2EB;
    background-image:
      linear-gradient(to right, transparent 0, transparent 62px, rgba(205,104,91,.28) 62px, rgba(205,104,91,.28) 64px, transparent 64px),
      repeating-linear-gradient(to bottom, transparent 0, transparent 31px, rgba(130,166,194,.16) 31px, rgba(130,166,194,.16) 32px),
      radial-gradient(ellipse at 8% 0%, rgba(255,255,255,.82), transparent 46rem),
      radial-gradient(ellipse at 92% 16%, rgba(255,212,59,.16), transparent 42rem),
      linear-gradient(140deg, #F8F5EC 0%, #F5F2EB 56%, #F1EBDD 100%);
    background-attachment: fixed;
  }

  /* Every route uses the same warm brand field beneath its glass surfaces. */
  #root .momo-app-main > .home-page,
  #root .momo-app-main > .search-page,
  #root .momo-app-main > .favorite-page,
  #root .momo-app-main > .movie-detail-page,
  #root .momo-app-main > .all-reviews-page,
  #root .momo-app-main > .my-reviews-page,
  #root .momo-app-main > .liked-reviews-page,
  #root .momo-app-main > .profile-dashboard,
  #root .momo-app-main > .profile-edit-page,
  #root .momo-app-main > .profile-page,
  #root .momo-app-main > .review-detail-page {
    background:
      radial-gradient(ellipse at 8% 0%, rgba(255,255,255,.76), transparent 38rem),
      radial-gradient(ellipse at 94% 58%, rgba(255,212,59,.14), transparent 40rem),
      linear-gradient(145deg, rgba(255,250,236,.58), rgba(255,255,255,.22) 58%, rgba(255,241,178,.28));
    border-radius: 26px;
  }
  /* Shared header: translucent material with a visible refractive rim. */
  #root .momo-app-header {
    background: linear-gradient(180deg, rgba(255,255,255,.78), rgba(245,248,245,.56));
    border-bottom: 1px solid rgba(255,255,255,.88);
    box-shadow: 0 8px 28px rgba(41,40,32,.065), inset 0 1px 0 rgba(255,255,255,.98);
    -webkit-backdrop-filter: blur(32px) saturate(175%);
    backdrop-filter: blur(32px) saturate(175%);
  }
  #root .momo-app-header button {
    border: 1px solid rgba(255,255,255,.9);
    background: var(--momo-glass-button);
    color: #3D4941;
    box-shadow: 0 2px 5px rgba(41,40,32,.045), 0 7px 16px rgba(41,40,32,.065), inset 0 1px 0 rgba(255,255,255,.98);
    -webkit-backdrop-filter: blur(24px) saturate(180%);
    backdrop-filter: blur(24px) saturate(180%);
    transition: color var(--momo-motion-material), background var(--momo-motion-material), border-color var(--momo-motion-material), box-shadow var(--momo-motion-material), transform var(--momo-motion-press);
  }
  #root .momo-app-header button:hover:not(:disabled) {
    border-color: rgba(255,255,255,1);
    background: var(--momo-glass-button-hover);
    color: #292820;
    box-shadow: var(--momo-glass-depth-hover);
    transform: none;
  }

  #root .momo-chat-launcher {
    border: 1px solid rgba(255,255,255,.94);
    background: linear-gradient(145deg, rgba(255,255,255,.84), rgba(255,250,236,.56) 54%, rgba(255,241,178,.36));
    color: #514C40;
    box-shadow: 0 8px 22px rgba(41,40,32,.12), inset 0 1px 0 rgba(255,255,255,1), inset 0 -1px rgba(216,201,159,.16);
    -webkit-backdrop-filter: blur(24px) saturate(180%);
    backdrop-filter: blur(24px) saturate(180%);
  }
  #root .momo-chat-launcher:hover {
    border-color: rgba(255,255,255,1);
    background: linear-gradient(145deg, rgba(255,255,255,.96), rgba(255,241,178,.72) 54%, rgba(255,212,59,.48));
    box-shadow: 0 11px 26px rgba(41,40,32,.15), inset 0 1px 0 rgba(255,255,255,1);
    color: #292820;
    transform: none;
  }

  #root .momo-app-header nav a {
    border: 1px solid rgba(255,255,255,.54);
    background: linear-gradient(145deg, rgba(255,255,255,.46), rgba(255,250,236,.18));
    color: #514C40;
    box-shadow: inset 0 1px rgba(255,255,255,.78);
    -webkit-backdrop-filter: blur(18px) saturate(165%);
    backdrop-filter: blur(18px) saturate(165%);
    transition: color var(--momo-motion-material), background var(--momo-motion-material), border-color var(--momo-motion-material), box-shadow var(--momo-motion-material);
  }
  #root .momo-app-header nav a:hover,
  #root .momo-app-header nav a:focus-visible {
    border-color: rgba(255,255,255,.98);
    background: linear-gradient(145deg, rgba(255,255,255,.82), rgba(255,250,236,.48));
    color: #292820;
    box-shadow: 0 5px 13px rgba(41,40,32,.065), inset 0 1px rgba(255,255,255,1);
  }
  #root .momo-app-header nav a.active {
    border-color: rgba(233,223,197,.78);
    background: linear-gradient(145deg, rgba(255,255,255,.82), rgba(255,250,236,.56));
    color: #292820;
    box-shadow: 0 3px 10px rgba(41,40,32,.04), inset 0 1px rgba(255,255,255,1);
  }
  #root .momo-app-header .momo-search-form {
    border: 1px solid rgba(255,255,255,.9);
    background: linear-gradient(140deg, rgba(255,255,255,.68), rgba(255,250,236,.36));
    box-shadow: 0 4px 14px rgba(41,40,32,.055), inset 0 1px rgba(255,255,255,.98);
    -webkit-backdrop-filter: blur(24px) saturate(165%);
    backdrop-filter: blur(24px) saturate(165%);
  }
  #root .momo-app-header .momo-search-button {
    width: 34px;
    height: 34px;
    padding: 0;
    border-radius: 10px;
    color: #514C40;
  }
  #root .momo-app-header .momo-search-dropdown {
    border: 1px solid rgba(255,255,255,.94);
    border-radius: 18px;
    background: linear-gradient(145deg, rgba(255,255,255,.82), rgba(255,250,236,.56) 58%, rgba(255,241,178,.38));
    box-shadow: 0 20px 46px rgba(41,40,32,.14), inset 0 1px rgba(255,255,255,1);
    -webkit-backdrop-filter: blur(30px) saturate(175%);
    backdrop-filter: blur(30px) saturate(175%);
  }
  #root .momo-app-header .momo-search-result {
    border: 0;
    border-bottom: 1px solid rgba(255,255,255,.74);
    border-radius: 0;
    background: rgba(255,255,255,.12);
    box-shadow: none;
    color: #292820;
    text-align: left;
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
  }
  #root .momo-app-header .momo-search-result:hover,
  #root .momo-app-header .momo-search-result:focus-visible,
  #root .momo-app-header .momo-search-result.is-active {
    border-color: rgba(255,255,255,.88);
    background: linear-gradient(140deg, rgba(255,255,255,.78), rgba(255,250,236,.56));
    color: #292820;
    box-shadow: inset 0 1px rgba(255,255,255,.98);
  }
  #root .momo-app-header .momo-search-form:focus-within {
    border-color: rgba(233,223,197,.92);
    background: linear-gradient(140deg, rgba(255,255,255,.84), rgba(255,250,236,.5));
    box-shadow: 0 0 0 3px rgba(216,201,159,.18), 0 9px 22px rgba(41,40,32,.075), inset 0 1px rgba(255,255,255,1);
  }

  /* Main glass planes. Each keeps its own shape and hierarchy. */
  #root .home-feature-section,
  #root .home-brand-line,
  #root .home-favorites-empty,
  #root .search-page-heading,
  #root .favorite-page-heading,
  #root .favorite-page-empty,
  #root .favorite-page-card,
  #root .profile-dashboard-heading,
  #root .profile-dashboard .profile-card,
  #root .profile-edit-heading,
  #root .profile-edit-card,
  #root .profile-edit-photo-card,
  #root .profile-edit-details,
  #root .profile-delete-page-card,
  #root .all-reviews-heading,
  #root .all-reviews-card,
  #root .all-reviews-search,
  #root .my-reviews-heading,
  #root .my-reviews-card,
  #root .liked-reviews-heading,
  #root .liked-reviews-card,
  #root .movie-detail-page .movie-detail-header,
  #root .movie-detail-page .movie-rating-panel,
  #root .movie-detail-page .detail-content-section,
  #root .movie-detail-page .review-write-section,
  #root .movie-detail-page .detail-review-card,
  #root .review-detail-page .review-detail-card,
  #root .review-detail-page .review-comment-card,
  #root .signup-page .signup-card {
    border-color: var(--momo-glass-edge);
    box-shadow: var(--momo-glass-depth);
    -webkit-backdrop-filter: blur(var(--momo-glass-blur)) saturate(var(--momo-glass-saturation));
    backdrop-filter: blur(var(--momo-glass-blur)) saturate(var(--momo-glass-saturation));
  }

  #root .home-feature-section {
    border-color: rgba(255,255,255,.92);
    -webkit-backdrop-filter: blur(28px) saturate(175%);
    backdrop-filter: blur(28px) saturate(175%);
    background:
      radial-gradient(ellipse at 8% 0%, rgba(255,255,255,.78), transparent 50%),
      linear-gradient(135deg, rgba(255,255,255,.62), rgba(255,250,236,.32) 56%, rgba(255,255,255,.22));
  }
  #root .home-feature-info {
    background: linear-gradient(145deg, rgba(255,255,255,.46), rgba(255,250,236,.2));
  }
  #root .home-feature-visual .recommend-content {
    background: linear-gradient(140deg, rgba(255,255,255,.3), rgba(255,250,236,.14) 55%, rgba(255,255,255,.08)), rgba(41,40,32,.3);
    border-color: rgba(255,255,255,.58);
    box-shadow: 0 18px 48px rgba(0,0,0,.26), inset 0 1px rgba(255,255,255,.68), inset 0 -1px rgba(255,255,255,.12);
    -webkit-backdrop-filter: blur(28px) saturate(175%);
    backdrop-filter: blur(28px) saturate(175%);
  }
  #root .search-page-heading {
    background: linear-gradient(132deg, rgba(255,255,255,.72), rgba(225,239,239,.34) 58%, rgba(255,255,255,.24));
  }
  #root .favorite-page-heading {
    background: linear-gradient(132deg, rgba(255,255,255,.72), rgba(255,241,178,.34) 58%, rgba(255,255,255,.24));
  }
  #root .all-reviews-heading,
  #root .my-reviews-heading,
  #root .liked-reviews-heading {
    background: linear-gradient(132deg, rgba(255,255,255,.74), rgba(239,228,220,.34) 58%, rgba(255,255,255,.22));
  }
  #root .profile-dashboard-heading,
  #root .profile-edit-heading {
    background: linear-gradient(132deg, rgba(255,255,255,.74), rgba(240,233,216,.34) 58%, rgba(255,255,255,.22));
  }
  #root .movie-detail-page .movie-detail-header {
    background:
      radial-gradient(ellipse at 8% 0%, rgba(255,255,255,.78), transparent 48%),
      linear-gradient(135deg, rgba(255,250,236,.68), rgba(255,250,236,.28) 58%, rgba(255,255,255,.2));
    border-color: rgba(255,255,255,.9);
    -webkit-backdrop-filter: blur(32px) saturate(175%);
    backdrop-filter: blur(32px) saturate(175%);
  }
  #root .movie-detail-page .movie-rating-panel,
  #root .movie-detail-page .detail-content-section,
  #root .movie-detail-page .review-write-section,
  #root .movie-detail-page .detail-review-card {
    background: linear-gradient(140deg, rgba(255,255,255,.66), rgba(244,248,245,.32) 58%, rgba(255,250,236,.24));
  }
  #root .review-detail-page .review-detail-card,
  #root .review-detail-page .review-comment-card {
    background: linear-gradient(140deg, rgba(255,255,255,.68), rgba(247,241,237,.3) 58%, rgba(229,220,213,.22));
  }
  #root .profile-dashboard .profile-card,
  #root .profile-edit-card,
  #root .profile-edit-photo-card,
  #root .profile-edit-details,
  #root .all-reviews-card,
  #root .my-reviews-card,
  #root .liked-reviews-card,
  #root .favorite-page-empty,
  #root .profile-delete-page-card,
  #root .signup-page .signup-card {
    background: linear-gradient(140deg, rgba(255,255,255,.68), rgba(245,248,245,.32) 58%, rgba(255,250,236,.22));
  }

  /* Compact cards also need transparency, a highlight rim and real depth. */
  #root .home-movie-card,
  #root .search-page .search-movie-card,
  #root .favorite-page-card,
  #root .profile-activity-item,
  #root .momo-app-main .profile-dashboard .profile-activity-item,
  #root .my-review-item,
  #root .liked-review-item,
  #root .all-reviews-mobile-item,
  #root .person-chip,
  #root .review-detail-movie,
  #root .review-comment-item {
    border-color: rgba(255,255,255,.84);
    background: linear-gradient(145deg, rgba(255,255,255,.58), rgba(255,250,236,.28) 58%, rgba(255,250,236,.22));
    box-shadow: 0 4px 12px rgba(41,40,32,.045), 0 12px 26px rgba(41,40,32,.06), inset 0 1px 0 rgba(255,255,255,.96);
    -webkit-backdrop-filter: blur(22px) saturate(160%);
    backdrop-filter: blur(22px) saturate(160%);
  }
  #root .home-movie-card:hover,
  #root .search-page .search-movie-card:hover,
  #root .favorite-page-card:hover,
  #root .profile-activity-item:hover,
  #root .momo-app-main .profile-dashboard .profile-activity-item:hover,
  #root .my-review-item:hover,
  #root .liked-review-item:hover,
  #root .all-reviews-mobile-item:hover,
  #root .person-chip:hover {
    border-color: rgba(255,255,255,.98);
    background: linear-gradient(145deg, rgba(255,255,255,.76), rgba(255,250,236,.4) 58%, rgba(255,250,236,.3));
    box-shadow: var(--momo-glass-depth-hover);
    filter: saturate(1.045);
    transform: none;
  }

  /* Keep the three profile destinations identifiable above the shared glass border. */
  #root .momo-app-main .profile-dashboard .profile-reviews-link { border-left-color: #B79C67; }
  #root .momo-app-main .profile-dashboard .profile-liked-reviews-link { border-left-color: #C18A7E; }
  #root .momo-app-main .profile-dashboard .profile-favorites-link { border-left-color: #B38D19; }

  /* Poster frame optics. Images do not jump when hovered. */
  #root .momo-home-poster-frame,
  #root .search-poster-frame,
  #root .favorite-page-poster,
  #root .movie-detail-poster {
    border: 1px solid rgba(255,255,255,.9);
    box-shadow: 0 8px 20px rgba(41,40,32,.12), inset 0 1px rgba(255,255,255,.9);
  }
  #root .favorite-page-poster:hover img,
  #root .momo-home-poster-frame:hover img {
    transform: none;
    filter: saturate(1.06) contrast(1.02);
  }
  #root .favorite-page-poster .favorite-star,
  #root .momo-home-poster-frame .favorite-star {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 5;
    width: 40px;
    height: 40px;
    padding: 0;
  }

  /* One consistent glass treatment for all controls inside every app route. */
  #root .momo-app-main button,
  #root .signup-page button {
    appearance: none;
    border: 1px solid rgba(255,255,255,.9);
    background: var(--momo-glass-button);
    color: #3D4941;
    box-shadow:
      0 2px 5px rgba(41,40,32,.045),
      0 7px 16px rgba(41,40,32,.065),
      inset 0 1px 0 rgba(255,255,255,.98),
      inset 0 -1px 0 rgba(216,201,159,.22);
    -webkit-backdrop-filter: blur(20px) saturate(175%);
    backdrop-filter: blur(20px) saturate(175%);
    transition:
      color var(--momo-motion-material),
      border-color var(--momo-motion-material),
      background var(--momo-motion-material),
      box-shadow var(--momo-motion-material),
      filter var(--momo-motion-material),
      transform var(--momo-motion-press);
  }
  #root .momo-app-main button:hover:not(:disabled),
  #root .signup-page button:hover:not(:disabled) {
    border-color: rgba(255,255,255,1);
    background: var(--momo-glass-button-hover);
    color: #292820;
    box-shadow: var(--momo-glass-depth-hover);
    filter: saturate(1.1) brightness(1.02);
    transform: none;
  }
  #root .momo-app-main button:active:not(:disabled),
  #root .signup-page button:active:not(:disabled) {
    background: linear-gradient(145deg, rgba(255,250,236,.74), rgba(255,241,178,.48));
    box-shadow: var(--momo-glass-depth-active);
    filter: none;
    transform: scale(.985);
    transition-duration: var(--momo-motion-press);
  }
  #root .momo-app-main button:focus-visible,
  #root .signup-page button:focus-visible,
  #root .momo-app-header button:focus-visible,
  #root .momo-app-header a:focus-visible {
    outline: 3px solid rgba(111,90,19,.56);
    outline-offset: 3px;
  }
  #root .momo-app-main button:disabled,
  #root .signup-page button:disabled {
    opacity: .58;
    cursor: not-allowed;
    filter: saturate(.72);
  }

  /* Primary actions: yellow-tinted translucent glass, not opaque yellow buttons. */
  #root .momo-app-main .review-form-actions button,
  #root .momo-app-main .signup-submit,
  #root .momo-app-main .all-reviews-search-submit,
  #root .momo-app-main .favorite-browse-button,
  #root .momo-app-main .recommend-button,
  #root .momo-app-main .profile-edit-submit,
  #root .momo-app-main .profile-edit-image-save,
  #root .momo-app-main .home-favorites-more,
  #root .signup-page .signup-submit {
    border: 1px solid rgba(255,255,255,.94);
    background: var(--momo-glass-button-primary);
    color: #4D421F;
    box-shadow: 0 3px 8px rgba(92,76,29,.075), 0 9px 19px rgba(92,76,29,.09), inset 0 1px 0 rgba(255,255,255,.98), inset 0 -1px rgba(214,180,63,.18);
    -webkit-backdrop-filter: blur(22px) saturate(175%);
    backdrop-filter: blur(22px) saturate(175%);
  }
  #root .momo-app-main .review-form-actions button:hover:not(:disabled),
  #root .momo-app-main .signup-submit:hover:not(:disabled),
  #root .momo-app-main .all-reviews-search-submit:hover:not(:disabled),
  #root .momo-app-main .favorite-browse-button:hover:not(:disabled),
  #root .momo-app-main .recommend-button:hover:not(:disabled),
  #root .momo-app-main .profile-edit-submit:hover:not(:disabled),
  #root .momo-app-main .profile-edit-image-save:hover:not(:disabled),
  #root .momo-app-main .home-favorites-more:hover:not(:disabled),
  #root .signup-page .signup-submit:hover:not(:disabled) {
    border-color: rgba(255,255,255,1);
    background: var(--momo-glass-button-primary-hover);
    box-shadow: 0 6px 12px rgba(92,76,29,.085), 0 15px 27px rgba(92,76,29,.12), inset 0 1px 0 rgba(255,255,255,1);
    color: #3F3519;
  }

  /* Text-link controls have the same refractive surface as buttons. */
  #root .momo-app-main .page-back-link,
  #root .momo-app-main .detail-back-button,
  #root .momo-app-main .favorite-back-button,
  #root .momo-app-main .review-detail-back {
    border: 1px solid rgba(255,255,255,.9);
    border-radius: 999px;
    background: var(--momo-glass-button);
    color: #514C40;
    box-shadow: 0 3px 8px rgba(41,40,32,.045), 0 7px 15px rgba(41,40,32,.055), inset 0 1px rgba(255,255,255,.98);
    -webkit-backdrop-filter: blur(20px) saturate(170%);
    backdrop-filter: blur(20px) saturate(170%);
  }
  #root .momo-app-main .page-back-link:hover,
  #root .momo-app-main .detail-back-button:hover,
  #root .momo-app-main .favorite-back-button:hover,
  #root .momo-app-main .review-detail-back:hover {
    border-color: rgba(255,255,255,1);
    background: var(--momo-glass-button-hover);
    box-shadow: var(--momo-glass-depth-hover);
  }

  /* Selected, destructive and saved states use tinted glass without hiding depth. */
  #root .momo-app-main .selected-like,
  #root .momo-app-main .rating-vote-button.is-like.selected-like,
  #root .momo-app-main .all-reviews-pagination button.active,
  #root .momo-app-main .my-reviews-pagination button.active,
  #root .momo-app-main .liked-reviews-pagination button.active {
    border-color: rgba(190,162,82,.74);
    background: linear-gradient(145deg, rgba(255,255,255,.82), rgba(255,228,141,.54) 58%, rgba(255,212,59,.28));
    color: #5A4815;
    box-shadow: 0 4px 10px rgba(92,76,29,.075), inset 0 1px rgba(255,255,255,1);
  }
  #root .momo-app-main .selected-dislike,
  #root .momo-app-main .rating-vote-button.is-dislike.selected-dislike {
    border-color: rgba(190,132,121,.66);
    background: linear-gradient(145deg, rgba(255,255,255,.82), rgba(247,222,215,.52) 58%, rgba(228,184,171,.24));
    color: #814F49;
    box-shadow: 0 4px 10px rgba(97,53,47,.06), inset 0 1px rgba(255,255,255,1);
  }
  #root .momo-app-main .profile-delete-button,
  #root .momo-app-main .review-action-button.delete,
  #root .momo-app-main .liked-review-unlike,
  #root .momo-app-main .review-comment-actions .delete {
    border-color: rgba(221,171,160,.78);
    background: linear-gradient(145deg, rgba(255,255,255,.82), rgba(250,232,226,.5) 58%, rgba(229,184,173,.24));
    color: #8C5149;
    box-shadow: 0 3px 8px rgba(98,55,47,.045), inset 0 1px rgba(255,255,255,.98);
  }
  #root .momo-app-main .profile-delete-button:hover:not(:disabled),
  #root .momo-app-main .review-action-button.delete:hover:not(:disabled),
  #root .momo-app-main .liked-review-unlike:hover:not(:disabled),
  #root .momo-app-main .review-comment-actions .delete:hover:not(:disabled) {
    border-color: rgba(212,152,139,.9);
    background: linear-gradient(145deg, rgba(255,255,255,.92), rgba(250,226,219,.7));
    color: #773D37;
  }
  #root .momo-app-main .favorite-star {
    border: 1px solid rgba(255,255,255,.72);
    border-radius: 12px;
    background: linear-gradient(145deg, rgba(41,40,32,.58), rgba(41,40,32,.34));
    color: rgba(255,255,255,.94);
    box-shadow: 0 6px 16px rgba(0,0,0,.18), inset 0 1px rgba(255,255,255,.38);
    -webkit-backdrop-filter: blur(20px) saturate(175%);
    backdrop-filter: blur(20px) saturate(175%);
  }
  #root .momo-app-main .favorite-star:hover:not(:disabled) {
    border-color: rgba(255,255,255,.98);
    background: linear-gradient(145deg, rgba(41,40,32,.72), rgba(41,40,32,.46));
    color: #fff;
    box-shadow: 0 8px 19px rgba(0,0,0,.2), inset 0 1px rgba(255,255,255,.52);
  }
  #root .momo-app-main .favorite-star.is-active {
    border-color: rgba(255,255,255,.95);
    background: linear-gradient(145deg, rgba(255,255,255,.8), rgba(255,225,124,.68) 58%, rgba(255,212,59,.4));
    color: #66510F;
    box-shadow: 0 5px 15px rgba(67,53,22,.16), inset 0 1px rgba(255,255,255,1);
  }

  /* Rating and review reactions keep their semantic tint, with glass translucency. */
  #root .momo-app-main .movie-detail-page .rating-vote-button.is-like,
  #root .momo-app-main .review-detail-page .review-like-button,
  #root .momo-app-main .review-detail-page .comment-like-button {
    border: 1px solid rgba(255,255,255,.94);
    background: linear-gradient(145deg, rgba(255,255,255,.8), rgba(255,239,184,.54) 58%, rgba(255,212,59,.22));
    color: #66510F;
    box-shadow: 0 5px 12px rgba(75,59,16,.06), inset 0 1px 0 rgba(255,255,255,1);
    -webkit-backdrop-filter: blur(18px) saturate(165%);
    backdrop-filter: blur(18px) saturate(165%);
  }
  #root .momo-app-main .movie-detail-page .rating-vote-button.is-dislike,
  #root .momo-app-main .review-detail-page .review-dislike-button,
  #root .momo-app-main .review-detail-page .comment-dislike-button {
    border: 1px solid rgba(255,255,255,.94);
    background: linear-gradient(145deg, rgba(255,255,255,.82), rgba(246,228,225,.56) 58%, rgba(228,184,171,.22));
    color: #84564F;
    box-shadow: 0 5px 12px rgba(76,43,39,.055), inset 0 1px 0 rgba(255,255,255,1);
    -webkit-backdrop-filter: blur(18px) saturate(165%);
    backdrop-filter: blur(18px) saturate(165%);
  }
  #root .momo-app-main .rating-vote-button:hover:not(:disabled),
  #root .momo-app-main .review-like-button:hover:not(:disabled),
  #root .momo-app-main .review-dislike-button:hover:not(:disabled),
  #root .momo-app-main .comment-like-button:hover:not(:disabled),
  #root .momo-app-main .comment-dislike-button:hover:not(:disabled) {
    border-color: rgba(255,255,255,1);
    filter: saturate(1.08);
    box-shadow: 0 8px 16px rgba(50,55,47,.09), inset 0 1px 0 rgba(255,255,255,1);
    transform: none;
  }

  /* Fields are frosted too; placeholder and typed values remain distinct. */
  #root .momo-app-main input:not([type="checkbox"]):not([type="radio"]),
  #root .momo-app-main textarea,
  #root .momo-app-main select,
  #root .momo-app-header .momo-search-input {
    border-color: rgba(255,250,236,.9);
    background: linear-gradient(145deg, rgba(255,255,255,.7), rgba(255,250,236,.36));
    color: #303A33;
    box-shadow: inset 0 1px 2px rgba(41,40,32,.035), 0 1px 0 rgba(255,255,255,.86);
    -webkit-backdrop-filter: blur(16px) saturate(150%);
    backdrop-filter: blur(16px) saturate(150%);
  }
  #root .momo-app-main input:not([type="checkbox"]):not([type="radio"]):focus,
  #root .momo-app-main textarea:focus,
  #root .momo-app-main select:focus,
  #root .momo-app-header .momo-search-input:focus {
    border-color: rgba(216,201,159,.82);
    background: linear-gradient(145deg, rgba(255,255,255,.88), rgba(255,250,236,.55));
    box-shadow: 0 0 0 3px rgba(255,241,178,.16), inset 0 1px 2px rgba(41,40,32,.025);
    outline: none;
  }
  #root .momo-app-main input::placeholder,
  #root .momo-app-main textarea::placeholder,
  #root .momo-app-header .momo-search-input::placeholder {
    color: #777D73;
  }

  /* Review copy is a clean reading surface — no ruled-paper or red margin lines. */
  #root .review-detail-page .review-detail-content {
    border: 1px solid rgba(255,255,255,.86);
    border-radius: 15px;
    background: linear-gradient(140deg, rgba(255,255,255,.6), rgba(242,247,243,.32) 58%, rgba(255,250,236,.22));
    color: #353D36;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.96), 0 8px 20px rgba(41,40,32,.045);
    -webkit-backdrop-filter: blur(22px) saturate(155%);
    backdrop-filter: blur(22px) saturate(155%);
  }
  #root .review-detail-page .review-detail-movie {
    border: 1px solid rgba(255,255,255,.88);
    background: linear-gradient(145deg, rgba(255,255,255,.64), rgba(255,250,236,.32));
    box-shadow: 0 6px 16px rgba(41,40,32,.05), inset 0 1px rgba(255,255,255,.96);
    -webkit-backdrop-filter: blur(22px) saturate(155%);
    backdrop-filter: blur(22px) saturate(155%);
  }

  /* Preserve the homepage's stronger hero glass above shared surface defaults. */
  #root .momo-app-main .home-feature-section {
    border-color: rgba(255,255,255,.92);
    -webkit-backdrop-filter: blur(28px) saturate(175%);
    backdrop-filter: blur(28px) saturate(175%);
  }

  /* Selected reactions remain visibly selected after the shared control treatment. */
  #root .momo-app-main .movie-detail-page .rating-vote-button.is-like.selected-like,
  #root .momo-app-main .review-detail-page .review-like-button:is(.selected-like, .active),
  #root .momo-app-main .review-detail-page .comment-like-button:is(.selected-like, .active) {
    border-color: rgba(190,162,82,.82);
    background: linear-gradient(145deg, rgba(255,255,255,.88), rgba(255,228,141,.66) 58%, rgba(255,212,59,.38));
    color: #5A4815;
    box-shadow: 0 5px 13px rgba(92,76,29,.11), inset 0 1px rgba(255,255,255,1);
  }
  #root .momo-app-main .movie-detail-page .rating-vote-button.is-dislike.selected-dislike,
  #root .momo-app-main .review-detail-page .review-dislike-button:is(.selected-dislike, .active),
  #root .momo-app-main .review-detail-page .comment-dislike-button:is(.selected-dislike, .active) {
    border-color: rgba(190,132,121,.76);
    background: linear-gradient(145deg, rgba(255,255,255,.88), rgba(247,222,215,.64) 58%, rgba(228,184,171,.34));
    color: #814F49;
    box-shadow: 0 5px 13px rgba(97,53,47,.1), inset 0 1px rgba(255,255,255,1);
  }

  /* Sub-430px: cast and crew remain a two-column gallery, never collapse to one stack. */
  @media (max-width: 430px) {
    #root .momo-app-main .movie-detail-page .detail-content-section.people-section .people-list.people-list-compact {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 8px;
    }
  }

  /* Empty list states are glass panels, not dashed paper placeholders. */
  #root .momo-app-main .all-reviews-state,
  #root .momo-app-main .my-reviews-state,
  #root .momo-app-main .liked-reviews-state,
  #root .momo-app-main .review-detail-state {
    min-height: 190px;
    padding: 28px;
    border: 1px solid rgba(255,255,255,.9);
    border-radius: 20px;
    background: linear-gradient(140deg, rgba(255,255,255,.62), rgba(255,250,236,.38) 58%, rgba(255,250,236,.24));
    color: #514C40;
    box-shadow: 0 8px 24px rgba(41,40,32,.055), inset 0 1px rgba(255,255,255,.98);
    -webkit-backdrop-filter: blur(24px) saturate(165%);
    backdrop-filter: blur(24px) saturate(165%);
  }
  #root .momo-app-main .all-reviews-error,
  #root .momo-app-main .my-reviews-state.error,
  #root .momo-app-main .liked-reviews-state.error,
  #root .momo-app-main .review-detail-error {
    border-color: rgba(255,255,255,.92);
    background: linear-gradient(140deg, rgba(255,255,255,.68), rgba(248,232,228,.5) 58%, rgba(238,211,205,.26));
    color: #814E47;
  }
  #root .momo-app-main .all-reviews-table-wrap {
    border: 1px solid rgba(255,255,255,.88);
    border-radius: 14px;
    background: linear-gradient(145deg, rgba(255,255,255,.54), rgba(255,250,236,.32));
    box-shadow: inset 0 1px rgba(255,255,255,.98), 0 7px 18px rgba(41,40,32,.04);
    -webkit-backdrop-filter: blur(22px) saturate(155%);
    backdrop-filter: blur(22px) saturate(155%);
  }
  #root .momo-app-main .all-reviews-table thead th {
    border-bottom-color: rgba(255,255,255,.82);
    background: rgba(255,250,236,.48);
    color: #514C40;
  }
  #root .momo-app-main .all-reviews-table tbody tr,
  #root .momo-app-main .all-reviews-table tbody tr:nth-child(even) {
    background: rgba(255,255,255,.22);
  }
  #root .momo-app-main .all-reviews-table tbody tr:hover {
    background: rgba(255,241,178,.28);
  }
  #root .momo-app-main .all-reviews-table td {
    border-bottom-color: rgba(255,255,255,.68);
    color: #514C40;
  }
  #root .momo-app-main .my-review-item,
  #root .momo-app-main .liked-review-item,
  #root .momo-app-main .all-reviews-mobile-item {
    border-bottom-color: rgba(255,255,255,.72);
    background: linear-gradient(145deg, rgba(255,255,255,.48), rgba(255,250,236,.26));
  }
  #root .momo-app-main .my-review-item:hover,
  #root .momo-app-main .liked-review-item:hover,
  #root .momo-app-main .all-reviews-mobile-item:hover {
    background: linear-gradient(145deg, rgba(255,255,255,.72), rgba(255,250,236,.48));
  }
  #root .momo-app-main .all-reviews-page-info,
  #root .momo-app-main .my-reviews-card-heading > span,
  #root .momo-app-main .liked-reviews-toolbar > span {
    border-color: rgba(255,255,255,.92);
    background: linear-gradient(145deg, rgba(255,255,255,.68), rgba(255,250,236,.42));
    color: #514C40;
    box-shadow: inset 0 1px rgba(255,255,255,.98);
  }

  /* Footer is a quiet translucent panel, not a graph-paper memo. */
  #root .momo-app-footer {
    border-top-color: rgba(255,255,255,.86);
    background: linear-gradient(145deg, rgba(255,255,255,.68), rgba(239,244,239,.42) 58%, rgba(255,250,236,.34));
    box-shadow: 0 -8px 26px rgba(41,40,32,.045), inset 0 1px rgba(255,255,255,.98);
    -webkit-backdrop-filter: blur(28px) saturate(155%);
    backdrop-filter: blur(28px) saturate(155%);
  }
  #root .momo-app-footer::before { display: none; }

  @media (max-width: 700px) {
    #root .momo-app-main > .home-page,
    #root .momo-app-main > .search-page,
    #root .momo-app-main > .favorite-page,
    #root .momo-app-main > .movie-detail-page,
    #root .momo-app-main > .all-reviews-page,
    #root .momo-app-main > .my-reviews-page,
    #root .momo-app-main > .liked-reviews-page,
    #root .momo-app-main > .profile-dashboard,
    #root .momo-app-main > .profile-edit-page,
    #root .momo-app-main > .review-detail-page {
      border-radius: 18px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    #root .momo-app-main *,
    #root .momo-app-header *,
    #root footer * {
      scroll-behavior: auto;
      animation-duration: .01ms;
      animation-iteration-count: 1;
      transition-duration: .01ms;
    }
  }

  /* Final material pass: the previous controls had shadow only, not glass. */
  #root .momo-app-main button,
  #root .signup-page button,
  #root .momo-app-header button {
    border: 1px solid rgba(255,255,255,.9);
    background: linear-gradient(145deg, rgba(255,255,255,.76), rgba(255,250,236,.42) 58%, rgba(232,226,213,.2)), rgba(255,255,255,.14);
    color: #514C40;
    box-shadow: 0 3px 8px rgba(41,40,32,.045), 0 8px 18px rgba(41,40,32,.055), inset 0 1px 0 rgba(255,255,255,.98), inset 0 -1px 0 rgba(216,201,159,.16);
    -webkit-backdrop-filter: blur(18px) saturate(150%);
    backdrop-filter: blur(18px) saturate(150%);
    transition: color 200ms ease, background 200ms ease, border-color 200ms ease, box-shadow 200ms ease, filter 200ms ease, transform 100ms ease;
  }
  #root .momo-app-main button:hover:not(:disabled),
  #root .signup-page button:hover:not(:disabled),
  #root .momo-app-header button:hover:not(:disabled) {
    border-color: rgba(255,255,255,1);
    background: linear-gradient(145deg, rgba(255,255,255,.96), rgba(255,252,243,.68) 58%, rgba(237,230,215,.3)), rgba(255,255,255,.22);
    color: #292820;
    box-shadow: 0 6px 12px rgba(41,40,32,.055), 0 14px 26px rgba(41,40,32,.085), inset 0 1px 0 rgba(255,255,255,1), inset 0 0 0 1px rgba(255,255,255,.22);
    filter: saturate(1.04);
    transform: none;
  }
  #root .momo-app-main button:active:not(:disabled),
  #root .signup-page button:active:not(:disabled),
  #root .momo-app-header button:active:not(:disabled) {
    background: linear-gradient(145deg, rgba(246,242,232,.82), rgba(230,223,207,.48));
    box-shadow: var(--momo-glass-depth-active);
    transform: scale(.985);
  }
  #root .momo-app-main button:disabled,
  #root .signup-page button:disabled,
  #root .momo-app-header button:disabled { opacity: .56; cursor: not-allowed; }

  /* Primary actions: translucent cream-yellow refraction, never flat yellow. */
  #root .momo-app-main .recommend-button,
  #root .momo-app-main .all-reviews-search-submit,
  #root .momo-app-main .favorite-browse-button,
  #root .momo-app-main .home-favorites-more,
  #root .momo-app-main .profile-edit-submit,
  #root .momo-app-main .profile-edit-image-save,
  #root .momo-app-main .review-form-actions button,
  #root .momo-app-main .signup-submit,
  #root .signup-page .signup-submit {
    border-color: rgba(255,255,255,.96);
    background: linear-gradient(140deg, rgba(255,255,255,.88), rgba(255,238,183,.58) 52%, rgba(255,212,59,.28)), rgba(255,255,255,.16);
    color: #4E421F;
    box-shadow: 0 4px 10px rgba(92,76,29,.065), 0 10px 20px rgba(92,76,29,.075), inset 0 1px 0 rgba(255,255,255,1), inset 0 -1px 0 rgba(214,180,63,.16);
    -webkit-backdrop-filter: blur(20px) saturate(155%);
    backdrop-filter: blur(20px) saturate(155%);
  }
  #root .momo-app-main .recommend-button:hover:not(:disabled),
  #root .momo-app-main .all-reviews-search-submit:hover:not(:disabled),
  #root .momo-app-main .favorite-browse-button:hover:not(:disabled),
  #root .momo-app-main .home-favorites-more:hover:not(:disabled),
  #root .momo-app-main .profile-edit-submit:hover:not(:disabled),
  #root .momo-app-main .profile-edit-image-save:hover:not(:disabled),
  #root .momo-app-main .review-form-actions button:hover:not(:disabled),
  #root .momo-app-main .signup-submit:hover:not(:disabled),
  #root .signup-page .signup-submit:hover:not(:disabled) {
    background: linear-gradient(140deg, rgba(255,255,255,.98), rgba(255,235,163,.76) 52%, rgba(255,212,59,.42)), rgba(255,255,255,.24);
    color: #3D3318;
  }

  /* Reactions retain their meaning through translucent semantic tints. */
  #root .momo-app-main .detail-reaction-count:first-child,
  #root .momo-app-main .rating-vote-button.is-like,
  #root .momo-app-main .review-like-button,
  #root .momo-app-main .comment-like-button,
  #root .momo-app-main .selected-like {
    border-color: rgba(214,180,63,.48);
    background-color: transparent;
    background-image: linear-gradient(145deg, rgba(255,255,255,.92), rgba(255,241,190,.5) 58%, rgba(255,212,59,.18));
    color: #66510F;
    -webkit-backdrop-filter: blur(22px) saturate(175%);
    backdrop-filter: blur(22px) saturate(175%);
  }
  #root .momo-app-main .detail-reaction-count:last-child,
  #root .momo-app-main .rating-vote-button.is-dislike,
  #root .momo-app-main .review-dislike-button,
  #root .momo-app-main .comment-dislike-button,
  #root .momo-app-main .selected-dislike {
    border-color: rgba(218,174,164,.56);
    background-color: transparent;
    background-image: linear-gradient(145deg, rgba(255,255,255,.94), rgba(250,233,228,.58) 58%, rgba(229,184,173,.2));
    color: #87534B;
    -webkit-backdrop-filter: blur(22px) saturate(165%);
    backdrop-filter: blur(22px) saturate(165%);
  }
  #root .momo-app-main .profile-delete-button,
  #root .momo-app-main .review-action-button.delete,
  #root .momo-app-main .liked-review-unlike,
  #root .momo-app-main .review-comment-actions .delete {
    border-color: rgba(218,168,157,.7);
    background: linear-gradient(145deg, rgba(255,255,255,.84), rgba(250,233,228,.56) 58%, rgba(229,184,173,.22));
    color: #884F47;
    -webkit-backdrop-filter: blur(18px) saturate(145%);
    backdrop-filter: blur(18px) saturate(145%);
  }

  /* Quiet cinematic canvas: atmospheric cream, not a yellow paper sheet. */
  body {
    background-color: #F5F2EB;
    background-image: radial-gradient(ellipse at 12% 0%, rgba(255,255,255,.9), transparent 48rem), radial-gradient(ellipse at 94% 10%, rgba(204,190,158,.13), transparent 42rem), radial-gradient(ellipse at 52% 100%, rgba(216,221,205,.12), transparent 52rem);
    background-attachment: fixed;
  }
  #root .momo-app-main > .home-page,
  #root .momo-app-main > .search-page,
  #root .momo-app-main > .favorite-page,
  #root .momo-app-main > .movie-detail-page,
  #root .momo-app-main > .all-reviews-page,
  #root .momo-app-main > .my-reviews-page,
  #root .momo-app-main > .liked-reviews-page,
  #root .momo-app-main > .profile-dashboard,
  #root .momo-app-main > .profile-edit-page,
  #root .momo-app-main > .profile-page,
  #root .momo-app-main > .review-detail-page {
    background-color: transparent;
    border-radius: 0;
  }
  #root .momo-app-main > .home-page { background-image: radial-gradient(ellipse at 88% 0%, rgba(214,187,132,.11), transparent 42rem); }
  #root .momo-app-main > .search-page { background-image: radial-gradient(ellipse at 8% 0%, rgba(255,212,59,.12), transparent 42rem); }
  #root .momo-app-main > .favorite-page {
    background-image:
      radial-gradient(ellipse at 92% 0%, rgba(255,212,59,.12), transparent 42rem),
      linear-gradient(180deg, rgba(255,212,59,.07), transparent 620px);
  }
  #root .momo-app-main > .movie-detail-page { background-image: radial-gradient(ellipse at 88% 0%, rgba(157,174,178,.11), transparent 42rem); }

  /* The same material on panels, cards and editing surfaces. */
  #root .home-feature-section,
  #root .home-feature-info,
  #root .home-favorites-empty,
  #root .home-brand-line,
  #root .search-page-heading,
  #root .favorite-page-heading,
  #root .favorite-page-empty,
  #root .favorite-page-card,
  #root .profile-dashboard-heading,
  #root .profile-dashboard .profile-card,
  #root .profile-activity-item,
  #root .profile-edit-heading,
  #root .profile-edit-card,
  #root .profile-edit-photo-card,
  #root .profile-edit-details,
  #root .all-reviews-heading,
  #root .all-reviews-card,
  #root .all-reviews-search,
  #root .my-reviews-heading,
  #root .my-reviews-card,
  #root .liked-reviews-heading,
  #root .liked-reviews-card,
  #root .movie-detail-page .movie-detail-header,
  #root .movie-detail-page .movie-rating-panel,
  #root .movie-detail-page .detail-content-section,
  #root .review-detail-page .review-detail-card,
  #root .review-detail-page .review-comment-card,
  #root .signup-page .signup-card {
    border-color: rgba(255,255,255,.9);
    background: linear-gradient(138deg, rgba(255,255,255,.74), rgba(255,250,236,.38) 58%, rgba(232,226,213,.18)), rgba(255,255,255,.12);
    box-shadow: 0 4px 10px rgba(41,40,32,.04), 0 16px 34px rgba(41,40,32,.065), inset 0 1px 0 rgba(255,255,255,.98), inset 0 -1px 0 rgba(216,201,159,.16);
    -webkit-backdrop-filter: blur(24px) saturate(150%);
    backdrop-filter: blur(24px) saturate(150%);
  }
  #root .home-feature-info { background: linear-gradient(140deg, rgba(255,255,255,.56), rgba(255,250,236,.24)); }
  /* Smaller but visible surfaces that were missed by the first pass. */
  #root .movie-detail-page .person-filmography,
  #root .review-detail-page .review-detail-movie {
    border: 1px solid rgba(255,255,255,.9);
    border-radius: 18px;
    background: linear-gradient(140deg, rgba(255,255,255,.76), rgba(255,250,236,.42) 60%, rgba(232,226,213,.2));
    box-shadow: 0 4px 10px rgba(41,40,32,.04), 0 14px 28px rgba(41,40,32,.06), inset 0 1px rgba(255,255,255,.98);
    -webkit-backdrop-filter: blur(22px) saturate(150%);
    backdrop-filter: blur(22px) saturate(150%);
  }
  #root .movie-detail-page .person-filmography { border-left: 1px solid rgba(255,255,255,.9); }
  #root .movie-detail-page .filmography-list .filmography-item {
    border: 1px solid rgba(255,255,255,.88);
    border-radius: 12px;
    background: linear-gradient(145deg, rgba(255,255,255,.72), rgba(255,250,236,.4));
    box-shadow: 0 3px 8px rgba(41,40,32,.035), inset 0 1px rgba(255,255,255,.98);
    -webkit-backdrop-filter: blur(16px) saturate(145%);
    backdrop-filter: blur(16px) saturate(145%);
  }
  #root .movie-detail-page .people-list .person-chip > div:first-child {
    border: 1px solid rgba(255,255,255,.88);
    border-radius: 10px;
    background: linear-gradient(145deg, rgba(255,255,255,.78), rgba(255,250,236,.48));
    box-shadow: inset 0 1px rgba(255,255,255,.98);
  }
  #root .review-detail-page .review-detail-movie-poster,
  #root .review-detail-page .review-detail-poster-placeholder {
    border-color: rgba(255,255,255,.9);
    background: linear-gradient(145deg, rgba(255,255,255,.78), rgba(255,250,236,.48));
  }
  #root .profile-edit-page .profile-edit-sidebar-note {
    border-color: rgba(255,255,255,.9);
    border-radius: 14px;
    background: linear-gradient(145deg, rgba(255,255,255,.68), rgba(255,250,236,.34));
    box-shadow: 0 4px 10px rgba(41,40,32,.035), inset 0 1px rgba(255,255,255,.98);
    -webkit-backdrop-filter: blur(18px) saturate(145%);
    backdrop-filter: blur(18px) saturate(145%);
  }
  #root .home-brand-line::before { display: none; content: none; }

  #root .favorite-page .favorite-page-card {
    border-color: rgba(255,255,255,.9);
    background: linear-gradient(145deg, rgba(255,255,255,.78), rgba(255,250,236,.46) 62%, rgba(232,226,213,.2));
    box-shadow: 0 4px 10px rgba(41,40,32,.04), 0 16px 30px rgba(41,40,32,.07), inset 0 1px rgba(255,255,255,.98);
    -webkit-backdrop-filter: blur(24px) saturate(150%);
    backdrop-filter: blur(24px) saturate(150%);
  }


  /* Cinematic hero and rating glass keep their stronger optical depth. */
  #root .movie-detail-page .movie-detail-header {
    border-color: rgba(255,255,255,.9);
    background:
      radial-gradient(ellipse at 8% 4%, rgba(255,255,255,.78), transparent 44%),
      radial-gradient(ellipse at 96% 100%, rgba(255,212,59,.12), transparent 46%),
      linear-gradient(132deg, rgba(255,255,255,.76), rgba(255,250,236,.42));
    -webkit-backdrop-filter: blur(32px) saturate(152%);
    backdrop-filter: blur(32px) saturate(152%);
  }
  #root .movie-detail-page .movie-rating-panel {
    border-color: rgba(255,255,255,.82);
    background:
      radial-gradient(ellipse at 8% 0%, rgba(255,255,255,.82), transparent 48%),
      linear-gradient(140deg, rgba(255,255,255,.74), rgba(255,250,236,.5));
    -webkit-backdrop-filter: blur(26px) saturate(150%);
    backdrop-filter: blur(26px) saturate(150%);
  }

  /* Remove memo-pad markers and dotted separators. */
  #root .profile-dashboard .profile-card::before,
  #root .profile-dashboard-heading::before,
  #root .profile-edit-heading::before,
  #root .all-reviews-heading::before,
  #root .my-reviews-heading::before,
  #root .liked-reviews-heading::before,
  #root .favorite-page-heading::before,
  #root .home-favorites-empty::before {
    display: none;
    content: none;
  }
  #root .profile-user-info p { border-bottom: 0; padding: 5px 0; }
  #root .profile-user-info p + p { border-top: 1px solid rgba(229,222,207,.64); }
  #root .home-page .state-message,
  #root .home-page .empty-review-panel,
  #root .home-favorites-empty,
  #root .poster-placeholder,
  #root .people-empty,
  #root .all-reviews-state,
  #root .my-reviews-state,
  #root .liked-reviews-state,
  #root .review-detail-state,
  #root .favorite-page-empty,
  #root .review-detail-page .review-detail-content,
  #root .home-page .recommend-state {
    border: 1px solid rgba(255,255,255,.9);
    border-style: solid;
    border-radius: 18px;
    background: linear-gradient(140deg, rgba(255,255,255,.72), rgba(255,250,236,.38) 58%, rgba(232,226,213,.2)), rgba(255,255,255,.12);
    color: #514C40;
    box-shadow: 0 4px 10px rgba(41,40,32,.035), 0 14px 28px rgba(41,40,32,.055), inset 0 1px 0 rgba(255,255,255,.98);
    -webkit-backdrop-filter: blur(22px) saturate(150%);
    backdrop-filter: blur(22px) saturate(150%);
  }
  #root .home-page .recommend-state {
    display: grid;
    min-height: 100%;
    place-items: center;
    padding: 28px;
    color: #514C40;
    text-align: center;
    background: radial-gradient(ellipse at 50% 0%, rgba(255,255,255,.9), transparent 58%), linear-gradient(140deg, rgba(255,255,255,.72), rgba(255,250,236,.42));
  }
  #root .review-detail-page .review-detail-content {
    min-height: 170px;
    padding: clamp(20px, 3vw, 30px);
    background: linear-gradient(140deg, rgba(255,255,255,.74), rgba(255,250,236,.38) 58%, rgba(232,226,213,.2));
    line-height: 1.85;
  }

  /* Footer: frosted glass, never graph paper. */
  #root .momo-app-footer {
    background: linear-gradient(145deg, rgba(255,255,255,.74), rgba(255,250,236,.62));
    border-top: 1px solid rgba(255,255,255,.9);
    box-shadow: 0 -8px 26px rgba(41,40,32,.045), inset 0 1px 0 rgba(255,255,255,.98);
    -webkit-backdrop-filter: blur(28px) saturate(150%);
    backdrop-filter: blur(28px) saturate(150%);
  }
  #root .momo-app-footer::before { display: none; content: none; background: none; background-image: none; }


  /* Header links and search action are buttons in the visual language too. */
  #root .momo-app-header nav a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 38px;
    padding: 0 14px;
    border: 1px solid rgba(255,255,255,.84);
    border-radius: 999px;
    background: linear-gradient(145deg, rgba(255,255,255,.72), rgba(255,250,236,.38));
    color: #514C40;
    box-shadow: 0 3px 8px rgba(41,40,32,.04), inset 0 1px rgba(255,255,255,.98);
    -webkit-backdrop-filter: blur(18px) saturate(150%);
    backdrop-filter: blur(18px) saturate(150%);
    transition: background 200ms ease, border-color 200ms ease, box-shadow 200ms ease, color 200ms ease;
  }
  #root .momo-app-header nav a.active,
  #root .momo-app-header nav a[aria-current="page"] {
    border-color: rgba(214,180,63,.48);
    background: linear-gradient(145deg, rgba(255,255,255,.9), rgba(255,246,217,.62));
    color: #66510F;
    box-shadow: 0 4px 10px rgba(41,40,32,.05), inset 0 1px rgba(255,255,255,1);
  }
  #root .momo-app-header nav a:hover,
  #root .momo-app-header nav a:focus-visible {
    border-color: rgba(255,255,255,1);
    background: linear-gradient(145deg, rgba(255,255,255,.96), rgba(255,250,236,.72));
    color: #292820;
    box-shadow: 0 6px 13px rgba(41,40,32,.065), inset 0 1px rgba(255,255,255,1);
  }
  #root .momo-app-header .momo-search-button {
    border: 1px solid rgba(255,255,255,.92);
    border-radius: 11px;
    background: linear-gradient(145deg, rgba(255,255,255,.82), rgba(255,250,236,.48));
    color: #514C40;
    box-shadow: 0 3px 8px rgba(41,40,32,.045), inset 0 1px rgba(255,255,255,.98);
    -webkit-backdrop-filter: blur(18px) saturate(150%);
    backdrop-filter: blur(18px) saturate(150%);
  }

  /* Link-shaped actions use the same glass edge as their button counterparts. */
  #root .momo-app-main .page-back-link,
  #root .momo-app-main .favorite-back-button,
  #root .momo-app-main .review-detail-back,
  #root .momo-app-main .profile-dashboard-edit,
  #root .momo-app-main .my-reviews-heading > a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 38px;
    padding: 0 15px;
    border: 1px solid rgba(255,255,255,.9);
    border-radius: 999px;
    background: linear-gradient(145deg, rgba(255,255,255,.78), rgba(255,250,236,.42));
    color: #514C40;
    text-decoration: none;
    box-shadow: 0 3px 8px rgba(41,40,32,.045), inset 0 1px rgba(255,255,255,.98);
    -webkit-backdrop-filter: blur(18px) saturate(150%);
    backdrop-filter: blur(18px) saturate(150%);
  }
  #root .momo-app-main .page-back-link:hover,
  #root .momo-app-main .favorite-back-button:hover,
  #root .momo-app-main .review-detail-back:hover,
  #root .momo-app-main .profile-dashboard-edit:hover,
  #root .momo-app-main .my-reviews-heading > a:hover {
    border-color: rgba(255,255,255,1);
    background: linear-gradient(145deg, rgba(255,255,255,.96), rgba(255,250,236,.7));
    color: #292820;
    box-shadow: 0 6px 14px rgba(41,40,32,.075), inset 0 1px rgba(255,255,255,1);
  }

  /* The no-recommendation state must not reveal the visual's dark poster backing. */
  #root .home-page .home-feature-visual,
  #root .home-page .home-feature-visual .recommend-banner {
    background: #F4F0E7;
  }
  #root .home-page .home-feature-visual .recommend-state {
    border: 1px solid rgba(255,255,255,.94);
    border-radius: 0;
    background: linear-gradient(145deg, #FFFEFA, #F2EEE5);
    color: #514C40;
    box-shadow: inset 0 1px rgba(255,255,255,1);
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
  }

  /* Keep the poster fallback clean and the film note copy free of ruled lines. */
  #root .review-detail-page .review-detail-content {
    background: linear-gradient(140deg, rgba(255,255,255,.78), rgba(255,250,236,.48) 58%, rgba(232,226,213,.22));
    background-image: linear-gradient(140deg, rgba(255,255,255,.78), rgba(255,250,236,.48) 58%, rgba(232,226,213,.22));
    border-color: rgba(255,255,255,.9);
    color: #3F3A31;
  }


  /* The movie hero keeps its own lens-like refraction, above the common panel layer. */
  #root .movie-detail-page .movie-detail-header {
    border-color: rgba(255,255,255,.9);
    background:
      radial-gradient(ellipse at 8% 4%, rgba(255,255,255,.9), transparent 42%),
      radial-gradient(ellipse at 96% 100%, rgba(255,212,59,.1), transparent 46%),
      linear-gradient(132deg, rgba(255,255,255,.76), rgba(255,250,236,.42));
    -webkit-backdrop-filter: blur(32px) saturate(152%);
    backdrop-filter: blur(32px) saturate(152%);
  }

  /* These were more specific than the earlier memo-marker reset. */
  #root .profile-dashboard .profile-dashboard-heading::before,
  #root .profile-edit-page .profile-edit-heading::before {
    display: none;
    content: none;
  }

  /* More visible glass optics: a clearer refraction tint and deeper edge light. */
  #root .momo-app-main button,
  #root .signup-page button,
  #root .momo-app-header button {
    background:
      linear-gradient(112deg, rgba(255,255,255,.62), rgba(255,255,255,.2) 38%, rgba(255,250,236,.25) 100%),
      linear-gradient(145deg, rgba(255,255,255,.56), rgba(255,250,236,.26) 58%, rgba(255,250,236,.16));
    border-color: rgba(255,255,255,.96);
    box-shadow:
      0 2px 5px rgba(41,40,32,.045),
      0 10px 22px rgba(41,40,32,.085),
      inset 0 1px 0 rgba(255,255,255,1),
      inset 0 -1px 0 rgba(216,201,159,.25);
    -webkit-backdrop-filter: blur(22px) saturate(180%);
    backdrop-filter: blur(22px) saturate(180%);
  }
  #root .momo-app-main button:hover:not(:disabled),
  #root .signup-page button:hover:not(:disabled),
  #root .momo-app-header button:hover:not(:disabled) {
    background:
      linear-gradient(112deg, rgba(255,255,255,.82), rgba(255,255,255,.38) 38%, rgba(255,250,236,.38) 100%),
      linear-gradient(145deg, rgba(255,255,255,.72), rgba(255,250,236,.38) 58%, rgba(255,250,236,.24));
    box-shadow:
      0 5px 10px rgba(41,40,32,.055),
      0 15px 28px rgba(41,40,32,.11),
      inset 0 1px 0 rgba(255,255,255,1),
      inset 0 0 0 1px rgba(255,255,255,.36);
  }
  #root .momo-app-main .recommend-button,
  #root .momo-app-main .all-reviews-search-submit,
  #root .momo-app-main .favorite-browse-button,
  #root .momo-app-main .home-favorites-more,
  #root .momo-app-main .profile-edit-submit,
  #root .momo-app-main .profile-edit-image-save,
  #root .momo-app-main .review-form-actions button,
  #root .momo-app-main .signup-submit,
  #root .signup-page .signup-submit {
    background:
      linear-gradient(112deg, rgba(255,255,255,.88), rgba(255,255,255,.32) 38%, rgba(255,230,149,.35) 100%),
      linear-gradient(140deg, rgba(255,255,255,.62), rgba(255,238,183,.36) 52%, rgba(255,212,59,.18));
    -webkit-backdrop-filter: blur(22px) saturate(180%);
    backdrop-filter: blur(22px) saturate(180%);
  }

  /* The no-recommendation hero uses a warm, translucent lens object. */
  #root .home-page .home-feature-visual .recommend-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    background:
      radial-gradient(ellipse at 50% 8%, rgba(255,255,255,.96), transparent 62%),
      linear-gradient(145deg, #FFFEFA, #FFF1B2);
    color: #514C40;
    font-size: 13px;
    font-weight: 650;
  }
  #root .home-page .home-feature-visual .recommend-state::before {
    display: block;
    width: clamp(132px, 15vw, 176px);
    height: clamp(132px, 15vw, 176px);
    flex: 0 0 auto;
    content: "";
    border: 1px solid rgba(255,255,255,.98);
    border-radius: 50%;
    background:
      radial-gradient(circle at 31% 25%, rgba(255,255,255,.98), rgba(255,255,255,.58) 20%, transparent 37%),
      radial-gradient(circle at 50% 50%, rgba(255,255,255,.86) 0 8%, rgba(255,250,236,.42) 8.5% 18%, transparent 18.5% 28%, rgba(255,255,255,.72) 28.5% 29.5%, transparent 30% 43%, rgba(255,250,236,.28) 43.5% 44.5%, transparent 45%),
      linear-gradient(145deg, rgba(255,255,255,.58), rgba(255,250,236,.22));
    box-shadow:
      0 18px 36px rgba(41,40,32,.09),
      inset 0 1px 0 rgba(255,255,255,1),
      inset 0 -8px 22px rgba(216,201,159,.12),
      0 0 0 10px rgba(255,255,255,.18);
  }
  #root .home-page .home-feature-visual .recommend-state::after {
    display: block;
    content: "MOMO  /  CINEMA ARCHIVE";
    color: #8B805F;
    font-size: 9px;
    font-weight: 850;
    letter-spacing: .18em;
  }


  /* Card navigation is a transparent hit area; the saved-film action is its sibling. */
  #root .momo-app-main button.home-movie-card-open,
  #root .momo-app-main button.home-movie-card-open:hover:not(:disabled),
  #root .momo-app-main button.home-movie-card-open:active:not(:disabled) {
    display: block;
    width: 100%;
    min-width: 0;
    padding: 0;
    border: 0;
    border-radius: 15px;
    background: transparent;
    color: inherit;
    box-shadow: none;
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    filter: none;
    transform: none;
  }
  #root .momo-app-main .home-movie-card-open:focus-visible {
    outline: 3px solid rgba(179,141,25,.7);
    outline-offset: 4px;
  }
  #root .home-movie-card-favorite {
    position: absolute;
    z-index: 6;
    top: 10px;
    right: 10px;
  }
  #root .home-movie-card-favorite .favorite-star {
    position: relative;
    top: auto;
    right: auto;
  }


  /* MOMO brand restoration: warm yellow notebook paper beneath neutral glass. */
  :root {
    --momo-glass-edge-soft: rgba(233,223,197,.76);
    --momo-glass-surface: linear-gradient(138deg, rgba(255,255,255,.78), rgba(255,250,236,.52) 54%, rgba(255,241,178,.24));
    --momo-glass-depth:
      0 2px 5px rgba(41,40,32,.035),
      0 14px 34px rgba(41,40,32,.075),
      inset 0 1px 0 rgba(255,255,255,.98),
      inset 0 -1px 0 rgba(216,201,159,.2);
    --momo-glass-button: linear-gradient(145deg, rgba(255,255,255,.7), rgba(255,250,236,.48) 54%, rgba(255,241,178,.28)), rgba(255,255,255,.16);
    --momo-glass-button-hover: linear-gradient(145deg, rgba(255,255,255,.94), rgba(255,250,236,.7) 54%, rgba(255,241,178,.42)), rgba(255,255,255,.2);
  }

  body {
    background-color: #F5F2EB;
    background-image:
      repeating-linear-gradient(to bottom, transparent 0, transparent 31px, rgba(145,169,190,.19) 31px, rgba(145,169,190,.19) 32px),
      linear-gradient(to right, transparent 0, transparent 54px, rgba(205,112,104,.34) 54px, rgba(205,112,104,.34) 56px, transparent 56px),
      radial-gradient(ellipse at 12% 0%, rgba(255,255,255,.72), transparent 48rem),
      linear-gradient(135deg, #FFF9DF 0%, #FFF4C8 52%, #FFF8DD 100%);
    background-attachment: fixed;
    background-size: auto, auto, auto, auto;
  }

  #root .momo-app-main > .home-page,
  #root .momo-app-main > .search-page,
  #root .momo-app-main > .favorite-page,
  #root .momo-app-main > .movie-detail-page,
  #root .momo-app-main > .all-reviews-page,
  #root .momo-app-main > .my-reviews-page,
  #root .momo-app-main > .liked-reviews-page,
  #root .momo-app-main > .profile-dashboard,
  #root .momo-app-main > .profile-edit-page,
  #root .momo-app-main > .profile-page,
  #root .momo-app-main > .review-detail-page {
    background-color: transparent;
    background-image: none;
    border-radius: 0;
  }

  /* Glass stays clear and warm; no green mineral tint. */
  #root .home-feature-section,
  #root .home-feature-info,
  #root .home-favorites-empty,
  #root .search-page-heading,
  #root .favorite-page-heading,
  #root .favorite-page-empty,
  #root .favorite-page-card,
  #root .profile-dashboard-heading,
  #root .profile-dashboard .profile-card,
  #root .profile-activity-item,
  #root .profile-edit-heading,
  #root .profile-edit-card,
  #root .profile-edit-photo-card,
  #root .profile-edit-details,
  #root .all-reviews-heading,
  #root .all-reviews-card,
  #root .all-reviews-search,
  #root .my-reviews-heading,
  #root .my-reviews-card,
  #root .liked-reviews-heading,
  #root .liked-reviews-card,
  #root .movie-detail-page .movie-detail-header,
  #root .movie-detail-page .movie-rating-panel,
  #root .movie-detail-page .detail-content-section,
  #root .review-detail-page .review-detail-card,
  #root .review-detail-page .review-comment-card,
  #root .signup-page .signup-card {
    border-color: rgba(233,223,197,.78);
    background: linear-gradient(138deg, rgba(255,255,255,.78), rgba(255,250,236,.52) 58%, rgba(255,241,178,.2)), rgba(255,255,255,.12);
    box-shadow: 0 4px 10px rgba(41,40,32,.04), 0 16px 34px rgba(41,40,32,.065), inset 0 1px 0 rgba(255,255,255,.98), inset 0 -1px 0 rgba(216,201,159,.16);
    -webkit-backdrop-filter: blur(24px) saturate(155%);
    backdrop-filter: blur(24px) saturate(155%);
  }

  #root .momo-app-footer {
    background: linear-gradient(145deg, rgba(255,255,255,.82), rgba(255,250,236,.72));
    border-top-color: rgba(233,223,197,.82);
  }

  /* Component-level glass hierarchy: airy outer lens, dense frosted inner panes. */
  #root .momo-app-header, #root .profile-dashboard .profile-card, #root .profile-dashboard .profile-delete-section,
  #root .home-feature-section, #root .home-feature-info, #root .home-favorites-empty, #root .home-brand-line, #root .home-section,
  #root .movie-detail-page .movie-detail-header, #root .movie-detail-page > .detail-content-section, #root .movie-detail-page .movie-rating-panel {
    position: relative; isolation: isolate; border: 1px solid rgba(255,255,255,.96);
    background: linear-gradient(118deg,rgba(255,255,255,.84),rgba(255,255,255,.42) 32%,rgba(255,250,236,.6) 72%,rgba(255,241,178,.3));
    box-shadow: 0 3px 8px rgba(70,58,29,.04),0 16px 36px rgba(70,58,29,.09),inset 0 1px 0 rgba(255,255,255,1),inset 0 -1px 0 rgba(214,180,63,.2);
    -webkit-backdrop-filter: blur(32px) saturate(180%); backdrop-filter: blur(32px) saturate(180%);
  }
  #root .profile-dashboard .profile-card, #root .profile-dashboard .profile-delete-section, #root .home-feature-info, #root .home-favorites-empty,
  #root .movie-detail-page > .detail-content-section, #root .movie-detail-page .movie-rating-panel {
    border-color: rgba(255,255,255,.99);
    background: radial-gradient(ellipse at 12% 0%,rgba(255,255,255,.98),transparent 48%),linear-gradient(142deg,rgba(255,255,255,.84),rgba(255,250,236,.68) 58%,rgba(255,241,178,.34));
    box-shadow: 0 6px 14px rgba(70,58,29,.05),0 20px 40px rgba(70,58,29,.1),inset 0 1px 0 rgba(255,255,255,1),inset 0 0 0 1px rgba(255,255,255,.24);
    -webkit-backdrop-filter: blur(36px) saturate(190%); backdrop-filter: blur(36px) saturate(190%);
  }
  #root .profile-dashboard .profile-card.profile-overview-card, #root .profile-dashboard .profile-card.profile-activity-section { border-radius: 22px; background: linear-gradient(140deg,rgba(255,255,255,.86),rgba(255,250,236,.68) 62%,rgba(255,241,178,.32)); }
  #root .profile-dashboard .profile-activity-section .profile-activity-item { border:1px solid rgba(255,255,255,.96); border-radius:16px; background:linear-gradient(135deg,rgba(255,255,255,.82),rgba(255,250,236,.58) 65%,rgba(255,241,178,.24)); box-shadow:0 4px 13px rgba(70,58,29,.06),inset 0 1px 0 rgba(255,255,255,.99); -webkit-backdrop-filter:blur(26px) saturate(180%); backdrop-filter:blur(26px) saturate(180%); }
  #root .profile-dashboard .profile-delete-section { min-height:86px; margin-top:4px; padding:19px 23px; border-radius:18px; border-top:1px solid rgba(255,255,255,.98); background:linear-gradient(130deg,rgba(255,255,255,.82),rgba(255,250,236,.62)); }
  #root .home-feature-section { overflow:hidden; border-radius:28px; background:radial-gradient(ellipse at 8% 0%,rgba(255,255,255,.98),transparent 48%),radial-gradient(ellipse at 100% 100%,rgba(255,212,59,.24),transparent 48%),linear-gradient(135deg,rgba(255,255,255,.8),rgba(255,250,236,.54) 58%,rgba(255,241,178,.36)); box-shadow:0 8px 18px rgba(70,58,29,.05),0 26px 58px rgba(70,58,29,.12),inset 0 1px 0 rgba(255,255,255,1); -webkit-backdrop-filter:blur(36px) saturate(185%); backdrop-filter:blur(36px) saturate(185%); }
  #root .home-feature-info { border:1px solid rgba(255,255,255,.82); border-radius:22px; background:linear-gradient(120deg,rgba(255,255,255,.86),rgba(255,250,236,.62) 62%,rgba(255,241,178,.3)); box-shadow:inset 0 1px 0 rgba(255,255,255,1),8px 0 28px rgba(255,255,255,.14); }
  #root .home-favorites-empty { min-height:140px; border-radius:20px; }
  #root .home-brand-line { overflow:hidden; border-radius:22px; background:radial-gradient(ellipse at 8% 0%,rgba(255,255,255,.96),transparent 52%),linear-gradient(125deg,rgba(255,255,255,.78),rgba(255,250,236,.56) 58%,rgba(255,241,178,.32)); }
  #root .home-brand-line::before { display:block; content:""; top:18px; bottom:18px; width:2px; background:linear-gradient(180deg,transparent,rgba(214,180,63,.9),transparent); box-shadow:0 0 14px rgba(214,180,63,.24); }
  #root .home-section { padding:clamp(18px,2.2vw,26px); border-radius:22px; border-color:rgba(255,255,255,.84); background:linear-gradient(145deg,rgba(255,255,255,.58),rgba(255,250,236,.38) 64%,rgba(255,241,178,.18)); box-shadow:0 8px 22px rgba(70,58,29,.05),inset 0 1px 0 rgba(255,255,255,.94); -webkit-backdrop-filter:blur(26px) saturate(165%); backdrop-filter:blur(26px) saturate(165%); }
  #root .momo-app-header { background:linear-gradient(110deg,rgba(255,255,255,.92),rgba(255,250,236,.74) 58%,rgba(255,241,178,.36)); border-bottom:1px solid rgba(255,255,255,.98); box-shadow:0 8px 30px rgba(70,58,29,.085),inset 0 1px 0 rgba(255,255,255,1); -webkit-backdrop-filter:blur(40px) saturate(195%); backdrop-filter:blur(40px) saturate(195%); }
  #root .movie-detail-page .movie-detail-header { border-radius:26px; background:radial-gradient(ellipse at 8% 0%,rgba(255,255,255,.98),transparent 44%),radial-gradient(ellipse at 100% 100%,rgba(255,212,59,.24),transparent 46%),linear-gradient(135deg,rgba(255,255,255,.82),rgba(255,250,236,.54) 62%,rgba(255,241,178,.34)); box-shadow:0 8px 18px rgba(70,58,29,.055),0 26px 58px rgba(70,58,29,.13),inset 0 1px 0 rgba(255,255,255,1),inset 0 -1px 0 rgba(214,180,63,.22); -webkit-backdrop-filter:blur(40px) saturate(190%); backdrop-filter:blur(40px) saturate(190%); }
  #root .movie-detail-page > .detail-content-section, #root .movie-detail-page .movie-rating-panel { border-radius:22px; background:radial-gradient(ellipse at 10% 0%,rgba(255,255,255,.99),transparent 48%),linear-gradient(142deg,rgba(255,255,255,.86),rgba(255,250,236,.7) 58%,rgba(255,241,178,.34)); }
  #root .movie-detail-page .movie-score-display, #root .movie-detail-page .rating-distribution, #root .movie-detail-page .detail-reaction-counts .rating-vote-button, #root .movie-detail-page .people-section .person-chip { border:1px solid rgba(255,255,255,.99); border-radius:16px; background:linear-gradient(140deg,rgba(255,255,255,.9),rgba(255,250,236,.7) 64%,rgba(255,241,178,.32)); box-shadow:0 5px 15px rgba(70,58,29,.06),inset 0 1px 0 rgba(255,255,255,1); -webkit-backdrop-filter:blur(30px) saturate(190%); backdrop-filter:blur(30px) saturate(190%); }
  #root .movie-detail-page .people-section .person-chip:hover { border-color:rgba(214,180,63,.78); background:linear-gradient(140deg,rgba(255,255,255,.99),rgba(255,250,236,.8)); box-shadow:0 8px 18px rgba(70,58,29,.095),inset 0 1px 0 rgba(255,255,255,1); }
  @media (max-width:700px) { #root .home-section{padding:17px 14px;border-radius:18px;} #root .home-feature-info{border-radius:17px;} #root .profile-dashboard .profile-delete-section{padding:17px;} #root .movie-detail-page .movie-detail-header{border-radius:20px;} #root .movie-detail-page > .detail-content-section,#root .movie-detail-page .movie-rating-panel{border-radius:18px;} }

  /* Opaque milk-glass pass. These rules intentionally win over legacy page
     surfaces so every named component receives the same visible material. */
  #root .profile-card,
  #root .profile-activity-item,
  #root .profile-user-details > div,
  #root .profile-delete-section,
  #root .home-feature-section,
  #root .home-feature-info,
  #root .home-favorites-empty,
  #root .home-brand-line,
  #root .home-section,
  #root .momo-app-header,
  #root .movie-detail-header,
  #root .detail-content-section,
  #root .movie-rating-panel,
  #root .rating-distribution,
  #root .movie-score-display,
  #root .detail-reaction-counts,
  #root .detail-reaction-counts .rating-vote-button,
  #root .people-section,
  #root .people-section .person-chip {
    border: 1px solid rgba(255,255,255,.98) !important;
    background-color: rgba(255,253,247,.91) !important;
    background-image:
      linear-gradient(132deg, rgba(255,255,255,.98) 0%, rgba(255,255,255,.76) 24%, rgba(255,250,236,.88) 68%, rgba(255,241,178,.54) 100%) !important;
    box-shadow:
      0 2px 5px rgba(74,59,28,.035),
      0 12px 28px rgba(74,59,28,.095),
      0 28px 58px rgba(74,59,28,.055),
      inset 0 1.5px 0 rgba(255,255,255,1),
      inset 0 -1px 0 rgba(214,180,63,.24) !important;
    -webkit-backdrop-filter: blur(34px) saturate(175%) !important;
    backdrop-filter: blur(34px) saturate(175%) !important;
  }

  #root .profile-card,
  #root .profile-activity-item,
  #root .profile-user-details > div,
  #root .profile-delete-section,
  #root .home-feature-info,
  #root .home-favorites-empty,
  #root .detail-content-section,
  #root .movie-rating-panel,
  #root .rating-distribution,
  #root .movie-score-display,
  #root .detail-reaction-counts,
  #root .detail-reaction-counts .rating-vote-button,
  #root .people-section,
  #root .people-section .person-chip {
    background-color: rgba(255,254,250,.95) !important;
    background-image:
      radial-gradient(ellipse at 10% 0%, rgba(255,255,255,1), transparent 56%),
      linear-gradient(145deg, rgba(255,255,255,.96), rgba(255,250,236,.9) 62%, rgba(255,241,178,.48)) !important;
    box-shadow:
      0 5px 12px rgba(74,59,28,.045),
      0 18px 38px rgba(74,59,28,.085),
      inset 0 1.5px 0 rgba(255,255,255,1),
      inset 0 0 0 1px rgba(255,255,255,.44) !important;
    -webkit-backdrop-filter: blur(38px) saturate(185%) !important;
    backdrop-filter: blur(38px) saturate(185%) !important;
  }

  #root .profile-card::before {
    background: linear-gradient(125deg, rgba(255,255,255,.72), transparent 54%, rgba(255,212,59,.12)) !important;
  }

  #root .home-feature-section,
  #root .movie-detail-header {
    border-radius: 28px !important;
    background-image:
      radial-gradient(ellipse at 8% 0%, rgba(255,255,255,.98), transparent 46%),
      radial-gradient(ellipse at 96% 100%, rgba(255,212,59,.2), transparent 48%),
      linear-gradient(135deg, rgba(255,255,255,.92), rgba(255,250,236,.84) 60%, rgba(255,241,178,.5)) !important;
    box-shadow:
      0 8px 18px rgba(74,59,28,.055),
      0 26px 58px rgba(74,59,28,.12),
      inset 0 1.5px 0 rgba(255,255,255,1),
      inset 0 -1px 0 rgba(214,180,63,.24) !important;
    -webkit-backdrop-filter: blur(42px) saturate(190%) !important;
    backdrop-filter: blur(42px) saturate(190%) !important;
  }

  #root .home-section {
    padding: clamp(18px,2.2vw,26px) !important;
    border-radius: 24px !important;
    background-color: rgba(255,252,242,.9) !important;
    background-image: linear-gradient(145deg,rgba(255,255,255,.96),rgba(255,250,236,.88) 65%,rgba(255,241,178,.48)) !important;
  }

  #root .home-feature-info {
    border-radius: 22px !important;
    background-color: rgba(255,254,250,.94) !important;
    background-image: linear-gradient(135deg,rgba(255,255,255,.98),rgba(255,250,236,.9) 72%,rgba(255,241,178,.52)) !important;
  }

  #root .home-favorites-empty,
  #root .profile-delete-section {
    border-radius: 20px !important;
  }

  #root .movie-detail-header {
    padding: clamp(22px,3vw,36px) !important;
  }

  #root .detail-content-section,
  #root .movie-rating-panel {
    border-radius: 22px !important;
  }

  #root .rating-distribution,
  #root .movie-score-display,
  #root .detail-reaction-counts .rating-vote-button,
  #root .people-section .person-chip {
    border-radius: 17px !important;
  }

  #root .momo-app-header {
    background-color: rgba(255,253,247,.88) !important;
    background-image: linear-gradient(110deg,rgba(255,255,255,.98),rgba(255,250,236,.9) 65%,rgba(255,241,178,.48)) !important;
    box-shadow: 0 8px 30px rgba(74,59,28,.09),inset 0 1.5px 0 rgba(255,255,255,1) !important;
    -webkit-backdrop-filter: blur(42px) saturate(195%) !important;
    backdrop-filter: blur(42px) saturate(195%) !important;
  }

  #root .people-section .person-chip:hover {
    background-color: rgba(255,255,255,.99) !important;
    border-color: rgba(214,180,63,.85) !important;
    transform: translateY(-2px);
    box-shadow: 0 9px 22px rgba(74,59,28,.1),inset 0 1px 0 rgba(255,255,255,1) !important;
  }

  @media (max-width:700px) {
    #root .home-section { padding: 17px 14px !important; border-radius: 19px !important; }
    #root .home-feature-section, #root .movie-detail-header { border-radius: 21px !important; }
    #root .detail-content-section, #root .movie-rating-panel { border-radius: 18px !important; }
  }

`;

export default MomoMaterialSystemStyles;
