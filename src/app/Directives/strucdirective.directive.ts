import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: 'appStrucdirective',
  standalone: true
})
export class StrucdirectiveDirective implements OnInit {


  @Input() customIf:boolean= true;

  constructor(
    private tempRef:TemplateRef<any>,
    private viewContRef:ViewContainerRef
  ) { }

  ngOnInit(): void {
      if(this.customIf){
        this.viewContRef.createEmbeddedView(this.tempRef);
      }
      else{
        this.viewContRef.clear;
      }
  }

  



}
