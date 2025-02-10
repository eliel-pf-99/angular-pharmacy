import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { convertDateDMY as convertDate, convertDateYMD } from '../utils';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductItem } from '../table/table.model';

@Component({
  selector: 'app-edit',
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  @Output() update = new EventEmitter<void>();
  @Output() delete = new EventEmitter<number>();
  @Input({required: true}) id!: number

  ngOnInit(): void {
    this.httpClient.get<ProductItem>(`https://pharmacy-control.onrender.com/api/produtos/id/${this.id}`)
      .subscribe(res => {
        this.enteredSKU = res.sku;
        this.enteredName = res.nome;
        this.enteredDate = convertDateYMD(res.validade);
        this.enteredQtd = String(res.quantidade);
        this.enteredBar = res.barras;
      })
  }

  enteredSKU = '';
  enteredName = '';
  enteredBar = '';
  enteredDate = '';
  enteredQtd = '';
  httpClient = inject(HttpClient);

  onCancel() {
    this.close.emit();
  }

  onUpdate() {
    let product = JSON.stringify({
      nome: this.enteredName,
      sku: this.enteredSKU,
      barras: this.enteredBar,
      quantidade: this.enteredQtd,
      validade: convertDate(this.enteredDate),
    })
    fetch(`https://pharmacy-control.onrender.com/api/produtos/${this.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: product
    }).then(res => { if (res.ok) this.update.emit() });
  }

  onClose(){
    this.close.emit();
  }

  onDelete(){
    this.delete.emit(this.id);
  }

}
