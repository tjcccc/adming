import { Routes } from '@angular/router';
import { HomeComponent } from '@adming/components/home/home.component';
import { FormComponent } from '@adming/components/form/form.component';
import { UserRegistrationFormComponent } from '@adming/components/user-registration-form/user-registration-form.component';
import { TestFormComponent } from '@adming/components/test-form/test-form.component';
import { CommonTableListComponent } from '@adming/components/common-table-list/common-table-list.component';
import { CollectionTableShowcaseComponent } from '@adming/components/collection-table-showcase/collection-table-showcase.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'user-registration-form',
    component: UserRegistrationFormComponent
  },
  {
    path: 'test-form',
    component: TestFormComponent
  },
  {
    path: 'common-table-list',
    component: CommonTableListComponent
  },
  {
    path: 'collection-table-showcase',
    component: CollectionTableShowcaseComponent
  }
];
