import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ConsultaClientesComponent } from './consulta-clientes/consulta-clientes.component';

// importando as classes para uso da biblioteca de rotas do angular
// estas rotas serão utilizadas para navegação da SPA - Single Page Application
import { Routes, RouterModule } from '@angular/router';

// importando as classes para uso da biblioteca de formulários do angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// importando as classes para uso da biblioteca de acesso à APIs do angular (Http Client)
import { HttpClientModule } from '@angular/common/http';

// import
import { NgxPaginationModule } from 'ngx-pagination';

// mapear uma rota (URL) para cada componente do projeto..
const routes: Routes = [
  { path : 'cadastro-clientes', component : CadastroClientesComponent },
  { path : 'consulta-clientes', component : ConsultaClientesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CadastroClientesComponent,
    ConsultaClientesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // registrando biblioteca para chamadas de API
    FormsModule, // registrando biblioteca para formulários
    ReactiveFormsModule, // registrando biblioteca para formulários
    NgxPaginationModule, // registrando
    RouterModule.forRoot(routes) // registrando a configuração de rotas!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
