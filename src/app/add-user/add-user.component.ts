import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule, MatDividerModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatIconModule,
    MatIconModule, MatInputModule, CommonModule],
  templateUrl: './add-user.component.html',
  // styleUrl: './add-user.component.css'
  styles: [`
    .offline{
      color:blue;
    } 
   
  `]
})
export class AddUserComponent {

  user: string = '';
  newValue: string = '';
  condStrucDirec = false;
  disButton = true;

  addUserEvent($event: any) {
    // console.log('event ',$event); 
    // can be viewed in >target >value from inspect

    this.newValue = $event.target.value;
    // Do something with the new value, e.g. update a variable
    console.log('New value:', this.newValue);
  }

  addUser() {
    this.user = this.newValue;
    this.disButton = false;
    this.condStrucDirec = true;
  }


  // <!-- Styling Dynamically for the Component Templates using ngStyle attribute Directive in angular. -->
  name: string = 'online';

  constructor() {
    // setTimeout(() => {
    //   this.name = 'Updated Value';
    // }, 5000); 
  }

  dynamicStyle() {
    // console.log('this.name',this.name);

    //    if(this.name==='online'){
    //      return 'red';
    //    }
    //    return '#07ff00';
  }

  // practice'
  name2: string = '';
  practice() {
    this.name2 = 'pract';
  }

  // <!-- Use of *ngFor Structural Directive for outputting the Lists in the Angular Component. -->
  //users: string[]=['A','B','C','cc','ww'];

  users: string[] = [];

  inputValue: string = '';


  addUserEventforStruDirec(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value; // Remember

  }
  forStruDirec() {
    //  console.log('this.InputValue',this.inputValue);

    this.users.push(this.inputValue);
  }


  //@output 
  @Output() newItemEvent = new EventEmitter<string>();

  //method 1
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  //method 2
  // someVal: string = '';
  // addNewItem2(value: string) {
  //   this.newItemEvent.emit(this.someVal);
  // }


  //@Viewchild is used to get the dom element from template ref variable 
  // please ref https://v17.angular.io/api/core/ViewChild#description
  @ViewChild('newViewChild') nVC: any;
  addNewItem3() {
    console.log('@viewchild', this.nVC);
    this.newItemEvent.emit(this.nVC.nativeElement.value);
  }

// 
 @Input() valueFromParent: string = '';

 //


 output:string ='';


 


}


