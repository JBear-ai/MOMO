import { createGlobalStyle } from "styled-components";

/*
 * MOMO shared material layer.
 * Page layout and hierarchy live in the existing page style modules.
 * This file owns only shared glass materials, interactive surfaces and focus.
 */
const MomoMaterialSystemStyles = createGlobalStyle`
  :root {
    --momo-glass-blur: 26px;
    --momo-glass-saturation: 150%;
    --momo-glass-tint: rgba(255, 250, 236, .38);
    --momo-glass-clear: rgba(255, 255, 255, .34);
    --momo-glass-edge: rgba(233, 223, 197, .9);
    --momo-glass-edge-warm: rgba(214, 180, 63, .28);
    --momo-glass-surface:
      linear-gradient(138deg, rgba(255,255,255,.78), rgba(255,250,236,.48) 58%, rgba(255,245,214,.35));
    --momo-glass-depth:
      0 2px 5px rgba(41,40,32,.035),
      0 12px 28px rgba(41,40,32,.075),
      inset 0 1px 0 rgba(255,255,255,.98),
      inset 0 -1px 0 rgba(216,201,159,.16);
    --momo-glass-depth-active:
      0 1px 3px rgba(41,40,32,.05),
      inset 0 2px 5px rgba(41,40,32,.075),
      inset 0 1px 0 rgba(255,255,255,.86);
    --momo-motion-material: 240ms cubic-bezier(.2,.72,.2,1);
    --momo-motion-press: 100ms cubic-bezier(.2,.7,.2,1);
  }

  /* Navigation: a translucent continuous plane with a quiet optical rim. */
  #root .momo-app-header {
    background:
      linear-gradient(180deg, rgba(255,255,255,.78), rgba(255,250,236,.58));
    border-bottom: 1px solid rgba(255,255,255,.9);
    box-shadow:
      0 8px 26px rgba(41,40,32,.065),
      inset 0 1px 0 rgba(255,255,255,.96);
    -webkit-backdrop-filter: blur(30px) saturate(155%);
    backdrop-filter: blur(30px) saturate(155%);
  }

  #root .momo-app-header nav a {
    transition:
      color var(--momo-motion-material),
      background-color var(--momo-motion-material),
      border-color var(--momo-motion-material),
      box-shadow var(--momo-motion-material);
  }

  #root .momo-app-header nav a:hover,
  #root .momo-app-header nav a:focus-visible {
    border-color: rgba(214,180,63,.46);
    background: rgba(255,255,255,.58);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.96), 0 4px 12px rgba(41,40,32,.055);
  }

  #root .momo-app-header nav a.active {
    border-color: rgba(214,180,63,.55);
    background: rgba(255,212,59,.22);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.9);
  }

  /* Major panels: translucent, but with enough pigment for readable content. */
  #root .profile-dashboard .profile-card,
  #root .profile-edit-page .profile-edit-card,
  #root .profile-edit-page .profile-edit-photo-card,
  #root .profile-edit-page .profile-edit-details,
  #root .favorite-page-heading,
  #root .favorite-page-empty,
  #root .search-page-heading,
  #root .my-reviews-heading,
  #root .my-reviews-card,
  #root .liked-reviews-heading,
  #root .liked-reviews-card,
  #root .all-reviews-heading,
  #root .all-reviews-card,
  #root .all-reviews-search,
  #root .movie-detail-page .movie-detail-header,
  #root .movie-detail-page .movie-rating-panel,
  #root .movie-detail-page .detail-content-section,
  #root .movie-detail-page .review-write-section,
  #root .movie-detail-page .detail-review-card,
  #root .review-detail-card,
  #root .review-comment-card,
  #root .signup-card,
  #root .profile-delete-page-card {
    border-color: var(--momo-glass-edge);
    box-shadow: var(--momo-glass-depth);
    -webkit-backdrop-filter: blur(var(--momo-glass-blur)) saturate(var(--momo-glass-saturation));
    backdrop-filter: blur(var(--momo-glass-blur)) saturate(var(--momo-glass-saturation));
  }

  #root .profile-dashboard .profile-card,
  #root .profile-edit-page .profile-edit-card,
  #root .profile-edit-page .profile-edit-photo-card,
  #root .profile-edit-page .profile-edit-details,
  #root .favorite-page-empty,
  #root .my-reviews-card,
  #root .liked-reviews-card,
  #root .all-reviews-card,
  #root .movie-detail-page .movie-rating-panel,
  #root .movie-detail-page .detail-content-section,
  #root .movie-detail-page .review-write-section,
  #root .movie-detail-page .detail-review-card,
  #root .review-detail-card,
  #root .review-comment-card,
  #root .signup-card,
  #root .profile-delete-page-card {
    background: var(--momo-glass-surface);
  }

  #root .movie-detail-page .movie-detail-header {
    background:
      radial-gradient(ellipse at 8% 4%, rgba(255,255,255,.78), transparent 44%),
      radial-gradient(ellipse at 96% 100%, rgba(255,212,59,.16), transparent 46%),
      linear-gradient(132deg, rgba(255,255,255,.76), rgba(255,250,236,.42));
  }

  /* Main cinematic surfaces keep a stronger refractive layer than compact cards. */
  #root .movie-detail-page .movie-detail-header {
    border-color: rgba(255,255,255,.88);
    backdrop-filter: blur(32px) saturate(152%);
    -webkit-backdrop-filter: blur(32px) saturate(152%);
  }
  #root .movie-detail-page .movie-rating-panel {
    border-color: rgba(255,255,255,.82);
    background: radial-gradient(ellipse at 8% 0%, rgba(255,255,255,.82), transparent 48%), linear-gradient(140deg, rgba(255,255,255,.74), rgba(255,250,236,.5));
  }
  #root .profile-edit-page .profile-edit-photo-card {
    backdrop-filter: blur(24px) saturate(145%);
    -webkit-backdrop-filter: blur(24px) saturate(145%);
  }

  /* Smaller surfaces keep their own silhouettes instead of becoming uniform cards. */
  #root .favorite-page .favorite-page-card,
  #root .profile-dashboard .profile-activity-item,
  #root .search-page .movie-card,
  #root .search-page .movie-item,
  #root .my-review-item,
  #root .liked-review-item,
  #root .all-reviews-mobile-item,
  #root .person-chip,
  #root .review-comment-item,
  #root .review-detail-movie {
    border-color: rgba(255,255,255,.84);
    box-shadow:
      0 4px 12px rgba(41,40,32,.045),
      inset 0 1px 0 rgba(255,255,255,.94);
  }

  #root .favorite-page .favorite-page-card,
  #root .profile-dashboard .profile-activity-item,
  #root .search-page .movie-card,
  #root .search-page .movie-item,
  #root .my-review-item,
  #root .liked-review-item,
  #root .all-reviews-mobile-item,
  #root .person-chip {
    transition:
      border-color var(--momo-motion-material),
      background-color var(--momo-motion-material),
      box-shadow var(--momo-motion-material),
      filter var(--momo-motion-material);
  }

  #root .favorite-page .favorite-page-card:hover,
  #root .profile-dashboard .profile-activity-item:hover,
  #root .search-page .movie-card:hover,
  #root .search-page .movie-item:hover,
  #root .my-review-item:hover,
  #root .liked-review-item:hover,
  #root .all-reviews-mobile-item:hover,
  #root .person-chip:hover {
    border-color: rgba(255,255,255,.98);
    box-shadow:
      0 5px 14px rgba(41,40,32,.055),
      0 16px 30px rgba(41,40,32,.085),
      inset 0 1px 0 rgba(255,255,255,1);
    filter: saturate(1.04);
  }

  #root .favorite-page .favorite-page-card { border-color: #E9DFC5; }

  /* The saved-film action is anchored to the poster, without shifting the card itself. */
  #root .favorite-page .favorite-page-poster .favorite-star,
  #root .momo-home-poster-frame .favorite-star {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 5;
    width: 40px;
    height: 40px;
    padding: 0;
  }

  /* Preserve semantic left-edge cues for the three profile destinations. */
  #root .profile-dashboard .profile-activity-item[data-tone="writing"] { border-left-color: #D6B43F; }
  #root .profile-dashboard .profile-activity-item[data-tone="liked"] { border-left-color: #B98778; }
  #root .profile-dashboard .profile-activity-item[data-tone="saved"] { border-left-color: #829276; }

  /* Poster edges are crisp; the image remains the visual focus. */
  #root .favorite-page .favorite-page-poster,
  #root .movie-detail-page .movie-detail-poster,
  #root .review-detail-movie-poster,
  #root .liked-review-poster,
  #root .all-review-poster,
  #root .my-review-poster {
    box-shadow: 0 8px 20px rgba(34,31,24,.12), inset 0 1px 0 rgba(255,255,255,.86);
  }

  /* Reusable controls: optical edge-light and pressure feedback, no lift motion. */
  #root .profile-button,
  #root .all-reviews-pagination button,
  #root .my-reviews-pagination button,
  #root .liked-reviews-pagination button,
  #root .review-edit-buttons button,
  #root .review-comment-form button,
  #root .liked-review-unlike,
  #root .reaction-button,
  #root .favorite-browse-button,
  #root .favorite-back-button,
  #root .page-back-link,
  #root .detail-back-button,
  #root .review-detail-back,
  #root .review-action-button,
  #root .all-reviews-search-submit,
  #root .all-reviews-search-reset,
  #root .rating-vote-button,
  #root .review-form-actions button,
  #root .signup-submit,
  #root .favorite-star,
  #root .profile-dashboard-edit,
  #root .profile-delete-button,
  #root .profile-edit-page .profile-image-buttons button,
  #root .review-like-button,
  #root .review-dislike-button,
  #root .comment-like-button,
  #root .comment-dislike-button,
  #root .recommend-button,
  #root .people-more-button,
  #root .person-bio-toggle,
  #root .movie-review-button,
  #root .movie-like-button,
  #root .momo-app-header button {
    border-color: rgba(255,255,255,.82);
    box-shadow:
      0 2px 4px rgba(41,40,32,.04),
      0 6px 14px rgba(41,40,32,.055),
      inset 0 1px 0 rgba(255,255,255,.94);
    transition:
      color var(--momo-motion-material),
      background-color var(--momo-motion-material),
      border-color var(--momo-motion-material),
      box-shadow var(--momo-motion-material),
      filter var(--momo-motion-material),
      transform var(--momo-motion-press);
  }

  #root .profile-button:hover:not(:disabled),
  #root .all-reviews-pagination button:hover:not(:disabled),
  #root .my-reviews-pagination button:hover:not(:disabled),
  #root .liked-reviews-pagination button:hover:not(:disabled),
  #root .review-edit-buttons button:hover:not(:disabled),
  #root .review-comment-form button:hover:not(:disabled),
  #root .liked-review-unlike:hover:not(:disabled),
  #root .reaction-button:hover:not(:disabled),
  #root .favorite-browse-button:hover:not(:disabled),
  #root .favorite-back-button:hover,
  #root .page-back-link:hover,
  #root .detail-back-button:hover,
  #root .review-detail-back:hover,
  #root .review-action-button:hover:not(:disabled),
  #root .all-reviews-search-submit:hover:not(:disabled),
  #root .all-reviews-search-reset:hover:not(:disabled),
  #root .rating-vote-button:hover:not(:disabled),
  #root .review-form-actions button:hover:not(:disabled),
  #root .signup-submit:hover:not(:disabled),
  #root .favorite-star:hover:not(:disabled),
  #root .profile-dashboard-edit:hover,
  #root .profile-delete-button:hover:not(:disabled),
  #root .profile-edit-page .profile-image-buttons button:hover:not(:disabled),
  #root .review-like-button:hover:not(:disabled),
  #root .review-dislike-button:hover:not(:disabled),
  #root .comment-like-button:hover:not(:disabled),
  #root .comment-dislike-button:hover:not(:disabled),
  #root .recommend-button:hover:not(:disabled),
  #root .people-more-button:hover:not(:disabled),
  #root .person-bio-toggle:hover:not(:disabled),
  #root .movie-review-button:hover:not(:disabled),
  #root .movie-like-button:hover:not(:disabled),
  #root .momo-app-header button:hover:not(:disabled) {
    border-color: rgba(255,255,255,.98);
    box-shadow:
      0 3px 7px rgba(41,40,32,.045),
      0 10px 20px rgba(41,40,32,.085),
      inset 0 1px 0 rgba(255,255,255,1),
      inset 0 0 0 1px rgba(255,255,255,.18);
    filter: saturate(1.06) brightness(1.015);
  }

  /* The logout action stays visually secondary inside the glass masthead. */
  #root .momo-app-header button.momo-logout-button {
    border-color: rgba(216,201,159,.58);
  }

  #root .profile-button:active:not(:disabled),
  #root .all-reviews-pagination button:active:not(:disabled),
  #root .my-reviews-pagination button:active:not(:disabled),
  #root .liked-reviews-pagination button:active:not(:disabled),
  #root .review-edit-buttons button:active:not(:disabled),
  #root .review-comment-form button:active:not(:disabled),
  #root .liked-review-unlike:active:not(:disabled),
  #root .reaction-button:active:not(:disabled),
  #root .favorite-browse-button:active:not(:disabled),
  #root .favorite-back-button:active,
  #root .page-back-link:active,
  #root .detail-back-button:active,
  #root .review-detail-back:active,
  #root .review-action-button:active:not(:disabled),
  #root .all-reviews-search-submit:active:not(:disabled),
  #root .rating-vote-button:active:not(:disabled),
  #root .review-form-actions button:active:not(:disabled),
  #root .signup-submit:active:not(:disabled),
  #root .favorite-star:active:not(:disabled),
  #root .profile-delete-button:active:not(:disabled),
  #root .review-like-button:active:not(:disabled),
  #root .review-dislike-button:active:not(:disabled),
  #root .comment-like-button:active:not(:disabled),
  #root .comment-dislike-button:active:not(:disabled),
  #root .recommend-button:active:not(:disabled) {
    transform: scale(.985);
    box-shadow: var(--momo-glass-depth-active);
    transition-duration: var(--momo-motion-press);
  }

  #root .profile-button:focus-visible,
  #root .all-reviews-pagination button:focus-visible,
  #root .my-reviews-pagination button:focus-visible,
  #root .liked-reviews-pagination button:focus-visible,
  #root .review-edit-buttons button:focus-visible,
  #root .review-comment-form button:focus-visible,
  #root .liked-review-unlike:focus-visible,
  #root .reaction-button:focus-visible,
  #root .favorite-browse-button:focus-visible,
  #root .favorite-back-button:focus-visible,
  #root .page-back-link:focus-visible,
  #root .detail-back-button:focus-visible,
  #root .review-detail-back:focus-visible,
  #root .review-action-button:focus-visible,
  #root .all-reviews-search-submit:focus-visible,
  #root .all-reviews-search-reset:focus-visible,
  #root .rating-vote-button:focus-visible,
  #root .review-form-actions button:focus-visible,
  #root .signup-submit:focus-visible,
  #root .favorite-star:focus-visible,
  #root .profile-dashboard-edit:focus-visible,
  #root .profile-delete-button:focus-visible,
  #root .review-like-button:focus-visible,
  #root .review-dislike-button:focus-visible,
  #root .comment-like-button:focus-visible,
  #root .comment-dislike-button:focus-visible,
  #root .recommend-button:focus-visible,
  #root .people-more-button:focus-visible,
  #root .person-bio-toggle:focus-visible,
  #root .movie-review-button:focus-visible,
  #root .movie-like-button:focus-visible,
  #root input:focus-visible,
  #root textarea:focus-visible,
  #root select:focus-visible,
  #root a:focus-visible {
    outline: 3px solid rgba(179,141,25,.72);
    outline-offset: 3px;
  }

  /* Destructive action colors stay stable even while pointer hover is active. */
  #root .profile-page .profile-container .profile-delete-page-card button.profile-button.profile-delete-button:disabled {
    border-color: #E5B8AD;
    background-color: #F1EADF;
    background-image: none;
    color: #776F62;
    opacity: 1;
  }
  #root .profile-page .profile-container .profile-delete-page-card button.profile-button.profile-delete-button:not(:disabled),
  #root .profile-page .profile-container .profile-delete-page-card button.profile-button.profile-delete-button:not(:disabled):hover {
    border-color: #E5B8AD;
    background-color: #FFF1EC;
    background-image: none;
    color: #8C3F38;
    opacity: 1;
  }

  /* Fields use a light inset surface and a visible focus ring. */
  #root .signup-field input,
  #root .signup-field textarea,
  #root .profile-edit-page .profile-edit-field input,
  #root .review-title-field input,
  #root .review-content-field textarea,
  #root .review-edit-title,
  #root .review-edit-area textarea,
  #root .all-reviews-search-input,
  #root .movie-search-input {
    border-color: rgba(216,201,159,.84);
    background-color: rgba(255,254,250,.78);
    box-shadow: inset 0 1px 2px rgba(41,40,32,.035), 0 1px 0 rgba(255,255,255,.8);
    transition:
      border-color var(--momo-motion-material),
      box-shadow var(--momo-motion-material),
      background-color var(--momo-motion-material);
  }

  #root .signup-field input:focus,
  #root .signup-field textarea:focus,
  #root .profile-edit-page .profile-edit-field input:focus,
  #root .review-title-field input:focus,
  #root .review-content-field textarea:focus,
  #root .review-edit-title:focus,
  #root .review-edit-area textarea:focus,
  #root .all-reviews-search-input:focus,
  #root .movie-search-input:focus {
    border-color: rgba(179,141,25,.72);
    background-color: rgba(255,255,255,.94);
    box-shadow: 0 0 0 3px rgba(255,212,59,.18), inset 0 1px 2px rgba(41,40,32,.025);
    outline: none;
  }

  @media (prefers-reduced-motion: reduce) {
    #root .momo-app-header *,
    #root .profile-dashboard *,
    #root .profile-edit-page *,
    #root .favorite-page *,
    #root .movie-detail-page *,
    #root .review-detail-page *,
    #root .all-reviews-page *,
    #root .my-reviews-page *,
    #root .liked-reviews-page *,
    #root .signup-page * {
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
    background: linear-gradient(145deg, rgba(255,255,255,.82), rgba(255,241,190,.5) 58%, rgba(255,212,59,.18));
    color: #66510F;
  }
  #root .momo-app-main .detail-reaction-count:last-child,
  #root .momo-app-main .rating-vote-button.is-dislike,
  #root .momo-app-main .review-dislike-button,
  #root .momo-app-main .comment-dislike-button,
  #root .momo-app-main .selected-dislike {
    border-color: rgba(218,174,164,.56);
    background: linear-gradient(145deg, rgba(255,255,255,.84), rgba(250,233,228,.58) 58%, rgba(229,184,173,.2));
    color: #87534B;
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
  #root .momo-app-main > .search-page { background-image: radial-gradient(ellipse at 8% 0%, rgba(156,177,160,.12), transparent 42rem); }
  #root .momo-app-main > .favorite-page { background-image: radial-gradient(ellipse at 92% 0%, rgba(165,177,143,.12), transparent 42rem); }
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

`;

export default MomoMaterialSystemStyles;
