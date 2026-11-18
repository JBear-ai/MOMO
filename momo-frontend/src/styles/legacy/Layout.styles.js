import styled from "styled-components";
import { Link } from "react-router-dom";

/* Notebook desk */
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: clip;
  isolation: isolate;
  color: var(--momo-text);
  background: transparent;
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  min-height: 76px;
  padding: 0 clamp(18px, 4vw, 52px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(14px, 2vw, 26px);
  box-sizing: border-box;
  border-bottom: 1px solid rgba(255,255,255,.9);
  background: rgba(255,250,236,.68);
  box-shadow: 0 10px 28px rgba(41,40,32,.065), inset 0 1px rgba(255,255,255,.92);
  backdrop-filter: blur(28px) saturate(148%);
  -webkit-backdrop-filter: blur(28px) saturate(148%);
  transition: box-shadow 220ms ease, background 220ms ease;
  &::before {
    position: absolute;
    left: clamp(20px, 4vw, 52px);
    right: clamp(20px, 4vw, 52px);
    bottom: 0;
    height: 1px;
    content: "";
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.98), transparent);
    pointer-events: none;
  }
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
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;
  transition: filter 200ms ease;
  &:hover { filter: drop-shadow(0 2px 3px rgba(66,52,29,.12)); }
`;

const LogoImage = styled.img`
  display: block;
  width: auto;
  height: 34px;
  object-fit: contain;
  filter: drop-shadow(0 2px 3px rgba(66,52,29,.08));
  @media (max-width: 600px) { height: 30px; }
`;

const Navigation = styled.nav`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 5px;
  a {
    position: relative;
    display: inline-flex;
    align-items: center;
    min-height: 38px;
    padding: 0 14px;
    color: #514833;
    border: 1px solid rgba(255,255,255,.74);
    border-radius: 11px;
    background: rgba(250,249,245,.48);
    box-shadow: inset 0 1px rgba(255,255,255,.82);
    text-decoration: none;
    font-size: 12px;
    font-weight: 800;
    white-space: nowrap;
    transition:
      color 180ms ease,
      background 180ms ease,
      transform 180ms cubic-bezier(.2,.72,.2,1),
      box-shadow 180ms ease,
      border-color 180ms ease;
    &:hover {
      color: #66510F;
      border-color: rgba(214,180,63,.48);
      background: rgba(255,250,236,.94);
      box-shadow: 0 5px 12px rgba(39,43,39,.06), inset 0 1px rgba(255,255,255,.95);
    }
  }
  a.active {
    color: #66510F;
    border-color: rgba(214,180,63,.62);
    background: rgba(255,212,59,.24);
    box-shadow: inset 0 1px rgba(255,255,255,.84);
    font-weight: 900;
  }
  @media (max-width: 900px) {
    order: 4;
    width: 100%;
    justify-content: flex-start;
    overflow-x: auto;
    flex-wrap: nowrap;
    padding: 5px 0 3px;
    border-top: 1px solid rgba(233,223,197,.82);
    a { min-height: 33px; padding: 0 12px; }
  }
`;

const UserArea = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  white-space: nowrap;
  font-size: 12px;
  p { margin: 0; color: var(--momo-muted); }
  p strong { color: var(--momo-text); font-weight: 850; }
  @media (max-width: 600px) { margin-left: auto; gap: 7px; }
`;

const ActionButton = styled.button`
  position: relative;
  min-height: 38px;
  padding: 0 16px;
  overflow: hidden;
  border: 1px solid rgba(233,223,197,.78);
  border-radius: 10px;
  background: rgba(255,254,250,.48);
  color: #625B4D;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: inset 0 1px rgba(255,255,255,.86);
  transition: background 180ms ease, border-color 180ms ease, box-shadow 180ms ease, filter 180ms ease;
  &::before {
    position: absolute;
    top: 1px;
    left: 16%;
    width: 68%;
    height: 1px;
    content: "";
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.9), transparent);
    pointer-events: none;
  }
  &:hover:not(:disabled) {
    border-color: rgba(214,180,63,.58);
    background: rgba(255,212,59,.16);
    box-shadow: 0 5px 12px rgba(39,43,39,.07), inset 0 1px rgba(255,255,255,.9);
  }
  &:active:not(:disabled) { transform: scale(.985); box-shadow: inset 0 2px 4px rgba(41,40,32,.08); }
  &:disabled { cursor: not-allowed; opacity: .58; }
  &.momo-logout-button {
    min-height: 32px; padding: 0 11px; border-color: rgba(216,201,159,.58);
    background: rgba(255,254,250,.34); color: #827B6D; font-size: 10px; font-weight: 650; box-shadow: none;
  }
  &.momo-logout-button:hover:not(:disabled) {
    border-color: rgba(216,201,159,.9); background: rgba(255,250,236,.76); color: #514C40;
    box-shadow: 0 4px 10px rgba(41,40,32,.045);
  }
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: clamp(28px, 3.5vw, 48px) var(--momo-page-gutter) 76px;
  box-sizing: border-box;
  animation: momo-page-enter .48s cubic-bezier(.2,.7,.2,1) both;
  @keyframes momo-page-enter {
    from { opacity: 0; transform: translate3d(0, 10px, 0); }
    to { opacity: 1; transform: translate3d(0, 0, 0); }
  }
  @media (max-width: 600px) { padding-top: 22px; padding-bottom: 48px; }
`;

const Footer = styled.footer`
  position: relative;
  width: 100%;
  padding: 42px var(--momo-page-gutter) 24px;
  overflow: hidden;
  box-sizing: border-box;
  isolation: isolate;
  border-top: 1px solid rgba(255,255,255,.86);
  background: linear-gradient(145deg, rgba(255,255,255,.68), rgba(255,250,236,.76));
  color: #292820;
  box-shadow: 0 -10px 28px rgba(41,40,32,.055), inset 0 1px rgba(255,255,255,.96);
  backdrop-filter: blur(26px) saturate(145%);
  -webkit-backdrop-filter: blur(26px) saturate(145%);
  &::before { position: absolute; z-index: -1; inset: 0; content: ""; background-image: linear-gradient(rgba(166,148,108,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(166,148,108,.055) 1px, transparent 1px); background-size: 34px 34px; pointer-events: none; }
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
  border-bottom: 1px solid rgba(233,223,197,.9);
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
  filter: drop-shadow(0 2px 3px rgba(66,52,29,.08));
`;

const FooterDesc = styled.p`
  margin: 0;
  color: #514C40;
  font-size: 13px;
  line-height: 1.65;
  max-width: 380px;
  word-break: keep-all;
  border-left: 1px solid rgba(233,223,197,.95);
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
    font-size: 11px;
    font-weight: 900;
    color: #80600E;
    letter-spacing: .09em;
    text-transform: uppercase;
  }
  span, a {
    color: #514C40;
    font-size: 12px;
    text-decoration: none;
    transition: color 150ms ease, transform 150ms ease;
    &:hover { color: var(--momo-text); transform: translateX(2px); }
  }
`;

const FooterBottom = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  color: #514C40;
  box-sizing: border-box;
  p { margin: 0; }
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
