import { Component } from '@angular/core';
import { SelectTextfieldComponent } from '../../../components/select-textfield/select-textfield.component';
import { TextfieldsComponent } from '../../../components/textfields/textfields.component';

@Component({
  selector: 'app-patient-register',
  standalone: true,
  imports: [TextfieldsComponent,SelectTextfieldComponent],
  templateUrl: './patient-register.component.html',
  styleUrl: './patient-register.component.css'
})
export class PatientRegisterComponent {
selectedOption: any = undefined;
  selectOptions: { value: any, label: string }[];

  constructor() {
    // Sample options data
    this.selectOptions = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' }
    ];
  }
}
