import './DirectionsSection.css';

export default function DirectionsSection() {
  return (
    <section className="directions">
      <header className="directions-header">
        <div className="directions-logo">
          <span className="directions-logo-icon">◎</span>
          <span className="directions-logo-text">УРБАНТЕХПРОМ</span>
        </div>
        <button className="directions-btn-contact">Связаться нами</button>
      </header>

      <h2 className="directions-title">Основные направления</h2>

      <div className="directions-grid">
        <div className="directions-card">
          <img src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600" alt="Газовые энергоцентры"/>
          <div className="directions-card-overlay">
            <span>Создание газовых энергоцентров</span>
          </div>
        </div>
        <div className="directions-card directions-card-large">
          <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800" alt="Центры обработки данных"/>
          <div className="directions-card-overlay">
            <span>Создание центров обработки данных и<br/>объектов майнинговой инфраструктуры</span>
          </div>
        </div>
        <div className="directions-card">
          <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600" alt="Энергетическое оборудование"/>
          <div className="directions-card-overlay">
            <span>Поставка энергетического и вычислительного<br/>оборудывания</span>
          </div>
        </div>
        <div className="directions-card">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600" alt="Энергетический девелопмент"/>
          <div className="directions-card-overlay">
            <span>Энергетический девелопмент</span>
          </div>
        </div>
      </div>
    </section>
  );
}
