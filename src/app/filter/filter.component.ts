import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { convertDate } from '../utils';

@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  enteredDe = ''
  enteredAte = ''

  onSubmit() {
    console.log(convertDate(this.enteredAte), convertDate(this.enteredDe));
  }
}
