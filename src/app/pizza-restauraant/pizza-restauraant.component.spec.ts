import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaRestauraantComponent } from './pizza-restauraant.component';

describe('PizzaRestauraantComponent', () => {
  let component: PizzaRestauraantComponent;
  let fixture: ComponentFixture<PizzaRestauraantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaRestauraantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaRestauraantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
