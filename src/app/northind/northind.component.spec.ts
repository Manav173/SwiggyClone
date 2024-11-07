import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthindComponent } from './northind.component';

describe('NorthindComponent', () => {
  let component: NorthindComponent;
  let fixture: ComponentFixture<NorthindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NorthindComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NorthindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
