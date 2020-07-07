import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import {CreateComponent} from './create/create.component'


const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
   
  },
  {
    path:'product',
    component:ProductComponent,
  },
  {
    path:'header',
    component:HeaderComponent,
  },
  {
    path:'product/create',
    component:CreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
