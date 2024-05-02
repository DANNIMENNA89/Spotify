import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MediaPlayerComponent } from '@shared/components/media-player/media-player.component';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';


@Component({
  selector: 'app-home-page',
  standalone:true,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  imports:[
    SideBarComponent,
    RouterOutlet,
    MediaPlayerComponent
]
})
export class HomePageComponent {
}
