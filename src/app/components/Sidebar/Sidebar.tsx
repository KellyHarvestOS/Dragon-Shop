import Link from 'next/link';
import Image from 'next/image';
import styles from './Sidebar.module.css';

const navItems = [
  { href: '/mice', label: 'МЫШИ', icon: '/images/icons/gaming-mouse.png' },
  { href: '/keyboards', label: 'КЛАВИАТУРЫ', icon: '/images/icons/computer-keyboard.png' },
  { href: '/headsets', label: 'ГАРНИТУРЫ', icon: '/images/icons/headset.png' },
  { href: '/bluetooth', label: 'BLUETOOTH', icon: '/images/icons/bluetooth-signal.png' },
  { href: '/speakers', label: 'КОЛОНКИ', icon: '/images/icons/portable.png' },
  { href: '/gamepads', label: 'ГЕЙМПАДЫ', icon: '/images/icons/gamepad.png' },
  { href: '/accessories', label: 'АКСЕССУАРЫ', icon: '/images/icons/plus.png' },
  { href: '/chairs', label: 'КРЕСЛА', icon: '/images/icons/gaming-chair.png' },
  { href: '/gaming-pc', label: 'ИГРОВЫЕ ПК', icon: '/images/icons/pc.png' },
  { href: '/monitors', label: 'МОНИТОРЫ', icon: '/images/icons/curved-screen.png' },
  { href: '/pc-parts', label: 'КОМПЛЕКТУЮЩИЕ ДЛЯ ПК', icon: '/images/icons/computer-case.png' },
];

const otherLinks = [
  { href: '/about-dragon-shop', label: 'O DRAGON SHOP' },
  { href: '/support', label: 'ПОДДЕРЖКА' },
  { href: '/press-center', label: 'ПРЕСС-ЦЕНТР' },
  { href: '/gallery', label: 'ГАЛЕРЕЯ' },
];


const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logoLink}>
          <span className={styles.logoImageWrapper}> 
            <Image 
              src="/images/Dragon_Shop (1).png"
              alt="Dragon Shop Logo" 
              width={160} 
              height={160} 
              priority 
              style={{ display: 'block' }}
            />
          </span>
        </Link>
      </div>

      <nav className={styles.mainNav}>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={styles.navLink}>
                <span className={styles.navLinkContent}> 
                  <Image 
                    src={item.icon} 
                    alt="" 
                    width={22} 
                    height={22} 
                    className={styles.navIcon} 
                  />
                  <span>{item.label}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.sidebarFooter}> 
        <div className={styles.otherLinksNav}>
          <ul>
            {otherLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.otherLink}>
                  <span className={styles.otherLinkContent}>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.languageSwitcher}>
          <button className={styles.langButtonActive}>RUSSIA</button>
          <button className={styles.langButton}>LANGUAGE</button>
        </div>
      </div>
      
    </aside>
  );
};

export default Sidebar;