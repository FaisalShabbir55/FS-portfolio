$(document).ready(function(){
    $(".home").ripples({
    resolution: 200,
    perturbance: .005,
});
});

window.addEventListener('scroll', function() {
    const img = document.getElementById('profile-img');
    const socialGroup = document.querySelector('.st-social-group');
    const scrollPosition = window.scrollY;
    
    const translateValue = scrollPosition / 2;

    img.style.transform = `translateX(${translateValue}px)`;
    if (socialGroup) {
        socialGroup.style.transform = `translateX(${translateValue}px)`;
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const socialButtons = document.querySelectorAll('.socialBtn');
    socialButtons[0].classList.add('active');
    socialButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            socialButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});


// Get all links in the menu
const menuLinks = document.querySelectorAll('.menu ul li a');

// Add click event listener to each link
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        menuLinks.forEach(link => link.classList.remove('active'));
        
        // Add active class to the clicked link
        this.classList.add('active');
    });
});

