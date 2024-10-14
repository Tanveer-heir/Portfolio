// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    document.getElementById('read-more-btn').addEventListener('click', function(event) {
        event.preventDefault(); 
        const moreInfo = document.getElementById('more-info');
        if (moreInfo.classList.contains('hidden')) {
            moreInfo.classList.remove('hidden'); 
            this.textContent = "Read Less"; 
        } else {
            moreInfo.classList.add('hidden'); 
            this.textContent = "Read More"; 
        }
    });




    // sticky Header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links(scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    // Animation for footer when scrolled to the bottom
    footer.classList.toggle('show-animate', (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight);


}