import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchComponent } from '@modules/history/components/search/search.component';
import { SearchService } from '@modules/history/services/search.service';
import { PlayListBodyComponent } from '@shared/components/play-list-body/play-list-body.component';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-hostory-page',
  standalone: true,
  imports: [
    SearchComponent,
    PlayListBodyComponent,
    CommonModule
  ],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent {
  listResults$: Observable<any> = of([])
  constructor(private searchService: SearchService) { }

  receiveData(event: string) : void{
    console.log('Estoy en el padre', event);
    this.listResults$ = this.searchService.searchTracks$(event)

  }
}
