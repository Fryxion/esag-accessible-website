import React from 'react';
import Layout from '../layout/Layout';

const Home = () => {
  const heroStyle = {
    background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%)',
    color: 'white',
    padding: '4rem 0',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden'
  };

  const heroContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    position: 'relative',
    zIndex: 10
  };

  const ctaButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'var(--accent-gold)',
    color: 'var(--primary-blue)',
    padding: '1rem 2rem',
    textDecoration: 'none',
    borderRadius: '50px',
    fontWeight: 700,
    fontSize: '1.1rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(245, 158, 11, 0.3)'
  };

  const cardsSectionStyle = {
    padding: '4rem 0',
    background: 'var(--background-light)'
  };

  const sectionContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  };

  const sectionTitleStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '3rem',
    color: 'var(--text-dark)'
  };

  const cardsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  };

  const cardStyle = {
    background: 'white',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease',
    border: '1px solid var(--border-color)'
  };

  const cardIconStyle = {
    width: '60px',
    height: '60px',
    background: 'var(--secondary-blue)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
    fontSize: '1.5rem',
    color: 'white'
  };

  const cardLinkStyle = {
    color: 'var(--primary-blue)',
    textDecoration: 'none',
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'color 0.2s ease'
  };

  const cards = [
    {
      icon: '📚',
      title: 'GIAE Online',
      description: 'Acesso à plataforma de gestão escolar para consulta de notas, faltas e comunicações.',
      link: '#',
      ariaLabel: 'Aceder ao GIAE Online - abre numa nova janela'
    },
    {
      icon: '📧',
      title: 'Office 365',
      description: 'Acesso ao email institucional e ferramentas colaborativas da Microsoft.',
      link: '#',
      ariaLabel: 'Aceder ao Office 365 - abre numa nova janela'
    },
    {
      icon: '📋',
      title: 'Documentos',
      description: 'Regulamentos, formulários e documentação importante para alunos e encarregados.',
      link: '#',
      ariaLabel: 'Ver documentos'
    },
    {
      icon: '🏆',
      title: 'Selos e Certificações',
      description: 'Conheça os nossos reconhecimentos: Eco-Escolas, Escola Saudável, Erasmus+ e muito mais.',
      link: '#',
      ariaLabel: 'Ver selos e certificações'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section style={heroStyle} aria-labelledby="hero-title">
        <div style={heroContainerStyle}>
          <h2 
            id="hero-title" 
            style={{ 
              fontSize: '3rem', 
              fontWeight: 800, 
              marginBottom: '1rem',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)' 
            }}
          >
            Uma escola, muitas oportunidades!
          </h2>
          <p style={{ 
            fontSize: '1.25rem', 
            marginBottom: '2rem', 
            opacity: 0.95,
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Venha descobrir a nossa oferta educativa, projetos inovadores e atividades que preparam os nossos alunos para o futuro.
          </p>
          <a 
            href="#atividades" 
            style={ctaButtonStyle}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(245, 158, 11, 0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(245, 158, 11, 0.3)';
            }}
          >
            <span>Descobrir Mais</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section style={cardsSectionStyle} aria-labelledby="services-title">
        <div style={sectionContainerStyle}>
          <h2 id="services-title" style={sectionTitleStyle}>Acessos Rápidos</h2>
          <div style={cardsGridStyle}>
            {cards.map((card, index) => (
              <article 
                key={index}
                style={cardStyle}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
                }}
              >
                <div style={cardIconStyle} aria-hidden="true">{card.icon}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-dark)' }}>
                  {card.title}
                </h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>
                  {card.description}
                </p>
                <a 
                  href={card.link} 
                  style={cardLinkStyle}
                  aria-label={card.ariaLabel}
                  onMouseOver={(e) => {
                    e.target.style.color = 'var(--secondary-blue)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = 'var(--primary-blue)';
                  }}
                >
                  <span>Aceder</span>
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;