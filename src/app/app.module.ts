// Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

// ngx-translate
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

// PrimeNG
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

// Application
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarMenuComponent } from './components/navbar-menu/navbar-menu.component';
import { NavbarSidebarComponent } from './components/navbar-sidebar/navbar-sidebar.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

// Adicionando os estilos de ícones no objeto "library" para facilitar o acesso nos outros componentes.
library.add(fab, fas);

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarSidebarComponent,
    NavbarComponent,
    NavbarMenuComponent
  ],
  imports: [
    // Angular
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,

    // Font Awesome
    FontAwesomeModule,

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
