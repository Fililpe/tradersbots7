const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector(".nav")


hamburger.addEventListener("click", () => nav.classList.toggle("active"))


window.addEventListener('scroll', () =>{
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        nav.classList.add('nav-fixed')
    } else {nav.classList.remove('nav-fixed')}
})