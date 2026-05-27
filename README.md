# Sunrise Education Homeschool - Professional Website

## 🌅 Project Overview

A modern, responsive, multi-language professional website for **Sunrise Education Homeschool** - a caring international homeschooling provider in Malaysia offering Cambridge IGCSE curriculum for ages 7-18.

## ✨ Key Features

### 🌍 Multi-Language Support
- **English** (Default)
- **中文** (Chinese Simplified)
- **Bahasa Melayu** (Malay)
- Automatic language preference memory using localStorage
- Browser language detection fallback

### 📱 Mobile-First Design
- Fully responsive across all device sizes
- Optimized for mobile (480px+), tablet (768px+), and desktop
- Touch-friendly navigation
- Fast loading and smooth interactions

### 🎨 Professional Branding
- Modern color scheme (Sunrise Orange Primary #FF6B35)
- Clean, warm, and welcoming design
- Consistent typography and spacing
- Premium feel suitable for international education brand

### 📑 Complete Website Sections

1. **Header/Navigation**
   - Sticky header with logo
   - Mobile hamburger menu
   - Multi-language toggle buttons
   - Quick navigation links

2. **Hero Section**
   - Eye-catching headline
   - Call-to-action buttons
   - Welcoming tagline

3. **About Us**
   - School mission and vision
   - Brand story
   - Educational philosophy

4. **Why Choose Us**
   - 6 key differentiators
   - Feature highlights
   - Value proposition

5. **Programs**
   - Primary Education (7-11 years)
   - Secondary Education (12-18 years)
   - Cambridge IGCSE (14-18 years)
   - Program descriptions and age ranges

6. **Cambridge IGCSE Curriculum**
   - Curriculum features
   - Subject areas
   - Learning outcomes
   - University preparation

7. **Contact Information**
   - Phone/WhatsApp: +60 12-425 1556
   - Email: LOVE@sun.edu.my
   - AI Assistant: ai.sun.edu.my
   - Address with Google Maps integration
   - Social media links (Instagram, Facebook)

8. **Footer**
   - Quick links
   - Policies
   - Copyright information

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern responsive styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - No dependencies required
- **Localization** - Custom i18n implementation

## 📂 File Structure

```
.
├── index.html      # Main HTML file
├── styles.css      # All styling and responsive design
├── app.js          # Main application logic
├── i18n.js         # Internationalization module
└── README.md       # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### Installation

1. Clone the repository:
```bash
git clone https://github.com/foongsoon/sunrise-education-website.git
cd sunrise-education-website
```

2. Open `index.html` in your browser:
```bash
# Option 1: Direct file open
open index.html

# Option 2: Use a local server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000
```

3. Customize the content in `app.js` and `i18n.js` as needed.

## 🌐 Language Management

The website uses a centralized language system:

- **User Preference Storage**: Language preference is saved in browser localStorage
- **Browser Detection**: Automatically detects system language
- **Easy to Extend**: Add new languages by adding keys to the `translations` object in `i18n.js`

## 🎨 Customization Guide

### Updating Colors
Edit CSS variables in `styles.css`:
```css
:root {
  --primary: #FF6B35;        /* Main Sunrise Orange */
  --primary-dark: #E55A24;   /* Darker shade */
  --primary-light: #FF8C52;  /* Lighter shade */
  --secondary: #004E89;      /* Cambridge Blue */
  --accent: #F7B801;         /* Gold accent */
  /* ... more colors ... */
}
```

### Adding New Languages
1. Add translations in `i18n.js` under the `translations` object
2. Add language code and label to language selector
3. Language will be automatically available

### Modifying Content
Edit content in `app.js` render methods or update translations in `i18n.js`

## 📞 Contact Information

**Sunrise Education Homeschool**
- Phone/WhatsApp: +60 12-425 1556
- Email: LOVE@sun.edu.my
- AI Assistant: ai.sun.edu.my
- Address: No. 25-2nd Floor, Jalan Mahogani 5/Ks7, 41200 Klang, Selangor, Malaysia
- Instagram: https://www.instagram.com/sunrisecenters/
- Facebook: https://www.facebook.com/SunriseResourceCentre
- Google Maps: https://maps.google.com/maps?ll=2.996279,101.445392&z=16&t=m&hl=en&gl=MY&mapclient=embed

## 📱 Responsive Breakpoints

- **Mobile**: 480px and below
- **Tablet**: 481px - 768px
- **Desktop**: 769px and above

## ✅ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

All rights reserved © 2024 Sunrise Education. For use and distribution rights, please contact the school.

## 🤝 Contributing

For updates, improvements, or bug reports, please contact the development team.

---

**Made with ❤️ for Sunrise Education Homeschool**

A caring community dedicated to nurturing young minds through quality international education.