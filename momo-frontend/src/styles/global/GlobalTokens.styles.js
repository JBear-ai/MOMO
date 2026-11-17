import { createGlobalStyle } from "styled-components";

// MOMO 공통 색상과 간격: 낮은 채도, 충분한 명도 대비, 제한된 강조색
const GlobalTokensStyles = createGlobalStyle`
  :root {
    color-scheme: light;

    /* Paper / desk */
    --momo-bg: #ECEAE3;
    --momo-surface: #F8F7F2;
    --momo-surface-raised: #FCFBF7;
    --momo-note: #F2EFE6;
    --momo-note-strong: #E8E2D3;

    /* Brand accent: highlighter yellow is replaced by muted archival brass */
    --momo-accent: #B49A68;
    --momo-accent-hover: #967D50;
    --momo-accent-soft: #E9E1CF;
    --momo-accent-ink: #4B4333;

    /* Typography */
    --momo-text: #292D2B;
    --momo-text-soft: #484E49;
    --momo-muted: #676D67;
    --momo-placeholder: #747A73;
    --momo-link: #56645C;

    /* Borders and feedback */
    --momo-border: #D9D7CE;
    --momo-border-strong: #C6C4B9;
    --momo-note-border: #D8D2C4;
    --momo-focus: rgba(91, 111, 101, .36);
    --momo-like-bg: #EEF0E8;
    --momo-like-bg-hover: #E3E8DB;
    --momo-like-border: #A8B19A;
    --momo-like-text: #43513F;
    --momo-dislike-bg: #F3EBE8;
    --momo-dislike-bg-hover: #EBDDD8;
    --momo-dislike-border: #C4A29A;
    --momo-dislike-text: #80534C;
    --momo-danger: #965A53;
    --momo-danger-bg: #F4EDEA;
    --momo-success: #526D5D;

    /* Material */
    --momo-shadow-xs: 0 1px 2px rgba(39, 43, 39, .035);
    --momo-shadow-sm: 0 5px 16px rgba(39, 43, 39, .055);
    --momo-shadow: 0 12px 30px rgba(39, 43, 39, .075);
    --momo-shadow-lg: 0 20px 46px rgba(39, 43, 39, .105);
    --momo-glass: rgba(250, 249, 245, .7);
    --momo-glass-border: rgba(255, 255, 255, .78);
    --momo-header-glass: rgba(247, 246, 240, .82);

    /* Layout */
    --momo-radius-sm: 8px;
    --momo-radius: 13px;
    --momo-radius-lg: 19px;
    --momo-radius-pill: 999px;
    --momo-content-width: 1280px;
    --momo-page-gutter: clamp(18px, 4vw, 52px);
    --momo-section-gap: clamp(34px, 4.2vw, 56px);
    --momo-font-display: clamp(2rem, 3.5vw, 3.25rem);
    --momo-font-title: clamp(1.3rem, 2vw, 1.75rem);
    --momo-font-body: .9375rem;
    --momo-line-body: 1.65;
    --momo-space-1: 4px;
    --momo-space-2: 8px;
    --momo-space-3: 12px;
    --momo-space-4: 16px;
    --momo-space-6: 24px;
    --momo-space-8: 32px;
    --momo-space-10: 40px;
    --momo-space-12: 48px;
    --momo-transition-fast: 150ms cubic-bezier(.2, .7, .2, 1);
    --momo-transition-ui: 220ms cubic-bezier(.2, .7, .2, 1);
    --momo-ring: 0 0 0 3px rgba(91, 111, 101, .16);
  }

  html, body, #root { min-height: 100%; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    background: var(--momo-bg);
    color: var(--momo-text);
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont,
      system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo",
      "Noto Sans KR", "Malgun Gothic", sans-serif;
    letter-spacing: -.012em;
    line-height: var(--momo-line-body);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  button, input, textarea, select { font: inherit; }
  a { color: inherit; }
  img { max-width: 100%; }
  button, a, input, textarea, select { -webkit-tap-highlight-color: transparent; }
  button { color: inherit; }
  button:disabled { cursor: not-allowed; opacity: .58; }
  :focus-visible {
    outline: 3px solid var(--momo-focus);
    outline-offset: 3px;
  }
  ::selection { color: var(--momo-text); background: #DDD4BE; }
  input::placeholder, textarea::placeholder { color: var(--momo-placeholder); }
  code { font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace; }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      scroll-behavior: auto !important;
      animation-duration: .01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: .01ms !important;
    }
  }
`;

export default GlobalTokensStyles;
