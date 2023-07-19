import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutejemDosComponent } from './routejem-dos.component';

describe('RoutejemDosComponent', () => {
  let component: RoutejemDosComponent;
  let fixture: ComponentFixture<RoutejemDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutejemDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutejemDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
