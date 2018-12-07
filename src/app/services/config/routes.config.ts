import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@adming/components/home/home.component';
import { CollectionComponent } from '@adming/components/collection/collection.component';
import { FormComponent } from '@adming/components/form/form.component';
import { UserRegistrationFormComponent } from '@adming/components/user-registration-form/user-registration-form.component';
import { TestFormComponent } from '@adming/components/test-form/test-form.component';

const routes: Routes = [
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
    path: 'collection',
    component: CollectionComponent
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
  }
];

export default routes;
