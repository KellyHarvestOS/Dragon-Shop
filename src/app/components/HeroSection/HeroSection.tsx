'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image'; // Для иконок и продуктов, если они есть
import styles from './HeroSection.module.css';

const slidesData = [
  {
    id: 1,
    title: 'ПО-НАСТОЯЩЕМУ ЯРКАЯ ИГРА',
    backgroundImage: 'https://ksd-images.lt/display/aikido/cache/5e0673d9dab3ce2732020e13611ad219.jpeg',
  },
  {
    id: 2,
    title: 'НОВЫЕ ГОРИЗОНТЫ СКОРОСТИ',
    backgroundImage: 'https://i.moyo.ua/img/gallery/5822/72/2024506_middle.jpg', // Замените на реальные URL
  },
  {
    id: 3,
    title: 'ПОЛНОЕ ПОГРУЖЕНИЕ В ЗВУК',
    backgroundImage: 'https://ir.ozone.ru/s3/multimedia-1-q/c1000/6920154350.jpg', // Замените на реальные URL
  },
  {
    id: 4,
    title: 'ТОЧНОСТЬ КАЖДОГО ДВИЖЕНИЯ',
    backgroundImage: 'https://www.ixbt.com/img/n1/news/2024/11/5/image_1456340_large.png', // Замените на реальные URL
  },
  {
    id: 5,
    title: 'КОМФОРТ ДЛЯ ДОЛГИХ СЕССИЙ',
    backgroundImage: 'https://ir.ozone.ru/s3/multimedia-1-q/c1000/6920154350.jpg', // Замените на реальные URL
  },
  // Добавьте до 10 слайдов, если пагинация рассчитана на это
];

const SLIDE_DURATION = 5000; // мс
const FADE_ANIMATION_DURATION = 800; // мс, должно совпадать с CSS transition

const HeroSection = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState(slidesData[0].title);
  const [titleAnimationKey, setTitleAnimationKey] = useState(0);

  // Состояния для двух фоновых слоев
  const [bg1Style, setBg1Style] = useState({
    backgroundImage: `url("${slidesData[0].backgroundImage}")`,
    opacity: 1,
  });
  const [bg2Style, setBg2Style] = useState({
    backgroundImage: ``, // Изначально пустой
    opacity: 0,
  });
  const [isBg1Active, setIsBg1Active] = useState(true); // Первый слой активен изначально
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeSlide = useCallback((newIndex: number) => {
    if (isTransitioning || newIndex === currentSlideIndex) return;

    setIsTransitioning(true);
    const newSlide = slidesData[newIndex];

    // Анимация заголовка
    setTitleAnimationKey(prevKey => prevKey + 1); // Меняем ключ для перезапуска анимации

    if (isBg1Active) {
      // Текущий активный bg1, новый фон грузим в bg2
      setBg2Style({ backgroundImage: `url("${newSlide.backgroundImage}")`, opacity: 0 });
      
      // Небольшая задержка, чтобы браузер успел начать загрузку bg2
      setTimeout(() => {
        setBg1Style(prev => ({ ...prev, opacity: 0 }));
        setBg2Style(prev => ({ ...prev, opacity: 1 }));
        setIsBg1Active(false);
        setDisplayedTitle(newSlide.title); // Обновляем текст заголовка
      }, 50); // 50ms - эвристика
    } else {
      // Текущий активный bg2, новый фон грузим в bg1
      setBg1Style({ backgroundImage: `url("${newSlide.backgroundImage}")`, opacity: 0 });

      setTimeout(() => {
        setBg2Style(prev => ({ ...prev, opacity: 0 }));
        setBg1Style(prev => ({ ...prev, opacity: 1 }));
        setIsBg1Active(true);
        setDisplayedTitle(newSlide.title); // Обновляем текст заголовка
      }, 50);
    }

    setCurrentSlideIndex(newIndex);

    setTimeout(() => {
      setIsTransitioning(false);
    }, FADE_ANIMATION_DURATION + 100); // Даем время на завершение анимации + буфер

  }, [isTransitioning, currentSlideIndex, isBg1Active]);

  // Автоматическая смена слайдов
  useEffect(() => {
    if (slidesData.length < 2) return; // Не запускаем, если слайдов мало

    const timer = setTimeout(() => {
      changeSlide((currentSlideIndex + 1) % slidesData.length);
    }, SLIDE_DURATION);

    return () => clearTimeout(timer);
  }, [currentSlideIndex, changeSlide]); // Зависимость от changeSlide важна

  const handlePaginationClick = (index: number) => {
    if (index < slidesData.length) {
      changeSlide(index);
    }
  };
  
  const showAlwaysOnProducts = true; // Если продукты отображаются всегда

  return (
    <section className={styles.hero}>
      <div className={styles.backgroundLayer} style={{...bg1Style, transition: `opacity ${FADE_ANIMATION_DURATION}ms ease-in-out`}} />
      <div className={styles.backgroundLayer} style={{...bg2Style, transition: `opacity ${FADE_ANIMATION_DURATION}ms ease-in-out`}} />

      <div className={styles.contentWrapper}>
        <div className={styles.topLeftText}>
          <h1>Dragon <span>Shop</span></h1>
         
        </div>
   

        <div className={styles.infoBox}>
          <div className={styles.pagination}>
            {Array.from({ length: 10 }, (_, i) => i).map((index) => (
              <span
                key={`page-${index}`}
                className={`${styles.pageNumber} ${index === currentSlideIndex && index < slidesData.length ? styles.activePage : ''} ${index >= slidesData.length ? styles.disabledPage : ''}`}
                onClick={() => handlePaginationClick(index)}
              >
                {index + 1}
                {index === currentSlideIndex && index < slidesData.length && (
                  <div 
                    className={styles.progressBar} 
                    key={`progress-${currentSlideIndex}`} // Ключ для перезапуска анимации полоски
                    style={{ animationDuration: `${SLIDE_DURATION}ms` }}
                  />
                )}
              </span>
            ))}
          </div>
          <h3 className={styles.slideTitle} key={`title-${titleAnimationKey}`}>
            {displayedTitle}
          </h3>
          <button className={styles.actionButton}>
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;