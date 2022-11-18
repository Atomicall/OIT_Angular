import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CrudRoutingModule } from './crud-routing.module';
import { HomeComponent } from './age_constraints/home/home.component';
import { DetailsComponent } from './age_constraints/details/details.component';
import { CreateComponent } from './age_constraints/create/create.component';
import { UpdateComponent } from './age_constraints/update/update.component';


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports:
  [
  HomeComponent
  ]
})
export class CrudModule { }
