/**
 * Headless WordPress REST API Client with Hybrid Fallback
 */

const WP_API_URL = import.meta.env.PUBLIC_WP_URL || 'https://cms.sanjeevchoudhary.com/wp-json/wp/v2';

export const fallbackProjects = [
  {
    id: 1,
    title: 'Megamind Technology',
    slug: 'megamind-technology',
    category: 'wordpress elementor',
    categoryName: 'WordPress / Elementor',
    domain: 'megamindtechnology.com',
    link: 'https://megamindtechnology.com/',
    initials: 'MT',
    icon: 'fa-brands fa-wordpress',
    gradient: 'from-slate-900 via-blue-950/60 to-slate-900',
    accentColor: 'blue',
    description: 'Corporate agency portal for an international digital marketing & SEO firm with custom Elementor Pro architecture and high-converting lead funnels.',
    results: 'Sub-Second Load • Elementor Pro • Global SEO Agency',
    tags: ['WordPress', 'Elementor Pro', 'Custom Design', 'Corporate UI'],
    isFeatured: true
  },
  {
    id: 2,
    title: 'Apex e-Commerce Services',
    slug: 'apex-ecommerce-services',
    category: 'wordpress elementor ecommerce',
    categoryName: 'WordPress / Elementor',
    domain: 'apexecommerceservices.com',
    link: 'https://apexecommerceservices.com/',
    initials: 'AP',
    icon: 'fa-brands fa-elementor',
    gradient: 'from-slate-900 via-indigo-950/60 to-slate-900',
    accentColor: 'indigo',
    description: 'Modern corporate site for an eCommerce growth partner featuring interactive case studies, dynamic layouts, and custom Elementor components.',
    results: 'High Conversion UI • Custom Elementor • E-Com Agency Showcase',
    tags: ['WordPress', 'Elementor Pro', 'E-Commerce Agency', 'Custom UI'],
    isFeatured: true
  },
  {
    id: 3,
    title: 'Baniya Super Market',
    slug: 'baniya-super-market',
    category: 'shopify ecommerce',
    categoryName: 'Shopify 2.0',
    domain: 'baniyasupermarket.com',
    link: 'https://baniyasupermarket.com/',
    initials: 'BS',
    icon: 'fa-brands fa-shopify',
    gradient: 'from-slate-900 via-emerald-950/50 to-slate-900',
    accentColor: 'emerald',
    description: 'Full-scale Shopify eCommerce store offering premium dry fruits, Kashmiri saffron, and handicrafts with custom mega menus, upsells, and razor-fast checkout.',
    results: '10,000+ Monthly Shoppers • Liquid 2.0 Theme • Instant Checkout',
    tags: ['Shopify 2.0', 'Liquid Theme', 'E-Commerce', 'Retail Store'],
    isFeatured: true
  },
  {
    id: 4,
    title: 'Shivya Healthcare',
    slug: 'shivya-healthcare',
    category: 'shopify ecommerce',
    categoryName: 'Shopify 2.0',
    domain: 'shivyahealthcare.com',
    link: 'https://shivyahealthcare.com/',
    initials: 'SH',
    icon: 'fa-brands fa-shopify',
    gradient: 'from-slate-900 via-teal-950/50 to-slate-900',
    accentColor: 'teal',
    description: 'High-conversion Ayurvedic wellness brand store on Shopify with mobile-first checkout, trust badges, customer review integration, and COD/online payment gateways.',
    results: 'Trusted by 32,000+ Families • Mobile-First UX • High Conversion',
    tags: ['Shopify 2.0', 'Ayurveda & Health', 'E-Commerce', 'D2C Brand'],
    isFeatured: true
  },
  {
    id: 5,
    title: 'TimTim Foods',
    slug: 'timtim-foods',
    category: 'shopify ecommerce',
    categoryName: 'Shopify 2.0',
    domain: 'timtimfoods.com',
    link: 'https://timtimfoods.com/',
    initials: 'TT',
    icon: 'fa-brands fa-shopify',
    gradient: 'from-slate-900 via-amber-950/50 to-slate-900',
    accentColor: 'amber',
    description: 'Gourmet food & confectionery D2C Shopify store featuring product bundles, free shipping thresholds, quick-view modals, and frictionless mobile purchasing.',
    results: 'D2C Brand Growth • Optimized Liquid Theme • High AOV',
    tags: ['Shopify 2.0', 'D2C Food Brand', 'Liquid Theme', 'E-Commerce'],
    isFeatured: false
  },
  {
    id: 6,
    title: 'Style Gallery Australia',
    slug: 'style-gallery-australia',
    category: 'shopify ecommerce',
    categoryName: 'Shopify 2.0',
    domain: 'stylegallery.com.au',
    link: 'https://www.stylegallery.com.au/',
    initials: 'SG',
    icon: 'fa-brands fa-shopify',
    gradient: 'from-slate-900 via-rose-950/50 to-slate-900',
    accentColor: 'rose',
    description: 'Australian luxury intimate apparel boutique store built on Shopify with multi-currency support, filterable catalog drawers, and sleek typography.',
    results: 'Australian Market • Multi-Currency • Fluid Catalog Filters',
    tags: ['Shopify 2.0', 'Fashion Boutique', 'Australian E-Com', 'Liquid'],
    isFeatured: true
  },
  {
    id: 7,
    title: 'MATLAB Helper ®',
    slug: 'matlab-helper',
    category: 'wordpress custom',
    categoryName: 'WordPress / Custom PHP',
    domain: 'matlabhelper.com',
    link: 'https://matlabhelper.com/',
    initials: 'MH',
    icon: 'fa-brands fa-wordpress',
    gradient: 'from-slate-900 via-indigo-950/60 to-slate-900',
    accentColor: 'indigo',
    description: 'Leading global engineering & EdTech platform with custom LMS student dashboards, custom PHP post types, quizzes, webinar pipelines, and sub-second load times.',
    results: '98/100 PageSpeed • Sub-Second Load Time • Custom PHP CPTs',
    tags: ['WordPress', 'Custom PHP', 'LMS Portal', 'High Traffic'],
    isFeatured: true
  },
  {
    id: 8,
    title: 'Online Bank Swift Code',
    slug: 'online-bank-swift-code',
    category: 'custom php',
    categoryName: 'PHP & MySQL Database',
    domain: 'onlinebankswiftcode.com',
    link: 'https://onlinebankswiftcode.com/',
    initials: 'SC',
    icon: 'fa-solid fa-building-columns',
    gradient: 'from-slate-900 via-blue-950/50 to-slate-900',
    accentColor: 'blue',
    description: 'High-volume financial directory indexing 174,000+ Indian & international bank branches with instant IFSC, SWIFT, and BIC code lookups powered by raw PHP & MySQL.',
    results: '174,000+ DB Records • Sub-50ms MySQL Querying • High Traffic Utility',
    tags: ['Custom PHP', 'MySQL', 'Financial Database', 'High Traffic'],
    isFeatured: true
  },
  {
    id: 9,
    title: 'SavePin HD',
    slug: 'savepin-hd',
    category: 'custom php',
    categoryName: 'Custom Web Application',
    domain: 'savepinhd.com',
    link: 'https://savepinhd.com/',
    initials: 'SP',
    icon: 'fa-brands fa-pinterest',
    gradient: 'from-slate-900 via-rose-950/50 to-slate-900',
    accentColor: 'rose',
    description: 'High-performance Pinterest video & media downloader tool with 1080p full HD media extraction, server-side parsing API, and sub-second download rendering.',
    results: '100k+ Video Downloads • Sub-Second Media Extractor • Custom PHP API',
    tags: ['Custom Web App', 'PHP API', 'Media Extractor', 'JavaScript'],
    isFeatured: true
  },
  {
    id: 10,
    title: 'Arun Travel',
    slug: 'arun-travel',
    category: 'wordpress',
    categoryName: 'WordPress / Custom Design',
    domain: 'aruntravel.com',
    link: 'https://aruntravel.com/',
    initials: 'AT',
    icon: 'fa-solid fa-plane-departure',
    gradient: 'from-slate-900 via-sky-950/50 to-slate-900',
    accentColor: 'sky',
    description: 'Tourism and travel agency website for an Indian client featuring custom tour package showcases, interactive inquiry forms, and mobile booking integration.',
    results: '100% Mobile Responsive • Custom Tour Packages • Instant Inquiry Lead Gen',
    tags: ['WordPress', 'Custom Design', 'Travel & Tourism', 'Lead Gen'],
    isFeatured: false
  },
  {
    id: 11,
    title: 'Best Home Tutor Jammu',
    slug: 'best-home-tutor-jammu',
    category: 'wordpress',
    categoryName: 'WordPress / Custom Design',
    domain: 'besthometutorjammu.com',
    link: 'https://besthometutorjammu.com/',
    initials: 'BT',
    icon: 'fa-solid fa-graduation-cap',
    gradient: 'from-slate-900 via-violet-950/50 to-slate-900',
    accentColor: 'violet',
    description: 'Educational consultancy & tutor matching portal for an Indian client with student inquiry workflows, tutor verification profiles, and localized search optimization.',
    results: '#1 Local Search Ranking • Inbound Lead Generation • Custom Form Workflows',
    tags: ['WordPress', 'Custom Design', 'Education Portal', 'Local SEO'],
    isFeatured: false
  }
];

export const fallbackTestimonials = [
  {
    id: 1,
    clientName: 'MATLAB Helper Team',
    role: 'Founder & Project Lead • Tellmate.in',
    initial: 'M',
    badge: 'Verified Client',
    stars: 5,
    quote: 'Sanjeev is an experienced WordPress Developer with deep knowledge and hunger to learn more. I have been really pleased with his work and support in the development of Tellmate.in and MATLABHelper.com. He goes out of his comfort zone to deliver the best result!'
  },
  {
    id: 2,
    clientName: 'Out of My Office Desk',
    role: 'E-Commerce & Nomad Gear Store',
    initial: 'O',
    badge: 'Repeat Client',
    stars: 5,
    quote: 'This guy is exceptional! He is very patient with my requests, knows exactly what he is doing, and is super quick to respond to inquiries. This is actually my second order from him on Fiverr. Highly recommended!'
  }
];

/**
 * Fetch projects from WordPress CPT or fallback
 */
export async function getProjects() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 sec timeout
    
    const res = await fetch(`${WP_API_URL}/projects?per_page=50`, {
      signal: controller.signal,
      headers: { 'Accept': 'application/json' }
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return data.map((item, idx) => {
          // Match with fallback rich styling if exists
          const fallback = fallbackProjects.find(f => f.title.toLowerCase() === (item.title?.rendered || '').toLowerCase()) || {};
          return {
            id: item.id || idx + 1,
            title: item.title?.rendered || item.title,
            slug: item.slug,
            category: fallback.category || 'wordpress',
            categoryName: fallback.categoryName || 'WordPress Development',
            domain: fallback.domain || '',
            link: fallback.link || '#',
            initials: fallback.initials || item.title?.rendered?.substring(0, 2).toUpperCase() || 'SC',
            icon: fallback.icon || 'fa-brands fa-wordpress',
            gradient: fallback.gradient || 'from-slate-900 via-indigo-950/60 to-slate-900',
            accentColor: fallback.accentColor || 'indigo',
            description: fallback.description || item.content?.rendered?.replace(/<[^>]+>/g, '') || '',
            results: fallback.results || 'High Performance • Verified Client Build',
            tags: fallback.tags || ['WordPress', 'Elementor'],
            isFeatured: fallback.isFeatured || false
          };
        });
      }
    }
  } catch (err) {
    // Graceful fallback during static build or offline server
  }
  return fallbackProjects;
}

/**
 * Fetch Estimator Pricing from WordPress API
 */
export async function getEstimatorPricing() {
  const defaultPricing = {
    pkg_landing_page: 180,
    pkg_business_wp: 250,
    pkg_shopify_store: 380,
    pkg_custom_wp: 450,
    pkg_fullstack_app: 650,
    pkg_seo_growth: 280,
    addon_seo_schema: 60,
    addon_keyword_research: 90,
    addon_offpage_seo: 120,
    addon_ecommerce_cart: 150,
    addon_speed_optimization: 80,
    addon_express_delivery: 100,
    currency_symbol: '$',
    whatsapp_number: '+372 5458 7576'
  };

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);
    const res = await fetch('https://cms.sanjeevchoudhary.com/wp-json/sanjeev/v1/estimator-pricing', {
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    if (res.ok) {
      const data = await res.json();
      return { ...defaultPricing, ...data };
    }
  } catch (e) {
    // Fallback gracefully
  }
  return defaultPricing;
}

/**
 * Fetch testimonials
 */
export async function getTestimonials() {
  return fallbackTestimonials;
}
