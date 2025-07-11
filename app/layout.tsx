import '../globals.css';
import TopBar from './components/TopBar';

export const metadata = {
  title: 'CurriculumVitaeAndhikaWahyu',
  description: 'My CV',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='bg-gray-900 text-white font-sans'>
        <TopBar />
        {children}
      </body>
    </html>
  );
}
