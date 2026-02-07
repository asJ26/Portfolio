'use client';

import { useEffect, useCallback } from 'react';

export default function CursorGlow() {
  const updateCursorPosition = useCallback((e: MouseEvent) => {
    requestAnimationFrame(() => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    });
  }, []);

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.abs(e.clientX - lastX) > 1 || Math.abs(e.clientY - lastY) > 1) {
        lastX = e.clientX;
        lastY = e.clientY;
        updateCursorPosition(e);
      }
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [updateCursorPosition]);

  return null;
}
