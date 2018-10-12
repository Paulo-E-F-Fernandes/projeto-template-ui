// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Application
import { HomeComponent } from './components/home/home.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full', outlet: 'main-content' },
  { path: 'signUp', component: UserRegistrationComponent },
  { path: 'home', component: HomeComponent },
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