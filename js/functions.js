/* Set the width of the sidebar to 250px and push the main content */
function openNav() {
  document.getElementById("siteNavigation").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the content to 0 */
function closeNav() {
  document.getElementById("siteNavigation").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;

    // Adjust speed factor (0.5 = slower than scroll)
    const speed = 0.5;

    const page = document.querySelector(".page-title");

    page.style.backgroundPosition = `center ${scrollY * speed}px`;
});