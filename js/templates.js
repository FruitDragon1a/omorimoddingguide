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

customElements.define('footer', Footer);

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="footer collection">
            <div>
                <p>FruitDragon & TomatoRadio's OMORI Modding Guide</p>
                <p>Special thanks to the OMORI team & the OMORI Modding Community</p>
            </div>
            <div class = "right">
                <p>If you notice any issues with this guide, please contact us or fill out this form. </p>
                <p class="footer-license">All templates provided under MIT license. All base game assets provided with open access to source material. All other resources are provided under the licenses assigned by their creators.</p>
            </div>
        </div>
    `;
  }
}

customElements.define('footer', Footer);