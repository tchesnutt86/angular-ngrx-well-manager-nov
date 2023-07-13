import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Well } from '../../../models/well';

@Component({
  selector: 'app-well-delete',
  templateUrl: './well-delete.component.html',
  styleUrls: ['./well-delete.component.scss'],
})
export class WellDeleteComponent {
  well: Well;

  /**
   * @param data the well name
   */
  constructor(
    @Optional() public dialogRef: MatDialogRef<WellDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Well
  ) {
    this.well = data;
  }
}
