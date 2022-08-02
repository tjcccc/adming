import { Routes } from '@angular/router';
import { DashboardDemoPageComponent } from '../pages/dashboard-demo-page/dashboard-demo-page.component';
import { ComponentsDemoPageComponent } from '../pages/components-demo-page/components-demo-page.component';
import { FormsDemoPageComponent } from '../pages/forms-demo-page/forms-demo-page.component';
import { TablesDemoPageComponent } from '../pages/tables-demo-page/tables-demo-page.component';

export const routes: Routes = [
  { path: '', component: DashboardDemoPageComponent },
  { path: 'dashboard-demo', component: DashboardDemoPageComponent },
  { path: 'components-demo', component: ComponentsDemoPageComponent },
  { path: 'forms-demo', component: FormsDemoPageComponent },
  { path: 'tables-demo', component: TablesDemoPageComponent }
]
