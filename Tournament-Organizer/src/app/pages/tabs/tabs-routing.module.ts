import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'tournaments',
        loadChildren: () => import('../tournaments/tournaments.module').then(m => m.TournamentsPageModule)
      },
      {
        path: 'create',
        loadChildren: () => import('../form/form.module').then(m => m.FormPageModule)
      },
      {
        path: 'ranking',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'tournament-details/:id',
        loadChildren: () => import('../tournament-details/tournament-details.module').then( m => m.TournamentDetailsPageModule)
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
