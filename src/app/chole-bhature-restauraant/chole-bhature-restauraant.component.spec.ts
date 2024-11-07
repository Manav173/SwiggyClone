import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CholeBhatureRestauraantComponent } from './chole-bhature-restauraant.component';

describe('CholeBhatureRestauraantComponent', () => {
  let component: CholeBhatureRestauraantComponent;
  let fixture: ComponentFixture<CholeBhatureRestauraantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CholeBhatureRestauraantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CholeBhatureRestauraantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
