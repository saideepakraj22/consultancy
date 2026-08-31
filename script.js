/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon =
        menuBtn.querySelector("i");


    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            const icon =
                menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });



/* =====================================================
   CONTACT FORM → WHATSAPP
===================================================== */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;

    const phone =
        document.getElementById("phone").value;

    const country =
        document.getElementById("country").value;

    const studyLevel =
        document.getElementById("studyLevel").value;

    const intake =
        document.getElementById("intake").value;

    const course =
        document.getElementById("course").value;

    const message =
        document.getElementById("message").value;


    const whatsappNumber =
        "919876543210";


    let whatsappMessage =
        "Hello! I am interested in studying abroad.%0A%0A";


    whatsappMessage +=
        "Name: " +
        encodeURIComponent(name) +
        "%0A";


    whatsappMessage +=
        "Phone: " +
        encodeURIComponent(phone) +
        "%0A";


    whatsappMessage +=
        "Preferred Country: " +
        encodeURIComponent(country) +
        "%0A";


    whatsappMessage +=
        "Study Level: " +
        encodeURIComponent(studyLevel) +
        "%0A";


    whatsappMessage +=
        "Intake: " +
        encodeURIComponent(intake) +
        "%0A";


    whatsappMessage +=
        "Course: " +
        encodeURIComponent(course) +
        "%0A";


    whatsappMessage +=
        "Message: " +
        encodeURIComponent(message);


    window.open(

        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        whatsappMessage,

        "_blank"

    );

});



/* =====================================================
   BACK TO TOP
===================================================== */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/* =====================================================
   SCROLL ANIMATION
===================================================== */

const animatedElements =
    document.querySelectorAll(

        ".destination-card, " +
        ".service-card, " +
        ".process-card, " +
        ".university-card, " +
        ".testimonial"

    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


animatedElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity .6s ease, transform .6s ease";

    observer.observe(element);

});
