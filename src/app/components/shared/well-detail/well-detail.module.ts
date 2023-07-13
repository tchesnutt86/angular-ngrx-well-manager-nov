import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WellDetailComponent } from './well-detail.component';
import { MaterialModule } from '../../../material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  declarations: [WellDetailComponent],
  exports: [WellDetailComponent],
})
export class WellDetailModule {}
