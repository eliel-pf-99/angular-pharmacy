import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { convertDateDMY as convertDate } from '../utils';

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
    this.enteredQtd = String(this.enteredQtd)
    let product = JSON.stringify({
      nome: this.enteredName,
      sku: this.enteredSKU,
      barras: this.enteredBar,
      quantidade: String(this.enteredQtd),
      validade: convertDate(this.enteredDate),
    })
    console.log(product);
    fetch("https://pharmacy-control.onrender.com/api/produtos", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: product
    }).then(res => { if (res.ok) this.update.emit() });
  }

}
