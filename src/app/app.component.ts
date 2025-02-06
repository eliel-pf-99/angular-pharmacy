import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FilterComponent } from "./filter/filter.component";
import { TableItensComponent } from "./table-itens/table-itens.component";
import { ProdutosAPI } from "./api/produtos";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FilterComponent, TableItensComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  products: any;

  async ngOnInit(): Promise<void> {
    const api = new ProdutosAPI()
    this.products = await api.onGetProduct();
  }

  title = 'pharmacy';


}
