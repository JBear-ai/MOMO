import styled from "styled-components";

/* 전체 홈 화면: 포근하고 깨끗한 다이어리 미색 배경 */
export const HomePage = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.18fr) minmax(320px, .82fr);
  gap: clamp(18px, 2.4vw, 32px);
  width: 100%;
  padding-bottom: clamp(52px, 6vw, 88px);
  color: var(--momo-text);

  > section:first-child,
  > div:last-child {
    grid-column: 1 / -1;
  }

  > section:nth-of-type(2) {
    grid-column: 1 / -1;
  }

  > section:nth-of-type(3) {
    grid-column: 1;
  }

  > section:nth-of-type(4) {
    grid-column: 2;
  }

  > section:not(:first-child) {
    min-width: 0;
    padding: clamp(20px, 2.6vw, 30px);
    background: var(--momo-glass);
    border: 1px solid var(--momo-glass-border);
    border-radius: 24px;
    box-shadow: var(--momo-shadow-sm);
    backdrop-filter: blur(16px) saturate(125%);
  }

  > section:nth-of-type(4) > div:nth-child(2) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 20px;

    > section:nth-of-type(2),
    > section:nth-of-type(3),
    > section:nth-of-type(4) {
      grid-column: 1;
    }
  }

  @media (max-width: 600px) {
    gap: 16px;
    padding-bottom: 44px;

    > section:not(:first-child) {
      padding: 18px 14px;
      border-radius: var(--momo-radius);
    }
  }
`;

/* 메인 추천 영역: 배경과 부드럽게 이어지는 고급 메모지 카드 톤 */
export const FeatureSection = styled.section`
  position: relative;
  isolation: isolate;
  display: grid;
  grid-template-columns: minmax(300px, .78fr) minmax(0, 1.22fr);
  min-height: clamp(440px, 42vw, 560px);
  align-items: stretch;
  overflow: hidden;
  border: 1px solid var(--momo-glass-border);
  border-radius: 28px;
  background:
    radial-gradient(circle at 12% 8%, rgba(255, 212, 59, .18), transparent 28rem),
    linear-gradient(135deg, #FFFEFA 0%, #FFF9E8 54%, #F8F2E5 100%);
  box-shadow: 0 24px 64px rgba(54, 45, 28, .10);

  &::after {
    position: absolute;
    z-index: -1;
    top: -120px;
    left: 42%;
    width: 360px;
    height: 360px;
    border: 1px solid rgba(214, 166, 20, .12);
    border-radius: 50%;
    box-shadow: 0 0 0 28px rgba(214, 166, 20, .035), 0 0 0 58px rgba(214, 166, 20, .025);
    content: "";
    pointer-events: none;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    min-height: auto;
    margin-bottom: 0;
    border-radius: 20px;
  }
`;

/* 왼쪽 소개 영역 */
export const FeatureInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  padding: clamp(34px, 4vw, 58px) clamp(28px, 4vw, 52px);
  background: linear-gradient(135deg, rgba(255,255,255,.76), rgba(255,250,236,.46));

  @media (max-width: 768px) {
    padding: 36px 24px;
  }
`;

/* 상단 작은 문구 */
export const Eyebrow = styled.span`
  display: block;
  width: fit-content;
  margin-bottom: 18px;
  padding: 7px 11px;
  color: var(--momo-accent-ink);
  background: var(--momo-accent-soft);
  border: 1px solid rgba(214, 166, 20, .22);
  border-radius: var(--momo-radius-pill);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;

/* 메인 제목 */
export const FeatureTitle = styled.h1`
  margin: 0;
  font-size: clamp(36px, 4.6vw, 64px);
  line-height: 1.12;
  letter-spacing: -0.04em;
  font-weight: 800;
  color: var(--momo-text);
  word-break: keep-all;
`;

/* 메인 설명 */
export const FeatureDescription = styled.p`
  margin: 20px 0 0;
  color: var(--momo-muted);
  max-width: 34rem;
  font-size: 15px;
  line-height: 1.85;
  word-break: keep-all;
`;

/* 오늘의 추천작 배너 영역 */
export const FeatureVisual = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 440px;
  overflow: hidden;
  background: #E9E1D2;

  /* 추천작 컴포넌트 전체 */
  .recommend-banner {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
    overflow: hidden;
    border-radius: 0;
  }

  /* 영화 포스터 */
  .recommend-poster {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
    display: block;
    object-fit: cover;
    object-position: center 25%;
    transition: transform 0.6s ease;
  }

  /* 배너 어두운 오버레이 */
  .recommend-overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(
      90deg,
      rgba(15, 14, 12, 0.88) 0%,
      rgba(15, 14, 12, 0.55) 55%,
      rgba(15, 14, 12, 0.15) 100%
    );
  }

  /* 추천 영화 정보 */
  .recommend-content {
    position: absolute;
    z-index: 2;
    left: 40px;
    bottom: 44px;
    width: calc(100% - 80px);
    color: var(--momo-surface);
  }

  /* 오늘의 추천작 레이블 - 쨍한 노랑을 빼고 차분한 크림 옐로우로 고정 */
  .recommend-label {
    display: inline-block;
    margin-bottom: 8px;
    padding: 6px 12px;
    border-radius: 6px;
    background: var(--momo-note-strong);
    color: var(--momo-accent-ink);
    border: 1px solid var(--momo-note-border);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.02em;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }

  .recommend-title {
    margin: 0;
    font-size: clamp(26px, 3.2vw, 40px);
    font-weight: 800;
    line-height: 1.25;
    letter-spacing: -0.03em;
    word-break: keep-all;
  }

  .recommend-info {
    margin: 8px 0 14px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
  }

  /* 오늘의 추천작 버튼 - 쨍한 노랑을 빼고 차분한 크림 옐로우로 고정 */
  .recommend-button {
    padding: 11px 20px;
    border: 1px solid var(--momo-note-border);
    background: var(--momo-note-strong);
    color: var(--momo-accent-ink);
    font-size: 13px;
    font-weight: 800;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;
  }

  .recommend-button:hover {
    filter: brightness(0.95);
    transform: translateY(-1px);
  }

  /* 로딩 및 오류 화면 */
  .recommend-state {
    position: absolute;
    inset: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: var(--momo-bg);
    color: var(--momo-muted);
    font-size: 14px;
    font-weight: 600;
  }

  /* 포스터 확대 효과 */
  &:hover .recommend-poster {
    transform: scale(1.025);
  }

  /* 모바일 */
  @media (max-width: 768px) {
    min-height: 340px;
    height: 340px;

    .recommend-content {
      left: 24px;
      bottom: 28px;
      width: calc(100% - 48px);
    }

    .recommend-title {
      font-size: 26px;
    }
  }
`;

/* 공통 섹션 */
export const Section = styled.section`
  min-width: 0;
  margin: 0;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

/* 섹션 제목 영역 */
export const SectionHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 20px;
  margin-bottom: 22px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--momo-border);

  h2 {
    margin: 0;
    font-size: clamp(22px, 2.5vw, 30px);
    letter-spacing: -0.04em;
    font-weight: 800;
    color: var(--momo-text);
  }

  p {
    margin: 6px 0 0;
    color: var(--momo-muted);
    font-size: 13px;
  }
`;

/* 섹션 우측 설명 */
export const MoreText = styled.span`
  color: var(--momo-muted);
  font-size: 13px;
  white-space: nowrap;
`;

/* 박스오피스 영화 목록 */
export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 26px 18px;

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

/* 영화 카드 */
export const MovieCard = styled.div`
  min-width: 0;
  cursor: pointer;

  &:hover img {
    transform: scale(1.035);
  }

  &:focus-visible {
    outline: 2px solid var(--momo-link);
    outline-offset: 5px;
  }
`;

/* 영화 포스터 영역 */
export const PosterWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 2.85;
  overflow: hidden;
  background: var(--momo-note);
  border-radius: 16px;
  border: 1px solid var(--momo-border);
  box-shadow: var(--momo-shadow-xs);
  transition: border-color .2s ease, box-shadow .2s ease;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: transform 0.45s cubic-bezier(.2,.7,.2,1);
  }

  &:hover {
    border-color: var(--momo-border-strong);
    box-shadow: var(--momo-shadow-sm);
  }
`;

/* 영화 순위 */
export const Rank = styled.span`
  position: absolute;
  left: 12px;
  bottom: 8px;
  color: var(--momo-surface);
  font-size: 32px;
  line-height: 1;
  font-weight: 900;
  font-style: italic;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.65);
`;

/* 영화 제목 및 개봉일 */
export const MovieInfo = styled.div`
  padding-top: 12px;

  h3 {
    margin: 0;
    overflow: hidden;
    color: var(--momo-text);
    font-size: 15px;
    font-weight: 750;
    letter-spacing: -0.02em;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    margin: 6px 0 0;
    color: var(--momo-muted);
    font-size: 12px;
  }
`;

/* 장르 목록 */
export const GenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  button {
    padding: 12px 18px;
    border: 1px solid var(--momo-border);
    border-radius: 999px;
    background: var(--momo-surface);
    color: var(--momo-text-soft);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(50, 44, 32, 0.02);
    transition: all 0.2s ease;
  }

  button:hover {
    border-color: var(--momo-link);
    background: var(--momo-accent);
    color: var(--momo-accent-ink);
  }
`;

/* MOMO 브랜드 소개 */
export const BrandLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 28px 30px;
  background: linear-gradient(110deg, var(--momo-note), rgba(255,255,255,.72));
  border: 1px solid var(--momo-note-border);
  border-radius: var(--momo-radius-lg);

  h2 {
    margin: 0;
    font-size: clamp(20px, 3vw, 26px);
    letter-spacing: -0.04em;
    font-weight: 800;
    color: var(--momo-text);
  }

  p {
    margin: 6px 0 0;
    color: var(--momo-muted);
    font-size: 13px;
  }

  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

/* 포스터가 없는 경우 */
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
