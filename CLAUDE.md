# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Alianza RH Site** is a recruitment and HR website project. The directory contains design assets, SVG brand materials, and configured Claude Code skills for frontend development, design, SEO, copywriting, and wireframing.

### Current State

- **Structure**: Design assets (logos in `/SVG`) and configured development skills
- **No production code yet**: This is a greenfield project starting with design and asset organization
- **Not a git repository**: Coordinate work via Claude Code sessions

## Available Skills & Tools

The project has the following Claude Code skills configured (via `skills-lock.json`):

- **frontend-design**: Build production-grade frontend interfaces with distinctive aesthetics
- **ui-ux-pro-max**: UI/UX design system with design data and Python utilities
- **web-design-guidelines**: Web design best practices and guidelines
- **wireframe-prototyping**: Create wireframes and prototypes
- **seo-audit**: SEO analysis and optimization
- **copywriting**: Marketing copy and content creation
- **imagegen-frontend-mobile**: Image generation for frontend/mobile interfaces

## Design Principles

When building the Alianza RH Site frontend:

### Aesthetic Direction

- **Avoid generic AI aesthetics**: No clichéd purple gradients, overused fonts (Inter, Roboto, Arial), or cookie-cutter component patterns
- **Commit to a clear vision**: Choose an intentional aesthetic direction (minimalist, maximalist, organic, luxury, etc.) and execute with precision
- **Unique typography**: Select distinctive, characterful fonts that elevate the design; pair a bold display font with a refined body font
- **Cohesive color strategy**: Use CSS variables for consistency; dominant colors with sharp accents outperform timid palettes
- **Contextual details**: Add atmosphere through gradients, textures, patterns, shadows, and decorative elements that match the overall aesthetic
- **Strategic motion**: Use animations for key moments—a well-orchestrated page load beats scattered micro-interactions

### Production-Grade Quality

- Functional, working code (HTML/CSS/JS, React, Vue, etc.)
- Visually striking and memorable interfaces
- Meticulously refined details
- Context-specific character and intentionality

## Asset Organization

- `/SVG/`: Brand logos and vector assets
  - `logo-principal.svg`: Primary brand logo
  - `isotipo-principal.svg`: Brand mark/symbol

## Development Workflow

When starting frontend development:

1. **Define purpose & audience**: Understand what problem the interface solves and who uses it
2. **Choose aesthetic tone**: Pick a bold, intentional direction that differentiates Alianza RH
3. **Set constraints**: Tech stack, performance targets, accessibility requirements
4. **Build with precision**: Implement production-grade code with meticulous attention to design details

## Future Structure

As the project grows, typical structure would be:
- Source code directory (HTML/CSS/JS or React components)
- Design system/component library
- Content and copy assets
- SEO and analytics configuration

Check back here as development progresses for specific build, test, and deployment commands.
