import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Well } from '../../../models/well';

@Component({
  selector: 'app-well-edit',
  templateUrl: './well-edit.component.html',
  styleUrls: ['./well-edit.component.scss'],
})
export class WellEditComponent {
  well: Well;

  /**
   * @param data the well object to be updated
   */
  constructor(
    @Optional() public dialogRef: MatDialogRef<WellEditComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) private data: Well
  ) {
    this.well = { ...this.data };
  }
}
