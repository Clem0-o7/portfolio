import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Clement Andrew A',
    short_name: 'Andrew',
    description: 'Clement Andrew, a software developer from TamilNadu, India, crafts seamless software solutions. Explore my portfolio featuring Next.js, Tailwind CSS, and more.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020912',
    theme_color: '#020912',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['software', 'development', 'portfolio'],
    lang: 'en',
    dir: 'ltr',
    orientation: 'portrait',
  }
}
