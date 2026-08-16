'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { portfolioData } from '../data/portofolio';

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.hero-title', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
    
    gsap.from('.content-card', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });
  }, { scope: container });

  return (
    <main ref={container} className="min-h-screen bg-black text-white px-8 py-12">
      <h1 className="hero-title text-6xl font-extrabold tracking-tight mb-4">
        {portfolioData.name.toUpperCase()}
      </h1>
      <p className="hero-title text-xl text-gray-400 mb-12">
        {portfolioData.title} | {portfolioData.university}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="content-card p-6 bg-zinc-900 rounded-xl border border-zinc-800">
          <h2 className="text-2xl font-bold mb-4">Tentang Saya</h2>
          <p className="text-gray-300 leading-relaxed">{portfolioData.bio}</p>
        </div>

        <div className="content-card p-6 bg-zinc-900 rounded-xl border border-zinc-800">
          <h2 className="text-2xl font-bold mb-4">Hard Skills</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {portfolioData.skills.hard.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}