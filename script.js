var typed = new Typed(".vicetextu", {
    strings: ["POČÍTAČŮM", "FOTBALU", "HŘE NA KYTARU", "RYBAŘENÍ", "JÍZDĚ NA KOLE", "JACHTINGU"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

})

window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
});

