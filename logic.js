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

