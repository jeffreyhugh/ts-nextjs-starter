import { useState } from 'react';

export default function useTheme() {
  const defaultTheme =
    typeof window !== 'undefined' ? localStorage.getItem('theme') : null;

  return useState(defaultTheme);
}
