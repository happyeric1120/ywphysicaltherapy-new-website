# Blog content

Add one `<slug>.mdx` file per article. A missing `draft` field is treated as `true`; only `draft: false` creates a public route.

```yaml
---
title: "Article title"
slug: "article-slug"
meta_description: "Search description"
target_keyword: "target search phrase"
supports_page: "/related-service-route"
category: "Category"
date: "2026-10-25"
draft: true
---
```

The body must use normal Markdown only. Do not add another H1, imports, exports, JSX, raw HTML, or production notes such as `IMAGE BRIEF:`.
