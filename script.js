
document.addEventListener('DOMContentLoaded',()=>{
 const btn=document.querySelector('.menu-btn'), nav=document.querySelector('nav');
 if(btn&&nav) btn.addEventListener('click',()=>{nav.classList.toggle('open');btn.setAttribute('aria-expanded',nav.classList.contains('open'))});
 const current=location.pathname.split('/').pop()||'index.html';
 document.querySelectorAll('nav a').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('active')});
});
