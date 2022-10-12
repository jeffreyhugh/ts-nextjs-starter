import { useState } from 'react';

export default function useTheme() {
  const defaultTheme =
    (typeof window !== 'undefined' ? localStorage.getItem('theme') : 'light') ||
    'light';

  return useState(defaultTheme);
}
