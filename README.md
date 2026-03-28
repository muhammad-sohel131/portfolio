# Sadman Sakib — Portfolio

A dark, futuristic portfolio built with **Next.js 14** and **Tailwind CSS**.

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css        # Global styles, animations, cyberpunk effects
│   ├── layout.js          # Root layout with metadata
│   └── page.js            # Main page (assembles all sections)
├── components/
│   ├── Navbar.js          # Sticky nav with active section tracking
│   ├── Hero.js            # Landing section with typing animation
│   ├── About.js           # About me + terminal card
│   ├── Skills.js          # Skill bars + tech tags
│   ├── Projects.js        # Project cards grid
│   ├── Competitive.js     # CP platforms + achievements + DSA topics
│   ├── EducationExperience.js  # Education timeline + Experience cards
│   ├── Contact.js         # Contact form + social links
│   └── Footer.js          # Footer
├── public/
│   └── resume.pdf         # 👈 Add your resume here
├── tailwind.config.js
├── next.config.js
└── package.json
```

## ✏️ Customization Checklist

1. **Personal info** — Update name, email, social links in:
   - `components/Hero.js` (name, stats)
   - `components/About.js` (bio, quick facts)
   - `components/Contact.js` (email, GitHub, LinkedIn, Codeforces URLs)
   - `components/Footer.js`

2. **Projects** — Edit the `projects` array in `components/Projects.js`
   - Update `link` and `github` fields with real URLs

3. **Skills** — Adjust levels in `components/Skills.js`

4. **CP Platforms** — Update handles/ratings in `components/Competitive.js`

5. **Education & Experience** — Edit items in `components/EducationExperience.js`

6. **Resume** — Drop your `resume.pdf` into the `/public` folder

7. **Contact form** — Wire up to EmailJS, Resend, or Formspree in `components/Contact.js`

## 🌐 Deploy to Vercel (Free)

```bash
npm install -g vercel
vercel
```
Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deploys.

## 🎨 Design System

- **Dark futuristic** theme with deep navy/black backgrounds
- **Cyan (#22d3ee) + Blue (#3b82f6)** neon accent colors
- **Space Mono** for monospace/code feel
- **Syne** for bold display headings
- **DM Sans** for readable body text
- Glitch animation on logo, scanline overlays, neon border glow effects
- Animated skill bars, typing hero, corner bracket decorations