const nav = document.querySelector('nav');

window.addEventListener("scroll",()=>{
    (window.scrollY > 0) ? nav.classList.add('active') : nav.classList.remove('active');
});