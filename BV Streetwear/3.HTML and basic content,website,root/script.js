/* BV Streetwear - interactive features and client-side validation */
'use strict';
const products = [
 {id:1,name:'Classic BV T-Shirt',category:'T-Shirts',price:399,image:'images/RedTShirts.png',description:'A clean everyday streetwear essential.'},
 {id:2,name:'Premium BV Hoodie',category:'Hoodies',price:699,image:'images/hoodie.jpg',description:'A comfortable layer for cooler days.'},
 {id:3,name:'Urban BV Jacket',category:'Jackets',price:899,image:'images/jackets.jpg',description:'A statement layer for your everyday look.'}
];
const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];

// Responsive navigation
const menuToggle = $('#menuToggle');
if (menuToggle) menuToggle.addEventListener('click', () => {
 const nav = $('#mainNav'); const open = nav.classList.toggle('open');
 menuToggle.setAttribute('aria-expanded', String(open)); menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});

// Product search, category filtering, sorting and dynamic rendering
let activeCategory = 'All';
function renderProducts() {
 const list = $('#productList'); if (!list) return;
 const query = ($('#productSearch')?.value || '').trim().toLowerCase();
 let shown = products.filter(p => (activeCategory === 'All' || p.category === activeCategory) && `${p.name} ${p.category} ${p.description}`.toLowerCase().includes(query));
 const sort = $('#sortProducts')?.value || 'featured';
 if (sort === 'low') shown.sort((a,b)=>a.price-b.price);
 if (sort === 'high') shown.sort((a,b)=>b.price-a.price);
 if (sort === 'name') shown.sort((a,b)=>a.name.localeCompare(b.name));
 list.innerHTML = shown.map(p => `<article class="product-card"><img src="${p.image}" alt="${p.name}" loading="lazy"><div class="product-info"><p class="eyebrow">${p.category}</p><h2>${p.name}</h2><p>${p.description}</p><p class="price">R${p.price.toFixed(2)}</p><a class="btn" href="enquiry.html?product=${encodeURIComponent(p.name)}">Enquire now</a></div></article>`).join('');
 $('#resultCount').textContent = `${shown.length} product${shown.length===1?'':'s'} shown`;
 $('#noResults').hidden = shown.length !== 0;
}
if ($('#productList')) {
 $('#productSearch').addEventListener('input', renderProducts);
 $('#sortProducts').addEventListener('change', renderProducts);
 $$('.filter-btn').forEach(btn => btn.addEventListener('click', () => {
  activeCategory = btn.dataset.category; $$('.filter-btn').forEach(b=>b.classList.toggle('active',b===btn)); renderProducts();
 }));
 renderProducts();
}

// Small reveal-on-scroll effect
if ('IntersectionObserver' in window) {
 const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);} }), {threshold:.12});
 $$('.feature, .product-card, .gallery-grid figure, .info-card').forEach(el=>observer.observe(el));
}

// Enquiry: validate inputs and calculate a transparent estimate
const enquiryForm = $('#enquiryForm');
if (enquiryForm) {
 const params = new URLSearchParams(location.search); const productParam = params.get('product');
 if (productParam) { const match = products.find(p=>p.name===productParam); if(match) $('#enqType').value = match.category==='T-Shirts'?'T-shirt':match.category==='Hoodies'?'Hoodie':'Jacket'; }
 enquiryForm.addEventListener('submit', event => {
  event.preventDefault(); const output=$('#enquiryResult'); output.textContent='';
  if(!enquiryForm.reportValidity()){output.textContent='Please check the highlighted fields and try again.';return;}
  const data=new FormData(enquiryForm); const type=data.get('type'); const qty=Number(data.get('quantity'));
  const prices={'T-shirt':399,'Hoodie':699,'Jacket':899};
  const estimate=prices[type] ? `Estimated total for ${qty} ${type}${qty===1?'':'s'}: R${(prices[type]*qty).toFixed(2)}.` : `${type}: a personalised quote is needed. We will confirm pricing and availability with you.`;
  output.innerHTML=`<strong>${estimate}</strong><br>Your enquiry details have been checked. Choose “Send enquiry by email” below to prepare your request.`;
  const payload={name:data.get('name'),email:data.get('email'),phone:data.get('phone'),type,quantity:qty,size:data.get('size'),details:data.get('details'),estimate};
  let saved=[]; try{saved=JSON.parse(localStorage.getItem('bvStreetwearEnquiries')||'[]');}catch(e){saved=[];}
  saved.push({...payload,submittedAt:new Date().toISOString()}); localStorage.setItem('bvStreetwearEnquiries',JSON.stringify(saved));
  const subject=encodeURIComponent(`BV Streetwear enquiry: ${type}`);
  const body=encodeURIComponent(`Name: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone}\nProduct/service: ${type}\nQuantity: ${qty}\nSize: ${payload.size}\nDetails: ${payload.details}\n${estimate}`);
  const link=document.createElement('a');link.className='btn email-action';link.href=`mailto:basancemahlathi@gmail.com?subject=${subject}&body=${body}`;link.textContent='Send enquiry by email';output.appendChild(link);
 });
}

// Contact: validate and compile a complete email for the visitor's email application
const contactForm=$('#contactForm');
if(contactForm) contactForm.addEventListener('submit',event=>{
 event.preventDefault();const feedback=$('#contactFeedback');feedback.textContent='';
 if(!contactForm.reportValidity()){feedback.textContent='Please correct the highlighted fields before continuing.';return;}
 const d=new FormData(contactForm);const subject=encodeURIComponent(`BV Streetwear - ${d.get('messageType')}`);
 const body=encodeURIComponent(`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nPhone: ${d.get('phone')||'Not provided'}\nMessage type: ${d.get('messageType')}\n\nMessage:\n${d.get('message')}`);
 feedback.textContent='Your email application should open with the message prepared. Review the details and press Send to deliver it.';
 window.location.href=`mailto:basancemahlathi@gmail.com?subject=${subject}&body=${body}`;
});

// Back to top and current year
const topButton=$('#topButton');
if(topButton){const update=()=>topButton.classList.toggle('show',window.scrollY>350);window.addEventListener('scroll',update,{passive:true});update();topButton.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));}
const year=$('#year');if(year)year.textContent=new Date().getFullYear();
