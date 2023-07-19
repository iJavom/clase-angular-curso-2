import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutejemUnoComponent } from './routejem-uno.component';

describe('RoutejemUnoComponent', () => {
  let component: RoutejemUnoComponent;
  let fixture: ComponentFixture<RoutejemUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutejemUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutejemUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
