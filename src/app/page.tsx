'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { portfolioData } from '../data/portofolio';

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.hero-text', {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
    });
  }, { scope: container });

  return (
    <main ref={container} className="min-h-screen bg-[#0d0d0d] text-white flex flex-col justify-between p-8 md:p-12 font-sans selection:bg-white selection:text-black">
      
      {/* NAVBAR */}
      <nav className="flex justify-between items-center text-sm tracking-wide text-gray-300 border-b border-zinc-800 pb-4">
        <span className="font-semibold text-white">Fresh Graduated | Sosiologi</span>
        <div className="flex gap-8">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#photo" className="hover:text-white transition-colors">Photo</a>
          <a href="#about" className="hover:text-white transition-colors">About Me</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION (PORTOFOLIO) */}
      <section className="my-auto py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Teks Kiri */}
        <div className="flex-1 space-y-6">
          <p className="hero-text text-gray-400 text-sm tracking-widest uppercase">
            Presented by <br />
            <span className="text-white font-medium text-base">{portfolioData.name}</span>
          </p>
          
          <h1 className="hero-text text-7xl md:text-9xl font-black tracking-tighter uppercase leading-none">
            PORTOFOLIO
          </h1>
          
          <p className="hero-text text-gray-400 text-lg max-w-lg">
            {portfolioData.title} • {portfolioData.university}
          </p>
        </div>

        {/* Foto Frame Kanan */}
        <div className="hero-text relative w-full max-w-sm aspect-[3/4] bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl flex items-center justify-center">
          {/* Ganti src ini dengan path foto kamu di folder /public/foto.jpg */}
          <div className="text-center p-6 text-zinc-500">
            <span className="block text-4xl mb-2">📸</span>
            <p className="text-sm">[ Area Foto Profil / Pasfoto ]</p>
          </div>
        </div>
      </section>

      {/* FOOTER BAR */}
      <footer className="flex justify-between items-center text-xs text-zinc-500 border-t border-zinc-900 pt-4">
        <span>TikTok @portofolio.id</span>
        <span>Page | 01</span>
      </footer>

    </main>
  );
}