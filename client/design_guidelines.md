# Utsav Digital Studio - Design Guidelines

## Design Approach
**Reference-Based Approach:** Drawing inspiration from premium portfolio sites like Awwwards-winning photography studios, Apple's product pages for cinematic presentation, and luxury brand websites for the premium aesthetic. The design emphasizes emotional storytelling through visual hierarchy, cinematic motion, and luxurious simplicity.

**Core Principles:**
- Cinematic storytelling through visual hierarchy and motion
- Premium minimalism with intentional luxury accents
- Gen-Z aesthetic: bold, confident, and visually striking
- Emotion-first design that lets work speak for itself

---

## Color Palette

### Dark Mode (Primary)
- **Background:** 12 8% 6% (Deep charcoal black)
- **Surface:** 20 10% 10% (Elevated dark surface)
- **Gold Accent:** 45 90% 55% (Luxurious warm gold)
- **Gold Muted:** 45 60% 40% (Subtle gold for backgrounds)
- **Text Primary:** 0 0% 98% (Pure white)
- **Text Secondary:** 0 0% 70% (Muted white)
- **Borders:** 0 0% 20% (Subtle dividers)

### Accent Usage
- Gold for primary CTAs, hover states, and key highlights
- Use sparingly for maximum impact (buttons, active states, key typography)
- Never use gold as background fills - only borders, text, or subtle glows

---

## Typography

**Font Families:**
- Primary: 'Poppins' (headings, UI elements)
- Secondary: 'Urbanist' (body text, descriptions)
- Load via Google Fonts CDN

**Scale:**
- Hero Headline: text-6xl lg:text-8xl font-bold
- Section Titles: text-4xl lg:text-5xl font-semibold
- Card Titles: text-2xl lg:text-3xl font-medium
- Body: text-base lg:text-lg font-normal
- Captions: text-sm font-light

**Style Notes:**
- Generous letter-spacing for headlines (tracking-wide)
- Use uppercase sparingly for labels/categories
- Maintain high contrast ratios for readability

---

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 8, 12, 16, 20, 24, 32
- Section padding: py-20 lg:py-32
- Component spacing: gap-8 lg:gap-12
- Inner content: p-6 lg:p-8

**Container Strategy:**
- Full-bleed hero: w-full min-h-screen
- Content sections: max-w-7xl mx-auto px-6 lg:px-8
- Text content: max-w-4xl mx-auto

**Grid Systems:**
- Portfolio: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Services: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Testimonials: Single column carousel/slider

---

## Component Library

### Navigation
- Fixed transparent header with blur backdrop (backdrop-blur-md)
- Logo left, menu items right
- Smooth scroll behavior with active state indicators (gold underline)
- Mobile: hamburger menu with slide-in drawer

### Hero Section
- Full viewport height (min-h-screen) with 3D Three.js animation background
- Centered content with tagline and primary CTA
- Subtle scroll indicator at bottom
- Parallax effect on scroll

### Portfolio Cards
- Aspect ratio 3:4 for photos, 16:9 for videos
- Hover: subtle scale (scale-105) with gold border glow
- Category badge top-left with semi-transparent background
- Lightbox modal: centered with navigation arrows and close button

### Service Cards
- Dark surface background with gold border on hover
- Icon top (60px), title, description stacked
- Hover: lift effect (translate-y-2) with glowing shadow

### Contact Buttons
- Large rounded buttons (h-16 lg:h-20)
- Icon + label layout
- Hover: gold background with scale animation
- WhatsApp green hint, Instagram gradient hint, Call gold

### Testimonials
- Card with quote icon, text, author photo/name
- Horizontal scroll on mobile, 3-column grid on desktop
- Subtle shadow and border treatment

### Footer
- Two-column: Logo/tagline left, Quick links/Social right
- Studio address and copyright bottom center
- Minimal gold accent line separator

---

## Animation Principles

**Framer Motion:**
- Fade-up on scroll: initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
- Duration: 0.6-0.8s with easeOut
- Stagger children by 0.1s for grid items
- Page transitions: fade with slight scale

**Three.js Hero:**
- Rotating camera lens or floating light particles
- Subtle, non-distracting movement
- Interactive mouse parallax effect (optional enhancement)

**Hover States:**
- Button: scale-105 with gold glow shadow
- Cards: translate-y-2 with border color change
- Images: gentle zoom (scale-110) with overlay fade

**Scroll Animations:**
- Reveal on scroll with 100px threshold
- Timeline items animate sequentially
- Use sparingly - only for key sections

---

## Images

**Hero Section:**
- Large background image/video showcasing premium photography work
- Overlay: dark gradient (from-black/80 to-black/40) for text readability
- Consider using cinematic wedding/portrait shot

**Portfolio Gallery:**
- High-quality images from public/photos and public/videos
- Placeholder categories: Wedding, Pre-wedding, Events, Studio
- Thumbnail optimization for grid view

**About Page:**
- Founder photo (professional portrait)
- Mihir Patel photo (casual/working shot)
- Studio workspace/equipment shots

**Service Icons:**
- Use Heroicons for service representation
- Photography, Videography, Editing, Drone icons
- Consistent 48px size with gold stroke

**General:**
- All images use object-cover for consistency
- Lazy loading for performance
- WebP format for optimal quality/size ratio

---

## Mobile Responsiveness

- Hero text scales down gracefully (text-4xl on mobile)
- Portfolio: single column on mobile, 2-3 columns on tablet/desktop
- Navigation: collapsible hamburger menu
- Touch-friendly button sizes (min h-12)
- Horizontal scroll for testimonials on mobile
- Reduce animation complexity on mobile for performance

---

## Accessibility & Performance

- High contrast gold (#E6B960) on dark backgrounds
- Focus states: gold outline with 2px offset
- Skip to content link for keyboard navigation
- Alt text for all images describing the shot
- Smooth scroll with reduced motion media query support
- Optimize Three.js rendering for lower-end devices