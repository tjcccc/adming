import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Cannot use paths in tsconfig.
import { ProgressComponent } from '../../components/progress/progress.component';

@NgModule({
  declarations: [
    ProgressComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProgressComponent
  ]
})
export class AdmingComponentsModule { }
