import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductItem } from './table.model';
import {MatIconModule} from '@angular/material/icon'
import { EditComponent } from "../edit/edit.component";
import { TableItemComponent } from "../table-item/table-item.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [MatIconModule, EditComponent, TableItemComponent, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableItensComponent {
  @Input({ required: true }) products!: ProductItem[]
  @Output() uptaded = new EventEmitter<void>();
  @Output() delete = new EventEmitter<number>();
  isUpdating = false
  selectedId: number = 0

  onEdit(id: number){
    this.selectedId = id;
    this.isUpdating = true;
  }

  onClose(){
    this.isUpdating = false;
  }

  onUpdate(){
    this.isUpdating = false;
    this.uptaded.emit();
  }

  onDelete(id: number){
    this.isUpdating = false;
    this.delete.emit(id);
  }

  onGetDayRest(day: Date): number {
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
  
}
