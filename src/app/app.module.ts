import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { PaintsComponent } from './paints/paints.component';

import { PaintService } from './paints/paint.service';
import { FormComponent } from './paints/form.component';

const routes: Routes = [
  { path: '', redirectTo: 'paints', pathMatch:'full' },
  { path: 'directivas', component: DirectivaComponent },
  { path: 'paints', component: PaintsComponent },
  {path: 'paints/form', component: FormComponent}
];


@NgModule({
  declarations: [ // Registro de componentes
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    PaintsComponent,
    FormComponent
  ],
  imports: [ // Registro de módulos externos a la app
    BrowserModule, // Directivas ngIf, ngFor, trabajo con peticiones rest, etc...
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PaintService], // Registro de servicios
  bootstrap: [AppComponent] // Componente principal a cargar
})
export class AppModule { }
