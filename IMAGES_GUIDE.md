# 图片使用指南

## 图片文件夹位置

项目中有两个图片文件夹：

### 1. `public/images/` （推荐用于博客文章中的图片）

**用途**：存放博客文章中的图片

**使用方法**：
在 Markdown 文件中直接引用：
```markdown
![描述](/images/your-image.jpg)
```

或者在 React 组件中：
```jsx
<img src="/images/your-image.jpg" alt="描述" />
```

**优点**：
- 可以直接通过URL访问
- 适合在Markdown中使用
- 不需要import

### 2. `src/assets/images/` （用于组件中的图片）

**用途**：存放组件中使用的图片（如logo、图标等）

**使用方法**：
```jsx
import myImage from '../assets/images/my-image.jpg'

function MyComponent() {
  return <img src={myImage} alt="描述" />
}
```

**优点**：
- Vite会自动优化图片
- 支持动态导入

## 推荐使用方式

对于博客文章中的图片，建议使用 `public/images/`：

1. 将图片放在 `public/images/` 目录
2. 在 Markdown 文件中使用：
   ```markdown
   ![图片描述](/images/your-image.jpg)
   ```

## 图片格式建议

- JPG：适合照片
- PNG：适合需要透明背景的图片
- WebP：现代格式，文件更小
- SVG：适合图标和简单图形

## 示例

假设你在 `public/images/` 中放了一张 `sunset.jpg`：

在 Markdown 文件中：
```markdown
![美丽的日落](/images/sunset.jpg)
```

在 React 组件中：
```jsx
<img src="/images/sunset.jpg" alt="美丽的日落" />
```

