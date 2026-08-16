// ==========================================
// SUPABASE CONFIGURATION
// ==========================================

const SUPABASE_URL = "https://uvugvcowfwctcyxuiexr.supabase.co";

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2dWd2Y293ZndjdGN5eHVpZXhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY1NDg5MTMsImV4cCI6MjEwMjEyNDkxM30.edYqB1BALpZzYq4plSeHfJTz1stMFmK6YfbxoXk0-Ks";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);


// ==========================================
// ELEMENTS
// ==========================================

const enquiryTableBody =
    document.getElementById("enquiryTableBody");

const statusMessage =
    document.getElementById("statusMessage");

const totalEnquiries =
    document.getElementById("totalEnquiries");

const newEnquiries =
    document.getElementById("newEnquiries");

const contactedEnquiries =
    document.getElementById("contactedEnquiries");

const confirmedEnquiries =
    document.getElementById("confirmedEnquiries");

const cancelledEnquiries =
    document.getElementById("cancelledEnquiries");

const refreshBtn =
    document.getElementById("refreshBtn");

const logoutBtn =
    document.getElementById("logoutBtn");

const searchInput =
    document.getElementById("searchInput");


// ==========================================
// ALL BOOKINGS
// ==========================================

let allBookings = [];


// ==========================================
// CHECK LOGIN
// ==========================================

async function checkAdminLogin() {

    const { data, error } =
        await supabaseClient.auth.getSession();

    if (error || !data.session) {

        window.location.href =
            "/admin/login/";

        return false;
    }

    return true;
}


// ==========================================
// LOAD ENQUIRIES
// ==========================================

async function loadEnquiries() {

    statusMessage.textContent =
        "Loading enquiries...";

    const { data, error } =
        await supabaseClient
            .from("bookings")
            .select("*")
            .order("created_at", {
                ascending: false
            });

    if (error) {

        console.error(
            "Supabase Error:",
            error
        );

        statusMessage.textContent =
            "Unable to load enquiries.";

        return;
    }

    allBookings = data || [];

    updateStats();

    renderBookings(allBookings);

}


// ==========================================
// UPDATE STATS
// ==========================================

function updateStats() {

    totalEnquiries.textContent =
        allBookings.length;

    newEnquiries.textContent =
        allBookings.filter(
            booking =>
                (booking.status || "New") === "New"
        ).length;

    contactedEnquiries.textContent =
        allBookings.filter(
            booking =>
                booking.status === "Contacted"
        ).length;

    confirmedEnquiries.textContent =
        allBookings.filter(
            booking =>
                booking.status === "Confirmed"
        ).length;

    cancelledEnquiries.textContent =
        allBookings.filter(
            booking =>
                booking.status === "Cancelled"
        ).length;

}


// ==========================================
// RENDER BOOKINGS
// ==========================================

function renderBookings(bookings) {

    enquiryTableBody.innerHTML = "";

    if (!bookings.length) {

        statusMessage.textContent =
            "No enquiries found.";

        return;
    }

    statusMessage.textContent = "";

    bookings.forEach(function (booking) {

        const row =
            document.createElement("tr");

        const phone =
            booking.phone || "";

        const cleanPhone =
            phone.replace(/\D/g, "");

        row.innerHTML = `

            <td>${booking.name || ""}</td>

            <td>${booking.phone || ""}</td>

            <td>${booking.email || ""}</td>

            <td>${booking.destination || ""}</td>

            <td>${booking.travel_date || ""}</td>

            <td>${booking.travellers || ""}</td>

            <td>${booking.message || ""}</td>

            <td>

                <select
                    class="status-select"
                    data-id="${booking.id}"
                >

                    <option value="New"
                        ${(booking.status || "New") === "New" ? "selected" : ""}>
                        New
                    </option>

                    <option value="Contacted"
                        ${booking.status === "Contacted" ? "selected" : ""}>
                        Contacted
                    </option>

                    <option value="Confirmed"
                        ${booking.status === "Confirmed" ? "selected" : ""}>
                        Confirmed
                    </option>

                    <option value="Cancelled"
                        ${booking.status === "Cancelled" ? "selected" : ""}>
                        Cancelled
                    </option>

                </select>

            </td>

            <td>

                ${
                    cleanPhone
                        ? `
                            <a
                                class="contact-btn call-btn"
                                href="tel:${cleanPhone}"
                            >
                                Call
                            </a>

                            <a
                                class="contact-btn whatsapp-btn"
                                href="https://wa.me/91${cleanPhone}"
                                target="_blank"
                            >
                                WhatsApp
                            </a>
                          `
                        : ""
                }

            </td>

            <td>

                ${
                    booking.created_at
                        ? new Date(
                            booking.created_at
                          ).toLocaleString()
                        : ""
                }

            </td>

        `;

        enquiryTableBody.appendChild(row);

    });


    // ==========================================
    // STATUS CHANGE EVENTS
    // ==========================================

    document
        .querySelectorAll(".status-select")
        .forEach(function (select) {

            select.addEventListener(
                "change",
                function () {

                    updateStatus(
                        select.dataset.id,
                        select.value
                    );

                }
            );

        });

}


// ==========================================
// UPDATE STATUS
// ==========================================

async function updateStatus(id, newStatus) {

    const { error } =
        await supabaseClient
            .from("bookings")
            .update({
                status: newStatus
            })
            .eq("id", id);

    if (error) {

        console.error(
            "Status Update Error:",
            error
        );

        alert(
            "Status update failed.\n\n" +
            error.message
        );

        return;
    }

    // Update local data

    const booking =
        allBookings.find(
            item => item.id === id
        );

    if (booking) {
        booking.status = newStatus;
    }

    updateStats();

}


// ==========================================
// SEARCH
// ==========================================

searchInput.addEventListener(
    "input",
    function () {

        const search =
            searchInput.value
                .toLowerCase()
                .trim();

        if (!search) {

            renderBookings(allBookings);

            return;
        }

        const filtered =
            allBookings.filter(
                function (booking) {

                    return (

                        (booking.name || "")
                            .toLowerCase()
                            .includes(search)

                        ||

                        (booking.phone || "")
                            .toLowerCase()
                            .includes(search)

                        ||

                        (booking.email || "")
                            .toLowerCase()
                            .includes(search)

                        ||

                        (booking.destination || "")
                            .toLowerCase()
                            .includes(search)

                    );

                }
            );

        renderBookings(filtered);

    }
);


// ==========================================
// REFRESH
// ==========================================

refreshBtn.addEventListener(
    "click",
    function () {

        loadEnquiries();

    }
);


// ==========================================
// LOGOUT
// ==========================================

logoutBtn.addEventListener(
    "click",
    async function () {

        const { error } =
            await supabaseClient.auth.signOut();

        if (error) {

            console.error(
                "Logout Error:",
                error
            );

            return;
        }

        window.location.href =
            "/admin/login/";

    }
);


// ==========================================
// START DASHBOARD
// ==========================================

async function startDashboard() {

    const loggedIn =
        await checkAdminLogin();

    if (!loggedIn) {
        return;
    }

    await loadEnquiries();

}

startDashboard();