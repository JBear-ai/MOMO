import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: clip;
  position: relative;
  background:
    radial-gradient(ellipse at 8% 5%, rgba(255, 212, 59, .13), transparent 30%),
    radial-gradient(ellipse at 92% 28%, rgba(218, 202, 165, .18), transparent 32%),
    var(--momo-bg);
  color: var(--momo-text);
  isolation: isolate;
  &::before {
    position: fixed;
    z-index: -1;
    inset: 0;
    content: "";
    pointer-events: none;
    opacity: .26;
    background-image: radial-gradient(rgba(94, 76, 35, .12) .55px, transparent .55px);
    background-size: 7px 7px;
    mask-image: linear-gradient(to bottom, black, transparent 75%);
  }
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  min-height: 72px;
  margin: 0 auto;
  padding: 0 clamp(20px, 4vw, 56px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(14px, 2vw, 28px);
  background: rgba(255, 254, 250, .72);
  border-bottom: 1px solid rgba(255, 255, 255, .82);
  box-sizing: border-box;
  box-shadow: 0 8px 30px rgba(54, 45, 28, .055), inset 0 -1px rgba(215, 205, 187, .42);
  backdrop-filter: blur(24px) saturate(155%);
  -webkit-backdrop-filter: blur(24px) saturate(155%);
  transition: background 240ms ease, box-shadow 240ms ease;
  &::after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 1px;
    content: "";
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.95), transparent);
    pointer-events: none;
  }
  -webkit-backdrop-filter: blur(16px) saturate(120%);

  @media (max-width: 900px) {
    min-height: 68px;
    padding: 10px 20px;
    flex-wrap: wrap;
    gap: 10px 16px;
  }
  @media (max-width: 600px) {
    padding: 10px 14px;
    gap: 8px 12px;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;
`;

const LogoImage = styled.img`
  display: block;
  width: auto;
  height: 34px;
  object-fit: contain;
  @media (max-width: 600px) { height: 30px; }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 4px;

  a {
    position: relative;
    padding: 10px 13px;
    color: var(--momo-muted);
    text-decoration: none;
    font-size: 13px;
    font-weight: 650;
    white-space: nowrap;
    border-radius: 999px;
    transition: color 180ms ease, background 180ms ease, transform 180ms ease, box-shadow 180ms ease;
    &:hover {
      color: var(--momo-text);
      background: rgba(255, 255, 255, .76);
      box-shadow: inset 0 0 0 1px rgba(215, 205, 187, .55);
      transform: translateY(-1px);
    }
  }
  a.active {
    color: var(--momo-accent-ink);
    background: rgba(255, 212, 59, .25);
    box-shadow: inset 0 0 0 1px rgba(214, 166, 20, .24), 0 3px 10px rgba(120, 91, 12, .06);
    font-weight: 800;
  }
  @media (max-width: 900px) {
    order: 4;
    width: 100%;
    justify-content: flex-start;
    overflow-x: auto;
    flex-wrap: nowrap;
    padding: 2px 0 4px;
    border-top: 1px solid var(--momo-border);
    a { padding: 8px 12px; }
  }
`;

const UserArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
  font-size: 13px;
  @media (max-width: 600px) { margin-left: auto; gap: 7px; }
`;

const ActionButton = styled.button`
  min-height: 38px;
  padding: 8px 15px;
  border: 1px solid var(--momo-accent);
  border-radius: 9px;
  background: var(--momo-accent);
  color: var(--momo-accent-ink);
  font-size: 12px;
  font-weight: 800;
  cursor: pointer;
  transition: background var(--momo-transition-fast), transform var(--momo-transition-fast);
  &:hover { background: var(--momo-accent-hover); transform: translateY(-1px); }
  &:disabled { cursor: not-allowed; opacity: .6; }
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: clamp(28px, 3.5vw, 48px) var(--momo-page-gutter) 72px;
  box-sizing: border-box;
  animation: momo-page-enter .48s cubic-bezier(.2,.7,.2,1) both;
  @keyframes momo-page-enter {
    from { opacity: 0; transform: translate3d(0, 10px, 0); }
    to { opacity: 1; transform: translate3d(0, 0, 0); }
  }
  @media (max-width: 600px) { padding-top: 22px; padding-bottom: 44px; }
`;

const Footer = styled.footer`
  padding: 42px var(--momo-page-gutter) 24px;
  background: #F0EBDD;
  color: var(--momo-text-soft);
  border-top: 1px solid var(--momo-border);
  box-sizing: border-box;
  width: 100%;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 36px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--momo-border);
  box-sizing: border-box;
  @media (max-width: 768px) { flex-direction: column; align-items: flex-start; gap: 22px; }
`;

const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  @media (max-width: 600px) { flex-direction: column; align-items: flex-start; gap: 10px; }
`;

const FooterLogo = styled.img`
  display: block;
  width: auto;
  height: 27px;
  object-fit: contain;
  flex-shrink: 0;
`;

const FooterDesc = styled.p`
  margin: 0;
  color: var(--momo-muted);
  font-size: 13px;
  line-height: 1.55;
  max-width: 380px;
  word-break: keep-all;
  border-left: 1px solid var(--momo-border-strong);
  padding-left: 18px;
  @media (max-width: 600px) { border-left: 0; padding-left: 0; }
`;

const FooterRight = styled.div`
  display: flex;
  gap: 42px;
  @media (max-width: 480px) { flex-direction: column; gap: 18px; }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  h4 {
    margin: 0 0 4px;
    font-size: 12px;
    font-weight: 800;
    color: var(--momo-text);
    letter-spacing: .04em;
  }
  span, a {
    color: var(--momo-muted);
    font-size: 13px;
    text-decoration: none;
    transition: color var(--momo-transition-fast);
    &:hover { color: var(--momo-text); }
  }
`;

const FooterBottom = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: var(--momo-placeholder);
  box-sizing: border-box;
  @media (max-width: 600px) { flex-direction: column; gap: 7px; text-align: center; }
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
