# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

- **Jekyll** static site generator with the **Chirpy** theme (`jekyll-theme-chirpy ~> 7.4`)
- Hosted on **GitHub Pages** at `https://jimytao.github.io`
- Content written in Markdown with YAML front matter

## Local Development

```bash
# Install dependencies
bundle install

# Serve locally with live reload
bundle exec jekyll serve

# Serve including draft posts
bundle exec jekyll serve --drafts

# Run HTML proofer tests
bundle exec htmlproofer _site
```

Visit `http://localhost:4000` after starting the server.

## Content Structure

- `_posts/` — Published posts. Filename format: `YYYY-MM-DD-title.md`
- `_posts/bulletin/`, `_posts/thinking/`, `_posts/人生思考/`, `_posts/好文分享/` — Category subdirectories
- `_tabs/` — Navigation tabs (About, Archives, Categories, Tags, Chat)
- `_data/` — Site data files
- `_plugins/` — Custom Jekyll plugins
- `assets/` — Static assets (images, CSS, JS)

## Post Front Matter

```yaml
---
title: "Post Title"
date: YYYY-MM-DD HH:MM:SS +0000
categories: [category]
tags: [tag1, tag2]
---
```

## Key Integrations

- **Comments (articles)**: Giscus backed by GitHub Discussions (`jimytao/jimytao.github.io`, category: "General")
- **Anonymous chat**: Waline (self-hosted on Vercel) at `https://comment.jimytao-chat.online`, embedded in `_tabs/chat.md`. Database on LeanCloud International.
- **Comments data** lives in GitHub Discussions, not in this repo — do not disable Discussions.

## Architecture Notes

- Theme files (`_layouts`, `_includes`, `_sass`) come from the gem, not this repo. To override, copy the specific file from the gem into the matching local path. Find gem location with: `bundle info --path jekyll-theme-chirpy`
- `_tabs/chat.md` is a standalone anonymous chatroom page, intentionally separate from article comments.
- Switching themes would require refactoring front matter, layouts, and comment integrations.
