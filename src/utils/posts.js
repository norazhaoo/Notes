import matter from 'gray-matter'
import { marked } from 'marked'
import { Buffer } from 'buffer'

// 确保 Buffer 在全局可用
if (typeof window !== 'undefined') {
  window.Buffer = Buffer
}

// 动态导入所有markdown文件
const postModules = import.meta.glob('../posts/**/*.md', { eager: true, as: 'raw' })

// 获取所有posts
export function getAllPosts() {
  const posts = []

  const moduleKeys = Object.keys(postModules)
  
  if (moduleKeys.length === 0) {
    console.error('No markdown files found! Check if files exist in src/posts/')
    return []
  }

  try {
    moduleKeys.forEach((path) => {
      try {
        const rawContent = postModules[path]
        
        if (!rawContent) {
          return
        }
        
        // 处理路径：从 '../posts/work/post.md' 提取 'post'
        const slug = path
          .replace(/^\.\.\/posts\//, '')
          .replace(/\.md$/, '')
          .split('/')
          .pop()
        
        const { data, content } = matter(rawContent)
        
        const post = {
          slug,
          category: data.category || 'work',
          title: data.title || 'Untitled',
          date: data.date || new Date().toISOString(),
          tags: data.tags || [],
          excerpt: data.excerpt || content.substring(0, 150) + '...',
          content: marked(content),
          rawContent: content,
        }
        
        posts.push(post)
      } catch (error) {
        console.error(`Error processing post ${path}:`, error)
      }
    })
  } catch (error) {
    console.error('Error loading posts:', error)
  }

  // 按日期排序，最新的在前
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

// 根据分类获取posts
export function getPostsByCategory(category) {
  return getAllPosts().filter((post) => post.category === category)
}

// 根据slug获取单个post
export function getPostBySlug(category, slug) {
  const posts = getPostsByCategory(category)
  return posts.find((post) => post.slug === slug)
}

// 搜索posts
export function searchPosts(query, filters = {}) {
  let posts = getAllPosts()

  // 按分类过滤
  if (filters.category) {
    posts = posts.filter((post) => post.category === filters.category)
  }

  // 按tag过滤
  if (filters.tags && filters.tags.length > 0) {
    posts = posts.filter((post) =>
      filters.tags.some((tag) => post.tags.includes(tag))
    )
  }

  // 按日期范围过滤
  if (filters.startDate) {
    posts = posts.filter(
      (post) => new Date(post.date) >= new Date(filters.startDate)
    )
  }
  if (filters.endDate) {
    posts = posts.filter(
      (post) => new Date(post.date) <= new Date(filters.endDate)
    )
  }

  // 关键词搜索 - 只匹配标题（任意字符匹配）
  if (query) {
    const lowerQuery = query.toLowerCase()
    posts = posts.filter((post) =>
      post.title.toLowerCase().includes(lowerQuery)
    )
  }

  return posts
}

// 获取所有tags
export function getAllTags(category = null) {
  let posts = getAllPosts()
  if (category) {
    posts = posts.filter((post) => post.category === category)
  }
  const tagSet = new Set()
  posts.forEach((post) => {
    post.tags.forEach((tag) => tagSet.add(tag))
  })
  return Array.from(tagSet).sort()
}

