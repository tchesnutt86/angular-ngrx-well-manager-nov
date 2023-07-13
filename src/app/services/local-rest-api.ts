import { Observable, of, Subject, throwError } from 'rxjs';
import { wellData } from './well-data';
import { Well } from '../models/well';
import { deepClone } from '../utils/object';

export class LocalRestApi {
  private wells: Well[] = [...wellData];
  private wellsSubject$: Subject<Well[]> = new Subject<Well[]>();

  get wells$(): Observable<Well[]> {
    return this.wellsSubject$;
  }

  /**
   * Returns an observable of all wells
   */
  getWells(): Observable<Well[]> {
    return of(deepClone(this.wells));
  }

  /**
   * Returns an observable of the asked well id
   */
  getWell(id: string): Observable<Well | undefined> {
    const well = this.wells.find((w) => w.id === id);
    if (well) {
      return of(well);
    }
    return throwError(() => new Error(`well with ${id} is not found!`));
  }

  /**
   * Add new well
   */
  addWell(well: Well): Observable<Well> {
    this.wells.push({ ...well });
    this.publishUpdatedWells();
    return of(well);
  }

  /**
   * Returns an observable of the updated well
   */
  updateWell(well: Well): Observable<Well> {
    const foundWellIdx = this.wells.findIndex((w) => w.id === well.id);
    if (foundWellIdx > -1) {
      this.wells.splice(foundWellIdx, 1, well);
      this.publishUpdatedWells();
      return of(well);
    }
    return throwError(() => new Error(`well with ${well.id} is not found!`));
  }

  /**
   * Returns an observable of the deleted well
   */
  deleteWell(id: string): Observable<Well | undefined> {
    const deletedWellIdx = this.wells.findIndex((w) => w.id === id);

    if (deletedWellIdx > -1) {
      const deletedWell = this.wells[deletedWellIdx];
      this.wells.splice(deletedWellIdx, 1);
      this.publishUpdatedWells();
      return of(deletedWell);
    }
    return throwError(() => new Error(`well with ${id} is not found!`));
  }

  /**
   * Publish when well arrays is updated
   */
  private publishUpdatedWells() {
    this.wellsSubject$.next(deepClone(this.wells));
  }
}
