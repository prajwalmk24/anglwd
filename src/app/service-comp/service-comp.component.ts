import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../Services/user-service.service';
import { DirectComponent } from "../direct/direct.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-comp',
  standalone: true,
  imports: [DirectComponent,CommonModule],
  templateUrl: './service-comp.component.html',
  styleUrl: './service-comp.component.css',
  providers:[UserServiceService]
})
export class ServiceCompComponent implements OnInit  {


  defaultUser:{name:string;status:string}[]=[];
  constructor(private userService:UserServiceService){  }
  
  ngOnInit(): void {
     this.defaultUser=this.userService.users;
     console.log('this.defaultUser: ', this.defaultUser);
  }


}
