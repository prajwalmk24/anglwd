import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CustomDirectivDirective } from '../Directives/custom-directiv.directive';
import { CompLifeCycleComponent } from "../comp-life-cycle/comp-life-cycle.component";

@Component({
  selector: 'app-direct',
  standalone: true,
  imports: [CommonModule, CustomDirectivDirective],
  templateUrl: './direct.component.html',
  styleUrl: './direct.component.css',
  hostDirectives: [CustomDirectivDirective],
})
export class DirectComponent {
rgre: any;
constructor(){

}


// veganValue? false;

@Input('vegan') vegan!: boolean;

// veganValue: boolean = false;
veganValue = false;
}
