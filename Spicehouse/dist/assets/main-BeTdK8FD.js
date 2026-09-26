(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const d={brand:"SpiceHouse",tagline:"Websites with a little more spice.",eyebrow:"Independent creative web studio",email:"[EMAIL PLACEHOLDER]",whatsapp:"[WHATSAPP PLACEHOLDER]",instagram:"@spicehouseco",location:"Nigeria • Remote worldwide",description:"SpiceHouse designs and builds modern websites for businesses that are ready to look as good online as they do in real life.",social:{instagram:"@spicehouseco",whatsapp:"[WHATSAPP PLACEHOLDER]",email:"[EMAIL PLACEHOLDER]"}},p=[{slug:"velvet-lane",name:"Velvet Lane",industry:"Fashion",category:"Fashion",year:"2026",short:"A refined online store for a premium fashion label with a sharper editorial voice.",image:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=82",alt:"Fashion boutique storefront lit warmly with neutral tones and large windows",summary:"SpiceHouse created a boutique storefront experience that turns product browsing into an editorial story.",roles:["Brand direction","Web design","E-commerce UX","Development"],outcome:"The site gave the label a stronger digital presence and a cleaner path from discovery to purchase."},{slug:"luma-atelier",name:"Luma Atelier",industry:"Beauty",category:"Beauty",year:"2025",short:"A polished beauty brand site balancing product storytelling with easy booking and enquiries.",image:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=82",alt:"Beauty studio with skincare products and soft natural lighting",summary:"The new site gives the studio a calmer, premium experience while making bookings and consultations easier to access.",roles:["Design system","Website build","Lead generation","Mobile UX"],outcome:"The brand feels more premium and more useful on mobile, without losing warmth or personality."},{slug:"cinder-table",name:"Cinder Table",industry:"Food",category:"Food",year:"2025",short:"A food brand website designed for menus, events, and a stronger digital presence.",image:"https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=82",alt:"Restaurant interior with warm lighting, wooden textures, and an inviting dining setup",summary:"The new experience brings the menu, atmosphere, and service into one clear digital home.",roles:["Art direction","Content structure","Reservation flow","Development"],outcome:"The restaurant now has a clean, conversion-focused online presence that feels like the dining experience itself."},{slug:"harbor-house",name:"Harbor House",industry:"Retail",category:"Retail",year:"2024",short:"A retail concept site that makes browsing feel editorial, premium and easy to navigate.",image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=82",alt:"Curated retail display with premium products arranged in a minimal storefront",summary:"The goal was a cleaner shopping experience with plenty of visual storytelling and direct conversion paths.",roles:["E-commerce direction","Product storytelling","UX design","Development"],outcome:"The site improved product discovery and gave the brand a more considered digital identity.",featured:!0}],v=[{name:"FOUNDATION",serviceSlug:"foundation",price:"From ₦125,000",intro:"Give your audience somewhere to go.",detail:"Custom-built websites for growing brands and businesses ready to move beyond Instagram, Linktree and DMs.",includes:["1 page website (with up to 5 sections)","Mobile-first responsive design","Brand-aligned visual design","WhatsApp integration","Contact/enquiry form","Google Maps where relevant","Basic on-page SEO","Analytics","Deployment","2 revision rounds"],note:"Domain + hosting billed separately",cta:"Get a Quote"},{name:"ICON",serviceSlug:"icon",price:"From ₦225,000",intro:"Build a presence worth noticing.",detail:"For businesses that need more than a basic online presence and stronger customer flow.",includes:["Everything in FOUNDATION","Up to 5 custom designed pages","Product/service catalogue","Up to 20 catalogue items","Individual product/service pages","Category organisation","Basic catalogue navigation/filtering","WhatsApp/order/enquiry CTAs","Enhanced SEO setup","Analytics & conversion tracking","Social integrations","2 revision rounds","Deployment"],note:"Domain + hosting billed separately",cta:"Get a Quote",featured:!0}],f={foundation:{name:"FOUNDATION",eyebrow:"Website package",title:"Give your brand somewhere worth visiting.",price:"From ₦125,000",introTitle:"For businesses ready to move beyond Instagram.",audienceHeading:'A proper home for businesses <span class="text-accent">ready to be found.</span>',introduction:"Your business may already have an audience. The problem is that customers shouldn't have to dig through Instagram posts, DMs and scattered links to understand what you offer or figure out how to contact you.",summary:"Foundation gives your business a proper digital home - a place where customers can learn about you, explore what you offer and take the next step without the friction.",audience:["Instagram-first brands","Small retailers","Beauty and lifestyle businesses","Restaurants and food businesses","Freelancers and creatives","Service providers","Local businesses"],includes:[{title:"Custom-built website",description:"A website designed specifically around your business, brand, audience and goals rather than a generic template."},{title:"Up to 5 pages",description:"A typical site might include pages such as Home, About, Services, Contact and FAQ. The exact pages can be agreed around the business."},{title:"Works beautifully on phones",description:"The website is designed to work properly across phones, tablets and desktop computers. This is especially important for businesses whose customers primarily discover them through Instagram."},{title:"WhatsApp ordering & enquiries",description:"Customers can move directly from the website into WhatsApp to ask questions, place orders or continue an enquiry."},{title:"Contact forms",description:"Simple forms allow customers to send enquiries directly through the website rather than relying entirely on social media DMs."},{title:"Location & directions",description:"For businesses with a physical location, the website can provide location information and directions so customers can find the business more easily."}],seo:{title:"Google-friendly setup",description:"SEO stands for Search Engine Optimisation. It means making your website easier for search engines such as Google to understand and display when people search for relevant things.",items:["Page titles","Search-friendly descriptions","Proper heading structure","Image descriptions","Clean page addresses","Search engine indexing setup","Sitemap setup"],note:"SEO does not guarantee that a website will appear first on Google. It provides the foundation that helps search engines understand the site."},analytics:{title:"Visitor insights",description:"Analytics can show useful information about how people use the website, such as:",items:["How many people visit","Which pages they view","Where visitors come from","Which links they click","How often they click to WhatsApp","Where enquiries are coming from"]},launch:{title:"Launch & deployment",description:"SpiceHouse handles putting the finished website online and completing the technical setup required for launch."},revisions:{title:"Two rounds of revisions are included.",description:"A revision round means a consolidated set of changes provided after reviewing the current version of the site.",note:"Major changes that introduce new pages, functionality or substantially change the agreed scope may require additional work."},infrastructure:{title:"Domain & hosting",description:"The website itself is a one-time development project, but keeping it online requires ongoing infrastructure.",items:["A domain is the website's address, such as yourbusiness.com.","Hosting is the service that keeps the website's files online and available to visitors."],note:"Domain and hosting costs are recurring and are charged separately from the website build."},exclusions:["Full ecommerce systems","Online checkout","Payment processing","Customer accounts","Advanced booking systems","Inventory management","Custom business dashboards","Complex databases","Large product catalogues","Advanced automation"],exclusionNote:"If the business requires these kinds of systems, Icon may be more appropriate depending on the requirements.",result:"Foundation gives your business a proper digital home - a place customers can visit, understand what you offer and take action without having to piece everything together through Instagram."},icon:{name:"ICON",eyebrow:"Catalogue package",title:"Turn attention into a proper storefront.",price:"From ₦225,000",introTitle:"For growing brands ready to sell beyond the DMs.",audienceHeading:'A clearer storefront for brands <span class="text-accent">ready to grow.</span>',includedHeading:'Everything needed for a <span class="text-accent">proper storefront.</span>',introduction:"Your customers may already be finding you through Instagram. But when they have to ask what is available, request prices, search through posts or move between Instagram, Linktree, WhatsApp and catalogues, the buying process becomes harder than it needs to be.",summary:"Icon turns that scattered experience into a proper online storefront where customers can browse, understand your products or services and decide what to do next.",audience:["Fashion and clothing brands","Jewellery and accessories businesses","Beauty brands","Lifestyle and retail businesses","Food businesses","Service providers with multiple offerings","Growing businesses with a product or service catalogue"],audienceNote:"Icon may be appropriate when customers regularly ask questions such as:",audienceQuestions:["How much?","What's available?","How do I order?","Do you have this in another colour/size?","Where can I see your products?"],includes:[{title:"Everything in Foundation",description:"Icon includes the core website foundation provided by Foundation, expanded for a larger catalogue-driven experience."},{title:"6-12 custom pages",description:"More room for products, services, categories, information and supporting pages."},{title:"Product or service catalogue",description:"Customers can browse structured listings. The structure can be adapted depending on whether the business sells physical products, services or another type of offering.",items:["Product/service name","Price","Images","Description","Category","Availability","Additional details"]},{title:"Up to 20 catalogue items",description:"The package supports up to 20 catalogue items within the agreed scope."},{title:"Dedicated product or service pages",description:"Important products or services can have their own pages instead of being displayed only as cards in a general catalogue. This gives customers more room to understand what they are looking at and provides individual pages that can also be discovered through search engines."},{title:"Easy-to-browse categories",description:"Products or services can be organised into clear categories so customers can find what they are looking for without scrolling through one long list.",note:"More advanced filtering or search functionality can be added where required and may affect the project scope."},{title:"Better Google visibility",description:"Icon expands on the basic SEO foundation included in Foundation. SEO - Search Engine Optimisation - is the process of making a website easier for search engines such as Google to understand and match with relevant searches.",items:["Page-specific titles and descriptions","Better structure for catalogue pages","Relevant search terms","Search-friendly product/service descriptions","Proper headings","Image descriptions","Indexing and sitemap setup"],note:"SEO is not a guarantee of first-page or first-position rankings. Search visibility depends on many factors and improves over time through the quality, relevance and authority of the website."},{title:"Visitor & conversion insights",description:"Analytics can help answer useful questions such as:",items:["Which products are people looking at?","Which pages receive the most attention?","Where are visitors coming from?","Are people clicking WhatsApp?","Which catalogue items generate enquiries?","What pages lead people toward taking action?"],note:"This turns the website from something that simply exists into something the business can learn from."}],additionalSections:[{eyebrow:"Ordering without full ecommerce",title:"Make browsing easier without changing how the business sells.",description:"Icon does not automatically require customers to pay directly through the website. For businesses that currently sell through WhatsApp, a common flow can be:",items:["Browse catalogue","View product","Click WhatsApp","Place order"],note:"This keeps the existing way of doing business while making the discovery and browsing experience much easier for customers."},{eyebrow:"Ecommerce is different",title:"A full ecommerce system is a larger technical step.",description:"A full ecommerce system usually adds functionality such as:",items:["Add to cart","Checkout","Online payment","Order creation","Order confirmation","Customer information","Order management","Inventory management"],note:"These features introduce additional technical requirements and generally move the project toward a more custom build unless specifically scoped otherwise."}],revisions:{title:"Two rounds of revisions are included.",description:"A revision round means a consolidated set of changes provided after reviewing the current version of the site.",note:"Major changes that introduce new functionality, substantially increase catalogue size or change the agreed scope may require additional work."},infrastructure:{title:"Domain & hosting",description:"A domain is the website's address. Hosting is the service that keeps the website online.",note:"Domain and hosting costs are recurring and are charged separately from the website build."},exclusions:["Online checkout","Payment processing","Customer accounts","Inventory management","Advanced booking systems","Complex databases","Custom business dashboards","Advanced automation","Large-scale catalogues"],exclusionNote:"These can be scoped separately where appropriate, with more complex systems falling outside the package scope.",result:"Icon turns your website into a proper storefront - somewhere customers can browse what you offer, understand it clearly and move toward an order or enquiry without relying entirely on scattered Instagram posts and DMs."}},b=f;document.body.dataset.page;const w=()=>{document.querySelectorAll("[data-site]").forEach(e=>{const t=e.dataset.site;d[t]&&(e.textContent=d[t])}),document.querySelectorAll('[data-site-link="email"]').forEach(e=>{e.href=`mailto:${d.email}`,(e.textContent.includes("@")||e.textContent.includes("Email"))&&(e.textContent=d.email)}),document.querySelectorAll('[data-site-link="whatsapp"]').forEach(e=>{e.href=`https://wa.me/${d.whatsapp.replace(/\D/g,"")}`,(e.textContent.includes("WhatsApp")||e.textContent.includes("WA"))&&(e.textContent=d.whatsapp)}),document.querySelectorAll('[data-site-link="instagram"]').forEach(e=>{e.href=`https://instagram.com/${d.instagram.replace("@","")}`,e.textContent.includes("Instagram")&&(e.textContent=d.instagram)});const i=document.querySelector("#year");i&&(i.textContent=new Date().getFullYear())},$=()=>{const i=document.querySelector("#project-grid");i&&(i.innerHTML=p.map((e,t)=>`
    <article class="project-card reveal ${t%2===0?"project-card--wide":"project-card--tall"}" style="--delay: ${t*120}ms">
      <a href="project.html?project=${e.slug}" aria-label="View the ${e.name} project">
        <div class="project-image">
          <img src="${e.image}" alt="${e.alt}" loading="lazy" width="1400" height="1050" />
        </div>
        <div class="project-meta">
          <h3>${e.name}</h3>
          <p>${e.industry}</p>
          <span>${e.year}</span>
        </div>
      </a>
    </article>
  `).join(""))},k=()=>{const i=document.querySelector("#portfolio-grid");i&&(i.innerHTML=p.map((e,t)=>`
    <article class="project-card project-card--list reveal" style="--delay: ${t*120}ms">
      <a href="project.html?project=${e.slug}" aria-label="View the ${e.name} project">
        <div class="project-image">
          <img src="${e.image}" alt="${e.alt}" loading="lazy" width="1400" height="1050" />
        </div>
        <div class="project-body">
          <div class="project-heading-row">
            <p class="project-tag">${e.category}</p>
            <span>${e.year}</span>
          </div>
          <h3>${e.name}</h3>
          <p>${e.short}</p>
          <span class="text-link text-link--inline">View project <span aria-hidden="true">↗</span></span>
        </div>
      </a>
    </article>
  `).join(""))},A=()=>{const i=document.querySelector("#package-list");i&&(i.innerHTML=v.map((e,t)=>`
    <article class="package-card ${e.featured?"package-card--featured":""} reveal" style="--delay: ${t*120}ms">
      <div class="package-topline">
        <span class="package-number">0${t+1}</span>
        ${e.featured?'<span class="package-badge">Recommended</span>':""}
      </div>
      <h3>${e.name}</h3>
      <p class="package-price">${e.price}</p>
      <p class="package-intro">${e.intro}</p>
      <p class="package-detail">${e.detail}</p>
      <ul>
        ${e.includes.map(a=>`<li>${a}</li>`).join("")}
      </ul>
      <p class="package-detail">${e.note}</p>
      ${e.serviceSlug?`<a class="text-link text-link--inline" href="services/${e.serviceSlug}/">View package details <span aria-hidden="true">↗</span></a>`:""}
      <a class="button ${e.featured?"button-dark":"button-light"}" href="contact.html#quote-form">${e.cta} <span aria-hidden="true">↗</span></a>
    </article>
  `).join(""))},S=()=>{const i=document.querySelector("[data-project-detail]");if(!i)return;const t=new URLSearchParams(window.location.search).get("project")||"velvet-lane",a=p.find(s=>s.slug===t)||p[0];i.innerHTML=`
    <section class="project-hero page-section">
      <div class="container project-hero__inner">
        <p class="eyebrow">${a.industry}</p>
        <h1>${a.name}</h1>
        <div class="project-hero__meta">
          <span>${a.year}</span>
          <span>${a.category}</span>
        </div>
      </div>
    </section>

    <section class="page-section page-section--tight">
      <div class="container project-visual">
        <img src="${a.image}" alt="${a.alt}" loading="eager" />
      </div>
    </section>

    <section class="page-section page-section--tight">
      <div class="container project-story">
        <div>
          <p class="eyebrow">The brief</p>
          <h2>${a.summary}</h2>
        </div>
        <div>
          <p>${a.outcome}</p>
          <ul class="pill-list">
            ${a.roles.map(s=>`<li>${s}</li>`).join("")}
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
  `},q=()=>{const i=document.querySelector("[data-service-detail]");if(!i)return;const e=document.body.dataset.service,t=b[e];if(!t){i.innerHTML=`
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
    `;return}const a=[...t.includes,...t.seo?[t.seo]:[],...t.analytics?[t.analytics]:[],...t.launch?[t.launch]:[]];i.innerHTML=`
    <section class="project-hero page-section">
      <div class="container project-hero__inner">
        <p class="eyebrow">${t.eyebrow}</p>
        <h1>${t.name}</h1>
        <div class="project-hero__meta">
          <span>${t.price}</span>
          <span>One-time website development</span>
        </div>
        <p class="section-note">${t.title}</p>
      </div>
    </section>

    <section class="page-section page-section--tight">
      <div class="container project-story">
        <div>
          <p class="eyebrow">The idea</p>
          <h2>${t.introTitle}</h2>
        </div>
        <div>
          <p>${t.introduction}</p>
          <p>${t.summary}</p>
        </div>
      </div>
    </section>

    <section class="section-rule" aria-labelledby="${e}-fit-title">
      <div class="container">
        <div class="section-heading reveal">
          <p class="eyebrow">Who it's for</p>
          <h2 id="${e}-fit-title">${t.audienceHeading||"A clear next step for businesses ready to grow."}</h2>
        </div>
        <ul class="pill-list reveal" style="--delay: 120ms">
          ${t.audience.map(s=>`<li>${s}</li>`).join("")}
        </ul>
        ${t.audienceNote?`<p class="section-note reveal" style="--delay: 180ms">${t.audienceNote}</p>`:""}
        ${t.audienceQuestions?`<ul class="pill-list reveal" style="--delay: 240ms">${t.audienceQuestions.map(s=>`<li>${s}</li>`).join("")}</ul>`:""}
      </div>
    </section>

    <section class="page-section page-section--tight" aria-labelledby="${e}-included-title">
      <div class="container">
        <div class="section-heading reveal">
          <p class="eyebrow">Included</p>
          <h2 id="${e}-included-title">${t.includedHeading||'Everything needed for a <span class="text-accent">clear digital home.</span>'}</h2>
        </div>
        <div class="info-grid">
          ${a.map((s,o)=>`
            <article class="info-panel reveal" style="--delay: ${o*80}ms">
              <h3>${s.title}</h3>
              <p>${s.description}</p>
              ${s.items?`<ul>${s.items.map(c=>`<li>${c}</li>`).join("")}</ul>`:""}
              ${s.note?`<p>${s.note}</p>`:""}
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    ${(t.additionalSections||[]).map((s,o)=>`
      <section class="section-rule" aria-labelledby="${e}-additional-${o}">
        <div class="container">
          <div class="section-heading reveal">
            <p class="eyebrow">${s.eyebrow}</p>
            <h2 id="${e}-additional-${o}">${s.title}</h2>
          </div>
          <div class="project-story">
            <div><p>${s.description}</p></div>
            <div>
              ${s.items?`<ul class="pill-list">${s.items.map(c=>`<li>${c}</li>`).join("")}</ul>`:""}
              ${s.note?`<p>${s.note}</p>`:""}
            </div>
          </div>
        </div>
      </section>
    `).join("")}

    <section class="section-rule" aria-labelledby="${e}-terms-title">
      <div class="container">
        <div class="section-heading reveal">
          <p class="eyebrow">Project terms</p>
          <h2 id="${e}-terms-title">Clear scope, from first draft <span class="text-accent">to launch.</span></h2>
        </div>
        <div class="info-grid">
          ${t.revisions?`<article class="info-panel reveal">
            <h3>${t.revisions.title}</h3>
            <p>${t.revisions.description}</p>
            <p>${t.revisions.note}</p>
          </article>`:""}
          <article class="info-panel reveal">
            <h3>${t.infrastructure.title}</h3>
            <p>${t.infrastructure.description}</p>
            ${t.infrastructure.items?`<ul>${t.infrastructure.items.map(s=>`<li>${s}</li>`).join("")}</ul>`:""}
            <p>${t.infrastructure.note}</p>
          </article>
        </div>
      </div>
    </section>

    ${t.exclusions?`<section class="page-section page-section--tight" aria-labelledby="${e}-exclusions-title">
      <div class="container project-story">
        <div>
          <p class="eyebrow">Not included</p>
          <h2 id="${e}-exclusions-title">${t.exclusionHeading||'The package keeps its scope <span class="text-accent">focused.</span>'}</h2>
        </div>
        <div>
          <p>${t.exclusionLabel||`${t.name} does not include:`}</p>
          <ul class="pill-list">
            ${t.exclusions.map(s=>`<li>${s}</li>`).join("")}
          </ul>
          <p>${t.exclusionNote}</p>
        </div>
      </div>
    </section>`:""}

    <section class="page-section page-section--tight">
      <div class="container project-ctas">
        <div>
          <p class="eyebrow">The result</p>
          <h2>${t.result}</h2>
          <p class="package-price">${t.price}</p>
          ${t.resultNote?`<p>${t.resultNote}</p>`:""}
        </div>
        <div class="project-ctas">
          <a class="button button-dark" href="../../contact.html#quote-form">Get a quote <span aria-hidden="true">↗</span></a>
          <a class="button button-light" href="../../services.html">Back to services <span aria-hidden="true">←</span></a>
        </div>
      </div>
    </section>
  `},x=()=>{const i=document.querySelector(".menu-toggle"),e=document.querySelector("#site-nav");!i||!e||(i.addEventListener("click",()=>{const t=i.getAttribute("aria-expanded")==="true";i.setAttribute("aria-expanded",String(!t)),e.classList.toggle("is-open",!t),document.body.classList.toggle("menu-open",!t)}),e.querySelectorAll("a").forEach(t=>{t.addEventListener("click",()=>{i.setAttribute("aria-expanded","false"),e.classList.remove("is-open"),document.body.classList.remove("menu-open")})}))},L=()=>{const i=document.querySelectorAll(".reveal");if(!("IntersectionObserver"in window)){i.forEach(t=>t.classList.add("is-visible"));return}const e=new IntersectionObserver(t=>{t.forEach(a=>{a.isIntersecting&&(a.target.classList.add("is-visible"),e.unobserve(a.target))})},{threshold:.12});i.forEach(t=>e.observe(t))},T=()=>{const i=document.querySelector("#quote-form");if(!i)return;const e=i.querySelector(".form-status"),t=i.querySelector('button[type="submit"]'),a=i.querySelector('[name="package"]'),s=i.querySelector('[name="budget"]'),o=s?s.closest(".budget-field"):null,c=()=>{if(!a||!s||!o)return;const n=a.value==="Not sure yet";o.hidden=!n,s.disabled=!n,s.required=n,s.setAttribute("aria-hidden",String(!n)),n||(s.value="",s.setCustomValidity(""),s.setAttribute("aria-invalid","false"),s.closest(".field")&&s.closest(".field").classList.remove("has-error"))},m=(n,l)=>{const r=i.querySelector(`[name="${n}"]`);if(!r)return;const u=r.closest(".field");u&&u.classList.add("has-error"),r.setAttribute("aria-invalid","true"),r.setCustomValidity(l),r.reportValidity()},h=n=>{const l=i.querySelector(`[name="${n}"]`);if(!l)return;const r=l.closest(".field");r&&r.classList.remove("has-error"),l.setAttribute("aria-invalid","false"),l.setCustomValidity("")};i.querySelectorAll("input, select, textarea").forEach(n=>{n.addEventListener("input",()=>h(n.name)),n.addEventListener("change",()=>{h(n.name),n.name==="package"&&c()})}),a&&(a.addEventListener("change",c),c()),i.addEventListener("submit",n=>{n.preventDefault();const l=["name","businessName","email","phone","businessType","businessDescription","websiteGoals","package"];s&&!s.disabled&&s.required&&l.push("budget");let r=!0;l.forEach(g=>{const y=i.querySelector(`[name="${g}"]`);y&&(y.value.trim()?h(g):(m(g,"This field is required."),r=!1))});const u=i.querySelector('[name="email"]');if(u&&u.value&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u.value)&&(m("email","Please enter a valid email address."),r=!1),!r){e&&(e.textContent="Please complete the required fields before sending your enquiry.",e.classList.add("is-error"));return}e&&(e.classList.remove("is-error"),e.textContent="Sending your enquiry…"),t.disabled=!0,t.textContent="Sending…",window.setTimeout(()=>{i.reset(),t.disabled=!1,t.textContent="Send enquiry",e&&(e.textContent="Thanks — your enquiry has been drafted successfully. We’ll be in touch soon.",e.classList.add("is-success"))},700)})},C=()=>{w(),x(),$(),k(),A(),S(),q(),L(),T();const i=document.body.dataset.page;document.querySelectorAll(".site-nav a[data-page-link]").forEach(t=>{t.dataset.pageLink===i&&t.classList.add("is-active")})};C();
