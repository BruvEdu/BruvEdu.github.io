function toggleNav() {
    var sidebar = document.getElementById("mySidebar");
    var main = document.getElementById("main");

    // If sidebar is 250px wide (open), close it
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        main.style.marginLeft = "0";
    } else {
        // Otherwise, open it
        sidebar.style.width = "250px";
        main.style.marginLeft = "250px";
    }
}
