import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewComponent } from './add-new.component';
import { MaterialModule } from '../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WellDetailModule } from '../shared/well-detail/well-detail.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    WellDetailModule,
  ],
  declarations: [AddNewComponent],
})
export class AddNewModule {}
