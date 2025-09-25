document.addEventListener('DOMContentLoaded', function () {

    // ==============
    // PRELOADER
    // ==============
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.style.display = 'none', 500);
        });
        setTimeout(() => {
            if (preloader.style.display !== 'none') {
                preloader.style.opacity = '0';
                setTimeout(() => preloader.style.display = 'none', 500);
            }
        }, 3000);
    }

    // ==============
    // 3D GALLERY CAROUSEL
    // ==============
    const galleryList = document.querySelector('#gallery-carousel .splide__list');
    if (galleryList) {
        // 🔢 Add ALL your gallery images here (no limit!)
        const images = [
            'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg',
            'img5.jpg', 'img6.jpg', 'img7.jpg', 'img8.jpg',
            'img9.jpg', 'img10.jpg', 'img11.jpg', 'img12.jpg',
            // Add as many as you want!
        ];

        // Generate slides
        images.forEach(filename => {
            const li = document.createElement('li');
            li.className = 'splide__slide';
            li.innerHTML = `
                <div class="gallery-slide">
                    <img src="images/gallery/${filename}" 
                         alt="SCUBE Maritime - ${filename.replace(/\.[^/.]+$/, "")}"
                         loading="lazy">
                </div>
            `;
            galleryList.appendChild(li);
        });

        // Initialize Splide
        new Splide('#gallery-carousel', {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '1.5rem',
            autoplay: true,
            interval: 4000,
            pauseOnHover: true,
            pagination: true,
            arrows: true,
            breakpoints: {
                992: { perPage: 2 },
                768: { perPage: 1, gap: '1rem' }
            }
        }).mount();
    }

    // ==============
    // SMOOTH SCROLL
    // ==============
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') === '#') return;
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log('✅ SCUBE Maritime — Website Loaded');
});