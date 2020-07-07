import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductService} from '../product/product.service'
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

 public form:{
    idProduct:'',
    tenSanPham:'',
    giaBan:'',
    moTa:'',
    hinh:''
  };
  constructor(private productService:ProductService, private router:Router) { }
  submitForm(){
    
    this.productService.create(this.form).subscribe((data)=>{
      console.log(this.form)
      if(data != null){
        alert('thêm thành công');
      }
    })
  }
  ngOnInit(): void { 
    console.log(this.form.tenSanPham)
  }

}
// Điện thoại thông minh được giới trẻ tin dùng nhờ có hình ảnh của Sơn Tùng MTP
