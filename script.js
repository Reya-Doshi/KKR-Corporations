document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Hero Typewriter Effect (Start of page)
    const heroTitle = document.getElementById('hero-title-typed');
    const heroText = "Cooling Without Compromise.";
    
    if (heroTitle) {
        let i = 0;
        const typeSpeed = 100; // Slow and professional
        
        function typeHero() {
            if (i < heroText.length) {
                heroTitle.innerHTML += heroText.charAt(i);
                i++;
                setTimeout(typeHero, typeSpeed);
            }
        }
        typeHero();
    }

    // 2. Infinite Logo Marquee
    const marquee = document.getElementById('logo-marquee-content');
    if (marquee) {
        const clone = marquee.innerHTML;
        marquee.innerHTML += clone; 
    }

    // 3. Scroll Reveal Observer
    const revealCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.1
    });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // 4. Counter Animation
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const endValue = parseInt(target.getAttribute('data-target'));
                animateCounter(target, endValue);
                counterObserver.unobserve(target);
            }
        });
    }, { threshold: 1 });

    document.querySelectorAll('.stat-number').forEach(num => counterObserver.observe(num));

    function animateCounter(el, end) {
        let current = 0;
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / end));
        
        const timer = setInterval(() => {
            current += 1;
            el.innerText = current + (end > 35 ? "+" : "");
            if (current == end) clearInterval(timer);
        }, stepTime);
    }

    // 5. Typewriter Effect for Leadership Roles (On Scroll)
    const typeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const text = el.getAttribute('data-text');
                typeEffect(el, text);
                typeObserver.unobserve(el);
            }
        });
    }, { threshold: 1 });

    document.querySelectorAll('.role-type').forEach(role => typeObserver.observe(role));

    function typeEffect(el, text) {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                el.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, 50);
    }

    // 6. Hero Subtle Movement Interaction
    const hero = document.querySelector('.hero-section');
    window.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.005;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.005;
        if (hero) {
            hero.style.backgroundPosition = `${50 + moveX}% ${50 + moveY}%`;
        }
    });
});