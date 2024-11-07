import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pizza2Component } from './pizza2.component';

describe('Pizza2Component', () => {
  let component: Pizza2Component;
  let fixture: ComponentFixture<Pizza2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pizza2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pizza2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
