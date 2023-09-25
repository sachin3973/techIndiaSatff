import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  declarations:[
    HeaderComponent,
  ],
  imports:[
    IonicModule,
    CommonModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,
  ]
})

export class SharedModule {}
