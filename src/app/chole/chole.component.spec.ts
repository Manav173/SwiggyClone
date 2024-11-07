import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CholeComponent } from './chole.component';

describe('CholeComponent', () => {
  let component: CholeComponent;
  let fixture: ComponentFixture<CholeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CholeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CholeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
