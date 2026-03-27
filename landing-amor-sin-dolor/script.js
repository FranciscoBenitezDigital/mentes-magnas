// SCROLL REVEAL
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // SMOOTH SCROLL
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            const t = document.querySelector(a.getAttribute('href'));
            if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // FAQ
    function toggleFaq(btn) {
        const item = btn.parentElement;
        const isOpen = item.classList.contains('abierto');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('abierto'));
        if (!isOpen) item.classList.add('abierto');
    }

    // SLIDER
    let currentSlide = 0;
    const track = document.getElementById('sliderTrack');
    const dotsContainer = document.getElementById('sliderDots');
    const slides = track.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function crearDots() {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot' + (i === 0 ? ' active' : '');
            dot.onclick = () => irA(i);
            dotsContainer.appendChild(dot);
        }
    }

    function actualizarDots() {
        document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === currentSlide));
    }

    function irA(index) {
        currentSlide = Math.max(0, Math.min(index, totalSlides - 1));
        const slideWidth = slides[0].offsetWidth;
        track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        actualizarDots();
    }

    function moverSlider(dir) { irA(currentSlide + dir); }

    crearDots();