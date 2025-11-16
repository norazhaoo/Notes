# 添加新文章指南

## 文件位置

在 `src/posts/` 目录下，根据文章分类创建对应的文件夹和Markdown文件：

```
src/posts/
  ├── work/          # 工作相关
  ├── personal/      # 个人相关
  └── interest/      # 兴趣相关
```

## 文件命名

文件名使用小写字母和连字符，例如：`my-new-post.md`

## Front Matter格式

每篇文章必须在开头包含Front Matter（YAML格式）：

```markdown
---
title: 文章标题
category: work  # 必须是 work, personal, 或 interest 之一
date: 2024-01-01  # 格式：YYYY-MM-DD
tags: [tag1, tag2, tag3]  # 标签数组，可选
excerpt: 文章摘要，会显示在列表页  # 可选，如果不提供会自动截取内容前150字符
---

# 文章内容

这里开始写你的文章内容，支持Markdown格式。
```

## 示例

```markdown
---
title: 我的第一篇技术文章
category: work
date: 2024-01-15
tags: [react, javascript, frontend]
excerpt: 这是一篇关于React开发的文章
---

# 我的第一篇技术文章

这是文章的内容部分，支持所有Markdown语法。

## 二级标题

- 列表项1
- 列表项2

**粗体文本** 和 *斜体文本*

```javascript
// 代码块
function example() {
  return 'Hello World'
}
```
```

## 注意事项

1. **日期格式**：必须使用 `YYYY-MM-DD` 格式
2. **分类**：必须是 `work`、`personal` 或 `interest` 之一
3. **标签**：使用数组格式，可以包含多个标签
4. **文件名**：文件名会成为URL的一部分，建议使用有意义的名称

## 添加文章后的效果

- 文章会自动出现在对应分类的列表页
- 可以通过搜索功能找到文章
- 可以通过标签筛选文章
- 文章按日期倒序排列（最新的在前）

