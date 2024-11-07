import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Biryani3Component } from './biryani3.component';

describe('Biryani3Component', () => {
  let component: Biryani3Component;
  let fixture: ComponentFixture<Biryani3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Biryani3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Biryani3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
