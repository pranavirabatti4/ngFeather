import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFeatherComponent } from './ng-feather.component';

describe('NgFeatherComponent', () => {
  let component: NgFeatherComponent;
  let fixture: ComponentFixture<NgFeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgFeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgFeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
