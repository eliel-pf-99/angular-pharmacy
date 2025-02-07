import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductItem } from '../table-itens/table-itens.model';

@Component({
  selector: 'app-new-product',
  imports: [FormsModule, HttpClientModule],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {
  @Output() close = new EventEmitter<void>();

  enteredSKU = '';
  enteredName = '';
  enteredBar = '';
  enteredDate = '';
  enteredQtd = '';
  httpClient = inject(HttpClient);

  onCancel() {
    this.close.emit();
  }

  onCreate() {
    let product: ProductItem = {
      sku: this.enteredSKU,
      nome: this.enteredName,
      quantidade: Number(this.enteredQtd),
      validade: this.enteredDate
    };
    this.httpClient.post("http://127.0.0.1:8000/api/produtos", product).subscribe(res => {
      console.log(res);
    })
  }
}
