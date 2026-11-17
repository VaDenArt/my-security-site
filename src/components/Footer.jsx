import footerBg from '../assets/images/footer-bg.png';
import logoImg from '../assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="footer" id="contacts">
      {/* Картинка на правой половине */}
      <div 
        className="footer-bg" 
        style={{ backgroundImage: `url(${footerBg})` }}
      ></div>
      
      {/* Затемнение/переход, чтобы картинка плавно сливалась с левым фоном */}
      <div className="footer-overlay"></div>

      <div className="container footer-inner">
        <div className="footer-col">
          <div className="logo footer-logo">
            <img src={logoImg} alt="UCP Export" className="logo-img" />
          </div>
        </div>
        
        <div className="footer-col">
          <h4>Направления</h4>
          <ul>
            <li>Продукция</li>
            <li>Курсы</li>
            <li>Образование</li>
            <li>Испытания</li>
            <li>Оборудование</li>
            <li>О нас</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Контакты</h4>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <p>Республика Беларусь,<br />г. Минск, ул. Машиностроителей, 25</p>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <p>+375 (17) 270-20-01</p>
          </div>
          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <p>export@ucp.by</p>
          </div>
          <div className="socials">
            <a href="#" className="social-btn">▶</a> 
            <a href="#" className="social-btn">📷</a> 
            <a href="#" className="social-btn">✈</a>
          </div>
        </div>
      </div>
      
      <div className="container footer-bottom">
        <p>© 2024 UCP FZ. Все права защищены.</p>
        <a href="/">Политика конфиденциальности</a>
      </div>
    </footer>
  );
}