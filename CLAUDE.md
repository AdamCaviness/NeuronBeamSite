# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NeuronBeamSite is a static marketing website for Neuron Beam, an AI product studio. The site is built with vanilla HTML/CSS using the Grapedrop page builder framework.

## Architecture

- **Static HTML pages**: `index.htm`, `about.htm`, `contact.htm`, `projects.htm`
- **Styling**: Bootstrap 4.3.1 (CDN) + custom CSS in `css/gjs-base.css` + inline `<style>` blocks per page
- **JavaScript**: jQuery 3.2.1 (CDN) + `gpd.js` (Grapedrop utilities for form handling, animations)
- **Server config**: `htaccess` for Apache (www to non-www redirect)

## Key Patterns

- Pages use Grapedrop CSS classes (`gpd-*`, `gdp-row`, `cell`) for layout
- Element IDs follow Grapedrop naming convention (e.g., `#i25bl`, `#ix3lj`)
- Mobile responsiveness via `@media (max-width: 768px)` breakpoints
- Form submissions handled by Grapedrop's form collector service
- Calendly integration on index page for scheduling

## Local Development

Open HTML files directly in a browser. No build process required.

To test htaccess rules, deploy to an Apache server.
