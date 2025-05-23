import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { FormCadastroComponent } from './pages/form-cadastro/form-cadastro.component';
import { RelatorioComponent } from './pages/relatorio/relatorio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'novo-cadastro', component: FormCadastroComponent},
  { path: 'relatorio', component: RelatorioComponent} 
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
