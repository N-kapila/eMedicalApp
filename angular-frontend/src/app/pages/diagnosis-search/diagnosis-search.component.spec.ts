import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisSearchComponent } from './diagnosis-search.component';

describe('DiagnosisSearchComponent', () => {
  let component: DiagnosisSearchComponent;
  let fixture: ComponentFixture<DiagnosisSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagnosisSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiagnosisSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
