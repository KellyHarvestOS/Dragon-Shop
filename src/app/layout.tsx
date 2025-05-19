// src/app/layout.tsx
import './globals.css';
import Footer from './components/Footer/Footer'; // <--- РАСКОММЕНТИРУЙТЕ ИЛИ ДОБАВЬТЕ ЭТОТ ИМПОРТ

export const metadata = {
  title: 'Dragon Shop',
  description: 'Welcome to Dragon Shop - your source for mythical gaming gear!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        {children} {/* Основной контент страницы */}
        <Footer />   {/* Ваш футер */}
      </body>
    </html>
  );
}