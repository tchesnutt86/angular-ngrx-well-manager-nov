import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { v4 } from '../../../utils/uuid';
import { Well } from '../../../models/well';

@Component({
  selector: 'app-well-detail',
  templateUrl: './well-detail.component.html',
  styleUrls: ['./well-detail.component.scss'],
})
export class WellDetailComponent implements OnInit {
  operators = operators;
  @Input() well: Well | undefined;

  formGroup: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    operator: ['', [Validators.required]],
    location: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    if (this.well) {
      this.formGroup = this.fb.group({
        name: [this.well.name, [Validators.required]],
        operator: [this.well.operator, [Validators.required]],
        location: [this.well.location, [Validators.required]],
      });
    }
    this.formGroup.valueChanges.subscribe((value) => {
      this.onValueChanged();
    });
  }

  onValueChanged(): void {
    this.well = {
      ...(this.well ?? { id: v4() }),
      name: this.formGroup?.get('name')?.value ?? '',
      operator: this.formGroup?.get('operator')?.value ?? '',
      location: this.formGroup?.get('location')?.value ?? '',
    };
  }
}

export const operators: string[] = [
  'NOV',
  'Company 1',
  'Company 2',
  'Company 3',
  'Company 4',
  'Company 5',
];
