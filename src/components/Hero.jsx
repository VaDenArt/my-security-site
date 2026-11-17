import heroBg from '../assets/images/hero-bg.png';
import Sparks from './Sparks';

// Импортируем иконки
import Icon01 from '../assets/icons/01.svg';
import Icon02 from '../assets/icons/02.svg';
import Icon03 from '../assets/icons/03.svg';
import Icon04 from '../assets/icons/04.svg';
import Icon05 from '../assets/icons/05.svg';

export default function Hero() {
  return (
    <section
      className="hero"
      id="about"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url(${heroBg})` }}
    >
      <Sparks
        count={80}
        className="sparks-back"
        color="255, 140, 80"
        repelRadius={110}
        repelStrength={2.8}
      />

      <div className="container hero-content">
        <div className="hero-text">
          <h1>Профессиональные решения для тех, кто стоит на страже безопасности</h1>
          <div className="hero-buttons">
            <button className="btn btn-primary">Подробнее →</button>
            <button className="btn btn-outline">Презентация ⤓</button>
          </div>
        </div>
        
        <div className="hero-features">
          <div className="feature-item">
            <img src={Icon01} alt="" className="feature-icon" />
            <span>Международные стандарты подготовки</span>
          </div>
          <div className="feature-item">
            <img src={Icon02} alt="" className="feature-icon" />
            <span>Практико-ориентированное обучение</span>
          </div>
          <div className="feature-item">
            <img src={Icon03} alt="" className="feature-icon" />
            <span>Комплексная система обучения</span>
          </div>
          <div className="feature-item">
            <img src={Icon04} alt="" className="feature-icon" />
            <span>Современные средства индивидуальной защиты</span>
          </div>
          <div className="feature-item">
            <img src={Icon05} alt="" className="feature-icon" />
            <span>Иннвационная научно-исследовательская база</span>
          </div>
        </div>
      </div>
    </section>
  );
}