import { useEffect, useRef } from 'react';
import { Mesh, Program, Renderer, Triangle } from 'ogl';
import './Prism.css';

export default function Prism({ timeScale = .2, glow = .55, noise = .035, scale = 3.4, hueShift = 1.9, suspendWhenOffscreen = true }) {
  const rootRef = useRef(null);
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const renderer = new Renderer({ dpr: Math.min(1.5, devicePixelRatio || 1), alpha: true, antialias: false });
    const gl = renderer.gl;
    gl.disable(gl.DEPTH_TEST);
    Object.assign(gl.canvas.style, { position: 'absolute', inset: '0', width: '100%', height: '100%', display: 'block' });
    root.appendChild(gl.canvas);
    const resolution = new Float32Array(2);
    const program = new Program(gl, {
      vertex: `attribute vec2 position;void main(){gl_Position=vec4(position,0.,1.);}`,
      fragment: `precision highp float;uniform vec2 r;uniform float t,g,n,s,h;float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}mat2 rt(float a){float c=cos(a),q=sin(a);return mat2(c,-q,q,c);}void main(){vec2 u=(gl_FragCoord.xy-.5*r)/min(r.x,r.y)*s;u*=rt(t*.07);float a=atan(u.y,u.x),d=length(u);float p=cos(floor(.5+a/6.28318*3.)*6.28318/3.-a)*d;float e=exp(-22.*abs(p-.72));float i=exp(-6.*abs(p-.4))*.45;float z=pow(max(0.,cos(a*3.+t*.18)),12.)*exp(-1.7*d);vec3 c=.5+.5*cos(p*7.-t*.12+vec3(0.,2.,4.)+h);c*=e+i+z*.5;c+=vec3(.12,.7,.36)*exp(-3.*d)*.16*g;c+=(rnd(gl_FragCoord.xy+t)-.5)*n;gl_FragColor=vec4(clamp(c,0.,1.),clamp((e+i+z)*g,0.,.68));}`,
      transparent: true,
      uniforms: { r: { value: resolution }, t: { value: 0 }, g: { value: glow }, n: { value: noise }, s: { value: scale }, h: { value: hueShift } }
    });
    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });
    const resize = () => { renderer.setSize(root.clientWidth || 1, root.clientHeight || 1); resolution[0] = gl.drawingBufferWidth; resolution[1] = gl.drawingBufferHeight; };
    const ro = new ResizeObserver(resize); ro.observe(root); resize();
    const started = performance.now(); let raf = 0; let visible = true;
    const render = now => { program.uniforms.t.value = (now - started) * .001 * timeScale; renderer.render({ scene: mesh }); if (visible) raf = requestAnimationFrame(render); };
    const play = () => { if (!raf) { visible = true; raf = requestAnimationFrame(render); } };
    const pause = () => { visible = false; cancelAnimationFrame(raf); raf = 0; };
    let io;
    if (suspendWhenOffscreen) { io = new IntersectionObserver(([entry]) => entry.isIntersecting ? play() : pause()); io.observe(root); }
    play();
    return () => { pause(); io?.disconnect(); ro.disconnect(); if (gl.canvas.parentElement === root) root.removeChild(gl.canvas); };
  }, [timeScale, glow, noise, scale, hueShift, suspendWhenOffscreen]);
  return <div ref={rootRef} className="prism-container" aria-hidden="true" />;
}
