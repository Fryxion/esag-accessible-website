import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useKeyboardNavigation } from '../../hooks/useKeyboardNavigation';
import { useAccessibility } from '../../hooks/useAccessibility';

const MegaMenuNavigation = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { announceMessage } = useAccessibility();
  const location = useLocation();
  const timeoutRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useKeyboardNavigation(() => {
    if (openDropdown) {
      setOpenDropdown(null);
      announceMessage('Menu fechado');
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      announceMessage('Menu móvel fechado');
    }
  });

  const handleMouseEnter = (menuKey) => {
    if (!isMobile) {
      clearTimeout(timeoutRef.current);
      setOpenDropdown(menuKey);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setOpenDropdown(null);
      }, 300);
    }
  };

  const handleKeyDown = (e, menuKey) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
      case 'ArrowDown':
        e.preventDefault();
        setOpenDropdown(openDropdown === menuKey ? null : menuKey);
        announceMessage(`Menu ${menuKey} ${openDropdown === menuKey ? 'fechado' : 'aberto'}`);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setOpenDropdown(null);
        break;
      case 'Escape':
        setOpenDropdown(null);
        break;
    }
  };

  const toggleMobileMenu = () => {
    const newState = !mobileMenuOpen;
    setMobileMenuOpen(newState);
    announceMessage(newState ? 'Menu móvel aberto' : 'Menu móvel fechado');
  };

  // Styles
  const navStyle = {
    background: 'var(--background)',
    borderBottom: '1px solid var(--border-color)',
    position: 'relative',
    zIndex: 1000
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    position: 'relative'
  };

  const mainNavStyle = {
    display: isMobile ? 'none' : 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    alignItems: 'center'
  };

  const mobileNavStyle = {
    display: isMobile ? 'block' : 'none'
  };

  const mobileToggleStyle = {
    display: isMobile ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 0',
    width: '100%'
  };

  const toggleButtonStyle = {
    background: 'transparent',
    border: '2px solid var(--primary-blue)',
    color: 'var(--primary-blue)',
    padding: '0.5rem',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1.1rem'
  };

  const navItemStyle = {
    position: 'relative'
  };

  const navLinkStyle = (isActive, hasDropdown) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '1rem 1.5rem',
    textDecoration: 'none',
    color: isActive ? 'var(--primary-blue)' : 'var(--text-dark)',
    fontWeight: isActive ? 600 : 500,
    background: isActive ? 'var(--background-light)' : 'transparent',
    borderRadius: '6px',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    border: 'none',
    fontSize: '1rem',
    fontFamily: 'inherit'
  });

  const dropdownStyle = {
    position: 'absolute',
    top: '100%',
    left: '0',
    background: 'white',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
    minWidth: '800px',
    padding: '2rem',
    zIndex: 1000,
    opacity: openDropdown ? 1 : 0,
    visibility: openDropdown ? 'visible' : 'hidden',
    transform: openDropdown ? 'translateY(0)' : 'translateY(-10px)',
    transition: 'all 0.2s ease'
  };

  const dropdownGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem'
  };

  const dropdownSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  };

  const sectionTitleStyle = {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: 'var(--primary-blue)',
    marginBottom: '0.5rem'
  };

  const dropdownLinkStyle = {
    color: 'var(--text-dark)',
    textDecoration: 'none',
    padding: '0.5rem 0',
    fontSize: '0.9rem',
    transition: 'color 0.2s ease',
    borderRadius: '4px'
  };

  const mobileMenuStyle = {
    display: mobileMenuOpen ? 'block' : 'none',
    background: 'var(--background-light)',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    margin: '1rem 0',
    padding: '1rem'
  };

  const mobileMenuItemStyle = {
    marginBottom: '0.5rem'
  };

  const mobileLinkStyle = {
    display: 'block',
    padding: '0.75rem',
    color: 'var(--text-dark)',
    textDecoration: 'none',
    borderRadius: '4px',
    transition: 'background 0.2s ease'
  };

  // Navigation data structure
  const navigationItems = [
    {
      key: 'home',
      label: 'Home',
      href: '/',
      isSimple: true
    },
    {
      key: 'escola',
      label: 'Escola',
      href: '/escola',
      hasDropdown: true,
      sections: [
        {
          title: 'Concursos',
          links: [
            { label: 'Pessoal Docente', href: '/escola/concursos/docente' },
            { label: 'Pessoal Não Docente', href: '/escola/concursos/nao-docente' }
          ]
        },
        {
          title: 'Informação',
          links: [
            { label: 'SAE / Secretaria', href: '/escola/sae' },
            { label: 'Avisos', href: '/escola/avisos' },
            { label: 'Encarregado de Proteção de Dados', href: '/escola/protecao-dados' },
            { label: 'Conselho Geral', href: '/escola/conselho-geral' },
            { label: 'Órgãos de Gestão', href: '/escola/orgaos-gestao' },
            { label: 'Departamentos', href: '/escola/departamentos' }
          ]
        }
      ]
    },
    {
      key: 'alunos',
      label: 'Alunos / EE',
      href: '/alunos',
      hasDropdown: true,
      sections: [
        {
          title: 'Alunos / EE',
          links: [
            { label: 'Alunos / EE', href: '/alunos' },
            { label: 'Horário de Atendimento DT', href: '/alunos/horario-dt' },
            { label: 'Documentos de apoio para EE', href: '/alunos/documentos-ee' },
            { label: 'Legislação', href: '/alunos/legislacao' },
            { label: 'Calendário Escolar ESAG 24/25', href: '/alunos/calendario' },
            { label: 'Política de Avaliação e Classificação da ESAG', href: '/alunos/avaliacao' },
            { label: 'Exames & Provas', href: '/alunos/exames' }
          ]
        }
      ]
    },
    {
      key: 'atividades',
      label: 'Atividades',
      href: '/atividades',
      hasDropdown: true,
      sections: [
        {
          title: 'Desporto Escolar',
          links: [
            { label: 'Andebol', href: '/atividades/desporto/andebol' },
            { label: 'Esgrima', href: '/atividades/desporto/esgrima' },
            { label: 'Ginástica', href: '/atividades/desporto/ginastica' },
            { label: 'Voleibol', href: '/atividades/desporto/voleibol' },
            { label: '#BeActive', href: '/atividades/desporto/beactive' },
            { label: '#Pausativa', href: '/atividades/desporto/pausativa' }
          ]
        },
        {
          title: 'Projetos',
          links: [
            { label: 'Compromisso com a Ética Escolar', href: '/atividades/projetos/etica' },
            { label: 'Eco-Escolas', href: '/atividades/projetos/eco-escolas' },
            { label: 'Educação para a Saúde', href: '/atividades/projetos/saude' },
            { label: 'Jornal Viagens', href: '/atividades/projetos/jornal-viagens' },
            { label: 'Jornal Melhor Escola', href: '/atividades/projetos/jornal-escola' },
            { label: 'Microbiofilm Lab', href: '/atividades/projetos/microbiofilm' },
            { label: 'Cinema', href: '/atividades/projetos/cinema' },
            { label: 'Clube Ciência Viva', href: '/atividades/projetos/ciencia-viva' }
          ]
        },
        {
          title: 'Expo ESAG',
          links: [
            { label: 'Ambiente & Espaço Escolar', href: '/atividades/expo/ambiente' },
            { label: 'Cidadania & Inclusão', href: '/atividades/expo/cidadania' },
            { label: 'Essência', href: '/atividades/expo/essencia' },
            { label: 'Literacias & Digital', href: '/atividades/expo/literacias' },
            { label: 'Saúde & Bem-estar', href: '/atividades/expo/saude' }
          ]
        }
      ]
    },
    {
      key: 'biblioteca',
      label: 'Biblioteca',
      href: '/biblioteca',
      isSimple: true
    },
    {
      key: 'erasmus',
      label: 'Erasmus',
      href: '/erasmus',
      hasDropdown: true,
      sections: [
        {
          title: 'Erasmus',
          links: [
            { label: 'Erasmus+ na ESAG', href: '/erasmus/esag' },
            { label: 'Erasmus+', href: '/erasmus/programa' }
          ]
        }
      ]
    },
    {
      key: 'acessos',
      label: 'Acessos Rápidos',
      href: '#',
      hasDropdown: true,
      sections: [
        {
          title: 'Outros',
          links: [
            { label: 'Documentos Orientadores', href: '/outros/documentos' },
            { label: 'Serviço de Psicologia e Orientação', href: '/outros/psicologia' },
            { label: 'Oferta Educativa', href: '/outros/oferta-educativa' },
            { label: 'Selos', href: '/outros/selos' }
          ]
        },
        {
          title: 'Links Úteis',
          links: [
            { label: 'Canal de Denúncias', href: '/acessos/denuncia' },
            { label: 'GIAE Online', href: '/acessos/giae' },
            { label: 'Office 365', href: '/acessos/office365' }
          ]
        }
      ]
    },
    {
      key: 'contactos',
      label: 'Contactos',
      href: '/contactos',
      isSimple: true
    }
  ];

  const renderDropdown = (item) => {
    if (!item.hasDropdown || openDropdown !== item.key) return null;

    return (
      <div 
        style={dropdownStyle}
        role="region"
        aria-label={`Menu ${item.label}`}
        onMouseEnter={() => clearTimeout(timeoutRef.current)}
        onMouseLeave={handleMouseLeave}
      >
        <div style={dropdownGridStyle}>
          {item.sections.map((section, index) => (
            <div key={index} style={dropdownSectionStyle}>
              <h3 style={sectionTitleStyle}>{section.title}</h3>
              {section.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  to={link.href}
                  style={dropdownLinkStyle}
                  onMouseOver={(e) => {
                    e.target.style.color = 'var(--primary-blue)';
                    e.target.style.paddingLeft = '0.5rem';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = 'var(--text-dark)';
                    e.target.style.paddingLeft = '0';
                  }}
                  onClick={() => setOpenDropdown(null)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderMobileMenu = () => {
    if (!mobileMenuOpen) return null;

    return (
      <div style={mobileMenuStyle} role="navigation" aria-label="Menu móvel">
        {navigationItems.map((item) => (
          <div key={item.key} style={mobileMenuItemStyle}>
            {item.isSimple ? (
              <Link
                to={item.href}
                style={mobileLinkStyle}
                onClick={() => setMobileMenuOpen(false)}
                onMouseOver={(e) => {
                  e.target.style.background = 'var(--background-light)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                }}
              >
                {item.label}
              </Link>
            ) : (
              <div>
                <div style={{ ...mobileLinkStyle, fontWeight: 600, color: 'var(--primary-blue)' }}>
                  {item.label}
                </div>
                {item.sections?.map((section, sectionIndex) => (
                  <div key={sectionIndex} style={{ marginLeft: '1rem' }}>
                    <div style={{ 
                      fontWeight: 600, 
                      fontSize: '0.9rem', 
                      color: 'var(--text-dark)',
                      margin: '0.5rem 0'
                    }}>
                      {section.title}
                    </div>
                    {section.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        to={link.href}
                        style={{ 
                          ...mobileLinkStyle, 
                          fontSize: '0.85rem',
                          paddingLeft: '1rem'
                        }}
                        onClick={() => setMobileMenuOpen(false)}
                        onMouseOver={(e) => {
                          e.target.style.background = 'var(--background-light)';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.background = 'transparent';
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <nav style={navStyle} ref={navRef} role="navigation" aria-label="Navegação principal">
      <div style={containerStyle}>
        
        {/* Mobile Toggle */}
        <div style={mobileToggleStyle}>
          <span style={{ fontWeight: 600, color: 'var(--text-dark)' }}>Menu</span>
          <button
            style={toggleButtonStyle}
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Alternar menu de navegação"
          >
            <span aria-hidden="true">{mobileMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul style={mainNavStyle}>
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.href || 
                           (item.href !== '/' && location.pathname.startsWith(item.href));

            return (
              <li key={item.key} style={navItemStyle}>
                {item.isSimple ? (
                  <Link
                    to={item.href}
                    style={navLinkStyle(isActive, false)}
                    aria-current={isActive ? 'page' : undefined}
                    onMouseOver={(e) => {
                      if (!isActive) {
                        e.target.style.background = 'var(--background-light)';
                        e.target.style.color = 'var(--primary-blue)';
                      }
                    }}
                    onMouseOut={(e) => {
                      if (!isActive) {
                        e.target.style.background = 'transparent';
                        e.target.style.color = 'var(--text-dark)';
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      style={navLinkStyle(isActive, true)}
                      onMouseEnter={() => handleMouseEnter(item.key)}
                      onMouseLeave={handleMouseLeave}
                      onKeyDown={(e) => handleKeyDown(e, item.key)}
                      aria-expanded={openDropdown === item.key}
                      aria-haspopup="true"
                      aria-controls={`dropdown-${item.key}`}
                      onMouseOver={(e) => {
                        if (!isActive) {
                          e.target.style.background = 'var(--background-light)';
                          e.target.style.color = 'var(--primary-blue)';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (!isActive) {
                          e.target.style.background = 'transparent';
                          e.target.style.color = 'var(--text-dark)';
                        }
                      }}
                    >
                      {item.label}
                      <span 
                        aria-hidden="true"
                        style={{
                          transform: openDropdown === item.key ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease'
                        }}
                      >
                        ▼
                      </span>
                    </button>
                    <div id={`dropdown-${item.key}`}>
                      {renderDropdown(item)}
                    </div>
                  </>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu */}
        <div id="mobile-menu">
          {renderMobileMenu()}
        </div>
      </div>
    </nav>
  );
};

export default MegaMenuNavigation;