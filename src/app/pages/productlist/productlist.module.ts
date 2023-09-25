import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductlistPageRoutingModule } from './productlist-routing.module';

import { ProductlistPage } from './productlist.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductlistPageRoutingModule,
    SharedModule
  ],
  declarations: [ProductlistPage]
})
export class ProductlistPageModule {}
