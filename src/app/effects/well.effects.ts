import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import {
  loadWellsFailure,
  loadWells,
  loadWellsSuccess,
  addWell,
  addWellSuccess,
  addWelllFailure,
  getWellById,
  getWellByIdSuccess,
  getWelllByIdFailure,
  updateWell,
  updateWellSuccess,
  updateWelllFailure,
  deleteWell,
  deleteWellSuccess,
  deleteWelllFailure,
} from '../actions/well.actions';
import { Well } from '../models/well';
import { WellService } from '../services/well.service';

@Injectable()
export class WellEffects {
  loadWells$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadWells),
      exhaustMap((action) =>
        this.wellService.getWells().pipe(
          map((wells) => loadWellsSuccess({ wells })),
          catchError((error) => of(loadWellsFailure({ error })))
        )
      )
    )
  );

  getWellById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getWellById),
      exhaustMap((action) =>
        this.wellService.getWell(action.id).pipe(
          map((well) => getWellByIdSuccess({ well: well })),
          catchError((error) => of(getWelllByIdFailure({ error })))
        )
      )
    )
  );

  addWell$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addWell),
      exhaustMap((action) =>
        this.wellService.addWell(action.well).pipe(
          map((well) => addWellSuccess({ well })),
          catchError((error) => of(addWelllFailure({ error })))
        )
      )
    )
  );

  updateWell$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateWell),
      exhaustMap((action) =>
        this.wellService.updateWell(action.well).pipe(
          map((well) => updateWellSuccess({ well })),
          catchError((error) => of(updateWelllFailure({ error })))
        )
      )
    )
  );

  deleteWell$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteWell),
      exhaustMap((action) =>
        this.wellService.deleteWell(action.well.id).pipe(
          map((well: any) => deleteWellSuccess({ well })),
          catchError((error) => of(deleteWelllFailure({ error })))
        )
      )
    )
  )

  constructor(private actions$: Actions, private wellService: WellService) {}
}
