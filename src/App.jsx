import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Category from './pages/Category'
import Post from './pages/Post'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<Category />} />
            <Route path="/:category/:slug" element={<Post />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  )
}

export default App

