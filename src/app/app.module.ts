import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { CoursRxjsComponent } from './cours-rxjs/cours-rxjs.component';
import { ExComponent } from './ex/ex.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    UpdateComponent,
    CoursRxjsComponent,
    ExComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
