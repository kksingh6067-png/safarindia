const SUPABASE_URL = "https://uvugvcowfwctcyxuiexr.supabase.co";

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2dWd2Y293ZndjdGN5eHVpZXhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY1NDg5MTMsImV4cCI6MjEwMjEyNDkxM30.edYqB1BALpZzYq4plSeHfJTz1stMFmK6YfbxoXk0-Ks";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);


// ==========================================
// CHECK ADMIN LOGIN
// ==========================================

async function checkAdminLogin() {

    const {
        data: { session },
        error
    } = await supabaseClient.auth.getSession();


    if (error) {

        console.error("Session Error:", error);

        window.location.href = "/admin/";

        return false;
    }


    if (!session) {

        window.location.href = "/admin/";

        return false;
    }


    return true;
}


// ==========================================
// LOAD BOOKINGS
// ==========================================

async function loadBookings() {

    const tableBody =
        document.getElementById("bookingTableBody");


    if (!tableBody) {

        console.error(
            "bookingTableBody not found."
        );

        return;
    }


    tableBody.innerHTML = `
        <tr>
            <td colspan="8" class="loading">
                Loading bookings...
            </td>
        </tr>
    `;


    try {

        const { data, error } =
            await supabaseClient
                .from("bookings")
                .select("*")
                .order("id", {
                    ascending: false
                });


        if (error) {

            console.error(
                "Supabase Error:",
                error
            );


            tableBody.innerHTML = `
                <tr>
                    <td colspan="8" class="error">
                        ${error.message}
                    </td>
                </tr>
            `;

            return;
        }


        if (!data || data.length === 0) {

            tableBody.innerHTML = `
                <tr>
                    <td colspan="8" class="empty">
                        No booking enquiries found.
                    </td>
                </tr>
            `;

            return;
        }


        tableBody.innerHTML = "";


        data.forEach(function (booking) {

            const row =
                document.createElement("tr");


            row.innerHTML = `

                <td>
                    ${booking.id ?? ""}
                </td>

                <td>
                    ${booking.name ?? ""}
                </td>

                <td>
                    ${booking.phone ?? ""}
                </td>

                <td>
                    ${booking.email ?? ""}
                </td>

                <td>
                    ${booking.destination ?? ""}
                </td>

                <td>
                    ${booking.travel_date ?? ""}
                </td>

                <td>
                    ${booking.travellers ?? ""}
                </td>

                <td>
                    ${booking.message ?? ""}
                </td>

            `;


            tableBody.appendChild(row);

        });


    } catch (error) {

        console.error(
            "Unexpected Error:",
            error
        );


        tableBody.innerHTML = `
            <tr>
                <td colspan="8" class="error">
                    Something went wrong.
                </td>
            </tr>
        `;

    }

}


// ==========================================
// REFRESH BUTTON
// ==========================================

const refreshBtn =
    document.getElementById("refreshBtn");


if (refreshBtn) {

    refreshBtn.addEventListener(
        "click",
        async function () {

            refreshBtn.disabled = true;
            refreshBtn.textContent =
                "Refreshing...";


            await loadBookings();


            refreshBtn.disabled = false;
            refreshBtn.textContent =
                "Refresh";

        }
    );

}


// ==========================================
// LOGOUT
// ==========================================

const logoutBtn =
    document.getElementById("logoutBtn");


if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        async function () {

            logoutBtn.disabled = true;
            logoutBtn.textContent =
                "Logging out...";


            const { error } =
                await supabaseClient.auth.signOut();


            if (error) {

                console.error(
                    "Logout Error:",
                    error
                );


                logoutBtn.disabled = false;
                logoutBtn.textContent =
                    "Logout";

                alert(
                    "Logout failed: " +
                    error.message
                );

                return;
            }


            window.location.replace("/admin/");
            );

        }
    );

}


// ==========================================
// START ADMIN PANEL
// ==========================================

(async function () {

    const loggedIn =
        await checkAdminLogin();


    if (loggedIn) {

        await loadBookings();

    }

})();