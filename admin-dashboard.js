const SUPABASE_URL =
    "https://uvugvcowfwctcyxuiexr.supabase.co";

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2dWd2Y293ZndjdGN5eHVpZXhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY1NDg5MTMsImV4cCI6MjEwMjEyNDkxM30.edYqB1BALpZzYq4plSeHfJTz1stMFmK6YfbxoXk0-Ks";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );


const logoutBtn =
    document.getElementById("logoutBtn");


logoutBtn.addEventListener("click", async function () {

    await supabaseClient.auth.signOut();

    window.location.href = "/admin/";

});