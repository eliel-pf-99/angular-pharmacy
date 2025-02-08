import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductItem } from '../table-itens/table-itens.model';
import { convertDate } from '../utils';

@Component({
  selector: 'app-new-product',
  imports: [FormsModule, HttpClientModule],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {
  @Output() close = new EventEmitter<void>();
  @Output() update = new EventEmitter<void>();

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
    let product = JSON.stringify({
      nome: this.enteredName,
      sku: this.enteredSKU,
      barras: this.enteredBar,
      quantidade: this.enteredQtd,
      validade: convertDate(this.enteredDate),
    })
    console.log(product);
    fetch("http://127.0.0.1:8000/api/produtos", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: product
    }).then(res => { if (res.ok) this.update.emit() });
  }

}
