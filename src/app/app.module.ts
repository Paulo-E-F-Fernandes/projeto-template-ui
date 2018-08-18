// Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// PrimeNG
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

// ngx-translate
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

// Application
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarSidebarComponent } from './components/navbar-sidebar/navbar-sidebar.component';
import { NavbarMenuComponent } from './components/navbar-menu/navbar-menu.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarSidebarComponent,
    NavbarMenuComponent
  ],
  imports: [
    // Angular
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,

    // PrimeNG
    ButtonModule,
    SidebarModule,

    // ngx-translate
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    // Angular
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
