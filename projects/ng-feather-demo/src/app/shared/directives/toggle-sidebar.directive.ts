import { DOCUMENT } from '@angular/common';
import { Directive, HostListener, Inject } from '@angular/core';

@Directive({
  selector: '[appToggleSidebar]',
})
export class ToggleSidebarDirective {
  constructor(
      @Inject(DOCUMENT) private document: Document
    ) { }

  @HostListener('click', ['$event']) onClick(event: any) {
    event.preventDefault();

    this.document.body.classList.toggle('sb-sidenav-toggled');
    const page_content_wrapper = this.document.body.querySelector('#page-content-wrapper');
    if(page_content_wrapper){
      page_content_wrapper.classList.toggle('full-width');
    }
    localStorage.setItem('sb|sidebar-toggle', String(this.document.body.classList.contains('sb-sidenav-toggled')));
  }
}





