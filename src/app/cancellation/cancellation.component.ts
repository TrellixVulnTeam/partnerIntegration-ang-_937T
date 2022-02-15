import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { ApiServiceService } from '../apiServices/api-service.service'
import { CvalidationComponent } from '../cvalidation/cvalidation.component';
import { cSpecs } from 'src/apiCalls/Cspecs.models';
import {patnerInput} from  "../../apiCalls/CPartnerInput.models";
import {cFieldValue} from  "../../apiCalls/CFieldValue.models";
import {storedata,allData,makeitEmpty} from  "../../apiCalls/storedata.models";
import {Init,setValues, sendRequest} from "../../apiCalls/bflcontroller-Base";
import {IsNumber,IsAlphaNum,IsChar,check_min_max, checkAlpha,checkChar,checkNumber} from 'src/apiCalls/valid';
import { encrypt_decrypt } from 'src/apiCalls/encryption';
@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.component.html',
  styleUrls: ['./cancellation.component.css']
})
export class CancellationComponent implements OnInit {
  isValid: Boolean;
  bfl: any;
  isSubmit: boolean = false;
  myDatePickerOptions: any;
  model: any;
  cancelCompare: any =[];
  //allData = [];
  step: 0;
  param: any;
  showResponse: any;
 // jst: Test;
  constructor(private httpClient: HttpClient,   public fb: FormBuilder, private router: Router, public api: ApiServiceService) {
    
   }
   cancelForm: FormGroup = this.fb.group({
    
    dealerId:['',[Validators.required]],
    dealId:['',{ validators: [Validators.required], updateOn: "change" }],
    loanAmount:['',{ validators: [Validators.required], updateOn: "change" }],
    validationKey: ['',[Validators.required]],
    orderNumber: ['',{ validators: [Validators.required], updateOn: "change" }],
    requestId:['',{ validators: [Validators.required], updateOn: "change" }],
    rqstOne:[''],
    rqstTwo:[''],
    rqstTextOne:['',{ validators: [Validators.required], updateOn: "change" }],
    rqstTextTwo:['',{ validators: [Validators.required], updateOn: "change" }],
    

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
      let apiName = "CancelledTransaction"
      this.api.LoadSpecs(apiName).subscribe((data) => {
        console.log(data);
        this.cancelCompare = data.Request;
        console.log('cancel',this.cancelCompare);
      },
        error => {
          console.log('error occured',error);
          this.showResponse = error;
      });
    //   LoadSpec().cSpecsData.then((data) => {
    //     console.log(data);
    //     this.cancelCompare = data.Request;
    //     console.log('otp',this.cancelCompare);
      
    // });
        //console.log(this.bfl, data, responseData);
    }
    
  register(){
    let apiName;
    // Init('CancelledTransaction')
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

     // console.log('values',this.cancelForm.value.data[0], this.cancelForm.value.value[0],this.cancelForm.value.key[0]);
      let all = [this.cancelForm.value.dealerId, this.cancelForm.value.dealId, this.cancelForm.value.loanAmount,this.cancelForm.value.validationKey,this.cancelForm.value.orderNumber, this.cancelForm.value.requestId, this.cancelForm.value.rqstOne, this.cancelForm.value.rqstTwo, this.cancelForm.value.rqstTextOne, this.cancelForm.value.rqstTextTwo]
      for(let a in all ){
      console.log('its data',a,this.cancelCompare[a])
        if(this.cancelCompare[a].IsMandatory === "Yes"){
        
          console.log(all[a]);
          
            let data: patnerInput[] = [{
            JSON_TAG: this.cancelCompare[a].JsonTag,
              value: all[a]
            }]
          //BflBase.setValue(data[0].JSON_TAG,data[0].value);
          console.log('entered Data', data);
           this.isValid = this.check(data, a);
           if(this.isValid === true){
            //let apiName = "CancelledTransaction"
             let num = data[0].value;
               let c = num.toString()
               storedata(c,a,this.cancelCompare)
              // this.allData.push(storedata(c,a,this.cancelCompare));
            // this.param = this.cancelCompare[a].ParamName;
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
            // if(this.cancelCompare[a].ParamName === "Request Date 1" || this.cancelCompare[a].ParamName === "Request Date 2")
            // {
            // const data = {
            //   JSON_TAG: this.cancelCompare[a].JsonTag,
            //   value: new Date()
            // }
            //  console.log('entered Data', data);
            //  console.log(data);
            //   this.isValid = true;
            //   if(this.isValid === true){
            //     let apiName = "CancelledTransaction"
            //     let num = data[0].value;
            //       let c = num.toString()
            //       this.allData.push(storedata(c,a,this.cancelCompare));
            //    // this.param = this.cancelCompare[a].ParamName;
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
                JSON_TAG: this.cancelCompare[a].JsonTag,
                value: ""
              }
               console.log('entered Data', data);
               console.log(data);
                this.isValid = true;
                if(this.isValid === true){
                  //let apiName = "CancelledTransaction"
                  let c = null;
                  storedata(c,a,this.cancelCompare)
                  //this.allData.push(storedata(c,a,this.cancelCompare));
                  //this.param = this.cancelCompare[a].ParamName;
                  // let encrypt = new encrypt_decrypt();
                  // let s = encrypt.encryptdata(this.allData);
                  // console.log(s);
                  // this.api.SendRequest(s,apiName).subscribe((data) => {
                   
                  //   console.log(data);
                  // });
                  // let dc = encrypt.decryptionData(s);
                  // console.log(dc);
              //  }
           }
         }
         else {
           if(this.isSubmit === true){
            let data: patnerInput[]= [{
               JSON_TAG: this.cancelCompare[a].JsonTag,
               value: all[a]
             }]
             console.log('entered Data', data);
             
              this.isValid = this.check(data, a);
              if(this.isValid === true){
                //let apiName = "CancelledTransaction"
                let num = data[0].value;
                  let c = num.toString()
                  storedata(c,a,this.cancelCompare)
                  //this.allData.push(storedata(c,a,this.cancelCompare));
                  
          
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
    apiName = "CancelledTransaction"
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
               this.showResponse = {error};
              });
              let dc = encrypt.decryptionData(s);
              console.log(dc);
  }
}
  
  public errorHandling = (control: string, error: string) => {
    return this.cancelForm.controls[control].hasError(error);
  }
  
  check(data, step){
   
    let a = step;
      let num = data[0].value;
      console.log(num);
      let mand = this.cancelCompare[a].IsMandatory;
      let min = parseInt(this.cancelCompare[a].Min_len);
      let max = parseInt(this.cancelCompare[a].Max_len);
      let valid = ( this.cancelCompare[a].DataType === 'N') ? checkNumber(mand,num,min,max) : ( this.cancelCompare[a].DataType === 'AN') ? checkAlpha(mand,num,min,max) : ( this.cancelCompare[a].DataType === 'C') ? checkChar(mand,num,min,max): 'fail';
      (valid === true)?this.isValid =true:this.isValid=false;
      (valid === 'empty field')?this.showResponse = {"Message": "The field " +this.cancelCompare[a].ParamName+ " is required"}:(valid === "not number")? this.showResponse = {"Message":'Please Enter only numbers for field '+ this.cancelCompare[a].ParamName +'.'}:(valid === "not alphanumeric")?this.showResponse = {"Message":'Please Enter only alphanumeric Characters for field '+ this.cancelCompare[a].ParamName +'.'}:(valid === "not char")?this.showResponse = {"Message":'Please Enter only alphanumeric Characters for field '+ this.cancelCompare[a].ParamName +'.'}:(valid=== false)?this.showResponse ={"Message":'Please Enter a '+ this.cancelCompare[a].ParamName +' with Minimum and Maximum Length of '+ this.cancelCompare[a].Min_len +' & ' + this.cancelCompare[a].Max_len +'.'}:this.onReset();
       if(valid !== true){
         alert(this.showResponse.Message);
       }
      
      //if(valid !== true){this.allData= [];}
      console.log('is valid',this.isValid);  
          
            return this.isValid;       
 }
  onReset() {
    this.isSubmit = false;
    this.cancelForm.reset();
  }

}


