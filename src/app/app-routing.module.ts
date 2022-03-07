import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { CoursRxjsComponent } from './cours-rxjs/cours-rxjs.component';
import { ExComponent } from './ex/ex.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"",component :ListComponent},
  {path:"add", component: AddComponent},
  {path:"update/:Id", component:UpdateComponent},
  {path: 'rxjs', component: CoursRxjsComponent},
  {path: 'ex', component: ExComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
