# Portfolio Website - Agile Business Analyst & ML Engineer

A modern, responsive portfolio website showcasing skills in Business Analysis, Data Analytics, and Machine Learning Engineering. Built with HTML, CSS, and vanilla JavaScript for optimal performance on GitHub Pages.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with gradient effects and smooth animations
- **Interactive Navigation**: Smooth scrolling and mobile-friendly hamburger menu
- **Project Showcase**: Dedicated section to highlight key projects and achievements
- **Skills Display**: Comprehensive overview of technical skills and expertise
- **Contact Form**: Ready-to-customize contact section
- **Fast Loading**: Optimized for performance with no heavy dependencies

## 📋 Sections

1. **Hero/Home**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal background and statistics
3. **Skills**: Categorized technical skills (Business Analysis, Data Analysis, Machine Learning, Tools)
4. **Projects**: Featured projects with descriptions and technologies used
5. **Contact**: Contact information and form

## 🚀 Deployment Steps to GitHub Pages

### Step 1: Initialize Git Repository (if not already done)

Open Terminal and navigate to your project folder:

```bash
cd "/Users/ochubaudeagha/Desktop/Customer Self-Service Portal Upgrade-repository"
```

Initialize git (if needed):

```bash
git init
```

### Step 2: Add All Files

Add all files to git:

```bash
git add .
```

### Step 3: Commit Your Changes

```bash
git commit -m "Initial commit: Add portfolio website files"
```

### Step 4: Connect to GitHub Repository

Add your GitHub repository as remote (replace with your actual repository URL):

```bash
git remote add origin https://github.com/YOUR_USERNAME/Customer-Self-Service-Portal-Upgrade-repository.git
```

If you've already added a remote, verify it with:

```bash
git remote -v
```

### Step 5: Push to GitHub

Push your code to the main branch:

```bash
git branch -M main
git push -u origin main
```

### Step 6: Enable GitHub Pages

1. Go to your GitHub repository in your web browser
2. Click on **Settings** (top navigation)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **Deploy from a branch**
5. Under **Branch**, select `main` and `/ (root)` folder
6. Click **Save**

### Step 7: Wait for Deployment

GitHub will automatically build and deploy your site. This usually takes 1-2 minutes.

You can check the deployment status:
- Go to the **Actions** tab in your repository
- Wait for the green checkmark indicating successful deployment

### Step 8: Access Your Live Site

Your site will be available at:

```
https://YOUR_USERNAME.github.io/Customer-Self-Service-Portal-Upgrade-repository/
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## 🎨 Customization Guide

### Personal Information

Edit `index.html` and replace the following dummy content:

1. **Name**: Replace "Alex Morgan" with your name
2. **Title/Subtitle**: Update the professional titles
3. **Contact Info**: Update email, phone, location in the contact section
4. **Social Links**: Replace placeholder URLs with your actual social media profiles:
   - GitHub: Line 30, 156
   - LinkedIn: Line 31, 157
   - Twitter: Line 32, 158
   - Email: Line 33

### Profile Picture

Replace the icon-based profile with an actual image:

1. Add your photo to the project folder (e.g., `profile.jpg`)
2. In `index.html` (around line 48-52), replace:

```html
<div class="profile-circle">
    <i class="fas fa-user"></i>
</div>
```

With:

```html
<div class="profile-circle">
    <img src="profile.jpg" alt="Your Name">
</div>
```

3. Add this CSS to `styles.css`:

```css
.profile-circle img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}
```

### Projects

Update the project cards with your actual projects (lines 129-209 in `index.html`):
- Project titles
- Descriptions
- Technologies used
- Project links

### Skills

Modify the skills sections to match your expertise (lines 88-127 in `index.html`).

### Colors

To change the color scheme, edit the CSS variables in `styles.css` (lines 8-20):

```css
:root {
    --primary-color: #6366f1;     /* Main brand color */
    --secondary-color: #8b5cf6;   /* Secondary color */
    --accent-color: #ec4899;      /* Accent color */
    /* ... other colors */
}
```

## 📱 Contact Form Setup

The contact form is currently a demo. To make it functional:

### Option 1: Use Formspree (Easiest)

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form and get your endpoint
3. Update the form tag in `index.html`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Use Netlify Forms (if migrating to Netlify)

Add `netlify` attribute to the form tag:

```html
<form name="contact" method="POST" data-netlify="true">
```

### Option 3: Use EmailJS

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Follow their documentation to integrate
3. Update `script.js` with their SDK

## 🔧 Making Updates

After making changes to your site:

```bash
git add .
git commit -m "Description of your changes"
git push
```

GitHub Pages will automatically rebuild and deploy your site within 1-2 minutes.

## 📝 Browser Compatibility

The site is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🐛 Troubleshooting

**Site not showing up?**
- Check GitHub Pages settings are correct
- Ensure `index.html` is in the root directory
- Wait 5-10 minutes for initial deployment
- Check the Actions tab for deployment errors

**Styling looks broken?**
- Verify all files (`index.html`, `styles.css`, `script.js`) are in the same directory
- Check browser console for errors
- Clear browser cache and refresh

**Contact form not working?**
- The demo form shows an alert. Follow the Contact Form Setup section above to integrate a real form service

## 📄 License

This template is free to use for personal and commercial projects.

## 🤝 Support

For issues with GitHub Pages, refer to [GitHub Pages Documentation](https://docs.github.com/en/pages).

---

**Built with ❤️ for GitHub Pages**
