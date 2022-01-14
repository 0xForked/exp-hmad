import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: 'main',
    component: MainPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./tabs/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'favorite',
        loadChildren: () => import('./tabs/favorite/favorite.module').then(m => m.FavoritePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./tabs/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/main/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/main/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class MainPageRoutingModule {}
