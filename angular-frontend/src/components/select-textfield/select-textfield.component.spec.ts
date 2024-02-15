import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTextfieldComponent } from './select-textfield.component';

describe('SelectTextfieldComponent', () => {
  let component: SelectTextfieldComponent;
  let fixture: ComponentFixture<SelectTextfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectTextfieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectTextfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
