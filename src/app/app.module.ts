import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { PaintsComponent } from './paints/paints.component';

import { PaintService } from './paints/paint.service';

const routes: Routes = [
  { path: '', redirectTo: 'paints', pathMatch:'full' },
  { path: 'directivas', component: DirectivaComponent },
  { path: 'paints', component: PaintsComponent },
];


@NgModule({
  declarations: [ // Registro de componentes
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    PaintsComponent
  ],
  imports: [ // Registro de módulos externos a la app
    BrowserModule, // Directivas ngIf, ngFor, trabajo con peticiones rest, etc...
    RouterModule.forRoot(routes)
  ],
  providers: [PaintService], // Registro de servicios
  bootstrap: [AppComponent] // Componente principal a cargar
})
export class AppModule { }
