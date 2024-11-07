import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pizza3Component } from './pizza3.component';

describe('Pizza3Component', () => {
  let component: Pizza3Component;
  let fixture: ComponentFixture<Pizza3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pizza3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pizza3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
