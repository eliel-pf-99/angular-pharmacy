import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FilterComponent } from "./filter/filter.component";
import { ProductItem } from './table/table.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TableItensComponent } from "./table/table.component";
import { FilterByDate } from './filter/filter.model';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FilterComponent, HttpClientModule, TableItensComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  products!: ProductItem[];
  httpClient = inject(HttpClient)
  url = "https://pharmacy-control.onrender.com"

  constructor() {
  }

  async ngOnInit(): Promise<void> {
    this.onGetData()
  }

  onGetData() {
    this.httpClient.get<ProductItem[]>(this.url + "/api/produtos")
      .subscribe(res => { this.products = res })
  }

  onGetDataFilter(data: FilterByDate) {
    if(data.cancel){
      this.onGetData()
      return
    }
    this.httpClient.get<ProductItem[]>(this.url + `/api/produtos/filter/?de=${data.de}&ate=${data.ate}`)
      .subscribe(res => {this.products = res})
  }

  onSearch(search: string){
    if(search == ''){
      this.onGetData();
    }
      this.httpClient.get<ProductItem[]>(this.url + `/api/produtos/search/${search}`)
      .subscribe(res => this.products = res)
  }

  onDelete(id: number){
    this.httpClient.delete(this.url + `/api/produtos/${id}`).subscribe(res => console.log(res));
    this.onGetData();
  }

  title = 'pharmacy';
}
