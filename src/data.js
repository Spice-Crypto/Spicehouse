export const site = {
  brand: 'SpiceHouse',
  tagline: 'Websites with a little more spice.',
  eyebrow: 'Independent creative web studio',
  email: '[EMAIL PLACEHOLDER]',
  whatsapp: '[WHATSAPP PLACEHOLDER]',
  instagram: '@spicehouseco',
  location: 'Nigeria • Remote worldwide',
  description: 'SpiceHouse is an independent web studio in Nigeria. We design and build considered, useful websites for businesses ready to move beyond Instagram, WhatsApp and scattered DMs.',
  social: {
    instagram: '@spicehouseco',
    whatsapp: '[WHATSAPP PLACEHOLDER]',
    email: '[EMAIL PLACEHOLDER]'
  }
};

export const projects = [
  {
    slug: 'amara-studio',
    name: 'Amara Studio',
    industry: 'Fashion',
    category: 'Brand-led editorial commerce',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85',
    alt: 'Woman wearing a minimalist cream dress for the Amara Studio concept',
    summary: 'A fictional fashion brand concept pairing editorial collection storytelling with a direct enquiry path.',
    roles: ['Art direction', 'Website design', 'Collection browsing', 'WhatsApp enquiries'],
    outcome: 'This direction gives a considered collection room to lead while keeping product questions close at hand.'
  },
  {
    slug: 'lumi-beauty-studio',
    name: 'Lumi Beauty Studio',
    industry: 'Beauty',
    category: 'Beauty services + booking',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    alt: 'Beauty studio portrait for the Lumi Beauty Studio concept',
    summary: 'A fictional service-business concept for presenting beauty treatments and guiding customers into booking enquiries.',
    roles: ['Service structure', 'Responsive design', 'Service catalogue', 'Booking enquiries'],
    outcome: 'The concept keeps services easy to compare and makes the next step clear without assuming a complex booking system.'
  },
  {
    slug: 'vela',
    name: 'Vela',
    industry: 'Retail',
    category: 'Retail catalogue + enquiries',
    image: 'https://assets.lummi.ai/assets/QmPb1Enf1Gkk3uMVgtXuL5mT9T6BigHhnG3tTub4ZqraJG?auto=format&w=1500',
    alt: 'Warm editorial fashion portrait for the Vela concept',
    summary: 'A fictional retail concept built around a browsable product catalogue and direct customer enquiries.',
    roles: ['Catalogue structure', 'Product storytelling', 'Responsive design', 'Customer enquiries'],
    outcome: 'This direction helps customers explore products first, then contact the business with questions or purchase intent.'
  }
];

export const demos = [
  {
    name: 'Amara Studio',
    category: 'Brand-led editorial commerce',
    capability: 'Collection storytelling + WhatsApp enquiries',
    description: 'A brand-led fashion storefront that pairs editorial storytelling with a clear path from discovering a collection to asking about a piece.',
    href: 'Demos/Amara%20Studio/index.html',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Woman wearing a minimalist cream dress for Amara Studio',
    imageClass: 'demo-card__image--amara'
  },
  {
    name: 'Lumi Beauty Studio',
    category: 'Beauty services + booking',
    capability: 'Service catalogue + booking enquiries',
    description: 'A service-business website that makes treatments easy to compare and gives customers a straightforward way to enquire about a booking.',
    href: 'Demos/Lumi/index.html',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Polished beauty finish for Lumi Beauty Studio',
    imageClass: 'demo-card__image--lumi'
  },
  {
    name: 'Vela',
    category: 'Retail catalogue + enquiries',
    capability: 'Product browsing + direct enquiries',
    description: 'A retail catalogue that helps customers browse a considered product range and take the next step with a direct enquiry.',
    href: 'Demos/Vela/index.html',
    image: 'https://assets.lummi.ai/assets/QmPb1Enf1Gkk3uMVgtXuL5mT9T6BigHhnG3tTub4ZqraJG?auto=format&w=1500',
    imageAlt: 'Warm editorial fashion portrait for Vela',
    imageClass: 'demo-card__image--vela'
  }
];

export const packages = [
  {
    name: 'FOUNDATION',
    serviceSlug: 'foundation',
    price: 'From ₦125,000',
    intro: 'Give your audience somewhere to go.',
    detail: 'A focused, one-page website for businesses ready to move beyond Instagram, Linktree and DMs.',
    includes: [
      '1 page website (with up to 5 sections)',
      'Mobile-first responsive design',
      'Brand-aligned visual design',
      'WhatsApp integration',
      'Contact/enquiry form',
      'Basic on-page SEO',
    ],
    note: 'Domain + hosting billed separately',
    cta: 'Get a Quote'
  },
  {
    name: 'ICON',
    serviceSlug: 'icon',
    price: 'From ₦225,000',
    intro: 'Build a presence worth noticing.',
    detail: 'A multi-page catalogue website for businesses with up to 20 products or services and a clearer path to enquiries.',
    includes: [
      'Everything in FOUNDATION',
      'Up to 5 custom designed pages',
      'Product/service catalogue',
      'Up to 20 catalogue items with individual product/service pages',
      'Category organisation',
      'Enhanced SEO setup',
      'Analytics & conversion tracking',
    ],
    note: 'Domain + hosting billed separately',
    cta: 'Get a Quote',
    featured: true
  }
];

const serviceRecords = {
  foundation: {
    name: 'FOUNDATION',
    eyebrow: 'Website package',
    title: 'Give your brand somewhere worth visiting.',
    price: 'From ₦125,000',
    introTitle: 'For businesses ready to move beyond Instagram.',
    audienceHeading: 'A proper home for businesses <span class="text-accent">ready to be found.</span>',
    introduction: "Your business may already have an audience. The problem is that customers shouldn't have to dig through Instagram posts, DMs and scattered links to understand what you offer or figure out how to contact you.",
    summary: 'Foundation gives your business a proper digital home - a place where customers can learn about you, explore what you offer and take the next step without the friction.',
    audience: [
      'Instagram-first brands',
      'Small retailers',
      'Beauty and lifestyle businesses',
      'Restaurants and food businesses',
      'Freelancers and creatives',
      'Service providers',
      'Local businesses'
    ],
    includes: [
      {
        title: 'Custom-built website',
        description: 'A website designed specifically around your business, brand, audience and goals rather than a generic template.'
      },
      {
        title: 'One page, up to 5 sections',
        description: 'A focused page bringing together the essential business, offer, contact and enquiry information.'
      },
      {
        title: 'Works beautifully on phones',
        description: 'The website is designed to work properly across phones, tablets and desktop computers. This is especially important for businesses whose customers primarily discover them through Instagram.'
      },
      {
        title: 'WhatsApp ordering & enquiries',
        description: 'Customers can move directly from the website into WhatsApp to ask questions, place orders or continue an enquiry.'
      },
      {
        title: 'Contact forms',
        description: 'Simple forms allow customers to send enquiries directly through the website rather than relying entirely on social media DMs.'
      },
      {
        title: 'Location & directions',
        description: 'For businesses with a physical location, the website can provide location information and directions so customers can find the business more easily.'
      }
    ],
    seo: {
      title: 'Google-friendly setup',
      description: 'SEO stands for Search Engine Optimisation. It means making your website easier for search engines such as Google to understand and display when people search for relevant things.',
      items: [
        'Page titles',
        'Search-friendly descriptions',
        'Proper heading structure',
        'Image descriptions',
        'Clean page addresses',
        'Search engine indexing setup',
        'Sitemap setup'
      ],
      note: 'SEO does not guarantee that a website will appear first on Google. It provides the foundation that helps search engines understand the site.'
    },
    analytics: {
      title: 'Visitor insights',
      description: 'Analytics can show useful information about how people use the website, such as:',
      items: [
        'How many people visit',
        'Which pages they view',
        'Where visitors come from',
        'Which links they click',
        'How often they click to WhatsApp',
        'Where enquiries are coming from'
      ]
    },
    launch: {
      title: 'Launch & deployment',
      description: 'SpiceHouse handles putting the finished website online and completing the technical setup required for launch.'
    },
    revisions: {
      title: 'Two rounds of revisions are included.',
      description: 'A revision round means a consolidated set of changes provided after reviewing the current version of the site.',
      note: 'Major changes that introduce new pages, functionality or substantially change the agreed scope may require additional work.'
    },
    infrastructure: {
      title: 'Domain & hosting',
      description: 'The website itself is a one-time development project, but keeping it online requires ongoing infrastructure.',
      items: [
        'A domain is the website\'s address, such as yourbusiness.com.',
        'Hosting is the service that keeps the website\'s files online and available to visitors.'
      ],
      note: 'Domain and hosting costs are recurring and are charged separately from the website build.'
    },
    exclusions: [
      'Full ecommerce systems',
      'Online checkout',
      'Payment processing',
      'Customer accounts',
      'Advanced booking systems',
      'Inventory management',
      'Custom business dashboards',
      'Complex databases',
      'Large product catalogues',
      'Advanced automation'
    ],
    exclusionNote: 'If the business requires these kinds of systems, Icon may be more appropriate depending on the requirements.',
    result: 'Foundation gives your business a proper digital home - a place customers can visit, understand what you offer and take action without having to piece everything together through Instagram.'
  },
  icon: {
    name: 'ICON',
    eyebrow: 'Catalogue package',
    title: 'Turn attention into a proper storefront.',
    price: 'From ₦225,000',
    introTitle: 'For growing brands ready to sell beyond the DMs.',
    audienceHeading: 'A clearer storefront for brands <span class="text-accent">ready to grow.</span>',
    includedHeading: 'Everything needed for a <span class="text-accent">proper storefront.</span>',
    introduction: 'Your customers may already be finding you through Instagram. But when they have to ask what is available, request prices, search through posts or move between Instagram, Linktree, WhatsApp and catalogues, the buying process becomes harder than it needs to be.',
    summary: 'Icon turns that scattered experience into a proper online storefront where customers can browse, understand your products or services and decide what to do next.',
    audience: [
      'Fashion and clothing brands',
      'Jewellery and accessories businesses',
      'Beauty brands',
      'Lifestyle and retail businesses',
      'Food businesses',
      'Service providers with multiple offerings',
      'Growing businesses with a product or service catalogue'
    ],
    audienceNote: 'Icon may be appropriate when customers regularly ask questions such as:',
    audienceQuestions: [
      'How much?',
      "What's available?",
      'How do I order?',
      'Do you have this in another colour/size?',
      'Where can I see your products?'
    ],
    includes: [
      {
        title: 'Everything in Foundation',
        description: 'Icon includes the core website foundation provided by Foundation, expanded for a larger catalogue-driven experience.'
      },
      {
        title: 'Up to 5 custom-designed pages',
        description: 'More room for products, services, categories, information and supporting pages.'
      },
      {
        title: 'Product or service catalogue',
        description: 'Customers can browse structured listings. The structure can be adapted depending on whether the business sells physical products, services or another type of offering.',
        items: ['Product/service name', 'Price', 'Images', 'Description', 'Category', 'Availability', 'Additional details']
      },
      {
        title: 'Up to 20 catalogue items',
        description: 'The package supports up to 20 catalogue items within the agreed scope.'
      },
      {
        title: 'Dedicated product or service pages',
        description: 'Important products or services can have their own pages instead of being displayed only as cards in a general catalogue. This gives customers more room to understand what they are looking at and provides individual pages that can also be discovered through search engines.'
      },
      {
        title: 'Easy-to-browse categories',
        description: 'Products or services can be organised into clear categories so customers can find what they are looking for without scrolling through one long list.',
        note: 'More advanced filtering or search functionality can be added where required and may affect the project scope.'
      },
      {
        title: 'Better Google visibility',
        description: 'Icon expands on the basic SEO foundation included in Foundation. SEO - Search Engine Optimisation - is the process of making a website easier for search engines such as Google to understand and match with relevant searches.',
        items: ['Page-specific titles and descriptions', 'Better structure for catalogue pages', 'Relevant search terms', 'Search-friendly product/service descriptions', 'Proper headings', 'Image descriptions', 'Indexing and sitemap setup'],
        note: 'SEO is not a guarantee of first-page or first-position rankings. Search visibility depends on many factors and improves over time through the quality, relevance and authority of the website.'
      },
      {
        title: 'Visitor & conversion insights',
        description: 'Analytics can help answer useful questions such as:',
        items: ['Which products are people looking at?', 'Which pages receive the most attention?', 'Where are visitors coming from?', 'Are people clicking WhatsApp?', 'Which catalogue items generate enquiries?', 'What pages lead people toward taking action?'],
        note: 'This turns the website from something that simply exists into something the business can learn from.'
      }
    ],
    additionalSections: [
      {
        eyebrow: 'Ordering without full ecommerce',
        title: 'Make browsing easier without changing how the business sells.',
        description: 'Icon does not automatically require customers to pay directly through the website. For businesses that currently sell through WhatsApp, a common flow can be:',
        items: ['Browse catalogue', 'View product', 'Click WhatsApp', 'Place order'],
        note: 'This keeps the existing way of doing business while making the discovery and browsing experience much easier for customers.'
      },
      {
        eyebrow: 'Ecommerce is different',
        title: 'A full ecommerce system is a larger technical step.',
        description: 'A full ecommerce system usually adds functionality such as:',
        items: ['Add to cart', 'Checkout', 'Online payment', 'Order creation', 'Order confirmation', 'Customer information', 'Order management', 'Inventory management'],
        note: 'These features introduce additional technical requirements and generally move the project toward a more custom build unless specifically scoped otherwise.'
      }
    ],
    revisions: {
      title: 'Two rounds of revisions are included.',
      description: 'A revision round means a consolidated set of changes provided after reviewing the current version of the site.',
      note: 'Major changes that introduce new functionality, substantially increase catalogue size or change the agreed scope may require additional work.'
    },
    infrastructure: {
      title: 'Domain & hosting',
      description: "A domain is the website's address. Hosting is the service that keeps the website online.",
      note: 'Domain and hosting costs are recurring and are charged separately from the website build.'
    },
    exclusions: [
      'Online checkout',
      'Payment processing',
      'Customer accounts',
      'Inventory management',
      'Advanced booking systems',
      'Complex databases',
      'Custom business dashboards',
      'Advanced automation',
      'Large-scale catalogues'
    ],
    exclusionNote: 'These can be scoped separately where appropriate, with more complex systems falling outside the package scope.',
    result: 'Icon turns your website into a proper storefront - somewhere customers can browse what you offer, understand it clearly and move toward an order or enquiry without relying entirely on scattered Instagram posts and DMs.'
  }
};

export const pageMeta = {
  home: {
    title: 'SpiceHouse — Websites with a little more spice.',
    description: 'SpiceHouse designs and builds modern websites for businesses that are ready to look as good online as they do in real life.'
  },
  work: {
    title: 'Our work — SpiceHouse',
    description: 'Selected work from people building brands that deserve a stronger digital home.'
  },
  services: {
    title: 'Services — SpiceHouse',
    description: 'Clear-scope one-page and catalogue website packages, with practical design, build, strategy and launch services.'
  },
  about: {
    title: 'About — SpiceHouse',
    description: 'An independent creative web studio helping brands translate their strengths into a strong online presence.'
  },
  contact: {
    title: 'Contact — SpiceHouse',
    description: 'Tell us what you do, what you need, and what you want your website to accomplish.'
  },
  project: {
    title: 'Project — SpiceHouse',
    description: 'Selected project detail page for a SpiceHouse website build.'
  }
};

export const services = serviceRecords;