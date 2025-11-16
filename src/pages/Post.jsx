import { useParams, Link } from 'react-router-dom'
import { FiCalendar, FiTag, FiArrowLeft, FiFileText } from 'react-icons/fi'
import { getPostBySlug } from '../utils/posts'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../utils/translations'
import './Post.css'

function Post() {
  const { category, slug } = useParams()
  const post = getPostBySlug(category, slug)
  const { language } = useLanguage()
  const t = (key) => getTranslation(key, language)

  if (!post) {
    return (
      <div className="post-not-found">
        <h2>{t('postNotFound')}</h2>
        <Link to={`/${category}`}>{t('backTo')} {category}</Link>
      </div>
    )
  }

  const formatDate = (dateString) => {
    // 强制使用英文locale，即使浏览器设置是中文
    const date = new Date(dateString)
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      localeMatcher: 'lookup'
    }
    return date.toLocaleDateString('en-US', options)
  }

  return (
    <div className="post-page">
      <Link to={`/${category}`} className="back-link">
        <FiArrowLeft className="back-icon" />
        <span>{t('backTo')} {category ? t(category) : category}</span>
      </Link>

      <article className="post-content">
        <header className="post-header">
          <div className="post-title-wrapper">
            <FiFileText className="post-title-icon" />
            <h1 className="post-title">{post.title}</h1>
          </div>
          <div className="post-meta">
            <div className="meta-item">
              <FiCalendar className="meta-icon" />
              <time className="post-date">{formatDate(post.date)}</time>
            </div>
            {post.tags.length > 0 && (
              <div className="post-tags">
                <FiTag className="meta-icon" />
                {post.tags.map((tag) => (
                  <span key={tag} className="post-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  )
}

export default Post

