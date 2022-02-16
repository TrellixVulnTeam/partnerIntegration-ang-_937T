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
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Console } from 'console';
@Component({
  selector: 'app-eligibilty',
  templateUrl: './eligibilty.component.html',
  styleUrls: ['./eligibilty.component.css']
})
export class EligibiltyComponent implements OnInit {
  isValid: Boolean;
  bfl: any;
  isSubmit: boolean = false;
  myDatePickerOptions: any;
  model: any;
  eligibiltyCompare: any =[];
  //allData = [];
  step: 0;
  param: any;
  showResponse: any;
 // jst: Test;
  constructor(private httpClient: HttpClient,  public fb: FormBuilder, private router: Router, public api: ApiServiceService) {
    //allData = [];
   }
   eligibiltyForm: FormGroup = this.fb.group({
    dealerId:['',[Validators.required]],
    mobile:[''],
    cardNumber: ['', { validators: [Validators.required], updateOn: "change" }],
    orderNumber: ['',{ validators: [Validators.required], updateOn: "change" }],
    pinCode:['',{ validators: [Validators.required], updateOn: "change" }],
    loanAmount:[''],
    validationKey: ['',[Validators.required]],
    requestId:['',{ validators: [Validators.required], updateOn: "change" }],
    tncAccept:['',{ validators: [Validators.required], updateOn: "change" }],
    rqstOne:[''],
    rqstTwo:[''],
    rqstTextOne:[''],
    schemeId:['',{ validators: [Validators.required], updateOn: "change" }],
    tenure:['',{ validators: [Validators.required], updateOn: "change" }],
    ProductDesc:['']
});

  ngOnInit(){
   // let a = Test;
    makeitEmpty();
    //allData = [];
   // let myCompOneObj = new CvalidationComponent();
  this.LoadSpecs();
  this.BFLData();
    
  }
 
    
    BFLData(){
      this.api.BFLDATA().subscribe((data) => {
        console.log('BFL DATA',data);
      },
      error => {
        console.log('error occured',error,error);
        this.showResponse = error;
     
      });
    }
    all:any;
    LoadSpecs(){
     let apiName = "Eligibility"
     //let apiName = '';
      this.api.LoadSpecs(apiName).subscribe((data) => {
      
        console.log(data);
        this.eligibiltyCompare = data?.Request;
        console.log('eligibilty',this.eligibiltyCompare);
      },
      error => {
        console.log('error occured',error);
        this.showResponse = error;
      });
    //   LoadSpec().cSpecsData.then((data) => {
    //     console.log(data);
    //     this.eligibiltyCompare = data.Request;
    //     console.log('eligibilty',this.eligibiltyCompare);
      
    // });
        //console.log(this.bfl, data, responseData);
    }
    
  register(){
    let apiName;
    // Init('Eligibilty')
    // let dict =[]
    // dict.push({
    //   JsonTag: "CARDNUMBER",
    //   Value: this.eligibiltyForm.value.cardNumber
    //   },
    //   {
    //     JsonTag: "ORDERNO",
    //     value: this.eligibiltyForm.value.orderNumber
    //   },
    //   {
    //     JsonTag: "DEALERID",
    //     value: this.eligibiltyForm.value.dealerId

    //   },
    //   {
    //     JsonTag: "VALIDATIONKEY",
    //     value: this.eligibiltyForm.value.validationKey

    //   },
    //   {
    //     JsonTag: "REQUESTID",
    //     value: this.eligibiltyForm.value.requestId

    //   },
    //   {
    //     JsonTag: "REQUESTDATE1",
    //     value: this.eligibiltyForm.value.rqstOne

    //   },
    //   {
    //     JsonTag: "REQUESTDATE2",
    //     value: this.eligibiltyForm.value.rqstTwo

    //   },
    //   {
    //     JsonTag: "REQUESTTEXT1",
    //     value: this.eligibiltyForm.value.rqstTextOne

    //   },
    //   {
    //     JsonTag: "REQUESTTEXT2",
    //     value: this.eligibiltyForm.value.rqstTextTwo

    //   },
    //   {
    //     JsonTag: "Manufacturer",
    //     value: this.eligibiltyForm.value.manId

    //   },
    //   {
    //     JsonTag: "ASSETID",
    //     value: this.eligibiltyForm.value.assetId

    //   },
    //   {
    //     JsonTag: "LOANAMT",
    //     value: this.eligibiltyForm.value.loanAmount

    //   },
    //   {
    //     JsonTag: "TncACCEP",
    //     value: this.eligibiltyForm.value.tncAccept

    //   },
    //   {
    //     JsonTag: "eligibiltyNO",
    //     value: this.eligibiltyForm.value.eligibiltyNo
    //   },
    //   {
    //     JsonTag: "ParamNameONCARD",
    //     value: this.eligibiltyForm.value.name

    //   },
    //   {
    //     JsonTag: "IPADDR",
    //     value: this.eligibiltyForm.value.ip

    //   },
    //   {
    //     JsonTag: "Tenure",
    //     value: this.eligibiltyForm.value.tenure

    //   },
    //   {
    //     JsonTag: "PIN",
    //     value: this.eligibiltyForm.value.pinCode

    //   },
    //   {
    //     JsonTag: "SALETYPE",
    //     value: this.eligibiltyForm.value.saleType

    //   },
    //   {
    //     JsonTag: "PRODDESC",
    //     value: this.eligibiltyForm.value.desc
    //   },
    //   {
    //     JsonTag: "SCHEMEID",
    //     value: this.eligibiltyForm.value.schemeId


    //   },
    //   {
    //     JsonTag: "MOBILENO",
    //     value: this.eligibiltyForm.value.mobile

    //   }
    //   );
    
    // setValues(dict);
    // sendRequest();
    this.isSubmit = true;
    if(this.isSubmit === true) {

      //console.log('values',this.eligibiltyForm.value.data[0], this.eligibiltyForm.value.value[0],this.eligibiltyForm.value.key[0]);
      this.all = [this.eligibiltyForm.value.dealerId, this.eligibiltyForm.value.mobile, this.eligibiltyForm.value.cardNumber, this.eligibiltyForm.value.orderNumber, this.eligibiltyForm.value.pinCode,this.eligibiltyForm.value.loanAmount,this.eligibiltyForm.value.validationKey, this.eligibiltyForm.value.requestId, this.eligibiltyForm.value.tncAccept, this.eligibiltyForm.value.rqstOne, this.eligibiltyForm.value.rqstTwo, this.eligibiltyForm.value.rqstTextOne, this.eligibiltyForm.value.schemeId, this.eligibiltyForm.value.tenure, this.eligibiltyForm.value.ProductDesc]
      for(let a in this.all ){
        console.log('its data',a,this.eligibiltyCompare[a])
        if(this.eligibiltyCompare[a]?.IsMandatory === "Yes"){
          // if(all[a]=== ''|| all[a] === null || all[a] === undefined){
          //   this.showResponse = {"Message": + this.eligibiltyCompare[a].JsonTag + ' ' + 'is Mandatory'};
          // console.log('empty response',this.showResponse);
          // }

          console.log('its mandatory',this.all[a]);
          
            let data: patnerInput[] = [{
            JSON_TAG: this.eligibiltyCompare[a]?.JsonTag,
              value: this.all[a]
            }]
          //BflBase.setValue(data[0].JSON_TAG,data[0].value);
          console.log('entered Data', data);
           this.isValid = this.check(data, a);
           if(this.isValid === true){
            //let apiName = "Eligibility"
             let num = data[0]?.value;
               let c = num.toString()
               storedata(c,a,this.eligibiltyCompare)
               //this.allData.push(storedata(c,a,this.eligibiltyCompare));
            // this.param = this.eligibiltyCompare[a].ParamName;
            //let encrypt = new encrypt_decrypt();
            //let s = encrypt.encryptdata(this.allData);
            //console.log(s);
            //this.api.SendRequest(s,apiName).subscribe((data) => {
             
             // console.log(data);
           // });
           // let dc = encrypt.decryptionData(s);
           // console.log(dc);
                }
           else {
            // this.allData = [];
             this.onReset();
             return ;
           }
          }   
         else {
            if(this.all[a] === ''|| this.all[a] === null || this.all[a] === undefined){
            // if(this.eligibiltyCompare[a].ParamName === "Request Date 1" || this.eligibiltyCompare[a].ParamName === "Request Date 2")
            // {
            // const data = {
            //   JSON_TAG: this.eligibiltyCompare[a].JsonTag,
            //   value: new Date()
            // }
            //  console.log('entered Data', data);
            //  console.log(data);
            //   this.isValid = true;
            //   if(this.isValid === true){
            //     let apiName = "Eligibility"
            //     let num = data[0].value;
            //       let c = num.toString()
            //       this.allData.push(storedata(c,a,this.eligibiltyCompare));
            //    // this.param = this.eligibiltyCompare[a].ParamName;
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
           //  }
           // else { 
              const data = {
                JSON_TAG: this.eligibiltyCompare[a]?.JsonTag,
                value: null
              }
               console.log('entered Data', data);
               console.log(data);
                this.isValid = true;
                if(this.isValid === true){
                  
                  let c = null;
                  storedata(c,a,this.eligibiltyCompare)
                  //this.allData.push(storedata(c,a,this.eligibiltyCompare));
                  //this.param = this.eligibiltyCompare[a].ParamName;
                  //let encrypt = new encrypt_decrypt();
                  //let s = encrypt.encryptdata(this.allData);
                  //console.log(s);
                  //this.api.SendRequest(s,apiName).subscribe((data) => {
                   
                  //  console.log(data);
                 // });
                 // let dc = encrypt.decryptionData(s);
                 // console.log(dc);
                }
          //  }
         }
         else {
           if(this.isSubmit === true){
            let data: patnerInput[]= [{
               JSON_TAG: this.eligibiltyCompare[a]?.JsonTag,
               value: this.all[a]
             }]
             console.log('entered Data', data);
             
              this.isValid = this.check(data, a);
              if(this.isValid === true){
                //let apiName = "Eligibility"
                let num = data[0].value;
                  let c = num.toString();
                  storedata(c,a,this.eligibiltyCompare)
                  //this.allData.push(storedata(c,a,this.eligibiltyCompare));
                 // let encrypt = new encrypt_decrypt();
             // let s = encrypt.encryptdata(this.allData);
             // console.log(s);
            //  this.api.SendRequest(s,apiName).subscribe((data) => {
               
             //   console.log(data);
             // });
            //  let dc = encrypt.decryptionData(s);
           //  console.log(dc);
          
          // else {
          //   this.onReset();
          //   return false;
          // }
              }
              else {
                //this.allData = [];
                this.onReset();
               return;
              }
       
            }
        }
      }
        
    }
    //here
       let encrypt = new encrypt_decrypt();
       console.log('sending data:', [...allData]);
       let obj= {}
       allData.forEach(element => {
        obj[element?.cSpec?.JsonTag]=element.value
         
       });
       console.log(obj,"respons")

             let s = encrypt.encryptdata(obj);
             //console.log(s);
             apiName = "Eligibility"
                  if (apiName === ''|| apiName === null || apiName === undefined ){
                    this.showResponse = "{" + "\"Message\":\"Please provide API name" + "\"}";
                    alert('Please Define Api Name to Proceed');
                  }
                  if(this.showResponse?.Message!=""){
                    return this.showResponse?.Message
                  }
                  // if(!this.showResponse?.Message){
             this.api.SendRequest(s,apiName).subscribe((data) => {
               
               console.log('respnse data',data);
               this.showResponse = data;

             },
             error => {
               console.log('error occured',error);
               this.showResponse = {error};
             });
            
             let dc = encrypt.decryptionData(s);
            //console.log(dc);
// }
  }
}
  
  public errorHandling = (control: string, error: string) => {
    return this.eligibiltyForm.controls[control].hasError(error);
  }
  
  check(data, step){
   
    let a = step;
      let num = data[0].value;
      console.log(num);
      let mand = this.eligibiltyCompare[a]?.IsMandatory;
      let min = parseInt(this.eligibiltyCompare[a]?.Min_len);
      let max = parseInt(this.eligibiltyCompare[a]?.Max_len);
      
      let valid = (this.eligibiltyCompare[a]?.DataType === 'N') ? checkNumber(mand,num,min,max) : ( this.eligibiltyCompare[a]?.DataType === 'AN') ? checkAlpha(mand,num,min,max) : ( this.eligibiltyCompare[a]?.DataType === 'C') ? checkChar(mand,num,min,max): 'fail';
      (valid === true)?this.isValid =true:this.isValid=false;
      //let n = this.eligibiltyCompare[a].ParamName;
      (valid === 'empty field')?this.showResponse = {"Message": "The field " +this.eligibiltyCompare[a]?.ParamName+ " is required"}:(valid === "not number")? this.showResponse = {"Message":'Please Enter only numbers for field '+ this.eligibiltyCompare[a]?.ParamName +'.'}:(valid === "not alphanumeric")?this.showResponse = {"Message":'Please Enter only alphanumeric Characters for field '+ this.eligibiltyCompare[a]?.ParamName +'.'}:(valid === "not char")?this.showResponse = {"Message":'Please Enter only alphanumeric Characters for field '+ this.eligibiltyCompare[a]?.ParamName +'.'}:(valid=== false)?this.showResponse ={"Message":'Please Enter a '+ this.eligibiltyCompare[a]?.ParamName +' with Minimum and Maximum Length of '+ this.eligibiltyCompare[a]?.Min_len +' & ' + this.eligibiltyCompare[a]?.Max_len +'.'}:this.onReset();
       if(valid !== true){
         alert(this.showResponse.Message);
       }
      //if(valid !== true){this.allData= [];}
      console.log('is valid',this.isValid);  
          
            return this.isValid;
           

         
 }
  onReset() {
    this.isSubmit = false;
    this.eligibiltyForm.reset();
  }
}
