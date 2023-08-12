import { Component } from '@angular/core';

@Component({
  selector: 'app-tempform',
  templateUrl: './tempform.component.html',
  styleUrls: ['./tempform.component.scss']
})
export class TempformComponent {

  email:string="";
  password:string ="";

  data(val:any){
    console.log(val);
  }
}
