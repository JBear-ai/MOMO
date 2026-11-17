import styled from "styled-components";

const SearchPage = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-bottom: 56px;
  color: var(--momo-text);
`;

const SearchHeading = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 26px;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--momo-border-strong);
  h1 {
    margin: 0 0 7px;
    font-size: clamp(26px, 3vw, 34px);
    font-weight: 850;
    letter-spacing: -.045em;
  }
  p { margin: 0; color: var(--momo-muted); font-size: 14px; }
  @media (max-width: 600px) { align-items: flex-start; flex-direction: column; gap: 8px; }
`;

const SearchInput = styled.input`
  width: 100%;
  min-height: 58px;
  padding: 0 22px;
  box-sizing: border-box;
  border: 1px solid var(--momo-border-strong);
  border-radius: 12px;
  background: var(--momo-surface);
  color: var(--momo-text);
  font-size: 15px;
  outline: none;
  box-shadow: var(--momo-shadow-xs);
  transition: border-color var(--momo-transition-fast), box-shadow var(--momo-transition-fast);
  &:focus {
    border-color: #C9A62D;
    box-shadow: 0 0 0 4px rgba(255, 212, 59, .2), var(--momo-shadow-xs);
  }
  &::placeholder { color: var(--momo-placeholder); }
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 26px 18px;
  margin-top: 28px;
  @media (max-width: 1050px) { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  @media (max-width: 720px) { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px 13px; }
  @media (max-width: 460px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
`;

const MovieCard = styled.div`
  min-width: 0;
  padding: 0;
  border: none;
  background: transparent;
  text-align: left;
  cursor: pointer;
  animation: appear .26s ease both;
  @keyframes appear {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
  }
  &:hover img { transform: scale(1.035); }
  &:focus-visible { outline: 2px solid var(--momo-link); outline-offset: 4px; }
`;

const Poster = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 2.85;
  overflow: hidden;
  border-radius: 11px;
  border: 1px solid var(--momo-border);
  background: var(--momo-note);
  box-shadow: var(--momo-shadow-xs);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform .4s cubic-bezier(.2,.7,.2,1);
  }
`;

const MovieInfo = styled.div`
  padding-top: 10px;
  h3 {
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: var(--momo-text);
    font-size: 14px;
    font-weight: 780;
  }
  p { margin: 5px 0 0; color: var(--momo-muted); font-size: 12px; }
`;

const SearchMessage = styled.div`
  display: grid;
  place-items: center;
  min-height: 220px;
  padding: 32px;
  text-align: center;
  color: var(--momo-muted);
  font-size: 14px;
  background: rgba(255, 254, 250, .55);
  border: 1px dashed var(--momo-border-strong);
  border-radius: 14px;
`;

const LoadingMessage = styled.div`
  padding: 35px 0;
  text-align: center;
  color: var(--momo-muted);
  font-size: 13px;
`;

const RetryButton = styled.button`
  min-height: 38px;
  margin-top: 12px;
  padding: 8px 16px;
  border: 1px solid var(--momo-border-strong);
  border-radius: 8px;
  background: var(--momo-surface);
  color: var(--momo-text);
  cursor: pointer;
  &:hover { background: var(--momo-note-strong); border-color: #D6B33B; }
`;

const ScrollSentinel = styled.div`
  width: 100%;
  height: 1px;
`;

export { SearchPage };
export { SearchHeading };
export { SearchInput };
export { MovieGrid };
export { MovieCard };
export { Poster };
export { MovieInfo };
export { SearchMessage };
export { LoadingMessage };
export { RetryButton };
export { ScrollSentinel };
