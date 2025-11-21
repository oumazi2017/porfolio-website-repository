# Portfolio Website - Data Analyst & ML Engineer

A modern, responsive portfolio website designed for data analysts and machine learning engineers. Built with HTML, CSS, and JavaScript, optimized for GitHub Pages.

![Portfolio Preview](https://img.shields.io/badge/Status-Ready%20to%20Deploy-success)
![License](https://img.shields.io/badge/License-MIT-blue)

## 🌟 Features

- **Responsive Design** - Fully responsive layout that works on all devices
- **Modern Dark Theme** - Professional design with purple/pink gradient accents
- **Smooth Animations** - Scroll animations, hover effects, and parallax scrolling
- **Project Showcase** - Display up to 6 featured projects with descriptions
- **Skills Section** - Organized by categories (Data Analysis, ML, Visualization, Tools)
- **Contact Form** - Ready for backend integration
- **Mobile-Friendly Navigation** - Hamburger menu for mobile devices
- **SEO Optimized** - Meta tags and semantic HTML structure

## 📁 File Structure

```
porfolio-website-repository/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md           # Documentation (this file)
```

## 🚀 Quick Start

### Option 1: Deploy to GitHub Pages (Recommended)

1. **Clone or download this repository**
   ```bash
   cd /path/to/porfolio-website-repository
   ```

2. **Initialize Git and push to your GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Add portfolio website"
   git remote add origin https://github.com/YOUR_USERNAME/porfolio-website-repository.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **main** branch
   - Click **Save**
   - Your site will be live at: `https://YOUR_USERNAME.github.io/porfolio-website-repository/`

### Option 2: Run Locally

Simply open `index.html` in your web browser:
```bash
open index.html
```

Or use a local server (recommended for testing):
```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Then visit http://localhost:8000 in your browser
```

## ✏️ Customization Guide

### 1. Personal Information

**Update your name and title:**
- Open `index.html`
- Find line 32: `<h1 class="glitch" data-text="Alex Morgan">Alex Morgan</h1>`
- Replace "Alex Morgan" with your name
- Find line 33: `<p class="hero-subtitle">Data Analyst & Machine Learning Engineer</p>`
- Update with your title

**Update contact information:**
- **Email**: Line 280 - Replace `alex.morgan@example.com`
- **Location**: Line 286 - Replace `San Francisco, CA`
- **Phone**: Line 292 - Replace `+1 (555) 123-4567`

### 2. Social Media Links

Update all social links (appears in multiple places):
```html
<!-- Find and replace these URLs throughout the file -->
<a href="https://github.com/YOUR_USERNAME" target="_blank">
<a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank">
<a href="https://twitter.com/YOUR_USERNAME" target="_blank">
<a href="mailto:YOUR_EMAIL@example.com">
```

### 3. About Section

**Update your bio** (lines 64-66):
- Replace the three paragraphs with your own story
- Update statistics (lines 68-78) with your actual numbers

### 4. Skills Section

Edit the skills lists (lines 87-142):
- Add or remove skills from each category
- Organize skills that match your expertise
- Add new categories if needed

### 5. Projects Section

**Update each project card** (6 projects total, starting at line 147):

For each project, customize:
- **Icon**: Change the Font Awesome icon class
- **Title**: Project name
- **Description**: Brief overview of the project
- **Tags**: Technologies used
- **Links**: GitHub repository and live demo URLs

Example:
```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-your-icon"></i>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Your project description...</p>
        <div class="project-tags">
            <span>Tech1</span>
            <span>Tech2</span>
        </div>
        <div class="project-links">
            <a href="YOUR_GITHUB_URL"><i class="fab fa-github"></i> Code</a>
            <a href="YOUR_DEMO_URL"><i class="fas fa-external-link-alt"></i> Demo</a>
        </div>
    </div>
</div>
```

### 6. Add Your Profile Picture

Replace the placeholder icon with your photo:

1. Add your image file to the repository (e.g., `profile.jpg`)
2. In `styles.css`, find `.image-placeholder` (around line 233)
3. Replace with:
```css
.about-image img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 20px 60px rgba(108, 99, 255, 0.4);
}
```
4. In `index.html`, replace the icon div with:
```html
<div class="about-image">
    <img src="profile.jpg" alt="Your Name">
</div>
```

### 7. Color Scheme

Customize colors in `styles.css` (lines 8-18):
```css
:root {
    --primary-color: #6C63FF;      /* Main accent color */
    --secondary-color: #FF6584;    /* Secondary accent */
    --dark-bg: #0F0F1E;           /* Main background */
    --light-bg: #1A1A2E;          /* Section backgrounds */
    --text-light: #E4E4E7;        /* Main text color */
    --text-gray: #A1A1AA;         /* Secondary text */
}
```

## 🔧 Contact Form Integration

The contact form is currently a demo. To make it functional:

### Option 1: Formspree (Easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update the form tag in `index.html`:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: EmailJS
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Follow their setup guide
3. Add EmailJS SDK to your HTML
4. Update `script.js` form handler

### Option 3: Netlify Forms
1. Deploy to Netlify instead of GitHub Pages
2. Add `netlify` attribute to form:
```html
<form class="contact-form" name="contact" method="POST" data-netlify="true">
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Icons

This project uses [Font Awesome 6.4.0](https://fontawesome.com/icons) for icons. To use different icons:
1. Browse available icons at fontawesome.com
2. Replace icon classes in HTML (e.g., `<i class="fas fa-icon-name"></i>`)

## 📈 Adding Analytics

To track visitors with Google Analytics:

1. Sign up for [Google Analytics](https://analytics.google.com/)
2. Get your tracking ID
3. Add before closing `</head>` tag in `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🌐 Custom Domain

To use a custom domain with GitHub Pages:

1. Purchase a domain from a registrar (Namecheap, GoDaddy, etc.)
2. In your repository: **Settings** → **Pages** → **Custom domain**
3. Enter your domain and click Save
4. Configure DNS with your registrar:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`
5. Wait for DNS propagation (up to 24 hours)

## 🐛 Troubleshooting

**Images not loading:**
- Ensure file paths are correct
- Use relative paths (e.g., `./images/photo.jpg`)

**GitHub Pages not updating:**
- Clear browser cache
- Wait 5-10 minutes for GitHub to rebuild
- Check Actions tab for build status

**Mobile menu not working:**
- Ensure JavaScript is enabled
- Check browser console for errors

**Form not submitting:**
- The default form is a demo
- Implement one of the contact form integrations above

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use! If you make improvements, consider sharing them back.

## 💡 Tips for Success

1. **Keep it updated** - Regularly add new projects and skills
2. **Use real projects** - Replace dummy data with actual work
3. **Optimize images** - Compress images for faster loading
4. **Test responsiveness** - Check on different devices
5. **Proofread** - Check for typos and grammar
6. **SEO** - Update meta tags with relevant keywords
7. **Performance** - Keep the site fast and lightweight

## 📞 Support

If you encounter issues or have questions:
1. Check the troubleshooting section
2. Review the customization guide
3. Check GitHub Issues for similar problems

---

**Ready to launch?** Follow the Quick Start guide above and make this portfolio your own! 🚀

Good luck with your portfolio! 🎉
