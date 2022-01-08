const scrollLinks = document.querySelectorAll('.nav-link');
const nav = document.getElementById('navbar');
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById('hamburger');
const header = document.getElementById('header');
console.log(navLink);

// scrollLinks.forEach(link => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
//         const id = e.currentTarget.getAttribute('href').slice(1);
//         const element = document.getElementById(id);
//         const navHeight = nav.getBoundingClientRect().height;
//         const headerHeight = header.getBoundingClientRect().height;


//         let position = element.offsetTop - navHeight;

//         console.log(navHeight);

//         if(navHeight < 500) {
//             position = position 
//         }else {
//             position = position + headerHeight
//         }

//         window.scrollTo({
//             left: 0,
//             top: position,
//         });
//         // linksContainer.style.height = 0;

        
//         console.log(position);
//     })
// });

const navbar = document.getElementById("navbar");
hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    hamburger.classList.toggle("active");
});

// remove menu when nav link is clicked
navLink.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.toggle("active");
        hamburger.classList.toggle("active");
    })
});

// date 
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();