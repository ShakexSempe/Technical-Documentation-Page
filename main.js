const scrollLinks = document.querySelectorAll('.nav-link');
const nav = document.getElementById('navbar');
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById('hamburger');
const header = document.getElementById('header');
console.log(navLink);

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


const observerItems = document.querySelectorAll('.io-item');
const itemOptions = {
    rootMargin: "0px 0px 0px 0px",
}
observerItems.forEach(item => {
    const itemsObserver = new IntersectionObserver(
        function(entries, itemsObserver){
            entries.forEach(entry => {
                if(!entry.isIntersecting){
                    // console.log('item NOT intersecting');
                    item.classList.remove('active-item');
                } else {
                    // console.log("item IS intersecting");
                    item.classList.add('active-item');
                }
            })
        }, itemOptions
    );
    itemsObserver.observe(item);
});