import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './age_constraints/home/home.component';
import { CreateComponent } from './age_constraints/create/create.component';
import { DetailsComponent } from './age_constraints/details/details.component';
import { UpdateComponent } from './age_constraints/update/update.component';

const routes: Routes = [
  { path: '/', redirectTo: '/age_constraints/home', pathMatch: 'full'},
  { path: '/age_constraints/home', component: HomeComponent },
  { path: '/age_constraints/details/:productId', component: DetailsComponent },
  { path: '/age_constraints/create', component: CreateComponent },
  { path: '/age_constraints/update/:productId', component: UpdateComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
