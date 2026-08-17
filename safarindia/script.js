// ==========================================
// SUPABASE CONFIGURATION
// ==========================================

const SUPABASE_URL = "https://uvugvcowfwctcyxuiexr.supabase.co";

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2dWd2Y293ZndjdGN5eHVpZXhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY1NDg5MTMsImV4cCI6MjEwMjEyNDkxM30.edYqB1BALpZzYq4plSeHfJTz1stMFmK6YfbxoXk0-Ks";

let supabaseClient = null;

if (window.supabase) {
    supabaseClient = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );
}

// ==========================================
// INITIALIZE AOS ANIMATIONS
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 850,
            offset: 80,
            once: true,
            easing: "ease-out-cubic"
        });
    }

    initHeroSlider();
    initStatsCounter();
    initMobileMenu();
    initFlipCards();
    initServiceButtons();
    initContactForm();
});

// ==========================================
// DYNAMIC HERO SLIDESHOW (AUTO-CHANGING)
// ==========================================
function initHeroSlider() {
    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll("#heroDots .dot");
    const prevBtn = document.getElementById("heroPrevBtn");
    const nextBtn = document.getElementById("heroNextBtn");
    const sliderContainer = document.getElementById("heroSlider");

    if (!slides.length) return;

    let currentSlide = 0;
    let slideInterval = null;
    const intervalTime = 5000; // Auto-changes every 5 seconds

    function goToSlide(index) {
        slides[currentSlide].classList.remove("active");
        if (dots[currentSlide]) dots[currentSlide].classList.remove("active");

        currentSlide = (index + slides.length) % slides.length;

        slides[currentSlide].classList.add("active");
        if (dots[currentSlide]) dots[currentSlide].classList.add("active");
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function startAutoPlay() {
        if (!slideInterval) {
            slideInterval = setInterval(nextSlide, intervalTime);
        }
    }

    function stopAutoPlay() {
        if (slideInterval) {
            clearInterval(slideInterval);
            slideInterval = null;
        }
    }

    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            nextSlide();
            stopAutoPlay();
            startAutoPlay();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            prevSlide();
            stopAutoPlay();
            startAutoPlay();
        });
    }

    dots.forEach((dot, idx) => {
        dot.addEventListener("click", () => {
            goToSlide(idx);
            stopAutoPlay();
            startAutoPlay();
        });
    });

    if (sliderContainer) {
        sliderContainer.addEventListener("mouseenter", stopAutoPlay);
        sliderContainer.addEventListener("mouseleave", startAutoPlay);
    }

    startAutoPlay();
}

// ==========================================
// ANIMATED STATISTICS COUNTER
// ==========================================
function initStatsCounter() {
    const counters = document.querySelectorAll(".stat-counter");
    if (!counters.length) return;

    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                counters.forEach(counter => {
                    const target = +counter.getAttribute("data-target");
                    const duration = 2000; // 2 seconds
                    const increment = target / (duration / 25);

                    let current = 0;
                    const updateTimer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            counter.textContent = target.toLocaleString();
                            clearInterval(updateTimer);
                        } else {
                            counter.textContent = Math.ceil(current).toLocaleString();
                        }
                    }, 25);
                });
            }
        });
    }, { threshold: 0.3 });

    const statsSection = document.querySelector(".stats-counter-section");
    if (statsSection) {
        observer.observe(statsSection);
    }
}

// ==========================================
// 3D FLIP CARD MOBILE TAP SUPPORT
// ==========================================
function initFlipCards() {
    const flipWrappers = document.querySelectorAll(".flip-card-wrapper");

    flipWrappers.forEach(wrapper => {
        wrapper.addEventListener("click", function (e) {
            // Prevent flipping if user clicks on an action button inside back face
            if (e.target.closest("a") || e.target.closest("button")) {
                return;
            }
            wrapper.classList.toggle("is-flipped");
        });
    });
}

// ==========================================
// MOBILE MENU NAVIGATION
// ==========================================
function initMobileMenu() {
    const mobileBtn = document.getElementById("mobileMenuToggle");
    const navbar = document.getElementById("navbar");

    if (mobileBtn && navbar) {
        mobileBtn.addEventListener("click", function () {
            navbar.classList.toggle("mobile-menu-open");
        });

        navbar.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navbar.classList.remove("mobile-menu-open");
            });
        });
    }
}

// ==========================================
// SMART SERVICE SELECTION
// ==========================================
function initServiceButtons() {
    const serviceButtons = document.querySelectorAll(".service-btn");
    const serviceSelect = document.getElementById("service");
    const contactSection = document.getElementById("contact");

    serviceButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            const selectedService = this.getAttribute("data-service");
            if (serviceSelect && selectedService) {
                serviceSelect.value = selectedService;
            }
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}

// ==========================================
// CONTACT & INQUIRY FORM (SUPABASE)
// ==========================================
function initContactForm() {
    const contactForm = document.getElementById("contactForm");

    if (!contactForm) return;

    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonHTML = submitButton.innerHTML;

        submitButton.disabled = true;
        submitButton.innerHTML = "<span>Submitting Inquiry...</span>";

        // Extract Form Values
        const name = document.getElementById("name") ? document.getElementById("name").value.trim() : "";
        const phone = document.getElementById("phone") ? document.getElementById("phone").value.trim() : "";
        const email = document.getElementById("email") ? document.getElementById("email").value.trim() : "";
        const service = document.getElementById("service") ? document.getElementById("service").value : "";
        const destination = document.getElementById("destination") ? document.getElementById("destination").value.trim() : "";
        const travelDate = document.getElementById("travel-date") ? document.getElementById("travel-date").value : "";
        const travellers = document.getElementById("travellers") ? document.getElementById("travellers").value : "";
        const message = document.getElementById("message") ? document.getElementById("message").value.trim() : "";

        // Validation
        if (!name || !phone) {
            alert("Please provide both your Name and Phone Number.");
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonHTML;
            return;
        }

        try {
            if (!supabaseClient) {
                throw new Error("Supabase client is not initialized.");
            }

            const { error } = await supabaseClient
                .from("bookings")
                .insert([
                    {
                        name: name,
                        phone: phone,
                        email: email || null,
                        service: service || null,
                        destination: destination || null,
                        travel_date: travelDate || null,
                        travellers: travellers ? Number(travellers) : null,
                        message: message || null
                    }
                ]);

            if (error) {
                console.error("Supabase Error:", error);
                alert("Enquiry could not be submitted:\n\n" + error.message);
                return;
            }

            alert("✨ Thank you, " + name + "!\nYour luxury travel inquiry has been received. Our senior concierge will contact you shortly.");
            contactForm.reset();

        } catch (err) {
            console.error("Submission Error:", err);
            alert("Something went wrong. Please call or WhatsApp us directly at +91 9990376067.");
        } finally {
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonHTML;
        }
    });
}