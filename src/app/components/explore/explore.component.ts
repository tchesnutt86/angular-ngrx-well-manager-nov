import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { concat, map, Observable, Subject, takeUntil, tap } from 'rxjs';
import { getWells, getWellsError, updateWellError } from '../../reducer/well.reducer';
import { Well } from '../../models/well';
import { WellService } from '../../services/well.service';
import {
  deleteWell,
  loadWells,
  updateWell,
} from '../../actions/well.actions';
import { MatDialog } from '@angular/material/dialog';
import { WellEditComponent } from './well-edit/well-edit.component';
import { WellDeleteComponent } from './well-delete/well-delete.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {
  wells$: Observable<Well[]> | undefined;
  getWellsError$: Observable<Error> | undefined;
  searchFilterText = '';
  filteredWellsCount = 0;
  destroy$ = new Subject<void>();

  constructor(
    private wellService: WellService,
    private store: Store,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    @Inject('USE_STORE') private useStore: boolean
  ) {}

  ngOnInit() {
    //this.wells$ = concat(this.wellService.getWells(), this.wellService.wells$);
    this.wells$ = this.store.select(getWells).pipe(
      map((wells) => {
        return [...wells].sort((a: Well, b: Well) =>
          a.name < b.name ? -1 : a.name === b.name ? 0 : 1
        );
      })
    );

    this.initializeErrorHandling();

    this.store.dispatch(loadWells());
  }

  private initializeErrorHandling() {
    const errorStates = [getWellsError, updateWellError];

    for (const errorState of errorStates) {
      this.store.select(errorState)
        .pipe(takeUntil(this.destroy$))
        .subscribe((error: Error) => {
          if (error.message) {
            this.snackBar.open(error.message, 'Dismiss', { duration: 2000 });
          }
        });
    }
  }

  openEditDialog(well: Well) {
    const dialogRef = this.dialog.open(WellEditComponent, { data: well });

    dialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (result) {
          this.store.dispatch(updateWell({ well: result }));
        }
      });
  }

  openDeleteDialog(well: Well) {
    const dialogRef = this.dialog.open(WellDeleteComponent, { data: well });

    dialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (result) {
          this.store.dispatch(deleteWell({ well: result }));
        }
      });
  }

  searchFilter(wells: Well[] | null) {
    const filteredWells = wells?.filter(
      (well: Well) =>
        !this.searchFilterText ||
        well.name.toUpperCase().includes(this.searchFilterText.toUpperCase())
    ) || [];

    this.filteredWellsCount = filteredWells.length;

    return filteredWells;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
