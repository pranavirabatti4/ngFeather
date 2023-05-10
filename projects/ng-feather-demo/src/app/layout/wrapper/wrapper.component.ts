import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  template: `
    <main class="d-flex" id="wrapper">
      <ng-content select="app-sidebar">
      </ng-content>

      <div id="page-content-wrapper">
        <ng-content select="app-header">
        </ng-content>

        <div class="container-fluid">
          <ng-content></ng-content>
        </div>
      </div>

    </main>
  `,
  styleUrls: ['./wrapper.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrapperComponent {

}
