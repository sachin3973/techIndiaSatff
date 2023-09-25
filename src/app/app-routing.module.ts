import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'activitydetail',
    loadChildren: () => import('./pages/activitydetail/activitydetail.module').then( m => m.ActivitydetailPageModule)
  },
  {
    path: 'selectswitchboard',
    loadChildren: () => import('./pages/selectswitchboard/selectswitchboard.module').then( m => m.SelectswitchboardPageModule)
  },
  {
    path: 'productlist',
    loadChildren: () => import('./pages/productlist/productlist.module').then( m => m.ProductlistPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
