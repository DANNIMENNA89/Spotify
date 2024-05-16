import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { rejects } from 'assert';
import { resolve } from 'path';
import { Observable, catchError, map, mergeMap, of, tap } from 'rxjs';
import { enviroment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class TracksService {

  private readonly URL = enviroment.api;

  constructor(private http: HttpClient) {

  }

  private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) =>{
      const lisTemp = listTracks.filter(a => a._id != id)
      resolve(lisTemp)
    })
  }

  getAllTracks$(): Observable<any>{
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      map(({ data }: any) => {
        return data
      }),
      catchError((err) =>{
        console.log('Algo pasó revisame', err.status);

        return of([])
      })
    )
  }

  getAllRandoms$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      tap(data => console.log('🔴🔴🔴',data)),
      mergeMap(({ data }: any) => this.skipById(data, 2)),
      // map((dataRevertida) => {
      //   return dataRevertida.filter((track: TrackModel) => track._id != 1);
      // })
      tap(data => console.log('🆗🆗🆗',data)),
      catchError((err) =>{
        const { status, statusText } = err;
        console.log('Algo pasó revisame', status, statusText);

        return of([])
      })

    );
  }
}
