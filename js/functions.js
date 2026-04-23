/* Set the width of the sidebar to 250px and push the main content */
function openNav() {
  document.getElementById("siteNavigation").classList.add("open");
}

/* Set the width of the sidebar to 0 and the left margin of the content to 0 */
function closeNav() {
  document.getElementById("siteNavigation").classList.remove("open");
}

window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;

    // Adjust speed factor (0.5 = slower than scroll)
    const speed = 0.5;

    const page = document.querySelector(".page-title");
    if (page) {
        page.style.backgroundPosition = `center ${scrollY * speed}px`;
    }
});

