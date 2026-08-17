// ==========================================
// SUPABASE CONFIGURATION
// ==========================================

const SUPABASE_URL =
    "https://uvugvcowfwctcyxuiexr.supabase.co";

const SUPABASE_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2dWd2Y293ZndjdGN5eHVpZXhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY1NDg5MTMsImV4cCI6MjEwMjEyNDkxM30.edYqB1BALpZzYq4plSeHfJTz1stMFmK6YfbxoXk0-Ks";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );


// ==========================================
// LOGIN FORM
// ==========================================

const loginForm =
    document.getElementById("loginForm");

const loginBtn =
    document.getElementById("loginBtn");

const message =
    document.getElementById("message");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();

            loginBtn.disabled = true;
            loginBtn.textContent = "Logging in...";

            message.textContent = "";


            // ==========================================
            // GET VALUES
            // ==========================================

            const email =
                document.getElementById("email")
                    .value
                    .trim();

            const password =
                document.getElementById("password")
                    .value;


            // ==========================================
            // SUPABASE LOGIN
            // ==========================================

            const { data, error } =
                await supabaseClient.auth.signInWithPassword({
                    email: email,
                    password: password
                });


            // ==========================================
            // LOGIN ERROR
            // ==========================================

            if (error) {

                console.error(
                    "Login Error:",
                    error
                );

                message.textContent =
                    error.message;

                loginBtn.disabled = false;
                loginBtn.textContent = "Login";

                return;
            }


            // ==========================================
// LOGIN SUCCESS
// ==========================================

console.log("Admin login successful");

window.location.href = "/admin/dashboard/";

        }
    );

}