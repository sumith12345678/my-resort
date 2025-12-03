// Location Carousel
let locationScrollPosition = 0;
let locationAutoSlideInterval = null;
const locationCarousel = document.getElementById('locationCarousel');
const locationPrevBtn = document.getElementById('locationPrev');
const locationNextBtn = document.getElementById('locationNext');

if (locationCarousel && locationPrevBtn && locationNextBtn) {
    const scrollAmount = 250;
    
    const scrollLocationNext = () => {
        locationScrollPosition += scrollAmount;
        const maxScroll = locationCarousel.scrollWidth - locationCarousel.clientWidth;
        if (locationScrollPosition >= maxScroll) {
            locationScrollPosition = 0; // Reset to start for continuous loop
        }
        locationCarousel.scrollTo({
            left: locationScrollPosition,
            behavior: 'smooth'
        });
    };
    
    const scrollLocationPrev = () => {
        locationScrollPosition -= scrollAmount;
        if (locationScrollPosition < 0) {
            locationScrollPosition = locationCarousel.scrollWidth - locationCarousel.clientWidth; // Go to end
        }
        locationCarousel.scrollTo({
            left: locationScrollPosition,
            behavior: 'smooth'
        });
    };
    
    locationNextBtn.addEventListener('click', () => {
        scrollLocationNext();
        resetLocationAutoSlide();
    });
    
    locationPrevBtn.addEventListener('click', () => {
        scrollLocationPrev();
        resetLocationAutoSlide();
    });
    
    // Update scroll position on scroll
    locationCarousel.addEventListener('scroll', () => {
        locationScrollPosition = locationCarousel.scrollLeft;
    });
    
    // Auto-slide functionality
    const startLocationAutoSlide = () => {
        locationAutoSlideInterval = setInterval(() => {
            scrollLocationNext();
        }, 3000); // Auto-slide every 3 seconds
    };
    
    const resetLocationAutoSlide = () => {
        if (locationAutoSlideInterval) {
            clearInterval(locationAutoSlideInterval);
        }
        startLocationAutoSlide();
    };
    
    // Pause auto-slide on hover
    locationCarousel.addEventListener('mouseenter', () => {
        if (locationAutoSlideInterval) {
            clearInterval(locationAutoSlideInterval);
        }
    });
    
    locationCarousel.addEventListener('mouseleave', () => {
        startLocationAutoSlide();
    });
    
    // Start auto-slide on page load
    startLocationAutoSlide();
}

// Amenities Carousel
let amenitiesScrollPosition = 0;
let amenitiesAutoSlideInterval = null;
const amenitiesCarousel = document.getElementById('amenitiesCarousel');
const amenitiesPrevBtn = document.getElementById('amenitiesPrev');
const amenitiesNextBtn = document.getElementById('amenitiesNext');

if (amenitiesCarousel && amenitiesPrevBtn && amenitiesNextBtn) {
    const scrollAmount = 250;
    
    const scrollAmenitiesNext = () => {
        amenitiesScrollPosition += scrollAmount;
        const maxScroll = amenitiesCarousel.scrollWidth - amenitiesCarousel.clientWidth;
        if (amenitiesScrollPosition >= maxScroll) {
            amenitiesScrollPosition = 0; // Reset to start for continuous loop
        }
        amenitiesCarousel.scrollTo({
            left: amenitiesScrollPosition,
            behavior: 'smooth'
        });
    };
    
    const scrollAmenitiesPrev = () => {
        amenitiesScrollPosition -= scrollAmount;
        if (amenitiesScrollPosition < 0) {
            amenitiesScrollPosition = amenitiesCarousel.scrollWidth - amenitiesCarousel.clientWidth; // Go to end
        }
        amenitiesCarousel.scrollTo({
            left: amenitiesScrollPosition,
            behavior: 'smooth'
        });
    };
    
    amenitiesNextBtn.addEventListener('click', () => {
        scrollAmenitiesNext();
        resetAmenitiesAutoSlide();
    });
    
    amenitiesPrevBtn.addEventListener('click', () => {
        scrollAmenitiesPrev();
        resetAmenitiesAutoSlide();
    });
    
    // Update scroll position on scroll
    amenitiesCarousel.addEventListener('scroll', () => {
        amenitiesScrollPosition = amenitiesCarousel.scrollLeft;
    });
    
    // Auto-slide functionality
    const startAmenitiesAutoSlide = () => {
        amenitiesAutoSlideInterval = setInterval(() => {
            scrollAmenitiesNext();
        }, 3000); // Auto-slide every 3 seconds
    };
    
    const resetAmenitiesAutoSlide = () => {
        if (amenitiesAutoSlideInterval) {
            clearInterval(amenitiesAutoSlideInterval);
        }
        startAmenitiesAutoSlide();
    };
    
    // Pause auto-slide on hover
    amenitiesCarousel.addEventListener('mouseenter', () => {
        if (amenitiesAutoSlideInterval) {
            clearInterval(amenitiesAutoSlideInterval);
        }
    });
    
    amenitiesCarousel.addEventListener('mouseleave', () => {
        startAmenitiesAutoSlide();
    });
    
    // Start auto-slide on page load
    startAmenitiesAutoSlide();
}

// Property Details Page - Image Gallery
function changeMainImage(src) {
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = src.replace('w=600', 'w=1200');
    }
}

// Show More/Less Toggle
function toggleSummary() {
    const summaryMore = document.getElementById('summaryMore');
    const showMoreBtn = document.getElementById('showMoreBtn');
    
    if (summaryMore && showMoreBtn) {
        if (summaryMore.style.display === 'none') {
            summaryMore.style.display = 'block';
            showMoreBtn.textContent = 'Show Less';
        } else {
            summaryMore.style.display = 'none';
            showMoreBtn.textContent = 'Show More';
        }
    }
}

// Booking Form Validation
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const checkIn = document.getElementById('checkIn').value;
        const checkOut = document.getElementById('checkOut').value;
        const guests = document.getElementById('guests').value;
        
        if (!checkIn || !checkOut || !guests) {
            alert('Please fill in all fields');
            return;
        }
        
        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);
        
        if (checkOutDate <= checkInDate) {
            alert('Check-out date must be after check-in date');
            return;
        }
        
        // Success message
        alert('Booking request submitted successfully! We will contact you shortly.');
        bookingForm.reset();
    });
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    const checkInInput = document.getElementById('checkIn');
    const checkOutInput = document.getElementById('checkOut');
    
    if (checkInInput) {
        checkInInput.setAttribute('min', today);
        checkInInput.addEventListener('change', () => {
            if (checkOutInput) {
                const checkInDate = new Date(checkInInput.value);
                checkInDate.setDate(checkInDate.getDate() + 1);
                checkOutInput.setAttribute('min', checkInDate.toISOString().split('T')[0]);
            }
        });
    }
}

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        if (!firstName || !lastName || !email || !phone || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Success message
        alert('Thank you for contacting us! We will get back to you soon.');
        contactForm.reset();
    });
}

// Smooth scroll for anchor links
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

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Add animation on scroll
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.property-card, .review-card, .amenity-item, .location-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Location items click handler
document.querySelectorAll('.location-item').forEach(item => {
    item.addEventListener('click', () => {
        // Add click animation
        item.style.transform = 'scale(0.95)';
        setTimeout(() => {
            item.style.transform = '';
        }, 200);
    });
});

