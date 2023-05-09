import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, Inject } from '@angular/core';
import { WINDOW } from '../../shared/tokens/config';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [
    { provide: WINDOW, useValue: window }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  constructor(
    @Inject(WINDOW) private window: Window,
    @Inject(DOCUMENT) private document: Document
  ) {}
  menuItems = [
    {text: 'Getting Started', link: '/', externalLink:false, bold: false, active: true, heading: false}, 
    {text: 'Github Repo', link: 'https://github.com/pranavirabatti4/ngFeather.git', externalLink:true, bold: false, active: false, heading: false}, 
    {text: 'Modules', link: '#', bold: true, externalLink:false, active: false, heading: true}, 
    {text: 'Progress Bar (Soon)', link: 'progress-bar', bold: false, externalLink:false, active: false, heading: false},
    {text: 'Alert (Soon)', link: '', bold: false, externalLink:false, active: false, heading: false}
  ];
  innerWidth!:number;
  selectedLink: any; 

  @HostListener('window:resize') onResize() {
    this.innerWidth = this.window.innerWidth;
  }

  onItemSelect(event: any) {
    const eleRef: any = this.document.querySelector('#sidebar-wrapper a.active');
    // Remove active class from previously selected anchor tag
    eleRef.classList.remove('active');

    if (this.selectedLink) {
      this.selectedLink.target.classList.remove('active');
    }
    // Add active class to newly selected anchor tag
    event.target.classList.add('active');

    // Set the selectedLink variable to the newly selected anchor tag
    this.selectedLink = event;
  }

}
