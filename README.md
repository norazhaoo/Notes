# Personal Blog

A clean and elegant personal blog website built with React.

## Features

- 🎨 Clean and elegant black, white, and gray color scheme
- 📝 Markdown-based blog post management
- 🏷️ Category system (Work, Personal, Interest)
- 🔍 Powerful search functionality (keywords, date, tags)
- 📱 Responsive design with mobile support
- 🌐 Bilingual support (English/Chinese)
- 📧 Contact section with social links

## Tech Stack

- React 18
- React Router
- Vite
- Marked (Markdown parsing)
- Gray Matter (Front Matter parsing)
- React Icons

## Quick Start

### Install Dependencies

```bash
npm install
```

### Development Mode

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## File Storage Location

**All Markdown post files are stored in the `src/posts/` directory:**

```
src/posts/
  ├── work/          # Work-related posts
  │   ├── react-best-practices.md
  │   └── project-management.md
  ├── personal/      # Personal posts
  │   ├── reading-habits.md
  │   └── travel-reflection.md
  └── interest/      # Interest-related posts
      ├── cooking-adventure.md
      └── photography-tips.md
```

### How It Works

1. **Auto-scanning**: The system uses Vite's `import.meta.glob` to automatically scan all `.md` files in the `src/posts/` directory at build time
2. **Auto-categorization**: Posts are automatically displayed on the corresponding category page based on the `category` field in the file's Front Matter
3. **New post display**: After creating a new file, **you need to refresh the browser page** to see the new post

## Adding New Posts

### Method: Manual File Creation

Create a Markdown file in the corresponding category directory under `src/posts/`:

```
src/posts/
  ├── work/
  │   └── your-post.md
  ├── personal/
  │   └── your-post.md
  └── interest/
      └── your-post.md
```

Each post needs to include Front Matter at the beginning of the file:

```markdown
---
title: Post Title
category: work  # work, personal, or interest
date: 2024-01-01
tags: [tag1, tag2, tag3]
excerpt: Post excerpt
---

# Post Content
```

**Note**:
- Posts are stored in the file system
- After creating a new file, refresh the browser page to see the new post
- If using a development server, you may need to restart it to recognize new files

## Project Structure

```
src/
  ├── components/     # Reusable components
  ├── pages/          # Page components
  ├── posts/          # Markdown posts
  ├── utils/          # Utility functions
  ├── contexts/       # React contexts
  └── App.jsx         # Main application component
```

## Deployment to GitHub Pages

This project can be deployed to GitHub Pages. Follow these steps:

### Automatic Deployment (Recommended)

1. **Update the base path in `vite.config.js`**:
   - If your repository name is `username.github.io`, set `base: '/'`
   - If your repository name is something else (e.g., `Notes`), set `base: '/Notes/'`

2. **Enable GitHub Actions**:
   - Go to your repository Settings → Actions → General
   - Enable "Workflow permissions" and select "Read and write permissions"
   - Check "Allow GitHub Actions to create and approve pull requests"

3. **Push to GitHub**:
   - The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy your site
   - Push your code to GitHub:
     ```bash
     git add .
     git commit -m "Initial commit with GitHub Pages setup"
     git push origin main
     ```
   - **Every push to the `main` branch will automatically trigger a new deployment**
   - Go to your repository on GitHub → Actions tab
   - Wait for the workflow to complete (it will create the `gh-pages` branch automatically on first run)
   - After the workflow completes, go to Settings → Pages
   - Select "gh-pages" branch and "/ (root)" folder
   - Click Save
   - Your site will be available at `https://username.github.io/Notes/` (or `https://username.github.io/` if using username.github.io)
   - **Note**: The `gh-pages` branch will be created automatically after the first successful workflow run

### Manual Trigger

You can also manually trigger the deployment:
- Go to your repository on GitHub → Actions tab
- Select "Deploy to GitHub Pages" workflow
- Click "Run workflow" button
- Select the branch (usually `main`) and click "Run workflow"

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add deploy script to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Important Notes

- Make sure to update the `base` path in `vite.config.js` to match your repository name
- If using a custom domain, add a `CNAME` file in the `public` folder
- The site will be available after a few minutes of deployment

## Customization

- Modify CSS variables in `src/index.css` to adjust the color scheme
- Update personal introduction in `src/pages/Home.jsx`
- Modify navigation in `src/components/Layout.jsx`
- Update contact information in `src/pages/Home.jsx`
- Add translations in `src/utils/translations.js`
