import { CommonModule } from '@angular/common';
import { Component, Input,OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';
import { DirectComponent } from "../direct/direct.component";

@Component({
  selector: 'app-comp-life-cycle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comp-life-cycle.component.html',
  styleUrl: './comp-life-cycle.component.css'
})
export class CompLifeCycleComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  constructor() { }
  
  ngAfterViewChecked(): void {
   // console.log('ng after view checked called ');
    }
  ngAfterViewInit(): void {
    //console.log('ng after view init is called ');
    }
  ngAfterContentChecked(): void {
    // console.log('ng after content checked is called ');
     }
  ngAfterContentInit(): void {
    // console.log('ng after content init is called ');
    }
  ngDoCheck(): void {
  // console.log('ng docheck is called');
  }
  // <!-- Use of *ngFor Structural Directive for outputting the Lists in the Angular Component. -->
  // @Input('someCompLC') valfromTemp: any;

  // if u comment pls check number 7 from html, 9 from temp html
  // @Input() name!: string;

  // ngOnChanges(element: any) {
  //   // console.log(element);
  // }
  
  ngOnInit(){
  // console.log('ngoninit called');
  
  }
  
  ngOnDestroy(): void {
    console.log('ng destroy called ');
    
  }


  
  //ngOnvchanges
  message!: string ;
  @Input() vegan: boolean=false ;
  

  isLoading: boolean = true;
  

ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    const veganValue = changes['vegan'];
    if (veganValue.currentValue === true) {
      this.message = 'Here is your vegan food';
    } else {
      this.message = 'Here is non-vegan food';
    }
  }

}
