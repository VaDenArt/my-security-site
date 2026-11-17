import { Link } from 'react-router-dom';
import card1 from '../assets/images/card1.png';
import card2 from '../assets/images/card2.png';
import card3 from '../assets/images/card3.png';
import card4 from '../assets/images/card4.png';
import card5 from '../assets/images/card5.png';

export default function Directions() {
  
  const cards = [
    { num: '01', title: 'Продукция бренда UCPExport', img: card1, link: '/products' },
    { num: '02', title: 'Краткосрочные курсы на базе IRTCentre', img: card2 },
    { num: '03', title: 'Подготовка по специальностям высшего образования', img: card3 },
    { num: '04', title: 'Испытания и сертификация', img: card4 },
    { num: '05', title: 'Инновационное оборудование', img: card5 },
  ];

  return (
    <section className="directions" id="directions">
      <div className="container">
        <h2 className="section-title"><span className="red-line">—</span> UCPEXPORT</h2>
        <h3 className="section-subtitle">Направления</h3>
        <div className="cards-grid">
          {cards.map((card, index) => {
            const cardInner = (
              <>
                <img
                  src={card.img}
                  alt={card.title}
                  className="card-bg"
                  loading="lazy"
                  decoding="async"
                />
                <div className="card-content">
                  <span className="card-num">{card.num}</span>
                  <div className="card-bottom">
                    <p className="card-title">{card.title}</p>
                    <div className="card-arrow">→</div>
                  </div>
                </div>
              </>
            );

            return card.link ? (
              <Link
                to={card.link}
                className="card"
                key={index}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {cardInner}
              </Link>
            ) : (
              <div className="card" key={index}>
                {cardInner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
