import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectswitchboardPageRoutingModule } from './selectswitchboard-routing.module';

import { SelectswitchboardPage } from './selectswitchboard.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectswitchboardPageRoutingModule,
    SharedModule
  ],
  declarations: [SelectswitchboardPage]
})
export class SelectswitchboardPageModule {}
