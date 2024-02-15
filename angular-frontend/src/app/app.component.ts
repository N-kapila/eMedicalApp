import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectTextfieldComponent } from '../components/select-textfield/select-textfield.component';
import { TextfieldsComponent } from '../components/textfields/textfields.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TextfieldsComponent,SelectTextfieldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-HealthHub';
  // textValue: string = '';
  // password: string = '';

  // selectedOption: any = undefined;
  // selectOptions: { value: any, label: string }[];

  // constructor() {
  //   // Sample options data
  //   this.selectOptions = [
  //     { value: 'option1', label: 'Option 1' },
  //     { value: 'option2', label: 'Option 2' },
  //     { value: 'option3', label: 'Option 3' }
  //   ];
  // }
}
