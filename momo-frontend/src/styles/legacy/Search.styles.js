import styled from "styled-components";

const SearchPage = styled.div.attrs({ className: "search-page" })`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-bottom: 56px;
  color: var(--momo-text);
`;

const SearchHeading = styled.div.attrs({ className: "search-page-heading" })`
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
  border: 1px solid rgba(255,255,255,.94);
  border-radius: 15px;
  background: rgba(255,254,250,.76);
  backdrop-filter: blur(16px) saturate(140%);
  color: var(--momo-text);
  font-size: 15px;
  outline: none;
  box-shadow: 0 8px 24px rgba(53,43,24,.065), inset 0 1px rgba(255,255,255,.94);
  transition: border-color 180ms ease, box-shadow 180ms ease, background-color 180ms ease;
  &:focus {
    border-color: #C9A62D;
    box-shadow: 0 0 0 4px rgba(255, 212, 59, .16), 0 14px 30px rgba(53,43,24,.1);
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
  animation: appear .42s cubic-bezier(.2,.72,.2,1) both;
  padding: 7px;
  border: 1px solid rgba(255,255,255,.86);
  border-radius: 17px;
  background: rgba(255,250,236,.34);
  box-shadow: 0 4px 12px rgba(41,40,32,.04), inset 0 1px rgba(255,255,255,.92);
  backdrop-filter: blur(18px) saturate(145%);
  -webkit-backdrop-filter: blur(18px) saturate(145%);
  transition: border-color 240ms ease, box-shadow 240ms ease, background 240ms ease;
  @keyframes appear {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
  }
  &:hover { border-color: rgba(255,255,255,.98); background: rgba(255,255,255,.48); box-shadow: 0 9px 19px rgba(41,40,32,.085), inset 0 1px rgba(255,255,255,1); }
  &:hover img { transform: scale(1.025); }
  &:focus-visible { outline: 2px solid var(--momo-link); outline-offset: 4px; }
`;

const Poster = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 2.85;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,.92);
  background: var(--momo-note);
  box-shadow: 0 7px 18px rgba(43,35,21,.09), inset 0 1px rgba(255,255,255,.65);
  transition: box-shadow 240ms ease, border-color 240ms ease;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform .4s cubic-bezier(.2,.7,.2,1);
  }
  ${MovieCard}:hover & { border-color: rgba(205,166,44,.72); box-shadow: 0 10px 22px rgba(43,35,21,.14), inset 0 1px rgba(255,255,255,.82); }
`;

const MovieInfo = styled.div`
  padding: 10px 2px 0;
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
  background: rgba(255, 254, 250, .68);
  border: 1px solid rgba(255,255,255,.82);
  border-radius: 16px;
  background: rgba(255,254,250,.68);
  backdrop-filter: blur(12px);
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
