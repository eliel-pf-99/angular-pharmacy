import { Component, EventEmitter, Output } from '@angular/core';
import { SearchComponent } from "../search/search.component";
import { NewProductComponent } from "../new-product/new-product.component";

@Component({
  selector: 'app-header',
  imports: [SearchComponent, NewProductComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() update = new EventEmitter<void>();
  @Output() go = new EventEmitter<string>();

  isAddProduct = false;

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

  onSearch(search: string){
    this.go.emit(search);
  }
  
}
