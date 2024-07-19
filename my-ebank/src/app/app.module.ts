import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarteBancaireComponent } from './carte-bancaire/carte-bancaire.component';
import { AddUserComponent } from './signup/add-user.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MatSliderModule } from '@angular/material/slider';
import { AccountComponent } from './account/account.component';
import { ShowAccountsComponent } from './show-accounts/show-accounts.component';

@NgModule({
  declarations: [
    AppComponent,
    CarteBancaireComponent,
    AddUserComponent,
    LoginComponent,
    HeaderComponent,
    AccountComponent,
    ShowAccountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
