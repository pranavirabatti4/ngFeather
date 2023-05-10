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
              <iframe
                src="https://ghbtns.com/github-btn.html?user=pranavirabatti4&repo=ngFeather&type=star&count=true&size=large"
                frameborder="0"
                scrolling="0"
                width="170"
                height="30"
                title="GitHub"
              ></iframe>

              <!-- Place this tag where you want the button to render. -->
              <iframe
                src="https://ghbtns.com/github-btn.html?user=pranavirabatti4&repo=ngFeather&type=fork&count=true&size=large"
                frameborder="0"
                scrolling="0"
                width="170"
                height="30"
                title="GitHub"
              ></iframe>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
})
export class HeaderComponent {}
