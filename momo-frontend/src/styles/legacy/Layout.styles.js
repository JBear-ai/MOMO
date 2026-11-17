import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: clip;
  background:
    radial-gradient(ellipse at 88% 12%, rgba(255, 212, 59, .08), transparent 32rem),
    var(--momo-bg);
  color: var(--momo-text);
  letter-spacing: -0.01em;
`;

// ========================================
// 헤더
// ========================================

const Header = styled.header`
  position: sticky;
  top: 12px;
  z-index: 100;
  width: calc(100% - 2 * clamp(12px, 3vw, 44px));
  max-width: 1480px;
  min-height: 72px;
  margin: 12px auto 0;
  padding: 0 clamp(18px, 2.6vw, 38px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  background: rgba(255, 254, 250, .86);
  border: 1px solid rgba(255, 255, 255, .92);
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 0 10px 30px rgba(54, 45, 28, .075), inset 0 1px 0 rgba(255,255,255,.9);
  backdrop-filter: blur(20px) saturate(130%);
  -webkit-backdrop-filter: blur(20px) saturate(130%);

  @media (max-width: 768px) {
    top: 8px;
    width: calc(100% - 20px);
    min-height: 64px;
    margin-top: 8px;
    padding: 10px 14px;
    flex-wrap: wrap;
    border-radius: 16px;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const LogoImage = styled.img`
  display: block;
  width: auto;
  height: 36px;
  object-fit: contain;

  @media (max-width: 768px) {
    height: 32px;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 6px;
  padding: 5px;
  border: 1px solid rgba(229, 222, 209, .72);
  border-radius: var(--momo-radius-pill);
  background: rgba(245, 242, 235, .62);

  a {
    padding: 9px 13px;
    color: var(--momo-muted);
    text-decoration: none;
    font-size: 13px;
    font-weight: 650;
    white-space: nowrap;
    border-radius: var(--momo-radius-pill);
    transition: color .18s ease, background .18s ease, box-shadow .18s ease;

    &:hover {
      color: var(--momo-text);
      background: rgba(255,255,255,.72);
    }
  }

  a.active {
    color: var(--momo-accent-ink);
    background: var(--momo-accent);
    font-weight: 800;
    box-shadow: 0 2px 8px rgba(140, 105, 0, .12);
  }

  @media (max-width: 768px) {
    order: 3;
    width: 100%;
    justify-content: center;
    overflow-x: auto;
    flex-wrap: nowrap;
    gap: 2px;
    padding: 3px;

    a { padding: 8px 10px; font-size: 12px; }
  }
`;

const UserArea = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  white-space: nowrap;
  font-size: 13px;

  @media (max-width: 768px) {
    margin-left: auto;
    gap: 8px;
  }
`;

const ActionButton = styled.button`
  min-height: 38px;
  padding: 8px 15px;
  border: 1px solid var(--momo-accent);
  border-radius: var(--momo-radius-pill);
  background: var(--momo-accent);
  color: var(--momo-accent-ink);
  font-size: 12px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.02);
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--momo-accent-hover);
    border-color: var(--momo-accent-hover);
    transform: translateY(-1px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: clamp(28px, 3.6vw, 52px) clamp(16px, 4vw, 56px) 64px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding-top: 24px;
    padding-bottom: 44px;
  }
`;

// ========================================
// 푸터
// ========================================

const Footer = styled.footer`
  padding: 44px clamp(18px, 5vw, 80px) 28px;
  background:
    linear-gradient(180deg, rgba(255,250,236,.82), var(--momo-note));
  color: var(--momo-text-soft);
  border-top: 1px solid var(--momo-note-border);
  box-sizing: border-box;
  width: 100%;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 1320px;
  margin: 0 auto 28px;
  padding-bottom: 28px;
  border-bottom: 1px solid var(--momo-border);
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
`;

const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const FooterLogo = styled.img`
  display: block;
  width: auto;
  height: 28px;
  object-fit: contain;
  flex-shrink: 0;
`;

const FooterDesc = styled.p`
  margin: 0;
  color: var(--momo-muted);
  font-size: 13px;
  line-height: 1.5;
  max-width: 380px;
  word-break: keep-all;
  border-left: 1px solid var(--momo-border);
  padding-left: 20px;

  @media (max-width: 600px) {
    border-left: none;
    padding-left: 0;
  }
`;

const FooterRight = styled.div`
  display: flex;
  gap: 48px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h4 {
    margin: 0 0 4px;
    font-size: 13px;
    font-weight: 800;
    color: var(--momo-text);
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  span,
  a {
    color: var(--momo-muted);
    font-size: 13px;
    text-decoration: none;
    transition: color 0.15s ease;

    &:hover {
      color: var(--momo-text);
    }
  }
`;

const FooterBottom = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: var(--momo-placeholder);
  box-sizing: border-box;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
`;

export { Container };
export { Header };
export { Logo };
export { LogoImage };
export { Navigation };
export { UserArea };
export { ActionButton };
export { Main };
export { Footer };
export { FooterContainer };
export { FooterLeft };
export { FooterLogo };
export { FooterDesc };
export { FooterRight };
export { FooterColumn };
export { FooterBottom };
