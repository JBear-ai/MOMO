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
  &::before {
    position: fixed;
    z-index: -1;
    inset: 0;
    content: "";
    pointer-events: none;
    opacity: .24;
    background:
      linear-gradient(rgba(116,145,178,.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(116,145,178,.1) 1px, transparent 1px);
    background-size: 34px 34px;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,.58), transparent 88%);
  }
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
  background:
    linear-gradient(100deg, rgba(255,255,255,.82), rgba(255,252,241,.7)),
    rgba(255,254,249,.74);
  box-shadow:
    0 8px 24px rgba(62,49,28,.07),
    0 1px 0 rgba(255,255,255,.96),
    inset 0 -1px rgba(190,172,135,.18);
  backdrop-filter: blur(24px) saturate(150%);
  -webkit-backdrop-filter: blur(24px) saturate(150%);
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
  &::after {
    position: absolute;
    top: 0;
    left: clamp(112px, 16vw, 220px);
    width: 72px;
    height: 13px;
    content: "";
    border-right: 1px solid rgba(201,166,103,.16);
    border-left: 1px solid rgba(201,166,103,.16);
    background: rgba(255,224,151,.34);
    box-shadow: 0 2px 5px rgba(91,70,35,.045);
    transform: rotate(-1.5deg);
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
  transition: transform 200ms cubic-bezier(.2,.72,.2,1);
  &:hover { transform: translateY(-1px); }
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
    color: #625B4F;
    border: 1px solid rgba(255,255,255,.88);
    border-radius: 11px;
    background: rgba(255,255,255,.48);
    box-shadow: 0 3px 9px rgba(58,48,30,.035), inset 0 1px rgba(255,255,255,.94);
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
      color: #373126;
      border-color: rgba(223,201,157,.72);
      background: rgba(255,254,248,.88);
      box-shadow: 0 7px 15px rgba(58,48,30,.08), inset 0 1px rgba(255,255,255,.98);
      transform: translateY(-2px);
    }
  }
  a.active {
    color: #59430F;
    border-color: rgba(211,174,82,.7);
    background: linear-gradient(145deg, rgba(255,242,194,.98), rgba(255,250,232,.9));
    box-shadow: 0 5px 13px rgba(133,101,29,.12), inset 0 1px rgba(255,255,255,1);
    font-weight: 900;
  }
  @media (max-width: 900px) {
    order: 4;
    width: 100%;
    justify-content: flex-start;
    overflow-x: auto;
    flex-wrap: nowrap;
    padding: 5px 0 3px;
    border-top: 1px solid rgba(174,155,115,.2);
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
  position: relative;
  min-height: 38px;
  padding: 0 16px;
  overflow: hidden;
  border: 1px solid rgba(218,178,75,.82);
  border-radius: 11px;
  background:
    linear-gradient(145deg, rgba(255,236,159,.98), rgba(246,207,83,.98));
  color: #51400F;
  font-size: 12px;
  font-weight: 900;
  cursor: pointer;
  box-shadow: 0 5px 13px rgba(154,116,25,.14), inset 0 1px rgba(255,255,255,.86);
  transition: transform 180ms cubic-bezier(.2,.72,.2,1), box-shadow 180ms ease, filter 180ms ease;
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
    transform: translateY(-2px);
    box-shadow: 0 9px 18px rgba(154,116,25,.2), inset 0 1px rgba(255,255,255,.9);
    filter: saturate(1.05);
  }
  &:active:not(:disabled) { transform: translateY(0) scale(.98); }
  &:disabled { cursor: not-allowed; opacity: .58; }
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
  border-top: 1px solid rgba(255,255,255,.9);
  background:
    linear-gradient(90deg, transparent 0 36px, rgba(201,117,104,.12) 36px 37px, transparent 37px),
    repeating-linear-gradient(0deg, transparent 0 29px, rgba(117,145,177,.08) 30px, transparent 31px),
    linear-gradient(145deg, rgba(247,242,229,.96), rgba(239,232,216,.96));
  color: var(--momo-text-soft);
  box-shadow: 0 -8px 24px rgba(62,49,28,.035), inset 0 1px rgba(255,255,255,.95);
  &::before {
    position: absolute;
    top: 0;
    left: clamp(35px, 8vw, 110px);
    width: 74px;
    height: 15px;
    content: "";
    border-right: 1px solid rgba(201,166,103,.16);
    border-left: 1px solid rgba(201,166,103,.16);
    background: rgba(255,224,151,.35);
    transform: rotate(1.5deg);
  }
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
  border-bottom: 1px solid rgba(171,153,116,.28);
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
  color: var(--momo-muted);
  font-size: 13px;
  line-height: 1.65;
  max-width: 380px;
  word-break: keep-all;
  border-left: 1px solid rgba(171,153,116,.42);
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
    color: #77643E;
    letter-spacing: .09em;
    text-transform: uppercase;
  }
  span, a {
    color: var(--momo-muted);
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
  color: #948873;
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
