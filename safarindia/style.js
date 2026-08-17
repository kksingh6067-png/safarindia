```css
/* =====================================================
   GLOBAL RESET
===================================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}


body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.6;
    color: #222;
    background: #fff;
}


img {
    width: 100%;
    display: block;
}


a {
    text-decoration: none;
    color: inherit;
}


button,
input,
textarea {
    font-family: inherit;
}


.container {
    width: 90%;
    max-width: 1200px;
    margin: auto;
}


.section {
    padding: 90px 0;
}


/* =====================================================
   HEADER / NAVBAR
===================================================== */

.header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: #ffffff;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
}


.nav-container {
    min-height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
}


.logo a {
    font-size: 25px;
    font-weight: 800;
    color: #172033;
}


.logo span {
    color: #f28c28;
}


.navbar {
    display: flex;
    align-items: center;
    gap: 28px;
}


.navbar a {
    font-size: 15px;
    font-weight: 600;
    color: #333;
    transition: 0.3s ease;
}


.navbar a:hover {
    color: #f28c28;
}


.nav-btn {
    padding: 12px 22px;
    border-radius: 30px;
    background: #f28c28;
    color: #fff;
    font-weight: 700;
    transition: 0.3s ease;
}


.nav-btn:hover {
    background: #d96f0c;
    transform: translateY(-2px);
}


/* =====================================================
   BUTTONS
===================================================== */

.btn {
    display: inline-block;
    padding: 14px 28px;
    border-radius: 5px;
    font-weight: 700;
    transition: 0.3s ease;
    cursor: pointer;
    border: none;
}


.primary-btn {
    background: #f28c28;
    color: #fff;
}


.primary-btn:hover {
    background: #d96f0c;
    transform: translateY(-2px);
}


.secondary-btn {
    background: #fff;
    color: #172033;
    border: 2px solid #fff;
}


.secondary-btn:hover {
    background: transparent;
    color: #fff;
}


/* =====================================================
   HERO SECTION
===================================================== */

.hero {
    position: relative;
    min-height: 650px;
    display: flex;
    align-items: center;
    background:
        linear-gradient(
            rgba(0, 0, 0, 0.55),
            rgba(0, 0, 0, 0.55)
        ),
        url("images/hero.jpg") center/cover no-repeat;
}


.hero-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.15);
}


.hero-container {
    position: relative;
    z-index: 2;
}


.hero-content {
    max-width: 700px;
    color: #fff;
}


.hero-tagline {
    margin-bottom: 15px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 3px;
}


.hero h1 {
    font-size: clamp(42px, 6vw, 72px);
    line-height: 1.08;
    margin-bottom: 25px;
}


.hero h1 span {
    color: #f28c28;
}


.hero-text {
    max-width: 620px;
    font-size: 18px;
    margin-bottom: 32px;
}


.hero-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}


/* =====================================================
   FEATURES
===================================================== */

.features {
    padding: 35px 0;
    background: #fff;
}


.features-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}


.feature-card {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 22px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.07);
}


.feature-icon {
    width: 55px;
    height: 55px;
    flex-shrink: 0;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #fff1df;
    font-size: 25px;
}


.feature-card h3 {
    font-size: 16px;
    margin-bottom: 4px;
}


.feature-card p {
    color: #777;
    font-size: 13px;
}


/* =====================================================
   SECTION HEADING
===================================================== */

.section-heading {
    text-align: center;
    margin-bottom: 55px;
}


.section-heading p {
    color: #f28c28;
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 2px;
    margin-bottom: 8px;
}


.section-heading h2 {
    color: #172033;
    font-size: clamp(30px, 4vw, 45px);
    line-height: 1.2;
}


.section-heading span {
    display: block;
    width: 65px;
    height: 4px;
    margin: 18px auto 0;
    border-radius: 5px;
    background: #f28c28;
}


/* =====================================================
   ABOUT
===================================================== */

.about {
    background: #f8f9fb;
}


.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 60px;
}


.about-image img {
    height: 500px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}


.about-content .small-heading,
.why-content .small-heading {
    color: #f28c28;
    font-weight: 800;
    letter-spacing: 2px;
    font-size: 13px;
    margin-bottom: 10px;
}


.about-content h2,
.why-content h2 {
    color: #172033;
    font-size: 40px;
    line-height: 1.2;
    margin-bottom: 20px;
}


.about-content p {
    color: #666;
    margin-bottom: 18px;
}


.about-points {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin: 25px 0 30px;
}


.about-points div {
    font-weight: 600;
    color: #333;
}


/* =====================================================
   PACKAGES
===================================================== */

.packages {
    background: #fff;
}


.packages-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
}


.package-card {
    overflow: hidden;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
    transition: 0.3s ease;
}


.package-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.14);
}


.package-image {
    position: relative;
    overflow: hidden;
}


.package-image img {
    height: 230px;
    object-fit: cover;
    transition: 0.5s ease;
}


.package-card:hover .package-image img {
    transform: scale(1.06);
}


.package-badge {
    position: absolute;
    top: 15px;
    left: 15px;
    padding: 7px 13px;
    border-radius: 20px;
    background: #f28c28;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
}


.package-content {
    padding: 25px;
}


.package-location {
    color: #f28c28;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 8px;
}


.package-content h3 {
    color: #172033;
    font-size: 23px;
    margin-bottom: 10px;
}


.package-content p:not(.package-location) {
    color: #777;
    font-size: 14px;
    margin-bottom: 18px;
}


.package-content a {
    color: #f28c28;
    font-weight: 700;
}


/* =====================================================
   SERVICES
===================================================== */

.services {
    background: #f8f9fb;
}


.services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}


.service-card {
    padding: 35px 28px;
    background: #fff;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.06);
    transition: 0.3s ease;
}


.service-card:hover {
    transform: translateY(-7px);
}


.service-icon {
    width: 70px;
    height: 70px;
    margin: 0 auto 20px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #fff1df;
    font-size: 30px;
}


.service-card h3 {
    color: #172033;
    margin-bottom: 12px;
    font-size: 21px;
}


.service-card p {
    color: #777;
    font-size: 14px;
}


/* =====================================================
   WHY CHOOSE US
===================================================== */

.why-us {
    background: #fff;
}


.why-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}


.why-content > p:not(.small-heading) {
    color: #666;
    margin-bottom: 25px;
}


.why-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}


.why-item {
    display: flex;
    gap: 18px;
    align-items: flex-start;
}


.why-item > span {
    min-width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #fff1df;
    color: #f28c28;
    font-weight: 800;
}


.why-item h3 {
    color: #172033;
    margin-bottom: 4px;
}


.why-item p {
    color: #777;
    font-size: 14px;
}


.why-image img {
    height: 500px;
    object-fit: cover;
    border-radius: 12px;
}


/* =====================================================
   GALLERY
===================================================== */

.gallery {
    background: #f8f9fb;
}


.gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
}


.gallery-item {
    overflow: hidden;
    height: 260px;
    border-radius: 8px;
}


.gallery-item img {
    height: 100%;
    object-fit: cover;
    transition: 0.5s ease;
}


.gallery-item:hover img {
    transform: scale(1.08);
}


/* =====================================================
   CALL TO ACTION
===================================================== */

.cta {
    padding: 70px 0;
    background:
        linear-gradient(
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)
        ),
        url("images/cta.jpg") center/cover no-repeat;
    color: #fff;
}


.cta-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
}


.cta-content p {
    color: #f28c28;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 2px;
    margin-bottom: 8px;
}


.cta-content h2 {
    font-size: 42px;
    line-height: 1.2;
    margin-bottom: 10px;
}


.cta-content span {
    color: #ddd;
}


.cta-btn {
    flex-shrink: 0;
    background: #f28c28;
    color: #fff;
}


.cta-btn:hover {
    background: #d96f0c;
}


/* =====================================================
   CONTACT
===================================================== */

.contact {
    background: #fff;
}


.contact-grid {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 60px;
    align-items: start;
}


.contact-info h3 {
    color: #172033;
    font-size: 32px;
    margin-bottom: 15px;
}


.contact-info > p {
    color: #777;
    margin-bottom: 30px;
}


.contact-detail {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 22px;
}


.contact-icon {
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #fff1df;
    font-size: 21px;
}


.contact-detail h4 {
    color: #172033;
    margin-bottom: 2px;
}


.contact-detail p {
    color: #777;
    font-size: 14px;
}


.social-links {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 30px;
}


.social-links a {
    padding: 9px 14px;
    border-radius: 5px;
    background: #f3f3f3;
    font-size: 13px;
    font-weight: 700;
    transition: 0.3s ease;
}


.social-links a:hover {
    background: #f28c28;
    color: #fff;
}


/* =====================================================
   CONTACT FORM
===================================================== */

.contact-form {
    padding: 35px;
    background: #f8f9fb;
    border-radius: 10px;
}


.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
}


.form-group {
    margin-bottom: 20px;
}


.form-group label {
    display: block;
    margin-bottom: 7px;
    color: #333;
    font-size: 14px;
    font-weight: 700;
}


.form-group input,
.form-group textarea {
    width: 100%;
    padding: 14px 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    outline: none;
    background: #fff;
    color: #333;
    transition: 0.3s ease;
}


.form-group input:focus,
.form-group textarea:focus {
    border-color: #f28c28;
    box-shadow: 0 0 0 3px rgba(242, 140, 40, 0.1);
}


.form-group textarea {
    resize: vertical;
}


/* =====================================================
   FOOTER
===================================================== */

.footer {
    background: #172033;
    color: #fff;
}


.footer-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
    gap: 40px;
    padding: 70px 0 50px;
}


.footer-logo {
    font-size: 24px;
    font-weight: 800;
    margin-bottom: 15px;
}


.footer-logo span {
    color: #f28c28;
}


.brand-column p {
    max-width: 330px;
    color: #b8bec9;
    font-size: 14px;
}


.footer-column {
    display: flex;
    flex-direction: column;
    gap: 10px;
}


.footer-column h3 {
    margin-bottom: 10px;
    font-size: 18px;
}


.footer-column a,
.footer-column p {
    color: #b8bec9;
    font-size: 14px;
    transition: 0.3s ease;
}


.footer-column a:hover {
    color: #f28c28;
}


.footer-social {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
}


.footer-social a {
    padding: 7px 11px;
    border: 1px solid #3a4353;
    border-radius: 4px;
}


.footer-btn {
    display: inline-block;
    width: fit-content;
    margin-top: 10px;
    padding: 10px 18px;
    border-radius: 5px;
    background: #f28c28;
    color: #fff !important;
}


.footer-btn:hover {
    background: #d96f0c;
}


/* =====================================================
   FOOTER BOTTOM
===================================================== */

.footer-bottom {
    border-top: 1px solid #30394a;
}


.footer-bottom-content {
    min-height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}


.footer-bottom p {
    color: #9ea6b4;
    font-size: 13px;
}


/* =====================================================
   BACK TO TOP
===================================================== */

.back-to-top {
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 900;
    width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #f28c28;
    color: #fff;
    font-size: 22px;
    font-weight: 700;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}


.back-to-top:hover {
    background: #d96f0c;
}


/* =====================================================
   TABLET
===================================================== */

@media (max-width: 992px) {


    .navbar {
        gap: 15px;
    }


    .features-grid {
        grid-template-columns: repeat(2, 1fr);
    }


    .packages-grid {
        grid-template-columns: repeat(2, 1fr);
    }


    .services-grid {
        grid-template-columns: repeat(2, 1fr);
    }


    .about-grid,
    .why-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }


    .contact-grid {
        grid-template-columns: 1fr;
    }


    .footer-grid {
        grid-template-columns: repeat(2, 1fr);
    }


    .cta-container {
        flex-direction: column;
        align-items: flex-start;
    }

}

/* ==========================================
   MOBILE MENU - SK TOUR & TRAVEL
========================================== */

.mobile-menu-btn {
    display: none;
    border: none;
    background: #f28c28;
    color: white;
    font-size: 24px;
    width: 44px;
    height: 44px;
    border-radius: 6px;
    cursor: pointer;
}


/* ==========================================
   MOBILE SCREEN
========================================== */

@media (max-width: 768px) {

    .nav-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .mobile-menu-btn {
        display: block;
        order: 3;
    }

    .navbar {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: white;
        padding: 20px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.12);
        z-index: 999;
    }

    .navbar.mobile-active {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .navbar a {
        display: block;
        width: 100%;
        text-align: center;
        padding: 10px;
    }

    .book-now {
        display: none;
    }

}

    