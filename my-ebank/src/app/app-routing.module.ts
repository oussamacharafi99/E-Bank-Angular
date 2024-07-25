import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChoiceAccountComponent } from './choice-account/choice-account.component';
import { UpdateBeneficierComponent } from './update-beneficier/update-beneficier.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'choice' , component:ChoiceAccountComponent},
  {path:'dashboard/:id' , component:DashboardComponent},
  {path:'beneficier/:idB' , component:UpdateBeneficierComponent},
  {path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
