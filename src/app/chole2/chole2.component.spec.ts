import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chole2Component } from './chole2.component';

describe('Chole2Component', () => {
  let component: Chole2Component;
  let fixture: ComponentFixture<Chole2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chole2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chole2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
