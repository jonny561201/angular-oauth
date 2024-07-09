import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountComponent} from "./pages/account/account.component";
import {authGuardFn} from "@auth0/auth0-angular";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [authGuardFn]
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
