const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');
const faqButtons = document.querySelectorAll('.faq-question');
const form = document.getElementById('contact-form');
const statusMessage = document.querySelector('.form-status');
const header = document.querySelector('.site-header');
const progressBar = document.querySelector('.page-progress span');
const revealItems = document.querySelectorAll('.reveal');
const magneticButtons = document.querySelectorAll('[data-magnetic]');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const isActive = item.classList.contains('active');

    faqButtons.forEach((faqButton) => {
      const faqItem = faqButton.closest('.faq-item');
      faqItem.classList.remove('active');
      faqButton.setAttribute('aria-expanded', 'false');
    });

    if (!isActive) {
      item.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
    }
  });
});

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');

    const isComplete = [name, email, phone, message].every((field) => field.value.trim());
    const hasValidEmail = email && email.value.includes('@');

    if (!isComplete || !hasValidEmail) {
      statusMessage.textContent = 'Please complete all fields with a valid email address.';
      statusMessage.className = 'form-status error';
      return;
    }

    statusMessage.textContent = "Thanks for reaching out. We've received your message and will get back to you shortly.";
    statusMessage.className = 'form-status success';
    form.reset();
  });
}

const updateHeaderState = () => {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 24);
};

const updateProgressBar = () => {
  if (!progressBar) return;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progressBar.style.width = `${Math.min(Math.max(progress, 0), 100)}%`;
};

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => revealObserver.observe(item));

window.addEventListener('scroll', () => {
  updateHeaderState();
  updateProgressBar();
}, { passive: true });

updateHeaderState();
updateProgressBar();

if (window.matchMedia('(pointer: fine)').matches) {
  magneticButtons.forEach((button) => {
    button.addEventListener('pointermove', (event) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const offsetX = (x / rect.width - 0.5) * 6;
      const offsetY = (y / rect.height - 0.5) * 6;
      button.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });

    button.addEventListener('pointerleave', () => {
      button.style.transform = '';
    });
  });
}
