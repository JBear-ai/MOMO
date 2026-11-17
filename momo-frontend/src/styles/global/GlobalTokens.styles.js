import { createGlobalStyle } from "styled-components";

// MOMO의 모든 화면에서 공유하는 디자인 토큰
const GlobalTokensStyles = createGlobalStyle`
  :root {
    color-scheme: light;
    --momo-bg: #F5F2EB;
    --momo-surface: #FFFEFA;
    --momo-surface-raised: #FFFFFF;
    --momo-note: #FFFAEC;
    --momo-note-strong: #FFF3C7;
    --momo-accent: #FFD43B;
    --momo-accent-hover: #F3C51E;
    --momo-accent-soft: #FFF1B8;
    --momo-accent-ink: #594400;
    --momo-text: #292820;
    --momo-text-soft: #514C40;
    --momo-muted: #827B6D;
    --momo-placeholder: #A49C8D;
    --momo-link: #765A0A;
    --momo-border: #E5DED1;
    --momo-border-strong: #D7CDBB;
    --momo-note-border: #E9DFC5;
    --momo-focus: rgba(118, 90, 10, .34);
    --momo-like-bg: #FFF8DF;
    --momo-like-bg-hover: #FFF0BE;
    --momo-like-border: #E6BF33;
    --momo-like-text: #594400;
    --momo-dislike-bg: #FFF1F1;
    --momo-dislike-bg-hover: #FFE2E2;
    --momo-dislike-border: #E7A3A3;
    --momo-dislike-text: #A83232;
    --momo-danger: #B93838;
    --momo-danger-bg: #FFF3F1;
    --momo-success: #347653;
    --momo-shadow-xs: 0 1px 3px rgba(54, 45, 28, .045);
    --momo-shadow-sm: 0 4px 14px rgba(54, 45, 28, .055);
    --momo-shadow: 0 10px 28px rgba(54, 45, 28, .075);
    --momo-shadow-lg: 0 18px 44px rgba(54, 45, 28, .11);
    --momo-glass: rgba(255, 254, 250, .88);
    --momo-glass-border: rgba(255, 255, 255, .92);
    --momo-radius-sm: 9px;
    --momo-radius: 14px;
    --momo-radius-lg: 20px;
    --momo-radius-pill: 999px;
    --momo-content-width: 1280px;
    --momo-page-gutter: clamp(18px, 4vw, 52px);
    --momo-section-gap: clamp(36px, 4.5vw, 60px);
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
    --momo-ring: 0 0 0 3px rgba(118, 90, 10, .18);
    --momo-header-glass: rgba(255, 254, 250, .92);
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
  button:disabled { cursor: not-allowed; opacity: .52; }
  :focus-visible {
    outline: 3px solid var(--momo-focus);
    outline-offset: 3px;
  }
  ::selection { color: var(--momo-text); background: var(--momo-accent-soft); }
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
