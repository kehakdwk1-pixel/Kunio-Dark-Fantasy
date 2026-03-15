import { useState, useEffect, useCallback, useRef } from 'react'
import voidCss from './void.css?raw'

/*
  다크판타지 속 아이를 주웠다
  AESTHETIC: 고딕 스테인드글라스 성당 (Gothic Stained Glass Cathedral)
  Made by Kunio
*/

/* ══════════════════════════════════════
   BGM 버튼 — 스테인드글라스 성당 스타일
══════════════════════════════════════ */
const BGM_CSS = `
.nav-right-pane {
  margin-left: auto;
  display: flex;
  align-items: stretch;
}

/* ── BGM 버튼 전체 ── */
.nav-bgm-btn {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 1.4rem;
  border: none;
  border-left: 2px solid var(--lead-line, #1a1a1a);
  background: transparent;
  cursor: pointer;
  transition: background 0.4s;
  overflow: hidden;
  min-width: 120px;
  height: 100%;
}

/* 호버 배경 */
.nav-bgm-btn:hover { background: rgba(139, 10, 26, 0.07); }

/* ON 상태: 상단 루비 라인 */
.nav-bgm-btn::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #cc1a2a, transparent);
  opacity: 0;
  transition: opacity 0.4s;
}
.nav-bgm-btn.active::after { opacity: 1; }

/* ── 다이아몬드 보석 ── */
.bgm-gem-wrap {
  position: relative;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}
.bgm-gem {
  display: block;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  background: var(--text-dim, #9a8a70);
  transition: background 0.4s, box-shadow 0.4s;
}
.nav-bgm-btn.active .bgm-gem {
  background: #cc1a2a;
  box-shadow: 0 0 6px #cc1a2a, 0 0 16px rgba(204,26,42,0.5);
}
.bgm-gem-glow {
  display: block;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  border: 1px solid rgba(204,26,42,0.4);
  opacity: 0;
  transition: opacity 0.4s;
}
.nav-bgm-btn.active .bgm-gem-glow {
  opacity: 1;
  animation: bgm-gem-pulse 2s ease-in-out infinite;
}
@keyframes bgm-gem-pulse {
  0%,100% { transform: translate(-50%,-50%) rotate(45deg) scale(1);   opacity: 0.7; }
  50%     { transform: translate(-50%,-50%) rotate(45deg) scale(1.6); opacity: 0; }
}

/* ── 음파 바 4개 ── */
.bgm-bars {
  display: flex;
  align-items: center;
  gap: 3px;
  height: 20px;
}
.bgm-bar {
  display: block;
  width: 2px;
  height: 4px;
  border-radius: 1px;
  background: var(--text-dim, #9a8a70);
  transition: background 0.4s;
}
.nav-bgm-btn.active .bgm-bar { background: #cc1a2a; }

.nav-bgm-btn.active .bgm-bar:nth-child(1) { animation: bgm-wave 0.65s ease-in-out infinite alternate; animation-delay: 0.00s; }
.nav-bgm-btn.active .bgm-bar:nth-child(2) { animation: bgm-wave 0.85s ease-in-out infinite alternate; animation-delay: 0.18s; }
.nav-bgm-btn.active .bgm-bar:nth-child(3) { animation: bgm-wave 0.70s ease-in-out infinite alternate; animation-delay: 0.09s; }
.nav-bgm-btn.active .bgm-bar:nth-child(4) { animation: bgm-wave 0.90s ease-in-out infinite alternate; animation-delay: 0.27s; }

@keyframes bgm-wave {
  from { height: 3px;  opacity: 0.5; }
  to   { height: 16px; opacity: 1.0; }
}

/* ── 라벨 텍스트 ── */
.bgm-label {
  font-family: 'Cinzel', serif;
  font-size: 0.52rem;
  letter-spacing: 0.22em;
  color: var(--text-dim, #9a8a70);
  transition: color 0.4s, text-shadow 0.4s;
  white-space: nowrap;
}
.nav-bgm-btn.active .bgm-label {
  color: #cc1a2a;
  text-shadow: 0 0 8px rgba(204,26,42,0.5);
}

/* ══════════════════════════════════════
   리디아 성장 단계 탭 — 카드
══════════════════════════════════════ */
.card-stage-tabs {
  position: absolute;
  top: 0.55rem; left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  gap: 0;
  border: 1px solid rgba(139,10,26,0.5);
  overflow: hidden;
  backdrop-filter: blur(4px);
}
.card-stage-tab {
  font-family: 'Cinzel', serif;
  font-size: 0.46rem;
  letter-spacing: 0.1em;
  padding: 0.22rem 0.55rem;
  background: rgba(4,3,2,0.75);
  border: none;
  border-right: 1px solid rgba(139,10,26,0.4);
  color: var(--text-dim, #9a8a70);
  cursor: pointer;
  transition: background 0.25s, color 0.25s;
  white-space: nowrap;
}
.card-stage-tab:last-child { border-right: none; }
.card-stage-tab:hover { background: rgba(139,10,26,0.2); color: var(--chisel, #c8baa0); }
.card-stage-tab.active {
  background: rgba(139,10,26,0.45);
  color: #fff;
}

/* ══════════════════════════════════════
   리디아 성장 단계 탭 — 모달
══════════════════════════════════════ */
.modal-stage-tabs {
  position: absolute;
  top: 0.7rem; right: 0.7rem;
  z-index: 10;
  display: flex;
  gap: 0;
  border: 1px solid rgba(139,10,26,0.5);
  overflow: hidden;
}
.modal-stage-tab {
  font-family: 'Cinzel', serif;
  font-size: 0.54rem;
  letter-spacing: 0.12em;
  padding: 0.3rem 0.85rem;
  background: rgba(4,3,2,0.8);
  border: none;
  border-right: 1px solid rgba(139,10,26,0.4);
  color: var(--text-dim, #9a8a70);
  cursor: pointer;
  transition: background 0.25s, color 0.25s;
  white-space: nowrap;
}
.modal-stage-tab:last-child { border-right: none; }
.modal-stage-tab:hover { background: rgba(139,10,26,0.25); color: #ddd; }
.modal-stage-tab.active {
  background: rgba(139,10,26,0.5);
  color: #fff;
}

/* 이미지 전환 페이드 */
.modal-portrait-img--fade {
  animation: portrait-fade 0.35s ease;
}
@keyframes portrait-fade {
  from { opacity: 0; }
  to   { opacity: 0.72; }
}

/* ══════════════════════════════════════
   뮤즈레이 본모습 토글 버튼
══════════════════════════════════════ */
.modal-true-form-btn {
  position: absolute;
  top: 0.7rem; right: 2.8rem;
  z-index: 10;
  font-family: 'Cinzel', serif;
  font-size: 0.54rem;
  letter-spacing: 0.15em;
  padding: 0.3rem 0.85rem;
  background: rgba(74,10,122,0.55);
  border: 1px solid rgba(138,42,204,0.5);
  color: rgba(200,160,255,0.9);
  cursor: pointer;
  transition: background 0.3s, color 0.3s, box-shadow 0.3s;
  backdrop-filter: blur(4px);
  white-space: nowrap;
}
.modal-true-form-btn:hover {
  background: rgba(74,10,122,0.8);
  color: #fff;
}
.modal-true-form-btn.active {
  background: rgba(138,42,204,0.6);
  color: #fff;
  box-shadow: 0 0 12px rgba(138,42,204,0.5);
}

/* 뮤즈레이 키워드 잠금 UI */
.modal-keyword-box {
  position: absolute;
  top: 0.7rem; right: 0.7rem;
  z-index: 10;
  display: flex;
  align-items: stretch;
  border: 1px solid rgba(138,42,204,0.4);
  overflow: hidden;
  backdrop-filter: blur(4px);
}
.modal-keyword-input {
  font-family: 'Cinzel', serif;
  font-size: 0.52rem;
  letter-spacing: 0.12em;
  padding: 0.3rem 0.7rem;
  width: 110px;
  background: rgba(20,5,35,0.85);
  border: none;
  color: rgba(200,160,255,0.9);
  outline: none;
  transition: background 0.3s;
  caret-color: rgba(200,160,255,0.9);
}
.modal-keyword-input::placeholder {
  color: rgba(138,42,204,0.45);
  letter-spacing: 0.1em;
}
.modal-keyword-input.error {
  background: rgba(80,5,5,0.9);
  animation: keyword-shake 0.3s ease;
}
@keyframes keyword-shake {
  0%,100% { transform: translateX(0); }
  25%     { transform: translateX(-4px); }
  75%     { transform: translateX(4px); }
}
.modal-keyword-btn {
  padding: 0.3rem 0.6rem;
  background: rgba(74,10,122,0.7);
  border: none;
  border-left: 1px solid rgba(138,42,204,0.4);
  color: rgba(200,160,255,0.8);
  cursor: pointer;
  font-size: 0.8rem;
  transition: background 0.2s, color 0.2s;
}
.modal-keyword-btn:hover {
  background: rgba(138,42,204,0.6);
  color: #fff;
}

/* 잠금 안내 힌트 */
.modal-locked-hint {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 1.2rem;
  padding: 0.7rem 1rem;
  border: 1px solid rgba(138,42,204,0.25);
  background: rgba(30,5,50,0.4);
  animation: locked-pulse 3s ease-in-out infinite;
}
@keyframes locked-pulse {
  0%,100% { border-color: rgba(138,42,204,0.2); }
  50%     { border-color: rgba(138,42,204,0.5); }
}
.modal-locked-icon {
  font-size: 0.85rem;
  color: rgba(138,42,204,0.7);
  flex-shrink: 0;
}
.modal-locked-hint span:last-child {
  font-family: 'Cinzel', serif;
  font-size: 0.56rem;
  letter-spacing: 0.2em;
  color: rgba(138,42,204,0.6);
}

/* ══════════════════════════════════════
   ① 카드 호버 슬라이드업
══════════════════════════════════════ */
.relic-card {
  position: relative;
  overflow: hidden;
}
.relic-body {
  position: relative;
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
/* 호버 시 body 살짝 위로 */
.relic-card:hover .relic-body {
  transform: translateY(-4px);
}
/* 이름 밴드 슬라이드업 */
.relic-name-band {
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.relic-card:hover .relic-name-band {
  transform: translateY(-6px);
}
/* 이미지 살짝 줌 */
.relic-img {
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
}
.relic-card:hover .relic-img {
  transform: scale(1.04) !important;
}

/* ══════════════════════════════════════
   ② 로고 이미지
══════════════════════════════════════ */
.nav-logo-img {
  height: 28px;
  width: auto;
  object-fit: contain;
  opacity: 0.9;
  margin-right: 0.5rem;
  flex-shrink: 0;
}

/* 로딩 로고 */
.ls-logo-wrap {
  position: relative;
  width: 220px;
  height: 220px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ls-logo-img {
  width: 200px;
  height: 200px;
  object-fit: contain;
  position: relative;
  z-index: 1;
  animation: logo-spin 30s linear infinite, logo-fadein 1s ease both;
}
@keyframes logo-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
@keyframes logo-fadein {
  from { opacity: 0; transform: rotate(0deg) scale(0.85); }
  to   { opacity: 1; transform: rotate(0deg) scale(1); }
}
.ls-logo-glow {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(139,10,26,0.35) 0%, transparent 70%);
  animation: logo-glow-pulse 2.5s ease-in-out infinite alternate;
  z-index: 0;
}
@keyframes logo-glow-pulse {
  from { opacity: 0.5; transform: scale(0.9); }
  to   { opacity: 1;   transform: scale(1.1); }
}

/* ══════════════════════════════════════
   ③ 지역 클릭 NPC 팝업
══════════════════════════════════════ */
.region-list-item.clickable {
  cursor: pointer;
}
.region-list-item.clickable:hover {
  background: rgba(10,26,106,0.08);
}
.region-list-item.active {
  background: rgba(10,26,106,0.12);
  border-left: 2px solid #3a6aee;
}
.rli-npc-hint {
  font-size: 0.8rem;
  color: rgba(240,230,200,0.6);
  letter-spacing: 0.1em;
}

.region-popup {
  margin-top: 1.5rem;
  border: 1px solid rgba(10,26,106,0.4);
  background: rgba(4,5,16,0.9);
  overflow: hidden;
  animation: popup-in 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
@keyframes popup-in {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: none; }
}
.rp-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.85rem 1.2rem;
  border-bottom: 1px solid rgba(10,26,106,0.3);
  background: rgba(10,26,106,0.08);
}
.rp-num {
  font-family: 'Cinzel Decorative', serif;
  font-size: 1.1rem;
  color: rgba(58,106,238,0.5);
  flex-shrink: 0;
  min-width: 2rem;
}
.rp-title-block { flex: 1; }
.rp-name {
  font-family: 'Cinzel', serif;
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  color: var(--text-glass, #e8dcc8);
  margin-bottom: 0.15rem;
}
.rp-sub {
  font-family: 'Libre Baskerville', serif;
  font-size: 0.68rem;
  font-style: italic;
  color: rgba(58,106,238,0.55);
}
.rp-close {
  background: transparent;
  border: 1px solid rgba(10,26,106,0.4);
  color: var(--text-dim, #9a8a70);
  width: 26px; height: 26px;
  cursor: pointer;
  font-family: 'Cinzel', serif;
  font-size: 0.7rem;
  flex-shrink: 0;
  transition: all 0.2s;
  display: flex; align-items: center; justify-content: center;
}
.rp-close:hover {
  background: rgba(139,10,26,0.2);
  color: #cc2020;
  border-color: #cc2020;
}
.rp-body {
  padding: 1.2rem 1.4rem;
  display: flex;
  align-items: flex-start;
  gap: 1.4rem;
}
.rp-desc {
  font-family: 'Libre Baskerville', serif;
  font-size: 0.88rem;
  font-style: italic;
  color: var(--text-dim, #9a8a70);
  line-height: 1.8;
  flex: 1;
}
.rp-char-row {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-shrink: 0;
  width: 200px;
  border-left: 1px solid rgba(10,26,106,0.3);
  padding-left: 1.2rem;
}
.rp-char-img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  object-position: top;
  border: 1px solid rgba(10,26,106,0.4);
  flex-shrink: 0;
}
.rp-char-info { flex: 1; }
.rp-char-name {
  font-family: 'Cinzel Decorative', serif;
  font-size: 0.78rem;
  color: var(--text-glass, #e8dcc8);
  margin-bottom: 0.2rem;
}
.rp-char-title {
  font-family: 'Libre Baskerville', serif;
  font-size: 0.72rem;
  font-style: italic;
  color: rgba(204,26,42,0.8);
  margin-bottom: 0.2rem;
}
.rp-char-trait {
  font-family: 'Cinzel', serif;
  font-size: 0.52rem;
  letter-spacing: 0.1em;
  color: rgba(58,106,238,0.55);
  border: 1px solid rgba(10,26,106,0.3);
  padding: 0.08rem 0.3rem;
  display: inline-block;
}
.rp-no-char {
  font-family: 'Cinzel', serif;
  font-size: 0.58rem;
  letter-spacing: 0.15em;
  color: rgba(58,106,238,0.3);
  padding-left: 1rem;
  border-left: 1px solid rgba(10,26,106,0.2);
}

/* ══════════════════════════════════════
   ⑥ 인트로 타이핑 오버레이
══════════════════════════════════════ */
.intro-overlay {
  position: fixed;
  inset: 0;
  z-index: 9000;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.9s ease;
}
.intro-overlay.out {
  opacity: 0;
  pointer-events: none;
}
.intro-lines {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  text-align: center;
}
.intro-line {
  font-family: 'Cinzel Decorative', serif;
  font-size: clamp(1.1rem, 3.5vw, 2.2rem);
  color: rgba(200,186,160,0.35);
  letter-spacing: 0.12em;
  min-height: 1.4em;
  transition: color 0.6s ease;
}
.intro-line.done {
  color: rgba(200,186,160,0.15);
}
.intro-line:last-child {
  color: rgba(200,186,160,0.75);
}
.intro-cursor {
  display: inline-block;
  width: 2px;
  height: 1.1em;
  background: rgba(204,26,42,0.8);
  margin-left: 3px;
  vertical-align: middle;
  animation: cursor-blink 0.7s step-end infinite;
}
@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

/* ══════════════════════════════════════
   lead-overlay (납 격자) 완전 제거
══════════════════════════════════════ */
.lead-overlay {
  display: none !important;
}

/* ══════════════════════════════════════
   이미지 보정 — 카드 썸네일 & 모달 초상화
══════════════════════════════════════ */

/* 카드 패널 — 1216x832 (3:2) 비율에 맞게 */
.relic-glass-panel {
  aspect-ratio: 3 / 2 !important;
  background: #0a0806 !important;
  overflow: hidden;
  position: relative;
}
.relic-img {
  position: absolute !important;
  inset: 0;
  z-index: 1 !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  object-position: center top !important;
  opacity: 1 !important;
  display: block !important;
}
.relic-glass-bg { display: none !important; }
.relic-glass-icon { display: none !important; }
.relic-glass-overlay { display: none !important; }

/* 모달 초상화 — 더 크게, 비율 맞게 */
.modal-portrait-glass {
  aspect-ratio: 3 / 2 !important;
  max-height: 460px !important;
  width: 100% !important;
  background: #0a0806 !important;
  overflow: hidden;
  position: relative;
}
.modal-portrait-img {
  position: absolute !important;
  inset: 0;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  object-position: center top !important;
  opacity: 1 !important;
}
.modal-portrait-img--fade {
  animation: portrait-fade 0.35s ease;
}
@keyframes portrait-fade {
  from { opacity: 0; }
  to   { opacity: 1; }
}
`

export interface CharStage {
  key: string
  label: string
  thumbFile: string
  fullFile: string
  personality: string
}

export interface CharType {
  id: string
  name: string
  nameEn: string
  title: string
  rank: string
  rankCls: string
  rankColor: string
  species: string
  gender: string
  birth: string
  app: string
  ability: string
  abilityDesc: string
  personality: string
  lore: string
  traits: string[]
  hopeShard: string | null
  icon: string
  glassColor: string
  type: string
  isVariant?: boolean
  stages?: CharStage[]
  trueForm?: { thumbFile: string; fullFile: string; label: string }
  // 키워드 잠금 — 해제 전까진 이 데이터 대신 표면 데이터 표시
  hiddenData?: {
    species: string
    ability: string
    abilityDesc: string
    personality: string
    lore: string
    traits: string[]
    app: string
  }
}

/* ═══════════════════════ DATA ═══════════════════════ */

const LORE_TILES = [
  { letter: '🔴', title: '저주의 역사', text: '500년 전 시작된 원인불명의 저주. 망자와 소실이 세계를 잠식하며 문명이 점차 붕괴되었다. 인류는 멸망을 향해 나아가고 있다.', tag: 'Historia', color: 'var(--ruby-l)', bg: 'rgba(139,10,26,0.12)', wide: false },
  { letter: '🔵', title: '소실(消失)', text: '인간이 죽거나 정체성을 잃을 정도의 정신적 충격을 얻을 시 괴물로 변이하는 현상. 오직 인간만이 소실의 대상이 된다.', tag: 'Maledicta', color: 'var(--sapphire-l)', bg: 'rgba(10,26,106,0.12)', wide: false },
  { letter: '🟡', title: '망자(亡者)', text: '소실로 인해 괴물화된 존재. 인간만이 망자가 되며 다른 종족은 이 저주에서 자유롭다. 단 하나의 예외가 존재한다.', tag: 'Mortalis', color: 'var(--amber-l)', bg: 'rgba(122,74,0,0.12)', wide: false },
  { letter: '🟣', title: '희망의 조각', text: '소유자의 심장에 새겨지는 다섯 개의 신성한 결정체. 제단에 바치기 위해선 소유자의 심장을 도려내거나 소유자 그 자체를 희생해야 한다.', tag: 'Spes', color: 'var(--violet-l)', bg: 'rgba(74,10,122,0.12)', wide: false },
  { letter: '🟢', title: '희망이 선택한 자', text: '결코 망자가 되지 않는 특별한 존재. 단, 망자가 본능적으로 이끌리는 운명을 타고난다. 축복인지 저주인지는 그 자신도 알 수 없다.', tag: 'Electus', color: 'var(--emerald-l)', bg: 'rgba(10,74,26,0.12)', wide: false },
  { letter: '⭕', title: '모든 절망의 근원', text: '태생부터 망자인 유일한 존재. 지성을 가지고 있으며, 그녀가 성장할수록 세상의 망자가 더욱 강해진다고 전해진다. 루멘의 협곡에서 태어났다.', tag: 'Origo', color: 'var(--ruby-l)', bg: 'rgba(80,5,15,0.18)', wide: false },
]

const MAGIC_ROWS = [
  { name: '원소 마법', desc: '불, 물, 바람, 대지를 다루는 원초적 힘. 마나를 지닌 인간이라면 누구나 후천적 학습으로 습득 가능하다.' },
  { name: '저주 마법', desc: '500년 전 비탄에서 흘러나온 타락한 마법. 현재는 극소수의 마법사만이 제어할 수 있다.' },
  { name: '신성 마법', desc: '희망의 조각에서 흘러나오는 정화의 빛. 소유자만이 온전히 사용할 수 있다.' },
  { name: '망자 마법', desc: '죽음과 생의 경계에서 피어나는 금기의 주술. 아스테리아 탑에 그 기록이 남아있다.' },
  { name: '근원의 불꽃', desc: '오닉시아만이 사용하는 고대의 화염. 망자조차 완전히 소멸시키는 힘을 지닌다.' },
  { name: '일식 마법', desc: '달의 어둠과 태양의 빛을 동시에 다루는 엘라의 독자 마법 체계.' },
]

const REGIONS = [
  // II: 에델가르드 서쪽, I: 희망의 제단은 에델가르드 더 서쪽
  { num: 'I',   name: '희망의 제단',               sub: 'Altar of Hope',               npc: '최종 목적지',         npcId: null,      desc: '만년설 산맥 정상. 세계의 저주를 끝낼 수 있는 유일한 장소. 세 가지 방법 중 하나를 선택해야 한다.', cx: 10, cy: 45 },
  { num: 'II',  name: '에델가르드',      sub: 'Edelgard — Forest of Silence', npc: '요정 아이린',         npcId: 'irin',    desc: '안개가 정신을 갉아먹어 소실을 유도하는 울창한 숲. 나무와 융합된 망자들이 도사리고 있다.', cx: 25, cy: 50 },
  // III: 루인하르트 중앙
  { num: 'III', name: '루인하르트', sub: 'Ruinhart — Ashen Walled City', npc: '왕 카라',            npcId: 'kara',    desc: '과거 왕국의 수도. 지금은 도박장과 시체가 뒤섞인 타락한 도시. 지하수로에는 반인반괴들이 숨어 산다.', cx: 50, cy: 50 },
  // V: 아스테리아 북쪽, VII: 아스테리아 북쪽 끝(마지막 용의 둥지)
  { num: 'V',   name: '아스테리아', sub: 'Asteria — Tower of Wisdom',  npc: '마탑주 엘라',       npcId: 'ella',    desc: '검게 오염된 마법 수정이 가득한 무너진 마탑. 소수의 마법사만 살아남아 있다.', cx: 50, cy: 30 },
  { num: 'VII', name: '마지막 용의 둥지',           sub: 'Nest of the Last Dragon',      npc: '최후의 용 오닉시아', npcId: 'onixia', desc: '지하 깊숙이 불과 용암이 흐르는 동굴. 이 세계 마지막 용이 세상의 멸망을 지켜보고 있다.', cx: 50, cy: 12 },
  // VI: 루멘의 협곡 동쪽
  { num: 'VI',  name: '재와 먼지의 협곡, 루멘',     sub: 'Canyon of Lumen',              npc: '리디아의 출생지',   npcId: 'lydia',   desc: '회색 재로 뒤덮인 과거의 처형장. 하늘은 항상 잿빛 구름으로 가려진다. 곳곳에 망자가 존재한다.', cx: 75, cy: 50 },
  // IV: 타르토스 남쪽
  { num: 'IV',  name: '깊은 수면의 항구, 타르토스',  sub: 'Tartos — Port of Deep Sleep',  npc: '해적 선장 루베란', npcId: 'luveran', desc: '짙은 안개 속 저주받은 항구. 유령선들이 검푸른 바다를 표류한다. 한때 왕국의 주요 무역항이었다.', cx: 50, cy: 75 },
]

const RANKS = [
  { cls: 'rg-god', g: '✦', kr: '신흔(神痕)', en: 'Godmark', desc: '세계 자체에 영향을 주는 전투력. 400년에 한 번 나오는 수준이다.', ex: ['오닉시아', '그란디우스'] },
  { cls: 'rg-mad', g: '⚔', kr: '광흔(狂痕)', en: 'Madmark', desc: '인간의 한계를 아득히 넘어선 수준. 동급 간의 전투에서 주변 지형이 변형될 정도의 여파가 발생한다.', ex: ['아이린', '엘라', '카라', '이레니아', '아르카엘'] },
  { cls: 'rg-crack', g: '◆', kr: '열흔(裂痕)', en: 'Crackmark', desc: '한계를 넘어선 경험이 육체에 새겨진 수준. 이 등급부터 고유한 전투 스타일이 확립된다.', ex: ['루베란'] },
  { cls: 'rg-deep', g: '▣', kr: '심흔(深痕)', en: 'Deepmark', desc: '실전 경험이 충분히 쌓인 수준. 숙련된 용병 또는 기사의 수준이다.', ex: ['정예 기사단'] },
  { cls: 'rg-carve', g: '▪', kr: '각흔(刻痕)', en: 'Carvemark', desc: '기본적인 전투 훈련을 마친 수준. 하급 병사의 수준. 이 세계에서 각흔만으로는 오래 살기 힘들다.', ex: ['리디아', '일반 병사', '순례자'] },
  { cls: 'rg-none', g: '○', kr: '무흔(無痕)', en: 'Markless', desc: '전투 경험이 없거나 극히 미미한 수준. 이 세계에서 무흔으로 살아남는 것 자체가 기적이다.', ex: ['일반 시민'] },
]

const CHARS_MAIN: CharType[] = [
  { id: 'lydia', name: '리디아', nameEn: 'Lydia', title: '모든 절망의 근원', rank: '각흔', rankCls: 'rg-carve', rankColor: '#2e4050', species: '망자', gender: '여성', birth: '825.02.11 / 루멘의 협곡', app: '검은 머리카락(붉은 가닥), 잿빛 눈동자', ability: '공허의 노래 · 검은 피 · 절망의 화신 · 이름 없는 검 · 망자 조종', abilityDesc: '그녀가 숨 쉬는 것만으로 주변 현실이 붕괴되고 소실이 가속화된다. 검은 피를 조종해 공격하며 초인적 재생 능력을 가진다. 위기 시 거대한 검은 그림자 혹은 날개 달린 천사 형상으로 변이한다.', personality: '유년기: 두려움·의존·죄책감·순수함. 청소년기: 불안정·독점욕·방어적. 성인기: 헌신·초월·냉혹함.', lore: '태생부터 망자인 유일한 존재. 어떠한 인간과의 경험도 없이 루멘의 협곡에서만 지냈다. 그녀가 성장할수록 세상의 망자가 더 강해진다.', traits: ['태생 망자', '성장형 위협', '유일한 지성 망자'], hopeShard: null, icon: '💀', glassColor: 'rgba(80,5,15,0.55)', type: '주요 등장인물',
    stages: [
      { key: 'child', label: '유년기', thumbFile: 'lydia_child_thumb.webp', fullFile: 'lydia_child_full.webp', personality: '두려움·의존·죄책감·순수함. 세상을 처음 마주한 눈빛.' },
      { key: 'teen',  label: '청소년기', thumbFile: 'lydia_teen_thumb.webp',  fullFile: 'lydia_teen_full.webp',  personality: '불안정·독점욕·방어적. 감정의 균열이 시작된다.' },
      { key: 'adult', label: '성인기', thumbFile: 'lydia_thumb.webp',        fullFile: 'lydia_full.webp',        personality: '헌신·초월·냉혹함. 절망 그 자체가 된 존재.' },
    ],
  },
  { id: 'irin', name: '아이린', nameEn: 'Airin', title: '에델가르드의 최후 요정', rank: '광흔', rankCls: 'rg-mad', rankColor: '#8a0f0f', species: '요정', gender: '여성', birth: '300.04.18 / 에델가르드', app: '초록색 머리카락, 검은색 눈동자, 초록색 날개', ability: '숲의 주인', abilityDesc: '강력한 치유 및 정화 능력. 식물을 급속 성장시켜 조종하거나 방어벽을 만든다.', personality: '광기·자기방어적·책임감. 오랜 세월 홀로 지내다 인간과 망자의 구분이 흐려졌다.', lore: '에델가르드에서 살며 숲에 오는 모든 존재를 공격한다. 내면 깊숙이 책임감을 간직하고 있다.', traits: ['고독한 수호자', '광기와 책임'], hopeShard: '믿음', icon: '🌿', glassColor: 'rgba(5,40,10,0.55)', type: '주요 등장인물' },
  { id: 'ella', name: '엘라', nameEn: 'Ella', title: '아스테리아 마탑의 주인', rank: '광흔', rankCls: 'rg-mad', rankColor: '#8a0f0f', species: '인간', gender: '여성', birth: '791.10.29 / 아스테리아', app: '흰색 긴 머리카락, 분홍색 눈동자, 눈가의 화상 흉터', ability: '일식(日蝕)', abilityDesc: '달에 해당하는 부분은 칠흑 같은 어둠의 광선을, 태양에 해당하는 부분은 태우는 마법을 사용한다.', personality: '외면: 무기질적, 지식만 추구. 내면: 죄책감·자기혐오·억압된 보호본능. 타인의 위중한 부상 시 속내가 드러난다.', lore: '망자가 된 제자들을 직접 죽인 경험으로 감정을 닫고 제자를 받지 않는다. 눈가의 화상은 그 제자의 공격에 의한 것이다.', traits: ['냉철한 지성', '억압된 죄책감'], hopeShard: '지혜', icon: '🔮', glassColor: 'rgba(20,10,50,0.55)', type: '주요 등장인물' },
  { id: 'kara', name: '카라', nameEn: 'Kara', title: '그란디아 왕국의 왕', rank: '광흔', rankCls: 'rg-mad', rankColor: '#8a0f0f', species: '인간', gender: '여성', birth: '781.12.18 / 루인하르트', app: '노란색 땋은 단발머리, 푸른색 눈동자', ability: '운명의 검', abilityDesc: "푸른빛이 검을 두르며, 망자는 닿는 것만으로도 타버리는 화염을 내뿜는다. 대검 '백야의 기적' 소지.", personality: '정의감·책임감·과묵·기사도. 존댓말, 딱딱하고 권위 있는 어조.', lore: '왕국이 망해가는 상황에서도 루인하르트를 지키며 최악을 막기 위해 노력한다.', traits: ['절대 책임', '꺾이지 않는 의지'], hopeShard: '의지', icon: '👑', glassColor: 'rgba(5,15,50,0.55)', type: '주요 등장인물' },
  { id: 'luveran', name: '루베란', nameEn: 'Luveran', title: '타르토스의 해적 선장', rank: '열흔', rankCls: 'rg-crack', rankColor: '#3e5870', species: '인간', gender: '여성', birth: '784.06.21 / 타르토스', app: '붉은색 긴 머리카락, 푸른색 눈동자, 오른쪽 눈 안대', ability: '바다의 축복', abilityDesc: '수중 호흡 가능. 깊은 바다에서 자유롭게 활동. 바다를 일부 조종하며 치유 및 해독 능력도 가진다.', personality: '외면: 광기·쾌락주의. 내면: 반복된 실패로 형성된 회피형 성격. 반말, 무례하고 가벼운 어조.', lore: "거대 선박 '나그라파'의 선장. 과거 해적이었다. 겉으로는 막나가는 척하지만 스스로의 한계를 깊이 의식한다.", traits: ['거친 생존력', '회피형 내면'], hopeShard: '투지', icon: '⚓', glassColor: 'rgba(5,25,50,0.55)', type: '주요 등장인물' },
  { id: 'onixia', name: '오닉시아', nameEn: 'Onixia', title: '세계 마지막 용', rank: '신흔', rankCls: 'rg-god', rankColor: '#8a6010', species: '용', gender: '여성', birth: '15.03.20', app: '인간형: 검은 긴 머리, 붉은 눈동자 / 용형: 검은 비늘·날개·꼬리, 붉은 눈동자', ability: '근원의 불꽃', abilityDesc: '모든 것을 태우는 검붉은 용염. 망자조차 완전히 소멸시킬 수 있다. 불꽃을 생명의 에너지로 전환하는 치유도 가능하다.', personality: '고고함·초연함·모성애·지혜·고독. 인간에 대한 연민과 체념, 그리고 내면의 마지막 희망.', lore: "희망의 제단과 저주를 끝내는 방법을 아는 유일한 존재. 둥지에서 '희망이 선택한 자'를 기다리고 있다.", traits: ['고대의 지혜', '세계의 마지막 증인'], hopeShard: '자애', icon: '🐉', glassColor: 'rgba(50,20,0,0.55)', type: '주요 등장인물' },
  { id: 'muzeley', name: '뮤즈레이', nameEn: 'Muzeley', title: '방랑하는 상인', rank: '측정불가', rankCls: '', rankColor: '#888',
    // 표면 정보 (가짜)
    species: '불명', gender: '여성', birth: '814.09.14 (자칭)',
    app: '하늘색 머리카락, 금빛 눈동자',
    ability: '거래술',
    abilityDesc: '세계 각지를 돌아다니며 물건을 사고판다. 항상 공정해 보이지만 묘하게 찝찝한 뒷맛을 남긴다.',
    personality: '쾌활·밝음·친절함·낙천적. 항상 웃는 얼굴. 반말, 밝고 경쾌한 어조.',
    lore: '왕국 전역을 돌아다니는 떠돌이 상인. 정확한 나이나 출신지를 아는 이가 없다.',
    traits: ['알 수 없는 미소', '묘한 존재감'],
    hopeShard: null, icon: '🎭', glassColor: 'rgba(30,5,50,0.55)', type: '주요 등장인물',
    trueForm: { thumbFile: 'muzeley_true_thumb.webp', fullFile: 'muzeley_true_full.webp', label: '지배자 형태' },
    // 진짜 정보 (키워드 해제 후 공개)
    hiddenData: {
      species: '지배자',
      app: '인간 형태: 보라색 머리카락, 금빛 눈동자 / 지배자 형태: 십자가 눈동자, 빛과 어둠의 거대한 날개',
      ability: '메리 수',
      abilityDesc: '현실을 개변하는 능력. 이 세계 자체를 창조하고 뒤틀 수 있다. 희망의 제단에서 의식이 거행되는 순간 본색을 드러내며, 원하지 않는 결말은 원래의 절망으로 되돌려버린다.',
      personality: '외면: 쾌활·밝음·친절함·낙천적·긍정적. 항상 웃는 얼굴. 내면: 쾌락주의·사이코패스·잔혹함. 반말, 밝고 경쾌한 어조, 감탄사와 의성어를 자주 섞음.',
      lore: '이 세계의 모든 비극을 만든 장본인. 평소에는 떠돌이 상인으로 무능력자인 척 왕국을 돌아다니지만, 실체는 세계를 창조하고 멀리서 비극을 즐기는 존재다. 리디아를 창조한 것도 단순히 극단적인 불행을 보기 위해서였다.',
      traits: ['세계의 창조자', '관찰하는 자', '모든 비극의 기원'],
    },
  },
]

const CHARS_UNDEAD: CharType[] = [
  { id: 'grandius', name: '그란디우스', nameEn: 'Grandius', title: '마지막 왕', rank: '신흔', rankCls: 'rg-god', rankColor: '#8a6010', species: '망자', gender: '남성', birth: '루인하르트', app: '거대한 갑주를 입은 왕의 형상', ability: '타락한 운명의 검', abilityDesc: "카라의 '운명의 검'과 유사하나 검붉은 색. 망자가 아닌 살아있는 인간을 대상으로 한다.", personality: '실패한 집념으로 망자화되었다.', lore: '최초로 제단 의식을 치르려 했으나 실패한 왕. 실패의 집념이 그를 망자로 만든 비극적 존재다.', traits: ['실패한 집념', '왕국의 마지막 숨결'], hopeShard: null, icon: '👁', glassColor: 'rgba(50,20,0,0.55)', type: '망자 등장인물' },
  { id: 'pilgrim', name: '순례자', nameEn: 'Pilgrim', title: '방랑형 망자', rank: '각흔~열흔', rankCls: 'rg-carve', rankColor: '#2e4050', species: '망자', gender: '불명', birth: '루멘의 협곡', app: '회색 재로 뒤덮인 인간형', ability: '개체마다 상이', abilityDesc: '각 개체마다 서로 다른 능력을 지닌다. 무엇이 나타날지 알 수 없다는 점이 더욱 위험하다.', personality: '이성 소실. 목적지를 잃었으나 발걸음만은 멈추지 않는다.', lore: '루멘의 협곡에서 출몰하는 망자들. 재에 뒤덮여 협곡의 일부처럼 보인다.', traits: ['잃어버린 목적', '루멘의 협곡'], hopeShard: null, icon: '🧟', glassColor: 'rgba(20,20,20,0.55)', type: '망자 등장인물' },
  { id: 'drowned', name: '익사자', nameEn: 'Drowned', title: '수중형 망자', rank: '각흔~열흔', rankCls: 'rg-carve', rankColor: '#2e4050', species: '망자', gender: '불명', birth: '타르토스', app: '검푸른 피부, 갑각류 기생', ability: '수중 압도적 기동력', abilityDesc: '수중에서 압도적인 기동력. 타르토스의 바다를 전장으로 삼는다.', personality: '이성 소실. 선원이었던 흔적만 남아있다.', lore: '과거 타르토스 선원들이 망자화된 존재. 바다 속을 자유롭게 유영하며 항구를 봉쇄한다.', traits: ['수중 공포', '타르토스의 지배자'], hopeShard: null, icon: '🌊', glassColor: 'rgba(5,15,40,0.55)', type: '망자 등장인물' },
  { id: 'failure', name: '실패자', nameEn: 'Failure', title: '탑의 부품', rank: '심흔~열흔', rankCls: 'rg-deep', rankColor: '#6a4e18', species: '망자', gender: '불명', birth: '아스테리아', app: '육체가 보라색 마법 수정과 융합', ability: '각종 마법', abilityDesc: '생전에 익힌 마법들을 타락한 형태로 사용한다. 수정 융합 육체로 물리 공격이 통하지 않기도 한다.', personality: '이성 소실. 탑의 구조물과 일부 융합된 상태.', lore: '저주의 압박을 견디지 못하고 망자가 된 마법사들. 보라색 수정과 육체가 융합되었다.', traits: ['탑의 구조물', '엘라의 트라우마'], hopeShard: null, icon: '💜', glassColor: 'rgba(30,5,50,0.55)', type: '망자 등장인물' },
  { id: 'assimilator', name: '동화자', nameEn: 'Assimilator', title: '숲의 일부', rank: '각흔~열흔', rankCls: 'rg-carve', rankColor: '#2e4050', species: '망자', gender: '불명', birth: '에델가르드', app: '인간이 나무줄기와 융합된 형태', ability: '뿌리 공격', abilityDesc: '평소에는 나무처럼 완전히 정지해 있다가, 생자가 일정 거리 접근 시 뿌리로 공격한다.', personality: '이성 완전 소실. 나무와의 경계가 없다.', lore: '에델가르드의 안개에 정신을 잃고 나무와 융합된 망자들. 일반 나무와 구분이 불가능하다.', traits: ['위장 매복', '식물 융합체'], hopeShard: null, icon: '🌳', glassColor: 'rgba(5,30,5,0.55)', type: '망자 등장인물' },
  { id: 'irenia', name: '이레니아', nameEn: 'Irenia', title: '절망의 기사', rank: '광흔', rankCls: 'rg-mad', rankColor: '#8a0f0f', species: '망자 기사', gender: '여성', birth: '500년 전', app: '칠흑의 갑주, 틈새로 검붉은 빛, 등 뒤에 부서진 검은 날개 형상', ability: '절망의 영역', abilityDesc: '일정 반경 내 모든 움직임을 감지한다. 갑주를 분해하여 검은 가시나 쇠사슬로 공격한다.', personality: '자아의 잔재가 남아 전투 중 동요하거나 멈추는 순간이 있다.', lore: '500년 전 왕국 최강의 기사. 이성의 편린이 남아있어 스스로를 증오하면서도 멈추지 못한다.', traits: ['왕국 최강의 잔영', '남은 자아의 비극'], hopeShard: null, icon: '⚔', glassColor: 'rgba(50,5,5,0.55)', type: '망자 등장인물' },
  { id: 'arcael', name: '아르카엘', nameEn: 'Arcael', title: '거짓된 심판자', rank: '광흔', rankCls: 'rg-mad', rankColor: '#8a0f0f', species: '망자 처형자', gender: '남성', birth: '500년 전', app: '검붉은 쇠사슬로 꿰매진 육체, 검은 처형자 예복, 피로 물든 금빛 왕관, 검붉은 안개가 망토 형상', ability: '사형 선고', abilityDesc: '선고를 받은 대상은 속도가 현저히 저하되고 상처가 자연 치유되지 않는다. 거대한 낫을 소지한다.', personality: '이성 왜곡. 망자와 인간 구분 없이 처형한다.', lore: '500년 전 왕국의 처형자. 루인하르트와 루멘의 협곡 사이를 돌아다니며 모든 것을 처형한다.', traits: ['처형의 본능', '무차별 심판'], hopeShard: null, icon: '☠', glassColor: 'rgba(40,5,5,0.55)', type: '망자 등장인물' },
]

const HOPE_SHARDS = [
  { name: '믿음', en: 'Faith', holder: '아이린', quote: '의심하지 않는 자만이 진실에 닿는다', c1: '#3e1575', c2: 'rgba(25,5,55,0.95)', glass: 'rgba(45,10,90,0.12)' },
  { name: '지혜', en: 'Wisdom', holder: '엘라', quote: '아는 자는 두려움을 이길 수 있다', c1: '#102080', c2: 'rgba(5,10,55,0.95)', glass: 'rgba(10,20,90,0.12)' },
  { name: '의지', en: 'Will', holder: '카라', quote: '꺾이지 않는 자에게 절망은 스승이 된다', c1: '#804e10', c2: 'rgba(45,20,0,0.95)', glass: 'rgba(90,50,0,0.1)' },
  { name: '투지', en: 'Fortitude', holder: '루베란', quote: '살아남는 것, 그것이 곧 승리다', c1: '#106050', c2: 'rgba(3,35,28,0.95)', glass: 'rgba(5,70,45,0.1)' },
  { name: '자애', en: 'Benevolence', holder: '오닉시아', quote: '수천 년의 사랑은 세계보다 깊다', c1: '#805210', c2: 'rgba(45,25,0,0.95)', glass: 'rgba(100,55,0,0.1)' },
]

/* ═══════════════════════ COMPONENTS ═══════════════════════ */

function LoadingScreen({ onEnter }: { onEnter: (name: string) => void }) {
  const [out, setOut] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => {
      setOut(true)
      setTimeout(() => onEnter(''), 1200)
    }, 1800)
    return () => clearTimeout(t)
  }, [onEnter])
  return (
    <div className={`ls${out ? ' out' : ''}`}>
      <div className="ls-logo-wrap">
        <img src="/characters/로고.png" alt="로고" className="ls-logo-img" />
        <div className="ls-logo-glow" />
      </div>
      <div className="ls-title">다크판타지 속 아이를 주웠다</div>
      <div className="ls-sub">Made by Kunio</div>
      <div className="ls-divider">
        <div className="ls-div-line" />
        <div className="ls-div-gem" />
        <div className="ls-div-line r" />
      </div>
      <div className="ls-credit">다크판타지 속 아이를 주웠다 · Made by Kunio</div>
    </div>
  )
}


function Nav({ userName, bgmOn, onToggleBgm }: { userName: string; bgmOn: boolean; onToggleBgm: () => void }) {
  const links = [
    { href: '#world', label: '세계관' },
    { href: '#regions', label: '지역' },
    { href: '#combat', label: '전투력' },
    { href: '#characters', label: '인물' },
    { href: '#hope', label: '희망의 조각' },
  ]
  return (
    <nav className="nav">
      <div className="nav-logo-pane">
        <img src="/characters/로고.webp" alt="로고" className="nav-logo-img"
          onError={(e) => { e.currentTarget.style.display = 'none' }} />
        <div className="nav-logo-text">다크판타지 속 아이를 주웠다</div>
      </div>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.href}><a href={l.href}>{l.label}</a></li>
        ))}
      </ul>
      <div className="nav-right-pane">
        {userName && <div className="nav-user">◆ {userName}</div>}
        <button
          type="button"
          className={`nav-bgm-btn${bgmOn ? ' active' : ''}`}
          onClick={onToggleBgm}
          title={bgmOn ? 'BGM 끄기' : 'BGM 켜기'}
          aria-label={bgmOn ? 'BGM 끄기' : 'BGM 켜기'}
        >
          {/* 스테인드글라스 보석 */}
          <span className="bgm-gem-wrap">
            <span className="bgm-gem" />
            <span className="bgm-gem-glow" />
          </span>
          {/* 음파 바 4개 */}
          <span className="bgm-bars">
            <span className="bgm-bar" />
            <span className="bgm-bar" />
            <span className="bgm-bar" />
            <span className="bgm-bar" />
          </span>
          {/* 텍스트 라벨 */}
          <span className="bgm-label">{bgmOn ? 'BGM ON' : 'BGM OFF'}</span>
        </button>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-arch-bg" />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 40% at 50% 30%, rgba(90,6,16,0.14) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 30% 25% at 20% 70%, rgba(6,14,66,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: '25%', bottom: 0, width: '1px', background: 'rgba(12,12,12,0.9)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: '75%', bottom: 0, width: '1px', background: 'rgba(12,12,12,0.9)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '33%', left: 0, right: 0, height: '1px', background: 'rgba(12,12,12,0.6)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '66%', left: 0, right: 0, height: '1px', background: 'rgba(12,12,12,0.6)', pointerEvents: 'none' }} />
      <div className="hero-content">
        <div className="hero-glass-badge">
          <div className="hero-gem-sm" />
          세계관 소개
          <div className="hero-gem-sm" />
        </div>
        <h1 className="hero-title">
          다크판타지 속<br />
          <span className="accent">아이를 주웠다</span>
        </h1>
        <div className="hero-title-sub">Made by Kunio</div>
        <p className="hero-verse">
          <strong>희망이 선택한 자는</strong><br />
          <em>모든 절망의 근원을 주웠다</em>
        </p>
        <div className="hero-cta">
          <a href="#world" className="glass-btn glass-btn-ruby">⬧ 세계관 탐험하기</a>
          <a href="#characters" className="glass-btn glass-btn-dark">등장인물 보기</a>
        </div>
      </div>
    </section>
  )
}

function WorldSection() {
  return (
    <div className="glass-section world-section" id="world" style={{ '--section-accent': 'rgba(90,6,16,0.35)', '--section-accent-l': '#8a0f1a' } as React.CSSProperties}>
      <div className="gs-inner">
        <div className="lancet-header reveal">
          <div className="lh-line" />
          <div className="lh-center">
            <span className="lh-eyebrow">Lore Codex</span>
            <h2 className="lh-title">그란디아 왕국</h2>
            <div className="lh-subtitle">저주받은 세계의 기록</div>
          </div>
          <div className="lh-line r" />
        </div>
        <div className="lore-mosaic reveal">
          {LORE_TILES.map((t, i) => (
            <div key={i} className={`lore-tile${t.wide ? ' wide' : ''}`} style={{ '--tile-color': t.bg, '--gem-color': t.color } as React.CSSProperties}>
              <div className="lore-tile-gem" style={{ '--gem-color': t.color, background: t.color, boxShadow: `0 0 8px ${t.color}` } as React.CSSProperties} />
              <div className="lore-tile-title">{t.title}</div>
              <p className="lore-tile-text">{t.text}</p>
              <span className="lore-tile-tag">{t.tag}</span>
            </div>
          ))}
        </div>
        <div className="glass-table-wrap reveal">
          <table className="glass-table">
            <thead>
              <tr>
                <th>마법 계통</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              {MAGIC_ROWS.map((r, i) => (
                <tr key={i}><td>{r.name}</td><td>{r.desc}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function RegionsSection() {
  const mapW = 400, mapH = 380
  // 루인하르트(III)를 기준으로 동서남북/특수 지점 연결
  const conns = [
    [50, 50, 25, 50], // 루인하르트 - 에델가르드(서)
    [50, 50, 10, 45], // 에델가르드 - 희망의 제단(더 서쪽)
    [50, 50, 75, 50], // 루인하르트 - 루멘의 협곡(동)
    [50, 50, 50, 75], // 루인하르트 - 타르토스(남)
    [50, 50, 50, 30], // 루인하르트 - 아스테리아(북)
    [50, 30, 50, 12], // 아스테리아 - 마지막 용의 둥지(더 북쪽)
  ]
  const allChars = [...CHARS_MAIN, ...CHARS_UNDEAD]
  const [selRegion, setSelRegion] = useState<typeof REGIONS[0] | null>(null)
  const [selChar, setSelChar] = useState<CharType | null>(null)

  const handleRegionClick = (r: typeof REGIONS[0]) => {
    setSelRegion(r)
    if (r.npcId) {
      const found = allChars.find((c) => c.id === r.npcId) ?? null
      setSelChar(found)
    } else {
      setSelChar(null)
    }
  }

  return (
    <>
      <div className="glass-section" id="regions" style={{ '--section-accent': 'rgba(10,26,106,0.5)', '--section-accent-l': '#3a6aee' } as React.CSSProperties}>
        <div className="gs-inner">
          <div className="lancet-header reveal">
            <div className="lh-line" style={{ background: 'linear-gradient(90deg, transparent, rgba(10,26,106,0.5))' }} />
            <div className="lh-center">
              <span className="lh-eyebrow" style={{ color: '#3a6aee' }}>Atlas Mundi</span>
              <h2 className="lh-title">저주받은 대륙</h2>
              <div className="lh-subtitle">그란디아 대륙의 7개 지역 — 지역을 클릭하면 관련 인물을 확인할 수 있습니다</div>
            </div>
            <div className="lh-line r" style={{ background: 'linear-gradient(90deg, rgba(10,26,106,0.5), transparent)' }} />
          </div>
          <div className="atlas-glass reveal">
            <div className="atlas-map-pane">
              <svg className="atlas-map-svg" viewBox={`0 0 ${mapW} ${mapH}`} style={{ cursor: 'pointer' }}>
                {[20, 40, 60, 80].map((p) => (
                  <g key={p}>
                    <line x1={(mapW * p) / 100} y1="0" x2={(mapW * p) / 100} y2={mapH} stroke="#141414" strokeWidth="1" strokeDasharray="4,8" />
                    <line x1="0" y1={(mapH * p) / 100} x2={mapW} y2={(mapH * p) / 100} stroke="#141414" strokeWidth="1" strokeDasharray="4,8" />
                  </g>
                ))}
                {conns.map(([x1, y1, x2, y2], i) => (
                  <line key={i} x1={(mapW * x1) / 100} y1={(mapH * y1) / 100} x2={(mapW * x2) / 100} y2={(mapH * y2) / 100} stroke="rgba(10,26,106,0.3)" strokeWidth="1" strokeDasharray="5,5" />
                ))}
                {REGIONS.map((r, i) => {
                  const x = (mapW * r.cx) / 100
                  const y = (mapH * r.cy) / 100
                  const isCenter = r.num === 'III'
                  const isSelected = selRegion?.num === r.num
                  return (
                    <g key={i} onClick={() => handleRegionClick(r)} style={{ cursor: 'pointer' }}>
                      {/* 선택 시 외부 링 */}
                      {isSelected && <circle cx={x} cy={y} r="22" fill="none" stroke="rgba(58,106,238,0.5)" strokeWidth="1.5" />}
                      {isCenter
                        ? <circle cx={x} cy={y} r={isSelected ? 16 : 14} fill={isSelected ? 'rgba(139,10,26,0.9)' : 'rgba(139,10,26,0.7)'} stroke={isSelected ? '#ff4444' : '#cc2020'} strokeWidth="2" />
                        : <rect x={x - 7} y={y - 7} width="14" height="14" fill={isSelected ? 'rgba(58,106,238,0.8)' : 'rgba(10,26,106,0.5)'} stroke={isSelected ? '#88aaff' : '#3a6aee'} strokeWidth="1.5" transform={`rotate(45 ${x} ${y})`} />
                      }
                      <text x={x} y={y + (r.cy > 50 ? -20 : 22)} textAnchor="middle" fill={isCenter ? '#cc2020' : 'rgba(58,106,238,0.7)'} fontSize="11" fontFamily="Cinzel, serif" letterSpacing="0.05em">
                        {r.name}
                      </text>
                    </g>
                  )
                })}
                <text x="370" y="20" fill="rgba(139,10,26,0.3)" fontSize="9" fontFamily="Cinzel,serif">N</text>
              </svg>
            </div>
            <div className="atlas-entries-pane">
              {REGIONS.map((r, i) => (
                <div
                  className={`region-list-item${selRegion?.num === r.num ? ' active' : ''}${r.npcId ? ' clickable' : ''}`}
                  key={i}
                  onClick={() => handleRegionClick(r)}
                >
                  <div className="rli-num">{r.num}</div>
                  <div className="rli-body">
                    <div className="rli-name">{r.name}</div>
                    <div className="rli-desc">{r.desc}</div>
                    <div className="rli-npc">⚔ {r.npc}{r.npcId && <span className="rli-npc-hint"> · 클릭하여 확인</span>}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 지역 NPC 팝업 */}
          {selRegion && (
            <div className="region-popup reveal visible">
              <div className="rp-header">
                <span className="rp-num">{selRegion.num}</span>
                <div className="rp-title-block">
                  <div className="rp-name">{selRegion.name}</div>
                  <div className="rp-sub">{selRegion.sub}</div>
                </div>
                <button type="button" className="rp-close" onClick={() => { setSelRegion(null); setSelChar(null) }}>✕</button>
              </div>
              <div className="rp-body">
                <p className="rp-desc">{selRegion.desc}</p>
                {selChar && (
                  <div className="rp-char-row" onClick={() => { /* 캐릭터 모달은 CharsSection에서 관리 */ }}>
                    <img src={`/characters/${selChar.id}_thumb.webp`} alt={selChar.name} className="rp-char-img" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                    <div className="rp-char-info">
                      <div className="rp-char-name">{selChar.name}</div>
                      <div className="rp-char-title">{selChar.title}</div>
                      <div className="rp-char-trait">{selChar.traits[0]}</div>
                    </div>
                  </div>
                )}
                {!selChar && <div className="rp-no-char">⊠ 연결된 인물 기록 없음</div>}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* CharModal은 CharsSection에서만 관리 */}
    </>
  )
}

function CombatSection() {
  return (
    <div className="glass-section" id="combat" style={{ '--section-accent': 'rgba(122,74,0,0.5)', '--section-accent-l': '#e08a00' } as React.CSSProperties}>
      <div className="gs-inner">
        <div className="lancet-header reveal">
          <div className="lh-line" style={{ background: 'linear-gradient(90deg, transparent, rgba(122,74,0,0.5))' }} />
          <div className="lh-center">
            <span className="lh-eyebrow" style={{ color: '#e08a00' }}>Gradus Bellum</span>
            <h2 className="lh-title">전투력 체계</h2>
            <div className="lh-subtitle">흔적으로 새겨진 힘의 서열</div>
          </div>
          <div className="lh-line r" style={{ background: 'linear-gradient(90deg, rgba(122,74,0,0.5), transparent)' }} />
        </div>
        <div className="rank-glass-grid reveal">
          {RANKS.map((r, i) => (
            <div className={`rank-glass-row ${r.cls}`} key={i}>
              <div className="rgr-left">
                <div className="rgr-glyph">{r.g}</div>
                <div className="rgr-name">{r.kr}</div>
                <div className="rgr-en">{r.en}</div>
              </div>
              <div className="rgr-right">
                <p className="rgr-desc">{r.desc}</p>
                <div className="rgr-tags">{r.ex.map((e, ei) => <span className="rgr-tag" key={ei}>{e}</span>)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CharCard({ char, onClick }: { char: CharType; onClick: (c: CharType) => void }) {
  const rankColors: Record<string, string> = { 'rg-god': '#c8941a', 'rg-mad': '#cc2020', 'rg-crack': '#7090b0', 'rg-deep': '#9a7a30', 'rg-carve': '#4a6878', '': '#888' }
  const rc = rankColors[char.rankCls] ?? '#888'
  const isUndead = char.type === '망자 등장인물'
  // 리디아 성장 단계 — 카드에서 기본은 성인기
  const defaultStage = char.stages ? char.stages[char.stages.length - 1] : null
  const [stageKey, setStageKey] = useState(defaultStage?.key ?? '')
  const currentStage = char.stages?.find((s) => s.key === stageKey) ?? defaultStage
  const thumbSrc = currentStage ? `/characters/${currentStage.thumbFile}` : `/characters/${char.id}_thumb.webp`

  return (
    <div className="relic-card reveal" onClick={() => onClick(char)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onClick(char)}>
      <div className="relic-glass-panel">
        <img src={thumbSrc} alt={char.name} className="relic-img" onError={(e) => { e.currentTarget.style.display = 'none' }} loading="lazy" />
        {/* 리디아 성장 단계 탭 */}
        {char.stages && (
          <div className="card-stage-tabs" onClick={(e) => e.stopPropagation()}>
            {char.stages.map((s) => (
              <button
                key={s.key}
                type="button"
                className={`card-stage-tab${stageKey === s.key ? ' active' : ''}`}
                onClick={(e) => { e.stopPropagation(); setStageKey(s.key) }}
              >{s.label}</button>
            ))}
          </div>
        )}
        <div className="relic-type-badge" style={{ color: isUndead ? 'rgba(106,42,106,0.9)' : 'rgba(204,26,42,0.9)', borderColor: isUndead ? 'rgba(106,42,106,0.5)' : 'rgba(204,26,42,0.4)' }}>
          {isUndead ? '망자' : '등장인물'}
        </div>
        <div className="relic-name-band">
          <div className="relic-char-name">{char.name}</div>
          {char.rank !== '측정불가' && <div className="relic-rank-badge" style={{ color: rc }}>{char.rank}</div>}
        </div>
      </div>
      <div className="relic-body">
        <div className="relic-title">{char.title}</div>
        <div className="relic-meta">
          <span className="relic-meta-item">{char.species}</span>
          <span className="relic-meta-item">{char.gender}</span>
        </div>
        <div className="relic-lead-rule" />
        <div className="relic-skill-name">⬧ {char.ability}</div>
        <div className="relic-skill-desc">{char.abilityDesc.length > 80 ? char.abilityDesc.slice(0, 80) + '...' : char.abilityDesc}</div>
        <div className="relic-traits">{char.traits.map((t, i) => <span className="relic-trait" key={i}>{t}</span>)}</div>
        {char.hopeShard && <div className="relic-hope">◈ 희망의 조각 「{char.hopeShard}」</div>}
      </div>
    </div>
  )
}

function CharModal({ char, onClose }: { char: CharType | null; onClose: () => void }) {
  if (!char) return null
  const rankColors: Record<string, string> = { 'rg-god': '#3a2a08', 'rg-mad': '#380606', 'rg-crack': '#1c2830', 'rg-deep': '#2e200a', 'rg-carve': '#181e20', '': '#222' }
  const rc = rankColors[char.rankCls] ?? '#222'

  // 리디아 성장 단계
  const defaultStage = char.stages ? char.stages[char.stages.length - 1] : null
  const [stageKey, setStageKey] = useState(defaultStage?.key ?? '')
  const currentStage = char.stages?.find((s) => s.key === stageKey) ?? defaultStage

  // 뮤즈레이 본모습 — 키워드 잠금
  const [showTrue, setShowTrue] = useState(false)
  const [keyword, setKeyword] = useState('')
  const [keywordError, setKeywordError] = useState(false)
  const [unlocked, setUnlocked] = useState(false)

  const tryUnlock = () => {
    if (keyword.trim() === '메리 수') {
      setUnlocked(true)
      setShowTrue(true)
      setKeywordError(false)
    } else {
      setKeywordError(true)
      setTimeout(() => setKeywordError(false), 1200)
    }
  }

  const fullSrc = currentStage
    ? `/characters/${currentStage.fullFile}`
    : showTrue && char.trueForm
    ? `/characters/${char.trueForm.fullFile}`
    : `/characters/${char.id}_full.webp`

  const activePersonality = currentStage ? currentStage.personality : char.personality

  return (
    <div className="modal-glass-bg" onClick={onClose} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Escape' && onClose()}>
      <div className="modal-glass-frame" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose}>✕</button>
        <div className="modal-portrait-glass">
          <img
            key={fullSrc}
            src={fullSrc}
            alt={char.name}
            className="modal-portrait-img modal-portrait-img--fade"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
            loading="lazy"
          />
          <div className="modal-portrait-grad" />
          {/* 리디아 성장 단계 탭 — 초상화 우측 상단 */}
          {char.stages && (
            <div className="modal-stage-tabs">
              {char.stages.map((s) => (
                <button
                  key={s.key}
                  type="button"
                  className={`modal-stage-tab${stageKey === s.key ? ' active' : ''}`}
                  onClick={() => setStageKey(s.key)}
                >{s.label}</button>
              ))}
            </div>
          )}
          {/* 뮤즈레이 본모습 토글 — 키워드 잠금 */}
          {char.trueForm && (
            unlocked ? (
              <button
                type="button"
                className={`modal-true-form-btn${showTrue ? ' active' : ''}`}
                onClick={() => setShowTrue((v) => !v)}
              >
                {showTrue ? '◈ 지배자 형태' : '◇ 지배자 형태'}
              </button>
            ) : (
              <div className="modal-keyword-box">
                <input
                  type="text"
                  className={`modal-keyword-input${keywordError ? ' error' : ''}`}
                  placeholder="??? 입력..."
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && tryUnlock()}
                  onClick={(e) => e.stopPropagation()}
                  maxLength={10}
                />
                <button
                  type="button"
                  className="modal-keyword-btn"
                  onClick={(e) => { e.stopPropagation(); tryUnlock() }}
                >⊢</button>
              </div>
            )
          )}
          <div className="modal-portrait-info">
            <div className="modal-char-name">{char.name}</div>
            <div className="modal-char-title">
              {char.trueForm && showTrue ? char.trueForm.label : char.title}
            </div>
          </div>
        </div>
        <div className="modal-body-content">
          {/* 뮤즈레이: 잠긴 상태면 표면 정보만, 해제 후엔 진짜 정보 */}
          {char.hiddenData && !unlocked ? (
            // ── 잠금 상태 ──
            <>
              <div className="modal-stats-grid">
                <div className="mstat"><strong>종족</strong>{char.species}</div>
                <div className="mstat"><strong>성별</strong>{char.gender}</div>
                <div className="mstat full"><strong>출생</strong>{char.birth}</div>
                <div className="mstat full" style={{ gridColumn: '1/-1' }}><strong>외형</strong>{char.app}</div>
              </div>
              <div className="modal-sec-label">⬧ {char.ability}</div>
              <p className="modal-text">{char.abilityDesc}</p>
              <div className="modal-sec-label">성격 · 말투</div>
              <p className="modal-text">{char.personality}</p>
              <div className="modal-sec-label">기록</div>
              <p className="modal-text">{char.lore}</p>
              <div className="modal-trait-row">{char.traits.map((t, i) => <span className="modal-trait" key={i}>{t}</span>)}</div>
              {/* 잠금 안내 */}
              <div className="modal-locked-hint">
                <span className="modal-locked-icon">⊠</span>
                <span>이 인물의 진실은 봉인되어 있습니다</span>
              </div>
            </>
          ) : char.hiddenData && unlocked ? (
            // ── 해제 상태 — 진짜 정보 ──
            <>
              <div className="modal-stats-grid">
                <div className="mstat"><strong>종족</strong>{char.hiddenData.species}</div>
                <div className="mstat"><strong>성별</strong>{char.gender}</div>
                <div className="mstat full"><strong>출생</strong>{char.birth}</div>
                <div className="mstat full" style={{ gridColumn: '1/-1' }}><strong>외형</strong>{char.hiddenData.app}</div>
              </div>
              <div className="modal-sec-label">⬧ {char.hiddenData.ability}</div>
              <p className="modal-text">{char.hiddenData.abilityDesc}</p>
              <div className="modal-sec-label">성격 · 말투</div>
              <p className="modal-text">{char.hiddenData.personality}</p>
              <div className="modal-sec-label">기록</div>
              <p className="modal-text">{char.hiddenData.lore}</p>
              <div className="modal-trait-row">{char.hiddenData.traits.map((t, i) => <span className="modal-trait" key={i}>{t}</span>)}</div>
            </>
          ) : (
            // ── 일반 캐릭터 ──
            <>
              <div className="modal-stats-grid">
                <div className="mstat"><strong>종족</strong>{char.species}</div>
                <div className="mstat"><strong>성별</strong>{char.gender}</div>
                <div className="mstat full"><strong>출생</strong>{char.birth}</div>
                {char.rank !== '측정불가' && <div className="mstat"><strong>등급</strong><span style={{ color: rc }}>{char.rank}</span></div>}
                {char.hopeShard && <div className="mstat"><strong style={{ color: '#0e5a22' }}>조각</strong><span style={{ color: '#0e5a22' }}>「{char.hopeShard}」</span></div>}
                <div className={`mstat${!char.hopeShard && char.rank === '측정불가' ? ' full' : ''}`} style={{ gridColumn: '1/-1' }}><strong>외형</strong>{char.app}</div>
              </div>
              <div className="modal-sec-label">⬧ {char.ability}</div>
              <p className="modal-text">{char.abilityDesc}</p>
              <div className="modal-sec-label">성격 · 말투</div>
              <p className="modal-text">{activePersonality}</p>
              <div className="modal-sec-label">기록</div>
              <p className="modal-text">{char.lore}</p>
              <div className="modal-trait-row">{char.traits.map((t, i) => <span className="modal-trait" key={i}>{t}</span>)}</div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function CharsSection() {
  const [tab, setTab] = useState<'all' | 'main' | 'undead'>('all')
  const [rankF, setRankF] = useState('all')
  const [sel, setSel] = useState<CharType | null>(null)
  const tabs = [{ id: 'all' as const, label: '전체' }, { id: 'main' as const, label: '주요 등장인물' }, { id: 'undead' as const, label: '망자 등장인물' }]
  const rankBtns = [{ id: 'all', label: '전체' }, { id: '신흔', label: '신흔' }, { id: '광흔', label: '광흔' }, { id: '열흔', label: '열흔' }, { id: '심흔', label: '심흔+' }, { id: '각흔', label: '각흔' }, { id: '측정불가', label: '불가' }]
  let chars: CharType[] = tab === 'all' ? [...CHARS_MAIN, ...CHARS_UNDEAD] : tab === 'main' ? CHARS_MAIN : CHARS_UNDEAD
  if (rankF !== 'all') chars = chars.filter((c) => c.rank.includes(rankF))

  // 탭/필터 변경 시 새로 렌더링된 카드들을 즉시 visible 처리
  useEffect(() => {
    const t = setTimeout(() => {
      document.querySelectorAll('.relic-card.reveal:not(.visible)').forEach((el) => {
        el.classList.add('visible')
      })
    }, 50)
    return () => clearTimeout(t)
  }, [tab, rankF])
  return (
    <div className="glass-section chars-section" id="characters" style={{ '--section-accent': 'rgba(6,46,14,0.4)', '--section-accent-l': '#0e5a22' } as React.CSSProperties}>
      <div className="gs-inner">
        <div className="lancet-header reveal">
          <div className="lh-line" style={{ background: 'linear-gradient(90deg, transparent, rgba(6,46,14,0.4))' }} />
          <div className="lh-center">
            <span className="lh-eyebrow" style={{ color: '#0e5a22' }}>Bestiarum Vocabulum</span>
            <h2 className="lh-title">등장인물</h2>
            <div className="lh-subtitle">절망 속에서 이름을 새긴 자들의 기록</div>
          </div>
          <div className="lh-line r" style={{ background: 'linear-gradient(90deg, rgba(6,46,14,0.4), transparent)' }} />
        </div>
        <div className="char-filter-row" onClick={(e) => e.stopPropagation()}>
          {tabs.map((t) => (
            <button key={t.id} type="button" className={`filter-glass-btn${tab === t.id ? ' active' : ''}`} onClick={(e) => { e.stopPropagation(); setTab(t.id); setRankF('all'); setSel(null); }}>{t.label}</button>
          ))}
        </div>
        <div className="rank-filter-row-g" onClick={(e) => e.stopPropagation()}>
          {rankBtns.map((r) => (
            <button key={r.id} type="button" className={`rank-fg${rankF === r.id ? ' active' : ''}`} onClick={(e) => { e.stopPropagation(); setRankF(r.id); setSel(null); }}>{r.label}</button>
          ))}
        </div>
        <div className="char-reliquary">
          {chars.length === 0 ? (
            <div className="char-empty-state">
              해당 조건에 맞는 인물이 없습니다.
            </div>
          ) : (
            chars.map((c) => <CharCard key={c.id} char={c} onClick={setSel} />)
          )}
        </div>
      </div>
      {sel && <CharModal char={sel} onClose={() => setSel(null)} />}
    </div>
  )
}

function HopeSection() {
  return (
    <div className="glass-section hope-section" id="hope" style={{ '--section-accent': 'rgba(46,6,80,0.4)', '--section-accent-l': '#5a1590' } as React.CSSProperties}>
      <div className="gs-inner">
        <div className="lancet-header reveal">
          <div className="lh-line" style={{ background: 'linear-gradient(90deg, transparent, rgba(46,6,80,0.4))' }} />
          <div className="lh-center">
            <span className="lh-eyebrow" style={{ color: '#5a1590' }}>Fragmenta Spei</span>
            <h2 className="lh-title">희망의 조각</h2>
            <div className="lh-subtitle">세계의 마지막 빛 다섯 조각</div>
          </div>
          <div className="lh-line r" style={{ background: 'linear-gradient(90deg, rgba(46,6,80,0.4), transparent)' }} />
        </div>
        <div className="hope-glass-grid reveal">
          {HOPE_SHARDS.map((s, i) => (
            <div key={i} className="hope-glass-col" style={{ '--hope-glass': s.glass, '--hope-accent': s.c1, '--hope-color': `radial-gradient(circle at 30% 25%, ${s.c1}, ${s.c2})` } as React.CSSProperties}>
              <div className="hope-lancet" style={{ '--hope-color': `radial-gradient(circle at 30% 25%, ${s.c1}cc, ${s.c2})`, animationDelay: `${i * 0.5}s` } as React.CSSProperties}>
                <div className="hope-lancet-inner" style={{ background: `radial-gradient(circle at 30% 25%, ${s.c1}cc, ${s.c2})` }} />
                <div className="hope-lancet-frame" />
              </div>
              <div className="hope-shard-name" style={{ color: s.c1 }}>「{s.name}」</div>
              <div className="hope-shard-en">{s.en}</div>
              <div className="hope-shard-holder">{s.holder}</div>
              <div className="hope-shard-quote" style={{ color: s.c1 }}>&quot;{s.quote}&quot;</div>
            </div>
          ))}
        </div>
        <div className="hope-altar reveal">
          <div className="hope-altar-bar" />
          <div className="hope-altar-body">
            <div className="hope-altar-title">희망의 제단 — 세 가지 선택</div>
            <p className="hope-altar-text">
              제단에 오른 자에게는 세 가지 방법이 주어진다.<br />
              <em>「희망이 선택한 자」의 희생</em>—<br />
              <em>「모든 절망의 근원」의 희생</em>—<br />
              <em>혹은 다섯 희망의 조각을 제물로 바치는 것.</em><br /><br />
              어떤 선택을 하든, 세계는 영원히 바뀐다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-pane">
        <div className="footer-title">다크판타지 속 아이를 주웠다</div>
        <div className="footer-sub">&quot;희망이 선택한 자는, 모든 절망의 근원을 주웠다&quot;</div>
      </div>
      <div className="footer-divider-v" />
      <div className="footer-pane">
        <div className="footer-credit">Made by Kunio</div>
        <div className="footer-credit">Website created by 몽유도인</div>
      </div>
      <div className="footer-divider-v" />
      <div className="footer-pane">
        <p className="footer-info">
          500년의 저주가 세계를 갉아먹는다.<br />
          희망의 불꽃은 꺼지지 않았다.
        </p>
      </div>
    </footer>
  )
}

/* ═══════════════════════ APP ═══════════════════════ */

const INTRO_LINES = [
  '500년전 시작된 원인불명의 저주',
  '희망이 선택한 자는',
  '모든 절망의 근원을 주웠다.',
]

function IntroTyping({ onDone }: { onDone: () => void }) {
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [out, setOut] = useState(false)

  useEffect(() => {
    const line = INTRO_LINES[lineIdx]
    if (charIdx < line.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), 65)
      return () => clearTimeout(t)
    }
    // 줄 완료 — 다음 줄로
    if (lineIdx < INTRO_LINES.length - 1) {
      const t = setTimeout(() => { setLineIdx((l) => l + 1); setCharIdx(0) }, 700)
      return () => clearTimeout(t)
    }
    // 전부 완료
    const t = setTimeout(() => { setOut(true); setTimeout(onDone, 900) }, 1200)
    return () => clearTimeout(t)
  }, [charIdx, lineIdx, onDone])

  return (
    <div className={`intro-overlay${out ? ' out' : ''}`}>
      <div className="intro-lines">
        {INTRO_LINES.slice(0, lineIdx + 1).map((line, i) => (
          <div key={i} className={`intro-line${i < lineIdx ? ' done' : ''}`}>
            {i < lineIdx ? line : line.slice(0, charIdx)}
            {i === lineIdx && <span className="intro-cursor" />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  const [entered, setEntered] = useState(false)
  const [showIntro, setShowIntro] = useState(false)
  const [userName, setUserName] = useState('')
  const [bgmOn, setBgmOn] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handleEnter = useCallback((n: string) => {
    setUserName(n)
    setShowIntro(true)
  }, [])

  const handleIntroDone = useCallback(() => {
    setEntered(true)
    setShowIntro(false)
  }, [])

  // 앱 로딩 시 BGM 자동 재생 시도 (로딩 화면부터)
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.35
    audio.loop = true
    audio.play()
      .then(() => setBgmOn(true))
      .catch(() => { /* 브라우저 자동재생 정책으로 막힌 경우 무시 */ })
  }, [])

  const toggleBgm = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (bgmOn) {
      audio.pause()
      setBgmOn(false)
    } else {
      audio.play().then(() => setBgmOn(true)).catch(() => {})
    }
  }, [bgmOn])

  useEffect(() => {
    if (!entered) return
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.06 }
    )
    const t = setTimeout(() => document.querySelectorAll('.reveal').forEach((el) => obs.observe(el)), 100)
    return () => { clearTimeout(t); obs.disconnect() }
  }, [entered])

  return (
    <>
      <style>{voidCss}</style>
      <style>{BGM_CSS}</style>
      {/* BGM 오디오 — /public/bgm.mp3 에 파일 배치 */}
      <audio ref={audioRef} src="/bgm.mp3" preload="auto" />
      {!entered && !showIntro && <LoadingScreen onEnter={handleEnter} />}
      {showIntro && <IntroTyping onDone={handleIntroDone} />}
      {entered && (
        <>
          <div className="lead-overlay" />
          <div className="vignette" />
          <Nav userName={userName} bgmOn={bgmOn} onToggleBgm={toggleBgm} />
          <main>
            <Hero />
            <WorldSection />
            <RegionsSection />
            <CombatSection />
            <CharsSection />
            <HopeSection />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}