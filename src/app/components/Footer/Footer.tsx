// src/components/Footer/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

// Данные для колонок футера
const footerColumns = [
  {
    title: 'Продукты',
    links: [
      { label: 'Мыши', href: '/products/mice' },
      { label: 'Клавиатуры', href: '/products/keyboards' },
      { label: 'Гарнитуры', href: '/products/headsets' },
      { label: 'Аксессуары', href: '/products/accessories' },
      { label: 'Кресла', href: '/products/chairs' },
      { label: 'Bluetooth', href: '/products/bluetooth' },
      { label: 'Колонки', href: '/products/speakers' },
      { label: 'Геймпады', href: '/products/gamepads' },
      { label: 'Игровые ПК', href: '/products/gaming-pc' },
      { label: 'Мониторы', href: '/products/monitors' },
    ],
  },
  {
    title: 'O Dragon Shop',
    links: [
      { label: 'Наша история', href: '/about' },
    ],
  },
  {
    title: 'Поддержка',
    links: [
      { label: 'Техподдержка', href: '/support/technical' },
      { label: 'Сотрудничество', href: '/support/partnership' },
    ],
  },
  {
    title: 'Пресс-центр',
    links: [
      { label: 'Новости', href: '/press/news' },
      { label: 'Тесты/Обзоры', href: '/press/reviews' },
      { label: 'Видео', href: '/press/video' },
    ],
  },
  {
    title: 'Скачать',
    links: [
      { label: 'Программное обеспечение', href: '/downloads/software' },
    ],
  },
  {
    title: 'Мы в соцсетях',
    isSocial: true, // Флаг для отличия этого типа колонки
    socialLinks: [  // Используем другое имя свойства для социальных ссылок
      { 
        label: 'VK', 
        href: 'https://vk.com/your_dragon_shop_group', // Замените на вашу ссылку
        icon: '/images/social/vk-icon.svg' // Путь к иконке VK
      }, 
      // { label: 'Telegram', href: 'https://t.me/your_group', icon: '/images/social/telegram-icon.svg' },
    ],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerGrid}>
          {footerColumns.map((column) => (
            <div key={column.title} className={styles.footerColumn}>
              <h4 className={styles.columnTitle}>{column.title}</h4>
              {column.isSocial ? (
                <ul className={styles.socialList}>
                  {/* ИСПОЛЬЗУЕМ ОПЦИОНАЛЬНУЮ ЦЕПОЧКУ для socialLinks */}
                  {column.socialLinks?.map((socialLink) => ( 
                    <li key={socialLink.label}>
                      <Link href={socialLink.href} target="_blank" rel="noopener noreferrer" className={styles.socialLinkItem}>
                        {socialLink.icon && (
                          <Image 
                            src={socialLink.icon} 
                            alt={`${socialLink.label} icon`} 
                            width={20}
                            height={20}
                            className={styles.socialIcon} 
                          />
                        )}
                        <span>{socialLink.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className={styles.linkList}>
                  {/* ИСПОЛЬЗУЕМ ОПЦИОНАЛЬНУЮ ЦЕПОЧКУ для links */}
                  {column.links?.map((link) => ( 
                    <li key={link.label}>
                      <Link href={link.href} className={styles.footerLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>
          Все права защищены © {currentYear} Dragon Shop.
        </p>
      </div>
    </footer>
  );
};

export default Footer;  