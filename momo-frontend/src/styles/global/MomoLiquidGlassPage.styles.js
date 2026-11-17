import { createGlobalStyle } from "styled-components";

/*
 * MOMO Cinema Archive
 * Quiet cinema-inspired surfaces: restrained color, real translucent glass,
 * editorial hierarchy and poster-led composition. No decorative bubbles or tape.
 */
const MomoLiquidGlassPageStyles = createGlobalStyle`
  :root {
    --momo-glass-ink: #292D2B;
    --momo-glass-muted: #676D67;
    --momo-glass-edge: rgba(255,255,255,.78);
    --momo-glass-surface: rgba(248,247,242,.7);
    --momo-glass-shadow: 0 12px 30px rgba(39,43,39,.075), inset 0 1px rgba(255,255,255,.9);
    --momo-glass-ease: cubic-bezier(.2,.72,.2,1);
    --momo-tone-film: #637A72;
    --momo-tone-write: #8A7652;
    --momo-tone-like: #8A6967;
    --momo-tone-search: #667983;
  }

  /* Quiet canvas: remove notebook grid and ambient bubble gradients. */
  html, body {
    background: #ECEAE3 !important;
    background-image: none !important;
  }
  body {
    color: var(--momo-glass-ink);
  }
  #root > div::before {
    content: none !important;
    display: none !important;
  }

  /* The app header is a restrained sheet of glass, not another decoration panel. */
  #root header:not(.favorite-page-heading) {
    border-bottom: 1px solid rgba(255,255,255,.72);
    background: rgba(247,246,240,.82);
    box-shadow: 0 7px 22px rgba(39,43,39,.055), inset 0 1px rgba(255,255,255,.86);
    backdrop-filter: blur(24px) saturate(112%);
    -webkit-backdrop-filter: blur(24px) saturate(112%);
  }
  #root header:not(.favorite-page-heading)::after {
    content: none !important;
    display: none !important;
  }
  #root header:not(.favorite-page-heading)::before {
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.92), transparent);
    opacity: .7;
  }
  #root header nav a {
    min-height: 38px;
    padding: 0 13px;
    border: 1px solid rgba(255,255,255,.74);
    border-radius: 11px;
    background: rgba(250,249,245,.48);
    box-shadow: inset 0 1px rgba(255,255,255,.82);
    color: #4E554F;
    font-size: 12px;
    font-weight: 750;
    transition: background 180ms ease, color 180ms ease, border-color 180ms ease, transform 180ms ease;
  }
  #root header nav a:hover {
    border-color: rgba(128,143,132,.34);
    background: rgba(255,255,255,.78);
    color: #293D34;
    transform: translateY(-1px);
    box-shadow: 0 5px 12px rgba(39,43,39,.06), inset 0 1px rgba(255,255,255,.95);
  }
  #root header nav a.active {
    border-color: rgba(105,128,115,.38);
    background: rgba(105,128,115,.13);
    color: #3F5D4C;
    box-shadow: inset 0 1px rgba(255,255,255,.84);
  }
  #root header button {
    min-height: 38px;
    padding: 0 15px;
    border: 1px solid rgba(100,119,107,.34);
    border-radius: 11px;
    background: rgba(102,126,111,.13);
    box-shadow: inset 0 1px rgba(255,255,255,.85);
    color: #405448;
    font-size: 12px;
    font-weight: 800;
  }
  #root header button:hover:not(:disabled) {
    border-color: rgba(100,119,107,.5);
    background: rgba(102,126,111,.2);
    box-shadow: 0 5px 12px rgba(39,43,39,.07), inset 0 1px rgba(255,255,255,.9);
  }

  /* Common translucent surfaces. Content stays opaque enough to remain readable. */
  #root .profile-card,
  #root .all-reviews-card,
  #root .my-reviews-card,
  #root .liked-reviews-card,
  #root .review-detail-card,
  #root .review-comment-card,
  #root .detail-content-section,
  #root .signup-card,
  #root .favorite-page-empty {
    border: 1px solid var(--momo-glass-edge);
    border-radius: 19px;
    background: rgba(249,248,243,.68);
    box-shadow: var(--momo-glass-shadow);
    backdrop-filter: blur(20px) saturate(108%);
    -webkit-backdrop-filter: blur(20px) saturate(108%);
  }
  #root .profile-card::before,
  #root .profile-card::after,
  #root .review-detail-card::before,
  #root .review-detail-card::after,
  #root .signup-card::before,
  #root .signup-card::after {
    content: none !important;
    display: none !important;
  }
  #root .profile-card,
  #root .all-reviews-card,
  #root .my-reviews-card,
  #root .liked-reviews-card,
  #root .review-detail-card,
  #root .review-comment-card,
  #root .detail-content-section {
    transition: border-color 220ms ease, box-shadow 220ms ease, transform 220ms var(--momo-glass-ease);
  }

  /* Route headers: the accent is a slim editorial rule, never a glowing orb. */
  #root .all-reviews-heading,
  #root .my-reviews-heading,
  #root .liked-reviews-heading,
  #root .search-page-heading,
  #root .favorite-page-heading {
    --page-accent: #718075;
    position: relative;
    isolation: isolate;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    min-height: 154px;
    margin: 0 0 24px;
    padding: clamp(26px, 3.6vw, 38px);
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.78);
    border-radius: 21px;
    background: linear-gradient(132deg, rgba(250,249,245,.82), rgba(240,239,232,.62));
    box-shadow: 0 12px 30px rgba(39,43,39,.065), inset 0 1px rgba(255,255,255,.92);
    backdrop-filter: blur(26px) saturate(112%);
    -webkit-backdrop-filter: blur(26px) saturate(112%);
  }
  #root .all-reviews-heading { --page-accent: #88795F; }
  #root .my-reviews-heading { --page-accent: #6C806F; }
  #root .liked-reviews-heading { --page-accent: #896B69; }
  #root .search-page-heading { --page-accent: #667983; }
  #root .favorite-page-heading { --page-accent: #627B72; }
  #root .all-reviews-heading::before,
  #root .my-reviews-heading::before,
  #root .liked-reviews-heading::before,
  #root .search-page-heading::before,
  #root .favorite-page-heading::before {
    position: absolute;
    z-index: 0;
    top: 28px;
    bottom: 28px;
    left: 0;
    width: 3px;
    height: auto;
    content: "";
    border-radius: 0 3px 3px 0;
    background: var(--page-accent);
    box-shadow: none;
    transform: none;
    animation: none;
    pointer-events: none;
  }
  #root .all-reviews-heading::after,
  #root .my-reviews-heading::after,
  #root .liked-reviews-heading::after,
  #root .search-page-heading::after,
  #root .favorite-page-heading::after {
    content: none !important;
    display: none !important;
    animation: none !important;
  }
  #root .all-reviews-heading > div,
  #root .my-reviews-heading > div,
  #root .liked-reviews-heading > div,
  #root .search-page-heading > div,
  #root .favorite-page-heading > div {
    position: relative;
    z-index: 1;
    min-width: 0;
  }
  #root .all-reviews-heading h1,
  #root .my-reviews-heading h1,
  #root .liked-reviews-heading h1,
  #root .search-page-heading h1,
  #root .favorite-page-heading h1 {
    margin: 0 0 8px;
    color: #292D2B;
    font-size: clamp(27px, 3.2vw, 36px);
    font-weight: 850;
    line-height: 1.18;
    letter-spacing: -.048em;
    text-shadow: none;
  }
  #root .all-reviews-heading p,
  #root .my-reviews-heading p:not(.my-reviews-eyebrow),
  #root .liked-reviews-heading p,
  #root .search-page-heading p,
  #root .favorite-page-heading p {
    margin: 0;
    color: #565D57;
    font-size: 13px;
    font-weight: 550;
    line-height: 1.7;
  }
  #root .my-reviews-heading .my-reviews-eyebrow,
  #root .liked-reviews-heading .liked-reviews-eyebrow,
  #root .favorite-page-heading .favorite-page-eyebrow {
    display: inline-flex;
    align-items: center;
    margin: 0 0 11px;
    color: var(--page-accent);
    font-size: 10px;
    font-weight: 850;
    letter-spacing: .13em;
  }
  #root .favorite-page-heading .favorite-page-eyebrow::before {
    width: 5px;
    height: 13px;
    margin-right: 8px;
    content: "";
    border-radius: 1px;
    background: var(--page-accent);
    box-shadow: none;
  }
  #root .page-back-link,
  #root .favorite-back-button,
  #root .review-detail-back {
    position: relative;
    z-index: 2;
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    padding: 0 15px;
    border: 1px solid rgba(255,255,255,.84);
    border-radius: 11px;
    background: rgba(249,248,243,.62);
    box-shadow: 0 4px 12px rgba(39,43,39,.055), inset 0 1px rgba(255,255,255,.94);
    color: #424A44;
    font-size: 12px;
    font-weight: 750;
    text-decoration: none;
    white-space: nowrap;
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
  }
  #root .page-back-link:hover,
  #root .favorite-back-button:hover,
  #root .review-detail-back:hover {
    background: rgba(255,255,255,.84);
    box-shadow: 0 7px 16px rgba(39,43,39,.09), inset 0 1px rgba(255,255,255,.98);
    transform: translateY(-1px);
  }

  /* Each route has a restrained color atmosphere beyond its title panel. */
  #root .favorite-page {
    background: linear-gradient(180deg, rgba(99,122,114,.105), rgba(99,122,114,.035) 300px, transparent 620px);
  }
  #root .profile-page {
    background: linear-gradient(180deg, rgba(108,128,111,.075), transparent 460px);
  }
  #root .all-reviews-page {
    background: linear-gradient(180deg, rgba(136,121,95,.07), transparent 440px);
  }
  #root .my-reviews-page {
    background: linear-gradient(180deg, rgba(108,128,111,.075), transparent 440px);
  }
  #root .liked-reviews-page,
  #root .liked-reviews-container {
    background: linear-gradient(180deg, rgba(137,107,105,.075), transparent 440px);
  }
  #root .search-page {
    background: linear-gradient(180deg, rgba(102,121,131,.075), transparent 440px);
  }
  #root .all-reviews-heading {
    background: linear-gradient(112deg, rgba(238,234,224,.88), rgba(250,249,245,.74) 72%);
  }
  #root .my-reviews-heading {
    background: linear-gradient(112deg, rgba(232,238,231,.88), rgba(250,249,245,.74) 72%);
  }
  #root .liked-reviews-heading {
    background: linear-gradient(112deg, rgba(241,232,229,.9), rgba(250,249,245,.74) 72%);
  }
  #root .search-page-heading {
    background: linear-gradient(112deg, rgba(231,237,239,.9), rgba(250,249,245,.74) 72%);
  }
  #root .favorite-page-heading {
    background: linear-gradient(112deg, rgba(226,235,229,.9), rgba(250,249,245,.72) 78%);
  }

  /* Favorites page: poster collection carries the strongest visual identity. */
  #root .favorite-page {
    min-height: 100vh;
    padding: 22px 0 72px;
    background: linear-gradient(180deg, rgba(99,122,114,.105), rgba(99,122,114,.035) 300px, transparent 620px);
  }
  #root .favorite-page-container {
    width: min(1240px, calc(100% - 48px));
    max-width: 1240px;
    margin: 0 auto;
  }
  #root .favorite-page-heading {
    min-height: 156px;
    margin-bottom: 22px;
  }
  #root .favorite-page-heading h1 {
    font-size: clamp(29px, 3.4vw, 38px);
  }
  #root .favorite-page .favorite-list-toolbar {
    min-height: 42px;
    margin: 0 0 18px;
    padding: 0 2px 12px;
    border-bottom: 1px solid rgba(107,119,110,.18);
  }
  #root .favorite-page .favorite-list-toolbar > span {
    display: inline-flex;
    align-items: center;
    min-height: 30px;
    padding: 0 11px;
    border: 1px solid rgba(110,129,116,.22);
    border-radius: 8px;
    background: rgba(105,128,115,.1);
    box-shadow: none;
    color: #41594B;
    font-size: 11px;
    font-weight: 750;
  }
  #root .favorite-page .favorite-page-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 22px 18px;
  }
  #root .favorite-page .favorite-page-card {
    position: relative;
    min-width: 0;
    padding: 8px;
    border: 1px solid rgba(255,255,255,.78);
    border-radius: 15px;
    background: rgba(248,247,242,.58);
    box-shadow: 0 7px 18px rgba(39,43,39,.055), inset 0 1px rgba(255,255,255,.86);
    backdrop-filter: blur(18px) saturate(108%);
    -webkit-backdrop-filter: blur(18px) saturate(108%);
    transition: transform 220ms var(--momo-glass-ease), box-shadow 220ms ease, border-color 220ms ease;
  }
  #root .favorite-page .favorite-page-card:nth-child(3n + 2) {
    background: rgba(244,241,235,.62);
  }
  #root .favorite-page .favorite-page-card:nth-child(3n) {
    background: rgba(239,243,237,.62);
  }
  #root .favorite-page .favorite-page-card:hover {
    border-color: rgba(255,255,255,.96);
    box-shadow: 0 13px 24px rgba(39,43,39,.09), inset 0 1px rgba(255,255,255,.96);
    transform: translateY(-3px);
  }
  #root .favorite-page .favorite-page-poster {
    padding: 4px;
    border: 1px solid rgba(255,255,255,.72);
    border-radius: 10px;
    background: rgba(255,255,255,.46);
    box-shadow: 0 4px 10px rgba(35,39,35,.1);
    backdrop-filter: blur(12px);
  }
  #root .favorite-page .favorite-page-poster > .favorite-page-open-button,
  #root .favorite-page .favorite-page-poster img {
    border-radius: 7px;
  }
  #root .favorite-page .favorite-page-movie-info {
    padding: 11px 3px 3px;
  }
  #root .favorite-page .favorite-page-movie-info h3 {
    color: #303633;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: -.02em;
  }
  #root .favorite-page .favorite-page-movie-info p {
    color: #626A63;
    font-size: 11px;
    font-weight: 600;
  }
  #root .favorite-page .favorite-page-empty {
    padding: 52px 22px;
    background: rgba(248,247,242,.72);
    text-align: center;
  }
  #root .favorite-page .favorite-empty-symbol {
    color: #647B70;
    filter: none;
  }
  #root .favorite-page .favorite-page-empty h2 {
    color: #303633;
    font-weight: 800;
  }
  #root .favorite-page .favorite-page-empty p {
    color: #626A63;
  }
  #root .favorite-page .favorite-browse-button {
    min-height: 42px;
    padding: 0 18px;
    border: 1px solid rgba(95,119,104,.32);
    border-radius: 11px;
    background: rgba(101,126,111,.14);
    box-shadow: none;
    color: #41594B;
    font-weight: 800;
  }

  /* Profile activity is a set of glass archive entries, not paper stickers. */
  #root .profile-page .profile-card:has(.profile-activity-grid) {
    display: block;
    width: 100%;
    padding: clamp(22px, 3vw, 32px);
    border: 1px solid rgba(255,255,255,.8);
    border-radius: 20px;
    background: rgba(248,247,242,.68);
    box-shadow: var(--momo-glass-shadow);
    backdrop-filter: blur(22px) saturate(110%);
    -webkit-backdrop-filter: blur(22px) saturate(110%);
  }
  #root .profile-page .profile-card:has(.profile-activity-grid)::before,
  #root .profile-page .profile-card:has(.profile-activity-grid)::after {
    content: none !important;
    display: none !important;
  }
  #root .profile-page .profile-card:has(.profile-activity-grid) > .profile-card-heading {
    margin-bottom: 22px;
  }
  #root .profile-page .profile-card:has(.profile-activity-grid) > .profile-card-heading h2 {
    color: #303633;
    font-size: 21px;
    font-weight: 850;
    letter-spacing: -.04em;
  }
  #root .profile-page .profile-card:has(.profile-activity-grid) > .profile-card-heading p {
    color: #626A63;
  }
  #root .profile-page .profile-activity-grid {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
  }
  #root .profile-page .profile-activity-item {
    --activity-ink: #756346;
    display: flex;
    position: relative;
    isolation: isolate;
    min-width: 0;
    min-height: 184px;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 19px 19px 15px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.8);
    border-left: 3px solid var(--activity-ink);
    border-radius: 15px;
    background: rgba(245,243,235,.66);
    box-shadow: 0 6px 16px rgba(39,43,39,.045), inset 0 1px rgba(255,255,255,.88);
    color: #303633;
    text-align: left;
    text-decoration: none;
    backdrop-filter: blur(22px) saturate(108%);
    -webkit-backdrop-filter: blur(22px) saturate(108%);
    transition: transform 210ms var(--momo-glass-ease), box-shadow 210ms ease, border-color 210ms ease;
  }
  #root .profile-page .profile-activity-item[data-tone="writing"] {
    --activity-ink: #887653;
    background: rgba(243,239,229,.74);
  }
  #root .profile-page .profile-activity-item[data-tone="liked"] {
    --activity-ink: #896B69;
    background: rgba(243,236,233,.74);
  }
  #root .profile-page .profile-activity-item[data-tone="saved"] {
    --activity-ink: #5F796B;
    background: rgba(235,241,235,.76);
  }
  #root .profile-page .profile-activity-item::before,
  #root .profile-page .profile-activity-item::after {
    content: none !important;
    display: none !important;
  }
  #root .profile-page .profile-activity-item:hover {
    border-color: rgba(255,255,255,.98);
    border-left-color: var(--activity-ink);
    box-shadow: 0 11px 22px rgba(39,43,39,.08), inset 0 1px rgba(255,255,255,.96);
    transform: translateY(-3px);
  }
  #root .profile-page .profile-activity-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    min-height: 38px;
    margin-bottom: 13px;
  }
  #root .profile-page .profile-activity-kicker {
    color: var(--activity-ink);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: .035em;
  }
  #root .profile-page .profile-activity-icon {
    display: grid;
    place-items: center;
    flex: 0 0 36px;
    width: 36px;
    height: 36px;
    border: 1px solid rgba(255,255,255,.78);
    border-radius: 10px;
    background: rgba(255,255,255,.44);
    box-shadow: inset 0 1px rgba(255,255,255,.9);
    color: var(--activity-ink);
  }
  #root .profile-page .profile-activity-icon svg {
    display: block;
    width: 19px;
    height: 19px;
  }
  #root .profile-page .profile-activity-item h3 {
    margin: 0 0 9px;
    color: #303633;
    font-size: 14px;
    font-weight: 800;
    letter-spacing: -.025em;
  }
  #root .profile-page .profile-activity-count-row {
    display: inline-flex;
    align-items: baseline;
    align-self: flex-start;
    gap: 6px;
    min-height: 0;
    padding: 0;
    border: 0;
    background: transparent;
    box-shadow: none;
  }
  #root .profile-page .profile-activity-count {
    color: #303633;
    font-size: clamp(34px, 3.2vw, 41px);
    font-weight: 850;
    line-height: 1;
    letter-spacing: -.06em;
    font-variant-numeric: tabular-nums;
  }
  #root .profile-page .profile-activity-unit {
    color: #616962;
    font-size: 11px;
    font-weight: 700;
  }
  #root .profile-page .profile-activity-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-top: auto;
    padding-top: 13px;
    border-top: 1px solid rgba(79,91,81,.14);
  }
  #root .profile-page .profile-activity-footer p {
    display: block !important;
    margin: 0;
    color: #5B635D;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.5;
  }
  #root .profile-page .profile-activity-arrow {
    color: var(--activity-ink);
    font-size: 17px;
    font-weight: 700;
    transition: transform 180ms ease;
  }
  #root .profile-page .profile-activity-item:hover .profile-activity-arrow {
    transform: translate(2px,-2px);
  }

  /* Movie detail: glass is visible in the material, not in decorative circles. */
  #root .movie-detail-page {
    max-width: 1240px;
    padding-bottom: 72px;
  }
  #root .movie-detail-page .movie-detail-header {
    position: relative;
    isolation: isolate;
    display: grid;
    grid-template-columns: minmax(220px, .55fr) minmax(0, 1fr);
    align-items: center;
    gap: clamp(26px, 3.5vw, 46px);
    min-height: 410px;
    padding: clamp(24px, 3.6vw, 42px);
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.82);
    border-radius: 24px;
    background: linear-gradient(132deg, rgba(251,250,246,.78), rgba(237,238,231,.58));
    box-shadow: 0 18px 42px rgba(39,43,39,.095), inset 0 1px rgba(255,255,255,.92);
    backdrop-filter: blur(28px) saturate(114%);
    -webkit-backdrop-filter: blur(28px) saturate(114%);
  }
  #root .movie-detail-page .movie-detail-header::before {
    content: none !important;
    display: none !important;
  }
  #root .movie-detail-page .movie-detail-header::after {
    position: absolute;
    z-index: 0;
    inset: 0;
    content: "";
    border-radius: inherit;
    background: linear-gradient(118deg, rgba(255,255,255,.22), transparent 38%);
    pointer-events: none;
  }
  #root .movie-detail-page .movie-detail-poster {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 320px;
    padding: 7px;
    border: 1px solid rgba(255,255,255,.86);
    border-radius: 16px;
    background: rgba(250,249,245,.48);
    box-shadow: 0 16px 30px rgba(30,34,30,.18), inset 0 1px rgba(255,255,255,.94);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    transform: none;
  }
  #root .movie-detail-page .movie-detail-poster:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 34px rgba(30,34,30,.2), inset 0 1px rgba(255,255,255,.96);
  }
  #root .movie-detail-page .movie-detail-poster img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
  #root .movie-detail-page .movie-detail-info {
    position: relative;
    z-index: 1;
    display: flex;
    min-width: 0;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 9px;
  }
  #root .movie-detail-page .movie-detail-info .detail-rank {
    display: inline-flex;
    align-items: center;
    min-height: 29px;
    margin: 0 0 3px;
    padding: 0 10px;
    border: 1px solid rgba(98,122,109,.26);
    border-radius: 7px;
    background: rgba(101,126,111,.1);
    box-shadow: none;
    color: #4C6657;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: .045em;
    backdrop-filter: blur(12px);
  }
  #root .movie-detail-page .movie-detail-info .detail-rank::before {
    content: none !important;
    display: none !important;
  }
  #root .movie-detail-page .movie-detail-info h1 {
    flex: 0 0 100%;
    width: 100%;
    margin: 0 0 6px;
    color: #292D2B;
    font-size: clamp(29px, 3.8vw, 42px);
    font-weight: 850;
    line-height: 1.14;
    letter-spacing: -.05em;
    overflow-wrap: anywhere;
    text-shadow: none;
  }
  #root .movie-detail-page .movie-detail-info > p {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    max-width: 100%;
    min-height: 32px;
    margin: 0;
    padding: 6px 10px;
    border: 1px solid rgba(255,255,255,.7);
    border-radius: 9px;
    background: rgba(250,249,245,.48);
    box-shadow: inset 0 1px rgba(255,255,255,.84);
    color: #525B54;
    font-size: 12px;
    font-weight: 650;
    line-height: 1.5;
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
  }
  #root .movie-detail-page .movie-detail-header-no-poster {
    grid-template-columns: minmax(0, 1fr);
    min-height: 320px;
  }
  #root .movie-detail-page .movie-detail-header-no-poster .movie-detail-info {
    max-width: 900px;
  }
  #root .movie-detail-page > .detail-content-section {
    margin-top: 22px;
    border: 1px solid rgba(255,255,255,.78);
    border-radius: 19px;
    background: rgba(248,247,242,.67);
    box-shadow: var(--momo-glass-shadow);
    backdrop-filter: blur(20px) saturate(108%);
    -webkit-backdrop-filter: blur(20px) saturate(108%);
  }
  #root .movie-detail-page > .detail-content-section > h2 {
    color: #303633;
    font-weight: 850;
    letter-spacing: -.035em;
  }
  #root .movie-detail-page > .detail-content-section > p {
    color: #535B55;
    line-height: 1.8;
  }

  /* Audience feedback uses calm positive / critical hues, not saturated status colors. */
  #root .movie-detail-page .movie-rating-panel {
    border: 1px solid rgba(255,255,255,.82);
    border-radius: 18px;
    background: rgba(248,247,242,.72);
    box-shadow: var(--momo-glass-shadow);
    backdrop-filter: blur(22px) saturate(110%);
    -webkit-backdrop-filter: blur(22px) saturate(110%);
  }
  #root .movie-detail-page .movie-rating-panel::before {
    content: none !important;
    display: none !important;
  }
  #root .movie-detail-page .rating-panel-eyebrow,
  #root .movie-detail-page .rating-panel-stamp {
    color: #66746A;
  }
  #root .movie-detail-page .rating-label,
  #root .movie-detail-page .movie-score-value strong {
    color: #303633;
  }
  #root .movie-detail-page .rating-panel-description,
  #root .movie-detail-page .rating-score-caption,
  #root .movie-detail-page .rating-vote-summary,
  #root .movie-detail-page .rating-distribution-heading,
  #root .movie-detail-page .rating-distribution-legend {
    color: #58615A;
  }
  #root .movie-detail-page .movie-score-display,
  #root .movie-detail-page .rating-distribution {
    border: 1px solid rgba(255,255,255,.8);
    border-radius: 12px;
    background: rgba(255,255,255,.42);
    box-shadow: inset 0 1px rgba(255,255,255,.9);
  }
  #root .movie-detail-page .rating-distribution-track {
    border-color: rgba(90,105,94,.16);
    background: rgba(111,126,115,.13);
    box-shadow: none;
  }
  #root .movie-detail-page .rating-distribution-track span {
    background: #718578;
    box-shadow: none;
  }
  #root .movie-detail-page .rating-vote-button {
    border: 1px solid rgba(255,255,255,.82);
    border-radius: 10px;
    background: rgba(255,255,255,.52);
    box-shadow: 0 4px 10px rgba(39,43,39,.045), inset 0 1px rgba(255,255,255,.9);
    color: #48534B;
  }
  #root .movie-detail-page .rating-vote-button.is-like,
  #root .movie-detail-page .rating-vote-button.selected-like {
    border-color: rgba(96,125,103,.3);
    background: rgba(117,145,122,.14);
    color: #405D47;
  }
  #root .movie-detail-page .rating-vote-button.is-dislike,
  #root .movie-detail-page .rating-vote-button.selected-dislike {
    border-color: rgba(148,108,103,.28);
    background: rgba(160,121,114,.12);
    color: #76524F;
  }
  #root .movie-detail-page .rating-vote-button strong {
    color: inherit;
  }
  #root .movie-detail-page .rating-vote-button:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(39,43,39,.07), inset 0 1px rgba(255,255,255,.94);
  }
  #root .movie-detail-page .rating-unavailable {
    border-color: rgba(98,122,109,.24);
    border-radius: 10px;
    background: rgba(101,126,111,.08);
    color: #55635A;
  }

  /* Film-ticket control: the perforated ticket is the actual action symbol. */
  #root .favorite-star {
    position: absolute;
    top: 11px;
    right: 11px;
    z-index: 5;
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    padding: 0;
    border: 1px solid rgba(255,255,255,.58);
    border-radius: 12px;
    background: rgba(29,36,32,.52);
    box-shadow: 0 7px 17px rgba(18,24,20,.2), inset 0 1px rgba(255,255,255,.28);
    color: rgba(255,255,255,.96);
    backdrop-filter: blur(18px) saturate(115%);
    -webkit-backdrop-filter: blur(18px) saturate(115%);
    transition: transform 180ms ease, background 180ms ease, color 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
  }
  #root .favorite-star .favorite-film-ticket-icon {
    display: block;
    width: 24px;
    height: 24px;
  }
  #root .favorite-star .favorite-film-ticket-icon path,
  #root .favorite-star .favorite-film-ticket-icon rect,
  #root .favorite-star .favorite-film-ticket-icon line {
    vector-effect: non-scaling-stroke;
  }
  #root .favorite-star:hover:not(:disabled) {
    border-color: rgba(255,255,255,.88);
    background: rgba(29,36,32,.72);
    box-shadow: 0 10px 20px rgba(18,24,20,.24), inset 0 1px rgba(255,255,255,.42);
    transform: translateY(-2px);
  }
  #root .favorite-star.is-active {
    border-color: rgba(255,255,255,.76);
    background: rgba(94,119,103,.94);
    color: #FFFFFF;
    box-shadow: 0 7px 18px rgba(36,58,44,.24), inset 0 1px rgba(255,255,255,.26);
  }
  #root .favorite-star:focus-visible {
    outline: 3px solid rgba(92,119,102,.5);
    outline-offset: 3px;
  }

  /* Recommendation and ranking labels use one compact archive language. */
  #root .recommend-content .recommend-label {
    display: inline-flex;
    align-items: center;
    min-height: 25px;
    margin: 0 0 10px;
    padding: 3px 9px;
    border: 1px solid rgba(255,255,255,.5);
    border-radius: 5px;
    background: rgba(34,40,36,.44);
    box-shadow: none;
    color: rgba(255,255,255,.96);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: .03em;
    transform: none;
    backdrop-filter: blur(12px);
  }
  #root .recommend-content .recommend-label::before {
    content: "FILM";
    margin-right: 7px;
    color: rgba(255,255,255,.78);
    font-size: 8px;
    font-weight: 850;
    letter-spacing: .12em;
  }
  #root .recommend-content::before,
  #root .recommend-content .recommend-label::after {
    content: none !important;
    display: none !important;
  }
  #root .recommend-content .recommend-info,
  #root .recommend-content .recommend-description {
    color: rgba(255,255,255,.94);
    text-shadow: 0 1px 2px rgba(0,0,0,.38);
  }
  #root .recommend-content .recommend-button {
    min-height: 40px;
    padding: 0 15px;
    border: 1px solid rgba(255,255,255,.72);
    border-radius: 10px;
    background: rgba(239,238,229,.92);
    box-shadow: 0 5px 13px rgba(0,0,0,.16), inset 0 1px rgba(255,255,255,.9);
    color: #354139;
    font-size: 12px;
    font-weight: 800;
  }
  #root .recommend-content .recommend-button:hover {
    background: #FFFFFF;
    transform: translateY(-1px);
  }
  #root .home-page .movie-info h3 { color: #303633; }
  #root .home-page .movie-info p { color: #626A63; }
  #root .home-page .poster-rank,
  #root .home-page .rank {
    border: 1px solid rgba(255,255,255,.76);
    border-radius: 7px;
    background: rgba(38,48,42,.72);
    box-shadow: none;
    color: #FFFFFF;
  }

  /* Shared buttons: consistent shape, low-contrast surface, dark readable text. */
  #root .profile-button,
  #root .page-back-link,
  #root .favorite-back-button,
  #root .detail-back-button,
  #root .review-detail-back,
  #root .people-more-button,
  #root .person-bio-toggle,
  #root .home-favorites-more {
    min-height: 40px;
    border: 1px solid rgba(255,255,255,.82);
    border-radius: 10px;
    background: rgba(249,248,243,.68);
    box-shadow: 0 4px 11px rgba(39,43,39,.045), inset 0 1px rgba(255,255,255,.9);
    color: #465149;
    font-size: 12px;
    font-weight: 750;
    transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease, background 180ms ease;
  }
  #root .profile-button:hover,
  #root .page-back-link:hover,
  #root .favorite-back-button:hover,
  #root .detail-back-button:hover,
  #root .review-detail-back:hover,
  #root .people-more-button:hover,
  #root .person-bio-toggle:hover,
  #root .home-favorites-more:hover {
    border-color: rgba(99,124,108,.35);
    background: rgba(255,255,255,.86);
    box-shadow: 0 7px 15px rgba(39,43,39,.075), inset 0 1px rgba(255,255,255,.96);
    transform: translateY(-1px);
  }

  /* Search, archive lists and forms inherit the same calm material. */
  #root .all-reviews-search-label {
    color: #526258;
  }
  #root .all-reviews-search-select,
  #root .all-reviews-search-input,
  #root .momo-search-form,
  #root .search-page input,
  #root .search-page select,
  #root main > input[type="search"],
  #root .review-title-field input,
  #root .review-content-field textarea,
  #root .review-edit-title,
  #root .review-edit-area textarea,
  #root .review-comment-form textarea,
  #root .signup-field input,
  #root .profile-form input,
  #root .profile-form textarea,
  #root .profile-delete-page-card input {
    border: 1px solid rgba(103,120,108,.25);
    border-radius: 10px;
    background: rgba(250,249,245,.76);
    box-shadow: inset 0 1px rgba(255,255,255,.9);
    color: #303833;
  }
  #root input::placeholder,
  #root textarea::placeholder {
    color: #737B73;
  }
  #root input:focus,
  #root textarea:focus,
  #root select:focus {
    border-color: rgba(93,122,104,.56);
    outline: none;
    background: rgba(255,255,255,.9);
    box-shadow: 0 0 0 3px rgba(93,122,104,.13), 0 5px 14px rgba(39,43,39,.045);
  }
  #root .momo-search-form:focus-within {
    border-color: rgba(93,122,104,.48);
    box-shadow: 0 0 0 3px rgba(93,122,104,.12), 0 10px 22px rgba(39,43,39,.065);
    transform: translateY(-1px);
  }
  #root .momo-search-dropdown {
    border: 1px solid rgba(255,255,255,.86);
    border-radius: 15px;
    background: rgba(249,248,243,.92);
    box-shadow: 0 16px 36px rgba(39,43,39,.12), inset 0 1px rgba(255,255,255,.94);
    backdrop-filter: blur(22px) saturate(108%);
    -webkit-backdrop-filter: blur(22px) saturate(108%);
  }
  #root .momo-search-result:hover {
    background: rgba(101,126,111,.09);
  }
  #root .all-reviews-search-panel,
  #root .all-reviews-search-form,
  #root .all-reviews-search-toolbar {
    border-color: rgba(255,255,255,.78);
    border-radius: 14px;
    background: rgba(247,246,240,.68);
    box-shadow: inset 0 1px rgba(255,255,255,.88);
    backdrop-filter: blur(18px) saturate(108%);
    -webkit-backdrop-filter: blur(18px) saturate(108%);
  }
  #root .all-reviews-table-wrap {
    border: 1px solid rgba(255,255,255,.82);
    border-radius: 13px;
    background: rgba(248,247,242,.62);
    box-shadow: 0 8px 18px rgba(39,43,39,.045);
  }
  #root .all-reviews-table thead th {
    border-bottom: 1px solid rgba(96,117,103,.2);
    background: rgba(104,128,112,.12);
    color: #4D6254;
  }
  #root .all-reviews-table tbody tr,
  #root .all-reviews-table tbody tr:nth-child(even) {
    background: rgba(250,249,245,.64);
  }
  #root .all-reviews-table tbody tr:hover {
    background: rgba(105,128,114,.09);
  }
  #root .my-review-item,
  #root .liked-review-item,
  #root .all-reviews-mobile-item {
    border: 1px solid rgba(255,255,255,.82);
    border-radius: 13px;
    background: rgba(248,247,242,.68);
    box-shadow: 0 6px 15px rgba(39,43,39,.045), inset 0 1px rgba(255,255,255,.9);
  }
  #root .my-review-item:hover,
  #root .liked-review-item:hover,
  #root .all-reviews-mobile-item:hover {
    background: rgba(255,255,255,.82);
    box-shadow: 0 10px 20px rgba(39,43,39,.075);
    transform: translateY(-2px);
  }
  #root .liked-review-unlike {
    border: 1px solid rgba(137,107,105,.25);
    border-radius: 9px;
    background: rgba(137,107,105,.1);
    color: #765855;
  }
  #root .liked-review-unlike:hover:not(:disabled) {
    background: rgba(137,107,105,.16);
    box-shadow: 0 5px 12px rgba(39,43,39,.05);
  }
  #root .profile-user {
    border: 1px solid rgba(255,255,255,.8);
    border-radius: 14px;
    background: rgba(250,249,245,.62);
    box-shadow: inset 0 1px rgba(255,255,255,.9);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }
  #root .person-chip {
    border-color: rgba(255,255,255,.82);
    background: rgba(249,248,243,.66);
    box-shadow: 0 3px 9px rgba(39,43,39,.045), inset 0 1px rgba(255,255,255,.9);
    color: #4C5750;
  }
  #root .person-chip:hover {
    background: rgba(255,255,255,.86);
    box-shadow: 0 6px 13px rgba(39,43,39,.07);
  }
  #root .signup-card {
    border: 1px solid rgba(255,255,255,.82);
    border-radius: 20px;
    background: rgba(248,247,242,.78);
    box-shadow: 0 16px 38px rgba(39,43,39,.085), inset 0 1px rgba(255,255,255,.94);
    backdrop-filter: blur(22px) saturate(108%);
    -webkit-backdrop-filter: blur(22px) saturate(108%);
  }
  #root .signup-card-heading h1 {
    color: #303833;
  }
  #root .signup-submit,
  #root .all-reviews-search-submit {
    min-height: 44px;
    border: 1px solid rgba(94,119,103,.32);
    border-radius: 10px;
    background: rgba(101,126,111,.15);
    box-shadow: 0 5px 12px rgba(39,43,39,.055), inset 0 1px rgba(255,255,255,.88);
    color: #40574A;
    font-weight: 800;
  }
  #root .signup-submit:hover:not(:disabled),
  #root .all-reviews-search-submit:hover:not(:disabled) {
    background: rgba(101,126,111,.22);
    box-shadow: 0 8px 16px rgba(39,43,39,.075), inset 0 1px rgba(255,255,255,.94);
    transform: translateY(-1px);
  }
  #root .signup-note-label {
    border-color: rgba(101,126,111,.22);
    background: rgba(101,126,111,.1);
    color: #4D6254;
  }
  #root .review-write-toggle:hover {
    background: rgba(101,126,111,.1);
  }
  #root .review-title-field input:focus,
  #root .review-content-field textarea:focus,
  #root .review-edit-title:focus,
  #root .review-edit-area textarea:focus,
  #root .review-comment-form textarea:focus,
  #root .signup-field input:focus,
  #root .profile-form input:focus,
  #root .profile-form textarea:focus {
    border-color: rgba(93,122,104,.56);
    box-shadow: 0 0 0 3px rgba(93,122,104,.13);
  }

  /* Small text is never faded into the glass. */
  #root .profile-heading p,
  #root .profile-card-heading p,
  #root .movie-detail-info > p:not(.eyebrow),
  #root .detail-section-count,
  #root .all-reviews-description,
  #root .my-reviews-heading p,
  #root .liked-reviews-heading p,
  #root .favorite-page-heading p,
  #root .favorite-page-empty p,
  #root .search-page-heading p,
  #root .favorite-page-movie-info p {
    color: #59615A;
  }

  /* Mobile rhythm. Keep every activity description visible. */
  @media (max-width: 1050px) {
    #root .favorite-page .favorite-page-grid {
      grid-template-columns: repeat(4, minmax(0,1fr));
    }
  }
  @media (max-width: 860px) {
    #root .profile-page .profile-activity-grid {
      grid-template-columns: repeat(2, minmax(0,1fr));
    }
  }
  @media (max-width: 760px) {
    #root .all-reviews-heading,
    #root .my-reviews-heading,
    #root .liked-reviews-heading,
    #root .search-page-heading,
    #root .favorite-page-heading {
      align-items: flex-start;
      flex-direction: column;
      min-height: 0;
      gap: 17px;
      padding: 24px 21px;
      border-radius: 17px;
    }
    #root .all-reviews-heading::before,
    #root .my-reviews-heading::before,
    #root .liked-reviews-heading::before,
    #root .search-page-heading::before,
    #root .favorite-page-heading::before {
      top: 22px;
      bottom: 22px;
    }
    #root .favorite-page-container { width: calc(100% - 36px); }
    #root .favorite-page .favorite-page-grid {
      grid-template-columns: repeat(3, minmax(0,1fr));
      gap: 17px 12px;
    }
    #root .movie-detail-page .movie-detail-header {
      grid-template-columns: minmax(0,1fr);
      min-height: 0;
      gap: 23px;
      padding: 24px 20px;
      border-radius: 19px;
    }
    #root .movie-detail-page .movie-detail-poster {
      width: min(58%, 240px);
      margin: 0 auto;
    }
    #root .movie-detail-page .movie-detail-info { gap: 8px; }
    #root .movie-detail-page .rating-panel-main { grid-template-columns: 1fr; }
    #root .profile-page .profile-card:has(.profile-activity-grid) { padding: 22px 17px; }
  }
  @media (max-width: 600px) {
    #root .favorite-page-container { width: calc(100% - 28px); }
    #root .favorite-page .favorite-page-grid {
      grid-template-columns: repeat(2, minmax(0,1fr));
      gap: 16px 10px;
    }
    #root .favorite-page .favorite-page-card { padding: 6px; border-radius: 12px; }
    #root .favorite-page .favorite-page-poster { padding: 3px; }
    #root .favorite-page .favorite-page-movie-info { padding: 9px 2px 3px; }
    #root .favorite-page .favorite-page-movie-info h3 { font-size: 12px; }
    #root .favorite-page .favorite-page-movie-info p { font-size: 10px; }
    #root .profile-page .profile-activity-grid {
      grid-template-columns: 1fr;
      gap: 11px;
    }
    #root .profile-page .profile-activity-item {
      min-height: 168px;
      padding: 17px 16px 14px;
    }
    #root .movie-detail-page .movie-detail-header { padding: 21px 16px; }
    #root .movie-detail-page .movie-detail-info h1 { font-size: 29px; }
    #root .movie-detail-page .movie-detail-info > p { font-size: 11px; }
    #root .movie-detail-page .rating-panel-heading { flex-direction: column; align-items: flex-start; }
    #root .movie-detail-page .detail-reaction-counts { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 380px) {
    #root .movie-detail-page .detail-reaction-counts { grid-template-columns: 1fr; }
  }
  @media (prefers-reduced-motion: reduce) {
    #root *,
    #root *::before,
    #root *::after {
      animation-duration: .01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: .01ms !important;
    }
  }
`;

export default MomoLiquidGlassPageStyles;
