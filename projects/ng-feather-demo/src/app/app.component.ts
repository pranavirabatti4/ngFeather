import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-wrapper>
      <app-sidebar></app-sidebar>
      <app-header></app-header>
      <router-outlet></router-outlet>
    </app-wrapper>
  `,
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = "ng-feather-demo";
}
