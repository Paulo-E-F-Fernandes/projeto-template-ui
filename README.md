# Projeto Projeto-Template-UI

* Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8, através do comando `ng new projeto-template-ui`.

---
## Tecnologias utilizadas

* Este projeto foi estruturado para utilizar as seguintes tecnologias:
	* [Angular 6](https://angular.io/);
    * [PrimeNG 6.1.0](https://www.primefaces.org/primeng/#/);
    * [Bootstrap 4.1.3](https://getbootstrap.com/);
	* [ngx-translate 10.0.2](https://github.com/ngx-translate/core).

---
## Pré-requisitos

* O versionador de código [*Git*](https://git-scm.com/);
* IDE compatível com [*TypeScript*](https://www.typescriptlang.org/) (Ex.: [*Visual Studio Code*](https://code.visualstudio.com/));
* [*Node.js*](https://nodejs.org/en/) e [*npm*](https://www.npmjs.com/). O *npm* é instalado junto com o *Node.js*;
* [*Angular CLI*](https://cli.angular.io/). Para instalar o *Angular CLI* usaremos o *npm*. Para isso é necessário  **1)** Abrir um janela de terminal e **2)** executar o comando `npm install -g @angular/cli => -g = global`.

---
## Configuração do ambiente

* Clonar os fontes do repositório *git* via **ssh** `git clone git@github.com:Paulo-E-F-Fernandes/projeto-template-ui.git` **OU https** `git clone https://github.com/Paulo-E-F-Fernandes/projeto-template-ui.git`;
* Entrar no diretório **projeto-template-ui** que foi criado, abrir os arquivos abaixo, procurar pelo texto *projeto-template-ui* e alterar pelo nome do projeto que está sendo criado; 
	* `angular.json`
	* `package.json`
	* `package-lock.json`
* Abrir uma janela de terminal neste diretório e executar o comando `npm install`, com isso é criado o diretório **node_modules** com as dependências do projeto;
* Após a execução do **npm install** já é possível iniciar o servidor com o comando `ng serve`;
* Importar o projeto no *Visual Studio Code*, para isso, após abrir a *IDE*, selecionar *File* > *Open Folder...* e selecionar o diretório do **template-ui**;
* Após importado o projeto, para facilitar podemos abrir um terminal dentro da *IDE*, através do menu *View* > *Integrated Terminal*

---
## Servidor de desenvolvimento

* Para executar o servidor de desenvolvimento é só executar no terminal o comando `ng serve`, com isso a aplicação será publicada em um servidor *Node*. Para acessar a aplicação é só colocar a URL `http://localhost:4200/` no browser.

	**OBS.:** Qualquer alteração nos códigos fontes da aplicação será automaticamente recarregada no browser.

---
## Comandos para criar os artefatos

* Para gerar um novo componente execute o comando `ng generate component components/[NOME_COMPONENTE]` ou de maneira resumida, apenas `ng g c components/[NOME_COMPONENTE]`.

	**OBS.:** Para que o *Angular CLI* não gere o arquivo de teste, é preciso adicionar o parâmetro `--spec=false`, por exemplo `ng g c components/[NOME_COMPONENTE] --spec=false`.

* Para gerar uma nova classe execute o comando `ng generate class [NOME_DIRETÓRIO]/[NOME_CLASSE]`.
	* Criar as classes que representam as entidades no diretório **domains**.

* Para gerar um serviço execute o comando `ng generate service [NOME_DIRETÓRIO]/[NOME_SERVICO]`, com isso será gerado o serviço que será responsável por acessar a API Rest.


## Configurações da aplicação
* Alterar ***favicon.ico***:
	* Substituir o arquivo ***favicon.ico*** localizado em ***src*/**. Este arquivo é referenciado no ***index.html***.
* Alterar o logo da aplicação:
	* Substituir o arquivo ***logo.png*** localizado em ***src*/*assets*/*img***. O caminho para o logo é informado na variável ***pageLogo*** do arquivo ***navbar.component.ts*** que está localizado em ***src*/*app*/*navbar***.
* Alterar o nome da aplicação:
	* O nome da aplicação pode ser alterado no arquivo ***app.component.ts*** que está localizado no diretório ***src*/*app***, alterando o valor da variável **pageTitle**.
* **Cores** da aplicação:
	* Utilizar o arquivo ***styles.css*** localizado em ***src*/**.
* **Internacionalização** da aplicação:
	* A internacionalização é feita pelo módulo ***ngx-translate*** e para utilizar é necessário usar os seguintes passos:
		* Criar um arquivo ***json*** no diretório ***src*/*assets*/*i18n** para a linguagem que se quer fazer a tradução;
		* Usar nos arquivos de *html* a seguinte expressão `{{ 'KEY_ARQUIVO_JSON' | translate }}`, sendo que `KEY_ARQUIVO_JSON` é uma chave que deve ser declarada no arquivo *json* criado anteriormente.

---
# Story Board
* [Projeto Template | Trello](https://trello.com/b/3LxDAX2z/projeto-template)

---
# Opções de execução

## Build da aplicação

* Executar o comando `ng build` para buildar o projeto. O artefato gerado será armazenado no diretório `dist/`. Usar a *flag* `--prod` para gerar a aplicação de produção.

---
## Executar os testes unitários

* Para executar os teste unitários execute o comando `ng test`. Será executado os testes via [Karma](https://karma-runner.github.io).

---
## Executar os testes *end-to-end*

* Para executar testes *end-to-end*, execute o comando `ng e2e`. Será executado os testes via [Protractor](http://www.protractortest.org/).

---
# Ajuda

* Para ajuda com o Angular CLI use `ng help` ou acesse [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).