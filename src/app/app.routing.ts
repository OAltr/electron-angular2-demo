import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './hero/heroes.component';
import { HeroDetailComponent } from './hero/detail/detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'dashboard', component: DashboardComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
