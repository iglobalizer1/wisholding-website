// --- Global Data Store & LocalStorage Manager ---
(function() {
    const DEFAULT_DATA = {
        settings: {
            companyName: "Wish Holdings",
            tagline: "Pioneering Sustainable Oceanic Trade & B2B Manufacturing Excellence",
            phone: "+960 333 4455",
            email: "trade@wishholdings.co",
            whatsapp: "+960 777 8899",
            address: "H. Ocean Tower, 4th Floor, Boduthakurufaanu Magu, Malé, Maldives",
            seoTitle: "Wish Holdings | Premium Global Seafood & Sustainable Infrastructure",
            seoDescription: "Wish Holdings Maldives leads the premium tuna exports, sustainable aquaculture, global infrastructure developments, and renewable cold storage solutions.",
            robotsTxt: "User-agent: *\nAllow: /",
            sitemapXml: "https://wishholdings.co/sitemap.xml",
            schemaMarkup: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "HoldingCompany",
                "name": "Wish Holdings",
                "url": "https://wishholdings.co",
                "logo": "https://wishholdings.co/assets/logo.png",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+960-333-4455",
                    "contactType": "customer service"
                }
            }, null, 2)
        },
        products: [
            {
                id: "prod-1",
                name: "Premium Yellowfin Tuna",
                category: "raw-seafood",
                categoryLabel: "Fresh & Frozen Seafood",
                image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800",
                description: "Sourced from the crystal-clear waters of the Maldivian Exclusive Economic Zone using 100% sustainable handline and pole-and-line fishing techniques. Known as the ocean's golden catch, our Yellowfin Tuna is renowned for its firm texture, deep red color, and exquisite flavor, making it a favorite for premium sashimi and high-end retail.",
                specifications: {
                    "Origin": "Maldives (FAO Area 57)",
                    "Catch Method": "100% Pole & Line / Handline",
                    "Grading": "Grade A (Sashimi), Grade B, Grade C",
                    "Freezing Style": "Super Frozen (-60°C) or Fresh Chilled",
                    "Cuts Available": "H&G (Headed & Gutted), Loins (Skin-on/Skinless), Steaks, Saku Blocks",
                    "Certifications": "HACCP, FSSC 22000, Friend of the Sea, Dolphin Safe"
                },
                applications: "Sashimi, Sushi, Premium Steaks, Gourmet Seared Dishes",
                packaging: "Vacuum Packed, Chilled with Dry Ice, or Super-Frozen Chilled Foam Boxes",
                moq: "1 Metric Ton",
                markets: "Japan, United States, European Union, United Kingdom"
            },
            {
                id: "prod-2",
                name: "Maldivian Skipjack Tuna",
                category: "raw-seafood",
                categoryLabel: "Fresh & Frozen Seafood",
                image: "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&q=80&w=800",
                description: "The heart of the Maldivian fishery, skipjack tuna is caught using traditional eco-friendly pole-and-line methods. It offers a rich, meaty flavor profile and is perfectly suited for both canning and traditional preparation. Caught daily and brought immediately to solar-powered cold processing facilities to freeze at maximum freshness.",
                specifications: {
                    "Origin": "Maldives",
                    "Catch Method": "100% Sustainable Pole & Line",
                    "Grading": "Export Grade",
                    "Freezing Style": "Blast Frozen (-40°C) or IQF",
                    "Size Grading": "1.8kg - 3.4kg, 3.4kg+",
                    "Certifications": "HACCP, BRC Food, FDA Registered, Dolphin Safe"
                },
                applications: "Canning, Traditional Katsuobushi (Smoke-Dried), Fish Loins",
                packaging: "Bulk Packed in Weaved Sacks or Cardboard Boxes",
                moq: "5 Metric Tons",
                markets: "European Union, Sri Lanka, Southeast Asia"
            },
            {
                id: "prod-3",
                name: "AQUATUNA™ Gourmet Canned Tuna",
                category: "value-added",
                categoryLabel: "Value-Added Seafood",
                image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800",
                description: "Our premium retail canned tuna line, canned at the source in the Maldives. AQUATUNA™ preserves the delicate taste of premium skipjack and yellowfin tuna in high-quality cold-pressed olive oil, organic sunflower oil, or spring water. Ideal for premium supermarket retail and gourmet distributors.",
                specifications: {
                    "Ingredients": "Tuna, Extra Virgin Olive Oil, Spring Water, Salt",
                    "Cans per Case": "48 Cans",
                    "Can Net Weight": "160g / Drained Weight: 112g",
                    "Shelf Life": "3 Years from Production",
                    "Certifications": "BRC Food, Halal, Kosher, FDA, HACCP"
                },
                applications: "Retail Supermarkets, Salad Preparation, Direct Consumption",
                packaging: "Lithographed Aluminum Cans, Shrink Wrapped Outer Cartons",
                moq: "1 Full Container Load (FCL)",
                markets: "Germany, UK, Australia, UAE, Saudi Arabia"
            },
            {
                id: "prod-4",
                name: "AZURISH™ Premium Fish Sausages",
                category: "value-added",
                categoryLabel: "Value-Added Seafood",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
                description: "An innovative, high-protein snack developed using premium skipjack tuna trim. AZURISH™ is fully cooked, vacuum sealed, and shelf-stable. Seasoned with natural organic Maldivian spices and herbs, it offers a healthy, zero-preservative seafood sausage option for health-conscious consumers.",
                specifications: {
                    "Main Ingredient": "Pure Skipjack Tuna Meat (78%)",
                    "Flavors Available": "Original Sea Salt, Maldivian Chili & Herb, Smoked Paprika",
                    "Weight": "40g per Sausage Link (5 Links per Pack)",
                    "Nutritional Info": "12g Protein, 1.5g Fat, Zero Sugar",
                    "Shelf Life": "12 Months (Ambient Storage)"
                },
                applications: "Ready-To-Eat Snack, High Protein Dietary Supplement",
                packaging: "High-barrier vacuum foil pouch, cardboard retail box",
                moq: "5,000 Retail Boxes",
                markets: "South Korea, Japan, Singapore, Maldives Resorts"
            }
        ],
        careers: [
            {
                id: "job-1",
                title: "Marine Operations Manager",
                department: "Logistics & Fleet",
                location: "Himmafushi Processing Center, Maldives",
                type: "Full-Time",
                description: "We are seeking an experienced Marine Operations Manager to oversee our sustainable tuna harvesting fleet, coordinate dock operations, and ensure safety and compliance with international maritime policies. You will work closely with local fishermen cooperatives and manage our state-of-the-art cold-chain logistics vessels.",
                requirements: [
                    "Bachelor's degree in Marine Science, Logistics, or Maritime Operations.",
                    "Minimum of 5 years experience managing commercial fishing fleet operations.",
                    "Strong familiarity with Maldivian sustainable pole-and-line fishing regulations.",
                    "Certifications in maritime safety (STCW) and food chain logistics."
                ],
                benefits: [
                    "Competitive tax-free executive salary",
                    "On-site premium housing allowance",
                    "Family health insurance coverage",
                    "Annual performance bonus and travel allowance"
                ]
            },
            {
                id: "job-2",
                title: "Seafood Processing Supervisor",
                department: "Manufacturing",
                location: "Kandholhudhoo Factory, Maldives",
                type: "Full-Time",
                description: "Supervise production lines at our solar-powered freezing facility. You will direct operations, monitor throughput speeds, manage safety parameters, and coordinate closely with the laboratory quality assurance team.",
                requirements: [
                    "Degree or diploma in Food Science, Food Technology, or similar.",
                    "HACCP and FSSC Lead Auditor certifications are highly preferred.",
                    "3+ years supervisory experience in an EU-approved fish processing plant."
                ],
                benefits: [
                    "Competitive monthly salary",
                    "Provided meals and accommodation on site",
                    "Full medical coverage",
                    "Continuous professional training and certification sponsorships"
                ]
            }
        ],
        blogs: [
            {
                id: "blog-1",
                title: "Wish Holdings Expands Solar Cold Storage Infrastructure",
                category: "Innovation & Tech",
                author: "Corporate Relations Team",
                date: "2026-06-15",
                summary: "Wish Holdings has successfully completed Phase 2 of its sustainable energy migration, equipping its Himmafushi processing facility with a 1.2MW solar array, drastically reducing carbon emissions.",
                content: "To support our ongoing commitment to sustainability and carbon-neutral operations, Wish Holdings has successfully commissioned a new 1.2 megawatt solar energy infrastructure at our premium Yellowfin processing plant in Himmafushi. The new array supplies up to 85% of the total energy required to power our blast freezers and super-cold logistics facilities. This transition is projected to reduce the company's annual greenhouse gas emissions by over 1,400 metric tons of CO2 equivalent, demonstrating that commercial scale B2B seafood exports can coexist with rigorous environmental standards.",
                image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800"
            },
            {
                id: "blog-2",
                title: "The Importance of Handline Catch in Maldives Marine Conservation",
                category: "Sustainability",
                author: "Dr. Aishath Najeeb, Lead marine scientist",
                date: "2026-05-22",
                summary: "How traditional Maldivian fishing practices preserve fish stocks and guarantee high-grade Yellowfin Tuna export quality.",
                content: "Unlike destructive net trawlers that damage marine ecosystems, Maldives fishing cooperatives have relied on single-hook handline and pole-and-line harvesting for centuries. Wish Holdings is proud to source tuna exclusively from certified handline operations. This method ensures zero by-catch (which means dolphins, turtles, and non-target marine species are unharmed) and prevents overfishing. By catching one tuna at a time, we respect the natural balance of the ocean while delivering a fish that is stress-free at harvest, resulting in superior meat quality and color retention.",
                image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&q=80&w=800"
            }
        ],
        rfqs: [
            {
                id: "rfq-101",
                buyerName: "Hans Müller",
                companyName: "Nordic Seafood Importers GmbH",
                email: "h.mueller@nordicseafood.de",
                phone: "+49 40 123456",
                country: "Germany",
                productName: "Premium Yellowfin Tuna",
                quantity: "15 Metric Tons",
                deliveryDate: "2026-09-01",
                comments: "Looking for super-frozen loins (-60C) vacuum packed. Please provide shipping terms CIF Hamburg.",
                status: "Pending Review",
                submittedAt: "2026-07-13T14:32:00Z"
            }
        ],
        applications: [
            {
                id: "app-201",
                jobTitle: "Marine Operations Manager",
                candidateName: "Robert Vance",
                email: "robert.vance@maritime.com",
                phone: "+1 206 555 0192",
                resumeName: "robert_vance_cv.pdf",
                coverLetter: "Highly interested in relocating to the Maldives and managing the fleet operations.",
                status: "Under Review",
                submittedAt: "2026-07-12T10:15:00Z"
            }
        ],
        contacts: [
            {
                id: "msg-301",
                name: "Sophia Zhang",
                email: "s.zhang@globetrade.cn",
                department: "Sales & Inquiries",
                message: "Interested in establishing a long-term distributorship for AQUATUNA™ canned tuna in Shanghai. Please send wholesale pricing.",
                submittedAt: "2026-07-13T18:05:00Z"
            }
        ],
        analytics: {
            visitors: [1420, 1850, 2100, 2450, 3100, 2900, 3400], // Last 7 days
            inquiriesByCountry: {
                "United States": 45,
                "Japan": 38,
                "Germany": 27,
                "United Kingdom": 22,
                "China": 19,
                "Others": 35
            },
            conversionRates: [2.1, 2.3, 2.5, 2.8, 3.1, 3.0, 3.2]
        }
    };

    // Initialize database
    const storageKey = "wish_holdings_data";
    function loadData() {
        let stored = localStorage.getItem(storageKey);
        if (!stored) {
            localStorage.setItem(storageKey, JSON.stringify(DEFAULT_DATA));
            return DEFAULT_DATA;
        }
        try {
            let data = JSON.parse(stored);
            if (data && data.products) {
                // Ensure default products have fresh image URLs
                DEFAULT_DATA.products.forEach(dp => {
                    let p = data.products.find(item => item.id === dp.id);
                    if (p) p.image = dp.image;
                });
            }
            return data;
        } catch(e) {
            localStorage.setItem(storageKey, JSON.stringify(DEFAULT_DATA));
            return DEFAULT_DATA;
        }
    }

    function saveData(data) {
        localStorage.setItem(storageKey, JSON.stringify(data));
    }

    // Expose Global API
    window.WishDB = {
        getData: loadData,
        saveData: saveData,

        // Settings
        getSettings: function() {
            return loadData().settings;
        },
        updateSettings: function(newSettings) {
            let data = loadData();
            data.settings = { ...data.settings, ...newSettings };
            saveData(data);
            return data.settings;
        },

        // Products
        getProducts: function() {
            return loadData().products;
        },
        getProductById: function(id) {
            return loadData().products.find(p => p.id === id);
        },
        saveProduct: function(product) {
            let data = loadData();
            if (product.id) {
                let index = data.products.findIndex(p => p.id === product.id);
                if (index !== -1) data.products[index] = product;
            } else {
                product.id = "prod-" + Date.now();
                data.products.push(product);
            }
            saveData(data);
            return product;
        },
        deleteProduct: function(id) {
            let data = loadData();
            data.products = data.products.filter(p => p.id !== id);
            saveData(data);
        },

        // Careers
        getCareers: function() {
            return loadData().careers;
        },
        saveCareer: function(career) {
            let data = loadData();
            if (career.id) {
                let index = data.careers.findIndex(c => c.id === career.id);
                if (index !== -1) data.careers[index] = career;
            } else {
                career.id = "job-" + Date.now();
                data.careers.push(career);
            }
            saveData(data);
            return career;
        },
        deleteCareer: function(id) {
            let data = loadData();
            data.careers = data.careers.filter(c => c.id !== id);
            saveData(data);
        },

        // Blogs / News
        getBlogs: function() {
            return loadData().blogs;
        },
        saveBlog: function(blog) {
            let data = loadData();
            if (blog.id) {
                let index = data.blogs.findIndex(b => b.id === blog.id);
                if (index !== -1) data.blogs[index] = blog;
            } else {
                blog.id = "blog-" + Date.now();
                data.blogs.push(blog);
            }
            saveData(data);
            return blog;
        },
        deleteBlog: function(id) {
            let data = loadData();
            data.blogs = data.blogs.filter(b => b.id !== id);
            saveData(data);
        },

        // RFQs
        getRFQs: function() {
            return loadData().rfqs;
        },
        addRFQ: function(rfq) {
            let data = loadData();
            rfq.id = "rfq-" + Math.floor(100 + Math.random() * 900);
            rfq.status = "Pending Review";
            rfq.submittedAt = new Date().toISOString();
            data.rfqs.unshift(rfq);
            saveData(data);
            return rfq;
        },
        updateRFQStatus: function(id, status) {
            let data = loadData();
            let index = data.rfqs.findIndex(r => r.id === id);
            if (index !== -1) {
                data.rfqs[index].status = status;
                saveData(data);
            }
        },

        // Job Applications
        getApplications: function() {
            return loadData().applications;
        },
        addApplication: function(app) {
            let data = loadData();
            app.id = "app-" + Math.floor(200 + Math.random() * 900);
            app.status = "Under Review";
            app.submittedAt = new Date().toISOString();
            data.applications.unshift(app);
            saveData(data);
            return app;
        },
        updateApplicationStatus: function(id, status) {
            let data = loadData();
            let index = data.applications.findIndex(a => a.id === id);
            if (index !== -1) {
                data.applications[index].status = status;
                saveData(data);
            }
        },

        // Contact inquiries
        getContacts: function() {
            return loadData().contacts;
        },
        addContact: function(contact) {
            let data = loadData();
            contact.id = "msg-" + Math.floor(300 + Math.random() * 900);
            contact.submittedAt = new Date().toISOString();
            data.contacts.unshift(contact);
            saveData(data);
            return contact;
        },

        // Analytics
        getAnalytics: function() {
            return loadData().analytics;
        }
    };
})();
