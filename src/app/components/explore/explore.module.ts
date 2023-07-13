import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore.component';
import { MaterialModule } from '../../material.module';
import { WellCardComponent } from './well-card/well-card.component';
import { WellEditComponent } from './well-edit/well-edit.component';
import { WellDetailModule } from '../shared/well-detail/well-detail.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WellDeleteComponent } from './well-delete/well-delete.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    WellDetailModule,
  ],
  declarations: [
    ExploreComponent,
    WellCardComponent,
    WellEditComponent,
    WellDeleteComponent,
  ],
})
export class ExploreModule {}
