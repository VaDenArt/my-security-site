import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { categories, products } from '../data/products';
import heroBannerImg from '../assets/images/card1.png';

// ВНИМАНИЕ: Если папка cards лежит прямо в src (как на твоем скриншоте), 
// то здесь должно быть '../cards/1.png' (без /assets/).
import card1Img from '../assets/cards/2.png';
import card2Img from '../assets/cards/3.png';
import card3Img from '../assets/cards/4.png';
import card4Img from '../assets/cards/1.png';

import './CatalogPage.css';

const ITEMS_PER_PAGE = 6;

// Жестко привязываем картинки к твоим ID категорий
const categoryImages = {
  'all': null, // У "Все категории" картинки нет
  'special-clothes': card1Img,
  'ppe': card2Img,
  'gear': card3Img,
  'equipment': card4Img,
  'services': card1Img, // Последней даем 1.png
};

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return products;
    return products.filter((item) => item.categoryId === activeCategory);
  }, [activeCategory]);

  const visibleItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  const remainingCount = filteredItems.length - visibleCount;

  return (
    <div className="catalog-page">
      {/* Верхний темный баннер */}
      <section
        className="catalog-hero"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${heroBannerImg})` 
        }}
      >
        {/* Закомментировали старый оверлей, так как теперь затемнение в backgroundImage */}
        {/* <div className="catalog-hero-overlay"></div> */}
        
        <div className="container catalog-hero-content">
          <div className="catalog-hero-left">
            <h1>Боевая одежда и экипировка для профессионалов</h1>
            <p>
              Сертифицированные решения для пожарных, спасателей и служб гражданской защиты
            </p>
            <a href="#contacts" className="btn-red">
              Оставить заявку →
            </a>
          </div>

          <div className="catalog-hero-badges">
            <div className="hero-badge">
              <span className="badge-icon">✔</span>
              <span>Соответствие ТР ЕАЭС 043/2017</span>
            </div>
            <div className="hero-badge">
              <span className="badge-icon">🛡️</span>
              <span>Надежность и защита</span>
            </div>
            <div className="hero-badge">
              <span className="badge-icon">⚙️</span>
              <span>Комплексное оснащение</span>
            </div>
          </div>
        </div>
      </section>

      {/* Плитки категорий */}
      <section className="container categories-section">
        <div className="categories-grid">
          {categories.map((cat) => {
            // Берем картинку по ID категории
            const bgImage = categoryImages[cat.id];
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                className={`category-tile ${isActive ? 'active' : ''} ${bgImage ? 'has-bg-image' : ''}`}
                style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
              >
                {/* Иконка показывается только если нет фоновой картинки */}
                {!bgImage && (
                  <div className="category-tile-top">
                    <span className="category-icon">{cat.icon}</span>
                  </div>
                )}
                
                <div className="category-tile-bottom">
                  <span className="category-name">{cat.title}</span>
                  <span className="category-circle-arrow">→</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Сетка карточек продукции */}
      <section className="container products-section" id="catalog">
        <div className="catalog-heading">
          <h2>Каталог продукции</h2>
          <span className="catalog-divider">|</span>
          <p>
            Современные средства защиты, экипировка и оборудование для пожарных и спасателей
          </p>
        </div>

        <div className="products-grid">
          {visibleItems.map((item) => (
            <div className="product-card fade-in-card" key={item.id}>
              <div className="product-card-img">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                />
                {/* <span className="product-card-badge">{item.category}</span> */}
              </div>

              <h3 className="product-card-title">{item.title}</h3>

              <ul className="product-card-specs">
                {item.shortSpecs.map((spec, idx) => (
                  <li key={idx}>
                    <span className="spec-dot">•</span> {spec}
                  </li>
                ))}
              </ul>

              <div className="product-card-actions">
                <Link to={`/product/${item.id}`} className="btn-outline-dark">
                  Подробнее →
                </Link>
                <a href="#contacts" className="btn-red-small">
                  Оставить заявку ✈️
                </a>
              </div>
            </div>
          ))}
        </div>

        {remainingCount > 0 && (
          <div className="load-more-wrapper">
            <button
              type="button"
              onClick={handleLoadMore}
              className="btn-load-more"
            >
              <span>Показать еще</span>
              <span className="load-more-count">
                +{Math.min(ITEMS_PER_PAGE, remainingCount)} из {remainingCount}
              </span>
            </button>
          </div>
        )}
      </section>
    </div>
  );
}