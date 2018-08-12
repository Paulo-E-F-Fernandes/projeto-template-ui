// Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// PrimeNG
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

// Application
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarSidebarComponent } from './navbar-sidebar/navbar-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarSidebarComponent
  ],
  imports: [
    // Angular
    BrowserAnimationsModule,
    BrowserModule,

    // PrimeNG
    ButtonModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
