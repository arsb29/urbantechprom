import './FocusSection.css';

export default function FocusSection() {
  return (
    <section className="focus">
      <header className="focus-header">
        <div className="focus-logo">
          <span className="focus-logo-icon">◎</span>
          <span className="focus-logo-text">УРБАНТЕХПРОМ</span>
        </div>
        <button className="focus-btn-contact">Связаться нами</button>
      </header>

      <h2 className="focus-title">Фокус компании</h2>

      <div className="focus-list">
        <div className="focus-item">
          <div className="focus-checkbox"></div>
          <p>Повышение инвестиционной эффективности инфраструктурных<br/>вычислительных центров</p>
        </div>
        <div className="focus-item">
          <div className="focus-checkbox"></div>
          <p>Формирование технологической и финансовой базы для развития<br/>цифровой экономики</p>
        </div>
        <div className="focus-item">
          <div className="focus-checkbox"></div>
          <p>Сокращение сроков вывода мощностей на рынок</p>
        </div>
      </div>
    </section>
  );
}
