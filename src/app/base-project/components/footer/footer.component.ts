// Angular
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public footerPageName: String;
  public footerYearCreated: Number;
  public footerYearCurrent: Number;

  constructor(titleService: Title) {
    this.footerPageName = titleService.getTitle();
  }

  ngOnInit() {
    this.footerYearCreated = 2018;
    this.footerYearCurrent = new Date().getFullYear();
  }

}
