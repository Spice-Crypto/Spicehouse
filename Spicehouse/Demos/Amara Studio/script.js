const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 12);
});

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  mobileMenu.classList.toggle('is-open', !isOpen);
  mobileMenu.setAttribute('aria-hidden', String(isOpen));
});

document.querySelectorAll('.mobile-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
  });
});

document.querySelectorAll('.filter-button').forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.filter-button').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    document.querySelectorAll('.product-card').forEach((card) => {
      const shouldShow = filter === 'all' || card.dataset.category === filter;
      card.style.display = shouldShow ? '' : 'none';
    });
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
