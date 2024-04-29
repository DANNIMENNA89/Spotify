import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';


@Component({
  selector: 'app-home-page',
  standalone:true,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  imports:[
    SideBarComponent
]
})
export class HomePageComponent {
}
