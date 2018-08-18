// Angular
import { Component, OnInit, Input } from '@angular/core';

// Application
import { Menu } from '../../domains/menu';

@Component({
  selector: 'app-navbar-sidebar',
  templateUrl: './navbar-sidebar.component.html',
  styleUrls: ['./navbar-sidebar.component.css']
})
export class NavbarSidebarComponent implements OnInit {

  @Input() menuItems : Menu[];
  sidebarTitle: string = 'Sidebar Title';
  display: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showMenus(show: boolean) {
    this.display = show;
  }

}
