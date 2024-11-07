import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Northind4Component } from './northind4.component';

describe('Northind4Component', () => {
  let component: Northind4Component;
  let fixture: ComponentFixture<Northind4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Northind4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Northind4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
