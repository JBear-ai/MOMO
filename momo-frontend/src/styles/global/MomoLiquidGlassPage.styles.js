import { createGlobalStyle } from "styled-components";

/*
 * MOMO Liquid Glass page direction.
 * The warm memo palette remains recognizable, but glass, ambient color and depth
 * become the primary surfaces instead of literal tape-and-paper decorations.
 */
const MomoLiquidGlassPageStyles = createGlobalStyle`
  :root {
    --momo-glass-ink: #302C25;
    --momo-glass-muted: #655D51;
    --momo-glass-gold: #E4B947;
    --momo-glass-rose: #D99D9B;
    --momo-glass-sage: #9EB7A5;
    --momo-glass-blue: #A9BACD;
    --momo-glass-ease: cubic-bezier(.2,.72,.2,1);
  }

  @keyframes momo-liquid-sheen {
    0%, 62%, 100% { transform: translateX(-145%) skewX(-18deg); opacity: 0; }
    68% { opacity: .46; }
    86% { transform: translateX(180%) skewX(-18deg); opacity: 0; }
  }

  @keyframes momo-liquid-orbit {
    0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
    50% { transform: translate3d(-10px, 8px, 0) scale(1.035); }
  }

  /* All route headings use one liquid material with route-specific ambient color. */
  #root .all-reviews-heading,
  #root .my-reviews-heading,
  #root .liked-reviews-heading,
  #root .search-page-heading {
    --page-glow-a: rgba(255,211,111,.4);
    --page-glow-b: rgba(169,188,211,.34);
    position: relative;
    isolation: isolate;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 26px;
    min-height: 184px;
    padding: clamp(26px, 3.8vw, 42px);
    margin: 0 0 24px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.8);
    border-radius: 28px;
    background:
      radial-gradient(ellipse at 7% 0%, var(--page-glow-a), transparent 42%),
      radial-gradient(ellipse at 94% 100%, var(--page-glow-b), transparent 45%),
      linear-gradient(125deg, rgba(255,255,255,.7), rgba(255,250,236,.46));
    box-shadow: 0 20px 48px rgba(65,52,31,.1), inset 0 1px rgba(255,255,255,.98);
    backdrop-filter: blur(28px) saturate(165%);
    -webkit-backdrop-filter: blur(28px) saturate(165%);
  }

  #root .all-reviews-heading { --page-glow-a: rgba(255,208,123,.42); --page-glow-b: rgba(172,190,215,.4); }
  #root .my-reviews-heading { --page-glow-a: rgba(255,214,127,.46); --page-glow-b: rgba(158,185,164,.34); }
  #root .liked-reviews-heading { --page-glow-a: rgba(225,164,166,.44); --page-glow-b: rgba(188,177,208,.34); }
  #root .search-page-heading { --page-glow-a: rgba(169,193,218,.42); --page-glow-b: rgba(167,193,174,.38); }

  #root .all-reviews-heading::before,
  #root .my-reviews-heading::before,
  #root .liked-reviews-heading::before,
  #root .search-page-heading::before {
    position: absolute;
    z-index: -1;
    top: -96px;
    right: 8%;
    width: 250px;
    height: 250px;
    content: "";
    border: 1px solid rgba(255,255,255,.48);
    border-radius: 50%;
    background: radial-gradient(circle at 34% 28%, rgba(255,255,255,.72), rgba(255,255,255,.06) 46%, transparent 70%);
    box-shadow: inset 0 1px rgba(255,255,255,.72), 0 16px 34px rgba(84,67,40,.07);
    pointer-events: none;
  }

  #root .all-reviews-heading::after,
  #root .my-reviews-heading::after,
  #root .liked-reviews-heading::after,
  #root .search-page-heading::after {
    position: absolute;
    z-index: 0;
    top: -30%;
    bottom: -30%;
    left: -45%;
    width: 22%;
    content: "";
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.42), transparent);
    filter: blur(3px);
    transform: skewX(-18deg);
    animation: momo-liquid-sheen 11s ease-in-out infinite;
    pointer-events: none;
  }

  #root .all-reviews-heading > div,
  #root .my-reviews-heading > div,
  #root .liked-reviews-heading > div,
  #root .search-page-heading > div {
    position: relative;
    z-index: 1;
    min-width: 0;
  }

  #root .all-reviews-heading h1,
  #root .my-reviews-heading h1,
  #root .liked-reviews-heading h1,
  #root .search-page-heading h1 {
    margin: 0 0 9px;
    color: #302C25;
    font-size: clamp(29px, 3.7vw, 42px);
    font-weight: 950;
    line-height: 1.12;
    letter-spacing: -.06em;
    text-shadow: 0 1px rgba(255,255,255,.52);
  }

  #root .all-reviews-heading p,
  #root .my-reviews-heading p:not(.my-reviews-eyebrow),
  #root .liked-reviews-heading p,
  #root .search-page-heading p {
    margin: 0;
    color: #575044;
    font-size: 13px;
    font-weight: 650;
    line-height: 1.75;
  }

  #root .my-reviews-heading .my-reviews-eyebrow,
  #root .liked-reviews-heading .liked-reviews-eyebrow {
    margin: 0 0 13px;
    color: #6D5627;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: .17em;
  }

  #root .my-reviews-heading > a,
  #root .liked-reviews-heading > a {
    position: relative;
    z-index: 2;
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    min-height: 44px;
    padding: 0 17px;
    border: 1px solid rgba(255,255,255,.86);
    border-radius: 14px;
    background: rgba(255,255,255,.46);
    box-shadow: 0 8px 18px rgba(67,53,31,.08), inset 0 1px rgba(255,255,255,.98);
    color: #443D32;
    font-size: 12px;
    font-weight: 850;
    text-decoration: none;
    backdrop-filter: blur(18px) saturate(150%);
    -webkit-backdrop-filter: blur(18px) saturate(150%);
    transition: transform 200ms var(--momo-glass-ease), box-shadow 200ms ease, background 200ms ease;
  }

  #root .my-reviews-heading > a:hover,
  #root .liked-reviews-heading > a:hover {
    background: rgba(255,255,255,.74);
    box-shadow: 0 12px 24px rgba(67,53,31,.13), inset 0 1px rgba(255,255,255,1);
    transform: translateY(-3px);
  }

  /* Saved movies: give the page its own ambient color instead of a flat cream field. */
  #root .favorite-page {
    position: relative;
    min-height: 100vh;
    padding: clamp(28px, 4vw, 52px) 0 76px;
    background:
      radial-gradient(ellipse at 7% 8%, rgba(255, 211, 103, .24), transparent 32%),
      radial-gradient(ellipse at 92% 19%, rgba(217, 157, 155, .2), transparent 30%),
      radial-gradient(ellipse at 58% 78%, rgba(158, 183, 165, .2), transparent 36%),
      linear-gradient(145deg, rgba(255,255,255,.12), rgba(236,231,218,.2));
  }

  #root .favorite-page-container {
    position: relative;
    z-index: 1;
    width: min(1280px, calc(100% - 48px));
    max-width: 1280px;
    margin: 0 auto;
  }

  /* Favorite heading becomes a colored glass hero, not a flat note rectangle. */
  #root .favorite-page-heading {
    position: relative;
    isolation: isolate;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 28px;
    min-height: 204px;
    padding: clamp(28px, 4.5vw, 48px);
    margin: 0 0 24px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.78);
    border-radius: 30px;
    background:
      radial-gradient(ellipse at 8% 5%, rgba(255, 215, 113, .56), transparent 40%),
      radial-gradient(ellipse at 82% 0%, rgba(232, 177, 175, .42), transparent 38%),
      radial-gradient(ellipse at 96% 100%, rgba(161, 190, 171, .48), transparent 42%),
      radial-gradient(ellipse at 44% 110%, rgba(177, 195, 218, .28), transparent 46%),
      linear-gradient(120deg, rgba(255,255,255,.68), rgba(255,250,235,.48));
    box-shadow:
      0 22px 54px rgba(68, 54, 31, .12),
      0 5px 14px rgba(68, 54, 31, .055),
      inset 0 1px rgba(255,255,255,.98),
      inset 0 -1px rgba(166,145,105,.12);
    backdrop-filter: blur(30px) saturate(170%);
    -webkit-backdrop-filter: blur(30px) saturate(170%);
  }

  #root .favorite-page-heading::before {
    position: absolute;
    z-index: -1;
    top: -112px;
    right: 9%;
    width: 310px;
    height: 310px;
    content: "";
    border: 1px solid rgba(255,255,255,.54);
    border-radius: 50%;
    background:
      radial-gradient(circle at 34% 28%, rgba(255,255,255,.9), rgba(255,255,255,.12) 25%, transparent 48%),
      radial-gradient(circle at 68% 68%, rgba(255,212,91,.5), rgba(228,171,164,.28) 38%, rgba(158,183,165,.2) 68%, transparent 72%);
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,.72),
      0 18px 40px rgba(95,75,44,.09);
    filter: blur(.2px);
    animation: momo-liquid-orbit 10s ease-in-out infinite;
    pointer-events: none;
  }

  #root .favorite-page-heading::after {
    position: absolute;
    z-index: 0;
    top: -30%;
    bottom: -30%;
    left: -42%;
    width: 24%;
    content: "";
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.48), transparent);
    filter: blur(3px);
    transform: skewX(-18deg);
    animation: momo-liquid-sheen 10s ease-in-out infinite;
    pointer-events: none;
  }

  #root .favorite-page-heading > div {
    position: relative;
    z-index: 1;
    min-width: 0;
  }

  #root .favorite-page-heading .favorite-page-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 30px;
    margin: 0 0 16px;
    padding: 0 12px;
    border: 1px solid rgba(255,255,255,.78);
    border-radius: 999px;
    background: rgba(255,255,255,.42);
    box-shadow: 0 5px 14px rgba(87,67,35,.07), inset 0 1px rgba(255,255,255,.9);
    color: #65501F;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: .18em;
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
  }

  #root .favorite-page-heading .favorite-page-eyebrow::before {
    width: 7px;
    height: 7px;
    content: "";
    border-radius: 50%;
    background: #D5A638;
    box-shadow: 0 0 0 4px rgba(255,212,59,.2), 0 0 12px rgba(207,158,48,.45);
  }

  #root .favorite-page-heading h1 {
    margin: 0 0 10px;
    color: #302B23;
    font-size: clamp(32px, 4.2vw, 46px);
    font-weight: 900;
    line-height: 1.08;
    letter-spacing: -.065em;
    text-shadow: 0 1px rgba(255,255,255,.5);
  }

  #root .favorite-page-heading p {
    max-width: 540px;
    margin: 0;
    color: #514A3F;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.75;
  }

  #root .favorite-page-heading .page-back-link {
    position: relative;
    z-index: 2;
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    min-height: 46px;
    padding: 0 19px;
    border: 1px solid rgba(255,255,255,.84);
    border-radius: 15px;
    background: linear-gradient(145deg, rgba(255,255,255,.68), rgba(255,255,255,.34));
    box-shadow: 0 9px 22px rgba(67,53,31,.1), inset 0 1px rgba(255,255,255,.98);
    color: #40392E;
    font-size: 12px;
    font-weight: 850;
    backdrop-filter: blur(18px) saturate(150%);
    -webkit-backdrop-filter: blur(18px) saturate(150%);
    transition: transform 200ms var(--momo-glass-ease), box-shadow 200ms ease, background 200ms ease;
  }

  #root .favorite-page-heading .page-back-link:hover {
    border-color: rgba(255,255,255,.98);
    background: rgba(255,255,255,.72);
    box-shadow: 0 14px 26px rgba(67,53,31,.15), inset 0 1px rgba(255,255,255,1);
    transform: translateY(-3px);
  }

  #root .favorite-page .favorite-list-toolbar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-height: 48px;
    margin: 0 0 22px;
    padding: 0 2px;
    border: 0;
  }

  #root .favorite-page .favorite-list-toolbar > span {
    display: inline-flex;
    align-items: center;
    min-height: 36px;
    padding: 0 15px;
    border: 1px solid rgba(255,255,255,.86);
    border-radius: 999px;
    background: linear-gradient(135deg, rgba(255,255,255,.64), rgba(255,243,205,.5));
    box-shadow: 0 7px 18px rgba(73,57,31,.07), inset 0 1px rgba(255,255,255,.96);
    color: #51442C;
    font-size: 12px;
    font-weight: 850;
    backdrop-filter: blur(16px) saturate(150%);
    -webkit-backdrop-filter: blur(16px) saturate(150%);
  }

  /* Each poster sits inside a softly tinted glass tile. */
  #root .favorite-page .favorite-page-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 24px 20px;
  }

  #root .favorite-page .favorite-page-card {
    --favorite-card-glow: rgba(255, 211, 112, .34);
    position: relative;
    isolation: isolate;
    min-width: 0;
    padding: 9px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.78);
    border-radius: 20px;
    background:
      radial-gradient(circle at 100% 0%, var(--favorite-card-glow), transparent 54%),
      linear-gradient(145deg, rgba(255,255,255,.64), rgba(255,255,255,.28));
    box-shadow:
      0 10px 26px rgba(62,49,28,.075),
      inset 0 1px rgba(255,255,255,.92),
      inset 0 -1px rgba(143,126,95,.1);
    backdrop-filter: blur(22px) saturate(155%);
    -webkit-backdrop-filter: blur(22px) saturate(155%);
    transition: transform 250ms var(--momo-glass-ease), box-shadow 250ms ease, border-color 250ms ease;
  }

  #root .favorite-page .favorite-page-card:nth-child(3n + 2) {
    --favorite-card-glow: rgba(221, 160, 161, .34);
  }

  #root .favorite-page .favorite-page-card:nth-child(3n) {
    --favorite-card-glow: rgba(151, 183, 163, .38);
  }

  #root .favorite-page .favorite-page-card:hover {
    border-color: rgba(255,255,255,.98);
    box-shadow:
      0 20px 34px rgba(62,49,28,.14),
      0 5px 12px rgba(62,49,28,.055),
      inset 0 1px rgba(255,255,255,1);
    transform: translateY(-6px);
  }

  #root .favorite-page .favorite-page-poster {
    position: relative;
    padding: 5px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.88);
    border-radius: 13px;
    background: rgba(255,255,255,.42);
    box-shadow: 0 7px 17px rgba(38,32,23,.14), inset 0 1px rgba(255,255,255,.92);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  #root .favorite-page .favorite-page-poster > .favorite-page-open-button,
  #root .favorite-page .favorite-page-poster img {
    border-radius: 9px;
  }

  #root .favorite-page .favorite-page-poster img {
    transition: transform 500ms var(--momo-glass-ease), filter 500ms ease;
  }

  #root .favorite-page .favorite-page-card:hover .favorite-page-poster img {
    filter: saturate(1.08);
    transform: scale(1.045);
  }

  #root .favorite-page .favorite-page-movie-info {
    padding: 13px 5px 5px;
  }

  #root .favorite-page .favorite-page-movie-info h3 {
    overflow: hidden;
    color: #302C25;
    font-size: 14px;
    font-weight: 900;
    letter-spacing: -.025em;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  #root .favorite-page .favorite-page-movie-info p {
    margin-top: 6px;
    color: #655D51;
    font-size: 11px;
    font-weight: 700;
  }

  #root .favorite-page .favorite-page-empty {
    padding: clamp(42px, 6vw, 72px) 24px;
    border: 1px solid rgba(255,255,255,.82);
    border-radius: 28px;
    background:
      radial-gradient(ellipse at 12% 0%, rgba(255,213,103,.32), transparent 44%),
      radial-gradient(ellipse at 90% 100%, rgba(160,187,169,.3), transparent 46%),
      linear-gradient(135deg, rgba(255,255,255,.66), rgba(255,249,231,.42));
    box-shadow: 0 18px 46px rgba(68,54,31,.1), inset 0 1px rgba(255,255,255,.98);
    backdrop-filter: blur(26px) saturate(160%);
    -webkit-backdrop-filter: blur(26px) saturate(160%);
  }

  #root .favorite-page .favorite-empty-symbol {
    color: #84672D;
    filter: drop-shadow(0 5px 9px rgba(151,112,35,.22));
  }

  #root .favorite-page .favorite-page-empty h2 {
    color: #332E26;
    font-size: clamp(20px, 3vw, 25px);
    font-weight: 900;
    letter-spacing: -.04em;
  }

  #root .favorite-page .favorite-page-empty p {
    color: #655D51;
    line-height: 1.7;
  }

  #root .favorite-page .favorite-page-empty .favorite-browse-button {
    min-height: 46px;
    padding: 0 22px;
    border: 1px solid rgba(255,255,255,.82);
    border-radius: 14px;
    background: linear-gradient(135deg, #FFE18A, #F4CB5E);
    box-shadow: 0 9px 20px rgba(139,101,22,.2), inset 0 1px rgba(255,255,255,.88);
    color: #4A3913;
    font-weight: 900;
  }

  /* Favorite action: a translucent bookmark, not a decorative star. */
  #root .favorite-star {
    display: grid;
    place-items: center;
    width: 42px;
    height: 46px;
    padding: 0;
    border: 1px solid rgba(255,255,255,.66);
    border-radius: 14px;
    background: rgba(27,31,29,.4);
    box-shadow: 0 8px 20px rgba(17,22,19,.22), inset 0 1px rgba(255,255,255,.35);
    color: rgba(255,255,255,.96);
    backdrop-filter: blur(20px) saturate(170%);
    -webkit-backdrop-filter: blur(20px) saturate(170%);
    transition: transform 200ms var(--momo-glass-ease), background 200ms ease, border-color 200ms ease, box-shadow 200ms ease;
  }

  #root .favorite-star .favorite-bookmark-icon {
    display: block;
    width: 13px;
    height: 19px;
    border-radius: 4px 4px 2px 2px;
    background: currentColor;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 77%, 0 100%);
    filter: drop-shadow(0 1px 1px rgba(0,0,0,.14));
    transition: transform 200ms var(--momo-glass-ease);
  }

  #root .favorite-star:hover {
    border-color: rgba(255,255,255,.96);
    background: rgba(36,43,38,.66);
    box-shadow: 0 12px 24px rgba(17,22,19,.27), inset 0 1px rgba(255,255,255,.44);
    transform: translateY(-2px);
  }

  #root .favorite-star:hover .favorite-bookmark-icon {
    transform: translateY(-1px);
  }

  #root .favorite-star.is-active {
    border-color: rgba(255,255,255,.84);
    background: linear-gradient(145deg, rgba(255,232,160,.94), rgba(232,185,72,.88));
    box-shadow: 0 9px 22px rgba(103,77,22,.27), inset 0 1px rgba(255,255,255,.94);
    color: #5B4517;
  }

  #root .favorite-star:focus-visible {
    outline: 3px solid rgba(187,145,51,.68);
    outline-offset: 3px;
  }

  /* My movie activity: floating glass tiles replace tape, ruled paper and dog-eared stickers. */
  #root .profile-page .profile-card:has(.profile-activity-grid) {
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.78);
    border-radius: 28px;
    background:
      radial-gradient(ellipse at 100% 0%, rgba(255,213,110,.2), transparent 40%),
      radial-gradient(ellipse at 0% 100%, rgba(166,190,173,.18), transparent 44%),
      linear-gradient(135deg, rgba(255,255,255,.62), rgba(255,250,237,.42));
    box-shadow: 0 18px 42px rgba(65,51,29,.085), inset 0 1px rgba(255,255,255,.95);
    backdrop-filter: blur(24px) saturate(155%);
    -webkit-backdrop-filter: blur(24px) saturate(155%);
  }

  #root .profile-page .profile-card:has(.profile-activity-grid)::before,
  #root .profile-page .profile-card:has(.profile-activity-grid)::after {
    content: none !important;
  }

  #root .profile-page .profile-card:has(.profile-activity-grid) > .profile-card-heading {
    position: relative;
    z-index: 1;
    margin-bottom: 24px;
  }

  #root .profile-page .profile-card:has(.profile-activity-grid) > .profile-card-heading h2 {
    color: #332F27;
    font-size: clamp(20px, 2.4vw, 24px);
    font-weight: 900;
    letter-spacing: -.045em;
  }

  #root .profile-page .profile-card:has(.profile-activity-grid) > .profile-card-heading p {
    color: #655D51;
  }

  #root .profile-page .profile-activity-grid {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 17px;
  }

  #root .profile-page .profile-activity-item {
    --activity-ink: #76591D;
    --activity-orb: rgba(255,211,111,.52);
    position: relative;
    isolation: isolate;
    display: flex;
    min-width: 0;
    min-height: 226px;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    gap: 0;
    padding: 23px 22px 18px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.82);
    border-radius: 24px;
    background:
      radial-gradient(circle at 100% 0%, var(--activity-orb), transparent 49%),
      linear-gradient(145deg, rgba(255,255,255,.7), rgba(255,255,255,.3));
    box-shadow:
      0 12px 26px rgba(65,51,29,.085),
      inset 0 1px rgba(255,255,255,.98),
      inset 0 -1px rgba(145,124,85,.1);
    color: #302C25;
    text-align: left;
    text-decoration: none;
    transform: translateY(0);
    backdrop-filter: blur(24px) saturate(160%);
    -webkit-backdrop-filter: blur(24px) saturate(160%);
    transition: transform 250ms var(--momo-glass-ease), box-shadow 250ms ease, border-color 250ms ease;
  }

  #root .profile-page .profile-activity-item[data-tone="writing"] {
    --activity-ink: #76591D;
    --activity-orb: rgba(255,211,111,.58);
    background:
      radial-gradient(circle at 100% 0%, var(--activity-orb), transparent 49%),
      linear-gradient(145deg, rgba(255,245,211,.78), rgba(255,255,255,.34));
  }

  #root .profile-page .profile-activity-item[data-tone="liked"] {
    --activity-ink: #965B60;
    --activity-orb: rgba(224,160,164,.48);
    background:
      radial-gradient(circle at 100% 0%, var(--activity-orb), transparent 49%),
      linear-gradient(145deg, rgba(255,233,229,.76), rgba(255,255,255,.34));
  }

  #root .profile-page .profile-activity-item[data-tone="saved"] {
    --activity-ink: #4F715D;
    --activity-orb: rgba(151,190,163,.52);
    background:
      radial-gradient(circle at 100% 0%, var(--activity-orb), transparent 49%),
      linear-gradient(145deg, rgba(226,241,228,.8), rgba(255,255,255,.36));
  }

  #root .profile-page .profile-activity-item::before {
    position: absolute;
    z-index: -1;
    top: -48px;
    right: -42px;
    width: 172px;
    height: 172px;
    content: "";
    border: 1px solid rgba(255,255,255,.5);
    border-radius: 50%;
    background: radial-gradient(circle at 35% 28%, rgba(255,255,255,.66), rgba(255,255,255,.06) 46%, transparent 70%);
    box-shadow: inset 0 1px rgba(255,255,255,.55);
    pointer-events: none;
  }

  #root .profile-page .profile-activity-item::after {
    position: absolute;
    z-index: 0;
    inset: 0;
    content: "";
    border-radius: inherit;
    background: linear-gradient(118deg, rgba(255,255,255,.34), transparent 36%, rgba(255,255,255,.08) 64%, transparent 78%);
    pointer-events: none;
  }

  #root .profile-page .profile-activity-item:hover {
    border-color: rgba(255,255,255,.98);
    box-shadow: 0 21px 36px rgba(65,51,29,.15), inset 0 1px rgba(255,255,255,1);
    transform: translateY(-7px);
  }

  #root .profile-page .profile-activity-item:active {
    transform: translateY(-1px) scale(.995);
  }

  #root .profile-page .profile-activity-top,
  #root .profile-page .profile-activity-item h3,
  #root .profile-page .profile-activity-count-row,
  #root .profile-page .profile-activity-footer {
    position: relative;
    z-index: 1;
  }

  #root .profile-page .profile-activity-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    min-height: 46px;
    margin-bottom: 18px;
  }

  #root .profile-page .profile-activity-kicker {
    color: var(--activity-ink);
    font-size: 10px;
    font-weight: 900;
    letter-spacing: .14em;
  }

  #root .profile-page .profile-activity-icon {
    display: grid;
    place-items: center;
    flex: 0 0 44px;
    width: 44px;
    height: 44px;
    border: 1px solid rgba(255,255,255,.88);
    border-radius: 15px;
    background: rgba(255,255,255,.48);
    box-shadow: 0 7px 16px rgba(63,50,29,.08), inset 0 1px rgba(255,255,255,.98);
    color: var(--activity-ink);
    font-size: 22px;
    line-height: 1;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    transition: transform 220ms var(--momo-glass-ease), box-shadow 220ms ease;
  }

  #root .profile-page .profile-activity-item[data-tone="saved"] .profile-activity-icon {
    font-size: 0;
  }

  #root .profile-page .profile-activity-item[data-tone="saved"] .profile-activity-icon::before {
    width: 13px;
    height: 19px;
    content: "";
    border-radius: 4px 4px 2px 2px;
    background: currentColor;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 77%, 0 100%);
  }

  #root .profile-page .profile-activity-item:hover .profile-activity-icon {
    box-shadow: 0 10px 20px rgba(63,50,29,.12), inset 0 1px rgba(255,255,255,1);
    transform: translateY(-2px) rotate(-4deg);
  }

  #root .profile-page .profile-activity-item h3 {
    margin: 0 0 12px;
    color: #302C25;
    font-size: 15px;
    font-weight: 900;
    letter-spacing: -.035em;
  }

  #root .profile-page .profile-activity-count-row {
    display: inline-flex;
    align-items: baseline;
    align-self: flex-start;
    gap: 7px;
    min-width: 0;
    min-height: 0;
    padding: 0;
    border: 0;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
  }

  #root .profile-page .profile-activity-count {
    color: var(--activity-ink);
    font-size: clamp(38px, 4vw, 48px);
    font-weight: 950;
    line-height: 1;
    letter-spacing: -.075em;
    font-variant-numeric: tabular-nums;
    text-shadow: 0 1px rgba(255,255,255,.5);
  }

  #root .profile-page .profile-activity-unit {
    color: #655D51;
    font-size: 12px;
    font-weight: 800;
  }

  #root .profile-page .profile-activity-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-top: auto;
    padding-top: 15px;
    border-top: 1px solid rgba(94,83,64,.15);
  }

  #root .profile-page .profile-activity-footer p {
    display: block !important;
    margin: 0;
    color: #5F574B;
    font-size: 11px;
    font-weight: 750;
    line-height: 1.55;
  }

  #root .profile-page .profile-activity-arrow {
    display: grid;
    place-items: center;
    flex: 0 0 31px;
    width: 31px;
    height: 31px;
    border: 1px solid rgba(255,255,255,.82);
    border-radius: 11px;
    background: rgba(255,255,255,.42);
    box-shadow: 0 5px 12px rgba(63,50,29,.07), inset 0 1px rgba(255,255,255,.95);
    color: var(--activity-ink);
    font-size: 16px;
    font-weight: 900;
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    transition: transform 200ms var(--momo-glass-ease), background 200ms ease;
  }

  #root .profile-page .profile-activity-item:hover .profile-activity-arrow {
    background: rgba(255,255,255,.72);
    transform: translate(2px,-2px);
  }

  /* Movie detail: the header is now the primary cinematic glass surface. */
  #root .movie-detail-page {
    position: relative;
    isolation: isolate;
    max-width: 1240px;
    padding-bottom: 76px;
  }

  #root .movie-detail-page .detail-back-button {
    min-height: 42px;
    margin: 8px 0 22px;
    padding: 0 17px;
    border: 1px solid rgba(255,255,255,.86);
    border-radius: 14px;
    background: rgba(255,255,255,.46);
    box-shadow: 0 7px 18px rgba(63,50,29,.07), inset 0 1px rgba(255,255,255,.96);
    color: #4D463A;
    font-size: 12px;
    font-weight: 850;
    backdrop-filter: blur(18px) saturate(150%);
    -webkit-backdrop-filter: blur(18px) saturate(150%);
  }

  #root .movie-detail-page .detail-back-button:hover {
    border-color: rgba(255,255,255,.98);
    background: rgba(255,255,255,.72);
    box-shadow: 0 11px 22px rgba(63,50,29,.12), inset 0 1px rgba(255,255,255,1);
    transform: translateY(-2px);
  }

  #root .movie-detail-page .movie-detail-header {
    position: relative;
    isolation: isolate;
    display: grid;
    grid-template-columns: minmax(230px, .58fr) minmax(0, 1fr);
    align-items: center;
    gap: clamp(28px, 4vw, 52px);
    min-height: 430px;
    padding: clamp(26px, 4vw, 48px);
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.78);
    border-radius: 32px;
    background:
      radial-gradient(ellipse at 8% 0%, rgba(255,211,103,.42), transparent 38%),
      radial-gradient(ellipse at 100% 4%, rgba(222,157,160,.35), transparent 37%),
      radial-gradient(ellipse at 82% 100%, rgba(152,185,164,.44), transparent 42%),
      radial-gradient(ellipse at 42% 105%, rgba(173,191,216,.34), transparent 46%),
      linear-gradient(125deg, rgba(255,255,255,.7), rgba(255,249,233,.44));
    box-shadow:
      0 26px 58px rgba(62,49,29,.14),
      0 6px 17px rgba(62,49,29,.06),
      inset 0 1px rgba(255,255,255,.98),
      inset 0 -1px rgba(153,132,91,.12);
    backdrop-filter: blur(32px) saturate(175%);
    -webkit-backdrop-filter: blur(32px) saturate(175%);
    animation: momo-surface-in .55s var(--momo-glass-ease) both;
  }

  #root .movie-detail-page .movie-detail-header::before {
    position: absolute;
    z-index: -1;
    top: -34%;
    right: -6%;
    width: 58%;
    height: 150%;
    content: "";
    border: 1px solid rgba(255,255,255,.48);
    border-radius: 50%;
    background:
      radial-gradient(circle at 34% 27%, rgba(255,255,255,.78), rgba(255,255,255,.08) 34%, transparent 58%),
      conic-gradient(from 220deg, rgba(255,212,91,.16), rgba(218,157,160,.18), rgba(155,187,166,.2), rgba(169,188,211,.14), rgba(255,212,91,.16));
    filter: blur(1px);
    opacity: .92;
    pointer-events: none;
  }

  #root .movie-detail-page .movie-detail-header::after {
    position: absolute;
    z-index: 3;
    inset: 0;
    content: "";
    border-radius: inherit;
    background: linear-gradient(118deg, rgba(255,255,255,.36), transparent 32%, rgba(255,255,255,.08) 58%, transparent 75%);
    mix-blend-mode: screen;
    pointer-events: none;
  }

  #root .movie-detail-page .movie-detail-poster {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 320px;
    padding: 8px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.92);
    border-radius: 22px;
    background: linear-gradient(145deg, rgba(255,255,255,.7), rgba(255,255,255,.25));
    box-shadow:
      0 24px 44px rgba(37,31,23,.22),
      0 6px 14px rgba(37,31,23,.1),
      inset 0 1px rgba(255,255,255,.98);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    transform: perspective(1100px) rotateY(-2deg);
    transition: transform 350ms var(--momo-glass-ease), box-shadow 350ms ease;
  }

  #root .movie-detail-page .movie-detail-poster:hover {
    box-shadow: 0 30px 52px rgba(37,31,23,.27), 0 8px 18px rgba(37,31,23,.12), inset 0 1px rgba(255,255,255,1);
    transform: perspective(1100px) rotateY(0) translateY(-5px);
  }

  #root .movie-detail-page .movie-detail-poster img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    object-fit: cover;
  }

  #root .movie-detail-page .movie-detail-info {
    position: relative;
    z-index: 2;
    display: flex;
    min-width: 0;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }

  #root .movie-detail-page .movie-detail-info .detail-rank {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 31px;
    margin: 0 0 4px;
    padding: 0 12px;
    border: 1px solid rgba(255,255,255,.84);
    border-radius: 999px;
    background: rgba(255,255,255,.48);
    box-shadow: 0 6px 15px rgba(72,55,28,.07), inset 0 1px rgba(255,255,255,.96);
    color: #65501F;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: .1em;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }

  #root .movie-detail-page .movie-detail-info .detail-rank::before {
    width: 7px;
    height: 7px;
    content: "";
    border-radius: 50%;
    background: #D4A638;
    box-shadow: 0 0 0 4px rgba(255,212,59,.18);
  }

  #root .movie-detail-page .movie-detail-info h1 {
    flex: 0 0 100%;
    width: 100%;
    margin: 0 0 5px;
    color: #302B23;
    font-size: clamp(30px, 4vw, 44px);
    font-weight: 950;
    line-height: 1.12;
    letter-spacing: -.065em;
    overflow-wrap: anywhere;
    text-shadow: 0 1px rgba(255,255,255,.56);
  }

  #root .movie-detail-page .movie-detail-info > p {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    max-width: 100%;
    min-height: 35px;
    margin: 0;
    padding: 7px 11px;
    border: 1px solid rgba(255,255,255,.7);
    border-radius: 12px;
    background: rgba(255,255,255,.38);
    box-shadow: 0 4px 11px rgba(71,56,31,.04), inset 0 1px rgba(255,255,255,.74);
    color: #514A3F;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.45;
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
  }

  #root .movie-detail-page .movie-detail-header-no-poster {
    grid-template-columns: minmax(0, 1fr);
    min-height: 340px;
  }

  #root .movie-detail-page .movie-detail-header-no-poster .movie-detail-info {
    max-width: 880px;
  }

  /* Keep lower detail sheets readable while continuing the same glass language. */
  #root .movie-detail-page > .detail-content-section {
    border: 1px solid rgba(255,255,255,.8);
    border-radius: 24px;
    background:
      radial-gradient(ellipse at 100% 0%, rgba(255,214,119,.16), transparent 38%),
      linear-gradient(135deg, rgba(255,255,255,.62), rgba(255,250,238,.42));
    box-shadow: 0 15px 34px rgba(62,49,29,.08), inset 0 1px rgba(255,255,255,.96);
    backdrop-filter: blur(24px) saturate(155%);
    -webkit-backdrop-filter: blur(24px) saturate(155%);
  }

  #root .movie-detail-page > .detail-content-section > h2 {
    color: #332F27;
    font-weight: 900;
    letter-spacing: -.045em;
  }

  #root .movie-detail-page > .detail-content-section > p {
    color: #575044;
    line-height: 1.8;
  }

  @media (max-width: 760px) {
    #root .all-reviews-heading,
    #root .my-reviews-heading,
    #root .liked-reviews-heading,
    #root .search-page-heading {
      align-items: flex-start;
      flex-direction: column;
      gap: 20px;
      min-height: 0;
      padding: 26px 22px;
      border-radius: 23px;
    }
    #root .all-reviews-heading::before,
    #root .my-reviews-heading::before,
    #root .liked-reviews-heading::before,
    #root .search-page-heading::before {
      top: -80px;
      right: -70px;
      width: 210px;
      height: 210px;
    }
    #root .my-reviews-heading > a,
    #root .liked-reviews-heading > a {
      align-self: flex-start;
    }
  }

  @media (max-width: 1050px) {
    #root .favorite-page .favorite-page-grid {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  @media (max-width: 760px) {
    #root .favorite-page-container { width: calc(100% - 36px); }
    #root .favorite-page-heading {
      align-items: flex-start;
      flex-direction: column;
      gap: 22px;
      min-height: 0;
      padding: 28px 24px;
      border-radius: 24px;
    }
    #root .favorite-page-heading::before {
      top: -90px;
      right: -80px;
      width: 250px;
      height: 250px;
    }
    #root .favorite-page .favorite-page-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 20px 14px;
    }
    #root .movie-detail-page .movie-detail-header {
      grid-template-columns: minmax(0, 1fr);
      gap: 28px;
      min-height: 0;
      padding: 26px 22px;
      border-radius: 26px;
    }
    #root .movie-detail-page .movie-detail-poster {
      width: min(58%, 240px);
      margin: 0 auto;
    }
    #root .movie-detail-page .movie-detail-info { gap: 9px; }
  }

  @media (max-width: 560px) {
    #root .favorite-page-container { width: calc(100% - 28px); }
    #root .favorite-page-heading { padding: 25px 20px; }
    #root .favorite-page-heading h1 { font-size: 32px; }
    #root .favorite-page-heading p { font-size: 13px; }
    #root .favorite-page .favorite-page-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 19px 12px;
    }
    #root .favorite-page .favorite-page-card { padding: 7px; border-radius: 16px; }
    #root .favorite-page .favorite-page-poster { padding: 4px; }
    #root .favorite-page .favorite-page-movie-info { padding: 10px 3px 4px; }
    #root .favorite-page .favorite-page-movie-info h3 { font-size: 12px; }
    #root .favorite-page .favorite-page-movie-info p { font-size: 10px; }
    #root .profile-page .profile-card:has(.profile-activity-grid) { padding: 22px 16px; }
    #root .profile-page .profile-activity-grid { grid-template-columns: 1fr; gap: 13px; }
    #root .profile-page .profile-activity-item { min-height: 190px; padding: 21px 19px 17px; }
    #root .movie-detail-page .movie-detail-header { padding: 22px 17px; }
    #root .movie-detail-page .movie-detail-info h1 { font-size: 31px; }
    #root .movie-detail-page .movie-detail-info > p { font-size: 11px; }
  }

  @media (max-width: 380px) {
    #root .favorite-page-heading .page-back-link { width: 100%; }
    #root .movie-detail-page .movie-detail-info > p { width: 100%; }
  }

  @media (prefers-reduced-motion: reduce) {
    #root .favorite-page-heading::before,
    #root .favorite-page-heading::after {
      animation: none !important;
    }
  }
`;

export default MomoLiquidGlassPageStyles;
