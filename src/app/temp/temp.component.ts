import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AddUserComponent } from "../add-user/add-user.component";


@Component({
  selector: 'app-temp',
  standalone: true,
  imports: [FormsModule, MatDividerModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatIconModule,
    MatIconModule, MatInputModule, CommonModule, AddUserComponent],
  templateUrl: './temp.component.html',
  styleUrl: './temp.component.css',
})
export class TempComponent {

  //@output 
  @Output() newItemEventTempComp = new EventEmitter<string>();
  //method 2
  someVal!: string;
  wwqd: string = '';

  arr = ['dd', 'ew', 'ew'];
  public name = 'Prajwal';

  addNewItem23() {
    this.newItemEventTempComp.emit(this.someVal);

    // this.arr.push(this.someVal);
  }


  rr = ['dd'];

  public name2 = 'Prajwal';
  addNewItem231() {
    // this.newItemEventTempComp.emit(this.someVal);

    this.rr.push(this.someVal);
    //BOTH 41 and 43 are same

    console.log('this.someVal: ', this.someVal);
    
  }

  //ngOnchaneg to Prajwal to any thing
  checkOnchangeMehtod() {
    this.name2 = '';
    
    
  }

// ang docs @output 

items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
    console.log('newItem: ', newItem);
  }
  




}
