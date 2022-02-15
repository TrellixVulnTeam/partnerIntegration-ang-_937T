
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { ApiServiceService } from '../apiServices/api-service.service'
import { CvalidationComponent } from '../cvalidation/cvalidation.component';
import { cSpecs } from 'src/apiCalls/Cspecs.models';
import {patnerInput} from  "../../apiCalls/CPartnerInput.models";
import {cFieldValue} from  "../../apiCalls/CFieldValue.models";
import {storedata, allData, makeitEmpty} from  "../../apiCalls/storedata.models";
//import {Test } from "../../apiCalls/ccommon";
import {Init,setValues, sendRequest} from "../../apiCalls/bflcontroller-Base";
import {IsNumber,IsAlphaNum,IsChar,check_min_max, checkAlpha,checkChar,checkNumber} from 'src/apiCalls/valid';
import { encrypt_decrypt } from 'src/apiCalls/encryption';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  isValid: Boolean;
  bfl: any;
  isSubmit: boolean = false;
  myDatePickerOptions: any;
  model: any;
  otpCompare: any =[];
  //allData = [];
  step: 0;
  param: any;
  showResponse: any;
 // jst: Test;
  constructor(private httpClient: HttpClient,  public fb: FormBuilder, private router: Router, public api: ApiServiceService) {
    
   }
   otpForm: FormGroup = this.fb.group({
    cardNumber: ['', { validators: [Validators.required], updateOn: "change" }],
    orderNumber: ['',{ validators: [Validators.required], updateOn: "change" }],
    dealerId:['',[Validators.required]],
    validationKey: ['',[Validators.required]],
    requestId:['',{ validators: [Validators.required], updateOn: "change" }],
    rqstOne:[''],
    rqstTwo:[''],
    rqstTextOne:['',{ validators: [Validators.required], updateOn: "change" }],
    rqstTextTwo:['',{ validators: [Validators.required], updateOn: "change" }],
    manId:[''],
    assetId:[''],
    loanAmount:['',{ validators: [Validators.required], updateOn: "change" }],
    tncAccept:['',{ validators: [Validators.required], updateOn: "change" }],
    otpNo:[''],
    name:[''],
    ip:['',{ validators: [Validators.required], updateOn: "change" }],
    tenure:['',{ validators: [Validators.required], updateOn: "change" }],
    pinCode:['',{ validators: [Validators.required], updateOn: "change" }],
    saleType:['',{ validators: [Validators.required], updateOn: "change" }],
    desc:['',{ validators: [Validators.required], updateOn: "change" }],
    schemeId:['',{ validators: [Validators.required], updateOn: "change" }],
    mobile:['']

});

  ngOnInit(){
   // let a = Test;

    makeitEmpty();
   // let myCompOneObj = new CvalidationComponent();
  this.LoadSpecs();
  this.BFLData();
    
  }
 
    
    BFLData(){
      this.api.BFLDATA().subscribe((data) => {
        console.log('BFL DATA',data);
      },
      error => {
        console.log('error occured',error);
        this.showResponse = error;
      });
    }
    LoadSpecs(){
      let apiName = "InitiateOTP"
      this.api.LoadSpecs(apiName).subscribe((data) => {
      
        console.log(data);
        this.otpCompare = data.Request;
        console.log('otp',this.otpCompare);
      },
      error => {
        console.log('error occured',error);
        this.showResponse = error;
      });
     
    //   LoadSpec().cSpecsData.then((data) => {
    //     console.log(data);
    //     this.otpCompare = data.Request;
    //     console.log('otp',this.otpCompare);
      
    // });
        //console.log(this.bfl, data, responseData);
    }
    
  register(){
    let apiName;
    // Init('InitiateOTP')
    // let dict =[]
    // dict.push({
    //   JsonTag: "CARDNUMBER",
    //   Value: this.otpForm.value.cardNumber
    //   },
    //   {
    //     JsonTag: "ORDERNO",
    //     value: this.otpForm.value.orderNumber
    //   },
    //   {
    //     JsonTag: "DEALERID",
    //     value: this.otpForm.value.dealerId

    //   },
    //   {
    //     JsonTag: "VALIDATIONKEY",
    //     value: this.otpForm.value.validationKey

    //   },
    //   {
    //     JsonTag: "REQUESTID",
    //     value: this.otpForm.value.requestId

    //   },
    //   {
    //     JsonTag: "REQUESTDATE1",
    //     value: this.otpForm.value.rqstOne

    //   },
    //   {
    //     JsonTag: "REQUESTDATE2",
    //     value: this.otpForm.value.rqstTwo

    //   },
    //   {
    //     JsonTag: "REQUESTTEXT1",
    //     value: this.otpForm.value.rqstTextOne

    //   },
    //   {
    //     JsonTag: "REQUESTTEXT2",
    //     value: this.otpForm.value.rqstTextTwo

    //   },
    //   {
    //     JsonTag: "Manufacturer",
    //     value: this.otpForm.value.manId

    //   },
    //   {
    //     JsonTag: "ASSETID",
    //     value: this.otpForm.value.assetId

    //   },
    //   {
    //     JsonTag: "LOANAMT",
    //     value: this.otpForm.value.loanAmount

    //   },
    //   {
    //     JsonTag: "TncACCEP",
    //     value: this.otpForm.value.tncAccept

    //   },
    //   {
    //     JsonTag: "OTPNO",
    //     value: this.otpForm.value.otpNo
    //   },
    //   {
    //     JsonTag: "ParamNameONCARD",
    //     value: this.otpForm.value.name

    //   },
    //   {
    //     JsonTag: "IPADDR",
    //     value: this.otpForm.value.ip

    //   },
    //   {
    //     JsonTag: "Tenure",
    //     value: this.otpForm.value.tenure

    //   },
    //   {
    //     JsonTag: "PIN",
    //     value: this.otpForm.value.pinCode

    //   },
    //   {
    //     JsonTag: "SALETYPE",
    //     value: this.otpForm.value.saleType

    //   },
    //   {
    //     JsonTag: "PRODDESC",
    //     value: this.otpForm.value.desc
    //   },
    //   {
    //     JsonTag: "SCHEMEID",
    //     value: this.otpForm.value.schemeId


    //   },
    //   {
    //     JsonTag: "MOBILENO",
    //     value: this.otpForm.value.mobile

    //   }
    //   );
    
    // setValues(dict);
    // sendRequest();
    this.isSubmit = true;
    if(this.isSubmit === true) {

      //console.log('values',this.otpForm.value.data[0], this.otpForm.value.value[0],this.otpForm.value.key[0]);
      let all = [this.otpForm.value.cardNumber, this.otpForm.value.orderNumber,this.otpForm.value.dealerId,this.otpForm.value.validationKey, this.otpForm.value.requestId, this.otpForm.value.rqstOne, this.otpForm.value.rqstTwo, this.otpForm.value.rqstTextOne, this.otpForm.value.rqstTextTwo, this.otpForm.value.manId, this.otpForm.value.assetId, this.otpForm.value.loanAmount, this.otpForm.value.tncAccept, this.otpForm.value.otpNo, this.otpForm.value.name,this.otpForm.value.ip, this.otpForm.value.tenure, this.otpForm.value.pinCode, this.otpForm.value.saleType,this.otpForm.value.desc,this.otpForm.value.schemeId,this.otpForm.value.mobile]
      for(let a in all ){
        console.log('its data',a,this.otpCompare[a])
        if(this.otpCompare[a].IsMandatory === "Yes"){
        
          console.log(all[a]);
          
            let data: patnerInput[] = [{
            JSON_TAG: this.otpCompare[a].JsonTag,
              value: all[a]
            }]
          //BflBase.setValue(data[0].JSON_TAG,data[0].value);
          console.log('entered Data', data);
           this.isValid = this.check(data, a);
           if(this.isValid === true){
            //let apiName = "InitiateOTP"
             let num = data[0].value;
               let c = num.toString()
               storedata(c,a,this.otpCompare)
               //this.allData.push(storedata(c,a,this.otpCompare));
            // this.param = this.otpCompare[a].ParamName;
            // let encrypt = new encrypt_decrypt();
            // let s = encrypt.encryptdata(this.allData);
            // console.log(s);
            // this.api.SendRequest(s,apiName).subscribe((data) => {
             
            //   console.log(data);
            // });
            // let dc = encrypt.decryptionData(s);
            // console.log(dc);
                }
           else {
             this.onReset();
             return ;
           }
          }   
         else {
            if(all[a] === ''){
            // if(this.otpCompare[a].ParamName === "Request Date 1" || this.otpCompare[a].ParamName === "Request Date 2")
            // {
            // const data = {
            //   JSON_TAG: this.otpCompare[a].JsonTag,
            //   value: new Date()
            // }
            //  console.log('entered Data', data);
            //  console.log(data);
            //   this.isValid = true;
            //   if(this.isValid === true){
            //     let apiName = "InitiateOTP"
            //     let num = data[0].value;
            //       let c = num.toString()
            //       this.allData.push(storedata(c,a,this.otpCompare));
            //    // this.param = this.otpCompare[a].ParamName;
            //    let encrypt = new encrypt_decrypt();
            //    let s = encrypt.encryptdata(this.allData);
            //    console.log(s);
            //    this.api.SendRequest(s,apiName).subscribe((data) => {
                
            //      console.log(data);
            //    });
            //    let dc = encrypt.decryptionData(s);
            //    console.log(dc);
            //   }
            //   else {
            //     this.onReset();
            //   return;
            //   }
            // }
            // else { 
              const data = {
                JSON_TAG: this.otpCompare[a].JsonTag,
                value: ""
              }
               console.log('entered Data', data);
               console.log(data);
                this.isValid = true;
                if(this.isValid === true){
                //  let apiName = "InitiateOTP"
                  let c = null;
                  storedata(c,a,this.otpCompare)
                  //this.allData.push(storedata(c,a,this.otpCompare));
                  //this.param = this.otpCompare[a].ParamName;
                //   let encrypt = new encrypt_decrypt();
                //   let s = encrypt.encryptdata(this.allData);
                //   console.log(s);
                //   this.api.SendRequest(s,apiName).subscribe((data) => {
                   
                //     console.log(data);
                //   });
                //   let dc = encrypt.decryptionData(s);
                //   console.log(dc);
                // }
           }
         }
         else {
           if(this.isSubmit === true){
            let data: patnerInput[]= [{
               JSON_TAG: this.otpCompare[a].JsonTag,
               value: all[a]
             }]
             console.log('entered Data', data);
             
              this.isValid = this.check(data, a);
              if(this.isValid === true){
               // let apiName = "InitiateOTP"
                let num = data[0].value;
                  let c = num.toString()
                  storedata(c,a,this.otpCompare)
                  //this.allData.push(storedata(c,a,this.otpCompare));
              //     let encrypt = new encrypt_decrypt();
              // let s = encrypt.encryptdata(this.allData);
              // console.log(s);
              // this.api.SendRequest(s,apiName).subscribe((data) => {
               
              //   console.log(data);
              // });
              // let dc = encrypt.decryptionData(s);
              // console.log(dc);
          
          // else {
          //   this.onReset();
          //   return false;
          // }
              }
              else {
                this.onReset();
               return;
              }
       
            }
        }
      }
        
    }
    apiName = "InitiateOTP"
    let encrypt = new encrypt_decrypt();
    let obj= {}
       allData.forEach(element => {
        obj[element?.cSpec?.JsonTag]=element.value
         
       });
              let s = encrypt.encryptdata(obj);
              console.log(s);
              if (apiName === ''|| apiName === null || apiName === undefined ){
                this.showResponse = "{" + "\"Message\":\"Please provide API name" + "\"}";
                alert('Please Define Api Name to Proceed');
              }
              this.api.SendRequest(s,apiName).subscribe((data) => {
               
                console.log(data);
                this.showResponse = data;

                  },
                  error => {
                    console.log('error occured',error);
                    this.showResponse = error;
                  });
              let dc = encrypt.decryptionData(s);
              console.log(dc);
  }
}
  
  public errorHandling = (control: string, error: string) => {
    return this.otpForm.controls[control].hasError(error);
  }
  
  check(data, step){
   
    let a = step;
      let num = data[0].value;
      console.log(num);
      let mand =  this.otpCompare[a].IsMandatory;
      let min = parseInt(this.otpCompare[a].Min_len);
      let max = parseInt(this.otpCompare[a].Max_len);
      let valid = ( this.otpCompare[a].DataType === 'N') ? checkNumber(mand,num,min,max) : ( this.otpCompare[a].DataType === 'AN') ? checkAlpha(mand,num,min,max) : ( this.otpCompare[a].DataType === 'C') ? checkChar(mand,num,min,max): 'fail';
      (valid === true)?this.isValid =true:this.isValid=false;
      (valid === 'empty field')?this.showResponse = {"Message": "The field " +this.otpCompare[a].ParamName+ " is required"}:(valid === "not number")? this.showResponse = {"Message":'Please Enter only numbers for field '+ this.otpCompare[a].ParamName +'.'}:(valid === "not alphanumeric")?this.showResponse = {"Message":'Please Enter only alphanumeric Characters for field '+ this.otpCompare[a].ParamName +'.'}:(valid === "not char")?this.showResponse = {"Message":'Please Enter only alphanumeric Characters for field '+ this.otpCompare[a].ParamName +'.'}:(valid=== false)?this.showResponse ={"Message":'Please Enter a '+ this.otpCompare[a].ParamName +' with Minimum and Maximum Length of '+ this.otpCompare[a].Min_len +' & ' + this.otpCompare[a].Max_len +'.'}:this.onReset();
       if(valid !== true){
         alert(this.showResponse.Message);
       }
      //if(valid !== true){this.allData= [];}
      console.log('is valid',this.isValid);  
          
            return this.isValid;
           

         
 }
  onReset() {
    this.isSubmit = false;
    this.otpForm.reset();
  }

}
