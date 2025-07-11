'use client';

import { useEffect, useState } from 'react';

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Mark as hydrated
    setIsHydrated(true);
    
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldUseDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    setIsDarkMode(shouldUseDark);
    updateTheme(shouldUseDark);
  }, []);

  const updateTheme = (isDark: boolean) => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      html.style.colorScheme = 'dark';
    } else {
      html.classList.remove('dark');
      html.style.colorScheme = 'light';
    }
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    updateTheme(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return {
    isDarkMode,
    toggleDarkMode,
    isHydrated,
  };
} 