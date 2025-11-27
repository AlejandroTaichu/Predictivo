# Predictivo - Bilingual Landing Page

## Overview

Predictivo is a bilingual (Turkish/English) landing page application for an AI-powered predictive maintenance solution. The application showcases industrial IoT capabilities, ERP integrations, and machine learning-based equipment monitoring. Built as a single-page application with React and TypeScript, it features a clean, Apple-inspired design aesthetic with industrial tech accents.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR (Hot Module Replacement)
- Wouter for client-side routing (lightweight alternative to React Router)

**UI Component System**
- shadcn/ui component library based on Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Framer Motion for smooth animations and transitions
- Custom design system defined in `tailwind.config.ts` with specific color palette (Orange #FF6B00, Yellow #FFB800, industrial blacks/grays)

**State Management**
- React Context API for language state management (`LanguageProvider`)
- TanStack Query (React Query) for server state and API data fetching
- React Hook Form with Zod validation for form handling

**Internationalization**
- Custom translation system using a centralized `translations.ts` file
- Language context provider for global language switching
- Supports Turkish (tr) and English (en) with default set to Turkish
- All UI text dynamically updates based on selected language

**Component Structure**
- Modular landing page sections: Navbar, Hero, Integrations, Process, TechSpecs, Industries, FAQ, ContactForm, Footer
- Reusable UI components from shadcn/ui in `client/src/components/ui/`
- Landing-specific components in `client/src/components/landing/`

### Backend Architecture

**Server Framework**
- Express.js for HTTP server and API routing
- Node.js with ES modules (type: "module" in package.json)
- TypeScript for type safety across the entire backend

**API Design**
- RESTful API endpoints for contact form submissions
- POST `/api/contact` - Creates new contact submission
- GET `/api/contacts` - Retrieves all contact submissions
- Validation using Zod schemas with structured error handling

**Data Storage**
- In-memory storage implementation (`MemStorage` class) for development
- Designed for easy migration to PostgreSQL with Drizzle ORM
- Schema definitions in `shared/schema.ts` using Drizzle's type-safe API

**Build & Deployment**
- Custom build script (`script/build.ts`) using esbuild for server bundling
- Vite for client-side production builds
- Static file serving for SPA fallback routing
- Environment-based configuration (development vs production)

### Database Schema

**Users Table**
- `id`: UUID primary key (auto-generated)
- `username`: Unique text field
- `password`: Text field for authentication
- Note: User authentication not actively used in current landing page

**Contact Submissions Table**
- `id`: UUID primary key (auto-generated)
- `name`: Text field (required)
- `email`: Text field (required)
- `company`: Text field (required)
- `message`: Text field (required)

**ORM Configuration**
- Drizzle ORM configured for PostgreSQL (`drizzle.config.ts`)
- Schema location: `./shared/schema.ts`
- Migrations directory: `./migrations`
- Database URL from environment variable

### Design System

**Typography**
- Monospace fonts (JetBrains Mono) for headings to create technical/industrial feel
- Inter for body text and UI elements
- Custom font loading via Google Fonts

**Color Palette**
- Primary: Orange (#FF6B00 / HSL 24 100% 50%)
- Secondary: Yellow (#FFB800)
- Industrial: Black, grays with various opacity levels
- Backgrounds: White and light gray tones
- All colors defined as CSS custom properties with HSL values

**Responsive Design**
- Mobile-first approach with breakpoint at 768px
- Custom hook `useIsMobile()` for responsive behavior
- Adaptive layouts for navbar, hero, and all sections

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Headless UI components for accessibility (Accordion, Dialog, Dropdown, Select, Toast, etc.)
- **Lucide React**: Icon library for consistent iconography
- **Framer Motion**: Animation library for scroll animations and transitions
- **Embla Carousel**: Carousel/slider functionality

### Database & ORM
- **Neon Database Serverless**: PostgreSQL database provider (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe SQL query builder and ORM
- **Drizzle Zod**: Integration between Drizzle schemas and Zod validation

### Form Handling & Validation
- **React Hook Form**: Form state management with performance optimization
- **Zod**: Schema validation for forms and API data
- **@hookform/resolvers**: Integration between React Hook Form and Zod

### Development Tools
- **TypeScript**: Static type checking across frontend and backend
- **Vite Plugins**: 
  - @replit/vite-plugin-runtime-error-modal
  - @replit/vite-plugin-cartographer (development only)
  - @replit/vite-plugin-dev-banner (development only)
- **ESBuild**: Fast JavaScript bundler for production server build

### Build & Runtime
- **tsx**: TypeScript execution for development server
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer
- **Class Variance Authority (CVA)**: Utility for creating variant-based component styles
- **clsx & tailwind-merge**: Utility functions for conditional CSS classes

### Session Management (Configured but not actively used)
- **express-session**: Session middleware for Express
- **connect-pg-simple**: PostgreSQL session store
- **memorystore**: In-memory session store alternative

### Potential Future Integrations
The design guidelines reference integration with major ERP systems (SAP, Oracle, Microsoft Dynamics, Salesforce, ServiceNow) and industrial automation platforms (Siemens, Rockwell, Schneider), though these are currently displayed as placeholder logos/icons in the UI.