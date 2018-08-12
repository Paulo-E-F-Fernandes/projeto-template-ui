# Projeto Projeto-Template-UI

* Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8, através do comando `ng new projeto-template-ui`.

---
## Tecnologias utilizadas

* Este projeto foi estruturado para utilizar as seguintes tecnologias:

	* [Angular 6](https://angular.io/);
    * [PrimeNG 6.1.0](https://www.primefaces.org/primeng/#/);
    * [Bootstrap 4.1.3](https://getbootstrap.com/).

---
## Pré-requisitos

* O versionador de código [*Git*](https://git-scm.com/);
* IDE compatível com [*TypeScript*](https://www.typescriptlang.org/) (Ex.: [*Visual Studio Code*](https://code.visualstudio.com/));
* [*Node.js*](https://nodejs.org/en/) e [*npm*](https://www.npmjs.com/). O *npm* é instalado junto com o *Node.js*;
* [*Angular CLI*](https://cli.angular.io/). Para instalar o *Angular CLI* usaremos o *npm*. Para isso é necessário  **1)** Abrir um janela de terminal e **2)** executar o comando `npm install -g @angular/cli => -g = global`.

---
## Configuração do ambiente

* Clonar os fontes do repositório *git* via **ssh** `git clone git@github.com:Paulo-E-F-Fernandes/projeto-template-ui.git` **OU https** `git clone https://github.com/Paulo-E-F-Fernandes/projeto-template-ui.git`;

* Importar o projeto no *Visual Studio Code*, para isso, após abrir a *IDE*, selecionar *File* > *Open Folder...* e selecionar o diretório do **template-ui**;
* Após importado o projeto, para facilitar podemos abrir um terminal dentro da *IDE*, através do menu *View* > *Integrated Terminal*

---
## Servidor de desenvolvimento

* Para executar o servidor de desenvolvimento é só executar no terminal o comando `ng serve`, com isso a aplicação será publicada em um servidor *Node*. Para acessar a aplicação é só colocar a URL `http://localhost:4200/` no browser.

	**OBS.:** Qualquer alteração nos códigos fontes da aplicação será automaticamente recarregada no browser.

---
## Comandos para criar os artefatos

* Para gerar um novo componente execute o comando `ng g c [NOME_COMPONENTE]`.

	**OBS.:** Para que o *Angular CLI* não gere o arquivo de teste, é preciso adicionar o parâmetro `--spec=false`, por exemplo `ng g c [NOME_COMPONENTE] --spec=false`.

## Configurações da aplicação
* Alterar ***favicon.ico***:
	* Substituir o arquivo ***favicon.ico*** localizado em ***src/***. Este arquivo é referenciado no ***index.html***.
* Alterar o logo da aplicação:
	* Substituir o arquivo ***logo.png*** localizado em ***src*/*assets*/*img***. O logo é utilizado em na variável ***pageLogo*** do arquivo ***navbar.component.ts***, localizado em ***src*/*app*/*navbar*/**.
* **Cores** da aplicação:
	* Utilizar o arquivo ***styles.css*** localizado em ***src/***.

---
# Story Board
* [Trello](https://trello.com/b/3LxDAX2z/projeto-template)