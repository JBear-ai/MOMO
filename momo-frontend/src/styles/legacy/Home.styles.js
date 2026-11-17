import styled from "styled-components";

/* 홈은 큰 장식보다 영화 발견과 기록 흐름을 먼저 보여준다. */
export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(38px, 4.6vw, 62px);
  width: 100%;
  padding-bottom: 48px;
  color: var(--momo-text);
  > section, > div { min-width: 0; }
`;

export const FeatureSection = styled.section`
  position: relative;
  isolation: isolate;
  display: grid;
  grid-template-columns: minmax(260px, .72fr) minmax(0, 1.28fr);
  min-height: 350px;
  align-items: stretch;
  overflow: hidden;
  border: 1px solid #E6DDCB;
  border-radius: 22px;
  background: #FFF9E9;
  box-shadow: var(--momo-shadow-sm);
  &::before {
    position: absolute;
    z-index: -1;
    top: -110px;
    left: -80px;
    width: 300px;
    height: 300px;
    border: 1px solid rgba(214, 166, 20, .16);
    border-radius: 50%;
    box-shadow: 0 0 0 24px rgba(214, 166, 20, .045), 0 0 0 50px rgba(214, 166, 20, .025);
    content: "";
    pointer-events: none;
  }
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

export const FeatureInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  padding: clamp(28px, 3.2vw, 44px);
  background: linear-gradient(135deg, rgba(255,255,255,.72), rgba(255,250,236,.52));
  @media (max-width: 760px) { padding: 26px 24px 22px; }
`;

export const Eyebrow = styled.span`
  display: block;
  width: fit-content;
  margin-bottom: 14px;
  padding: 6px 10px;
  color: var(--momo-accent-ink);
  background: var(--momo-accent-soft);
  border: 1px solid rgba(214, 166, 20, .22);
  border-radius: 6px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: .08em;
`;

export const FeatureTitle = styled.h1`
  margin: 0;
  font-size: clamp(30px, 3.3vw, 46px);
  line-height: 1.2;
  letter-spacing: -.045em;
  font-weight: 850;
  color: var(--momo-text);
  word-break: keep-all;
`;

export const FeatureDescription = styled.p`
  margin: 16px 0 0;
  color: var(--momo-muted);
  max-width: 30rem;
  font-size: 14px;
  line-height: 1.8;
  word-break: keep-all;
`;

export const FeatureVisual = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 350px;
  overflow: hidden;
  background: #3A352A;
  .recommend-banner {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
    overflow: hidden;
    border-radius: 0;
  }
  .recommend-poster {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
    display: block;
    object-fit: cover;
    object-position: center 28%;
    transition: transform .55s cubic-bezier(.2,.7,.2,1);
  }
  .recommend-overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(90deg, rgba(20,18,14,.82), rgba(20,18,14,.38) 62%, rgba(20,18,14,.08));
  }
  .recommend-content {
    position: absolute;
    z-index: 2;
    left: clamp(24px, 3vw, 40px);
    bottom: clamp(26px, 3vw, 38px);
    width: min(78%, 520px);
    color: #fff;
  }
  .recommend-label {
    display: inline-block;
    margin-bottom: 9px;
    padding: 5px 9px;
    border-radius: 5px;
    background: var(--momo-accent);
    color: var(--momo-accent-ink);
    font-size: 11px;
    font-weight: 850;
  }
  .recommend-title {
    margin: 0;
    font-size: clamp(24px, 2.7vw, 36px);
    font-weight: 850;
    line-height: 1.2;
    letter-spacing: -.035em;
    word-break: keep-all;
  }
  .recommend-info {
    margin: 8px 0 13px;
    color: rgba(255,255,255,.82);
    font-size: 13px;
  }
  .recommend-button {
    min-height: 40px;
    padding: 9px 15px;
    border: 1px solid var(--momo-accent);
    background: var(--momo-accent);
    color: var(--momo-accent-ink);
    font-size: 12px;
    font-weight: 850;
    border-radius: 7px;
    cursor: pointer;
    transition: background var(--momo-transition-fast), transform var(--momo-transition-fast);
  }
  .recommend-button:hover { background: var(--momo-accent-hover); transform: translateY(-1px); }
  .recommend-state {
    position: absolute;
    inset: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: #F0EBDD;
    color: var(--momo-muted);
    font-size: 14px;
    font-weight: 650;
  }
  &:hover .recommend-poster { transform: scale(1.025); }
  @media (max-width: 760px) {
    min-height: 300px;
    height: 300px;
    .recommend-content { left: 22px; bottom: 22px; width: calc(100% - 44px); }
    .recommend-title { font-size: 26px; }
  }
`;

export const Section = styled.section`
  min-width: 0;
  margin: 0;
`;

export const SectionHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 18px;
  margin-bottom: 20px;
  padding-bottom: 13px;
  border-bottom: 1px solid var(--momo-border-strong);
  h2 {
    margin: 0;
    font-size: clamp(21px, 2vw, 26px);
    letter-spacing: -.04em;
    font-weight: 850;
    color: var(--momo-text);
  }
  p { margin: 5px 0 0; color: var(--momo-muted); font-size: 13px; }
  @media (max-width: 520px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 7px;
  }
`;

export const MoreText = styled.span`
  color: var(--momo-muted);
  font-size: 12px;
  white-space: nowrap;
`;

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 24px 18px;
  @media (max-width: 1050px) { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  @media (max-width: 720px) { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px 13px; }
  @media (max-width: 460px) { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px 12px; }
`;

export const MovieCard = styled.div`
  min-width: 0;
  cursor: pointer;
  &:hover img { transform: scale(1.035); }
  &:focus-visible { outline: 2px solid var(--momo-link); outline-offset: 5px; }
`;

export const PosterWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 2.85;
  overflow: hidden;
  background: var(--momo-note);
  border-radius: 11px;
  border: 1px solid var(--momo-border);
  box-shadow: var(--momo-shadow-xs);
  transition: border-color var(--momo-transition-fast), box-shadow var(--momo-transition-fast);
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: transform .42s cubic-bezier(.2,.7,.2,1);
  }
  &:hover { border-color: var(--momo-border-strong); box-shadow: var(--momo-shadow-sm); }
`;

export const Rank = styled.span`
  position: absolute;
  left: 10px;
  bottom: 8px;
  color: #fff;
  font-size: 30px;
  line-height: 1;
  font-weight: 900;
  font-style: italic;
  text-shadow: 0 2px 8px rgba(0,0,0,.7);
`;

export const MovieInfo = styled.div`
  padding-top: 10px;
  h3 {
    margin: 0;
    overflow: hidden;
    color: var(--momo-text);
    font-size: 14px;
    font-weight: 780;
    letter-spacing: -.025em;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  p { margin: 5px 0 0; color: var(--momo-muted); font-size: 12px; }
`;

export const GenreList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 54px;
    padding: 0 16px;
    border: 1px solid var(--momo-border);
    border-radius: 10px;
    background: var(--momo-surface);
    color: var(--momo-text-soft);
    font-size: 14px;
    font-weight: 700;
    text-align: left;
    cursor: pointer;
    transition: border-color var(--momo-transition-fast), background var(--momo-transition-fast), transform var(--momo-transition-fast);
    &::after { content: "↗"; color: var(--momo-muted); font-size: 13px; }
    &:hover {
      border-color: #D6B33B;
      background: #FFF8DF;
      transform: translateY(-2px);
    }
  }
  @media (max-width: 600px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
`;

export const BrandLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 24px 28px;
  background: #292820;
  border-radius: 14px;
  color: #FFFEFA;
  h2 {
    margin: 0;
    font-size: clamp(19px, 2.4vw, 25px);
    letter-spacing: -.04em;
    font-weight: 800;
    color: #FFFEFA;
  }
  p { margin: 5px 0 0; color: rgba(255,255,255,.68); font-size: 13px; }
  @media (max-width: 600px) { align-items: flex-start; flex-direction: column; padding: 22px; }
`;

export const EmptyPoster = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: var(--momo-muted);
  font-size: 12px;
  font-weight: 600;
`;
