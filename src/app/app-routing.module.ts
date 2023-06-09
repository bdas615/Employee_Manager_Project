import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DialogBodyComponent } from './components/dialog-body/dialog-body.component';
import { ResolveServService } from './resolve-serv.service';
import { LoginComponent } from './access/login/login.component';
import { RegisterComponent } from './access/register/register.component';
import { AddEmployeeCompComponent } from './components/add-employee-comp/add-employee-comp.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const routes: Routes = [
  { path:'homepage', component:HomepageComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component:RegisterComponent },
  { path: 'addEmployee', component: AddEmployeeCompComponent},
  { path: '404', component:ErrorPageComponent },
  { path:'', redirectTo: 'homepage' , pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
