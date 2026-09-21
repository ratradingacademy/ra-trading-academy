
const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
if(menuButton&&nav){menuButton.addEventListener('click',()=>{nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',nav.classList.contains('open')?'true':'false')})}
document.querySelectorAll('[data-contact-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);const name=data.get('name')||'';const email=data.get('email')||'';const course=data.get('course')||'General enquiry';const message=data.get('message')||'';const text=`Hello RA Trading Academy,%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AInterested in: ${encodeURIComponent(course)}%0AMessage: ${encodeURIComponent(message)}`;window.open(`https://wa.me/91YOURNUMBER?text=${text}`,'_blank');}));
