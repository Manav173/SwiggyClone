import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Biryani4Component } from './biryani4.component';

describe('Biryani4Component', () => {
  let component: Biryani4Component;
  let fixture: ComponentFixture<Biryani4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Biryani4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Biryani4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
