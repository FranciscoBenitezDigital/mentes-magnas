!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2102884150044822');
fbq('track', 'PageView');

var _fbqLastCheckout = 0;
function fbqCheckout() {
    var now = Date.now();
    if (now - _fbqLastCheckout > 2000) {
        _fbqLastCheckout = now;
        fbq('track', 'InitiateCheckout');
    }
}

const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            const t = document.querySelector(a.getAttribute('href'));
            if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    function toggleFaq(btn) {
        const item = btn.parentElement;
        const isOpen = item.classList.contains('abierto');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('abierto'));
        if (!isOpen) item.classList.add('abierto');
    }

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