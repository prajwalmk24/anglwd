import { Component } from '@angular/core';
import { TempComponent } from "./temp/temp.component";
import { DirectComponent } from "./direct/direct.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TempComponent, DirectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
