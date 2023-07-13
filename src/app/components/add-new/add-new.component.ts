import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { addWellError } from '../../reducer/well.reducer';
import { addWell } from '../../actions/well.actions';
import { Well } from '../../models/well';
import { WellService } from '../../services/well.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss'],
})
export class AddNewComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();

  constructor(
    private route: Router,
    private wellService: WellService,
    private store: Store,
    private snackBar: MatSnackBar,
    @Inject('USE_STORE') private useStore: boolean
  ) {}

  ngOnInit() {
    this.store.select(addWellError)
      .pipe(takeUntil(this.destroy$))
      .subscribe((error: Error) => {
        if (error.message) {
          this.snackBar.open(error.message, 'Dismiss', { duration: 2000 });
        }
      });
  }

  saveClicked(well: any) {
    this.store.dispatch(addWell({ well: well }));
    this.route.navigate(['/explore']);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
