// NAVBAR
const sections  = document.querySelectorAll("section");
const navLinks  = document.querySelectorAll(".nav-link");
const header    = document.querySelector(".header");

window.addEventListener("scroll", () => {

    // Add shadow to navbar after scrolling 50px
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

    // Highlight the correct nav link based on current scroll position
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 160;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});


// REVEL LOGIC ANIMATION
const revealElements = document.querySelectorAll(".reveal");

function checkReveal() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        // When element comes into view , make it visible
        if (elementTop < windowHeight - 80) {
            el.classList.add("visible");

            // If it's a skill bar fill, animate the width
            el.querySelectorAll(".fill").forEach(bar => {
                const targetWidth = bar.getAttribute("data-width");
                bar.style.width = targetWidth + "%";
            });
        }
    });
}

// Check on scroll and also once on page load
window.addEventListener("scroll", checkReveal);
window.addEventListener("load", checkReveal);



// CONTACT FORM
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Stop page from reloading

        const btn = contactForm.querySelector("button[type='submit']");

        // Show a success message on the button
        btn.textContent = "✅ Message Sent!";
        btn.style.background = "#22C55E";
        btn.disabled = true;

        // Reset the form fields
        contactForm.reset();

        // Restore button after 3 seconds
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
            btn.style.background = "";
            btn.disabled = false;
        }, 3000);
    });
}
