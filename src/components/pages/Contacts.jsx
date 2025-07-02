import React, { useState } from 'react';
import Layout from '../layout/Layout';
import { useAccessibility } from '../../hooks/useAccessibility';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    userType: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { announceMessage } = useAccessibility();

  // Styles
  const pageStyle = {
    background: 'var(--background-light)',
    minHeight: '100vh',
    paddingBottom: '2rem'
  };

  const heroStyle = {
    background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%)',
    color: 'white',
    padding: '3rem 0',
    textAlign: 'center'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  };

  const contentStyle = {
    padding: '3rem 0'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '3rem',
    marginBottom: '3rem'
  };

  const cardStyle = {
    background: 'white',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    border: '1px solid var(--border-color)'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  };

  const inputGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  };

  const labelStyle = {
    fontWeight: 600,
    color: 'var(--text-dark)',
    fontSize: '1rem'
  };

  const inputStyle = {
    padding: '0.75rem',
    border: '2px solid var(--border-color)',
    borderRadius: '6px',
    fontSize: '1rem',
    transition: 'border-color 0.2s ease',
    fontFamily: 'inherit'
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '120px',
    resize: 'vertical'
  };

  const buttonStyle = {
    background: 'var(--primary-blue)',
    color: 'white',
    padding: '0.75rem 2rem',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  };

  const errorStyle = {
    color: 'var(--warning-red)',
    fontSize: '0.875rem',
    marginTop: '0.25rem'
  };

  const successStyle = {
    background: 'var(--success-green)',
    color: 'white',
    padding: '1rem',
    borderRadius: '6px',
    textAlign: 'center',
    fontWeight: 600
  };

  const contactInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  };

  const infoSectionStyle = {
    paddingBottom: '1.5rem',
    borderBottom: '1px solid var(--border-color)'
  };

  const infoTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: 'var(--primary-blue)',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const infoItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '0.75rem',
    padding: '0.5rem 0'
  };

  const iconStyle = {
    fontSize: '1.25rem',
    color: 'var(--primary-blue)',
    minWidth: '24px'
  };

  const linkStyle = {
    color: 'var(--text-dark)',
    textDecoration: 'none',
    transition: 'color 0.2s ease'
  };

  const mapContainerStyle = {
    background: 'white',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    border: '1px solid var(--border-color)',
    textAlign: 'center'
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'O nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'O email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Por favor, insira um email válido';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'O assunto é obrigatório';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'A mensagem é obrigatória';
    } else if (formData.message.length < 10) {
      newErrors.message = 'A mensagem deve ter pelo menos 10 caracteres';
    }

    if (!formData.userType) {
      newErrors.userType = 'Por favor, selecione o tipo de utilizador';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      announceMessage('Por favor, corrija os erros no formulário');
      // Focus on first error
      const firstErrorField = Object.keys(errors)[0];
      const errorElement = document.getElementById(firstErrorField);
      if (errorElement) {
        errorElement.focus();
      }
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      announceMessage('Mensagem enviada com sucesso!');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        userType: ''
      });
    } catch (error) {
      announceMessage('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const inputFocusStyle = {
    borderColor: 'var(--focus-outline)',
    outline: '2px solid var(--focus-outline)',
    outlineOffset: '2px'
  };

  return (
    <Layout>
      <div style={pageStyle}>
        {/* Hero Section */}
        <section style={heroStyle} aria-labelledby="contacts-title">
          <div style={containerStyle}>
            <h1 id="contacts-title" style={{ 
              fontSize: '3rem', 
              fontWeight: 700, 
              marginBottom: '1rem' 
            }}>
              Contacte-nos
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              opacity: 0.9,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Estamos aqui para ajudar. Entre em contacto connosco através dos meios disponíveis.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section style={contentStyle}>
          <div style={containerStyle}>
            <div style={gridStyle}>
              
              {/* Contact Form */}
              <div style={cardStyle}>
                <h2 style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: 600, 
                  marginBottom: '1.5rem',
                  color: 'var(--text-dark)'
                }}>
                  Envie-nos uma Mensagem
                </h2>
                
                <p style={{ 
                  color: 'var(--text-light)', 
                  marginBottom: '2rem' 
                }}>
                  Os campos assinalados com (*) são de preenchimento obrigatório
                </p>

                {isSubmitted ? (
                  <div style={successStyle} role="alert">
                    ✅ Mensagem enviada com sucesso! Entraremos em contacto brevemente.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={formStyle} noValidate>
                    
                    {/* User Type */}
                    <div style={inputGroupStyle}>
                      <label htmlFor="userType" style={labelStyle}>
                        Tipo de Utilizador *
                      </label>
                      <select
                        id="userType"
                        name="userType"
                        value={formData.userType}
                        onChange={handleInputChange}
                        style={{
                          ...inputStyle,
                          backgroundColor: 'white'
                        }}
                        onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'var(--border-color)';
                          e.target.style.outline = 'none';
                        }}
                        aria-invalid={errors.userType ? 'true' : 'false'}
                        aria-describedby={errors.userType ? 'userType-error' : undefined}
                        required
                      >
                        <option value="">Selecione...</option>
                        <option value="aluno">Aluno</option>
                        <option value="encarregado">Encarregado de Educação</option>
                        <option value="docente">Docente</option>
                        <option value="funcionario">Funcionário</option>
                        <option value="outro">Outro</option>
                      </select>
                      {errors.userType && (
                        <div id="userType-error" style={errorStyle} role="alert">
                          {errors.userType}
                        </div>
                      )}
                    </div>

                    {/* Name */}
                    <div style={inputGroupStyle}>
                      <label htmlFor="name" style={labelStyle}>
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        style={inputStyle}
                        onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'var(--border-color)';
                          e.target.style.outline = 'none';
                        }}
                        aria-invalid={errors.name ? 'true' : 'false'}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        required
                        autoComplete="name"
                      />
                      {errors.name && (
                        <div id="name-error" style={errorStyle} role="alert">
                          {errors.name}
                        </div>
                      )}
                    </div>

                    {/* Email */}
                    <div style={inputGroupStyle}>
                      <label htmlFor="email" style={labelStyle}>
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        style={inputStyle}
                        onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'var(--border-color)';
                          e.target.style.outline = 'none';
                        }}
                        aria-invalid={errors.email ? 'true' : 'false'}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        required
                        autoComplete="email"
                      />
                      {errors.email && (
                        <div id="email-error" style={errorStyle} role="alert">
                          {errors.email}
                        </div>
                      )}
                    </div>

                    {/* Phone */}
                    <div style={inputGroupStyle}>
                      <label htmlFor="phone" style={labelStyle}>
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        style={inputStyle}
                        onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'var(--border-color)';
                          e.target.style.outline = 'none';
                        }}
                        autoComplete="tel"
                        placeholder="(opcional)"
                      />
                    </div>

                    {/* Subject */}
                    <div style={inputGroupStyle}>
                      <label htmlFor="subject" style={labelStyle}>
                        Assunto *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        style={inputStyle}
                        onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'var(--border-color)';
                          e.target.style.outline = 'none';
                        }}
                        aria-invalid={errors.subject ? 'true' : 'false'}
                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                        required
                      />
                      {errors.subject && (
                        <div id="subject-error" style={errorStyle} role="alert">
                          {errors.subject}
                        </div>
                      )}
                    </div>

                    {/* Message */}
                    <div style={inputGroupStyle}>
                      <label htmlFor="message" style={labelStyle}>
                        Mensagem *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        style={textareaStyle}
                        onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'var(--border-color)';
                          e.target.style.outline = 'none';
                        }}
                        aria-invalid={errors.message ? 'true' : 'false'}
                        aria-describedby={errors.message ? 'message-error message-help' : 'message-help'}
                        required
                        placeholder="Descreva a sua questão ou pedido..."
                      />
                      <div id="message-help" style={{ 
                        fontSize: '0.875rem', 
                        color: 'var(--text-light)' 
                      }}>
                        Mínimo de 10 caracteres ({formData.message.length}/10)
                      </div>
                      {errors.message && (
                        <div id="message-error" style={errorStyle} role="alert">
                          {errors.message}
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      style={{
                        ...buttonStyle,
                        opacity: isSubmitting ? 0.7 : 1,
                        cursor: isSubmitting ? 'not-allowed' : 'pointer'
                      }}
                      onMouseOver={(e) => {
                        if (!isSubmitting) {
                          e.target.style.background = 'var(--secondary-blue)';
                        }
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'var(--primary-blue)';
                      }}
                      disabled={isSubmitting}
                      aria-describedby="submit-help"
                    >
                      {isSubmitting ? 'A Enviar...' : 'Enviar Mensagem'}
                    </button>
                    <div id="submit-help" className="sr-only">
                      Ao submeter este formulário, os seus dados serão enviados para a secretaria da escola
                    </div>
                  </form>
                )}
              </div>

              {/* Contact Information */}
              <div style={contactInfoStyle}>
                
                {/* Address */}
                <div style={cardStyle}>
                  <div style={infoSectionStyle}>
                    <h3 style={infoTitleStyle}>
                      <span style={iconStyle} aria-hidden="true">📍</span>
                      Morada
                    </h3>
                    <address style={{ fontStyle: 'normal' }}>
                      <div style={infoItemStyle}>
                        <span style={iconStyle} aria-hidden="true">🏢</span>
                        <div>
                          <div>Praceta Dr. José Sampaio</div>
                          <div>4430-090 Vila Nova de Gaia</div>
                        </div>
                      </div>
                      <div style={infoItemStyle}>
                        <span style={iconStyle} aria-hidden="true">🌍</span>
                        <div>
                          <div>GPS: 41.122922, -8.602778</div>
                          <div style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>
                            41° 7′ 22.52" N, 8° 36′ 10.00" W
                          </div>
                        </div>
                      </div>
                    </address>
                  </div>

                  {/* Contact Details */}
                  <div style={infoSectionStyle}>
                    <h3 style={infoTitleStyle}>
                      <span style={iconStyle} aria-hidden="true">📞</span>
                      Contactos
                    </h3>
                    <div style={infoItemStyle}>
                      <span style={iconStyle} aria-hidden="true">☎️</span>
                      <div>
                        <a href="tel:+351223745640" style={linkStyle}>
                          223 745 640
                        </a>
                        <div style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>
                          Secretaria (linha principal)
                        </div>
                      </div>
                    </div>
                    <div style={infoItemStyle}>
                      <span style={iconStyle} aria-hidden="true">📠</span>
                      <div>
                        <a href="tel:+351223745641" style={linkStyle}>
                          223 745 641
                        </a>
                        <div style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>
                          Fax
                        </div>
                      </div>
                    </div>
                    <div style={infoItemStyle}>
                      <span style={iconStyle} aria-hidden="true">📧</span>
                      <a 
                        href="mailto:secretaria@esagarrett.com.pt" 
                        style={linkStyle}
                        onMouseOver={(e) => {
                          e.target.style.color = 'var(--primary-blue)';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.color = 'var(--text-dark)';
                        }}
                      >
                        secretaria@esagarrett.com.pt
                      </a>
                    </div>
                  </div>

                  {/* Transport */}
                  <div>
                    <h3 style={infoTitleStyle}>
                      <span style={iconStyle} aria-hidden="true">🚇</span>
                      Transportes
                    </h3>
                    <div style={infoItemStyle}>
                      <span style={iconStyle} aria-hidden="true">🚊</span>
                      <div>
                        <div style={{ fontWeight: 600 }}>Linha Amarela (Metro)</div>
                        <div style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>
                          Saída: João de Deus ou D. João II
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div style={cardStyle}>
                  <h3 style={infoTitleStyle}>
                    <span style={iconStyle} aria-hidden="true">⏰</span>
                    Horários de Atendimento
                  </h3>
                  <div style={infoItemStyle}>
                    <span style={iconStyle} aria-hidden="true">📅</span>
                    <div>
                      <div style={{ fontWeight: 600 }}>Segunda a Sexta-feira</div>
                      <div>08:00 - 18:00</div>
                    </div>
                  </div>
                  <div style={infoItemStyle}>
                    <span style={iconStyle} aria-hidden="true">🕐</span>
                    <div>
                      <div style={{ fontWeight: 600 }}>Atendimento ao Público</div>
                      <div>09:00 - 17:00</div>
                    </div>
                  </div>
                  <p style={{ 
                    fontSize: '0.875rem', 
                    color: 'var(--text-light)',
                    marginTop: '1rem',
                    fontStyle: 'italic'
                  }}>
                    * Durante as interrupções letivas, os horários poderão ser ajustados
                  </p>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div style={mapContainerStyle}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 600, 
                marginBottom: '1rem',
                color: 'var(--text-dark)'
              }}>
                Localização
              </h3>
              <div style={{
                width: '100%',
                height: '400px',
                background: 'var(--background-light)',
                border: '2px solid var(--border-color)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <span style={{ fontSize: '3rem' }} aria-hidden="true">🗺️</span>
                <p style={{ color: 'var(--text-light)' }}>
                  Mapa interativo será carregado aqui
                </p>
                <a 
                  href="https://maps.google.com/?q=41.122922,-8.602778"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...buttonStyle,
                    textDecoration: 'none',
                    display: 'inline-block'
                  }}
                  aria-label="Abrir localização no Google Maps - abre numa nova janela"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contacts;