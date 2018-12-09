// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Application
import { HomeComponent } from './base-project/components/home/home.component';
import { UserRegistrationComponent } from './base-project/components/user-registration/user-registration.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full', outlet: 'main-content' },
  { path: 'home', component: HomeComponent },
  { path: 'signUp', component: UserRegistrationComponent }
  //{ path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }