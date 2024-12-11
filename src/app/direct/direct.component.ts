import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CustomDirectivDirective } from '../Directives/custom-directiv.directive';
import { CompLifeCycleComponent } from "../comp-life-cycle/comp-life-cycle.component";
import { StrucdirectiveDirective } from '../Directives/strucdirective.directive';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-direct',
  standalone: true,
  imports: [CommonModule],
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

// <!-- 38. Create Custom Structural Directive in the Angular using TemplateRef and ViewContainerRef -->
customIf:boolean =true;


practice() {
   this.customIf=false;
    }


    // calling from service component through direct component 
    
    @Input() u!:{ name: string; status: string; };

    //adduser from service

}