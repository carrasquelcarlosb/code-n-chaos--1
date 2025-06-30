# CLAUDE.md - NoSales Project Memory

## Project Overview
- **NoSales**: Interactive web art disguised as e-commerce site
- Built with SvelteKit (full-stack)
- "Cursed" experience that subverts e-commerce expectations
- No real sales - it's an artistic project

## Project Structure
- Main project: `/home/joey/github/code-n-chaos--1/`
- SvelteKit app: `/home/joey/github/code-n-chaos--1/no-sales/`
- Database: PostgreSQL (configured in .env)

## Recent Issues Resolved
1. Line endings conflict between WSL and Windows (CRLF/LF)
   - Solution: `git config --global core.autocrlf true`
2. DATABASE_URL missing error
   - Solution: Created `.env` file from `.env.example`

## Required Pages
- Accueil (Home)
- Produits (Products list)
- Panier (Cart)
- Page Produit (Individual product page)
- (Page paiement) - Payment page (optional)

## Required Components
- Header (navigation bar)
- Footer

## Key Features to Implement
- Basketball-themed cart system with "dunk" animations
- Absurd auto-fill payment forms
- Progressive temporal corruption (site gets more chaotic over time)
- Mouse-evading buttons
- Shape-shifting product images
- "Helpful" search auto-correct
- AI-generated surreal testimonials

## Testing Commands
- Run dev server: `npm run dev`
- Lint: `npm run lint` (need to verify exact command)
- Typecheck: `npm run typecheck` (need to verify exact command)

## Docker Setup
- Docker is installed (v28.2.2)
- Need to add user to docker group: `sudo usermod -aG docker $USER`
- docker-compose.yml exists for PostgreSQL setup

## Important Notes
- No styling applied yet (will come in second phase)
- Focus on structure and functionality first
- Balance between functional and broken experience
- Humor over frustration principle