import { demos, packages, projects, services, site } from './data.js';

const page = document.body.dataset.page || 'home';

const fillText = () => {
  document.querySelectorAll('[data-site]').forEach((element) => {
    const key = element.dataset.site;
    if (site[key]) element.textContent = site[key];
  });

  document.querySelectorAll('[data-site-link="email"]').forEach((element) => {
    element.href = `mailto:${site.email}`;
    if (element.textContent.includes('@') || element.textContent.includes('Email')) {
      element.textContent = site.email;
    }
  });

  document.querySelectorAll('[data-site-link="whatsapp"]').forEach((element) => {
    element.href = `https://wa.me/${site.whatsapp.replace(/\D/g, '')}`;
    if (element.textContent.includes('WhatsApp') || element.textContent.includes('WA')) {
      element.textContent = site.whatsapp;
    }
  });

  document.querySelectorAll('[data-site-link="instagram"]').forEach((element) => {
    element.href = `https://instagram.com/${site.instagram.replace('@', '')}`;
    if (element.textContent.includes('Instagram')) {
      element.textContent = site.instagram;
    }
  });

  const yearNode = document.querySelector('#year');
  if (yearNode) yearNode.textContent = new Date().getFullYear();
};

const renderDemos = () => {
  const demoTarget = document.querySelector('#demo-grid');
  if (!demoTarget) return;

  demoTarget.innerHTML = demos.map((demo, index) => `
    <article class="demo-card reveal" style="--delay: ${index * 120}ms">
      <div class="demo-card__topline">
        <span class="project-tag">${demo.category}</span>
        <span class="demo-label">Proof of concept</span>
      </div>
      <h3>${demo.name}</h3>
      <p>${demo.description}</p>
      <a class="button button-dark" href="${demo.href}" target="_blank" rel="noreferrer">Review demo <span aria-hidden="true">↗</span></a>
    </article>
  `).join('');
};

const renderPackages = () => {
  const packageTarget = document.querySelector('#package-list');
  if (!packageTarget) return;

  packageTarget.innerHTML = packages.map((item, index) => `
    <article class="package-card ${item.featured ? 'package-card--featured' : ''} reveal" style="--delay: ${index * 120}ms">
      <div class="package-topline">
        <span class="package-number">0${index + 1}</span>
        ${item.featured ? '<span class="package-badge">Recommended</span>' : ''}
      </div>
      <h3>${item.name}</h3>
      <p class="package-price">${item.price}</p>
      <p class="package-intro">${item.intro}</p>
      <p class="package-detail">${item.detail}</p>
      <ul>
        ${item.includes.map((include) => `<li>${include}</li>`).join('')}
      </ul>
      <p class="package-detail">${item.note}</p>
      ${item.serviceSlug ? `<a class="text-link text-link--inline" href="services/${item.serviceSlug}/">View package details <span aria-hidden="true">↗</span></a>` : ''}
      <a class="button ${item.featured ? 'button-dark' : 'button-light'}" href="contact.html#quote-form">${item.cta} <span aria-hidden="true">↗</span></a>
    </article>
  `).join('');
};

const renderProjectDetail = () => {
  const detailTarget = document.querySelector('[data-project-detail]');
  if (!detailTarget) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('project') || 'velvet-lane';
  const project = projects.find((item) => item.slug === slug) || projects[0];

  detailTarget.innerHTML = `
    <section class="project-hero page-section">
      <div class="container project-hero__inner">
        <p class="eyebrow">${project.industry}</p>
        <h1>${project.name}</h1>
        <div class="project-hero__meta">
          <span>${project.year}</span>
          <span>${project.category}</span>
        </div>
      </div>
    </section>

    <section class="page-section page-section--tight">
      <div class="container project-visual">
        <img src="${project.image}" alt="${project.alt}" loading="eager" />
      </div>
    </section>

    <section class="page-section page-section--tight">
      <div class="container project-story">
        <div>
          <p class="eyebrow">The brief</p>
          <h2>${project.summary}</h2>
        </div>
        <div>
          <p>${project.outcome}</p>
          <ul class="pill-list">
            ${project.roles.map((role) => `<li>${role}</li>`).join('')}
          </ul>
        </div>
      </div>
    </section>

    <section class="page-section page-section--tight">
      <div class="container project-ctas">
        <a class="button button-dark" href="contact.html">Book a discovery call <span aria-hidden="true">↗</span></a>
        <a class="button button-light" href="work.html">Back to work <span aria-hidden="true">←</span></a>
      </div>
    </section>
  `;
};

const renderServiceDetail = () => {
  const detailTarget = document.querySelector('[data-service-detail]');
  if (!detailTarget) return;

  const serviceKey = document.body.dataset.service;
  const service = services[serviceKey];
  if (!service) {
    detailTarget.innerHTML = `
      <section class="page-section">
        <div class="container project-story">
          <div>
            <p class="eyebrow">Services</p>
            <h1>That package is not available.</h1>
          </div>
          <div>
            <p>Return to the services overview to explore the packages currently available.</p>
            <a class="button button-dark" href="../../services.html">View services <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    `;
    return;
  }

  const includedSections = [
    ...service.includes,
    ...(service.seo ? [service.seo] : []),
    ...(service.analytics ? [service.analytics] : []),
    ...(service.launch ? [service.launch] : [])
  ];

  detailTarget.innerHTML = `
    <section class="project-hero page-section">
      <div class="container project-hero__inner">
        <p class="eyebrow">${service.eyebrow}</p>
        <h1>${service.name}</h1>
        <div class="project-hero__meta">
          <span>${service.price}</span>
          <span>One-time website development</span>
        </div>
        <p class="section-note">${service.title}</p>
      </div>
    </section>

    <section class="page-section page-section--tight">
      <div class="container project-story">
        <div>
          <p class="eyebrow">The idea</p>
          <h2>${service.introTitle}</h2>
        </div>
        <div>
          <p>${service.introduction}</p>
          <p>${service.summary}</p>
        </div>
      </div>
    </section>

    <section class="section-rule" aria-labelledby="${serviceKey}-fit-title">
      <div class="container">
        <div class="section-heading reveal">
          <p class="eyebrow">Who it's for</p>
          <h2 id="${serviceKey}-fit-title">${service.audienceHeading || 'A clear next step for businesses ready to grow.'}</h2>
        </div>
        <ul class="pill-list reveal" style="--delay: 120ms">
          ${service.audience.map((item) => `<li>${item}</li>`).join('')}
        </ul>
        ${service.audienceNote ? `<p class="section-note reveal" style="--delay: 180ms">${service.audienceNote}</p>` : ''}
        ${service.audienceQuestions ? `<ul class="pill-list reveal" style="--delay: 240ms">${service.audienceQuestions.map((item) => `<li>${item}</li>`).join('')}</ul>` : ''}
      </div>
    </section>

    <section class="page-section page-section--tight" aria-labelledby="${serviceKey}-included-title">
      <div class="container">
        <div class="section-heading reveal">
          <p class="eyebrow">Included</p>
          <h2 id="${serviceKey}-included-title">${service.includedHeading || 'Everything needed for a <span class="text-accent">clear digital home.</span>'}</h2>
        </div>
        <div class="info-grid">
          ${includedSections.map((item, index) => `
            <article class="info-panel reveal" style="--delay: ${index * 80}ms">
              <h3>${item.title}</h3>
              <p>${item.description}</p>
              ${item.items ? `<ul>${item.items.map((entry) => `<li>${entry}</li>`).join('')}</ul>` : ''}
              ${item.note ? `<p>${item.note}</p>` : ''}
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    ${(service.additionalSections || []).map((section, index) => `
      <section class="section-rule" aria-labelledby="${serviceKey}-additional-${index}">
        <div class="container">
          <div class="section-heading reveal">
            <p class="eyebrow">${section.eyebrow}</p>
            <h2 id="${serviceKey}-additional-${index}">${section.title}</h2>
          </div>
          <div class="project-story">
            <div><p>${section.description}</p></div>
            <div>
              ${section.items ? `<ul class="pill-list">${section.items.map((item) => `<li>${item}</li>`).join('')}</ul>` : ''}
              ${section.note ? `<p>${section.note}</p>` : ''}
            </div>
          </div>
        </div>
      </section>
    `).join('')}

    <section class="section-rule" aria-labelledby="${serviceKey}-terms-title">
      <div class="container">
        <div class="section-heading reveal">
          <p class="eyebrow">Project terms</p>
          <h2 id="${serviceKey}-terms-title">Clear scope, from first draft <span class="text-accent">to launch.</span></h2>
        </div>
        <div class="info-grid">
          ${service.revisions ? `<article class="info-panel reveal">
            <h3>${service.revisions.title}</h3>
            <p>${service.revisions.description}</p>
            <p>${service.revisions.note}</p>
          </article>` : ''}
          <article class="info-panel reveal">
            <h3>${service.infrastructure.title}</h3>
            <p>${service.infrastructure.description}</p>
            ${service.infrastructure.items ? `<ul>${service.infrastructure.items.map((item) => `<li>${item}</li>`).join('')}</ul>` : ''}
            <p>${service.infrastructure.note}</p>
          </article>
        </div>
      </div>
    </section>

    ${service.exclusions ? `<section class="page-section page-section--tight" aria-labelledby="${serviceKey}-exclusions-title">
      <div class="container project-story">
        <div>
          <p class="eyebrow">Not included</p>
          <h2 id="${serviceKey}-exclusions-title">${service.exclusionHeading || 'The package keeps its scope <span class="text-accent">focused.</span>'}</h2>
        </div>
        <div>
          <p>${service.exclusionLabel || `${service.name} does not include:`}</p>
          <ul class="pill-list">
            ${service.exclusions.map((item) => `<li>${item}</li>`).join('')}
          </ul>
          <p>${service.exclusionNote}</p>
        </div>
      </div>
    </section>` : ''}

    <section class="page-section page-section--tight">
      <div class="container project-ctas">
        <div>
          <p class="eyebrow">The result</p>
          <h2>${service.result}</h2>
          <p class="package-price">${service.price}</p>
          ${service.resultNote ? `<p>${service.resultNote}</p>` : ''}
        </div>
        <div class="project-ctas">
          <a class="button button-dark" href="../../contact.html#quote-form">Get a quote <span aria-hidden="true">↗</span></a>
          <a class="button button-light" href="../../services.html">Back to services <span aria-hidden="true">←</span></a>
        </div>
      </div>
    </section>
  `;
};

const initMenu = () => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#site-nav');
  if (!menuButton || !navigation) return;

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('is-open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
      document.body.classList.remove('menu-open');
    });
  });
};

const initReveal = () => {
  const revealItems = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    revealItems.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((element) => observer.observe(element));
};

const initForm = () => {
  const form = document.querySelector('#quote-form');
  if (!form) return;

  const status = form.querySelector('.form-status');
  const submitButton = form.querySelector('button[type="submit"]');
  const packageField = form.querySelector('[name="package"]');
  const budgetField = form.querySelector('[name="budget"]');
  const budgetWrapper = budgetField ? budgetField.closest('.budget-field') : null;

  const syncBudgetVisibility = () => {
    if (!packageField || !budgetField || !budgetWrapper) return;

    const shouldShowBudget = packageField.value === 'Not sure yet';
    budgetWrapper.hidden = !shouldShowBudget;
    budgetField.disabled = !shouldShowBudget;
    budgetField.required = shouldShowBudget;
    budgetField.setAttribute('aria-hidden', String(!shouldShowBudget));

    if (!shouldShowBudget) {
      budgetField.value = '';
      budgetField.setCustomValidity('');
      budgetField.setAttribute('aria-invalid', 'false');
      if (budgetField.closest('.field')) {
        budgetField.closest('.field').classList.remove('has-error');
      }
    }
  };

  const setError = (field, message) => {
    const input = form.querySelector(`[name="${field}"]`);
    if (!input) return;
    const wrapper = input.closest('.field');
    if (wrapper) wrapper.classList.add('has-error');
    input.setAttribute('aria-invalid', 'true');
    input.setCustomValidity(message);
    input.reportValidity();
  };

  const clearError = (field) => {
    const input = form.querySelector(`[name="${field}"]`);
    if (!input) return;
    const wrapper = input.closest('.field');
    if (wrapper) wrapper.classList.remove('has-error');
    input.setAttribute('aria-invalid', 'false');
    input.setCustomValidity('');
  };

  form.querySelectorAll('input, select, textarea').forEach((field) => {
    field.addEventListener('input', () => clearError(field.name));
    field.addEventListener('change', () => {
      clearError(field.name);
      if (field.name === 'package') syncBudgetVisibility();
    });
  });

  if (packageField) {
    packageField.addEventListener('change', syncBudgetVisibility);
    syncBudgetVisibility();
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const rules = [
      'name',
      'businessName',
      'email',
      'phone',
      'businessType',
      'businessDescription',
      'websiteGoals',
      'package'
    ];

    if (budgetField && !budgetField.disabled && budgetField.required) {
      rules.push('budget');
    }

    let valid = true;

    rules.forEach((field) => {
      const input = form.querySelector(`[name="${field}"]`);
      if (!input) return;
      if (!input.value.trim()) {
        setError(field, 'This field is required.');
        valid = false;
      } else {
        clearError(field);
      }
    });

    const emailField = form.querySelector('[name="email"]');
    if (emailField && emailField.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
      setError('email', 'Please enter a valid email address.');
      valid = false;
    }

    if (!valid) {
      if (status) {
        status.textContent = 'Please complete the required fields before sending your enquiry.';
        status.classList.add('is-error');
      }
      return;
    }

    if (status) {
      status.classList.remove('is-error');
      status.textContent = 'Sending your enquiry…';
    }

    submitButton.disabled = true;
    submitButton.textContent = 'Sending…';

    window.setTimeout(() => {
      form.reset();
      submitButton.disabled = false;
      submitButton.textContent = 'Send enquiry';
      if (status) {
        status.textContent = 'Thanks — your enquiry has been drafted successfully. We’ll be in touch soon.';
        status.classList.add('is-success');
      }
    }, 700);
  });
};

const initPage = () => {
  fillText();
  initMenu();
  renderDemos();
  renderPackages();
  renderProjectDetail();
  renderServiceDetail();
  initReveal();
  initForm();

  const currentPage = document.body.dataset.page;
  const links = document.querySelectorAll('.site-nav a[data-page-link]');
  links.forEach((link) => {
    if (link.dataset.pageLink === currentPage) {
      link.classList.add('is-active');
    }
  });
};

initPage();