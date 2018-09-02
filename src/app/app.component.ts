// Angular
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

// ngx-translate
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private titleService: Title, public translateService: TranslateService, private router: Router) {
    let pageTitle = 'Page Title'; 
    this.titleService.setTitle(pageTitle);

    translateService.setDefaultLang('pt');
    translateService.use('pt');

    // Feita a navegação inicial para o routing mapeado por 'home' 
    this.router.navigate(['/home'], { skipLocationChange: true });
  }
  
}
