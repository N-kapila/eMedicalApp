import { Component, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-textfields',
  standalone: true,
  imports: [],
  templateUrl: './textfields.component.html',
  styleUrl: './textfields.component.css'
})

export class TextfieldsComponent {
  @Input() placeholder!: string;
  @Input() value!: any;

}
