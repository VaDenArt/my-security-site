import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import './ProductPage.css';

// Импорт иконок преимуществ
import iconFeather from '../assets/ic_card/01_Перо.png';
import iconShield from '../assets/ic_card/02_Щит_с_пламенем.png';
import iconFlame from '../assets/ic_card/03_Пламя.png';
import iconLayers from '../assets/ic_card/04_Слои.png';
import iconThermo from '../assets/ic_card/05_Термометр.png';
import iconGear from '../assets/ic_card/06_Контурная_шестеренка.png';
import iconChain from '../assets/ic_card/07_Цепь.png';

// Импорт картинок для галереи товара
import img1 from '../assets/images/marketplace/asr/1.png';
import img2 from '../assets/images/marketplace/asr/2.png';
import img3 from '../assets/images/marketplace/asr/3.png';
import img4 from '../assets/images/marketplace/asr/4.png';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  // Формируем массив: сначала картинка товара из базы (или 1.png), затем остальные 4
  // Если product.image нет, используем img1 как запасной вариант
  const galleryImages = [
    product?.image || img1, 
    img1, 
    img2, 
    img3, 
    img4
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Сброс индекса при смене товара
  useEffect(() => {
    setActiveIndex(0);
  }, [id]);

  if (!product) {
    return (
      <div className="container" style={{ padding: '120px 0', textAlign: 'center' }}>
        <h2>Товар не найден</h2>
        <Link to="/" className="btn-primary">Вернуться на главную</Link>
      </div>
    );
  }

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const features = [
    { icon: iconFeather, title: 'Облегчённая конструкция', desc: 'масса менее 2,5 кг.' },
    { icon: iconShield, title: 'Огнестойкий материал', desc: '100% хлопок со специальной огнестойкой обработкой.' },
    { icon: iconFlame, title: 'Устойчивость к открытому пламени', desc: 'воздействие пламени температурой более 800 °C в течение не менее 15 секунд.' },
    { icon: iconLayers, title: 'Усиленная защита локтей и коленей', desc: 'износостойкие накладки из натуральной кожи анатомической формы.' },
    { icon: iconThermo, title: 'Амортизация и теплоизоляция', desc: 'дополнительные защитные слои в области локтевых и коленных суставов.' },
    { icon: iconGear, title: 'Эргономичная конструкция', desc: 'комфорт при несении службы и выполнении спасательных работ.' },
    { icon: iconChain, title: 'Совместимость с экипировкой', desc: 'возможность использования совместно с другими элементами оснащения спасателя.' }
  ];

  return (
    <div className="product-page">
      <div className="container">
        {/* Хлебные крошки */}
        <nav className="breadcrumbs">
          <Link to="/">Главная</Link>
          <span>/</span>
          <a href="/#catalog">Продукция</a>
          <span>/</span>
          <a href="/#catalog">Специальная защитная одежда</a>
          <span>/</span>
          <span className="current">{product.title}</span>
        </nav>

        {/* Верхний блок */}
        <div className="product-hero">
          
          {/* Левая колонка: Галерея */}
          <div className="product-gallery-wrapper">
            <div className="main-image-container">
              <button className="nav-arrow left" onClick={prevImage}>‹</button>
              
              <img 
                src={galleryImages[activeIndex]} 
                alt={product.title} 
                className="main-image" 
              />
              
              <button className="nav-arrow right" onClick={nextImage}>›</button>
            </div>
            
            {/* Миниатюры */}
            <div className="thumbnails-row">
               {galleryImages.map((img, idx) => (
                 <div 
                   key={idx} 
                   className={`thumb ${idx === activeIndex ? 'active' : ''}`}
                   onClick={() => setActiveIndex(idx)}
                 >
                   <img src={img} alt={`${product.title} вид ${idx + 1}`} />
                 </div>
               ))}
            </div>
          </div>

          {/* Правая колонка: Текст */}
          <div className="product-info">
            <div className="title-group">
              <span className="red-slash">/</span>
              <h1 className="product-page-title">{product.title}</h1>
            </div>
            
            <h3 className="section-title">Полное описание</h3>
            
            <div className="product-description">
              <p>
                Костюм предназначен для проведения аварийно-спасательных и других неотложных работ, 
                не связанных с тушением пожаров, включая ликвидацию последствий дорожно-транспортных 
                происшествий, деблокирование пострадавших и проведение поисковых мероприятий.
              </p>
              <p>
                Представляет собой комплект из куртки и полукомбинезона, изготовленных из 100% хлопка 
                с огнестойкой обработкой.
              </p>
              <p>
                Конструкция предусматривает усиленную защиту наиболее подверженных механическим 
                воздействиям участков. Области локтей и коленей дополнительно защищены износостойкими 
                накладками из натуральной кожи анатомической формы с теплоизолирующей и амортизирующей подкладкой.
              </p>
              <p>
                Эргономичный крой обеспечивает удобство при повседневном несении службы и выполнении 
                аварийно-спасательных работ. Костюм совместим с другими элементами экипировки спасателя.
              </p>
            </div>
          </div>
        </div>

        {/* Блок преимуществ */}
        <div className="features-section">
          <div className="features-header">
            <span className="red-slash">/</span>
            <h2>Основные преимущества</h2>
          </div>

          <div className="features-grid">
            {features.map((feat, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-box">
                  <img src={feat.icon} alt={feat.title} />
                </div>
                <div className="feature-text">
                  <span className="feature-title">{feat.title} –</span>
                  <span className="feature-desc">{feat.desc}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cta-bottom">
            <button className="btn-primary btn-large">Оставить заявку <span>→</span></button>
          </div>
        </div>

      </div>
    </div>
  );
}