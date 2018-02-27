import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { FormularioComponent } from './formulario/formulario.component';
import { GridComponent } from './grid/grid.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    FormularioComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
