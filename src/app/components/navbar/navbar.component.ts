// Angular
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// Application
import { Menu } from '../../domains/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuItemsReturned : Menu[] = [];
  pageLogo: string = '/assets/img/logo.png';
  pageName: string;
  
  constructor(private titleService: Title) { 
    this.pageName = this.titleService.getTitle();
  }

  ngOnInit() {
    // mock - será ajustado na Task #11
    this.menuItemsReturned.push(new Menu('home', 'LABEL.MENU.HOME', 'home').isActive());
    // this.menuItemsReturned.push(new Menu('tab1', 'Tab 1', 'tab.1.controller'));
    // this.menuItemsReturned.push(new Menu('tab2', 'Tab 2', 'tab.2.controller'));
    // this.menuItemsReturned.push(new Menu('tab3', 'Tab 3', 'tab.3.controller'));
    // this.menuItemsReturned.push(new Menu('tab4', 'Tab 4', 'tab.4.controller'));
    this.menuItemsReturned.push(new Menu('signUp', 'LABEL.MENU.SIGN_UP', 'signUp'));
    // this.menuItemsReturned.push(new Menu('tab6', 'Tab 6', 'tab.6.controller'));
  }

}
