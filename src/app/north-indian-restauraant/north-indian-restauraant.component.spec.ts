import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthIndianRestauraantComponent } from './north-indian-restauraant.component';

describe('NorthIndianRestauraantComponent', () => {
  let component: NorthIndianRestauraantComponent;
  let fixture: ComponentFixture<NorthIndianRestauraantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NorthIndianRestauraantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NorthIndianRestauraantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
