'use client';

import React, { createContext, useContext, useState } from 'react';

export type HeaderTheme = 'dark' | 'light';

interface ThemeContextType {
  headerTheme: HeaderTheme;
  setHeaderTheme: (theme: HeaderTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [headerTheme, setHeaderTheme] = useState<HeaderTheme>('dark');

  return (
    <ThemeContext.Provider value={{ headerTheme, setHeaderTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useHeaderTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useHeaderTheme must be used within ThemeProvider');
  }
  return context;
}
