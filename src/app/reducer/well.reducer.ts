import { createReducer, on } from '@ngrx/store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
    addWelllFailure,
  addWellSuccess,
  deleteWellSuccess,
  loadWellsFailure,
  loadWellsSuccess,
  updateWelllFailure,
  updateWellSuccess,
} from '../actions/well.actions';
import { Well } from '../models/well';

export const wellFeatureKey = 'well';

export interface WellState {
  wells: Well[];
  loadWellsError: Error;
  addWellError: Error;
  updateWellError: Error;
}

export const initialState: WellState = {
  wells: [],
  loadWellsError: new Error(),
  addWellError: new Error(),
  updateWellError: new Error(),
};

export const wellReducer = createReducer(
  initialState,
  on(loadWellsSuccess, (state, { wells }) => ({
    ...state,
    wells,
    loadWellsError: new Error(),
  })),
  on(loadWellsFailure, (state, { error }) => ({
    ...state,
    wells: [],
    loadWellsError: error,
  })),
  on(addWellSuccess, (state, { well }) => ({
    ...state,
    wells: [...state.wells, well],
    addWellError: new Error(),
  })),
  on(addWelllFailure, (state, { error }) => ({
    ...state,
    addWellError: error,
  })),
  on(updateWellSuccess, (state, { well }) => {
    return {
      ...state,
      wells: state.wells.reduce((wells, w) => {
        if (well.id === w.id) {
          wells.push(well);
        } else {
          wells.push(w);
        }
        return wells;
      }, <Well[]>[]),
      updateWellError: new Error(),
    };
  }),
  on(updateWelllFailure, (state, { error }) => ({
    ...state,
    updateWellError: error,
  })),
  on(deleteWellSuccess, (state, { well }) => ({
    ...state,
    wells: state.wells.filter((_well: Well) => _well.id !== well.id),
  }))
);

export const selectWellState = createFeatureSelector<WellState>(wellFeatureKey);
export const getWells = createSelector(selectWellState, (state) => state.wells);
export const getWellById = (id: string) =>
  createSelector(selectWellState, (state) =>
    state.wells.find((w) => w.id === id)
  );
export const getWellsError = createSelector(selectWellState, (state) => state.loadWellsError);
export const addWellError = createSelector(selectWellState, (state) => state.addWellError);
export const updateWellError = createSelector(selectWellState, (state) => state.updateWellError);
