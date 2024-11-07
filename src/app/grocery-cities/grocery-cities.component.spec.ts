import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryCitiesComponent } from './grocery-cities.component';

describe('GroceryCitiesComponent', () => {
  let component: GroceryCitiesComponent;
  let fixture: ComponentFixture<GroceryCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroceryCitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroceryCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
