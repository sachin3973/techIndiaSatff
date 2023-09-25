import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectswitchboardPage } from './selectswitchboard.page';

const routes: Routes = [
  {
    path: '',
    component: SelectswitchboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectswitchboardPageRoutingModule {}
