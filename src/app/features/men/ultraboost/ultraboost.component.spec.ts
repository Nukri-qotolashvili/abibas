import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltraboostComponent } from './ultraboost.component';

describe('UltraboostComponent', () => {
  let component: UltraboostComponent;
  let fixture: ComponentFixture<UltraboostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UltraboostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UltraboostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
