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
//import {Test } from "../../apiCalls/ccommon";
import {Init,setValues, sendRequest} from "../../apiCalls/bflcontroller-Base";
import {IsNumber,IsAlphaNum,IsChar,check_min_max, checkAlpha,checkChar,checkNumber} from 'src/apiCalls/valid';
import { encrypt_decrypt } from 'src/apiCalls/encryption';
@Component({
  selector: 'app-pod',
  templateUrl: './pod.component.html',
  styleUrls: ['./pod.component.css']
})
export class PodComponent implements OnInit {

  isValid: Boolean;
  bfl: any;
  isSubmit: boolean = false;
  myDatePickerOptions: any;
  model: any;
  podCompare: any =[];
  //allData = [];
  step: 0;
  param: any;
  showResponse: any;
 // jst: Test;
  constructor(private httpClient: HttpClient,  public fb: FormBuilder, private router: Router, public api: ApiServiceService) {
    
   }
   podForm: FormGroup = this.fb.group({
    requestId:['',{ validators: [Validators.required], updateOn: "change" }],
    dateLastStatus:[''],
    courierName: ['',{ validators: [Validators.required], updateOn: "change" }],
    reciversName:['',{ validators: [Validators.required], updateOn: "change" }],
    awbNumber: ['',{ validators: [Validators.required], updateOn: "change" }],
    deliveryStatus: ['',{ validators: [Validators.required], updateOn: "change" }],
    deliveryAddress: ['',{ validators: [Validators.required], updateOn: "change" }],
    invoiceNumber: ['',{ validators: [Validators.required], updateOn: "change" }],
    invoiceDate: ['',{ validators: [Validators.required], updateOn: "change" }],
    invoiceAmount: ['',{ validators: [Validators.required], updateOn: "change" }],
    SERIALNO: ['',{ validators: [Validators.required], updateOn: "change" }],
    PRODCATEGOTY: ['',{ validators: [Validators.required], updateOn: "change" }],
    MANUFACTURER: ['',{ validators: [Validators.required], updateOn: "change" }],
    PRODDESC:['',{ validators: [Validators.required], updateOn: "change" }],
    dealId: ['',{ validators: [Validators.required], updateOn: "change" }],
    orderNumber: ['',{ validators: [Validators.required], updateOn: "change" }],
    entryDate: [''],
    sellerName: ['',{ validators: [Validators.required], updateOn: "change" }],
    sellerID: ['',{ validators: [Validators.required], updateOn: "change" }],
    rqstOne:[''],
    rqstTwo:[''],
    rqstTextOne:[''],
    rqstTextTwo:[''],

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
      let apiName = "PODInvoice"
      this.api.LoadSpecs(apiName).subscribe((data) => {
      
        console.log(data);
        this.podCompare = data.Request;
        console.log('pod',this.podCompare);
      },
      error => {
        console.log('error occured',error);
        this.showResponse = error;
      });
    
      //.then((data) => {
      //   console.log(data);
      //   this.podCompare = data.Request;
      //   console.log('otp',this.podCompare);
      // })
    }
    
  register(){
    let apiName;
    // Init('InitiateOTP')
    // let dict =[]
    // dict.push({
    //   JsonTag: "CARDNUMBER",
    //   Value: this.podForm.value.cardNumber
    //   },
    //   {
    //     JsonTag: "ORDERNO",
    //     value: this.podForm.value.orderNumber
    //   },
    //   {
    //     JsonTag: "DEALERID",
    //     value: this.podForm.value.dealerId

    //   },
    //   {
    //     JsonTag: "VALIDATIONKEY",
    //     value: this.podForm.value.validationKey

    //   },
    //   {
    //     JsonTag: "REQUESTID",
    //     value: this.podForm.value.requestId

    //   },
    //   {
    //     JsonTag: "REQUESTDATE1",
    //     value: this.podForm.value.rqstOne

    //   },
    //   {
    //     JsonTag: "REQUESTDATE2",
    //     value: this.podForm.value.rqstTwo

    //   },
    //   {
    //     JsonTag: "REQUESTTEXT1",
    //     value: this.podForm.value.rqstTextOne

    //   },
    //   {
    //     JsonTag: "REQUESTTEXT2",
    //     value: this.podForm.value.rqstTextTwo

    //   },
    //   {
    //     JsonTag: "Manufacturer",
    //     value: this.podForm.value.manId

    //   },
    //   {
    //     JsonTag: "ASSETID",
    //     value: this.podForm.value.assetId

    //   },
    //   {
    //     JsonTag: "LOANAMT",
    //     value: this.podForm.value.loanAmount

    //   },
    //   {
    //     JsonTag: "TncACCEP",
    //     value: this.podForm.value.tncAccept

    //   },
    //   {
    //     JsonTag: "OTPNO",
    //     value: this.podForm.value.otpNo
    //   },
    //   {
    //     JsonTag: "ParamNameONCARD",
    //     value: this.podForm.value.name

    //   },
    //   {
    //     JsonTag: "IPADDR",
    //     value: this.podForm.value.ip

    //   },
    //   {
    //     JsonTag: "Tenure",
    //     value: this.podForm.value.tenure

    //   },
    //   {
    //     JsonTag: "PIN",
    //     value: this.podForm.value.pinCode

    //   },
    //   {
    //     JsonTag: "SALETYPE",
    //     value: this.podForm.value.saleType

    //   },
    //   {
    //     JsonTag: "PRODDESC",
    //     value: this.podForm.value.desc
    //   },
    //   {
    //     JsonTag: "SCHEMEID",
    //     value: this.podForm.value.schemeId


    //   },
    //   {
    //     JsonTag: "MOBILENO",
    //     value: this.podForm.value.mobile

    //   }
    //   );
    
    // setValues(dict);
    // sendRequest();
    this.isSubmit = true;
    if(this.isSubmit === true) {

      //console.log('values',this.podForm.value.data[0], this.podForm.value.value[0],this.podForm.value.key[0]);
      let all = [this.podForm.value.requestId, this.podForm.value.dateLastStatus, this.podForm.value.courierName,this.podForm.value.reciversName, this.podForm.value.awbNumber, this.podForm.value.deliveryStatus, this.podForm.value.deliveryAddress, this.podForm.value.invoiceNumber, this.podForm.value.invoiceDate, this.podForm.value.invoiceAmount, this.podForm.value.SERIALNO,this.podForm.value.PRODCATEGOTY, this.podForm.value.MANUFACTURER, this.podForm.value.PRODDESC, this.podForm.value.dealId,this.podForm.value.orderNumber,this.podForm.value.entryDate,this.podForm.value.sellerName, this.podForm.value.sellerID,  this.podForm.value.rqstOne, this.podForm.value.rqstTwo, this.podForm.value.rqstTextOne, this.podForm.value.rqstTextTwo]
      for(let a in all ){
        console.log('its data',a,this.podCompare[a])
        if(this.podCompare[a].IsMandatory === "Yes"){
        
          console.log(all[a]);
          
            let data: patnerInput[] = [{
            JSON_TAG: this.podCompare[a].JsonTag,
              value: all[a]
            }]
          //BflBase.setValue(data[0].JSON_TAG,data[0].value);
          console.log('entered Data', data);
           this.isValid = this.check(data, a);
           if(this.isValid === true){
            //let apiName = "InitiateOTP"
             let num = data[0].value;
               let c = num.toString()
               storedata(c,a,this.podCompare)
              // this.allData.push(storedata(c,a,this.podCompare));
            // this.param = this.podCompare[a].ParamName;
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
            // if(this.podCompare[a].ParamName === "Request Date 1" || this.podCompare[a].ParamName === "Request Date 2")
            // {
            // const data = {
            //   JSON_TAG: this.podCompare[a].JsonTag,
            //   value: new Date()
            // }
            //  console.log('entered Data', data);
            //  console.log(data);
            //   this.isValid = true;
            //   if(this.isValid === true){
            //     //let apiName = "InitiateOTP"
            //     let num = data[0].value;
            //       let c = num.toString()
            //       this.allData.push(storedata(c,a,this.podCompare));
            //    // this.param = this.podCompare[a].ParamName;
            //   //  let encrypt = new encrypt_decrypt();
            //   //  let s = encrypt.encryptdata(this.allData);
            //   //  console.log(s);
            //   //  this.api.SendRequest(s,apiName).subscribe((data) => {
                
            //   //    console.log(data);
            //   //  });
            //   //  let dc = encrypt.decryptionData(s);
            //   //  console.log(dc);
            //   }
            //   else {
            //     this.onReset();
            //   return;
            //   }
            // }
            // else { 
              const data = {
                JSON_TAG: this.podCompare[a].JsonTag,
                value: ""
              }
               console.log('entered Data', data);
               console.log(data);
                this.isValid = true;
                if(this.isValid === true){
                 // let apiName = "InitiateOTP"
                  let c = null;
                  storedata(c,a,this.podCompare)
                 // this.allData.push(storedata(c,a,this.podCompare));
                  //this.param = this.podCompare[a].ParamName;
                  // let encrypt = new encrypt_decrypt();
                  // let s = encrypt.encryptdata(this.allData);
                  // console.log(s);
                  // this.api.SendRequest(s,apiName).subscribe((data) => {
                   
                  //   console.log(data);
                  // });
                  // let dc = encrypt.decryptionData(s);
                  // console.log(dc);
               // }
           }
         }
         else {
           if(this.isSubmit === true){
            let data: patnerInput[]= [{
               JSON_TAG: this.podCompare[a].JsonTag,
               value: all[a]
             }]
             console.log('entered Data', data);
             
              this.isValid = this.check(data, a);
              if(this.isValid === true){
                //let apiName = "InitiateOTP"
                let num = data[0].value;
                  let c = num.toString()
                  storedata(c,a,this.podCompare)
                  //this.allData.push(storedata(c,a,this.podCompare));
                 
          
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
    let encrypt = new encrypt_decrypt();
    let obj= {}
    allData.forEach(element => {
     obj[element?.cSpec?.JsonTag]=element.value
      
    });
    console.log('obfgg',obj);
    let s = encrypt.encryptdata(obj);
    apiName = "PODInvoice"
    if (apiName === ''|| apiName === null || apiName === undefined ){
      this.showResponse = "{" + "\"Message\":\"Please provide API name" + "\"}";
      alert('Please Define Api Name to Proceed');
    }
    
    this.api.SendRequest(s,apiName).subscribe((data) => {
      console.log('respnse data',data);
      this.showResponse = data;

    },
    error => {
      console.log('error occured',error);
      this.showResponse = {error};
    });
    let dc = encrypt.decryptionData(s);
  }
}
  
  public errorHandling = (control: string, error: string) => {
    return this.podForm.controls[control].hasError(error);
  }
  
  check(data, step){
   
    let a = step;
      let num = data[0].value;
      console.log(num);
      let mand = this.podCompare[a].IsMandatory;
      let min = parseInt(this.podCompare[a].Min_len);
      let max = parseInt(this.podCompare[a].Max_len);
      let valid = ( this.podCompare[a].DataType === 'N') ? checkNumber(mand,num,min,max) : ( this.podCompare[a].DataType === 'AN') ? checkAlpha(mand,num,min,max) : ( this.podCompare[a].DataType === 'C') ? checkChar(mand,num,min,max): 'fail';
      (valid === true)?this.isValid =true:this.isValid=false;
      (valid === 'empty field')?this.showResponse = {"Message": "The field " +this.podCompare[a].ParamName+ " is required"}:(valid === "not number")? this.showResponse = {"Message":'Please Enter only numbers for field '+ this.podCompare[a].ParamName +'.'}:(valid === "not alphanumeric")?this.showResponse = {"Message":'Please Enter only alphanumeric Characters for field '+ this.podCompare[a].ParamName +'.'}:(valid === "not char")?this.showResponse = {"Message":'Please Enter only alphanumeric Characters for field '+ this.podCompare[a].ParamName +'.'}:(valid=== false)?this.showResponse ={"Message":'Please Enter a '+ this.podCompare[a].ParamName +' with Minimum and Maximum Length of '+ this.podCompare[a].Min_len +' & ' + this.podCompare[a].Max_len +'.'}:this.onReset();
       if(valid !== true){
         alert(this.showResponse.Message);
       }
      //if(valid !== true){this.allData= [];}
      console.log('is valid',this.isValid);  
          
            return this.isValid;
           

         
 }
  onReset() {
    this.isSubmit = false;
    this.podForm.reset();
  }


}
