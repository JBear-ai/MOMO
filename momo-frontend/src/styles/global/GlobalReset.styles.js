import { createGlobalStyle } from "styled-components";

// 브라우저 기본값만 초기화하고 시각 토큰은 GlobalTokens에서 관리합니다.
const GlobalResetStyles = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html { min-width: 320px; }
  body { margin: 0; min-width: 320px; }
  button, input, textarea, select { font: inherit; }
  button { cursor: pointer; }
  button:disabled { cursor: not-allowed; }
  img { max-width: 100%; }
  a { color: inherit; }
  code { font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace; }

  @media (prefers-reduced-motion: reduce) {
    html:root { scroll-behavior: auto; }
    #root *:not(#root), #root *:not(#root)::before, #root *:not(#root)::after {
      animation: none; transition: none; transform: none;
    }
  }
`;
export default GlobalResetStyles;
