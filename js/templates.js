class SiteNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="siteNavigation" class="sidebar">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Setup</a>
        <a href="#">Github</a>
        <a href="#">YAML Files and Dialogue</a>
        <a href="#">Events</a>
        <a href="#">Maps</a>
        <a href="#">Sprites and Art</a>
        <a href="#">States</a>
        <a href="#">Weapons & Charms</a>
        <a href="#">Skills & Items</a>
        <a href="#">Party Members</a>
        <a href="#">Plugins</a>
        <a href="#">Enemies</a>
        <a href="#">Common Errors & Misc Tips</a>
      </div>
    `;
  }
}

customElements.define('site-nav', SiteNav);