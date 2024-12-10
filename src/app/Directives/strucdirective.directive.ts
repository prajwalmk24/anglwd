import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStrucdirective]',
  standalone: true
})
export class StrucdirectiveDirective implements OnInit {


  @Input() appStrucdirective:boolean= true;

  constructor(
    private tempRef:TemplateRef<any>,
    private viewContRef:ViewContainerRef
  ) { }

  ngOnInit(): void {
      if(this.appStrucdirective){
        this.viewContRef.createEmbeddedView(this.tempRef);
      }
      else{
        this.viewContRef.clear;
      }
  }

  



}
