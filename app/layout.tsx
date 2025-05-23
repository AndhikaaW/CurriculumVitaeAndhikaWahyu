import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Andhika Wahyu - Mobile Developer',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  description: 'Deploy your static Next.js site to GitHub Pages.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
