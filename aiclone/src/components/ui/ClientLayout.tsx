'use client';
// @ts-ignore
import AOS from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return <div className="flex flex-col min-h-screen">{children}</div>;
}
