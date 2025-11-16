import { Link, useLocation } from 'react-router-dom'
import { HiOutlineSparkles } from 'react-icons/hi2'
import { FiBriefcase, FiUser, FiHeart } from 'react-icons/fi'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../utils/translations'
import './Layout.css'

const categories = [
  { nameKey: 'work', path: '/work', icon: FiBriefcase },
  { nameKey: 'personal', path: '/personal', icon: FiUser },
  { nameKey: 'interest', path: '/interest', icon: FiHeart },
]

function Layout({ children }) {
  const location = useLocation()
  const { language, toggleLanguage } = useLanguage()
  const t = (key) => getTranslation(key, language)

  return (
    <div className="layout">
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo">
            <HiOutlineSparkles className="logo-icon" />
            <span>{t('blog')}</span>
          </Link>
          <nav className="nav">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <Link
                  key={cat.path}
                  to={cat.path}
                  className={`nav-link ${location.pathname.startsWith(cat.path) ? 'active' : ''}`}
                >
                  <Icon className="nav-icon" />
                  <span>{t(cat.nameKey)}</span>
                </Link>
              )
            })}
          </nav>
          <button className="language-toggle" onClick={toggleLanguage}>
            {language === 'en' ? '中文' : 'EN'}
          </button>
        </div>
      </header>
      <main className="main-content">{children}</main>
      <footer className="footer">
        <div className="footer-content">
          <p>{t('footer').replace('{year}', new Date().getFullYear())}</p>
          <p className="footer-subtitle">{t('footerSubtitle')}</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout

