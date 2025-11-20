// Countdown Timer
function updateCountdown() {
  // Set wedding date (June 26, 2026 at 6:00 PM)
  const weddingDate = new Date('2026-02-15T18:00:00').getTime();
  const now = new Date().getTime();
  const difference = weddingDate - now;

  if (difference > 0) {
    // Calculate time units
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update DOM
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  } else {
    // Wedding day has passed
    document.getElementById('days').textContent = '0';
    document.getElementById('hours').textContent = '0';
    document.getElementById('minutes').textContent = '0';
    document.getElementById('seconds').textContent = '0';
  }
}

// Update countdown immediately
updateCountdown();

// Update countdown every second
setInterval(updateCountdown, 1000);

// ==================== SCROLL ANIMATIONS ====================
// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.gallery-section, .location-section, .details-section, .ceremony-timeline-section');
  
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(40px)';
    section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(section);
  });

  // Add parallax effect to hero section
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.style.transform = `translateY(${scrolled * 0.5}px)`;
      hero.style.opacity = 1 - (scrolled / 500);
    }
  });

  // Add hover sound effect simulation (visual feedback)
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
  });

  // Add sparkle effect on card
  const card = document.querySelector('.card');
  if (card) {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const sparkle = document.createElement('div');
      sparkle.style.position = 'absolute';
      sparkle.style.left = x + 'px';
      sparkle.style.top = y + 'px';
      sparkle.style.width = '4px';
      sparkle.style.height = '4px';
      sparkle.style.borderRadius = '50%';
      sparkle.style.background = 'rgba(144, 99, 78, 0.5)';
      sparkle.style.pointerEvents = 'none';
      sparkle.style.animation = 'sparkle 1s ease-out forwards';
      sparkle.style.zIndex = '100';
      
      card.appendChild(sparkle);
      
      setTimeout(() => {
        sparkle.remove();
      }, 1000);
    });
  }

  // Smooth scroll for all internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add tilt effect to countdown circles
  const countdownCircles = document.querySelectorAll('.countdown-circle');
  countdownCircles.forEach(circle => {
    circle.addEventListener('mousemove', (e) => {
      const rect = circle.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      circle.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.15)`;
    });
    
    circle.addEventListener('mouseleave', () => {
      circle.style.transform = '';
    });
  });

  // Add floating animation to timeline dots
  const timelineDots = document.querySelectorAll('.timeline-dot');
  timelineDots.forEach((dot, index) => {
    dot.style.animationDelay = `${index * 0.3}s`;
  });
});
