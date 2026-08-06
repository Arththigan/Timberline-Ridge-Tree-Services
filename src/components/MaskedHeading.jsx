import { useCallback, useEffect, useId, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import './MaskedHeading.css';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function MaskedHeading({
  text = 'Designed in the details',
  tag = 'h2',
  src = '',
  fillScale = 1.25,
  parallax = 26,
  drift = 18,
  brightness = 1,
  saturation = 1,
  reveal = 'rise',
  trigger = 'view',
  duration = 1.1,
  stagger = 0.09,
  align = 'center',
  weight = 700,
  tracking = -0.03,
  lineHeight = 1.06,
  textScale = 0.115,
  className = '',
  style,
}) {
  const rootRef = useRef(null);
  const measureRef = useRef(null);
  const revealRef = useRef(null);
  const mediaRef = useRef(null);
  const wordRefs = useRef([]);
  const baseRefs = useRef([]);
  const glyphRefs = useRef([]);
  const tweenRef = useRef(null);
  const offsetRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const clipId = `mh-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const words = useMemo(() => String(text).split(/\s+/).filter(Boolean), [text]);
  const settingsRef = useRef({});
  settingsRef.current = { fillScale, parallax, drift, brightness, saturation, textScale };

  const place = useCallback(() => {
    const root = rootRef.current;
    const media = mediaRef.current;
    if (!root || !media) return;
    const settings = settingsRef.current;
    const offset = offsetRef.current;
    const maxX = ((settings.fillScale - 1) / 2) * root.clientWidth;
    const maxY = ((settings.fillScale - 1) / 2) * root.clientHeight;
    media.style.transform = `translate3d(${clamp(offset.x, -maxX, maxX)}px, ${clamp(offset.y, -maxY, maxY)}px, 0) scale(${settings.fillScale})`;
    media.style.filter = `brightness(${settings.brightness}) saturate(${settings.saturation})`;
  }, []);

  const sync = useCallback(() => {
    const root = rootRef.current;
    const measure = measureRef.current;
    if (!root || !measure) return;
    root.style.fontSize = `${clamp(root.clientWidth * settingsRef.current.textScale, 20, 200)}px`;
    const computed = window.getComputedStyle(measure);
    wordRefs.current.forEach((box, index) => {
      const base = baseRefs.current[index];
      const glyph = glyphRefs.current[index];
      if (!box || !base || !glyph) return;
      glyph.setAttribute('x', box.offsetLeft);
      glyph.setAttribute('y', base.offsetTop);
      glyph.style.fontFamily = computed.fontFamily;
      glyph.style.fontSize = computed.fontSize;
      glyph.style.fontWeight = computed.fontWeight;
      glyph.style.letterSpacing = computed.letterSpacing;
    });
    place();
  }, [place]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(root);
    document.fonts?.ready.then(sync).catch(() => {});
    let animationFrame;
    let last = performance.now();
    let clock = 0;
    const frame = (now) => {
      const delta = Math.min(0.05, (now - last) / 1000);
      last = now;
      clock += delta;
      const settings = settingsRef.current;
      const offset = offsetRef.current;
      const ease = 1 - Math.exp(-delta / 0.18);
      offset.x += (offset.tx + Math.sin(clock * 0.21) * settings.drift - offset.x) * ease;
      offset.y += (offset.ty + Math.cos(clock * 0.17) * settings.drift * 0.6 - offset.y) * ease;
      place();
      animationFrame = requestAnimationFrame(frame);
    };
    const move = (event) => {
      const rect = root.getBoundingClientRect();
      offsetRef.current.tx = ((((event.clientX - rect.left) / rect.width) * 2) - 1) * -settingsRef.current.parallax;
      offsetRef.current.ty = ((((event.clientY - rect.top) / rect.height) * 2) - 1) * -settingsRef.current.parallax;
    };
    const leave = () => { offsetRef.current.tx = 0; offsetRef.current.ty = 0; };
    root.addEventListener('pointermove', move);
    root.addEventListener('pointerleave', leave);
    animationFrame = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
      root.removeEventListener('pointermove', move);
      root.removeEventListener('pointerleave', leave);
    };
  }, [place, sync]);

  useEffect(() => {
    const root = rootRef.current;
    const layer = revealRef.current;
    const glyphs = glyphRefs.current.filter(Boolean);
    if (!root || !layer || !glyphs.length) return undefined;
    const play = () => {
      tweenRef.current?.kill();
      if (reveal === 'wipe') {
        tweenRef.current = gsap.fromTo(layer, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration, ease: 'power3.inOut' });
      } else {
        tweenRef.current = gsap.fromTo(glyphs, { y: root.clientHeight * 0.8 }, { y: 0, duration, stagger, ease: 'power4.out' });
      }
    };
    if (trigger === 'view') {
      const observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) { play(); observer.disconnect(); }
      }, { threshold: 0.25 });
      observer.observe(root);
      return () => { observer.disconnect(); tweenRef.current?.kill(); };
    }
    play();
    return () => tweenRef.current?.kill();
  }, [duration, reveal, stagger, trigger, words]);

  const Tag = tag;
  return (
    <Tag ref={rootRef} className={`masked-heading ${className}`.trim()} style={{ textAlign: align, fontWeight: weight, letterSpacing: `${tracking}em`, lineHeight, ...style }}>
      <span ref={measureRef} className="masked-heading__measure">
        {words.map((word, index) => (
          <span key={`${word}-${index}`} ref={(node) => { wordRefs.current[index] = node; }} className="masked-heading__word">
            {word}<i ref={(node) => { baseRefs.current[index] = node; }} className="masked-heading__baseline" />
          </span>
        ))}
      </span>
      <svg className="masked-heading__defs" aria-hidden="true">
        <defs><clipPath id={clipId} clipPathUnits="userSpaceOnUse">
          {words.map((word, index) => <text key={`${word}-${index}`} ref={(node) => { glyphRefs.current[index] = node; }}>{word}</text>)}
        </clipPath></defs>
      </svg>
      <span ref={revealRef} className="masked-heading__reveal">
        <span className="masked-heading__clip" style={{ clipPath: `url(#${clipId})` }}>
          <span ref={mediaRef} className="masked-heading__media"><img className="masked-heading__source" src={src} alt="" draggable="false" /></span>
        </span>
      </span>
    </Tag>
  );
}
