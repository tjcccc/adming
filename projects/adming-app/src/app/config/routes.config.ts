import { Routes } from '@angular/router';
import { HomePageComponent } from '@adming-app/pages/home-page/home-page.component';
import { FormComponent } from '@adming-app/components/form/form.component';
import { ComponentsPageComponent } from '@adming-app/pages/components-page/components-page.component';
import { UserRegistrationFormPageComponent } from '@adming-app/pages/user-registration-form-page/user-registration-form-page.component';
import { TestFormPageComponent } from '@adming-app/pages/test-form-page/test-form-page.component';
import { CommonTablesPageComponent } from '@adming-app/pages/common-tables-page/common-tables-page.component';
import { CollectionTablesPageComponent } from '@adming-app/pages/collection-tables-page/collection-tables-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'user-registration-form',
    component: UserRegistrationFormPageComponent
  },
  {
    path: 'test-form',
    component: TestFormPageComponent
  },
  {
    path: 'common-tables',
    component: CommonTablesPageComponent
  },
  {
    path: 'collection-tables',
    component: CollectionTablesPageComponent
  },
  {
    path: 'components',
    component: ComponentsPageComponent
  }
];
