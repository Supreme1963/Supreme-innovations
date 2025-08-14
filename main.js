document.addEventListener('DOMContentLoaded', function() {
            const navLinks = document.querySelectorAll('.nav-links a.page-link');
            const pageSections = document.querySelectorAll('.page-section');
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-links');
            const allPageLinks = document.querySelectorAll('.page-link');

            // --- Page Navigation Logic ---
            const showPage = (pageId) => {
                // Hide all sections
                pageSections.forEach(section => {
                    section.classList.remove('active');
                });

                // Show the target section
                const targetSection = document.querySelector(pageId);
                if (targetSection) {
                    targetSection.classList.add('active');
                }

                // Update active state on nav links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === pageId) {
                        link.classList.add('active');
                    }
                });
            };

            allPageLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    const pageId = this.getAttribute('href');
                    
                    // Only prevent default for internal page links
                    if (pageId.startsWith('#')) {
                        e.preventDefault();
                        showPage(pageId);
                        
                        // Close mobile menu on link click
                        if (navMenu.classList.contains('active')) {
                            hamburger.classList.remove('active');
                            navMenu.classList.remove('active');
                        }
                        
                        // Scroll to top of the page
                        window.scrollTo(0, 0);
                    }
                });
            });

            // --- Hamburger Menu Logic ---
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
            
            // --- Initial Page Load ---
            // Show the page corresponding to the hash in the URL, or default to home
            const initialHash = window.location.hash || '#home';
            showPage(initialHash);
        });