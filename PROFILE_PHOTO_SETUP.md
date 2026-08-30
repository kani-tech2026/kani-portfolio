# Adding Your Profile Photo to the Portfolio

Your portfolio is now redesigned with a modern AI/Data Science aesthetic! The hero section is ready for your professional photo.

## Quick Setup: Add Your Photo

### Step 1: Save Your Photo
Save your passport/professional photo with these specifications:
- **Filename:** `profile.jpg`
- **Location:** Save to the `public/` folder in your portfolio
- **Dimensions:** Portrait format (optimal: 320×420px or similar aspect ratio)
- **Format:** JPG or PNG

### Step 2: Using Python Script (Automated)

If you have Python installed, use the provided script:

```bash
# Navigate to portfolio folder
cd c:\Users\Admin\Desktop\portfolio

# Run the script (replace path with your image path)
python save_image.py "C:\path\to\your\photo.jpg"
```

### Step 3: Manual Method

Simply copy your photo file to:
```
c:\Users\Admin\Desktop\portfolio\public\profile.jpg
```

### Step 4: Verify

Refresh your browser (http://localhost:5173). Your photo should now appear in the hero section with the AI-inspired glow effect.

## What's New in Your Portfolio

### ✨ Design Improvements
- **Premium AI/DS Theme**: Cyan & purple color scheme (data + AI focus)
- **Hero Section**: Professional photo display with glassmorphism & glow effects
- **Currently Exploring**: New section showcasing what you're learning
- **Rich Project Cards**: Enhanced project presentation with problem/solution flow
- **Modern Micro-interactions**: Smooth hover effects and animations
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Professional Visual Identity**: Neural network inspired accents throughout

### 🎨 Color Palette
- **Primary**: Cyan (#00d9ff) - Data & Technology
- **Secondary**: Purple (#7c3aed) - AI & ML
- **Background**: Dark professional (#0a0e1a)
- **Accents**: Subtle glows and gradients

### 📱 Sections
1. **Home** - Hero with your photo, quick stats, about cards, skills
2. **About** - Professional profile with career focus
3. **Skills** - Organized by category (Programming, Web, AI/DS, Databases, Tools)
4. **Projects** - Rich project cards (Crop Price Prediction, ECG Detection, Phishing Detection)
5. **Exploring** - Active learning areas (Generative AI, Computer Vision, Deep Learning, MLOps, Time Series, Reinforcement Learning)
6. **Experience** - AI Intern role at GenLearny Innovations
7. **Education** - B.Tech AIDS at Kongu Engineering College
8. **Certifications** - Your credentials
9. **Contact** - Email form and direct contact info
10. **Resume** - PDF download

### 🚀 Performance
- No heavy third-party animations library overhead
- Optimized CSS with CSS Grid and Flexbox
- Smooth 60fps animations
- Fast load time
- Mobile-first responsive design

## Customization Tips

### Changing Colors
Edit these CSS variables in `src/index.css`:
```css
--accent: #00d9ff;        /* Cyan - primary color */
--accent-2: #7c3aed;      /* Purple - secondary */
```

### Adjusting Photo Size
Edit `.image-frame` width/height in `src/index.css`:
```css
.image-frame {
  width: 320px;   /* Adjust as needed */
  height: 420px;  /* Keep portrait ratio */
}
```

### Adding Projects
Edit `src/data.js` - add to the `projects` array with:
- title, technologies, problem, solution, features, github

## File Structure
```
portfolio/
├── src/
│   ├── App.jsx         (Components & pages)
│   ├── data.js         (Profile, projects, skills, exploring)
│   ├── index.css       (Premium AI/DS styling)
│   └── main.jsx        (Entry point)
├── public/
│   ├── profile.jpg     (Your photo - ADD THIS)
│   └── KANIMOZHI_RESUME.pdf
└── package.json
```

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Deploy Your Portfolio
When ready to go live:
```bash
npm run build
# Deploy the 'dist' folder to any hosting service
# (Vercel, Netlify, GitHub Pages, etc.)
```

---

**Your portfolio is now a premium AI/DS student portfolio that reflects your focus on artificial intelligence, machine learning, and data science. It's ready to impress recruiters!** 🚀
