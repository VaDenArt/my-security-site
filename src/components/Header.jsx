import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logoImg from '../assets/images/logo.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Проверяем, что путь начинается с /product/ и после слэша есть символы
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
          {/* Логотип ведет на главную */}
          <Link to="/">
            <img src={logoImg} alt="UCP Export" className="logo-img" />
          </Link>
        </div>
        <nav className="nav">
          {/* Главная */}
          <Link to="/">Главная</Link>
          {/* Продукция - ведет на страницу каталога */}
          <Link to="/products">Продукция</Link>
          {/* Остальные ведут на якоря на главной странице */}
          <Link to="/#services">Курсы</Link>
          <Link to="/#education">Образование</Link>
          <Link to="/#education">Испытания</Link>
          <Link to="/#education">Оборудование</Link>
          <Link to="/#contacts">Контакты</Link>
        </nav>
        <div className="header-actions">
          <button className="lang-btn">RU ▾</button>
          <button className="btn btn-primary">Оставить заявку</button>
        </div>
      </div>
    </header>
  );
}