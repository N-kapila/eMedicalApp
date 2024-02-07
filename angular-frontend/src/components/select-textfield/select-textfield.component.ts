import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-textfield',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-textfield.component.html',
  styleUrl: './select-textfield.component.css'
})
export class SelectTextfieldComponent {
@Input() value: any;
  @Input() placeholder!: string;
  @Input() options!: { value: any, label: string }[];

  onChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log('Selected value:', selectedValue);
  }


}
