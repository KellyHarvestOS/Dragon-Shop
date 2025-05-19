// src/app/page.tsx
import Sidebar from './components/Sidebar/Sidebar';       // Убедитесь, что путь правильный
import HeroSection from './components/HeroSection/HeroSection'; // Убедитесь, что путь правильный
import styles from './page.module.css';                 // Стили для этой страницы

export default function HomePage() {
  return (
    // mainLayout теперь служит в основном для группировки и, возможно, общего фона,
    // так как Sidebar позиционируется независимо от него.
    <div className={styles.mainLayout}>
      <Sidebar /> {/* Сайдбар будет position: fixed и не будет влиять на поток .contentArea */}
      
      {/* Основная контентная область страницы */}
      <main className={styles.contentArea}>
        <HeroSection />
        
        {/* 
          Здесь может быть другой контент вашей главной страницы,
          например, секции с популярными товарами, категориями, новостями и т.д.
          Они будут находиться внутри .contentArea и прокручиваться вместе с HeroSection.
          Пример:
          <section className={styles.popularProducts}>
            <h2>Популярные товары</h2>
            {/* ... карточки товаров ... * /
          </section>
          <section className={styles.newsFeed}>
            <h2>Последние новости</h2>
            {/* ... список новостей ... * /
          </section>
        */}
      </main>
    </div>
  );
}