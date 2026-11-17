import { useEffect, useState, useRef } from 'react';
import mapImg from '../assets/images/4-1.png';
import logosImg from '../assets/images/logos.png';

function Counter({ end, suffix = '', duration = 2000 }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      let start = null;
      const step = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.2 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration]);

  return <span ref={ref} className="stat-number">{count}{suffix}</span>;
}

export default function GlobalPresence() {
  return (
    <section className="global" id="education">
      <img src={mapImg} alt="World Map" className="global-bg-img" />
      <div className="global-overlay"></div>

      <div className="container global-content">
        <div className="global-text">
          <h2 className="section-title"><span className="red-line">—</span> МЕЖДУНАРОДНОЕ СОТРУДНИЧЕСТВО</h2>
          <h3 className="global-title">Развиваем образование в сфере безопасности</h3>
          <div className="global-stats">
            <div className="stat">
              <Counter end={8000} suffix="+" duration={2500} />
              <span className="stat-label">обученных специалистов</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <Counter end={80} suffix="+" duration={2000} />
              <span className="stat-label">стран мира</span>
            </div>
          </div>
          <img src={logosImg} alt="Партнёры" className="global-logos" />
        </div>
      </div>
    </section>
  );
}