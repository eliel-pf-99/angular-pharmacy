import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  imports: [],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) action!: () => void;
}
