import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <!-- Top navigation-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div class="container-fluid">
        <button class="btn btn-default" appToggleSidebar>☰</button>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
            <li class="nav-item mt-1 me-2">
              <!-- <a class="nav-link" href="#!">Home</a> -->
              <!-- Place this tag where you want the button to render. -->
              <!-- Place this tag where you want the button to render. -->
              <a
                class="github-button"
                href="https://github.com/pranavirabatti4/ngFeather"
                data-size="large"
                data-show-count="true"
                aria-label="Star pranavirabatti4/ngFeather on GitHub"
                >Star</a
              >
            </li>
            <li class="nav-item mt-1">
              <!-- Place this tag where you want the button to render. -->
              <!-- Place this tag where you want the button to render. -->
              <a
                class="github-button"
                href="https://github.com/pranavirabatti4/ngFeather/fork"
                data-size="large"
                data-show-count="true"
                aria-label="Fork pranavirabatti4/ngFeather on GitHub"
                >Fork</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
})
export class HeaderComponent {}
