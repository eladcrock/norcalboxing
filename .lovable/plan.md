

## NorCal Boxing Website

A modern boxing gym website for NorCal Boxing, owned by the same coach as Benicia Boxing. Boxing-only focus — no karate, arnis, or other martial arts.

### Pages

1. **Home** — Hero with bold imagery/CTA, gym intro, program cards (e.g. group classes, private training, youth boxing), testimonials carousel, free trial CTA
2. **About** — Gym story, coach bio (same owner as Benicia Boxing), mission/values
3. **Boxing Programs** — Single program page: class descriptions, schedule table, photo gallery with lightbox, coach spotlight
4. **Contact** — Contact form, address/phone/email, embedded map placeholder, social links

### Layout

- **Navbar**: Sticky, logo + links + phone number, mobile hamburger menu
- **Footer**: Contact info, social icons, quick nav links

### Design Direction

- Dark theme base (near-black backgrounds) with red/white accents — classic boxing aesthetic
- Bold sans-serif headings (Poppins or similar via Google Fonts)
- Full-width hero sections with overlay text
- Responsive grid layouts, smooth hover animations
- Photo lightbox for gallery

### Technical Approach

- All pages as React components under `src/pages/`
- Shared `Navbar` and `Footer` components
- Testimonials carousel using existing Embla-based carousel component
- Lightbox built with Dialog component
- Contact form with react-hook-form validation
- Custom CSS variables for the boxing red/black color scheme
- React Router for page navigation (already set up)

### Files to Create/Edit

- `src/index.css` — Update color tokens (dark bg, red primary)
- `src/components/Navbar.tsx` — Sticky nav with mobile menu
- `src/components/Footer.tsx` — Site footer
- `src/pages/Index.tsx` — Home page
- `src/pages/About.tsx` — About page
- `src/pages/Programs.tsx` — Boxing programs page
- `src/pages/Contact.tsx` — Contact page
- `src/components/TestimonialCarousel.tsx` — Testimonials section
- `src/components/PhotoGallery.tsx` — Gallery with lightbox
- `src/components/HeroSection.tsx` — Reusable hero banner
- `src/App.tsx` — Add routes
- `src/App.css` — Remove default Vite styles

