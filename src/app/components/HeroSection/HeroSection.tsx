import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero">
      <header className="hero-header">
        <div className="hero-logo">
          <span className="hero-logo-icon">◎</span>
          <span className="hero-logo-text">УРБАНТЕХПРОМ</span>
        </div>
        <button className="hero-btn-contact">Связаться нами</button>
      </header>

      <div className="hero-content">
        <div className="hero-text">
          <h1>Корпаративный центр<br/>компетенций <span className="hero-highlight">ГК &quot;Урбантех&quot;</span></h1>
          <p>Инженерные, инвестиционные и управленческие<br/>
          ресурсы для реализации проектов в сфере<br/>
          создания вычислительных комплексов<br/>
          и объектов газовой генерации</p>
        </div>
        <div className="hero-image">
          <div className="hero-turbine-icon"></div>
        </div>
      </div>
    </section>
  );
}
