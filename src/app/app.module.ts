import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { LayoutMainComponent } from './components/layout-main/layout-main.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { FormCadastroComponent } from './pages/form-cadastro/form-cadastro.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuItemComponent,
    LayoutMainComponent,
    InicioComponent,
    CardInfoComponent,
    FormCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
