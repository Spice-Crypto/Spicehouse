const whatsappNumber = '2348000000000';
const products = [
  {
    slug: 'amara-dress',
    name: 'Amara Dress',
    category: 'dresses',
    categoryLabel: 'Dress',
    price: 68000,
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://assets.lummi.ai/assets/QmPEUp9pDTovVFybbKLq3NJHhwHBCZv6Qb8FT3yGBJs6ZK?auto=format&w=1500',
    alt: 'Amara Dress from the VELA collection',
    description: 'A contemporary dress for workdays, dinners and plans in between.'
  },
  {
    slug: 'sienna-two-piece',
    name: 'Sienna Two-Piece',
    category: 'sets',
    categoryLabel: 'Two-piece set',
    price: 82000,
    sizes: ['S', 'M', 'L'],
    image: 'https://assets.lummi.ai/assets/QmeN3wthunMiq4kfDQc5GgiKpF2LAzRxY8dYp1NtQefLSP?auto=format&w=1500',
    alt: 'Sienna Two-Piece from the VELA collection',
    description: 'A coordinated two-piece look, listed together in the VELA collection.'
  },
  {
    slug: 'nia-slip-dress',
    name: 'Nia Slip Dress',
    category: 'dresses',
    categoryLabel: 'Dress',
    price: 59000,
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://assets.lummi.ai/assets/QmQ3hAA5pTbqnGDuNkv7Dpdtw4RtuG85vPmumEwscSMZtd?auto=format&w=1500',
    alt: 'Nia Slip Dress from the VELA collection',
    description: 'A slip dress for an easy, considered everyday wardrobe.'
  },
  {
    slug: 'ayla-shirt-dress',
    name: 'Ayla Shirt Dress',
    category: 'dresses',
    categoryLabel: 'Dress',
    price: 72000,
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://assets.lummi.ai/assets/QmUWkUxxi7feQDUQJmx8Lee7st76xAC4xNy4U2FutGFu3e?auto=format&w=1500',
    alt: 'Ayla Shirt Dress from the VELA collection',
    description: 'A shirt dress that moves between weekday and weekend plans.'
  },
  {
    slug: 'mira-co-ord-set',
    name: 'Mira Co-Ord Set',
    category: 'sets',
    categoryLabel: 'Two-piece set',
    price: 76000,
    sizes: ['S', 'M', 'L'],
    image: 'https://assets.lummi.ai/assets/QmWtCEPMenpJyDW5RkQ7KVDg8F6EGWJey5rMWrDdtHzkSb?auto=format&w=1500',
    alt: 'Mira Co-Ord Set from the VELA collection',
    description: 'A coordinated set selected for a simple, pulled-together outfit.'
  },
  {
    slug: 'zuri-maxi-dress',
    name: 'Zuri Maxi Dress',
    category: 'dresses',
    categoryLabel: 'Dress',
    price: 88000,
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://assets.lummi.ai/assets/QmQmynEF6MyZAPpzjLZhvz19En5RvBqQH6hepjduEkC6oY?auto=format&w=1500',
    alt: 'Zuri Maxi Dress from the VELA collection',
    description: 'A maxi dress for dinners, celebrations and after-hours plans.'
  }
];

const formatPrice = (price) => `₦${price.toLocaleString('en-NG')}`;
const whatsappUrl = (message) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
const productMessage = (product, size = '') =>
  `Hi Vela, I'm interested in the ${product.name} (${formatPrice(product.price)})${size ? `, size ${size}` : ''}. Is it available, and how can I place an order?`;
const sizingMessage = (product, size = '') =>
  `Hi Vela, I'm interested in the ${product.name} (${formatPrice(product.price)})${size ? `, size ${size}` : ''}. Could you help me choose the right size?`;

document.querySelectorAll('a[href="https://wa.me/2348000000000"]').forEach((link) => {
  link.href = whatsappUrl("Hi Vela, I'd like to enquire about your collection.");
});

const catalogue = document.getElementById('catalogue');
const searchInput = document.getElementById('product-search');
const categoryFilter = document.getElementById('category-filter');
const sizeFilter = document.getElementById('size-filter');
const priceFilter = document.getElementById('price-filter');
const countOutput = document.getElementById('catalogue-count');
const emptyOutput = document.getElementById('catalogue-empty');
const resetButton = document.getElementById('catalogue-reset');

const renderCatalogue = () => {
  if (!catalogue) return;

  const search = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const size = sizeFilter.value;
  const priceRange = priceFilter.value;
  const visibleProducts = products.filter((product) => {
    const searchableText = `${product.name} ${product.category} ${product.categoryLabel} ${product.description}`.toLowerCase();
    const matchesSearch = searchableText.includes(search);
    const matchesCategory = category === 'all' || product.category === category;
    const matchesSize = size === 'all' || product.sizes.includes(size);
    const matchesPrice = priceRange === 'all'
      || (priceRange === 'under-60000' && product.price < 60000)
      || (priceRange === '60000-75000' && product.price >= 60000 && product.price <= 75000)
      || (priceRange === 'over-75000' && product.price > 75000);
    return matchesSearch && matchesCategory && matchesSize && matchesPrice;
  });

  catalogue.innerHTML = visibleProducts.map((product, index) => `
    <article class="product reveal is-visible">
      <a class="product-image" href="product.html?product=${product.slug}" aria-label="View ${product.name} details">
        <img src="${product.image}" alt="${product.alt}" loading="lazy" />
      </a>
      <div class="product-body">
        <div class="product-index">${String(index + 1).padStart(2, '0')} / ${product.categoryLabel}</div>
        <div class="product-meta-row">
          <h3><a href="product.html?product=${product.slug}">${product.name}</a></h3>
          <span class="price">${formatPrice(product.price)}</span>
        </div>
        <p class="sizes">Sizes: ${product.sizes.join(' · ')}</p>
        <p class="availability-note">Ask us to confirm availability</p>
        <div class="product-actions">
          <a class="product-link" href="product.html?product=${product.slug}">View details <span aria-hidden="true">→</span></a>
          <a class="quick-enquiry" href="${whatsappUrl(productMessage(product))}" target="_blank" rel="noreferrer">Quick enquiry ↗</a>
        </div>
      </div>
    </article>
  `).join('');

  countOutput.textContent = `${visibleProducts.length} ${visibleProducts.length === 1 ? 'piece' : 'pieces'}`;
  emptyOutput.hidden = visibleProducts.length > 0;
};

if (catalogue) {
  [searchInput, categoryFilter, sizeFilter, priceFilter].forEach((control) => {
    control.addEventListener(control === searchInput ? 'input' : 'change', renderCatalogue);
  });
  resetButton.addEventListener('click', () => {
    searchInput.value = '';
    categoryFilter.value = 'all';
    sizeFilter.value = 'all';
    priceFilter.value = 'all';
    renderCatalogue();
    searchInput.focus();
  });
  renderCatalogue();
}

const productDetail = document.querySelector('[data-product-detail]');
if (productDetail) {
  const slug = new URLSearchParams(window.location.search).get('product');
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    productDetail.innerHTML = '<div class="container product-not-found"><p class="section-kicker">PRODUCT NOT FOUND</p><h1>Back to browsing?</h1><a class="btn btn-primary" href="index.html#collection">Browse the collection <em>→</em></a></div>';
  } else {
    productDetail.innerHTML = `
      <div class="container product-detail-shell">
        <div class="product-detail-image"><img src="${product.image}" alt="${product.alt}" /></div>
        <div class="product-detail-copy">
          <p class="section-kicker">${product.categoryLabel} / VELA COLLECTION</p>
          <h1>${product.name}</h1>
          <p class="detail-price">${formatPrice(product.price)}</p>
          <p class="detail-description">${product.description}</p>
          <p class="detail-availability"><span aria-hidden="true">●</span> Ask us to confirm current availability</p>
          <fieldset class="size-options">
            <legend>Select a size <span>Available sizes vary by piece</span></legend>
            <div>${product.sizes.map((size) => `<label><input type="radio" name="product-size" value="${size}" /><span>${size}</span></label>`).join('')}</div>
          </fieldset>
          <a class="btn btn-primary product-whatsapp" href="${whatsappUrl(productMessage(product))}" target="_blank" rel="noreferrer"><span>Ask about this piece</span><em>↗</em></a>
          <a class="sizing-help" href="${whatsappUrl(sizingMessage(product))}" target="_blank" rel="noreferrer">Need help choosing a size? Ask us on WhatsApp ↗</a>
          <div class="product-service-info">
            <section><h2>Delivery</h2><p>Nationwide delivery is available. Share your location on WhatsApp for a delivery estimate before ordering.</p></section>
            <section><h2>Showroom</h2><p>Wuse 2, Abuja. Message us to confirm details before visiting.</p><a href="index.html#info">Hours &amp; visit information →</a></section>
            <section><h2>Sizing</h2><p>Sizes listed above are available to enquire about; please confirm current stock and fit with us.</p><a href="index.html#info">Sizing and delivery FAQs →</a></section>
          </div>
          <a class="back-to-catalogue" href="index.html#collection">← Back to the collection</a>
        </div>
      </div>
    `;

    const enquiryLink = productDetail.querySelector('.product-whatsapp');
    const sizingLink = productDetail.querySelector('.sizing-help');
    productDetail.querySelectorAll('input[name="product-size"]').forEach((input) => {
      input.addEventListener('change', () => {
        enquiryLink.href = whatsappUrl(productMessage(product, input.value));
        sizingLink.href = whatsappUrl(sizingMessage(product, input.value));
      });
    });
  }
}

const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const enquiryType = document.getElementById('enquiry-type').value;
    const message = document.getElementById('message').value.trim();
    const statusMessage = document.getElementById('form-status');

    if (!name || !enquiryType || !message) {
      statusMessage.textContent = 'Please add your name and enquiry details.';
      statusMessage.className = 'form-status error';
      return;
    }

    const draft = `Hi Vela, my name is ${name}. Enquiry type: ${enquiryType}. ${message}`;
    statusMessage.className = 'form-status success';
    statusMessage.innerHTML = `Your message is ready. Review it in WhatsApp before sending. <a href="${whatsappUrl(draft)}" target="_blank" rel="noreferrer">Open WhatsApp draft ↗</a>`;
  });
}

const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const faqButtons = document.querySelectorAll('.faq-question');
const header = document.querySelector('.site-header');
const progressBar = document.querySelector('.page-progress span');
const magneticButtons = document.querySelectorAll('[data-magnetic]');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
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
      faqButton.closest('.faq-item').classList.remove('active');
      faqButton.setAttribute('aria-expanded', 'false');
    });
    if (!isActive) {
      item.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
    }
  });
});

const updateHeaderState = () => {
  if (header) header.classList.toggle('scrolled', window.scrollY > 24);
};
const updateProgressBar = () => {
  if (!progressBar) return;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progressBar.style.width = `${Math.min(Math.max(progress, 0), 100)}%`;
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll('.reveal:not(.is-visible)').forEach((item) => revealObserver.observe(item));
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
      const offsetX = ((event.clientX - rect.left) / rect.width - 0.5) * 6;
      const offsetY = ((event.clientY - rect.top) / rect.height - 0.5) * 6;
      button.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
    button.addEventListener('pointerleave', () => { button.style.transform = ''; });
  });
}
