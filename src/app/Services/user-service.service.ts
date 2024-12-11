import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  users=[
    {name:'a',status:'active'},
    {name:'b',status:'not-active'},  
  ]


  //adduser from service
  addUser(name:string,status:string){
    this.users.push({name,status});
  }

}
