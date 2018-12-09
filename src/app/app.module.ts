// Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Font Awesome
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

// ngx-translate
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

// PrimeNG
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';

// Application
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BaseProjectModule } from './base-project/base-project.module';
import { CancelButtonComponent } from './base-project/components/cancel-button/cancel-button.component';
import { FooterComponent } from './base-project/components/footer/footer.component';
import { HomeComponent } from './base-project/components/home/home.component';
import { LoginComponent } from './base-project/components/login/login.component';
import { NavbarComponent } from './base-project/components/navbar/navbar.component';
import { NavbarMenuComponent } from './base-project/components/navbar-menu/navbar-menu.component';
import { NavbarSidebarComponent } from './base-project/components/navbar-sidebar/navbar-sidebar.component';
import { UserRegistrationComponent } from './base-project/components/user-registration/user-registration.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

// Adicionando os estilos de ícones no objeto "library" para facilitar o acesso nos outros componentes.
library.add(fab, fas);

@NgModule({
  declarations: [
    AppComponent,
    CancelButtonComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    NavbarMenuComponent,
    NavbarSidebarComponent,
    UserRegistrationComponent
  ],
  imports: [
    // Application
    AppRoutingModule,
    BaseProjectModule,

    // Angular
    BrowserAnimationsModule,
    BrowserModule,
    CheckboxModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    // Font Awesome
    FontAwesomeModule,

    // PrimeNG
    ButtonModule,
    InputTextModule,
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
