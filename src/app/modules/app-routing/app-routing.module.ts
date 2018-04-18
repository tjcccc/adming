import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CollectionComponent } from '../../components/collection/collection.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/collection',
    pathMatch: 'full'
  },
  {
    path: 'collection',
    component: CollectionComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }
