const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector(".nav")
// let lastScrollTop = 0;


hamburger.addEventListener("click", () => nav.classList.toggle("active"))


window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
  
    if (window.scrollY > 100) {
      header.classList.add("nav-fixed");
    } else {
      header.classList.remove("nav-fixed");
    }
  });

//   window.addEventListener("scroll", () => {
//     const header = document.querySelector(".header");
//     const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
//     if (currentScroll > lastScrollTop) {
//       header.classList.add("nav-fixed");
//     } else {
//       header.classList.remove("nav-fixed");
//     }
  
//     lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
//   });