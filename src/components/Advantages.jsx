import advantageBg from '../assets/images/advantage-bg.png';
import Sparks from './Sparks';

export default function Advantages() {
  return (
    <section
      className="advantages"
      id="services"
      style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.6)), url(${advantageBg})` }}
    >
      <Sparks
        count={70}
        className="sparks-back"
        color="255, 140, 80"
        repelRadius={100}
        repelStrength={2.6}
      />

      <div className="container advantages-inner">
        <div className="advantages-text">
          <h2 className="section-title"><span className="red-line">—</span> Преимущества</h2>
          <h3 className="adv-title">Надёжный партнёр<br/>в сфере безопасности</h3>
          <p className="adv-desc">
            «UCP Export» является надежным партнером в обеспечении безопасности, предлагая лучшие в отрасли решения для предприятий и организаций.
          </p>
          <button className="btn btn-primary">О нас →</button>
        </div>

        <div className="advantages-list">
          {/* Элемент 01 */}
          <div className="adv-item">
            <div className="adv-number">01</div>
            <div className="adv-content">
              <h4>Практический опыт</h4>
              <p>Команда специалистов с реальным опытом работы.</p>
            </div>
          </div>

          {/* Элемент 02 */}
          <div className="adv-item">
            <div className="adv-number">02</div>
            <div className="adv-content">
              <h4>Индивидуальный подход</h4>
              <p>Разработка проектов и решений под конкретные задачи.</p>
            </div>
          </div>

          {/* Элемент 03 */}
          <div className="adv-item">
            <div className="adv-number">03</div>
            <div className="adv-content">
              <h4>Современная учебная база</h4>
              <p>Специализированные тренажеры и симуляторы.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}