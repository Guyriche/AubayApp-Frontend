import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FillComponent } from './Layout/fill/fill.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, // Route Par defaut
  {
    path:'aubay', 
    component: FillComponent,
    children: [{
        path: '',
        redirectTo:'/aubay/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      }
    ]
  },
  { path: '**', component: HomeComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
