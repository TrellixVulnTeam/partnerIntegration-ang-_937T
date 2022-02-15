import { Component } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'partnerIntigration';
  language = ['ANGULAR','JAVA','DOT NET','PHP' ];
  
  apiType = [
    {
    name:'Eligibilty',
    link: 'eligibilty',
    d:true
  },
  {
    name:'OTP',
    link: 'otp',
    d:true
  },
  {
    name:'Auth',
    link:'auth',
    d:true
  },
  {
    name:'POD',
    link:'pod',
    d:true
  },
  {
    name:'ReQuery',
    link:'re-query',
    d:true
  },
  {
    name:'Cancellation',
    link:'cancellation',
    d:true
  },

  
]
  activeLink = this.apiType[0].link;
  constructor(private router: Router){}
  check(){
    //localStorage.setItem('dealerId',null);
    //localStorage.setItem('validationKey',null);
    console.log('checking up', localStorage.getItem('dealerId'), localStorage.getItem('validationKey'));
    if(localStorage.getItem('dealerId')=== null && localStorage.getItem('validationKey')===null){
      for (let a in this.apiType){
        if(a !== '0'){
          console.log(a);
        this.apiType[a].d= true;
        }
      }
     // this.apiType[0].d = true;
    }
    else {
      for (let a in this.apiType){
       
          console.log(a);
        this.apiType[a].d= false;
        
      }
    }
  }
}
