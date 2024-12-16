// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for nav links
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default link behavior

            const targetId = this.getAttribute("href").substring(1); // Get target section ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Smoothly scroll to the target section
                targetSection.scrollIntoView({ behavior: "smooth" });

                // Add a temporary highlight effect
                targetSection.classList.add("highlight");
                setTimeout(() => {
                    targetSection.classList.remove("highlight");
                }, 2000); // Remove the effect after 2 seconds
            }
        });
    });

    // Smooth scroll for all buttons that link to sections
    const buttons = document.querySelectorAll(".button");

    buttons.forEach((button) => {
        button.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default button behavior

            // Get the href of the button to find the target section
            const targetId = button.getAttribute("href") || button.getAttribute("data-target");
            if (targetId) {
                const targetSection = document.getElementById(targetId.substring(1)); // Remove # if href exists

                if (targetSection) {
                    // Smoothly scroll to the target section
                    targetSection.scrollIntoView({ behavior: "smooth" });

                    // Add a temporary highlight effect
                    targetSection.classList.add("highlight");
                    setTimeout(() => {
                        targetSection.classList.remove("highlight");
                    }, 2000); // Remove the effect after 2 seconds
                }
            }
        });
    });
});
