// Angular
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerPageName: String;
  footerVersionUI: String;
  footerVersionAPI: String;
  footerYearCreated: Number;
  footerYearCurrent: Number;

  constructor(titleService: Title) {
    this.footerPageName = titleService.getTitle();
  }

  ngOnInit() {
    this.footerVersionAPI = '0.0.1-SNAPSHOT'; // Buscar da API
    this.footerVersionUI = '0.0.1'; // Criar um arquivo com a versão e notas da versão 
    this.footerYearCreated = 2018;
    this.footerYearCurrent = new Date().getFullYear();
  }

}
