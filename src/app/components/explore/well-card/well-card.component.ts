import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Well } from '../../../models/well';

@Component({
  selector: 'app-well-card',
  templateUrl: './well-card.component.html',
  styleUrls: ['./well-card.component.scss'],
})
export class WellCardComponent {
  @Input() well: Well | undefined;
  @Output() deleteClick = new EventEmitter();
  @Output() cardClick = new EventEmitter();

  constructor(private dialog: MatDialog) {}

  deleteClicked(event: any) {
    this.deleteClick.emit(this.well);
    event.stopPropagation();
  }
}
