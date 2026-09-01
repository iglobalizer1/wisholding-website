document.addEventListener("DOMContentLoaded", function() {
    injectGlobalHeader();
    injectGlobalFooter();
    injectWhatsAppButton();
    initScrollInteractions();
    initScrollReveal();
    initPagePreloader();
    highlightActiveLink();
    initHeroVideoLoop();
});

// --- Floating WhatsApp Button Injector ---
function injectWhatsAppButton() {
    if (document.getElementById("whatsapp-float-btn")) return;
    const waBtn = document.createElement("a");
    waBtn.id = "whatsapp-float-btn";
    waBtn.href = "https://wa.me/9609991095";
    waBtn.target = "_blank";
    waBtn.rel = "noopener noreferrer";
    waBtn.setAttribute("aria-label", "Contact Us on WhatsApp");
    waBtn.innerHTML = '<i class="fab fa-whatsapp"></i><span class="wa-tooltip">Chat with Export Desk</span>';
    document.body.appendChild(waBtn);
}

// --- Dynamic Header Injection (Luxury Swiss/Oceanic Navigation) ---
function injectGlobalHeader() {
    const header = document.createElement("header");
    header.className = "site-header";
    header.id = "global-header";

    const currentFile = window.location.pathname.split("/").pop() || "index.html";

    header.innerHTML = `
        <div class="scroll-progress" id="scroll-progress-bar"></div>
        <div class="container nav-container">
            <a href="index.html" class="brand-logo" aria-label="Wish Holdings Home">
                <img src="images/logo_dark.png" alt="Wish Holdings - Hold Your Wish">
            </a>
            
            <nav class="nav-menu" id="nav-menu-container">
                <!-- 1. Products -->
                <div class="nav-item-dropdown">
                    <a href="products.html" class="nav-link ${currentFile.includes('yellowfin') || currentFile.includes('skipjack') || currentFile === 'products.html' ? 'active' : ''}">
                        Products <i class="fas fa-chevron-down nav-chevron"></i>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="yellowfin.html" class="dropdown-item-rich">
                                <div class="nav-icon-box"><i class="fas fa-fish"></i></div>
                                <div>
                                    <div class="dropdown-title">Yellowfin Tuna</div>
                                    <div class="dropdown-desc">Fresh sashimi-grade, line-caught</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="skipjack.html" class="dropdown-item-rich">
                                <div class="nav-icon-box"><i class="fas fa-snowflake"></i></div>
                                <div>
                                    <div class="dropdown-title">Skipjack Tuna</div>
                                    <div class="dropdown-desc">Pole-and-line caught frozen whole round</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="products.html" class="dropdown-item-rich">
                                <div class="nav-icon-box"><i class="fas fa-boxes-stacked"></i></div>
                                <div>
                                    <div class="dropdown-title">All Products & Catalog</div>
                                    <div class="dropdown-desc">Full specifications, cuts & master cartons</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- 2. Operations & QA -->
                <div class="nav-item-dropdown">
                    <a href="processing.html" class="nav-link ${currentFile === 'processing.html' || currentFile === 'manufacturing.html' ? 'active' : ''}">
                        Operations & QA <i class="fas fa-chevron-down nav-chevron"></i>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="processing.html" class="dropdown-item-rich">
                                <div class="nav-icon-box"><i class="fas fa-industry"></i></div>
                                <div>
                                    <div class="dropdown-title">Processing & Cold Chain</div>
                                    <div class="dropdown-desc">Himmafushi Plant & -60°C cryogenic storage</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="manufacturing.html" class="dropdown-item-rich">
                                <div class="nav-icon-box"><i class="fas fa-microscope"></i></div>
                                <div>
                                    <div class="dropdown-title">Quality & Compliance</div>
                                    <div class="dropdown-desc">HACCP, ISO 22000 & FDA lab testing</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="sustainability.html" class="dropdown-item-rich">
                                <div class="nav-icon-box"><i class="fas fa-leaf"></i></div>
                                <div>
                                    <div class="dropdown-title">Traceability & Sustainability</div>
                                    <div class="dropdown-desc">100% vessel GPS & catch validation</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- 3. Wish Harbour & Vision -->
                <div class="nav-item-dropdown">
                    <a href="wish-harbour.html" class="nav-link ${currentFile === 'wish-harbour.html' || currentFile === 'way-forward.html' ? 'active' : ''}">
                        Wish Harbour <i class="fas fa-chevron-down nav-chevron"></i>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="wish-harbour.html" class="dropdown-item-rich">
                                <div class="nav-icon-box"><i class="fas fa-anchor"></i></div>
                                <div>
                                    <div class="dropdown-title">Three Islands Ecosystem</div>
                                    <div class="dropdown-desc">Himmafushi, Kandholhudhoo, Kanandhoo</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="way-forward.html" class="dropdown-item-rich">
                                <div class="nav-icon-box"><i class="fas fa-compass"></i></div>
                                <div>
                                    <div class="dropdown-title">Future Vision Roadmap</div>
                                    <div class="dropdown-desc">Multi-island expansion & eco-resort villas</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- 4. Global Markets & B2B -->
                <div class="nav-item-dropdown">
                    <a href="markets.html" class="nav-link ${currentFile === 'markets.html' || currentFile === 'portal.html' || currentFile === 'downloads.html' || currentFile === 'invest.html' ? 'active' : ''}">
                        Global Markets <i class="fas fa-chevron-down nav-chevron"></i>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="markets.html" class="dropdown-item-rich">
                                <div class="nav-icon-box"><i class="fas fa-globe-americas"></i></div>
                                <div>
                                    <div class="dropdown-title">Export Destinations</div>
                                    <div class="dropdown-desc">Direct transit to US, EU, UK & Japan</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="invest.html" class="dropdown-item-rich">
                                <div class="nav-icon-box"><i class="fas fa-chart-line"></i></div>
                                <div>
                                    <div class="dropdown-title">Investor Relations</div>
                                    <div class="dropdown-desc">Infrastructure growth & ESG equity</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="portal.html" class="dropdown-item-rich">
                                <div class="nav-icon-box"><i class="fas fa-handshake"></i></div>
                                <div>
                                    <div class="dropdown-title">B2B Buyer Portal</div>
                                    <div class="dropdown-desc">Direct RFQs & distributor agreements</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="downloads.html" class="dropdown-item-rich">
                                <div class="nav-icon-box"><i class="fas fa-file-pdf"></i></div>
                                <div>
                                    <div class="dropdown-title">Download Centre</div>
                                    <div class="dropdown-desc">Product spec sheets & capability deck</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- 5. Company -->
                <div class="nav-item-dropdown">
                    <a href="about.html" class="nav-link ${currentFile === 'about.html' || currentFile === 'gallery.html' || currentFile === 'careers.html' ? 'active' : ''}">
                        Company <i class="fas fa-chevron-down nav-chevron"></i>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="about.html" class="dropdown-item-rich">
                                <div class="nav-icon-box"><i class="fas fa-building"></i></div>
                                <div>
                                    <div class="dropdown-title">About Wish Holdings</div>
                                    <div class="dropdown-desc">Our Maldivian ocean heritage & story</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="gallery.html" class="dropdown-item-rich">
                                <div class="nav-icon-box"><i class="fas fa-images"></i></div>
                                <div>
                                    <div class="dropdown-title">Media & Operations Gallery</div>
                                    <div class="dropdown-desc">Vessels, harbour islands & processing</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="careers.html" class="dropdown-item-rich">
                                <div class="nav-icon-box"><i class="fas fa-user-tie"></i></div>
                                <div>
                                    <div class="dropdown-title">Careers</div>
                                    <div class="dropdown-desc">Join our growing oceanic team</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- CTA Button -->
                <a href="contact.html" class="nav-cta-btn">
                    <i class="fas fa-paper-plane" style="font-size:0.8rem;"></i> Request Quote
                </a>
            </nav>
            
            <div class="nav-toggle" id="nav-menu-toggle" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    `;

    document.body.prepend(header);

    // Mobile nav toggle
    const toggle = document.getElementById("nav-menu-toggle");
    const navMenu = document.getElementById("nav-menu-container");
    if (toggle && navMenu) {
        toggle.addEventListener("click", (e) => {
            e.stopPropagation();
            navMenu.classList.toggle("active");
            toggle.innerHTML = navMenu.classList.contains("active") ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }

    // Touch-friendly Dropdowns on Mobile
    const dropdowns = document.querySelectorAll(".nav-item-dropdown");
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector(".nav-link");
        if (link) {
            link.addEventListener("click", (e) => {
                if (window.innerWidth <= 1200) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Close other dropdowns
                    dropdowns.forEach(d => {
                        if (d !== dropdown) d.classList.remove("active");
                    });
                    
                    dropdown.classList.toggle("active");
                }
            });
        }
    });

    // Close mobile menu/dropdowns when tapping outside
    document.addEventListener("click", () => {
        if (window.innerWidth <= 1200 && navMenu && navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
            if (toggle) toggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
        dropdowns.forEach(d => d.classList.remove("active"));
    });

    // Scroll header background transition
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

// --- Dynamic Footer Injection ---
function injectGlobalFooter() {
    const footer = document.createElement("footer");
    footer.className = "site-footer";
    
    const settings = window.WishDB ? window.WishDB.getSettings() : {
        email: "trade@wishholdings.co",
        phone: "+960 333 4455",
        address: "Maldives"
    };

    footer.innerHTML = `
        <div class="container">
            <div class="footer-grid">
                <div>
                    <div class="brand-logo footer-logo">
                        <img src="images/logo_white.png" alt="Wish Holdings Logo">
                    </div>
                    <p class="footer-text">
                        A premium international holding company coordinating sustainable oceanic trade, industrial seafood processing, green energy infrastructure, and marine logistics.
                    </p>
                    <div class="footer-socials">
                        <a href="https://linkedin.com" target="_blank" class="social-icon" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://facebook.com" target="_blank" class="social-icon" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com" target="_blank" class="social-icon" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="https://instagram.com" target="_blank" class="social-icon" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="https://youtube.com" target="_blank" class="social-icon" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                
                <div>
                    <h4 class="footer-title">Corporate Divisions</h4>
                    <ul class="footer-links">
                        <li><a href="processing.html">Seafood Processing</a></li>
                        <li><a href="manufacturing.html">Quality Assurance & Labs</a></li>
                        <li><a href="wish-harbour.html">Wish Harbour Islands</a></li>
                        <li><a href="sustainability.html">Sustainability & CSR</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="footer-title">B2B & Partners</h4>
                    <ul class="footer-links">
                        <li><a href="portal.html">B2B RFQ & Distributor Hub</a></li>
                        <li><a href="downloads.html">Download Centre</a></li>
                        <li><a href="invest.html">Investor Relations</a></li>
                        <li><a href="careers.html">Corporate Careers</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="footer-title">Global Headquarters</h4>
                    <ul class="footer-links" style="font-size: 0.9rem;">
                        <li style="margin-bottom: var(--spacing-sm);">
                            <i class="fas fa-map-marker-alt text-gold" style="margin-right: 8px;"></i>
                            Dubai, UAE / Himmafushi, Maldives
                        </li>
                        <li style="margin-bottom: var(--spacing-xs);">
                            <i class="fas fa-phone-alt text-gold" style="margin-right: 8px;"></i>
                            +960 999-1095
                        </li>
                        <li>
                            <i class="fas fa-envelope text-gold" style="margin-right: 8px;"></i>
                            info@wishholdings.co
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <div>
                    &copy; ${new Date().getFullYear()} Wish Holdings Pvt Ltd. All Rights Reserved. Sourced Sustainably from the Maldives.
                </div>
                <div style="display: flex; gap: var(--spacing-md);">
                    <a href="sustainability.html">Sustainability</a>
                    <a href="downloads.html">Downloads</a>
                    <a href="contact.html">Contact</a>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(footer);
}

// --- Scroll Indicator & Sticky Functions ---
function initScrollInteractions() {
    const progressBar = document.getElementById("scroll-progress-bar");
    window.addEventListener("scroll", () => {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight > 0 && progressBar) {
            const scrollPercent = (window.scrollY / docHeight) * 100;
            progressBar.style.width = scrollPercent + "%";
        }
    });
}

// --- Dynamic Intersection Observer Scroll Reveal ---
function initScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal:not(.active)");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach(el => observer.observe(el));
}

// Expose globally for dynamic components
window.initScrollReveal = initScrollReveal;

// --- Preloader System ---
function initPagePreloader() {
    if (document.readyState === "complete") {
        return;
    }

    const preloader = document.createElement("div");
    preloader.id = "preloader";
    preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #FFFFFF;
        z-index: 99999;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: opacity var(--transition-normal), visibility var(--transition-normal);
    `;
    preloader.innerHTML = `
        <div style="width: 48px; height: 48px; border: 3px solid rgba(2, 132, 199, 0.15); border-top-color: var(--color-accent); border-radius: 50%; animation: spin 1s infinite linear;"></div>
        <div style="margin-top: 18px; font-family: var(--font-heading); font-weight: 700; letter-spacing: 2px; font-size: 0.82rem; text-transform: uppercase; color: var(--color-logo-navy);">WISH HOLDINGS</div>
        <style>
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        </style>
    `;
    document.body.appendChild(preloader);

    const fadeOut = () => {
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
        setTimeout(() => preloader.remove(), 400);
    };

    window.addEventListener("load", fadeOut);

    // Fallback if load takes too long
    setTimeout(fadeOut, 600);
}

// --- Highlight Current Active Navigation Link ---
function highlightActiveLink() {
    const currentFile = window.location.pathname.split("/").pop() || "index.html";
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentFile) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

// --- Hero Video Seamless Loop Controller ---
function initHeroVideoLoop() {
    const heroVideos = document.querySelectorAll(".hero-video-container video, #hero-bg-video, #hero-feature-video, .hero-video-card video");
    heroVideos.forEach(video => {
        video.muted = true;
        video.defaultMuted = true;
        video.loop = true;
        video.playsInline = true;
        video.setAttribute("playsinline", "");
        video.setAttribute("webkit-playsinline", "");
        video.setAttribute("muted", "");
        video.setAttribute("loop", "");

        const playVideo = () => {
            if (video.paused) {
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.catch(() => {
                        const enableAutoplay = () => {
                            video.play();
                            document.removeEventListener("click", enableAutoplay);
                            document.removeEventListener("touchstart", enableAutoplay);
                            document.removeEventListener("scroll", enableAutoplay);
                        };
                        document.addEventListener("click", enableAutoplay, { once: true });
                        document.addEventListener("touchstart", enableAutoplay, { once: true });
                        document.addEventListener("scroll", enableAutoplay, { once: true });
                    });
                }
            }
        };

        // Fallback to force restart loop if browser stops at end
        video.addEventListener("ended", () => {
            video.currentTime = 0;
            video.play();
        });

        // Trigger playback immediately, on window load, and on tab visibility restore
        playVideo();
        window.addEventListener("load", playVideo);
        document.addEventListener("visibilitychange", () => {
            if (!document.hidden) {
                playVideo();
            }
        });
    });
}

// --- FontAwesome Icon Loader helper ---
(function() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    document.head.appendChild(link);
})();

