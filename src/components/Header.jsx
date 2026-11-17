import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import logoImg from '../assets/images/logo.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Проверяем, что путь начинается с /product/ и после слэша есть символы
  // /product          -> false (каталог)
  // /product/insarag  -> true  (конкретный товар)
  const isProductDetailPage = /^\/product\/.+/.test(location.pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Фон появляется, если мы проскроллили ИЛИ мы на странице конкретного товара
  const headerClass = `header${(scrolled || isProductDetailPage) ? ' scrolled' : ''}`;

  return (
    <header className={headerClass}>
      <div className="container header-inner">
        <div className="logo">
          <img src={logoImg} alt="UCP Export" className="logo-img" />
        </div>
        <nav className="nav">
          <a href="/#about">О компании</a>
          <a href="/#directions">Направления</a>
          <a href="/#services">Услуги</a>
          <a href="/#education">Образование</a>
          <a href="/#contacts">Контакты</a>
        </nav>
        <div className="header-actions">
          <button className="lang-btn">RU ▾</button>
          <button className="btn btn-primary">Оставить заявку</button>
        </div>
      </div>
    </header>
  );
}