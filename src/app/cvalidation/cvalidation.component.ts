import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../apiServices/api-service.service';
//import { HttpClient } from "@angular/common/http";
//import  * as data from './bflData.json';  
import {patnerInput} from  "../../apiCalls/CPartnerInput.models";
import {cFieldValue} from  "../../apiCalls/CFieldValue.models";
import { encrypt_decrypt } from 'src/apiCalls/encryption';
import { IsNumber, IsAlphaNum, IsChar } from 'src/apiCalls/valid';
@Component({
  selector: 'app-cvalidation',
  templateUrl: './cvalidation.component.html',
  styleUrls: ['./cvalidation.component.css']
})
export class CvalidationComponent implements OnInit {
  isSubmit: boolean = false;
  otpCompare: any =[]
  isValid: Boolean;
  status:Boolean = false;
  step:any = 0;
  n:any = 'CARDNUMBER';
  param: any;
  selected2:any;
  val:any;
  errorMessage: any = 'blabla';
  allData:any= [];

  errors: any = ['', null, undefined];
  //bflData: any = [this.ccommon.LoadSpecs()];
  
    constructor(private router: Router, public api: ApiServiceService) { }

  ngOnInit(): void {
    let apiName = "InitiateOTP"
    this.api.LoadSpecs(apiName).subscribe((data) => {
      
      console.log(data);
      this.otpCompare = data.Request;
      console.log('e',this.otpCompare);
      this.isSelected();
    },
    error => {
      console.log('error occured',error);
    });
    
    
    // .then((data)  =>{
    //   console.log('all',data.Request);
    //   this.otpCompare = data.Request;
      
    //   this.isSelected();
    // });
    
  }
 
  isSelected() { 
    // selectedFood = this.foods[2].value;
     this.selected2 = this.otpCompare[0].JsonTag;
     this.param = this.otpCompare[0].ParamName;
     console.log(this.selected2);
     //return an === 0;
  }
   register(){
     console.log('btn clicked',this.val);
     this.isValid = false;
     this.isSubmit = true;
     //CHECK IF FIELDE IS MANDATORY
     if(this.otpCompare[this.step].IsMandatory === "Yes"){
     if(this.errors.indexOf(this.val) >= 0){
       console.log('errored');
       return false;
     }
     if(this.isSubmit === true
       ) {
       let data: patnerInput[] = [{
        JSON_TAG: this.selected2,
         value: this.val
       }]
       console.log('entered Data', data);
       console.log(data);
        this.check(data);
        if(this.isValid === true){
          this.step = this.step + 1;
          this.selected2 = this.otpCompare[this.step].JsonTag;
          this.param = this.otpCompare[this.step].ParamName;
          //this.n = this.otpCompare[0].JsonTag;
          
        }
        else {
         this.step = this.step;
        }
 
       }
      }
      else {
         if(this.val === ''){
         if(this.otpCompare[this.step].ParamName === "Request Date 1" || this.otpCompare[this.step].ParamName === "Request Date 2")
         {
          //let data: patnerInput[] = [{JSON_TAG: this.selected2,value: this.val}]
          let data = [{
            JSON_TAG: this.selected2,
            value: new Date()
          }]
          console.log('entered Data', data);
          console.log(data);
           this.isValid = true;
           if(this.isValid === true){
             this.step = this.step + 1;
             this.selected2 = this.otpCompare[this.step].JsonTag;
             this.param = this.otpCompare[this.step].ParamName;
             //this.n = this.otpCompare[0].JsonTag;
             
           }
           else {
            this.step = this.step;
           }
         }
         else {
          this.step = this.step + 1;
          this.selected2 = this.otpCompare[this.step].JsonTag;
          this.param = this.otpCompare[this.step].ParamName;
          //this.n = this.otpCompare[0].JsonTag;
        }
      }
      else {
        if(this.isSubmit === true){
         let data: patnerInput[]= [{
            JSON_TAG: this.selected2,
            value: this.val
          }]
          console.log('entered Data', data);
          console.log(data);
           this.check(data);
           if(this.isValid === true){
             this.step = this.step + 1;
             this.selected2 = this.otpCompare[this.step].JsonTag;
             this.param = this.otpCompare[this.step].ParamName;
             this.n = this.otpCompare[0].JsonTag;
             
           }
           else {
            this.step = this.step;
           }
    
          }
      }
    }
     
     }
     check(data){
      let a = this.step;
      let num = data[0].value;
      let min = parseInt(this.otpCompare[a].Min_len);
      let max = parseInt(this.otpCompare[a].Max_len);
      let valid = ( this.otpCompare[a].DataType === 'N') ? IsNumber(num) : ( this.otpCompare[a].DataType === 'AN') ? IsAlphaNum(num) : ( this.otpCompare[a].DataType === 'C') ? IsChar(num): 'fail';
      (valid === true)?this.isValid =true:this.isValid=false;
      (valid === "not number")? alert('Please Enter only numbers for field '+ this.otpCompare[a].ParamName +'.'):(valid === "not alphanumeric")?alert('Please Enter only alphanumeric Characters for field '+ this.otpCompare[a].ParamName +'.'):(valid === "not char")?alert('Please Enter only alphanumeric Characters for field '+ this.otpCompare[a].ParamName +'.'):(valid=== false)?alert('Please Enter a '+ this.otpCompare[a].ParamName +' with Minimum and Maximum Length of '+ this.otpCompare[a].Min_len +' & ' + this.otpCompare[a].Max_len +'.'):this.onReset();
      console.log('is valid',this.isValid);   
      if(valid === true){
            let c = num.toString()
             let json: cFieldValue[] = [{value: c, isValid: true,cSpec:{
               Id:this.otpCompare[a].Id,
               ParamName: this.otpCompare[a].ParamName,
               JsonTag: this.otpCompare[a].JsonTag,
               Min_len: this.otpCompare[a].Min_len,
               Max_len: this.otpCompare[a].Max_len,
               IsMandatory: this.otpCompare[a].IsMandatory,
               DataType: this.otpCompare[a].DataType
              }}]
              console.log('all data', json);
              this.allData.push(json);
              let encrypt = new encrypt_decrypt();
              let s = encrypt.encryptdata(this.allData);
              console.log(s);
              let dc = encrypt.decryptionData(s);
              console.log(dc);
    }
    else {
      this.onReset();
      return;
    }
  }
    onReset() {
      this.isSubmit = false;
      this.val= '';
    }

}
