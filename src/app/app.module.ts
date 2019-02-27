import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes} from './app-routing/app-routing.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PurchaseComponent } from './purchase/purchase.component';
import {create_serviceComponent } from './create_service/create_service.component';
import {HttpClientModule} from '@angular/common/http';
import { ListOfServicesComponent } from './list-of-services/list-of-services.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MetamaskErrorComponent } from './metamask-error/metamask-error.component';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PurchaseComponent,
    create_serviceComponent,
    ListOfServicesComponent,
    MetamaskErrorComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgxSpinnerModule
    
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
