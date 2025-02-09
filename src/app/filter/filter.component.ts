import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { convertDateDMY as convertDate } from '../utils';
import { FilterByDate } from './filter.model';

@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Output() filter = new EventEmitter<FilterByDate>();

  enteredDe = ''
  enteredAte = ''

  onSubmit() {
    let data: FilterByDate = {
      de: convertDate(this.enteredDe),
      ate: convertDate(this.enteredAte),
      cancel: false
    }
    this.filter.emit(data);
  }

  onClean(){
    this.enteredAte = ''
    this.enteredDe = ''
    let data: FilterByDate = {
      de: convertDate(this.enteredDe),
      ate: convertDate(this.enteredAte),
      cancel: true
    }
    this.filter.emit(data);
  }
}
