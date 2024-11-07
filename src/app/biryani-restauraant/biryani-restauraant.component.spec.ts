import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiryaniRestauraantComponent } from './biryani-restauraant.component';

describe('BiryaniRestauraantComponent', () => {
  let component: BiryaniRestauraantComponent;
  let fixture: ComponentFixture<BiryaniRestauraantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiryaniRestauraantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiryaniRestauraantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
