import { BreakfastDetailComponent } from './breakfast-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: BreakfastDetailComponent
      }
    ])
  ],
  declarations: [BreakfastDetailComponent]
})
export class BreakfastDetailModule {}
