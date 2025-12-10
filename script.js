 // Create floating background elements
        function createFloatingElements() {
            const container = document.getElementById('floatingElements');
            const elementCount = 20;
            
            for (let i = 0; i < elementCount; i++) {
                const element = document.createElement('div');
                element.classList.add('floating-element');
                
                // Random size
                const size = Math.random() * 60 + 10;
                element.style.width = `${size}px`;
                element.style.height = `${size}px`;
                
                // Random position
                element.style.left = `${Math.random() * 100}%`;
                element.style.top = `${Math.random() * 100}%`;
                
                // Random animation
                const duration = Math.random() * 40 + 20;
                const delay = Math.random() * 5;
                element.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
                
                // Add to container
                container.appendChild(element);
            }
        }

        // Create CSS for floating animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0% { transform: translate(0, 0) rotate(0deg); }
                25% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(90deg); }
                50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(180deg); }
                75% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(270deg); }
                100% { transform: translate(0, 0) rotate(360deg); }
            }
        `;
        document.head.appendChild(style);

        // Cursor glow effect
        const cursorGlow = document.querySelector('.cursor-glow');
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = `${e.pageX}px`;
            cursorGlow.style.top = `${e.pageY}px`;
        });

        document.addEventListener('mousedown', () => {
            cursorGlow.style.width = '30px';
            cursorGlow.style.height = '30px';
        });

        document.addEventListener('mouseup', () => {
            cursorGlow.style.width = '20px';
            cursorGlow.style.height = '20px';
        });

        // Scroll animations
        function checkScroll() {
            const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('visible');
                }
            });
        }

        // Navigation active state
        function setActiveNav() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-links a');
            
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= sectionTop - 300) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 20,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });

        // Initialize everything when page loads
        window.addEventListener('load', () => {
            createFloatingElements();
            checkScroll();
            setActiveNav();
        });

        window.addEventListener('scroll', () => {
            checkScroll();
            setActiveNav();
        });

        // Add some interactive effects to skill items
        document.querySelectorAll('.skill-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 0 15px rgba(139, 0, 0, 0.7)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.boxShadow = 'none';
            });
        });

        // Add typing effect to hero section
        const heroText = "Crafting Intelligent Software & Secure Digital Systems.";
        const heroElement = document.querySelector('.hero-headline');
        let charIndex = 0;
        
        function typeWriter() {
            if (charIndex < heroText.length) {
                heroElement.textContent += heroText.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(() => {
            heroElement.textContent = '';
            typeWriter();
        }, 500);

        // Annoy Clonners (Project stealers)

        document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'c' || e.key === 'x')) {
        e.preventDefault();
    }
});
