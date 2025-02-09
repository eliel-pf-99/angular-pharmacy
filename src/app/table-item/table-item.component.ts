import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductItem } from '../table/table.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'tr[app-table-item]',
  imports: [MatIconModule],
  templateUrl: './table-item.component.html',
  styleUrl: './table-item.component.css'
})
export class TableItemComponent {
  @Input({required: true}) product!: ProductItem
  @Output() selectId = new EventEmitter<number>();

  get onGetDayRest(): number {
    const day = this.convertStrtoDay(this.product.validade)
    const oneDay = 24 * 60 * 60 * 1000;
    const today = new Date();
    const result =  Math.round(Math.floor((day.getTime() - today.getTime()) / oneDay)) + 1
    return result
  }

  convertStrtoDay(day: string): Date {
    // XX/XX/XXXX
    let [d, m, y] = day.split('/');
    let date = m + '/' + d + '/' + y
    return new Date(date)
  }

  onEdit(){
    this.selectId.emit(this.product.id)
  }
}
