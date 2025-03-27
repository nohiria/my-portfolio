import { Poppins, Roboto_Mono } from 'next/font/google';

export const roboto_mono= Roboto_Mono({
  subsets: ['latin'],
  weight: ["400", "700"],
  display: 'swap',
  variable: '--font-roboto-mono'
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "700"],
  display: 'swap',
  variable: '--font-poppins'
});