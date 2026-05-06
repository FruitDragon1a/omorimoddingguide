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

    /* 
    //This allows for the sidebar to follow the scroll, however its not a 1:1 which bothers me so i left it.
    const sidebar = document.getElementById("siteNavigation")
    if (sidebar) {
      sidebar.style["padding-top"] = (scrollY+"px");
    }
    */

    const page = document.querySelector(".page-title");
    if (page) {
        page.style.backgroundPosition = `center ${scrollY * speed}px`;
    }
});

