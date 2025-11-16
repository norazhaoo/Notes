import { Link } from 'react-router-dom'
import { FiBriefcase, FiUser, FiHeart, FiArrowRight, FiMail, FiPhone, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../utils/translations'
import './Home.css'

function Home() {
  const { language } = useLanguage()
  const t = (key) => getTranslation(key, language)

  const categories = [
    {
      nameKey: 'work',
      path: '/work',
      icon: FiBriefcase,
      descKey: 'workDesc',
      gradient: 'gradient-1',
    },
    {
      nameKey: 'personal',
      path: '/personal',
      icon: FiUser,
      descKey: 'personalDesc',
      gradient: 'gradient-2',
    },
    {
      nameKey: 'interest',
      path: '/interest',
      icon: FiHeart,
      descKey: 'interestDesc',
      gradient: 'gradient-3',
    },
  ]

  return (
    <div className="home">
      <section className="intro">
        <div className="intro-content">
          <div className="profile-section">
            <div className="profile-image-wrapper">
              <img 
                src="/images/profile.png" 
                alt="Nora" 
                className="profile-image"
              />
              <div className="profile-decoration"></div>
            </div>
          </div>
          <div className="intro-text-content">
            <div className="intro-badge">{t('welcome')}</div>
            <h1 className="intro-title">
              {t('hello')} <span className="highlight">Nora</span>
            </h1>
            <p className="intro-text">
              {t('intro1')}
            </p>
            <p className="intro-text">
              {t('intro2')}
            </p>
          </div>
        </div>
      </section>

      <section className="categories-preview">
        <h2 className="section-title">
          <span className="title-line"></span>
          <span className="title-text">{t('categories')}</span>
          <span className="title-line"></span>
        </h2>
        <div className="category-cards">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <Link key={cat.path} to={cat.path} className={`category-card ${cat.gradient}`}>
                <div className="card-icon-wrapper">
                  <Icon className="card-icon" />
                </div>
                <h3>{t(cat.nameKey)}</h3>
                <p>{t(cat.descKey)}</p>
                <div className="card-arrow">
                  <FiArrowRight />
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="contact-section">
        <h2 className="section-title">
          <span className="title-line"></span>
          <span className="title-text">{t('contact')}</span>
          <span className="title-line"></span>
        </h2>
        <div className="contact-content">
          <p className="contact-subtitle">{t('getInTouch')}</p>
          <p className="contact-desc">{t('contactDesc')}</p>
          <div className="contact-links">
            <a href="mailto:norazhao039@gmail.com" className="contact-link" target="_blank" rel="noopener noreferrer" title={t('email')}>
              <FiMail className="contact-icon" />
            </a>
            <a href="tel:+8618201791399" className="contact-link" target="_blank" rel="noopener noreferrer" title={t('phone')}>
              <FiPhone className="contact-icon" />
            </a>
            <a href="https://www.linkedin.com/in/nora-zhao-0210b41bb" className="contact-link" target="_blank" rel="noopener noreferrer" title={t('linkedin')}>
              <FiLinkedin className="contact-icon" />
            </a>
            <a href="https://www.instagram.com/norazhaoo/" className="contact-link" target="_blank" rel="noopener noreferrer" title={t('instagram')}>
              <FiInstagram className="contact-icon" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

