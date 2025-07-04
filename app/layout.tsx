import '../globals.css';

export const metadata = {
  title: 'CurriculumVitaeAndhikaWahyu',
  description: 'My CV',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>  // 👈 hanya render children
    </html>
  );
}
