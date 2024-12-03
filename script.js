document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop(); // Get the current file name
    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(link => {
        // Normalize href by removing relative path indicators
        const linkPage = link.getAttribute("href").replace('./', '').replace('../', '');
        if (linkPage === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});