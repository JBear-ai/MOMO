import styled from "styled-components";

/* 홈은 큰 장식보다 영화 발견과 기록 흐름을 먼저 보여준다. */
export const HomePage = styled.div.attrs({ className: "home-page" })`
  display: flex;
  flex-direction: column;
  gap: clamp(38px, 4.6vw, 62px);
  width: 100%;
  padding-bottom: 48px;
  color: var(--momo-text);
  perspective: 1200px;
  animation: momo-home-enter .52s cubic-bezier(.2,.72,.2,1) both;
  @keyframes momo-home-enter {
    from { opacity: 0; transform: translate3d(0, 12px, 0); }
    to { opacity: 1; transform: translate3d(0, 0, 0); }
  }
  > section, > div { min-width: 0; }
  .home-favorites-empty {
    border: 1px dashed rgba(177,157,111,.48);
    border-radius: 15px;
    background: rgba(255,254,250,.68);
    backdrop-filter: blur(12px);
  }
  .home-favorites-more {
    border: 1px solid rgba(255,255,255,.9);
    border-radius: 999px;
    background: rgba(255,254,250,.68);
    box-shadow: 0 6px 18px rgba(53,43,24,.06), inset 0 1px rgba(255,255,255,.95);
    transition: transform 180ms cubic-bezier(.2,.72,.2,1), box-shadow 180ms ease;
    &:hover { transform: translateY(-2px); box-shadow: 0 10px 22px rgba(53,43,24,.1); }
  }
`;

export const FeatureSection = styled.section`
  position: relative;
  isolation: isolate;
  display: grid;
  grid-template-columns: minmax(260px, .72fr) minmax(0, 1.28fr);
  min-height: 350px;
  align-items: stretch;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, .96);
  border-radius: 24px;
  background: linear-gradient(132deg, rgba(250,249,245,.82), rgba(237,238,231,.64));
  box-shadow: 0 16px 38px rgba(39,43,39,.085), inset 0 1px rgba(255,255,255,.92);
  backdrop-filter: blur(18px) saturate(130%);
  -webkit-backdrop-filter: blur(18px) saturate(130%);
  transition: box-shadow 300ms ease, transform 300ms ease;
  &:hover {
    box-shadow: 0 26px 58px rgba(68, 53, 22, .14), inset 0 1px rgba(255,255,255,.99);
    transform: translateY(-3px) rotateX(.35deg);
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
  background: linear-gradient(145deg, rgba(250,249,245,.84), rgba(239,240,233,.62));
  @media (max-width: 760px) { padding: 26px 24px 22px; }
`;

export const Eyebrow = styled.span`
  display: block;
  width: fit-content;
  margin-bottom: 14px;
  padding: 6px 10px;
  color: #4D6255;
  background: rgba(101,126,111,.13);
  border: 1px solid rgba(101,126,111,.24);
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
  color: #59615A;
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
    background:
      linear-gradient(90deg, rgba(20,18,14,.72), rgba(20,18,14,.24) 62%, rgba(20,18,14,.02)),
      linear-gradient(0deg, rgba(20,18,14,.3), transparent 55%);
  }
  .recommend-content {
    position: absolute;
    z-index: 2;
    left: clamp(20px, 2.6vw, 34px);
    bottom: clamp(20px, 2.6vw, 34px);
    width: min(76%, 500px);
    padding: 20px 22px 19px;
    color: #fff;
    border: 1px solid rgba(255,255,255,.62);
    border-radius: 18px;
    background:
      linear-gradient(145deg, rgba(255,255,255,.31), rgba(255,250,230,.14)),
      rgba(31,27,21,.2);
    box-shadow: 0 16px 42px rgba(0,0,0,.24), 0 3px 8px rgba(0,0,0,.12), inset 0 1px rgba(255,255,255,.58);
    backdrop-filter: blur(22px) saturate(155%);
    -webkit-backdrop-filter: blur(18px) saturate(145%);
    animation: momo-glass-arrive .7s cubic-bezier(.2,.7,.2,1) both;
    &::before {
      position: absolute;
      top: -8px;
      right: 28px;
      width: 58px;
      height: 16px;
      content: "";
      border: 1px solid rgba(255,255,255,.3);
      background: rgba(255,255,255,.18);
      transform: rotate(3deg);
      pointer-events: none;
    }
    @keyframes momo-glass-arrive {
      from { opacity: 0; transform: translate3d(0, 14px, 0) scale(.985); }
      to { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
    }
  }
  .recommend-label {
    display: inline-block;
    margin-bottom: 9px;
    padding: 5px 9px;
    border-radius: 999px;
    background: rgba(255, 212, 59, .96);
    box-shadow: 0 3px 12px rgba(0,0,0,.12);
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
    border-radius: 999px;
    box-shadow: 0 5px 16px rgba(0,0,0,.16), inset 0 1px rgba(255,255,255,.55);
    transition: background 180ms ease, transform 180ms ease, box-shadow 180ms ease;
  }
  .recommend-button:hover {
    background: var(--momo-accent-hover);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0,0,0,.2);
  }
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
  &::after {
    position: absolute;
    z-index: 1;
    inset: 0;
    content: "";
    pointer-events: none;
    background: linear-gradient(115deg, transparent 25%, rgba(255,255,255,.13) 45%, transparent 63%);
    transform: translateX(-110%);
    transition: transform .9s cubic-bezier(.2,.7,.2,1);
  }
  &:hover .recommend-poster { transform: scale(1.055); }
  &:hover .recommend-content { box-shadow: 0 18px 44px rgba(0,0,0,.22), inset 0 1px rgba(255,255,255,.5); }
  &:hover::after { transform: translateX(110%); }
  @media (max-width: 760px) {
    min-height: 300px;
    height: 300px;
    .recommend-content {
      left: 14px;
      bottom: 14px;
      width: calc(100% - 28px);
      padding: 16px;
      box-sizing: border-box;
    }
    .recommend-title { font-size: 26px; }
  }
`;

export const Section = styled.section`
  min-width: 0;
  margin: 0;
  animation: momo-section-rise .58s cubic-bezier(.2,.7,.2,1) both;
  @keyframes momo-section-rise {
    from { opacity: 0; transform: translate3d(0, 16px, 0); }
    to { opacity: 1; transform: translate3d(0, 0, 0); }
  }
  &:nth-of-type(2) { animation-delay: 70ms; }
  &:nth-of-type(3) { animation-delay: 140ms; }
  &:nth-of-type(4) { animation-delay: 210ms; }
`;

export const SectionHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 18px;
  margin-bottom: 20px;
  padding-bottom: 13px;
  border-bottom: 1px solid rgba(172,153,113,.34);
  position: relative;
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
  transform: translateZ(0);
  transition: transform 260ms cubic-bezier(.2,.7,.2,1);
  &:hover { transform: translateY(-5px); }
  &:hover img { transform: scale(1.065); }
  &:focus-visible { outline: 2px solid var(--momo-link); outline-offset: 5px; }
`;

export const PosterWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 2.85;
  overflow: hidden;
  background: var(--momo-note);
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,.96);
  box-shadow: 0 8px 22px rgba(54,45,28,.1), inset 0 1px rgba(255,255,255,.98);
  transition: border-color 240ms ease, box-shadow 240ms ease, transform 240ms ease;
  transform: perspective(900px) rotateX(0deg) translateZ(0);
  transform-style: preserve-3d;
  &::after {
    position: absolute;
    z-index: 1;
    inset: 0;
    content: "";
    pointer-events: none;
    background: linear-gradient(125deg, rgba(255,255,255,.28), transparent 32%, transparent 68%, rgba(0,0,0,.08));
    opacity: .72;
    transition: opacity 240ms ease;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: transform .42s cubic-bezier(.2,.7,.2,1);
  }
  &:hover {
    border-color: rgba(205,166,44,.78);
    box-shadow: 0 15px 28px rgba(54,45,28,.16), inset 0 1px rgba(255,255,255,.96);
    transform: perspective(950px) rotateX(1.5deg) translateY(-2px);
  }
  &:hover::after { opacity: .28; }
`;

export const Rank = styled.span`
  position: absolute;
  left: 10px;
  bottom: 10px;
  z-index: 3;
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid rgba(255,255,255,.92);
  border-radius: 11px 11px 11px 4px;
  background: linear-gradient(145deg, rgba(255,253,242,.96), rgba(255,243,203,.9));
  box-shadow: 0 5px 12px rgba(28,22,14,.24), inset 0 1px rgba(255,255,255,.98);
  color: #564211;
  font-size: 17px;
  line-height: 1;
  font-weight: 950;
  font-style: normal;
  font-variant-numeric: tabular-nums;
  transition: transform 220ms cubic-bezier(.2,.72,.2,1), box-shadow 220ms ease;
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
    border: 1px solid rgba(255,255,255,.92);
    border-radius: 13px;
    background:
      linear-gradient(90deg, transparent 0 14px, rgba(201,117,104,.11) 14px 15px, transparent 15px),
      repeating-linear-gradient(0deg, transparent 0 25px, rgba(117,145,177,.09) 26px, transparent 27px),
      linear-gradient(145deg, rgba(255,255,255,.86), rgba(255,250,236,.78));
    box-shadow: 0 5px 15px rgba(54,45,28,.055), inset 0 1px rgba(255,255,255,.98);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
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
      transform: translateY(-3px);
      box-shadow: 0 10px 22px rgba(54,45,28,.09), inset 0 1px rgba(255,255,255,.95);
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
  border: 1px solid rgba(255,255,255,.94);
  border-radius: 18px;
  color: var(--momo-text);
  background:
    linear-gradient(90deg, transparent 0 28px, rgba(201,117,104,.14) 28px 29px, transparent 29px),
    repeating-linear-gradient(0deg, transparent 0 29px, rgba(117,145,177,.085) 30px, transparent 31px),
    linear-gradient(145deg, rgba(255,255,255,.88), rgba(255,246,218,.86));
  box-shadow: 0 12px 28px rgba(64,51,30,.08), inset 0 1px rgba(255,255,255,.98);
  h2 {
    margin: 0;
    font-size: clamp(19px, 2.4vw, 25px);
    letter-spacing: -.04em;
    font-weight: 800;
    color: var(--momo-text);
  }
  p { margin: 5px 0 0; color: var(--momo-muted); font-size: 13px; }
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
