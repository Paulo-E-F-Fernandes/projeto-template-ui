# Projeto Projeto-Template-UI

* Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 6.0.8, através do comando `ng new projeto-template-ui`.

## Tecnologias utilizadas

* Este projeto foi estruturado para utilizar as seguintes tecnologias:
	* [Angular 6](https://angular.io/);
    * [PrimeNG 6.1.0](https://www.primefaces.org/primeng/#/);
    * [Bootstrap 4.1.3](https://getbootstrap.com/);
	* [ngx-translate 10.0.2](https://github.com/ngx-translate/core);
	* [Font Awesome Angular](https://fontawesome.com/how-to-use/on-the-web/using-with/angular).

## Pré-requisitos

* O versionador de código [*Git*](https://git-scm.com/);
* IDE compatível com [*TypeScript*](https://www.typescriptlang.org/) (Ex.: [*Visual Studio Code*](https://code.visualstudio.com/));
* [*Node.js*](https://nodejs.org/en/) e [*npm*](https://www.npmjs.com/). O *npm* é instalado junto com o *Node.js*;
* [*Angular CLI*](https://cli.angular.io/). Para instalar o *Angular CLI* usaremos o *npm*. Para isso é necessário  **1)** Abrir um janela de terminal e **2)** executar o comando `npm install -g @angular/cli => -g = global`.

## Configuração do ambiente

* Passos para baixar e configurar o *projeto-template-ui* e utilizar em seus projetos:
  * Criar um diretório onde ficará o projeto;
  	* Por exemplo, usar o comando `mkdir "NOME_DIRETÓRIO_PROJETO"`
  * Navegar até o diretório "NOME_DIRETÓRIO_PROJETO" criado no passo anterior;
	* Por exemplo, usar o comando `cd "NOME_DIRETÓRIO_PROJETO"/`
  * Iniciar um repositório do *git*, usando o comando `git init`;
  * Adicionar o *remote* no *git* local;
	* Usar o comando `git remote add origin git@github.com:Paulo-E-F-Fernandes/projeto-template-ui.git` para adicionar o *remote* via **ssh**.
  	* Usar o comando `git remote add origin https://github.com/Paulo-E-F-Fernandes/projeto-template-ui.git` para adicionar o *remote* via **https**.
  * Atualizar o *git* local com as informações do *git* remoto através do comando `git pull`;
  * Mudar para a *branch master* através do comando `git checkout master`. Está *branch* será utilizada a evoluição do sistema;
  * Mudar para a *branch heroku* através do comando `git checkout heroku`. Está *branch* será utilizada somente para publicar o *app* no [*heroku*](https://www.heroku.com/).

* No diretório "NOME_DIRETÓRIO_PROJETO", abrir os arquivos abaixo, procurar pelo texto *projeto-template-ui* e alterar pelo nome do projeto que está sendo criado; 
	* `angular.json`
	* `app.e2e-spec.ts`
	* `app.component.spec.ts`
	* `package.json`
	* `package-lock.json`
* Abrir uma janela de terminal neste diretório e executar o comando `npm install`, com isso é criado o diretório **node_modules** com as dependências do projeto;
* Após a execução do **npm install** já é possível iniciar o servidor com o comando `ng serve`;
* Importar o projeto no *Visual Studio Code*, para isso, após abrir a *IDE*, selecionar *File* > *Open Folder...* e selecionar o diretório do **"NOME_DIRETÓRIO_PROJETO"
**;
* Após importado o projeto, para facilitar podemos abrir um terminal dentro da *IDE*, através do menu *View* > *Integrated Terminal*

## Servidor de desenvolvimento

* Para executar o servidor de desenvolvimento é só executar no terminal o comando `ng serve`, com isso a aplicação será publicada em um servidor *Node*. Para acessar a aplicação é só colocar a URL `http://localhost:4200/` no browser.

	**OBS.:** Qualquer alteração nos códigos fontes da aplicação será automaticamente recarregada no browser.
	
* Outra maneira é publicar a aplicação no [*heroku*](https://www.heroku.com/).
	* Criar um projeto no ***heroku***;
	* Adicionar a *url* do repositório *git* em um novo *remote* no seu projeto, utilizando o comando `git remote add "NOME_DO_REMOTE" "URL_DO_REMOTE"`.
	* Fazer o merge de todos os arquivos alterados na *branch* ***master*** para a *branch* ***heroku***;
	* Fazer o *push* da *branch* *heroku* para a *branch* *master* do *remote* do ***heroku***, utilizando o comando `git push heroku heroku:master`. Após isso o *heroku* começa a compilar a aplicação e após o término já é possível utilizar.

## Comandos para criar os artefatos

* Para gerar os módulos, execute o comando `ng generate module "NOME_DIRETÓRIO_MÓDULO"/"NOME_MÓDULO"`.
	* Criar os módulos no diretório **modules**.

* Para gerar um novo componente, execute o comando `ng generate component "NOME_DIRETÓRIO_COMPONENTE"/"NOME_COMPONENTE"` ou de maneira resumida, apenas `ng g c "NOME_DIRETÓRIO_COMPONENTE"/"NOME_COMPONENTE"`.
	* Criar os componentes no diretório **components**.
	* Caso queria criar um componente dentro de um módulo específico, utilizar o comando:
		* `ng generate component "NOME_DIRETÓRIO_MÓDULO"/"NOME_DIRETÓRIO_COMPONENTE"/"NOME_COMPONENTE"`

	**OBS.:** Para que o *Angular CLI* não gere o arquivo de teste, é preciso adicionar o parâmetro `--spec=false`, por exemplo `ng g c components/"NOME_COMPONENTE" --spec=false`.

* Para gerar uma nova classe, execute o comando `ng generate class "NOME_DIRETÓRIO_CLASSE"/"NOME_CLASSE"`.
	* Criar as classes que representam as entidades no diretório **domains**.

* Para gerar um serviço, execute o comando `ng generate service "NOME_DIRETÓRIO_SERVICO"/"NOME_SERVICO"`, com isso será gerado o serviço que será responsável por acessar a *API Rest*.
	* Criar os serviços no diretório **services**.














* Para gerar uma diretiva execute o comando `ng g directive [NOME_DIRETÓRIO_DIRETIVA]/[NOME_DIRETIVA]`.
	* Criar as diretivas no diretório **directives**.


* Para gerar classes utilitárias, executar o comando `ng generate class [NOME_DIRETÓRIO]/[NOME_CLASSE_UTILITÁRIA]`.
	* Usar o pós-fixo **utils** nas classes utilitárias, por exemplo: `string-utils`;
	* Criar os módulos no diretório **utils**;
	* Para ver as classes utilitárias existentes, clique [aqui](docs/UTILS.md)!
  
* Para gerar as interfaces, executar o comando `ng generate interface [NOME_DIRETORIO_INTERFACE]/[NOME_INTERFACE] <type>` ou de maneira resumida `ng generate i [NOME_DIRETORIO_INTERFACE]/[NOME_INTERFACE]`

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
		* Criar um arquivo ***json*** no diretório ***src*/*assets*/*i18n*** para a linguagem que se quer fazer a tradução;
		* Usar nos arquivos de *html* a seguinte expressão `{{ 'KEY_ARQUIVO_JSON' | translate }}`, sendo que `KEY_ARQUIVO_JSON` é uma chave que deve ser declarada no arquivo *json* criado anteriormente.
* Para utilizar os ícones [Font Awesome Angular](https://fontawesome.com/how-to-use/on-the-web/using-with/angular):
	* Colocamos nos arquivos *html* a seguinte tag: `<fa-icon [icon]="['fas', 'caret-down']" size="1x"></fa-icon>`
		* Sendo que ***fas*** representa o tipo do ícone do *fort awesome* e ***caret-down*** é o nome do ícone.
	* Além do ***fas*** que representa os ícones do tipo sólido do *fort awesome*, temos também importado no projeto o ***fab*** que é para os ícones do tipo logomarca.
	* Para importar novos tipo de ícones, é necessário colocar o import no arquivo *app.module.ts* e depois adicionar no objeto *library*.

# Story Board
* [Projeto Template | KanbanFlow](https://kanbanflow.com/board/3zg62Z)

# Opções de execução

## Build da aplicação

* Para este projeto foram criadas 2 *branches*, a `master` e a `heroku`.
  * A *branch* `master` deverá ser utiliza para a evoluição do sistema. Todas as novas funcionalidades devem ser criadas na *branch* `master` ou alguma outras de **desenvolvimento**.
    * Quando utilizada alguma *branch* de desenvolvimento, após a conclusão da funcionalidade, a mesma deve ser enviada para a `master` através de *merge*.
	* Após a *branch* `master` estar atualizada com a nova funcionalidade, a mesma dever ser enviada para a *branch* `heroku`. 
	* Para buildar o projeto é só executar o comando `ng build`. O artefato gerado será armazenado no diretório `dist/`. Usar a *flag* `--prod` para gerar a aplicação de produção.
  * A *branch* `heroku` foi criada para possuir as configurações para publicar no [Heroku](https://www.heroku.com).
    * Nessa *branch* não deve ser realizado o desenvolvimento de novas funcionalidades. Para isso deve ser usada a *branch* `master` e depois de concluída a funcionalidade deve ser enviada via `merge` para a *branch* `heroku`;
	* Para atualizar a aplicação no ***Heroku*** é preciso criar um projeto usando o comando `heroku create [NOME_PROJETO]` através do [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli). Após a criação do projeto, o *Heroku CLI* adicionará o repositório git remote `heroku`;
	* Estando na *branch* `heroku` é necessário utilizar o comando `git push heroku heroku:master`, com isso as informações da *branch* `heroku` será enviado para a *branch* `master` do repositório remoto `heroku`, é só aguardar o *build* terminar;
	* Com o *build* concluído, entrar com o comando `heroku open`, isso fará o *browser* abrir e direcionar para a página inicial da aplicação;
	* Para ver o *log* da aplicação é preciso utilizar o comando `heroku logs --tail` no *Heroku CLI*. 

## Executar os testes unitários

* Para executar os teste unitários execute o comando `ng test`. Será executado os testes via [Karma](https://karma-runner.github.io).

## Executar os testes *end-to-end*

* Para executar testes *end-to-end*, execute o comando `ng e2e`. Será executado os testes via [Protractor](http://www.protractortest.org/).

# Ajuda

* Para ajuda com o Angular CLI use `ng help` ou acesse [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
