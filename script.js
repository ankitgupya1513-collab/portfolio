// Contact Form

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const formMessage = document.getElementById("formMessage");

        formMessage.textContent =
            "Message sent successfully! Thank you for contacting me. 😊";

        formMessage.style.color = "#0369a1";
        formMessage.style.fontWeight = "bold";
        formMessage.style.marginTop = "10px";

        contactForm.reset();

    });

}