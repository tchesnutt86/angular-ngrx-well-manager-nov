import { createAction, props } from '@ngrx/store';
import { Well } from '../models/well';

export const loadWells = createAction('[Wells] Loading Wells');
export const loadWellsSuccess = createAction(
  '[Wells] Load Wells',
  props<{ wells: Well[] }>()
);
export const loadWellsFailure = createAction(
  '[Wells] Load Wells Failure!',
  props<{ error: Error }>()
);

export const getWellById = createAction(
  '[Wells] Get Well',
  props<{ id: string }>()
);
export const getWellByIdSuccess = createAction(
  '[Wells] Get Well Success',
  props<{ well: Well | undefined }>()
);
export const getWelllByIdFailure = createAction(
  '[Wells] Get Well Failure!',
  props<{ error: Error }>()
);

export const addWell = createAction(
  '[Wells] Add Well',
  props<{ well: Well }>()
);
export const addWellSuccess = createAction(
  '[Wells] Add Well Success',
  props<{ well: Well }>()
);
export const addWelllFailure = createAction(
  '[Wells] Add Well Failure!',
  props<{ error: Error }>()
);

export const updateWell = createAction(
  '[Wells] Update Well',
  props<{ well: Well }>()
);
export const updateWellSuccess = createAction(
  '[Wells] Update Well Success',
  props<{ well: Well }>()
);
export const updateWelllFailure = createAction(
  '[Wells] Update Well Failure!',
  props<{ error: Error }>()
);

export const deleteWell = createAction(
  '[Wells] Delete Well',
  props<{ well: Well }>()
);
export const deleteWellSuccess = createAction(
  '[Wells] Delete Well Success',
  props<{ well: Well }>()
);
export const deleteWelllFailure = createAction(
  '[Wells] Delete Well Failure!',
  props<{ error: Error }>()
);
