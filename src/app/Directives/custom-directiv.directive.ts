import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: 'appCustomDirectiv',
  standalone: true
})
export class CustomDirectivDirective implements OnInit {

  constructor( private element:ElementRef, private renderer:Renderer2) { }

  @HostBinding('style.backgroundColor') nameColor!:string ;
  
  ngOnInit(): void {
      //  (this.element.nativeElement as HTMLElement).style.backgroundColor='blue';
      // this.element.nativeElement.style.backgroundColor='blue'; // this js property   

      //without touching the dom it will  access the dom
      this.renderer.setStyle(this.element.nativeElement,'backgroundColor','pink');
    }

    //35
    //To listen the events of the elements where the element is sitting 
    @HostListener('mouseenter') mouseover(){
      this.renderer.setStyle(this.element.nativeElement,'backgroundColor','blue');

    }

    //36
    //Using HostBinding Decorator to bind the Properties for the Directive element in the Angular
    //35. Using HostBinding Decorator to bind the Properties for the Directive element in the Angular.
//pls refer 12 line and nbelow code 
@HostListener('click') onmouseent(event:Event){
  this.nameColor='orange';
}

}
