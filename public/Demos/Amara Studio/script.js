const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  });
}

menuToggle?.addEventListener('click', () => {
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

const products = {
  ayo: {
    name: 'The Ayo Dress',
    price: '₦68,000',
    category: 'Dresses / The current edit',
    description: 'A structured midi dress with a relaxed silhouette. An easy, considered shape for days that turn into evenings.',
    fit: 'Relaxed midi',
    colour: 'Oyster',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=85',
    alt: 'The Ayo Dress in cream',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  sade: {
    name: 'The Sade Set',
    price: '₦74,000',
    category: 'Separates / The current edit',
    description: 'A two-piece tailored set with an easy feel, made for getting dressed without overthinking it.',
    fit: 'Two-piece set',
    colour: 'Soft beige',
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1200&q=85',
    alt: 'The Sade Set in soft beige',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  nia: {
    name: 'The Nia Top',
    price: '₦38,000',
    category: 'Separates / The current edit',
    description: 'A minimal sleeveless top, made distinct by its asymmetric neckline.',
    fit: 'Sleeveless, asymmetric neckline',
    colour: 'Warm white',
    image: 'https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&w=1200&q=85',
    alt: 'The Nia Top in warm white',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  zuri: {
    name: 'The Zuri Skirt',
    price: '₦52,000',
    category: 'Separates / The current edit',
    description: 'A flowing midi skirt with a clean waistline, designed to move easily through the day.',
    fit: 'Flowing midi',
    colour: 'Chocolate brown',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85',
    alt: 'The Zuri Skirt in chocolate brown',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  teni: {
    name: 'The Teni Shirt',
    price: '₦46,000',
    category: 'Separates / The current edit',
    description: 'A relaxed cotton shirt finished with understated detailing. Made for repeat wear and easy layering.',
    fit: 'Relaxed shirt',
    colour: 'White',
    image: 'https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=1200&q=85',
    alt: 'The Teni Shirt in white cotton',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  }
};

const productView = document.querySelector('[data-product-view]');

if (productView) {
  const product = products[new URLSearchParams(window.location.search).get('product')];
  if (!product) {
    window.location.replace('index.html#collection');
  } else {
    const setText = (selector, value) => {
      productView.querySelector(selector).textContent = value;
    };
    const productImage = productView.querySelector('[data-product-image]');
    const sizeOptions = productView.querySelector('[data-size-options]');
    const whatsappLink = productView.querySelector('[data-whatsapp-link]');
    let selectedSize = '';

    document.title = `${product.name} | Amara Studio`;
    setText('[data-product-breadcrumb]', product.name);
    setText('[data-product-name]', product.name);
    setText('[data-product-price]', product.price);
    setText('[data-product-category]', product.category);
    setText('[data-product-description]', product.description);
    setText('[data-product-fit]', product.fit);
    setText('[data-product-colour]', product.colour);
    productImage.src = product.image;
    productImage.alt = product.alt;

    const updateWhatsAppLink = () => {
      const sizeMessage = selectedSize ? `, size ${selectedSize}. Is it currently available?` : '. Could you let me know which sizes are currently available?';
      const message = `Hi Amara Studio, I'm interested in ${product.name}, ${product.price}${sizeMessage}`;
      whatsappLink.href = `https://wa.me/2348000000000?text=${encodeURIComponent(message)}`;
    };

    product.sizes.forEach((size) => {
      const button = document.createElement('button');
      button.className = 'size-option';
      button.type = 'button';
      button.textContent = size;
      button.setAttribute('aria-pressed', 'false');
      button.addEventListener('click', () => {
        selectedSize = size;
        sizeOptions.querySelectorAll('.size-option').forEach((option) => {
          option.setAttribute('aria-pressed', String(option === button));
        });
        updateWhatsAppLink();
      });
      sizeOptions.append(button);
    });

    updateWhatsAppLink();
  }
}
