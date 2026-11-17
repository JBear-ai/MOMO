import { createGlobalStyle } from "styled-components";

const MovieSearchAutocompleteStyles = createGlobalStyle`
  /* 검색 영역 */
  .momo-search-area {
    position: relative;
    flex-shrink: 0;
    width: clamp(260px, 28vw, 380px);
    max-width: 100%;
  }

  /* 검색 폼 */
  .momo-search-form {
    display: flex;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    min-height: 44px;
    padding: 6px 16px;
    background: var(--momo-note);
    border: 1px solid var(--momo-note-border);
    border-radius: var(--momo-radius-pill);
    transition: all 0.2s ease;
  }

  .momo-search-form:focus-within {
    border-color: var(--momo-accent);
    box-shadow: 0 0 0 3px rgba(255, 212, 59, 0.2);
  }

  /* 검색 입력 */
  .momo-search-input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    color: var(--momo-text);
    font-size: 14px;
  }

  .momo-search-input::placeholder {
    color: var(--momo-placeholder);
  }

  /* 검색 버튼 */
  .momo-search-button {
    flex-shrink: 0;
    margin-left: 6px;
    padding: 2px 4px;
    border: none;
    background: transparent;
    color: var(--momo-accent-ink);
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
  }

  .momo-search-button:hover {
    color: var(--momo-text);
  }

  /* 자동완성 목록 */
  .momo-search-dropdown {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    z-index: 200;
    width: 100%;
    max-height: 390px;
    overflow-y: auto;
    box-sizing: border-box;
    background: rgba(255, 254, 250, .97);
    border: 1px solid var(--momo-border);
    border-radius: 16px;
    box-shadow: var(--momo-shadow-lg);
    backdrop-filter: blur(16px) saturate(125%);
    -webkit-backdrop-filter: blur(18px) saturate(130%);
  }

  /* 영화 검색 결과 */
  .momo-search-result {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    min-height: 88px;
    padding: 10px 12px;
    border: none;
    border-bottom: 1px solid var(--momo-border);
    background: var(--momo-surface);
    text-align: left;
    cursor: pointer;
  }

  .momo-search-result:last-child {
    border-bottom: none;
  }

  .momo-search-result:hover,
  .momo-search-result:focus-visible,
  .momo-search-result.is-active {
    background: var(--momo-note);
    outline: none;
  }

  /* 포스터 */
  .momo-search-poster {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 42px;
    height: 60px;
    overflow: hidden;
    border: 1px solid var(--momo-border);
    border-radius: 5px;
    background: var(--momo-note);
  }

  .momo-search-poster img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .momo-search-poster-fallback {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: var(--momo-placeholder);
    font-size: 18px;
  }

  /* 영화 정보 */
  .momo-search-info {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
    gap: 5px;
  }

  .momo-search-title {
    overflow: hidden;
    color: var(--momo-text);
    font-size: 14px;
    font-weight: 700;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .momo-search-meta {
    overflow: hidden;
    color: var(--momo-placeholder);
    font-size: 11px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  /* 검색 상태 */
  .momo-search-message {
    padding: 18px 12px;
    color: var(--momo-muted);
    font-size: 13px;
    text-align: center;
  }

  /* 반응형 */
  @media (max-width: 768px) {
    .momo-search-area {
      width: 280px;
    }
  }

  @media (max-width: 600px) {
    .momo-search-area {
      width: 100%;
    }

    .momo-search-dropdown {
      max-height: 320px;
    }
  }
`;

export default MovieSearchAutocompleteStyles;
