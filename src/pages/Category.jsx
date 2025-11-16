import { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FiCalendar, FiTag, FiArrowRight, FiX, FiBriefcase, FiUser, FiHeart, FiFileText } from 'react-icons/fi'
import { getPostsByCategory, getAllTags, searchPosts } from '../utils/posts'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../utils/translations'
import SearchBar from '../components/SearchBar'
import './Category.css'

function Category() {
  const { category } = useParams()
  const { language } = useLanguage()
  const t = (key) => getTranslation(key, language)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState([])
  const [dateFilter, setDateFilter] = useState({ start: '', end: '' })

  const allTags = useMemo(() => {
    try {
      return getAllTags(category)
    } catch (error) {
      console.error('Error loading tags:', error)
      return []
    }
  }, [category])

  const posts = useMemo(() => {
    try {
      let result
      if (searchQuery || selectedTags.length > 0 || dateFilter.start || dateFilter.end) {
        result = searchPosts(searchQuery, {
          category,
          tags: selectedTags,
          startDate: dateFilter.start,
          endDate: dateFilter.end,
        })
      } else {
        result = getPostsByCategory(category)
      }
      return result
    } catch (error) {
      console.error('Error loading posts:', error)
      return []
    }
  }, [category, searchQuery, selectedTags, dateFilter])

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  const clearAllFilters = () => {
    setSearchQuery('')
    setSelectedTags([])
    setDateFilter({ start: '', end: '' })
  }

  const clearSearch = () => {
    setSearchQuery('')
  }

  const clearDate = () => {
    setDateFilter({ start: '', end: '' })
  }

  const clearTags = () => {
    setSelectedTags([])
  }

  const hasActiveTags = selectedTags.length > 0

  const formatDate = (dateString) => {
    // 强制使用英文locale
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

      const categoryIcons = {
        work: FiBriefcase,
        personal: FiUser,
        interest: FiHeart,
      }

      const CategoryIcon = categoryIcons[category] || FiFileText

      return (
        <div className="category-page">
          <div className="category-header">
            <div className="category-icon-wrapper">
              <CategoryIcon className="category-icon" />
            </div>
            <h1 className="category-title">{category?.charAt(0).toUpperCase() + category?.slice(1)}</h1>
          </div>

          <div className="filters-section">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              dateFilter={dateFilter}
              onDateFilterChange={setDateFilter}
              onClearSearch={clearSearch}
              onClearDate={clearDate}
            />

            {allTags.length > 0 && (
              <div className="tags-filter">
                <div className="tags-header">
                  <span className="tags-label">{t('filterByTags')}</span>
                  {hasActiveTags && (
                    <button className="clear-filters-btn" onClick={clearTags}>
                      <FiX />
                      <span>{t('clearTags')}</span>
                    </button>
                  )}
                </div>
            <div className="tags-list">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  className={`tag ${selectedTags.includes(tag) ? 'active' : ''}`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

          <div className="posts-list">
            {posts.length === 0 ? (
              <p className="no-posts">{t('noPosts')}</p>
            ) : (
          posts.map((post) => (
            <article key={post.slug} className="post-card">
              <Link to={`/${category}/${post.slug}`} className="post-link">
                <h2 className="post-title">{post.title}</h2>
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
                    <p className="post-excerpt">{post.excerpt}</p>
                    <div className="post-read-more">
                      <span>{language === 'en' ? 'Read more' : '阅读更多'}</span>
                      <FiArrowRight className="arrow-icon" />
                    </div>
              </Link>
            </article>
          ))
        )}
      </div>
    </div>
  )
}

export default Category

