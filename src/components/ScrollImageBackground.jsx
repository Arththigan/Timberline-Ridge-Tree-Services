import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ScrollImageBackground.css';

const IMAGES = [
  'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=2000&q=76',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=76',
  'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=2000&q=76',
  'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=2000&q=76',
];

function ParallaxImage({ src, progress, range, direction = 1 }) {
  const opacity = useTransform(progress, range, [0, 0.085, 0.085, 0]);
  const y = useTransform(progress, [range[0], range[3]], [`${direction * -9}%`, `${direction * 9}%`]);
  const scale = useTransform(progress, [range[0], range[3]], [1.08, 1.15]);

  return (
    <motion.img
      className="scroll-service-image"
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      style={{ opacity, y, scale }}
    />
  );
}

export default function ScrollImageBackground() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="scroll-service-background" aria-hidden="true">
      <ParallaxImage src={IMAGES[0]} progress={scrollYProgress} range={[0.08, 0.14, 0.3, 0.37]} direction={1} />
      <ParallaxImage src={IMAGES[1]} progress={scrollYProgress} range={[0.28, 0.36, 0.52, 0.6]} direction={-1} />
      <ParallaxImage src={IMAGES[2]} progress={scrollYProgress} range={[0.5, 0.58, 0.73, 0.81]} direction={1} />
      <ParallaxImage src={IMAGES[3]} progress={scrollYProgress} range={[0.72, 0.8, 0.94, 1]} direction={-1} />
    </div>
  );
}
