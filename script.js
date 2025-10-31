// Smooth scroll for in-page anchors
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href && href.startsWith('#')){
      const el = document.querySelector(href);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth',block:'start'});
      }
    }
  });
});

// Accordion
const heads = document.querySelectorAll('.ac-head');
heads.forEach(h=>{
  h.setAttribute('aria-expanded','false');
  h.addEventListener('click', ()=>{
    const body = h.nextElementSibling;
    const expanded = h.getAttribute('aria-expanded') === 'true';
    h.setAttribute('aria-expanded', String(!expanded));
    if(body){
      body.classList.toggle('open', !expanded);
    }
  });
});

// CTA tracking (placeholder)
document.querySelectorAll('[data-track]')?.forEach(btn=>{
  btn.addEventListener('click',()=>{
    console.log('CTA click:', btn.getAttribute('data-track'));
  });
});
