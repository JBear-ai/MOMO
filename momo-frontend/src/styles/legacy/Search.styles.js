import styled from "styled-components";

const SearchPage = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding-bottom: 60px;
  color: var(--momo-text);
`;

const SearchHeading = styled.div`
  margin-bottom: 32px;

  h1 {
    margin: 0 0 10px;
    font-size: 30px;
    font-weight: 800;
    letter-spacing: -0.04em;
  }

  p {
    margin: 0;
    color: var(--momo-muted);
    font-size: 14px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 18px 22px;
  box-sizing: border-box;
  border: 1px solid var(--momo-border);
  border-radius: var(--momo-radius-lg);
  background: var(--momo-surface);
  color: var(--momo-text);
  font-size: 15px;
  outline: none;

  &:focus {
    border-color: var(--momo-accent);
    box-shadow: 0 0 0 3px rgba(255, 212, 59, 0.18);
  }

  &::placeholder {
    color: var(--momo-placeholder);
  }
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 22px 16px;
  margin-top: 28px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px 12px;
  }

  @media (max-width: 430px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const MovieCard = styled.div`
  min-width: 0;
  padding: 0;
  border: none;
  background: transparent;
  text-align: left;
  cursor: pointer;

  animation: appear 0.3s ease both;

  @keyframes appear {
    from {
      opacity: 0;
      transform: translateY(8px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover img {
    transform: scale(1.04);
  }

  &:focus-visible {
    outline: 2px solid var(--momo-link);
    outline-offset: 4px;
  }
`;

const Poster = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 2.85;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid var(--momo-border);
  background: var(--momo-note);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.35s ease;
  }
`;

const MovieInfo = styled.div`
  padding-top: 12px;

  h3 {
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: var(--momo-text);
    font-size: 15px;
    font-weight: 750;
  }

  p {
    margin: 6px 0 0;
    color: var(--momo-muted);
    font-size: 12px;
  }
`;

const SearchMessage = styled.div`
  padding: 70px 0;
  text-align: center;
  color: var(--momo-muted);
  font-size: 14px;
`;

const LoadingMessage = styled.div`
  padding: 35px 0;
  text-align: center;
  color: var(--momo-muted);
  font-size: 13px;
`;

const RetryButton = styled.button`
  margin-top: 12px;
  padding: 9px 18px;
  border: 1px solid var(--momo-border);
  border-radius: 8px;
  background: var(--momo-surface);
  color: var(--momo-text);
  cursor: pointer;

  &:hover {
    background: var(--momo-note-strong);
    border-color: var(--momo-accent);
  }
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
