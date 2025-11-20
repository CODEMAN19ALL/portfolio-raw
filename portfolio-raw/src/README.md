# Gospel Uwaoma - Professional Portfolio

A modern, animated, and fully responsive personal portfolio website built with React, TypeScript, Tailwind CSS, and Motion (Framer Motion).

## ✨ Features

- 🎨 Modern and professional design
- ⚡ Smooth animations and transitions
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎯 Animated counter statistics
- 🖼️ Interactive portfolio gallery with filtering
- 📧 Contact form with toast notifications
- 🎭 Hover effects and color inversions
- 🌐 Multiple social media integrations
- 🚀 Optimized performance

## 🛠️ Technologies Used

- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Motion (Framer Motion)** - Animations
- **Vite** - Build tool
- **Shadcn/ui** - UI components
- **Lucide React** - Icons
- **Sonner** - Toast notifications

---

## 📋 Prerequisites

Before you begin, make sure you have the following installed:

1. **Node.js** (v18 or higher)
   - Download: https://nodejs.org
   - Choose the LTS (Long Term Support) version
   - Verify installation:
     ```bash
     node --version
     npm --version
     ```

2. **VS Code** (Recommended)
   - Download: https://code.visualstudio.com

3. **Git** (Optional, for version control)
   - Download: https://git-scm.com

---

## 🚀 Getting Started

### 1. Extract the Project

```bash
# Extract the downloaded ZIP file to your desired location
# Example: C:/Projects/gospel-portfolio or ~/Projects/gospel-portfolio
```

### 2. Open in VS Code

```bash
# Option A: Using VS Code
File → Open Folder → Select your portfolio folder

# Option B: Using Terminal/Command Prompt
cd path/to/gospel-portfolio
code .
```

### 3. Install Dependencies

```bash
# Open terminal in VS Code (View → Terminal or Ctrl+`)
# Run this command:

npm install

# This will download all required packages
# Takes 1-3 minutes depending on internet speed
# You'll see a 'node_modules' folder created
```

### 4. Start Development Server

```bash
npm run dev

# You should see output like:
# ➜  Local:   http://localhost:5173/
# ➜  Network: use --host to expose
```

### 5. View Your Portfolio

```bash
# Open your browser and go to:
http://localhost:5173

# The site will auto-reload when you make changes! 🎉
```

---

## ✏️ Making Edits

### Project Structure

```
gospel-portfolio/
├── components/               # All React components
│   ├── ui/                  # Shadcn UI components (buttons, cards, etc.)
│   ├── Logo.tsx             # Your custom logo
│   ├── Navigation.tsx       # Header navigation
│   ├── Hero.tsx             # Home/Hero section
│   ├── ProfessionalProfile.tsx  # Professional profile section
│   ├── About.tsx            # About Me section
│   ├── Services.tsx         # Services section
│   ├── Portfolio.tsx        # Portfolio/Projects section
│   ├── Contact.tsx          # Contact form section
│   ├── Footer.tsx           # Footer
│   └── CounterAnimation.tsx # Animated counter component
├── styles/
│   └── globals.css          # Global styles and design tokens
├── App.tsx                  # Main application component
├── main.tsx                 # Application entry point
├── index.html               # HTML template
└── package.json             # Project dependencies
```

### Common Edits

#### 1. Update Personal Information

**File: `components/Hero.tsx`**
```tsx
// Change your name
<span className="text-primary">Gospel Uwaoma</span>

// Update statistics
<CounterAnimation end={50} suffix="+" />  // Change the number
```

**File: `components/Contact.tsx`**
```tsx
// Update contact information
{
  icon: Mail,
  title: "Email",
  value: "your-email@example.com",  // ← Edit this
  link: "mailto:your-email@example.com",
}

// Update social media links
{ icon: Github, link: "https://github.com/yourusername", label: "GitHub" }
```

#### 2. Update Services

**File: `components/Services.tsx`**
```tsx
const services = [
  {
    icon: Monitor,
    title: "Your Service Title",        // ← Edit this
    description: "Your description",    // ← Edit this
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    image: "your-image-url",           // ← Change image
  },
  // Add more services...
];
```

#### 3. Update Portfolio Projects

**File: `components/Portfolio.tsx`**
```tsx
const projects = [
  {
    title: "Your Project Name",          // ← Edit this
    category: "web",                     // web, mobile, or design
    image: "project-image-url",          // ← Change image
    description: "Project description",   // ← Edit this
    tags: ["React", "Node.js"],          // ← Edit technologies
  },
  // Add more projects...
];
```

#### 4. Change Colors & Styling

**File: `styles/globals.css`**
```css
/* Modify color scheme */
:root {
  --primary: 222.2 47.4% 11.2%;  /* Change primary color */
  --accent: 210 40% 96.1%;        /* Change accent color */
}
```

---

## 📦 Useful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Stop development server
Ctrl+C (in terminal)

# Install a new package
npm install package-name

# Clear node_modules and reinstall (if issues)
rm -rf node_modules
npm install
```

---

## 🌐 Deployment

### Option 1: Vercel (Recommended - FREE)

**Why Vercel?**
- ✅ Free for personal projects
- ✅ Automatic HTTPS
- ✅ Fast global CDN
- ✅ Auto-deployments from Git

**Steps:**

1. **Build your project**
   ```bash
   npm run build
   ```

2. **Sign up at Vercel**
   - Go to https://vercel.com
   - Sign up with GitHub, GitLab, or Email

3. **Deploy**
   - Click "Add New" → "Project"
   - Upload your project folder OR connect GitHub repo
   - Vercel auto-detects settings
   - Click "Deploy"

4. **Get your live URL**
   - `https://gospeluwaoma.vercel.app`
   - Can add custom domain (e.g., `gospeluwaoma.com`)

### Option 2: Netlify (FREE)

1. Go to https://netlify.com
2. Sign up
3. Drag & drop your `dist` folder (after `npm run build`)
4. Get your live URL

### Option 3: GitHub Pages (FREE)

1. Create GitHub repository
2. Push your code
3. Enable GitHub Pages in settings
4. Your site: `https://yourusername.github.io/portfolio`

---

## 🔧 Recommended VS Code Extensions

Install these for better development experience:

1. **ES7+ React/Redux/React-Native snippets**
   - Faster React coding with shortcuts

2. **Tailwind CSS IntelliSense**
   - Auto-complete Tailwind classes

3. **Prettier - Code formatter**
   - Auto-format code on save

4. **Auto Rename Tag**
   - Rename paired HTML/JSX tags

5. **GitLens** (if using Git)
   - Enhanced Git integration

**How to install:**
- Click Extensions icon (Ctrl+Shift+X)
- Search extension name
- Click "Install"

---

## 🐛 Troubleshooting

### Problem: "npm is not recognized"
**Solution:** Install Node.js from https://nodejs.org

### Problem: Port 5173 already in use
**Solution:** 
```bash
# Use a different port
npm run dev -- --port 3000
```

### Problem: Changes not showing in browser
**Solution:**
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache
- Restart dev server

### Problem: "Module not found" error
**Solution:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Problem: Styling looks broken
**Solution:**
- Check if `npm run dev` is running
- Verify Tailwind CSS is working
- Check browser console for errors (F12)

---

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🎨 Customization Tips

### Adding New Sections
1. Create new component in `components/` folder
2. Import in `App.tsx`
3. Add to the main structure

### Changing Fonts
- Edit `styles/globals.css`
- Import Google Fonts in `index.html`

### Adding Images
- Place images in `public/` folder
- Reference as `/your-image.jpg`
- Or use Unsplash URLs (already configured)

### Modifying Animations
- Edit motion props in components
- Adjust `duration`, `delay`, `initial`, `animate` values

---

## 📝 Project Workflow

```
1. Edit code in VS Code
   ↓
2. Save file (Ctrl+S)
   ↓
3. See live changes at localhost:5173
   ↓
4. When satisfied:
   - Run: npm run build
   - Deploy to Vercel/Netlify
   ↓
5. Share your live link! 🎉
```

---

## 📄 File Descriptions

| File | Purpose |
|------|---------|
| `App.tsx` | Main app structure, imports all sections |
| `components/Hero.tsx` | Landing section with intro and stats |
| `components/Navigation.tsx` | Top navigation bar |
| `components/Services.tsx` | Services showcase with images |
| `components/Portfolio.tsx` | Project gallery with filtering |
| `components/Contact.tsx` | Contact form and social links |
| `components/Logo.tsx` | Custom hexagonal logo |
| `styles/globals.css` | Colors, fonts, global styles |
| `package.json` | Dependencies and scripts |

---

## 🔒 Environment Variables (Optional)

If you add API integrations later:

1. Create `.env` file in root
2. Add variables:
   ```env
   VITE_API_KEY=your-key-here
   VITE_EMAIL_SERVICE=your-service
   ```
3. Access in code: `import.meta.env.VITE_API_KEY`
4. Never commit `.env` to Git!

---

## 📚 Learn More

- **React Docs:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com
- **Motion (Framer Motion):** https://motion.dev
- **Vite:** https://vitejs.dev
- **Shadcn/ui:** https://ui.shadcn.com

---

## 🤝 Need Help?

- Check browser console (F12) for errors
- Read error messages carefully
- Search on Stack Overflow
- Check GitHub Issues for dependencies

---

## 📄 License

This is your personal portfolio. Feel free to customize and use as you wish!

---

## 👤 Contact

**Gospel Uwaoma**
- Portfolio: [Your Live URL]
- Email: hello@gospeluwaoma.com
- GitHub: https://github.com/gospeluwaoma
- LinkedIn: https://linkedin.com/in/gospeluwaoma

---

## 🎉 Quick Start Checklist

- [ ] Install Node.js
- [ ] Extract project folder
- [ ] Open in VS Code
- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Open http://localhost:5173
- [ ] Start customizing!
- [ ] Build with `npm run build`
- [ ] Deploy to Vercel
- [ ] Share your portfolio! 🚀

---

**Made with ❤️ by Gospel Uwaoma**

*Last Updated: November 18, 2025*
