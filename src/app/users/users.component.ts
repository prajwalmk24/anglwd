import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ContentChild, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatIconModule,
    MatInputModule,
    CommonModule,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements AfterContentInit  {
 
  arr=['aa','bb'];
  // <!-- Use of *ngFor Structural Directive for outputting the Lists in the Angular Component. -->
  @Input('someT') valfromTemp: any;

  // if u comment pls check number 7 from html, 9 from temp html
  @Input() name!: string;
   
  //To acces the elements inside <ng-content/>
  @ContentChild('accessContentChild') aCC: any;
  ngAfterContentInit(): void {
    console.log('this.acc',this.aCC); // output --> this.acc ElementRef {nativeElement: div}nativeElement..........
    // console.log('this.acc value', this.aCC.nativeElement.innerText);
    

    
  }






}
