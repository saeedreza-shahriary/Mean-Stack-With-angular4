import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule, Routes } from '@angular/router'; 
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    {path:'', component:HomeComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'**', component:HomeComponent}
]

@NgModule({
    declarations: [],
    imports: [ RouterModule.forRoot(appRoutes)],
    providers: [],
    bootstrap: [],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }