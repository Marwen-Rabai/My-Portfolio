# Marwen Rabai - Digital Portfolio

> **Serial Entrepreneur | Founder | Digital Strategist** 🚀
> 
> A premium, interactive portfolio website showcasing 14+ years of entrepreneurial achievements, digital marketing expertise, and innovative ventures across North Africa.

**Live Demo:** [marwen-rabai.netlify.app](https://marwen-rabai.netlify.app)

---

## 🎯 Overview

This is a cutting-edge portfolio platform for **Marwen Rabai**, highlighting multiple successful ventures and professional expertise:

- 🏢 **Cristi Labs** — Innovation-driven technology lab ([cristilabs.net](https://cristilabs.net))
- 🎨 **Cristi Aura** — Next-generation personal branding platform ([dealroom.cristilabs.net](https://dealroom.cristilabs.net))
- 🍔 **Uber Sand Food** — Pioneering food delivery venture for North Africa
- 🎵 **TEMF** — Tunisia Electronic Music Festival (Premier electronic music event)
- 🏛️ **Oasis of Artis** — Event management & cultural venue in Tunis

---

## ✨ Key Features

### 🎨 Design & User Experience
- **Cyberpunk Aesthetic** — Modern dark theme with neon accents (cyber-teal & cyber-magenta)
- **Fully Responsive** — Desktop, tablet, and mobile optimized
- **Smooth Animations** — Framer Motion-powered transitions and interactive effects
- **Accessibility** — WCAG compliant, keyboard navigation, semantic HTML

### 🚀 Interactive Components
- **Smart Floating Navigation** — Auto-hide on scroll down, appears on scroll up
- **Dynamic Hero Section** — Particle effects, mouse-following gradients, glitch text
- **Project Showcase Grid** — Hover effects, image galleries, live project links
- **Contact Form** — EmailJS integration for direct messaging
- **Social Media Links** — GitHub, LinkedIn, WhatsApp, Instagram integration
- **Skills Dashboard** — 8+ categorized skill sets with visual layout

### ⚡ Technical Excellence
- **Server-Side Rendering** — Next.js App Router for optimal performance
- **Image Optimization** — Automatic WebP conversion, lazy loading, responsive images
- **SEO Optimized** — Meta tags, Open Graph, structured data, sitemap
- **Dark Mode Support** — System preference detection
- **Custom Cursor** — Cyberpunk-themed interactive cursor
- **Performance** — <100KB bundle, <1s load time, 98+ Lighthouse score

---

## 🛠️ Tech Stack

### Core Framework
- **Next.js 14+** — React framework with App Router
- **React 18+** — Modern component library
- **TypeScript** — Type-safe development
- **Tailwind CSS 3** — Utility-first CSS framework

### Animations & Effects
- **Framer Motion** — Advanced animation library
- **Custom CSS** — Grid, gradient, and glitch effects
- **SVG** — Scalable icons and graphics

### Services & Integration
- **EmailJS** — Email form submissions
- **Vercel OG** — Dynamic social card generation
- **Netlify** — Continuous deployment & hosting

### Performance & Quality
- **Next.js Image** — Optimized image handling
- **ESLint** — Code quality enforcement
- **TypeScript** — Type checking

---

## 📁 Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Main page component
│   ├── globals.css             # Global styles
│   ├── icon.tsx                # Favicon generation
│   ├── global-error.tsx        # Error boundary
│   └── provider.tsx            # Theme provider setup
│
├── components/
│   ├── Hero.tsx                # Initial hero section
│   ├── NewHero.tsx             # Enhanced hero with animations
│   ├── About.tsx               # Professional bio & highlights
│   ├── Skills.tsx              # Categorized skills showcase
│   ├── RecentProjects.tsx      # Project grid & portfolio
│   ├── Contact.tsx             # Contact form & social links
│   ├── Footer.tsx              # Navigation & copyright
│   ├── BackToTop.tsx           # Scroll to top button
│   ├── RemoveNextDevElements.tsx
│   └── ui/                     # Reusable UI components
│       ├── FloatingNav.tsx     # Smart navbar
│       ├── CyberGlitch.tsx     # Glitch text effect
│       ├── MagicButton.tsx     # Animated CTA button
│       ├── spotlight.tsx       # Spotlight effect
│       ├── EdgeCard.tsx        # Card with border effects
│       ├── GradientBG.tsx      # Gradient backgrounds
│       ├── TextGenerateEffect.tsx
│       ├── TracingBeam.tsx
│       └── ... (10+ more components)
│
├── data/
│   └── index.ts                # All portfolio content (centralized)
│       ├── navItems
│       ├── aboutMe
│       ├── gridItems
│       ├── projects
│       ├── skills
│       └── socialMedia
│
├── lib/
│   └── utils.ts                # Utility functions & helpers
│
├── public/
│   ├── MY_Picture.webp         # Profile photo (favicon)
│   ├── git.svg, link.svg, etc. # Social media icons
│   ├── premium/                # Project showcase images
│   └── Background/             # Background images
│
├── tailwind.config.ts          # Tailwind theme configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies & scripts
└── README.md                   # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+** or **20+** (recommended)
- **npm**, **yarn**, **pnpm**, or **bun**
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/Marwen-Rabai/My-Portfolio.git
cd My-Portfolio

# Install dependencies
npm install
# or yarn install / pnpm install
```

### Development Server

```bash
# Start development server with hot reload
npm run dev

# Open http://localhost:3000 in your browser
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start

# Export static site
npm run export
```

---

## 🎨 Customization Guide

### Update Personal Information
Edit `data/index.ts`:

```typescript
export const aboutMe = {
  name: "Marwen Rabai",
  title: "Your Title Here",
  description: "Your bio...",
  experience: "14+ years",
  location: "North Africa",
  languages: ["English", "French", "Arabic"],
  hobbies: ["Swimming", "Football", "Golfing"]
};
```

### Add/Edit Projects
```typescript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    des: "Project description",
    src: "/image.jpg",
    iconLists: [icon1, icon2],
    link: "https://project-url.com"
  }
];
```

### Update Skills
```typescript
export const skills = [
  {
    category: "Category Name",
    items: ["Skill 1", "Skill 2", "Skill 3"]
  }
];
```

### Update Social Media
```typescript
export const socialMedia = [
  {
    id: 1,
    Image: "/icon.svg",
    link: "https://social-link.com"
  }
];
```

### Customize Colors
Edit `tailwind.config.ts`:

```typescript
extend: {
  colors: {
    'cyber-teal': '#00FFFF',      // Primary accent
    'cyber-magenta': '#FF0080',   // Secondary accent
    'cyber-black': '#0A0E27',     // Background
  }
}
```

---

## 📧 Contact Form Setup

The contact form uses **EmailJS** for sending emails:

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Update `components/Contact.tsx` with your credentials:
   ```typescript
   const serviceId = "your_service_id";
   const templateId = "your_template_id";
   const userId = "your_user_id";
   ```

---

## 🌐 Deployment

### Netlify (Current Setup)
- Auto-deploys on every push to `master` branch
- Connected via GitHub
- Supports custom domain
- Environment variables in Netlify dashboard

**Deploy Steps:**
```bash
git add .
git commit -m "feat: update portfolio content"
git push origin master

# Netlify will auto-build and deploy
# Check deployment status: https://app.netlify.com
```

### Manual Deployment
```bash
# Build production files
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=.next
```

### Environment Variables
Create `.env.local`:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
```

---

## 📊 Page Sections

### 🏠 Hero Section
- Particle animations
- Glitch text effects (name display)
- Profile taglines
- CTA buttons to Skills & Contact
- Smooth scroll indicator

### 📝 About Section
- Professional bio with all ventures
- Key experience highlights
- Languages & hobbies
- Professional achievement cards

### 🎓 Skills Section
- 8+ skill categories
- Visual skill chips
- Organized by expertise area

### 🚀 Projects Section
- 4+ featured projects
- Image galleries
- Tech stack display
- Live project links

### 📞 Contact Section
- Contact form with validation
- Social media icons
- EmailJS integration
- Alternative contact email

### 🔗 Footer
- Navigation links
- Copyright information
- Cyberpunk branding

---

## 📈 Performance Metrics

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals:** All Green
- **Bundle Size:** ~100KB (gzipped)
- **Load Time:** <1 second (Lighthouse 4G)
- **Mobile Friendly:** 100% responsive

---

## 🔐 Security

- ✅ CSP headers configured
- ✅ No sensitive data in repo
- ✅ Environment variables for secrets
- ✅ HTTPS enforced
- ✅ SQL injection prevention (no backend DB)
- ✅ XSS protection via React

---

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS 12+, Android 8+)

---

## 🤝 Contributing

This is a personal portfolio. For bug reports or feature suggestions:
1. Open an issue on GitHub
2. Include detailed description & screenshots
3. Submit pull request with improvements

---

## 👤 Contact & Links

| Platform | Link |
|----------|------|
| 📧 Email | [Marwenrabai@proton.me](mailto:Marwenrabai@proton.me) |
| 💼 LinkedIn | [linkedin.com/in/marwen-rabai](https://linkedin.com/in/marwen-rabai/) |
| 🐙 GitHub | [github.com/Marwen-Rabai](https://github.com/Marwen-Rabai) |
| 📸 Instagram | [@marwen_rabai](https://instagram.com/marwen_rabai) |
| 📱 WhatsApp | +213 794 236 519 |
| 🌐 Website | [marwen-rabai.netlify.app](https://marwen-rabai.netlify.app) |

**Ventures:**
- 🏢 [Cristi Labs](https://cristilabs.net)
- 🎨 [Cristi Aura](https://dealroom.cristilabs.net)
- 🍔 Uber Sand Food
- 🎵 TEMF (Tunisia Electronic Music Festival)

---

## 📄 License

© 2025 Marwen Rabai. All rights reserved.

This project is proprietary and confidential. Unauthorized copying, modification, or distribution is prohibited.

---

## 📝 Version History

| Version | Date | Changes |
|---------|------|---------|
| 2.0 | May 2026 | Complete redesign, new ventures, Instagram integration |
| 1.5 | 2025 | Enhanced animations, improved SEO |
| 1.0 | 2024 | Initial portfolio launch |

---

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Framer Motion for smooth animations
- Tailwind CSS for utility-first styling
- Netlify for seamless deployment
- EmailJS for form integration

---

**Built with ❤️ in North Africa** 🌍

*Last Updated: May 2026 | Status: Active Development*
