---
title: "How I Set Up This Jekyll Site"
date: 2026-01-02
tags: [tech, tutorial, jekyll]
---

I recently rebuilt my personal site using Jekyll, and I wanted to document the process for anyone interested in doing the same.

## Why Jekyll?

I chose Jekyll for several reasons:

- **GitHub Pages native support** - No need to set up CI/CD
- **Markdown for content** - Writing posts is as easy as writing notes
- **Static site** - Fast, secure, and cheap to host

## The Setup Process

Setting up Jekyll was straightforward:

```bash
# Install Ruby (if needed)
brew install ruby

# Install Jekyll
gem install jekyll bundler

# Create a new site
jekyll new my-site

# Serve locally
bundle exec jekyll serve
```

## Custom Features I Added

Beyond the basic setup, I added:

1. **Tag system** for organizing posts
2. **Goals dashboard** for tracking yearly objectives
3. **Archive page** for past dashboards
4. **Search functionality** for finding posts quickly

## Lessons Learned

The biggest lesson was keeping things simple. It's tempting to add every feature you can think of, but a clean, focused site is better than a cluttered one.

If you're thinking about building your own site, I'd encourage you to start with Jekyll. It's a great balance of simplicity and power.
