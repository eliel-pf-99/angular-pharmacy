import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FilterComponent } from "./filter/filter.component";
import { ProductsService } from './api/api.service';
import { ProductItem } from './table-itens/table-itens.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TableItensComponent } from "./table-itens/table-itens.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FilterComponent, HttpClientModule, TableItensComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  products!: ProductItem[];
  httpClient = inject(HttpClient)

  constructor() {
  }

  async ngOnInit(): Promise<void> {
    this.onGetData()
  }

  onGetData() {
    this.httpClient.get<ProductItem[]>("http://127.0.0.1:8000/api/produtos")
      .subscribe(res => {
        this.products = res;
        for (let r of res) {
          console.log(r);
        }
      })
  }

  title = 'pharmacy';
}
