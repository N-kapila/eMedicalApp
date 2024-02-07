import { Component, Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-textfields',
  standalone: true,
  imports: [],
  templateUrl: './textfields.component.html',
  styleUrl: './textfields.component.css'
})

export class TextfieldsComponent {
  @Input() placeholder!: string;
  @Input() size!: string ;
  
}
