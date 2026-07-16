'use client';

import { useEffect, useState } from 'react';
import PageTransition from '@/components/PageTransition';
import CustomCursor from '@/components/CustomCursor';
import { Analytics } from '@vercel/analytics/next';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';
import { SplitText } from 'gsap/SplitText';
import InertiaPlugin from 'gsap/InertiaPlugin';
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import gsap from 'gsap';

// Register GSAP plugins di client-side saja
if (typeof window !== 'undefined') {
  gsap.registerPlugin(
    ScrollTrigger,
    Draggable,
    SplitText,
    InertiaPlugin,
    DrawSVGPlugin
  );
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {children}
      {mounted && (
        <>
          <PageTransition />
          <CustomCursor />
        </>
      )}
      <Analytics />
    </>
  );
}