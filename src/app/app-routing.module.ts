import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  { path:'', redirectTo:'/login', pathMatch:'full' },
  { path:'login', component:LoginComponent , pathMatch: 'full'}, 
  { path:'products', component:ProductsComponent , pathMatch: 'full'}, 
  { path:'feedback', component:FeedbackComponent , pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
