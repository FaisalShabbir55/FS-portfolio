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
    
    // Control the amount of translation (adjust 100 for more/less movement)
    const translateValue = scrollPosition / 2; // Adjust for desired movement speed

    // Apply the transform based on scroll position
    img.style.transform = `translateX(${translateValue}px)`;
    if (socialGroup) {
        socialGroup.style.transform = `translateX(${translateValue}px)`;
    }
});





