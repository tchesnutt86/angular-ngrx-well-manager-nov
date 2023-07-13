import { Injectable } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';
import { Well } from '../models/well';
import { LocalRestApi } from './local-rest-api';

@Injectable({
  providedIn: 'root',
})
export class WellService {
  private localRestApi = new LocalRestApi();

  /**
   * Returns an observable of updated wells
   */
  get wells$(): Observable<Well[]> {
    return this.localRestApi.wells$;
  }

  /**
   * Returns an observable of all wells
   */
  getWells(): Observable<Well[]> {
    return this.localRestApi.getWells();
  }

  /**
   * Returns an observable of the asked well id
   */
  getWell(id: string): Observable<Well | undefined> {
    return this.localRestApi.getWell(id);
  }

  /**
   * Add new well
   */
  addWell(well: Well): Observable<Well> {
    return this.localRestApi.addWell(well);
  }

  /**
   * Returns an observable of the updated well
   */
  updateWell(well: Well): Observable<Well> {
    return this.localRestApi.updateWell(well);
  }

  /**
   * Returns an observable of the deleted well
   */
  deleteWell(id: string): Observable<Well | undefined> {
    return this.localRestApi.deleteWell(id);
  }
}
