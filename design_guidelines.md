# Predictivo Bilingual Landing Page - Design Guidelines

## Design Approach
**Apple-Clean Industrial Tech Aesthetic** - Combining minimal, sophisticated layouts with technical precision and industrial color accents.

## Core Design Principles
1. **Bilingual Excellence**: Seamless language switching without layout shifts
2. **Technical Precision**: Monospace typography creates industrial, data-driven feel
3. **Clean Sophistication**: Apple-inspired whitespace and hierarchy
4. **Trustworthy Authority**: ISO standards and ERP integrations build credibility

## Color Palette
- **Primary Backgrounds**: White (#FFFFFF) and Light Gray (#F5F5F5)
- **Industrial Accents**: 
  - Orange: #FF6B00 (Primary CTA, highlights)
  - Yellow: #FFB800 (Secondary accents, alerts)
  - Black: #000000 (Typography, technical elements)
- **Neutral Grays**: #6B7280, #9CA3AF for secondary text

## Typography System
- **Headings**: Monospace font family (JetBrains Mono, Space Mono, or IBM Plex Mono)
  - H1: 48px/56px desktop, 32px/40px mobile, Bold
  - H2: 36px/44px desktop, 28px/36px mobile, Bold
  - H3: 24px/32px desktop, 20px/28px mobile, Medium
- **Body & UI**: Inter or System Sans
  - Large: 18px/28px
  - Regular: 16px/24px
  - Small: 14px/20px

## Layout Structure

### 1. Navbar (Sticky)
- Clean, minimal design with subtle shadow on scroll
- Logo left-aligned (text-based with monospace font)
- Center: Smooth-scroll navigation links
- Right: Language toggle (TR | EN with divider) + "Contact Us" button (Orange)
- Height: 72px desktop, 64px mobile

### 2. Hero Section
**Large Hero Image**: Yes - Industrial machinery or sensor technology background
- Height: 85vh desktop, 70vh mobile
- Dark overlay (30-40% opacity) for text readability
- Content positioning: Left-aligned or centered based on image composition
- **Buttons over image**: Orange gradient background with blur effect (backdrop-blur-md)
  - Primary: "Contact Us" (Orange #FF6B00)
  - Secondary: "Learn More" (White outline with blur)
- Typography: White text with subtle shadow for readability
- Monospace headline creates technical authority

### 3. Integrations Strip (Logo Cloud)
- Placement: Immediately after Hero
- Background: Light gray (#F9FAFB)
- Title: Centered, H3 weight
- Logos: 6-8 grayscale logos in a row (4 mobile, 6 tablet, 8 desktop)
- Spacing: Generous padding (py-16 desktop, py-12 mobile)
- Logo treatment: 30% opacity grayscale, subtle hover state (60% opacity)

### 4. Process Section (3 Steps)
- Layout: Horizontal cards with connecting arrows
- Desktop: 3 columns with arrow icons between
- Mobile: Vertical stack with downward arrows
- Cards: White background, subtle shadow, rounded corners (8px)
- Icons: Large (64px), Orange accent color
- Step numbers: Monospace, Yellow color

### 5. Tech Specs & Dashboard Preview
- Two-column layout (60/40 split)
- Left: Dashboard mockup in laptop frame (use placeholder/mockup image)
- Right: Specification list with checkmarks
- Background: White with subtle gradient
- Technical badges: ISO standards in monospace font with borders

### 6. Target Industries
- Grid layout: 3 columns desktop, 2 tablet, 1 mobile
- Industry cards: 
  - Icon at top (64px)
  - Industry name (monospace, H3)
  - Brief description (2-3 lines)
  - Hover effect: Lift shadow and Orange border accent
- Equal height cards with min-height constraint

### 7. Contact Form
- Two-column layout: Form (60%) + Info box (40%)
- Form styling:
  - Input fields: Border-bottom style (minimal)
  - Focus state: Orange underline
  - Labels: Small, gray, above inputs
  - Submit button: Full-width Orange with hover lift
- Info box: Background (#F9FAFB), contact details, response time indicator
- Form max-width: 800px centered

## Component Specifications

### Buttons
- **Primary (Orange)**: Solid #FF6B00, white text, rounded-lg (8px), px-8 py-3
- **Secondary (Outline)**: Border-2 Orange, Orange text, same padding
- **Hover states**: Slight lift (translateY(-2px)) with shadow increase
- **Over images**: Add backdrop-blur-md and semi-transparent background

### Cards
- Border-radius: 8px
- Shadow: subtle (0 1px 3px rgba(0,0,0,0.1))
- Padding: p-6 to p-8
- Hover: Lift effect with shadow increase

### Language Toggle
- Design: TR | EN with vertical divider
- Active language: Orange color, bold
- Inactive: Gray (#6B7280)
- Transition: Smooth color fade (200ms)

## Spacing System
Use Tailwind spacing units: 4, 6, 8, 12, 16, 20, 24, 32
- Section vertical padding: py-20 desktop, py-12 mobile
- Component gaps: gap-8 to gap-12
- Container max-width: max-w-7xl with px-4 to px-8

## Animation Strategy
**Minimal, purposeful motion using Framer Motion**:
- Section entry: Fade up (opacity 0→1, translateY 20px→0)
- Stagger children: 0.1s delay between cards
- No continuous animations
- Smooth scroll behavior for navigation
- Navbar background blur on scroll

## Images Required
1. **Hero Background**: Industrial machinery, sensors, or manufacturing facility (high-quality, dark enough for text overlay)
2. **Dashboard Mockup**: Laptop frame containing predictive analytics dashboard preview
3. **Integration Logos**: SAP, Oracle, Microsoft Dynamics, others (use grayscale filter)

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked)
- Tablet: 768px - 1024px (2 columns)
- Desktop: > 1024px (full multi-column layouts)

## Trust & Credibility Elements
- ISO standard badges (ISO 27001, etc.) as small icons
- ERP integration logos (immediate visual credibility)
- Technical specifications in monospace create authority
- Clean, professional color scheme builds trust