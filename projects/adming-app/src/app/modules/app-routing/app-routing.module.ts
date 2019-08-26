import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '@adming-app/config/routes.config';

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
