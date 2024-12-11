import { Component } from '@angular/core';
import { TempComponent } from "./temp/temp.component";
import { DirectComponent } from "./direct/direct.component";
import { ServiceCompComponent } from "./service-comp/service-comp.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ServiceCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
