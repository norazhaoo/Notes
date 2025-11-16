import { FiX, FiSearch, FiCalendar } from 'react-icons/fi'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../utils/translations'
import './SearchBar.css'

function SearchBar({ value, onChange, dateFilter, onDateFilterChange, onClearSearch, onClearDate }) {
  const { language } = useLanguage()
  const t = (key) => getTranslation(key, language)
  const hasSearch = value
  const hasDate = dateFilter.start || dateFilter.end

  const handleClearSearch = () => {
    if (onClearSearch) {
      onClearSearch()
    } else {
      onChange('')
    }
  }

  const handleClearDate = () => {
    if (onClearDate) {
      onClearDate()
    } else {
      onDateFilterChange({ start: '', end: '' })
    }
  }

  return (
    <div className="search-bar">
      <div className="search-input-wrapper">
        <FiSearch className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder={t('searchPlaceholder')}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {hasSearch && (
          <button className="clear-search-btn" onClick={handleClearSearch} title="Clear search">
            <FiX />
          </button>
        )}
      </div>
      <div className="date-filters">
        <div className="date-input-wrapper">
          <FiCalendar className="date-icon" />
          <input
            type="date"
            className="date-input"
            placeholder="Start date"
            value={dateFilter.start}
            lang="en"
            onChange={(e) =>
              onDateFilterChange({ ...dateFilter, start: e.target.value })
            }
          />
        </div>
        <span className="date-separator">to</span>
        <div className="date-input-wrapper">
          <FiCalendar className="date-icon" />
          <input
            type="date"
            className="date-input"
            placeholder="End date"
            value={dateFilter.end}
            lang="en"
            onChange={(e) =>
              onDateFilterChange({ ...dateFilter, end: e.target.value })
            }
          />
        </div>
        {hasDate && (
          <button className="clear-date-btn" onClick={handleClearDate} title={t('clearDates')}>
            <FiX />
            <span>{t('clearDates')}</span>
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchBar

