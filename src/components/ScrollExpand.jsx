import { useCallback, useEffect, useRef } from 'react';
import Prism from './Prism';
import './ScrollExpand.css';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const smoothstep = (from, to, value) => {
  const t = clamp((value - from) / (to - from || 1e-6), 0, 1);
  return t * t * (3 - 2 * t);
};

export default function ScrollExpand({
  src,
  alt = '',
  title = '',
  scrollHint = '',
  startWidth = 58,
  startHeight = 60,
  startRadius = 28,
  endRadius = 0,
  mediaZoom = 1.22,
  scrollDistance = 1.05,
  holdDistance = 0.25,
  smoothing = 0.08,
  overlayScrim = 0.58,
  children,
}) {
  const trackRef = useRef(null);
  const stageRef = useRef(null);
  const frameRef = useRef(null);
  const mediaRef = useRef(null);
  const titleRef = useRef(null);
  const overlayRef = useRef(null);
  const scrimRef = useRef(null);
  const hintRef = useRef(null);

  const applyProgress = useCallback((progress) => {
    const frame = frameRef.current;
    const media = mediaRef.current;
    if (!frame || !media) return;
    const eased = smoothstep(0, 1, progress);
    const width = startWidth + (100 - startWidth) * eased;
    const height = startHeight + (100 - startHeight) * eased;
    const insetX = (100 - width) / 2;
    const insetY = (100 - height) / 2;
    const radius = startRadius + (endRadius - startRadius) * eased;
    frame.style.clipPath = `inset(${insetY}% ${insetX}% ${insetY}% ${insetX}% round ${radius}px)`;
    media.style.transform = `scale(${mediaZoom + (1 - mediaZoom) * eased})`;

    if (scrimRef.current) scrimRef.current.style.opacity = overlayScrim * eased;
    if (titleRef.current) {
      const out = smoothstep(0.3, 0.72, progress);
      titleRef.current.style.opacity = 1 - out;
      titleRef.current.style.transform = `translate3d(0, ${-32 * out}px, 0) scale(${1 + 0.05 * out})`;
    }
    if (hintRef.current) {
      const out = smoothstep(0, 0.1, progress);
      hintRef.current.style.opacity = 1 - out;
    }
    if (overlayRef.current) {
      const enter = smoothstep(0.66, 0.96, progress);
      overlayRef.current.style.opacity = enter;
      overlayRef.current.style.transform = `translate3d(0, ${24 * (1 - enter)}px, 0)`;
    }
  }, [endRadius, mediaZoom, overlayScrim, startHeight, startRadius, startWidth]);

  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage) return undefined;
    let frameId = 0;
    let current = 0;
    let target = 0;
    let running = false;

    const measure = () => {
      const viewportHeight = window.innerHeight;
      stage.style.height = `${viewportHeight}px`;
      track.style.height = `${viewportHeight * (1 + scrollDistance + holdDistance)}px`;
      stage.style.setProperty('--se-title-size', `${clamp(window.innerWidth * 0.066, 27, 82)}px`);
    };
    const read = () => clamp(-track.getBoundingClientRect().top / (window.innerHeight * scrollDistance), 0, 1);
    const tick = () => {
      const follow = smoothing <= 0 ? 1 : 1 - Math.exp(-1 / (60 * smoothing));
      current += (target - current) * follow;
      if (Math.abs(target - current) < 0.0004) current = target;
      applyProgress(current);
      running = current !== target;
      frameId = running ? requestAnimationFrame(tick) : 0;
    };
    const update = () => {
      target = read();
      if (!running) {
        running = true;
        frameId = requestAnimationFrame(tick);
      }
    };
    const resize = () => { measure(); target = read(); current = target; applyProgress(current); };

    measure();
    applyProgress(0);
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', resize);
    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', resize);
    };
  }, [applyProgress, holdDistance, scrollDistance, smoothing]);

  return (
    <div ref={trackRef} className="scroll-expand__track">
      <div ref={stageRef} className="scroll-expand__stage">
        <div className="scroll-expand__prism" aria-hidden="true">
          <Prism timeScale={0.2} scale={3.4} glow={0.52} noise={0.035} hueShift={1.9} suspendWhenOffscreen />
        </div>
        <div ref={frameRef} className="scroll-expand__frame">
          <img ref={mediaRef} className="scroll-expand__media" src={src} alt={alt} draggable="false" />
          <div ref={scrimRef} className="scroll-expand__scrim" />
          <div ref={overlayRef} className="scroll-expand__overlay">{children}</div>
        </div>
        <div ref={titleRef} className="scroll-expand__title">{title}</div>
        <div ref={hintRef} className="scroll-expand__hint">{scrollHint}</div>
      </div>
    </div>
  );
}
