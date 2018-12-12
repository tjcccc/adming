import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '@adming/config/routes.config';

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
