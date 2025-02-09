import { Component, EventEmitter, Output } from '@angular/core';
import { SearchComponent } from "../search/search.component";
import { NewProductComponent } from "../new-product/new-product.component";
import { FilterByDate } from '../filter/filter.model';

@Component({
  selector: 'app-header',
  imports: [SearchComponent, NewProductComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() update = new EventEmitter<void>();

  isAddProduct = false;

  onNew(): void {
    console.log("New clicked!")
  }

  onClose() {
    this.isAddProduct = false;
  }

  onStartAddProduct() {
    this.isAddProduct = true;
  }

  onUpdateData() {
    this.isAddProduct = false;
    this.update.emit();
  }

  
}
