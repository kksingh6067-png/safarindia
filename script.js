// ==========================================
// SUPABASE CONFIGURATION
// ==========================================

const SUPABASE_URL =
    "https://uvugvcowfwctcyxuiexr.supabase.co";

const SUPABASE_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2dWd2Y293ZndjdGN5eHVpZXhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY1NDg5MTMsImV4cCI6MjEwMjEyNDkxM30.edYqB1BALpZzYq4plSeHfJTz1stMFmK6YfbxoXk0-Ks";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);


// ==========================================
// CONTACT FORM
// ==========================================

const contactForm =
    document.getElementById("contactForm");

console.log("CONTACT FORM SCRIPT LOADED");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const submitButton =
                contactForm.querySelector(
                    'button[type="submit"]'
                );


            submitButton.disabled = true;
            submitButton.textContent = "Sending...";


            // ==========================================
            // GET FORM VALUES
            // ==========================================

            const name =
                document.getElementById("name").value.trim();


            const phone =
                document.getElementById("phone").value.trim();


            const email =
                document.getElementById("email").value.trim();


            const service =
                document.getElementById("service").value;


            const destination =
                document
                    .getElementById("destination")
                    .value
                    .trim();


            const travelDate =
                document.getElementById("travel-date").value;


            const travellers =
                document.getElementById("travellers").value;


            const message =
                document
                    .getElementById("message")
                    .value
                    .trim();


            // ==========================================
            // BASIC VALIDATION
            // ==========================================

            if (!name || !phone) {

                alert(
                    "Please enter your name and phone number."
                );


                submitButton.disabled = false;
                submitButton.textContent =
                    "Send Enquiry";


                return;
            }


            // ==========================================
            // SEND DATA TO SUPABASE
            // ==========================================

            try {

                const { error } =
                    await supabaseClient
                        .from("bookings")
                        .insert([
                            {
                                name: name,

                                phone: phone,

                                email: email || null,

                                service: service || null,

                                destination:
                                    destination || null,

                                travel_date:
                                    travelDate || null,

                                travellers:
                                    travellers
                                        ? Number(travellers)
                                        : null,

                                message:
                                    message || null
                            }
                        ]);


                // ==========================================
                // ERROR
                // ==========================================

                if (error) {

                    console.error(
                        "Supabase Error:",
                        error
                    );


                    alert(
                        "Enquiry not submitted.\n\n" +
                        error.message
                    );


                    return;
                }


                // ==========================================
                // SUCCESS
                // ==========================================

                console.log(
                    "Booking submitted successfully"
                );


                alert(
                    "Thank you! Your enquiry has been submitted successfully."
                );


                contactForm.reset();


            } catch (error) {

                console.error(
                    "Unexpected Error:",
                    error
                );


                alert(
                    "Something went wrong. Please try again."
                );


            } finally {

                submitButton.disabled = false;

                submitButton.textContent =
                    "Send Enquiry";

            }

        }
    );

}


// ==========================================
// SMART SERVICE ENQUIRY
// ==========================================

document
    .querySelectorAll(".service-btn")
    .forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const selectedService =
                    this.getAttribute("data-service");


                const serviceField =
                    document.getElementById("service");


                if (serviceField) {

                    serviceField.value =
                        selectedService;

                }

            }
        );

    });

// ==========================================
// MOBILE MENU
// ==========================================

const mobileMenuBtn =
    document.querySelector(".mobile-menu-btn");

const navbar =
    document.querySelector(".navbar");


if (mobileMenuBtn && navbar) {

    mobileMenuBtn.addEventListener("click", function () {

        navbar.classList.toggle("mobile-menu-open");

    });


    // Close menu after clicking a navigation link

    navbar.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("mobile-menu-open");

        });

    });

}