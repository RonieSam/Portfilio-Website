import React, { useState, useEffect, useRef, useCallback } from 'react';
import { personal } from '../data/portfolioData';

// Scramble/decode effect for text
const useTextScramble = (finalText, speed = 40) => {
  const [displayText, setDisplayText] = useState('');
  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  useEffect(() => {
    let currentIndex = 0;
    let scrambleCount = 0;
    const maxScrambles = 3;

    const interval = setInterval(() => {
      if (currentIndex >= finalText.length) {
        setDisplayText(finalText);
        clearInterval(interval);
        return;
      }

      scrambleCount++;
      const revealed = finalText.substring(0, currentIndex);
      const scrambled = finalText.substring(currentIndex).split('').map(c =>
        c === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)]
      ).join('');

      setDisplayText(revealed + scrambled);

      if (scrambleCount >= maxScrambles) {
        currentIndex++;
        scrambleCount = 0;
      }
    }, speed);

    return () => clearInterval(interval);
  }, [finalText, speed]);

  return displayText;
};

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const heroRef = useRef(null);
  const nameFirst = useTextScramble(personal.firstName, 35);
  const nameLast = useTextScramble(personal.lastName, 35);

  const handleMouseMove = useCallback((e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const shapes = [
    { size: 60, delay: 0.1, color: '#ff4400' },
    { size: 40, delay: 0.2, color: '#1e293b' },
    { size: 24, delay: 0.3, color: '#ff4400' },
  ];

  return (
    <section
      ref={heroRef}
      className="min-h-[80vh] flex flex-col justify-center relative border-b border-slate-900 pb-20 overflow-hidden cursor-crosshair"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering && shapes.map((shape, i) => (
        <div
          key={i}
          className="pointer-events-none absolute mix-blend-multiply opacity-20"
          style={{
            width: shape.size,
            height: shape.size,
            border: `2px solid ${shape.color}`,
            transform: `translate(${mousePos.x - shape.size / 2}px, ${mousePos.y - shape.size / 2}px) rotate(${mousePos.x * 0.1}deg)`,
            transition: `transform ${0.3 + shape.delay}s cubic-bezier(0.25, 0.1, 0.25, 1)`,
          }}
        />
      ))}

      {isHovering && (
        <div
          className="pointer-events-none absolute font-mono text-[10px] text-primary font-bold opacity-60"
          style={{
            left: mousePos.x + 20,
            top: mousePos.y - 10,
            transition: 'left 0.1s, top 0.1s',
          }}
        >
          X:{Math.round(mousePos.x)} Y:{Math.round(mousePos.y)}
        </div>
      )}

      <div className="relative z-10">
        <h1 className="text-7xl md:text-[10rem] lg:text-[14rem] font-bold leading-[0.8] tracking-tighter select-none">
          <span
            className="inline-block hover:text-primary transition-colors duration-300 cursor-pointer"
            style={{ fontVariantNumeric: 'tabular-nums' }}
          >
            {nameFirst}
          </span>
          <br />
          <span
            className="ml-20 md:ml-40 lg:ml-60 inline-block hover:text-primary transition-colors duration-300 cursor-pointer"
            style={{ fontVariantNumeric: 'tabular-nums' }}
          >
            {nameLast}
          </span>
        </h1>

        <div className="absolute -right-4 top-0 lg:right-0 stamp-container hidden sm:block">
          <svg className="rotating-text w-full h-full" viewBox="0 0 100 100">
            <path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" id="circlePath"></path>
            <text className="text-[8px] font-bold uppercase fill-primary tracking-[2px]">
              <textPath href="#circlePath">
                {personal.heroStampText}
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      <div className="w-full h-px bg-slate-900 my-12 relative z-10"></div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
        <p className="font-serif-italic text-2xl md:text-4xl text-slate-700 max-w-2xl">
          {personal.tagline}
        </p>
        <div className="font-mono text-sm space-y-1 border-l-2 border-primary pl-4">
          <p>LAT // {personal.location.lat}</p>
          <p>LONG // {personal.location.long}</p>
          <p>YEAR // {personal.currentYear}</p>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary opacity-40"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary opacity-40"></div>
      <div className="absolute bottom-20 left-0 w-8 h-8 border-l-2 border-b-2 border-primary opacity-40"></div>
      <div className="absolute bottom-20 right-0 w-8 h-8 border-r-2 border-b-2 border-primary opacity-40"></div>
    </section>
  );
};

export default Hero;
