import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Northind3Component } from './northind3.component';

describe('Northind3Component', () => {
  let component: Northind3Component;
  let fixture: ComponentFixture<Northind3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Northind3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Northind3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
