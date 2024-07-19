 import { Lato, Merriweather } from 'next/font/google';

export const lato = Lato({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
});

export const merriweather = Merriweather({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather',
});
