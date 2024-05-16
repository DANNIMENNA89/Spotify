import { Component, OnDestroy, OnInit } from '@angular/core';
import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component';
import { TrackModel } from '@core/models/tracks.model';
import { TracksService } from '@modules/tracks/services/tracks.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tracks-page',
  standalone: true,
  imports: [
    SectionGenericComponent
  ],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})

export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel>=[]
  tracksRandom: Array<TrackModel>=[]

  listObservers$: Array<Subscription> =[]

  constructor(private trackService: TracksService){  }

  ngOnInit(): void {
    this.loadDataAll()
    this.loadDataRandom()
  }

  //En curso se ecplica promesa toPromise(), pero en esta depreciado, al igual que poner error despues de response: err =>{console.log('Error de conexión', err);})
  loadDataAll(): void {
    this.trackService.getAllTracks$().subscribe((response: TrackModel[]) => {
      this.tracksTrending = response;
    })
  }

  loadDataRandom(): void {
    this.trackService.getAllRandoms$().subscribe((response: TrackModel[]) => {
      this.tracksRandom = response;
    })
  }

  ngOnDestroy(): void {

  }
}
