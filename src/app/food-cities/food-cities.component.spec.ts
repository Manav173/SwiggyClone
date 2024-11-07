import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCitiesComponent } from './food-cities.component';

describe('FoodCitiesComponent', () => {
  let component: FoodCitiesComponent;
  let fixture: ComponentFixture<FoodCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodCitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
