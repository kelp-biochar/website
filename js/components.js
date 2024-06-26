class KelpBiocharFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<footer class="container py-5">
  <div class="row">
    <div class="col-12 col-md">
      <a href="https://kelpbiochar.com/"/><img src="/imgs/kelp-logo.png" alt="KelpBiochar Logo" width="24" height="24"></a>
      <br>
      <a class="link-secondary text-decoration-none" href="/project-1750.html">Project 1750:</a>
      <br>
      <span class="1750-kpi text-center" style="font-size: .75em; color: green">01750.0000</span>
      <small class="d-block mb-3 text-body-secondary">&copy; 02023-02024</small>
    </div>
    <div class="col-6 col-md">
      <h5>Products</h5>
      <ul class="list-unstyled text-small">
        <li><a class="link-secondary text-decoration-none" href="/products/kelp-pellets.html">Kelp Pellets</a></li>
        <li><a class="link-secondary text-decoration-none" href="/products/biochar-pellets.html">Biochar Pellets</a></li>
        <li><a class="link-secondary text-decoration-none" href="/products/pricing.html">Prices</a></li>
      </ul>
    </div>
    <div class="col-6 col-md">
      <h5>Services</h5>
      <ul class="list-unstyled text-small">
        <li><a class="link-secondary text-decoration-none" href="/services/carbon-offsets.html">Carbon Offsets</a></li>
        <li><a class="link-secondary text-decoration-none" href="/services/soil-remediation.html">Soil Remediation</a></li>
      </ul>
    </div>
    
    <div class="col-6 col-md">
      <h5>Resources</h5>
      <ul class="list-unstyled text-small">
        
        <li><a class="link-secondary text-decoration-none" href="/business.html">Business</a></li>
        <li><a class="link-secondary text-decoration-none" href="/docs/topics.html#kelp-farming">Kelp Farming</a></li>
        <li><a class="link-secondary text-decoration-none" href="/docs/topics.html#biochar">Biochar Production</a></li>
        <li><a class="link-secondary text-decoration-none" href="/kelp-drone-simulations/index.html">Kelp Drone Simulations</a></li>
        <li><a class="link-secondary text-decoration-none" href="/docs/topics.html#learn">Learn More&hellip;</a></li>
      </ul>
    </div>
    <div class="col-6 col-md">
      <h5>About</h5>
      <ul class="list-unstyled text-small">
        <li><a class="link-secondary text-decoration-none" href="/team.html">Team</a></li>
        <li><a class="link-secondary text-decoration-none" href="/locations.html">Locations</a></li>
        <li><a class="link-secondary text-decoration-none" href="/privacy.html">Privacy</a></li>
        <li><a class="link-secondary text-decoration-none" href="/terms.html">Terms</a></li>
      </ul>
    </div>
  </div>
</footer>`;
  }
}


class KelpBiocharHeadline extends HTMLElement {
  connectedCallback() {
     const subTitle = this.getAttribute("data-subTitle");
     this.innerHTML = `<h1 class="display-5 fw-bold">Kelp-Biochar Inc.</h1>
<h2 class="text-body-emphasis">${subTitle}</h2>
`;
  }
}


class KelpBiocharNavbar extends HTMLElement {
      connectedCallback() {
        this.innerHTML = `
          <nav class="navbar navbar-expand-md bg-success sticky-top border-bottom" data-bs-theme="dark">
            <div class="container">
              <a class="navbar-brand" href="#">
                <img src="/imgs/kelp-logo.png" alt="KelpBiochar Logo" width="24" height="24"><use xlink:href="https://kelpbiochar.com/"/>
                 Kelp Biochar Corporation
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="#offcanvas" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="offcanvas offcanvas-end" tabindex="-1" id="#offcanvas" aria-labelledby="#offcanvasLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="#offcanvasLabel">Kelp-Biochar</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <ul class="navbar-nav flex-grow-1 justify-content-between">
                    <li class="nav-item"><a class="nav-link" href="/">
                      <svg class="bi" width="24" height="24"><use xlink:href="#kelp-biochar"/></svg>
                      Home
                    </a></li>
                    <li class="nav-item"><a class="nav-link" href="/products/">Products</a></li>
                    <li class="nav-item"><a class="nav-link" href="/services/">Services</a></li>
                    <li class="nav-item"><a class="nav-link" href="/support.html">Support</a></li>
                    <li class="nav-item"><a class="nav-link" href="/products/pricing.html">Pricing</a></li>
                    <li class="nav-item"><a class="nav-link" href="/products/checkout.out">
                      <svg class="bi" width="24" height="24"><use xlink:href="#cart"/></svg>
                    </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        `;
      }
    }


class OrderButton extends HTMLElement{
  connectedCallback() {
    this.innerHTML = `<button type="button" class="w-100 btn btn-lg btn-outline-primary" py-click="order()">Order now</button>`
  };
}


class PelletOffer extends HTMLElement {
  connectedCallback() {
    const availableDeliveryMethod = this.getAttribute("data-availableDeliveryMethod");
    const eligibleQuantity = this.getAttribute("data-eligibleQuantity");
    const name = this.getAttribute("data-name");
    const price = this.getAttribute("data-price");
    const unit = this.getAttribute("data-unit");

    
    this.innerHTML = `<div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">${name} ${unit}s</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$${price}<small class="text-body-secondary fw-light">/pellet</small></h1>

            <ul class="list-unstyled mt-3 mb-4">
              <li>Minimum order ${eligibleQuantity} ${unit}</li>
              <li>Shipped ${availableDeliveryMethod}</li>
              <li><a href="/support.html">Free Help</a></li>
            </ul>
            <order-btn></order-btn>
          </div>
        </div>
    `;
  }
}

customElements.define('order-btn', OrderButton);
customElements.define('kelp-biochar-footer', KelpBiocharFooter);
customElements.define('kelp-biochar-head', KelpBiocharHeadline);
customElements.define('kelp-biochar-navbar', KelpBiocharNavbar);
customElements.define('pellet-offer', PelletOffer);


