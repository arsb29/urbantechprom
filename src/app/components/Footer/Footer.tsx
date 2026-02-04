import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <div className="footer-logo">
            <span className="footer-logo-icon">◎</span>
            <span className="footer-logo-text">УРБАНТЕХПРОМ</span>
          </div>
          <div className="footer-company-details">
            <p>ООО &quot;УРБАНТЕХПРОМ&quot;</p>
            <p>Адрес:125167, г.Москва,<br/>ул.Викторенко д.5, стр1</p>
            <p>ОГРН 1111111</p>
            <p>ИНН/КПП<br/>131232423/23131313</p>
          </div>
        </div>
        <div className="footer-contact">
          <a href="mailto:info@urbantechprom.ru">info@urbantechprom.ru</a>
        </div>
      </div>

      <div className="footer-notice">
        <button className="footer-btn-development">Сайт находится в разработке</button>
      </div>

      <div className="footer-brand">
        <span>УРБАНТЕХПРОМ</span>
      </div>
    </footer>
  );
}
