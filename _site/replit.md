# VJs Mag - Jekyll Static Site

## Overview
VJs Mag is the press and media platform for live visual performances, VJ culture, and audiovisual art. Part of the VJs TV community network. Founded in 2013, it covers industry news, artist profiles, technology reviews, and tutorials.

## Tech Stack
- **Static Site Generator:** Jekyll 4.x (Ruby)
- **Package Manager:** Bundler
- **Templating:** Liquid
- **Styling:** Sass/SCSS
- **Markdown:** Kramdown
- **Plugins:** jekyll-paginate, jekyll-sitemap

## Design System (VJs TV Cyberpunk Aesthetic)
- **Background:** #050505 (near-black), cards #111120, borders #222238
- **Accent:** Ultraviolet #9d00ff, Electric Blue #00d4ff, Magenta #ff00aa
- **Text:** #e8e8f8 (headings), #b0b0d0 (body), #7070a0 (muted)
- **Typography:** Barlow Condensed (headings, nav, labels), Space Grotesk (sub-headings), Inter (body)
- **Border Radius:** 0px throughout (sharp corners)
- **Theme:** Always dark mode (no light/dark toggle)
- **Navbar:** NTS-style compact sticky nav, 44px height, uppercase links
- **CTA:** "Submit News" button in ultraviolet
- **Footer:** 4-column grid (Brand, Magazine, Discover, Network) + newsletter bar

## Project Structure
- `_config.yml` — Jekyll configuration
- `_data/settings.yml` — Site config, navigation, social, newsletter
- `_includes/head.html` — Fonts (Google Fonts), forced dark mode, SCSS compilation
- `_includes/header.html` — NTS-style compact vjsmag-nav
- `_includes/footer.html` — Multi-column dark footer with newsletter
- `_includes/main.scss` — SCSS import manifest
- `_layouts/` — Page templates (default, post, page, author)
- `_posts/` — Blog articles (Markdown, YYYY-MM-DD-title.md format)
- `_pages/` — Static pages (About, Contact, etc.)
- `_authors/` — Author profile pages
- `_sass/0-settings/` — Color scheme, variables, mixins
- `_sass/1-tools/` — Normalize
- `_sass/2-base/` — Base styles
- `_sass/3-modules/` — Header, footer, article cards, hero, search, buttons, sections, sidebar, pagination, tags, contact, gallery
- `_sass/4-layouts/` — Post, page, authors, tags-page layouts
- `js/common.js` — Nav hamburger (.vjsmag-nav__hamburger/.vjsmag-nav__links), search, scroll-to-top
- `images/` — Site images and post assets

## Development
- Run with: `bundle exec jekyll serve --host 0.0.0.0 --port 5000 --livereload`
- Site is served at port 5000
- Built output goes into `_site/`
- Sass @import deprecation warnings are cosmetic/non-blocking

## Deployment
- Type: Static site
- Build command: `bundle exec jekyll build`
- Public directory: `_site`
