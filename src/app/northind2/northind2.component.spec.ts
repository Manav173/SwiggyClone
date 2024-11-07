import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Northind2Component } from './northind2.component';

describe('Northind2Component', () => {
  let component: Northind2Component;
  let fixture: ComponentFixture<Northind2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Northind2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Northind2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
