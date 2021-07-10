const scrollLinks = document.querySelectorAll('.nav-link');
const nav = document.getElementById('navbar');
const header = document.getElementById('header');
console.log(header);

scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        const navHeight = nav.getBoundingClientRect().height;
        const headerHeight = header.getBoundingClientRect().height;


        let position = element.offsetTop - navHeight;

        console.log(navHeight);

        if(navHeight < 500) {
            position = position 
        }else {
            position = position + headerHeight
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
        // linksContainer.style.height = 0;

        
        console.log(position);
    })
})