import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarteBancaireComponent } from './carte-bancaire/carte-bancaire.component';
import { AddUserComponent } from './signup/add-user.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MatSliderModule } from '@angular/material/slider';
import { AccountComponent } from './account/account.component';
import { ShowAccountsComponent } from './show-accounts/show-accounts.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ChoiceAccountComponent } from './choice-account/choice-account.component';
import { TransactionComponent } from './transaction/transaction.component';
import { BeneficierComponent } from './beneficier/beneficier.component';
import { InterceptorAuth } from './Services/_auth_interceptor.service';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { UpdateBeneficierComponent } from './update-beneficier/update-beneficier.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    CarteBancaireComponent,
    AddUserComponent,
    LoginComponent,
    HeaderComponent,
    AccountComponent,
    ShowAccountsComponent,
    DashboardComponent,
    HomeComponent,
    NavComponent,
    ChoiceAccountComponent,
    TransactionComponent,
    BeneficierComponent,
    AddTransactionComponent,
    UpdateBeneficierComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSliderModule,
    DragDropModule,
    AppRoutingModule
  ],
  providers: [

    { provide: HTTP_INTERCEPTORS, useClass: InterceptorAuth, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


