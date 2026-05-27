class SunriseWebsite {
  constructor() {
    this.app = document.getElementById('app');
    this.currentLanguage = i18n.getLanguage();
    this.init();
  }

  init() {
    this.render();
    this.attachEventListeners();
  }

  render() {
    this.app.innerHTML = `
      ${this.renderHeader()}
      ${this.renderHero()}
      ${this.renderAbout()}
      ${this.renderWhyChooseUs()}
      ${this.renderPrograms()}
      ${this.renderCurriculum()}
      ${this.renderContact()}
      ${this.renderFooter()}
    `;
  }

  renderHeader() {
    const t = (key) => i18n.get(key);
    const langs = i18n.getAllLanguages();
    const langLabels = { en: 'EN', zh: '中文', ms: 'BM' };

    return `
      <header>
        <div class="header-container">
          <a href="#" class="logo">
            <span class="logo-icon">☀️</span>
            <span>Sunrise</span>
          </a>
          <button class="nav-toggle" id="navToggle">☰</button>
          <nav id="nav-menu" class="nav-menu">
            <ul>
              <li><a href="#home">${t('home')}</a></li>
              <li><a href="#about">${t('about')}</a></li>
              <li><a href="#programs">${t('programs')}</a></li>
              <li><a href="#curriculum">${t('curriculum')}</a></li>
              <li><a href="#contact">${t('contact')}</a></li>
            </ul>
          </nav>
          <div class="header-right">
            <div class="lang-selector">
              ${langs.map(lang => `
                <button class="lang-btn ${lang === this.currentLanguage ? 'active' : ''}"
                        data-lang="${lang}">${langLabels[lang]}</button>
              `).join('')}
            </div>
          </div>
        </div>
      </header>
    `;
  }

  renderHero() {
    const t = (key) => i18n.get(key);
    return `
      <section class="hero" id="home">
        <div class="hero-content">
          <h1>${t('heroTitle')}</h1>
          <p class="subtitle">${t('heroSubtitle')}</p>
          <p>${t('heroDesc')}</p>
          <div class="hero-buttons">
            <button class="btn btn-primary" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">${t('learnMore')}</button>
            <button class="btn btn-outline" onclick="alert('${t('enrollNow')} - Coming Soon')">📧 ${t('enrollNow')}</button>
          </div>
        </div>
      </section>
    `;
  }

  renderAbout() {
    const t = (key) => i18n.get(key);
    return `
      <section id="about">
        <div class="container">
          <div class="section-title">
            <h2>${t('aboutTitle')}</h2>
            <p>${t('aboutDesc')}</p>
          </div>
          <div class="why-choose-content">
            <div>
              <h3>${t('ourMission')}</h3>
              <p>${t('missionDesc')}</p>
              <h3 style="margin-top: 2rem;">${t('ourVision')}</h3>
              <p>${t('visionDesc')}</p>
            </div>
            <div class="why-choose-image">🎓</div>
          </div>
        </div>
      </section>
    `;
  }

  renderWhyChooseUs() {
    const t = (key) => i18n.get(key);
    return `
      <section class="why-choose">
        <div class="container">
          <div class="section-title">
            <h2>${t('whyChoose')}</h2>
            <p>${t('whyChooseDesc')}</p>
          </div>
          <div class="why-choose-content">
            <ul class="why-choose-list">
              <li>${t('feature1')}</li>
              <li>${t('feature2')}</li>
              <li>${t('feature3')}</li>
              <li>${t('feature4')}</li>
              <li>${t('feature5')}</li>
              <li>${t('feature6')}</li>
            </ul>
            <div class="why-choose-image">✨</div>
          </div>
        </div>
      </section>
    `;
  }

  renderPrograms() {
    const t = (key) => i18n.get(key);
    return `
      <section id="programs">
        <div class="container">
          <div class="section-title">
            <h2>${t('programsTitle')}</h2>
            <p>${t('programsDesc')}</p>
          </div>
          <div class="programs-grid">
            <div class="program-card">
              <div class="program-card-image">📚</div>
              <div class="program-card-content">
                <h3>${t('primaryProgram')}</h3>
                <p class="age-range">${t('primaryAge')}</p>
                <p>${t('primaryDesc')}</p>
              </div>
            </div>
            <div class="program-card">
              <div class="program-card-image">🎯</div>
              <div class="program-card-content">
                <h3>${t('secondaryProgram')}</h3>
                <p class="age-range">${t('secondaryAge')}</p>
                <p>${t('secondaryDesc')}</p>
              </div>
            </div>
            <div class="program-card">
              <div class="program-card-image">🌟</div>
              <div class="program-card-content">
                <h3>${t('igcseProgram')}</h3>
                <p class="age-range">${t('igcseAge')}</p>
                <p>${t('igcseDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderCurriculum() {
    const t = (key) => i18n.get(key);
    return `
      <section class="why-choose" id="curriculum">
        <div class="container">
          <div class="section-title">
            <h2>${t('curriculumTitle')}</h2>
            <p>${t('curriculumDesc')}</p>
          </div>
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">🏆</div>
              <p>${t('curriculumFeature1')}</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">📖</div>
              <p>${t('curriculumFeature2')}</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🧠</div>
              <p>${t('curriculumFeature3')}</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🎓</div>
              <p>${t('curriculumFeature4')}</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">✅</div>
              <p>${t('curriculumFeature5')}</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🎯</div>
              <p>${t('curriculumFeature6')}</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderContact() {
    const t = (key) => i18n.get(key);
    return `
      <section class="contact-section" id="contact">
        <div class="container">
          <div class="section-title">
            <h2 style="color: white;">${t('contactTitle')}</h2>
            <p style="color: rgba(255, 255, 255, 0.9);">${t('contactDesc')}</p>
          </div>
          
          <div class="contact-grid">
            <div class="contact-item">
              <div class="contact-item-icon">📱</div>
              <h3>${t('phone')}</h3>
              <a href="tel:+60124251556">+60 12-425 1556</a>
              <p style="margin-top: 0.5rem; font-size: 0.9rem;">(WhatsApp Available)</p>
            </div>
            <div class="contact-item">
              <div class="contact-item-icon">📧</div>
              <h3>${t('email')}</h3>
              <a href="mailto:LOVE@sun.edu.my">LOVE@sun.edu.my</a>
            </div>
            <div class="contact-item">
              <div class="contact-item-icon">🤖</div>
              <h3>${t('aiAssistant')}</h3>
              <a href="https://ai.sun.edu.my" target="_blank">ai.sun.edu.my</a>
            </div>
            <div class="contact-item">
              <div class="contact-item-icon">📍</div>
              <h3>${t('address')}</h3>
              <p>No. 25-2nd Floor<br>Jalan Mahogani 5/Ks7<br>41200 Klang, Selangor<br>Malaysia</p>
            </div>
          </div>

          <div class="contact-grid" style="margin-top: 2rem;">
            <div class="contact-item">
              <div class="contact-item-icon">📍</div>
              <h3>${t('followUs')}</h3>
              <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                <a href="https://www.instagram.com/sunrisecenters/" target="_blank" style="display: inline-flex;">📸 Instagram</a>
                <a href="https://www.facebook.com/SunriseResourceCentre" target="_blank" style="display: inline-flex;">👥 Facebook</a>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-item-icon">🗺️</div>
              <h3>${t('address')}</h3>
              <a href="https://maps.google.com/maps?ll=2.996279,101.445392&z=16&t=m&hl=en&gl=MY&mapclient=embed&cid=17369959600029876247" target="_blank">🗺️ Open in Google Maps</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderFooter() {
    const t = (key) => i18n.get(key);
    return `
      <footer>
        <div class="footer-content">
          <div class="footer-section">
            <h4>Sunrise Education</h4>
            <p>A caring community dedicated to nurturing young minds through quality international education.</p>
          </div>
          <div class="footer-section">
            <h4>${t('quickLinks')}</h4>
            <ul>
              <li><a href="#about">${t('about')}</a></li>
              <li><a href="#programs">${t('programs')}</a></li>
              <li><a href="#curriculum">${t('curriculum')}</a></li>
              <li><a href="#contact">${t('contact')}</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>${t('policies')}</h4>
            <ul>
              <li><a href="#">${t('privacyPolicy')}</a></li>
              <li><a href="#">${t('termsService')}</a></li>
              <li><a href="#">${t('faq')}</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>${t('copyright')}</p>
        </div>
      </footer>
    `;
  }

  attachEventListeners() {
    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const lang = e.target.dataset.lang;
        this.changeLanguage(lang);
      });
    });

    // Mobile nav toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('nav-menu');
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
    }

    // Close mobile menu on link click
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }

  changeLanguage(lang) {
    if (i18n.setLanguage(lang)) {
      this.currentLanguage = lang;
      this.render();
      this.attachEventListeners();
    }
  }
}

// Initialize the website when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new SunriseWebsite();
  });
} else {
  new SunriseWebsite();
}