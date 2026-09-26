const defaultServices = [
  {
    id: 'silk-press',
    type: 'service',
    category: 'Hair',
    name: 'Silk Press',
    price: 35000,
    shortDescription: 'Smooth, polished finish with heat styling and professional finishing.',
    description: 'A smooth, polished finish designed to leave your hair soft, sleek and easy to style.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    duration: '1.5 - 2 hours',
    includes: ['Heat styling', 'Professional finishing', 'Style prep and smoothing'],
    prep: 'Please arrive with your hair freshly washed and completely dry.',
    faq: [
      { q: 'Will my hair be damaged by the press?', a: 'The finish is smooth and polished without overusing heat, and we guide you on the best care routine for a healthy result.'},
      { q: 'Can I wear it in a different style afterwards?', a: 'Yes. This look is easy to wear sleek, tucked away or styled into a softer look for the week.'}
    ]
  },
  {
    id: 'knotless-braids',
    type: 'service',
    category: 'Hair',
    name: 'Knotless Braids',
    price: 45000,
    shortDescription: 'Lightweight, neat and designed for comfortable everyday wear.',
    description: 'Lightweight protective styling that looks neat, feels comfortable and is built for easy wear throughout the week.',
    image: 'https://images.unsplash.com/photo-1521590832167-7e9d8a60f8b9?auto=format&fit=crop&w=1200&q=80',
    duration: '3 - 5 hours',
    includes: ['Braiding service', 'Neat finish', 'Styling consultation'],
    prep: 'Come with your hair clean and detangled, and bring reference images if you want a specific finish.',
    faq: [
      { q: 'How long do they last?', a: 'With proper maintenance, knotless braids usually last a few weeks while staying comfortable and neat.'},
      { q: 'Can I wash them?', a: 'Yes, you can maintain them with a light scalp cleanse and regular moisturising to keep them fresh.' }
    ]
  },
  {
    id: 'wig-installation',
    type: 'service',
    category: 'Hair',
    name: 'Wig Installation',
    price: 30000,
    shortDescription: 'Professional installation with a clean, natural finish.',
    description: 'A refined installation for a natural, polished look that feels secure and comfortable.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    duration: '1 - 2 hours',
    includes: ['Installation', 'Styling and blending', 'Secure finish'],
    prep: 'Please arrive with a clean scalp and bring your wig unit if you prefer a specific look or lace type.',
    faq: [
      { q: 'Is this suitable for a natural finish?', a: 'Yes. We focus on a clean front edge and natural blending that feels effortless from every angle.'},
      { q: 'Can I get a style change after installation?', a: 'Absolutely. We can refine the lace, front and overall styling to suit your preferred finish.'}
    ]
  },
  {
    id: 'wig-revamp',
    type: 'service',
    category: 'Hair',
    name: 'Wig Revamp',
    price: 20000,
    shortDescription: 'Refresh, restyle and restore your existing unit.',
    description: 'A refresh and restyle service that gives your extension or unit a cleaner, more polished feel.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    duration: '1 - 2 hours',
    includes: ['Restyle', 'Adjustment and clean finish', 'Blending and shaping'],
    prep: 'Bring your wig in clean and dry so we can assess the best way to restyle it.',
    faq: [
      { q: 'Can this restore an old wig?', a: 'Yes. We can often refresh the shape and texture to give it a more polished, natural look.'},
      { q: 'Do I need a consultation first?', a: 'Not always. A quick assessment works well, but for major changes we may suggest a bespoke conversation.'}
    ]
  },
  {
    id: 'natural-hair-styling',
    type: 'service',
    category: 'Hair',
    name: 'Natural Hair Styling',
    price: 18000,
    shortDescription: 'Simple to statement styling for natural hair.',
    description: 'Simple to statement styling that works with your texture, length and schedule.',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
    duration: '45 - 90 minutes',
    includes: ['Wash and style', 'Finish and set', 'Texture-aware styling'],
    prep: 'Please arrive with your hair clean and dry, or let us know if you want a wash-and-style service included.',
    faq: [
      { q: 'Can you do protective styling too?', a: 'Yes. We can create simple, comfortable styles that protect your hair while still looking polished.'},
      { q: 'Is this good for everyday wear?', a: 'Absolutely. We aim for styles that feel polished enough for work, events or simply an easy good look.'}
    ]
  },
  {
    id: 'soft-glam',
    type: 'service',
    category: 'Makeup',
    name: 'Soft Glam',
    price: 35000,
    shortDescription: 'Clean, luminous makeup for birthdays, dinners, shoots and events.',
    description: 'Clean, luminous makeup for birthdays, dinners, shoots and events.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    duration: '1.5 hours',
    includes: ['Base and complexion', 'Eyes and lashes', 'Soft finishing touch'],
    prep: 'Arrive with a clean, moisturised face and any reference images for the finish you want.',
    faq: [
      { q: 'Is this suitable for a night out?', a: 'Yes. The finish sits between natural and polished so it works beautifully for a modern event look.'},
      { q: 'Can I add lashes?', a: 'Definitely. We can include them depending on the finish and occasion.' }
    ]
  },
  {
    id: 'full-glam',
    type: 'service',
    category: 'Makeup',
    name: 'Full Glam',
    price: 45000,
    shortDescription: 'A more defined beauty look with enhanced eyes, complexion and finish.',
    description: 'A more defined beauty look with enhanced eyes, complexion and finish.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    duration: '2 hours',
    includes: ['Full face glam', 'Defined eye finish', 'Long-wear detail'],
    prep: 'Please come with a fresh face and bring inspiration photos if you have a specific look in mind.',
    faq: [
      { q: 'Will it still feel wearable?', a: 'Yes. It is defined and elevated, but still considered enough for special occasions and events.'},
      { q: 'Can it be done for a wedding guest?', a: 'Absolutely. It is a great choice for an event where you want your makeup to photograph beautifully.'}
    ]
  },
  {
    id: 'bridal-makeup',
    type: 'service',
    category: 'Makeup',
    name: 'Bridal Makeup',
    price: 100000,
    shortDescription: 'Long-wear bridal makeup designed around your wedding-day look.',
    description: 'Long-wear bridal makeup designed around your wedding-day look.',
    image: 'https://images.unsplash.com/photo-1521590832167-7e9d8a60f8b9?auto=format&fit=crop&w=1200&q=80',
    duration: '2.5 - 3.5 hours',
    includes: ['Trial consultation', 'Bridal look design', 'Long-wear finishing'],
    prep: 'We recommend a trial and a clear moodboard to plan your wedding-day finish and skin prep.',
    faq: [
      { q: 'Do you do bridal trials?', a: 'Yes. A trial is ideal for refining the final look and confirming details before your wedding day.'},
      { q: 'Can I add false lashes?', a: 'Yes. We can design around lashes, the finish and how long you want the look to last.'}
    ]
  },
  {
    id: 'birthday-event-glam',
    type: 'service',
    category: 'Makeup',
    name: 'Birthday / Event Glam',
    price: 40000,
    shortDescription: 'Polished event makeup for celebrations and special occasions.',
    description: 'Polished event makeup for celebrations and special occasions.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
    duration: '1.5 - 2 hours',
    includes: ['Event-focused glam', 'Complexion and finishing', 'High-definition details'],
    prep: 'Tell us the event vibe, dress colour and lighting so we can tailor the finish to the occasion.',
    faq: [
      { q: 'Is this good for birthdays?', a: 'Yes. It is ideal for birthdays, dinner dates, shoots and celebrations where a polished finish matters.'},
      { q: 'Can I book with hair styling too?', a: 'Yes. We also offer combined packages for a more seamless beauty experience.' }
    ]
  },
  {
    id: 'hair-soft-glam',
    type: 'package',
    category: 'Packages',
    name: 'Hair + Soft Glam',
    price: 65000,
    shortDescription: 'Hair styling combined with Lumi\'s signature soft glam makeup.',
    description: 'Hair styling combined with Lumi\'s signature soft glam makeup for a complete polished look.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    duration: '2.5 - 3 hours',
    includes: ['Hair styling', 'Soft glam makeup', 'Coordinated finish'],
    prep: 'Let us know the event, your outfit and the look you want so we can plan the final finish together.',
    faq: [
      { q: 'Can I choose the hair and makeup style?', a: 'Yes. We can help you pick a polished look that complements your outfit and event.'},
      { q: 'Is this good for weddings or dinners?', a: 'Yes. It is a versatile package for events where you want a balanced finished look.' }
    ]
  },
  {
    id: 'bridal-hair-makeup',
    type: 'package',
    category: 'Packages',
    name: 'Bridal Hair + Makeup',
    price: 150000,
    shortDescription: 'A coordinated beauty experience for your wedding day.',
    description: 'A coordinated beauty experience for your wedding day.',
    image: 'https://images.unsplash.com/photo-1521590832167-7e9d8a60f8b9?auto=format&fit=crop&w=1200&q=80',
    duration: '3 - 5 hours',
    includes: ['Bridal hair styling', 'Bridal makeup', 'Wedding-day planning support'],
    prep: 'We recommend a bridal consultation and a detailed discussion about your look, attire and timeline.',
    faq: [
      { q: 'Do you offer a bridal trial?', a: 'Yes. We can plan a trial to refine your wedding-day finishing details and ensure you feel confident.'},
      { q: 'Can this be tailored for a bridal party?', a: 'We can also recommend combinations for bridal parties and family styling where needed.' }
    ]
  },
  {
    id: 'girls-day-package',
    type: 'package',
    category: 'Packages',
    name: 'Girls\' Day Package',
    price: 120000,
    shortDescription: 'A group beauty package designed for celebrations and shared appointments.',
    description: 'A group beauty package designed for celebrations and shared appointments.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    duration: 'Flexible time slot',
    includes: ['Shared appointment', 'Beauty styling for a group', 'Personalised finish planning'],
    prep: 'Let us know the number of guests and the desired looks so we can plan a smooth shared experience.',
    faq: [
      { q: 'Is this suitable for birthdays?', a: 'Yes. It works beautifully for birthdays, pre-event pamper afternoons and shared celebrations.'},
      { q: 'Can each person get a personalised finish?', a: 'Yes. We plan the styling around each guest while keeping the booking comfortable and organised.' }
    ]
  }
];

const defaultProducts = [
  {
    id: 'lumi-hydrating-hair-mist',
    category: 'Hair',
    name: 'Lumi Hydrating Hair Mist',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'A light, hydrating mist for fresh, soft, manageable hair.',
    description: 'A lightweight mist designed to refresh your hair between washes while helping it feel soft and more manageable.',
    size: '100ml',
    details: ['Lightweight hydration', 'Easy everyday use', 'Fresh, soft finish'],
    availability: 'In stock',
    type: 'product'
  },
  {
    id: 'glow-body-oil',
    category: 'Body',
    name: 'Glow Body Oil',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'A silky body oil that brings an easy glow without feeling heavy.',
    description: 'A silky body oil that gives skin a soft sheen and a comfortable finish without being overly rich.',
    size: '120ml',
    details: ['Soft satin finish', 'Body-focused glow', 'Comfortable wear'],
    availability: 'In stock',
    type: 'product'
  },
  {
    id: 'edge-control',
    category: 'Hair',
    name: 'Edge Control',
    price: 7500,
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'A smooth hold for sculpted, polished edges.',
    description: 'Keeps edges neat, smooth and polished while helping the final style stay in place.',
    size: '60ml',
    details: ['Smooth hold', 'Easy styling', 'Neat edge finish'],
    availability: 'Limited stock',
    type: 'product'
  },
  {
    id: 'silk-press-heat-protectant',
    category: 'Hair',
    name: 'Silk Press Heat Protectant',
    price: 10000,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'A heat protectant built for smoother, softer styling.',
    description: 'Helps protect your hair while styling so you can get a sleek finish with less stress on the strands.',
    size: '100ml',
    details: ['Heat protection', 'Smooth finish', 'Daily styling support'],
    availability: 'In stock',
    type: 'product'
  },
  {
    id: 'luxe-hair-bonnet',
    category: 'Hair',
    name: 'Luxe Hair Bonnet',
    price: 8000,
    image: 'https://images.unsplash.com/photo-1521590832167-7e9d8a60f8b9?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Silky, comfortable protection for overnight styling.',
    description: 'A satin-lined bonnet that protects your style and helps reduce friction overnight.',
    size: 'One size',
    details: ['Overnight care', 'Smooth satin lining', 'Protective fit'],
    availability: 'In stock',
    type: 'product'
  },
  {
    id: 'beauty-blender-set',
    category: 'Makeup',
    name: 'Beauty Blender Set',
    price: 6500,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'A soft blend set for a natural finish.',
    description: 'A soft, easy-to-use set for everyday blending and buildable coverage.',
    size: '3-piece set',
    details: ['Soft application', 'Natural finish', 'Travel-friendly'],
    availability: 'Low stock',
    type: 'product'
  },
  {
    id: 'setting-spray',
    category: 'Makeup',
    name: 'Setting Spray',
    price: 14000,
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'A long-wear mist to lock in your finish.',
    description: 'Helps keep makeup in place for longer and supports a clean, fresh finish throughout the day.',
    size: '100ml',
    details: ['Long-wear finish', 'Easy application', 'Fresh look'],
    availability: 'In stock',
    type: 'product'
  },
  {
    id: 'lip-cheek-tint',
    category: 'Makeup',
    name: 'Lip & Cheek Tint',
    price: 9500,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'A soft, natural tint for fresh everyday colour.',
    description: 'A buildable, easy-to-wear tint that gives cheeks and lips a fresh, healthy colour.',
    size: '30ml',
    details: ['Fresh colour', 'Buildable finish', 'Easy to use'],
    availability: 'In stock',
    type: 'product'
  }
];

const lumiStorage = {
  read(key, fallback) {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return Array.isArray(value) ? value : fallback;
    } catch (error) {
      return fallback;
    }
  },
  write(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

window.LumiStore = {
  getServices() {
    const storedServices = lumiStorage.read('lumi-services', defaultServices);
    return storedServices.length ? storedServices : defaultServices;
  },
  getProducts() {
    const storedProducts = lumiStorage.read('lumi-products', defaultProducts);
    return storedProducts.length ? storedProducts : defaultProducts;
  },
  saveServices(value) {
    lumiStorage.write('lumi-services', value);
  },
  saveProducts(value) {
    lumiStorage.write('lumi-products', value);
  },
  getEnquiries() {
    return lumiStorage.read('lumi-enquiries', []);
  },
  saveEnquiries(value) {
    lumiStorage.write('lumi-enquiries', value);
  },
  reset() {
    lumiStorage.write('lumi-services', defaultServices);
    lumiStorage.write('lumi-products', defaultProducts);
  }
};

let services = window.LumiStore.getServices();
let products = window.LumiStore.getProducts();

function money(value) {
  return `₦${Number(value).toLocaleString()}`;
}

function whatsappLink(message) {
  return `https://wa.me/2348000000000?text=${encodeURIComponent(message)}`;
}

function getServiceById(id) {
  return services.find((item) => item.id === id);
}

function getProductById(id) {
  return products.find((item) => item.id === id);
}

function renderHome() {
  const featureContainers = document.querySelectorAll('[data-feature-services], [data-feature-services-secondary]');
  featureContainers.forEach((featureContainer) => {
    const items = services.slice(0, 4);
    featureContainer.innerHTML = items.map((service) => `
      <article class="feature-card">
        <div class="card-image">
          <img src="${service.image}" alt="${service.name} at Lumi Beauty Studio" loading="lazy">
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span>${service.category}</span>
            <span>${service.name === 'Silk Press' ? 'Popular' : 'Featured'}</span>
          </div>
          <h3>${service.name}</h3>
          <p>${service.shortDescription}</p>
          <div class="price-row">
            <span class="price-tag">${money(service.price)}</span>
            <a class="card-link" href="catalogue-item.html?type=${service.type}&id=${service.id}">View service</a>
          </div>
        </div>
      </article>
    `).join('');
  });

  const productContainer = document.querySelector('[data-feature-products]');
  if (productContainer) {
    const items = products.slice(0, 4);
    productContainer.innerHTML = items.map((product) => `
      <article class="product-card">
        <div class="card-image">
          <img src="${product.image}" alt="${product.name} by Lumi" loading="lazy">
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span>${product.category}</span>
            <span>Essentials</span>
          </div>
          <h3>${product.name}</h3>
          <p>${product.shortDescription}</p>
          <div class="price-row">
            <span class="price-tag">${money(product.price)}</span>
            <a class="card-link" href="catalogue-item.html?type=product&id=${product.id}">View item</a>
          </div>
        </div>
      </article>
    `).join('');
  }
}

function renderCatalogueCards() {
  const serviceCards = document.querySelector('[data-service-cards]');
  if (serviceCards) {
    const cards = [...services];
    serviceCards.innerHTML = cards.map((item) => `
      <article class="service-card" data-category="${item.category.toLowerCase()}">
        <div class="card-image">
          <img src="${item.image}" alt="${item.name} service at Lumi" loading="lazy">
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span>${item.category}</span>
            <span>${item.type === 'package' ? 'Package' : 'Service'}</span>
          </div>
          <h3>${item.name}</h3>
          <p>${item.shortDescription}</p>
          <div class="price-row">
            <span class="price-tag">${money(item.price)}</span>
            <a class="card-link" href="catalogue-item.html?type=${item.type}&id=${item.id}">View service</a>
          </div>
        </div>
      </article>
    `).join('');
  }

  const productCards = document.querySelector('[data-product-cards]');
  if (productCards) {
    productCards.innerHTML = products.map((item) => `
      <article class="product-card" data-category="${item.category.toLowerCase()}">
        <div class="card-image">
          <img src="${item.image}" alt="${item.name} product by Lumi" loading="lazy">
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span>${item.category}</span>
            <span>Beauty</span>
          </div>
          <h3>${item.name}</h3>
          <p>${item.shortDescription}</p>
          <div class="price-row">
            <span class="price-tag">${money(item.price)}</span>
            <a class="card-link" href="catalogue-item.html?type=product&id=${item.id}">View item</a>
          </div>
          <div class="availability"><span class="status-dot"></span>${item.availability}</div>
        </div>
      </article>
    `).join('');
  }
}

function setupCatalogueFilters() {
  document.querySelectorAll('[data-filter-group]').forEach((group) => {
    const buttons = group.querySelectorAll('[data-filter]');
    const cardSelector = group.dataset.target;
    const cards = Array.from(document.querySelectorAll(cardSelector));

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        buttons.forEach((btn) => btn.classList.toggle('is-active', btn === button));

        cards.forEach((card) => {
          const category = card.dataset.category;
          const matches = filter === 'all' || category === filter;
          card.classList.toggle('filter-card-out', !matches);
          if (matches) {
            card.classList.remove('hidden');
          } else {
            window.setTimeout(() => {
              if (card.classList.contains('filter-card-out')) card.classList.add('hidden');
            }, 180);
          }
        });
      });
    });
  });
}

function renderDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');
  const id = params.get('id');
  const detailContainer = document.querySelector('[data-detail-page]');
  if (!detailContainer) return;

  const item = type === 'product' ? getProductById(id) : getServiceById(id);
  if (!item) {
    detailContainer.innerHTML = '<p>We could not find this item.</p>';
    return;
  }

  const related = (type === 'product' ? products : services)
    .filter((entry) => entry.id !== item.id)
    .slice(0, 3);

  const list = Array.isArray(item.includes) ? item.includes : item.details || [];
  const locationText = type === 'product'
    ? `"Hi Lumi, I'd like to enquire about the ${item.name}. Is it currently available?"`
    : `"Hi Lumi, I'd like to book a ${item.name}. Please let me know the available dates and times."`;

  const faqMarkup = (item.faq || []).map((entry) => `
    <details class="faq-item">
      <summary>${entry.q}</summary>
      <p>${entry.a}</p>
    </details>
  `).join('');

  detailContainer.innerHTML = `
    <div class="detail-grid">
      <div class="detail-image">
        <img src="${item.image}" alt="${item.name} at Lumi Beauty Studio" loading="eager">
      </div>
      <aside class="detail-info">
        <div class="eyebrow">${type === 'product' ? 'Beauty essentials' : item.category}</div>
        <h1 class="detail-name heading-serif">${item.name.toUpperCase()}</h1>
        <div class="detail-price">${money(item.price)}</div>
        <p class="detail-description">${item.description}</p>
        <ul class="meta-list">
          <li><span>Category</span><strong>${type === 'product' ? item.category : item.category}</strong></li>
          <li><span>${type === 'product' ? 'Size' : 'Duration'}</span><strong>${type === 'product' ? item.size : item.duration}</strong></li>
          <li><span>${type === 'product' ? 'Availability' : 'Includes'}</span><strong>${type === 'product' ? item.availability : list[0] || 'Tailored finish'}</strong></li>
        </ul>
        <div class="detail-actions">
          <a class="wa-button" href="${whatsappLink(locationText)}" target="_blank" rel="noreferrer">${type === 'product' ? 'Enquire about this product' : 'Book this service'}</a>
          <a class="btn-secondary" href="${type === 'product' ? 'products.html' : 'services.html'}">Browse more</a>
        </div>
      </aside>
    </div>

    ${type === 'product' ? `<div class="catalogue-notice detail-notice" role="note"><strong>Enquiry catalogue only</strong><span>No checkout or payment is processed here. Use WhatsApp to confirm availability, collection or delivery options before ordering.</span></div>` : ''}

    <div class="content-panel">
      <div class="content-box">
        <h3>${type === 'product' ? 'What you should know' : 'What\'s included'}</h3>
        <ul class="meta-list">
          ${(list || []).map((entry) => `<li><span>${type === 'product' ? 'Detail' : 'Included'}</span><strong>${entry}</strong></li>`).join('')}
        </ul>
      </div>
      <div class="content-box">
        <h3>${type === 'product' ? 'Before you enquire' : 'Prep notes'}</h3>
        <p>${type === 'product' ? 'This is a curated beauty item selected for a clean, everyday Lumi feel.' : item.prep}</p>
      </div>
    </div>

    <div class="related-section">
      <div class="section-head">
        <div>
          <div class="eyebrow">You may also like</div>
          <h2>More from Lumi</h2>
        </div>
      </div>
      <div class="feature-grid">
        ${related.map((entry) => `
          <article class="feature-card">
            <div class="card-image">
              <img src="${entry.image}" alt="${entry.name}" loading="lazy">
            </div>
            <div class="card-body">
              <div class="card-meta">
                <span>${entry.category}</span>
                <span>${entry.type || 'Item'}</span>
              </div>
              <h3>${entry.name}</h3>
              <p>${entry.shortDescription || entry.description}</p>
              <div class="price-row">
                <span class="price-tag">${money(entry.price)}</span>
                <a class="card-link" href="catalogue-item.html?type=${entry.type || 'service'}&id=${entry.id}">View item</a>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    </div>

    <div class="content-panel">
      <div class="content-box">
        <h3>FAQ</h3>
        <div class="faq-list">
          ${faqMarkup}
        </div>
      </div>
      <div class="content-box">
        <h3>Ready to book?</h3>
        <p>Use WhatsApp to send a quick enquiry and we’ll help you decide what fits your look, timing and occasion.</p>
        <a class="wa-button" href="${whatsappLink(locationText)}" target="_blank" rel="noreferrer">Send a WhatsApp enquiry</a>
      </div>
    </div>
  `;
}

function setupContactForm() {
  const form = document.querySelector('#booking-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name') || 'There';
    const whatsapp = formData.get('whatsapp') || 'Not provided';
    const service = formData.get('service') || 'general enquiry';
    const date = formData.get('date') || 'flexible';
    const notes = formData.get('message') || 'Please let me know the available dates and times.';

    const enquiries = window.LumiStore.getEnquiries();
    enquiries.unshift({
      id: `enquiry-${Date.now()}`,
      name,
      whatsapp,
      service,
      date,
      message: notes,
      status: 'New',
      createdAt: new Date().toISOString()
    });
    window.LumiStore.saveEnquiries(enquiries);

    const message = `Hi Lumi, my name is ${name}. I’d like to enquire about ${service}. My preferred date is ${date}. WhatsApp number: ${whatsapp}. Message: ${notes}`;
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
    form.reset();
  });
}

function updateCurrentYear() {
  const yearNode = document.querySelector('[data-current-year]');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }
}

function setupAdminAccess() {
  const headerActions = document.querySelector('.header-actions');
  if (headerActions && !headerActions.querySelector('[data-admin-access]')) {
    const link = document.createElement('a');
    link.href = 'admin.html';
    link.className = 'admin-access-link';
    link.dataset.adminAccess = 'true';
    link.textContent = 'Studio login';
    headerActions.appendChild(link);
  }

  const footerBottom = document.querySelector('.footer-bottom');
  if (footerBottom && !footerBottom.querySelector('[data-admin-access]')) {
    const link = document.createElement('a');
    link.href = 'admin.html';
    link.className = 'admin-access-link';
    link.dataset.adminAccess = 'true';
    link.textContent = 'Studio login';
    footerBottom.appendChild(link);
  }
}

function setupStickyNav() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 18);
  });

  const toggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if (toggle && mobileNav) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.textContent = isOpen ? '×' : '☰';
    });
  }
}

function setupMotion() {
  const motionTargets = document.querySelectorAll(
    'main > section, .page-hero-inner, .feature-card, .package-card, .story-card, .content-box, .contact-card, .info-card, .detail-image, .detail-info, .aside-image, .footer-shell'
  );

  motionTargets.forEach((target, index) => {
    target.classList.add('motion-item');
    if (index % 4) target.dataset.motionDelay = String(index % 4);
  });

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    motionTargets.forEach((target) => target.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, revealObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -42px' });

  motionTargets.forEach((target) => observer.observe(target));
}

function setupHeroCarousel() {
  const carousel = document.querySelector('[data-hero-carousel]');
  if (!carousel || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const image = carousel.querySelector('.hero-image img');
  const look = carousel.querySelector('[data-hero-look]');
  if (!image || !look) return;

  const states = [
    { name: 'Soft Glam', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80', alt: 'Woman with polished soft glam beauty finish in Lagos studio' },
    { name: 'Bridal', image: 'https://images.unsplash.com/photo-1521590832167-7e9d8a60f8b9?auto=format&fit=crop&w=1200&q=80', alt: 'Bridal beauty look with styled hair and luminous makeup' },
    { name: 'French Girl', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80', alt: 'Natural polished makeup look at Lumi Beauty Studio' },
    { name: 'Y2K', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80', alt: 'Glossy contemporary beauty look with styled hair' },
    { name: 'Coquette', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80', alt: 'Soft feminine beauty look with natural texture' },
    { name: 'Editorial', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80', alt: 'Editorial beauty portrait with a considered finish' }
  ];
  let index = 0;
  let timer;
  let paused = false;

  const transition = () => {
    if (paused) return;
    index = (index + 1) % states.length;
    const next = states[index];
    carousel.classList.add('is-transitioning');
    look.parentElement.classList.add('is-transitioning');

    window.setTimeout(() => {
      image.src = next.image;
      image.alt = next.alt;
      look.textContent = next.name;
      carousel.classList.remove('is-transitioning');
      look.parentElement.classList.remove('is-transitioning');
    }, 320);
  };

  const start = () => {
    window.clearInterval(timer);
    timer = window.setInterval(transition, 5000);
  };

  carousel.addEventListener('mouseenter', () => { paused = true; });
  carousel.addEventListener('mouseleave', () => { paused = false; start(); });
  carousel.addEventListener('focusin', () => { paused = true; });
  carousel.addEventListener('focusout', () => { paused = false; start(); });
  start();
}

function setupScrollRail() {
  const rail = document.querySelector('[data-scroll-rail]');
  if (!rail) return;

  const thumb = rail.querySelector('.scroll-rail-thumb');
  const label = rail.querySelector('[data-scroll-label]');
  const sections = [...document.querySelectorAll('[data-progress-section]')];
  if (!thumb || !label || !sections.length) return;

  let ticking = false;
  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
    const travel = rail.clientHeight - thumb.offsetHeight;
    thumb.style.top = `${Math.max(0, Math.min(1, progress)) * travel}px`;

    const marker = window.scrollY + window.innerHeight * 0.34;
    let current = sections[0];
    sections.forEach((section) => {
      if (section.offsetTop <= marker) current = section;
    });
    const nextLabel = current.dataset.progressSection;
    if (label.textContent !== nextLabel) {
      label.style.opacity = '0';
      window.setTimeout(() => {
        label.textContent = nextLabel;
        label.style.opacity = '0.78';
      }, 140);
    }
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
  window.addEventListener('resize', update);
  update();
}

document.addEventListener('DOMContentLoaded', () => {
  renderHome();
  renderCatalogueCards();
  setupCatalogueFilters();
  renderDetailPage();
  setupContactForm();
  setupAdminAccess();
  setupStickyNav();
  setupHeroCarousel();
  setupScrollRail();
  updateCurrentYear();
  setupMotion();
});
