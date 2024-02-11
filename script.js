document.getElementById('toggle-menu').addEventListener('click', function () {
    var navbar = document.querySelector('.navbar');
    if (navbar.style.maxHeight) {
        navbar.style.maxHeight = null;
    } else {
        navbar.style.maxHeight = "500px";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animasiAktif");
            }
        });
    }, {
        threshold: 0.25 // Adjust based on when you want the animation to start
    });

    // Observe all elements with the class 'newproduk'
    document.querySelectorAll('.newproduk').forEach((elem) => {
        observer.observe(elem);
    });
});


