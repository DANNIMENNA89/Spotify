import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent {
  mockCover: TrackModel = {
    cover:'https://cdns-images.dzcdn.net/images/cover/27fd10b997bc2133f748fb7505b69cb1/264x264.jpg',
    album: 'Cara Y Cruz',
    name: 'Ayax',
    url:'http://localhost:4200/tracks',
    _id: 1
  }
}
