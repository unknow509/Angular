import { Component, OnInit } from '@angular/core';
import { Product } from '../model';
import { ProductService } from './product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor( public productService:ProductService
    ) { }
 
  ngOnInit(): void {
    this.productService.getAll().subscribe((data: Product[])=>{
      console.log(data);
      this.products = data;
    }) 
  }
}
