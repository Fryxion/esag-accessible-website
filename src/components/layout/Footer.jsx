import React from 'react';

const Footer = () => {
  const footerStyle = {
    background: 'var(--text-dark)',
    color: 'white',
    padding: '3rem 0 1rem'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem'
  };

  const sectionStyle = {
    marginBottom: '1rem'
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: 600,
    marginBottom: '1rem',
    color: 'var(--accent-gold)'
  };

  const linkStyle = {
    color: 'rgba(255,255,255,0.8)',
    textDecoration: 'none',
    display: 'block',
    padding: '0.25rem 0',
    transition: 'color 0.2s ease'
  };

  const bottomStyle = {
    borderTop: '1px solid rgba(255,255,255,0.2)',
    paddingTop: '1rem',
    textAlign: 'center',
    color: 'rgba(255,255,255,0.6)'
  };

  return (
    <footer style={footerStyle} role="contentinfo">
      <div style={containerStyle}>
        <div style={gridStyle}>
          <div style={sectionStyle}>
            <h4 style={titleStyle}>Contactos</h4>
            <address>
              <a href="tel:+351223745640" style={linkStyle}>22 374 56 40</a>
              <a href="mailto:secretaria@esagarrett.com.pt" style={linkStyle}>
                secretaria@esagarrett.com.pt
              </a>
            </address>
          </div>
          
          <div style={sectionStyle}>
            <h4 style={titleStyle}>Ligações Úteis</h4>
            <a href="#" style={linkStyle}>Canal de Denúncias</a>
            <a href="#" style={linkStyle}>GIAE Online</a>
            <a href="#" style={linkStyle}>Office 365</a>
          </div>
          
          <div style={sectionStyle}>
            <h4 style={titleStyle}>Redes Sociais</h4>
            <a href="#" style={linkStyle} aria-label="Facebook da ESAG">Facebook</a>
            <a href="#" style={linkStyle} aria-label="Instagram da ESAG">Instagram</a>
            <a href="#" style={linkStyle} aria-label="YouTube da ESAG">YouTube</a>
          </div>
          
          <div style={sectionStyle}>
            <h4 style={titleStyle}>Informação Legal</h4>
            <a href="#" style={linkStyle}>Política de Privacidade</a>
            <a href="#" style={linkStyle}>Política de Cookies</a>
            <a href="#" style={linkStyle}>Termos e Condições</a>
          </div>
        </div>
        
        <div style={bottomStyle}>
          <p>&copy; 2025 Escola Secundária Almeida Garrett. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;