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
  
}
