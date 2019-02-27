import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { PurchaseComponent } from '../purchase/purchase.component';
import { ListOfServicesComponent } from '../list-of-services/list-of-services.component';
import {create_serviceComponent } from '../create_service/create_service.component';
import { CheckAdminGuard } from '../check-admin.guard';
import { MetamaskErrorComponent } from '../metamask-error/metamask-error.component';
import { LoginComponent } from '../login/login.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
export  const  routes: Routes = [
  {
    path: 'login',
    component:LoginComponent,
  },
  { 
    path: 'admin',
    component: create_serviceComponent,
    canActivate : [CheckAdminGuard]
  },
  { 
    path: 'purchase',
    component:PurchaseComponent
  },
  {
    path: 'service',
    component:ListOfServicesComponent,
  },
{ 
  path: 'metamask',
  component:MetamaskErrorComponent
},
   { 
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
