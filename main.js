// Condominium Management System - Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // DOM element references
    const cards = document.querySelectorAll('.card');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close');

    // Content for each section
    const sectionContent = {
        about: {
            title: 'What is the Condominium Management System?',
            content: `
                <h2>What is the Condominium Management System?</h2>
                <p>This comprehensive system allows residents and condominium administrators to efficiently manage all activities and services of the residential complex.</p>
                
                <h3>Main Features:</h3>
                <ul>
                    <li><strong>Common Area Reservations:</strong> Sports courts, swimming pool, community hall, barbecue areas</li>
                    <li><strong>Event Management:</strong> Announcements, community activities, meetings</li>
                    <li><strong>Administration:</strong> Access control, maintenance, payments</li>
                    <li><strong>Communication:</strong> Important notices, automatic notifications</li>
                </ul>
                
                <h3>Benefits:</h3>
                <ul>
                    <li>Reduction of conflicts over space usage</li>
                    <li>Greater transparency in administration</li>
                    <li>Effective communication between residents</li>
                    <li>Optimization of resource usage</li>
                </ul>
            `
        },
        tech: {
            title: 'Tech Stack',
            content: `
                <h2>Tech Stack</h2>
                <p>The system is built with modern web technologies to ensure performance, scalability, and ease of maintenance.</p>
                
                <h3>Frontend:</h3>
                <ul>
                    <li><strong>HTML5:</strong> Semantic and accessible structure</li>
                    <li><strong>CSS3:</strong> Responsive design with Grid and Flexbox</li>
                    <li><strong>JavaScript ES6+:</strong> Modern application logic</li>
                    <li><strong>Web APIs:</strong> LocalStorage, Fetch, Notifications</li>
                </ul>
                
                <h3>Technical Features:</h3>
                <ul>
                    <li>Responsive design for all devices</li>
                    <li>Progressive Web App (PWA) ready</li>
                    <li>Performance optimization</li>
                    <li>WCAG 2.1 accessibility</li>
                </ul>
                
                <h3>Future Implementations:</h3>
                <ul>
                    <li>Backend with Node.js/Express</li>
                    <li>MongoDB/PostgreSQL database</li>
                    <li>JWT authentication</li>
                    <li>Complete REST API</li>
                </ul>
            `
        },
        features: {
            title: 'Key Features',
            content: `
                <h2>Key Features</h2>
                <p>Discover all the functionalities that make this system a complete solution for condominium management.</p>
                
                <h3>🏊‍♀️ Reservation System</h3>
                <ul>
                    <li>Swimming pool reservation with specific schedules</li>
                    <li>Sports courts (tennis, soccer, basketball)</li>
                    <li>Community hall for private events</li>
                    <li>Barbecue and recreation areas</li>
                    <li>Integrated calendar with availability</li>
                </ul>
                
                <h3>📅 Event Management</h3>
                <ul>
                    <li>Community event publishing</li>
                    <li>Registration system</li>
                    <li>Automatic notifications</li>
                    <li>Event photo gallery</li>
                </ul>
                
                <h3>🏢 Administration</h3>
                <ul>
                    <li>Administrator control panel</li>
                    <li>User and permission management</li>
                    <li>Usage reports and statistics</li>
                    <li>Maintenance control</li>
                </ul>
                
                <h3>📱 User Experience</h3>
                <ul>
                    <li>Intuitive and modern interface</li>
                    <li>Responsive design</li>
                    <li>Push notifications</li>
                    <li>Basic offline mode</li>
                </ul>
            `
        },
        installation: {
            title: 'Installation Guide',
            content: `
                <h2>Installation Guide</h2>
                <p>Follow these steps to set up the system in your development environment.</p>
                
                <h3>📋 Prerequisites</h3>
                <ul>
                    <li>Modern web browser (Chrome, Firefox, Safari, Edge)</li>
                    <li>Code editor (VS Code recommended)</li>
                    <li>Local web server (Live Server, XAMPP, etc.)</li>
                </ul>
                
                <h3>🚀 Basic Installation</h3>
                <ol>
                    <li><strong>Clone or download</strong> the project files</li>
                    <li><strong>Open</strong> the directory in your code editor</li>
                    <li><strong>Run</strong> a local server pointing to index.html</li>
                    <li><strong>Access</strong> from the browser (e.g.: http://localhost:3000)</li>
                </ol>
                
                <h3>⚙️ Advanced Configuration</h3>
                <ol>
                    <li>Customize colors in style.css</li>
                    <li>Modify content in main.js</li>
                    <li>Add new sections as needed</li>
                    <li>Integrate with existing backend systems</li>
                </ol>
                
                <h3>🔧 Local Development</h3>
                <p>For active development, we recommend using a server with auto-reload:</p>
                <ul>
                    <li>VS Code Live Server extension</li>
                    <li>Node.js http-server</li>
                    <li>Python SimpleHTTPServer</li>
                </ul>
            `
        },
        troubleshooting: {
            title: 'Troubleshooting',
            content: `
                <h2>Troubleshooting</h2>
                <p>Find quick solutions to the most common system problems.</p>
                
                <h3>🔧 Display Issues</h3>
                <ul>
                    <li><strong>Cards not displaying correctly:</strong> Verify that style.css is loading</li>
                    <li><strong>Fonts not loading:</strong> Check Google Fonts connection</li>
                    <li><strong>Broken mobile design:</strong> Ensure viewport meta tag is present</li>
                </ul>
                
                <h3>⚡ Functionality Issues</h3>
                <ul>
                    <li><strong>Modal won't open:</strong> Check browser console for JavaScript errors</li>
                    <li><strong>Buttons not responding:</strong> Verify that main.js is loading</li>
                    <li><strong>Forms not working:</strong> Check event listeners</li>
                </ul>
                
                <h3>📱 Compatibility Issues</h3>
                <ul>
                    <li><strong>Internet Explorer:</strong> Not compatible, use modern browser</li>
                    <li><strong>Old browsers:</strong> Update to recent version</li>
                    <li><strong>JavaScript disabled:</strong> Enable JavaScript in settings</li>
                </ul>
                
                <h3>🐛 Debugging</h3>
                <ol>
                    <li>Open developer tools (F12)</li>
                    <li>Check console for errors</li>
                    <li>Verify all files load in Network tab</li>
                    <li>Test in incognito mode</li>
                </ol>
                
                <h3>📞 Getting Help</h3>
                <p>If the problem persists:</p>
                <ul>
                    <li>Review complete documentation</li>
                    <li>Check server logs</li>
                    <li>Contact development team</li>
                </ul>
            `
        },
        faq: {
            title: 'Frequently Asked Questions',
            content: `
                <h2>Frequently Asked Questions</h2>
                <p>Answers to the most common questions about the system.</p>
                
                <h3>🏠 About the System</h3>
                <div style="margin-bottom: 2rem;">
                    <strong>Can multiple condominiums use the same system?</strong><br>
                    Yes, the system is designed to be multi-tenant. Each condominium will have its own instance and separate data.
                </div>
                
                <div style="margin-bottom: 2rem;">
                    <strong>Does it work without internet connection?</strong><br>
                    Partially. Basic viewing functions work offline, but reservations and events require connection.
                </div>
                
                <h3>📱 Usage and Functionality</h3>
                <div style="margin-bottom: 2rem;">
                    <strong>Can I cancel a reservation?</strong><br>
                    Yes, reservations can be cancelled up to 2 hours before the scheduled time (configurable by administrator).
                </div>
                
                <div style="margin-bottom: 2rem;">
                    <strong>Is there a limit on reservations per user?</strong><br>
                    By default, each user can have a maximum of 3 active reservations simultaneously.
                </div>
                
                <div style="margin-bottom: 2rem;">
                    <strong>How do I receive notifications?</strong><br>
                    The system sends browser notifications and optionally email (if configured).
                </div>
                
                <h3>👥 Administration</h3>
                <div style="margin-bottom: 2rem;">
                    <strong>Who can be an administrator?</strong><br>
                    Administrators are designated by the condominium board and have special permissions.
                </div>
                
                <div style="margin-bottom: 2rem;">
                    <strong>Can reservation rules be customized?</strong><br>
                    Yes, administrators can configure schedules, restrictions, and specific policies.
                </div>
                
                <h3>🔒 Security and Privacy</h3>
                <div style="margin-bottom: 2rem;">
                    <strong>Is the data secure?</strong><br>
                    Yes, we use standard encryption and security best practices to protect information.
                </div>
                
                <div style="margin-bottom: 2rem;">
                    <strong>Who can see my reservations?</strong><br>
                    Only you and administrators can see your reservations. Information is kept private.
                </div>
            `
        },
        demo: {
            title: 'Try the System!',
            content: `
                <h2>Try the System!</h2>
                <p>Experience the main system functionalities with this interactive demonstration.</p>
                
                <div class="demo-container">
                    <h3>🏊‍♀️ Make a Test Reservation</h3>
                    <form class="demo-form" id="demoReservation">
                        <input type="text" placeholder="Your name" required>
                        <input type="email" placeholder="Email" required>
                        <select required>
                            <option value="">Select a facility</option>
                            <option value="pool">Swimming Pool</option>
                            <option value="tennis-court">Tennis Court</option>
                            <option value="community-hall">Community Hall</option>
                            <option value="barbecue-area">Barbecue Area</option>
                        </select>
                        <input type="date" required>
                        <select required>
                            <option value="">Select time slot</option>
                            <option value="09:00">09:00 - 11:00</option>
                            <option value="11:00">11:00 - 13:00</option>
                            <option value="13:00">13:00 - 15:00</option>
                            <option value="15:00">15:00 - 17:00</option>
                            <option value="17:00">17:00 - 19:00</option>
                        </select>
                        <button type="submit" class="demo-button">Make Test Reservation</button>
                    </form>
                </div>
                
                <div class="demo-container">
                    <h3>📅 Create Test Event</h3>
                    <form class="demo-form" id="demoEvent">
                        <input type="text" placeholder="Event name" required>
                        <textarea placeholder="Event description" rows="3" style="padding: 0.75rem; border: 2px solid #e2e8f0; border-radius: 8px; font-family: inherit; resize: vertical;"></textarea>
                        <input type="date" required>
                        <input type="time" required>
                        <select required>
                            <option value="">Event category</option>
                            <option value="social">Social Event</option>
                            <option value="sports">Sports Activity</option>
                            <option value="cultural">Cultural Event</option>
                            <option value="maintenance">Maintenance</option>
                        </select>
                        <button type="submit" class="demo-button">Create Test Event</button>
                    </form>
                </div>
                
                <h3>✨ Demonstrated Features</h3>
                <ul>
                    <li>Reservation system with validation</li>
                    <li>Interactive forms</li>
                    <li>Date and time selection</li>
                    <li>Event categorization</li>
                    <li>Responsive interface</li>
                </ul>
            `
        },
        mockups: {
            title: 'Application Mockups',
            content: `
                <h2>Application Mockups</h2>
                <p>Visualize the main screens of the condominium management system.</p>
                
                <h3>📱 Main Screens</h3>
                
                <div style="background: #f7fafc; padding: 2rem; border-radius: 15px; margin: 2rem 0; text-align: center;">
                    <h4>🏠 Main Dashboard</h4>
                    <div style="background: white; padding: 1.5rem; border-radius: 10px; margin: 1rem 0; border: 2px solid #e2e8f0;">
                        <p><strong>Header:</strong> Condominium logo + Navigation</p>
                        <p><strong>Weather Widget:</strong> Current temperature</p>
                        <p><strong>Active Reservations:</strong> User's upcoming reservations</p>
                        <p><strong>Upcoming Events:</strong> Community events list</p>
                        <p><strong>Quick Access:</strong> Buttons to main functions</p>
                    </div>
                </div>
                
                <div style="background: #f7fafc; padding: 2rem; border-radius: 15px; margin: 2rem 0; text-align: center;">
                    <h4>📅 Reservation System</h4>
                    <div style="background: white; padding: 1.5rem; border-radius: 10px; margin: 1rem 0; border: 2px solid #e2e8f0;">
                        <p><strong>Visual Calendar:</strong> Monthly view with availability</p>
                        <p><strong>Facilities List:</strong> Pool, courts, hall</p>
                        <p><strong>Filters:</strong> By date, type, availability</p>
                        <p><strong>Reservation Form:</strong> Data and confirmation</p>
                    </div>
                </div>
                
                <div style="background: #f7fafc; padding: 2rem; border-radius: 15px; margin: 2rem 0; text-align: center;">
                    <h4>🎉 Event Management</h4>
                    <div style="background: white; padding: 1.5rem; border-radius: 10px; margin: 1rem 0; border: 2px solid #e2e8f0;">
                        <p><strong>Event Timeline:</strong> Visual chronology</p>
                        <p><strong>Event Details:</strong> Description, date, location</p>
                        <p><strong>Registration System:</strong> Event registration</p>
                        <p><strong>Photo Gallery:</strong> Past event images</p>
                    </div>
                </div>
                
                <div style="background: #f7fafc; padding: 2rem; border-radius: 15px; margin: 2rem 0; text-align: center;">
                    <h4>👤 User Profile</h4>
                    <div style="background: white; padding: 1.5rem; border-radius: 10px; margin: 1rem 0; border: 2px solid #e2e8f0;">
                        <p><strong>Personal Information:</strong> Resident data</p>
                        <p><strong>Reservation History:</strong> Past and future reservations</p>
                        <p><strong>Settings:</strong> Notifications, preferences</p>
                        <p><strong>Emergency Contact:</strong> Contact information</p>
                    </div>
                </div>
                
                <h3>🎨 Design Features</h3>
                <ul>
                    <li><strong>Material Design:</strong> Shadows, elevations, transitions</li>
                    <li><strong>Color Palette:</strong> Blues and greens for trust</li>
                    <li><strong>Typography:</strong> Inter for optimal readability</li>
                    <li><strong>Iconography:</strong> Consistent and clear icons</li>
                    <li><strong>Responsive:</strong> Adaptable to all devices</li>
                </ul>
            `
        }
    };

    // Event listeners for cards
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const section = this.dataset.section;
            const content = sectionContent[section];
            
            if (content) {
                modalBody.innerHTML = `
                    <div class="modal-section">
                        ${content.content}
                    </div>
                `;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });

        // Enhanced hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Close modal
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Function to close modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    // Demo form functionality
    document.addEventListener('submit', function(e) {
        const form = e.target;
        
        if (form.id === 'demoReservation') {
            e.preventDefault();
            
            // Simulate processing
            const button = form.querySelector('button');
            const originalText = button.textContent;
            button.textContent = 'Processing...';
            button.disabled = true;
            
            setTimeout(() => {
                alert('Test reservation created successfully! 🎉\n\nIn the real system, you would receive an email confirmation and the reservation would appear in your dashboard.');
                form.reset();
                button.textContent = originalText;
                button.disabled = false;
            }, 1500);
        }
        
        if (form.id === 'demoEvent') {
            e.preventDefault();
            
            // Simulate processing
            const button = form.querySelector('button');
            const originalText = button.textContent;
            button.textContent = 'Creating...';
            button.disabled = true;
            
            setTimeout(() => {
                alert('Test event created successfully! 📅\n\nIn the real system, all residents would receive a notification about the new event.');
                form.reset();
                button.textContent = originalText;
                button.disabled = false;
            }, 1500);
        }
    });

    // Entry animations
    function animateCards() {
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // Execute animations on load
    setTimeout(animateCards, 100);

    // Additional functionality: demo notifications
    function showDemoNotification() {
        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('Condominium System', {
                body: 'Welcome to the system! Explore all available functionalities.',
                icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="%23667eea"><path d="M12 2L2 7v10c0 5.55 3.84 9.95 9 11 5.16-1.05 9-5.45 9-11V7l-10-5z"/></svg>'
            });
        }
    }

    // Request notification permissions if user interacts
    document.addEventListener('click', function() {
        if ('Notification' in window && Notification.permission === 'default') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    setTimeout(showDemoNotification, 1000);
                }
            });
        }
    }, { once: true });

    // Debug: Initialization log
    console.log('🏠 Condominium Management System started successfully');
    console.log('📱 Loaded functionalities:', Object.keys(sectionContent));
});