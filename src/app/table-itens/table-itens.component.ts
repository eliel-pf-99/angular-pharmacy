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
    let today: Date = new Date();
    let difference = day.getTime() - today.getTime();
    let rest_days: number = Math.round(difference / (1000 * 3600 * 24))
    return rest_days
  }

  convertStrtoDay(day: string): Date {
    const parts = day.split('/');
    return new Date(+parts[2], +parts[1] - 1, +parts[0])
  }
}
