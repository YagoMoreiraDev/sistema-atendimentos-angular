import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { FormCadastroComponent } from './pages/form-cadastro/form-cadastro.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'novo-cadastro', component: FormCadastroComponent}       
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
