import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash,faMugHot } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-textfields',
  standalone: true,
  imports: [CommonModule,FormsModule,FontAwesomeModule],
  templateUrl: './textfields.component.html',
  styleUrl: './textfields.component.css'
})

export class TextfieldsComponent {
 faEye = faEye;
  faEyeSlash = faEyeSlash;
  faMugHot= faMugHot;

@Input() type: 'text' | 'password' = 'text'; 
  @Input() placeholder!: string;
  @Input() size: 'sm' | 'md' | 'lg' = 'md'; 
  @Input() value!: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  showPassword: boolean = false;

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  onChange(event: any) {
    this.valueChange.emit(event.target.value);
  }

}
