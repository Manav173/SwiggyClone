import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chole3Component } from './chole3.component';

describe('Chole3Component', () => {
  let component: Chole3Component;
  let fixture: ComponentFixture<Chole3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chole3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chole3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
