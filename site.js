/* Navigation, preferences, timeline alignment, and on-demand contact reveal. */
(() => {
  const html = document.documentElement;
  const langButton = document.getElementById('lang-toggle-btn');
  const themeButton = document.getElementById('theme-toggle-btn');
  const menuButton = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-nav-drawer');
  const fab = document.getElementById('mobile-fab');
  const storage = {
    set(key, value) { try { localStorage.setItem(key, value); } catch { /* Storage is optional. */ } }
  };
  const label = (selector, en, ar) => {
    document.querySelectorAll(selector).forEach(element => element.setAttribute('aria-label', html.lang === 'ar' ? ar : en));
  };
  function updateLabels() {
    const ar = html.lang === 'ar';
    const light = html.dataset.theme === 'light';
    const opened = drawer.classList.contains('open');
    document.title = ar ? 'عبدالعزيز طارق | تقنية المعلومات والأنظمة والأتمتة' : 'Abdulaziz Tariq | IT, Systems & AI Automation';
    document.querySelector('meta[name="description"]').content = ar
      ? 'معرض أعمال عبدالعزيز طارق في تقنية المعلومات وإدارة الأنظمة ومشاريع الأتمتة بالذكاء الاصطناعي.'
      : "Abdulaziz Tariq's portfolio featuring IT systems, support, and AI automation projects with visual case studies.";
    label('#lang-toggle-btn', 'Switch to Arabic', 'Switch to English');
    label('#theme-toggle-btn', light ? 'Switch to dark theme' : 'Switch to light theme', light ? 'التبديل إلى الوضع الداكن' : 'التبديل إلى الوضع الفاتح');
    label('#mobile-menu-btn', opened ? 'Close menu' : 'Open menu', opened ? 'إغلاق القائمة' : 'فتح القائمة');
    label('.dock-nav-links', 'Primary navigation', 'التنقل الرئيسي');
    label('#mobile-nav-drawer', 'Mobile navigation', 'قائمة التنقل');
    label('.dock-brand-link', 'Abdulaziz Tariq Home', 'عبدالعزيز طارق — الرئيسية');
    label('.hero-tech-tags', 'Technical specialties', 'مجالات التخصص التقني');
    label('#mobile-fab', 'Email Abdulaziz Tariq', 'راسل عبدالعزيز طارق');
    const phoneLink = document.getElementById('phone-contact');
    if (phoneLink?.dataset.revealed === 'true') {
      const visibleNumber = phoneLink.querySelector('strong').textContent;
      label('#phone-contact', `Call ${visibleNumber}`, `الاتصال على ${visibleNumber}`);
    } else label('#phone-contact', 'Show mobile number', 'إظهار رقم الجوال');
    label('#image-lightbox', 'Enlarged project image', 'صورة مشروع مكبرة');
    label('#close-modal-btn', 'Close project details', 'إغلاق تفاصيل المشروع');
    label('#close-lightbox-btn', 'Close image', 'إغلاق الصورة');
    label('.gallery-zoom-pill', 'Enlarge current project image', 'تكبير صورة المشروع');
    label('.gallery-image-button', 'Enlarge current project image', 'تكبير صورة المشروع');
    label('.lightbox-zoom-controls', 'Image zoom', 'تكبير الصورة');
    label('#lightbox-zoom-in', 'Zoom in', 'تكبير');
    label('#lightbox-zoom-out', 'Zoom out', 'تصغير');
    label('#lightbox-viewport', 'Project image; scroll to explore when zoomed', 'صورة المشروع؛ مرّر لاستكشاف التفاصيل بعد التكبير');
    label('#lightbox-prev', 'Previous image', 'الصورة السابقة');
    label('#lightbox-next', 'Next image', 'الصورة التالية');
    label('.gallery-nav-btn.prev-btn', 'Previous step', 'الخطوة السابقة');
    label('.gallery-nav-btn.next-btn', 'Next step', 'الخطوة التالية');
    label('.modal-view-tabs', 'Project information', 'معلومات المشروع');
    document.getElementById('project-modal').setAttribute('aria-labelledby', ar ? 'modal-title-ar' : 'modal-title-en');
    const covers = ar ? ['عرض مشروع أتمتة الوظائف', 'عرض مشروع تصنيف البريد', 'عرض مشروع أثر'] : ['View AI Jobs project', 'View AI Email project', 'View Athar project'];
    document.querySelectorAll('.proj-cover-button').forEach((button, index) => button.setAttribute('aria-label', covers[index]));
    document.querySelectorAll('.gallery-thumb-item').forEach((button, index) => {
      const step = currentActiveProject?.steps[index];
      if (step) button.setAttribute('aria-label', ar ? step.titleAr : step.titleEn);
    });
    if (currentActiveProject) {
      const step = currentActiveProject.steps[currentActiveStepIndex];
      document.getElementById('gallery-stage-img').alt = ar ? step.titleAr : step.titleEn;
    }
    [langButton, themeButton].forEach(button => button.title = button.getAttribute('aria-label'));
  }
  function applyTheme(theme) {
    if (theme === 'light') html.dataset.theme = 'light';
    else html.removeAttribute('data-theme');
    document.getElementById('theme-icon').className = theme === 'light' ? 'fas fa-sun' : 'far fa-moon';
    document.querySelector('meta[name="theme-color"]').content = theme === 'light' ? '#f2f5f9' : '#080f1b';
    const modeClass = theme === 'light' ? '.logo-light-mode' : '.logo-dark-mode';
    document.querySelectorAll(`img${modeClass}[data-src]`).forEach(image => {
      if (!image.getAttribute('src')) image.src = image.dataset.src;
    });
    document.getElementById('site-icon').href = theme === 'light' ? 'images/favicon-light.png' : 'images/favicon-dark.png';
  }
  function setMenu(open, returnFocus = false) {
    drawer.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.querySelector('i').className = open ? 'fas fa-times' : 'fas fa-bars';
    updateLabels();
    if (returnFocus) menuButton.focus();
  }
  applyTheme(html.dataset.theme === 'light' ? 'light' : 'dark');
  updateLabels();
  const employerLogos = [...document.querySelectorAll('.company-logo')].filter(logo => logo.querySelector('image[data-src]'));
  const loadEmployerLogo = logo => {
    const image = logo.querySelector('image[data-src]');
    image.setAttribute('href', image.dataset.src);
  };
  if ('IntersectionObserver' in window) {
    const logoObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { loadEmployerLogo(entry.target); logoObserver.unobserve(entry.target); }
      });
    }, { rootMargin: '320px 0px' });
    employerLogos.forEach(logo => logoObserver.observe(logo));
  } else employerLogos.forEach(loadEmployerLogo);
  document.getElementById('phone-contact').addEventListener('click', function () {
    // On-demand obfuscation discourages simple scraping; public JavaScript is not a secret store.
    const encoded = [21, 19, 30, 31, 25, 27, 29, 26, 26, 23];
    const national = String.fromCharCode(...encoded.map((value, index) => value ^ (37 + index)));
    const link = document.createElement('a');
    link.id = this.id;
    link.className = this.className;
    link.href = 'tel:+966' + national.slice(1);
    link.dataset.revealed = 'true';
    link.append(...this.childNodes);
    link.querySelector('strong').textContent = national;
    this.replaceWith(link);
    updateLabels();
    link.focus({ preventScroll: true });
  }, { once: true });
  langButton.addEventListener('click', () => {
    html.lang = html.lang === 'en' ? 'ar' : 'en';
    html.dir = html.lang === 'ar' ? 'rtl' : 'ltr';
    storage.set('language', html.lang);
    updateLabels();
    updateScroll();
    requestAnimationFrame(alignTimeline);
  });
  themeButton.addEventListener('click', () => {
    const theme = html.dataset.theme === 'light' ? 'dark' : 'light';
    applyTheme(theme);
    storage.set('theme', theme);
    updateLabels();
  });
  menuButton.addEventListener('click', () => {
    const open = !drawer.classList.contains('open');
    setMenu(open);
    if (open) drawer.querySelector('a').focus();
  });
  drawer.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    setMenu(false);
    const section = document.querySelector(link.getAttribute('href'));
    section.tabIndex = -1;
    section.focus({ preventScroll: true });
  }));
  document.querySelector('.hero-scroll a').addEventListener('click', event => {
    const section = document.querySelector(event.currentTarget.hash);
    section.tabIndex = -1;
    section.focus({ preventScroll: true });
  });
  document.addEventListener('click', event => {
    if (drawer.classList.contains('open') && !drawer.contains(event.target) && !menuButton.contains(event.target)) setMenu(false);
  });
  document.addEventListener('keydown', event => {
    if (!drawer.classList.contains('open')) return;
    if (event.key === 'Escape') { setMenu(false, true); return; }
    if (event.key !== 'Tab') return;
    const links = [...drawer.querySelectorAll('a')];
    if (event.shiftKey && document.activeElement === links[0]) { event.preventDefault(); menuButton.focus(); }
    else if (!event.shiftKey && document.activeElement === links.at(-1)) { event.preventDefault(); menuButton.focus(); }
    else if (document.activeElement === menuButton) { event.preventDefault(); (event.shiftKey ? links.at(-1) : links[0]).focus(); }
  });
  const sections = [...document.querySelectorAll('main > section')];
  const navLinks = [...document.querySelectorAll('.dock-nav-links a, .dock-cta-btn, .mobile-nav-item')];
  let pending = false;
  function updateScroll() {
    pending = false;
    let current = sections[0].id;
    for (const section of sections) if (section.getBoundingClientRect().top <= 145) current = section.id;
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) current = 'contact';
    navLinks.forEach(link => {
      if (link.hash === '#' + current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    const contactTop = document.getElementById('contact').getBoundingClientRect().top;
    fab.classList.toggle('visible', window.scrollY > 300 && contactTop > window.innerHeight);
  }
  window.addEventListener('scroll', () => {
    if (!pending) { pending = true; requestAnimationFrame(updateScroll); }
  }, { passive: true });
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && drawer.classList.contains('open')) {
      const focusInDrawer = drawer.contains(document.activeElement) || document.activeElement === menuButton;
      setMenu(false);
      if (focusInDrawer) langButton.focus();
    }
    updateScroll();
    requestAnimationFrame(alignTimeline);
  });
  // Anchor each timeline marker to the vertical center of its card in both directions.
  const timelineRows = [...document.querySelectorAll('.timeline-item')];
  function alignTimeline() {
    const centers = timelineRows.map(row => {
      const card = row.querySelector('.timeline-content').getBoundingClientRect();
      const rect = row.getBoundingClientRect();
      const top = card.top + card.height / 2 - rect.top - 7;
      row.style.setProperty('--timeline-dot-top', `${top}px`);
      return rect.top + top + 7;
    });
    timelineRows.forEach((row, index) => {
      if (index < timelineRows.length - 1) row.style.setProperty('--timeline-line-length', `${centers[index + 1] - centers[index]}px`);
    });
  }
  if ('ResizeObserver' in window) {
    const timelineObserver = new ResizeObserver(() => requestAnimationFrame(alignTimeline));
    timelineRows.forEach(row => timelineObserver.observe(row));
  }
  document.fonts?.ready.then(alignTimeline);
  alignTimeline();
  document.querySelectorAll('main > section:not(.hero)').forEach((section, index) => {
    section.querySelectorAll('.pre-heading').forEach(heading => heading.dataset.number = String(index + 1).padStart(2, '0'));
  });
  document.querySelectorAll('i, .interactive-btn svg, .interactive-card svg').forEach(icon => icon.setAttribute('aria-hidden', 'true'));
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('reveal-in'); observer.unobserve(entry.target); }
    }), { threshold: .12 });
    document.querySelectorAll('.section-header-area, .skill-pro-card, .project-card-3col').forEach(element => observer.observe(element));
  }
  updateScroll();
})();
