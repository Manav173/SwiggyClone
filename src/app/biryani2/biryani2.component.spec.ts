import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Biryani2Component } from './biryani2.component';

describe('Biryani2Component', () => {
  let component: Biryani2Component;
  let fixture: ComponentFixture<Biryani2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Biryani2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Biryani2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
