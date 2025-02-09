import { Component, Input } from '@angular/core';
import { ProductItem } from './table-itens.model';


@Component({
  selector: 'app-table-itens',
  imports: [],
  templateUrl: './table-itens.component.html',
  styleUrl: './table-itens.component.css'
})
export class TableItensComponent {
  @Input({ required: true }) products!: ProductItem[]

  onGetDayRest(day: Date): number {
    const oneDay = 24 * 60 * 60 * 1000;
    const today = new Date();
    return Math.round(Math.floor((day.getTime() - today.getTime()) / oneDay)) + 1
  }

  convertStrtoDay(day: string): Date {
    // XX/XX/XXXX
    let [d, m, y] = day.split('/');
    let date = m + '/' + d + '/' + y
    return new Date(date)
  }
}
