# VJs Mag - Jekyll Static Site

## Overview
VJs Mag is a digital publication and community platform dedicated to audiovisual art, VJ technology, and culture. Founded in 2013, it covers industry news, artist profiles, technology reviews, and tutorials.

## Tech Stack
- **Static Site Generator:** Jekyll 4.x (Ruby)
- **Package Manager:** Bundler
- **Templating:** Liquid
- **Styling:** Sass/SCSS
- **Markdown:** Kramdown
- **Plugins:** jekyll-paginate, jekyll-sitemap

## Project Structure
- `_config.yml` — Jekyll configuration
- `_data/` — Site-wide data (settings, menus)
- `_includes/` — Reusable HTML components (header, footer, search)
- `_layouts/` — Page templates (default, post, page, author)
- `_posts/` — Blog articles (Markdown, YYYY-MM-DD-title.md format)
- `_pages/` — Static pages (About, Contact, etc.)
- `_authors/` — Author profile pages
- `_sass/` — SCSS stylesheets (organized by layer: settings, tools, base, modules, layouts)
- `js/` — Client-side scripts (search, UI behavior)
- `images/` — Site images and post assets

## Development
- Run with: `bundle exec jekyll serve --host 0.0.0.0 --port 5000 --livereload`
- Site is served at port 5000
- Built output goes into `_site/`

## Deployment
- Type: Static site
- Build command: `bundle exec jekyll build`
- Public directory: `_site`
