import { Component } from '@angular/core';
import { SearchComponent } from "../search/search.component";
import { NewProductComponent } from "../new-product/new-product.component";

@Component({
  selector: 'app-header',
  imports: [SearchComponent, NewProductComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

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
}
