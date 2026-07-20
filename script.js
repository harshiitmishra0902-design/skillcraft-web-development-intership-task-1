const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');


const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px', 
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            
            
            navLinks.forEach(link => link.classList.remove('active'));
            
            
            const activeLink = document.querySelector(`.navbar a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, observerOptions);


sections.forEach(section => observer.observe(section));
