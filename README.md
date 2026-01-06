# Craig Newmark Philanthropies

> A mission-driven, editorial, and credible digital presence for Craig Newmark Philanthropies, focusing on trust, clarity, and civic infrastructure.

![Craig Newmark Philanthropies]

## About

This is the official website for Craig Newmark Philanthropies, representing the philanthropic work of Craig Newmark, founder of Craigslist. The site embodies an editorial, institutional design philosophy focused on civic infrastructure, cybersecurity, and support for veterans and military families.

**Mission Statement:** *"I'm an old-school nerd helping to protect the people who protect our country."*

## Philosophy

*"Okay, what I do is find people who are really good at their jobs, and who can tolerate my sense of humor. I provide them with resources, and then get outta their way."* — Craig Newmark

## Tech Stack

- **Framework:** React 19.2.3 with TypeScript
- **Build Tool:** Vite 6.2.0
- **Styling:** TailwindCSS with custom civic design system
- **Fonts:** IBM Plex Sans (UI) & IBM Plex Serif (Editorial)
- **Deployment:** AI Studio / Vercel compatible
- **Package Manager:** npm/bun

## Project Structure

```
craig-newmark-philanthropies/
├── public/                          # Static assets
│   ├── CNP-Logo.svg                # Official logo
│   ├── craig-newmark-portrait.jpg  # Portrait image
│   └── favicon.svg                 # Site favicon
├── components/                      # React components
│   ├── Navigation.tsx              # Responsive navigation
│   ├── Hero.tsx                    # Main banner section
│   ├── Philosophy.tsx              # Mission statement
│   ├── FocusAreas.tsx             # Philanthropic focus areas
│   ├── News.tsx                    # News and media coverage
│   └── Footer.tsx                  # Site footer
├── types.ts                        # TypeScript interfaces
├── App.tsx                         # Main application component
├── index.html                      # HTML template
├── vite.config.ts                  # Vite configuration
├── tailwind.config.js              # TailwindCSS configuration
└── package.json                    # Dependencies and scripts
```

## Key Features

###  Design System
- **Editorial Typography:** IBM Plex Serif for headlines, Sans for UI
- **Civic Color Palette:** Civic paper (#F7F5F3), Civic ink (#121212), Civic gray (#5A5A5A)
- **Responsive Design:** Mobile-first approach with fluid typography
- **Glass Morphism:** Subtle navigation backdrop blur effects
- **Institutional Aesthetic:** Clean, credible, newspaper-masthead inspired

###  Navigation
- **Responsive Navigation:** Desktop, tablet, and mobile optimized
- **Multi-breakpoint Design:** Hamburger menu for mobile, horizontal scroll for tablet
- **Official Branding:** Craig Newmark Philanthropies logo integration
- **Glass Effect:** Semi-transparent with backdrop blur

###  Responsive Sections

#### Hero Section
- Large-scale typography with portrait image
- Fluid spacing and responsive layout
- Brutalist aesthetic with institutional credibility

#### Philosophy
- Mission statement with editorial typography
- Sticky sidebar navigation
- Quote-based content presentation

#### Focus Areas
- Interactive grid of philanthropic initiatives
- Animated reveal effects
- Tag-based categorization system

#### News
- Curated media coverage and press releases
- Responsive news card layout
- External link integration

#### Footer
- Social media links (Mastodon, Bluesky, LinkedIn, Twitter, Facebook)
- Brand integration with logo
- Professional footer with designer credit

## Content Areas

### Primary Focus Areas

1. **Military Families and Veterans**
   - Supporting those who serve and their families
   - Grant programs and resources

2. **Cybersecurity (#CyberCivilDefense)**
   - Protecting civil infrastructure
   - Cyber defense initiatives

3. **Promoting the Truth**
   - Supporting journalism and fact-based reporting
   - Fighting misinformation

4. **Pigeon Rescue** *(with characteristic humor)*
   - Light-hearted addition showing personality

### Navigation Structure

- **About:** Organization overview
- **Craig:** Founder biography
- **Board:** Board memberships
- **Cybersecurity:** Security initiatives
- **Veterans:** Military family support
- **Truth:** Truth promotion efforts
- **Apply:** Grant applications
- **Newsroom:** Media and press coverage
- **Contact:** Contact information
- **Take9:** External initiative link

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sarankumar1325/Craig-Newmark-Philanthropies.git
   cd Craig-Newmark-Philanthropies
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   # or
   bun run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   # or
   bun run preview
   ```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Design Principles

1. **Editorial First:** Typography and content hierarchy lead design decisions
2. **Institutional Credibility:** Professional, trustworthy aesthetic
3. **Accessibility:** High contrast, readable fonts, semantic HTML
4. **Performance:** Optimized images, minimal dependencies
5. **Mobile-First:** Responsive design starting from mobile

### Color System

```css
--civic-paper: #F7F5F3;    /* Background */
--civic-ink: #121212;       /* Primary text */
--civic-gray: #5A5A5A;      /* Secondary text */
--civic-accent: #2C3E50;    /* Accent color */
```

### Typography Scale

- **Headlines:** IBM Plex Serif, variable sizing
- **Body:** IBM Plex Sans, readable weights
- **UI Elements:** IBM Plex Sans, smaller sizes
- **Monospace:** System monospace for technical content

## Deployment

The site is configured for deployment on:
- **AI Studio** (primary platform)
- **Vercel** (recommended for static sites)
- **Netlify** (alternative)
- Any static hosting service

### Build Output
- Static HTML/CSS/JS in `dist/` directory
- Optimized assets with proper caching headers
- SEO-optimized with meta tags

## Contributing

This project represents Craig Newmark's philanthropic work. When contributing:

1. **Maintain Editorial Tone:** Keep content professional and mission-focused
2. **Follow Design System:** Use established typography and color guidelines
3. **Test Responsiveness:** Ensure all changes work across device sizes
4. **Accessibility First:** Maintain high contrast and semantic HTML
5. **Performance Minded:** Optimize images and minimize bundle size

## Credits

**Designer & Developer:** [Sarankumar S](https://x.com/iamsaranhere)

**Official Logo:** Craig Newmark Philanthropies

**Photography:** Bleacher+Everard (Craig Newmark Portrait)

**Typography:** IBM Plex (Google Fonts)

**Framework:** React + Vite + TypeScript

## License

Private project for Craig Newmark Philanthropies.

---

*"Building trust, protecting truth, and supporting those who serve."*

For more information, visit [craignewmarkphilanthropies.org](https://craignewmarkphilanthropies.org)
