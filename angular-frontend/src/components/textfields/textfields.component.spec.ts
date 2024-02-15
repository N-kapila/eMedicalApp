import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldsComponent } from './textfields.component';

describe('TextfieldsComponent', () => {
  let component: TextfieldsComponent;
  let fixture: ComponentFixture<TextfieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextfieldsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextfieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
