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
  selector: 'app-re-query',
  templateUrl: './re-query.component.html',
  styleUrls: ['./re-query.component.css']
})
export class ReQueryComponent implements OnInit {
  isValid: Boolean;
  bfl: any;
  isSubmit: boolean = false;
  myDatePickerOptions: any;
  model: any;
  requeryCompare: any =[];
  //allData = [];
  step: 0;
  param: any;
  showResponse: any;
 // jst: Test;
  constructor(private httpClient: HttpClient,  public fb: FormBuilder, private router: Router, public api: ApiServiceService) {
    
   }
   requeryForm: FormGroup = this.fb.group({
    dealerId:['',[Validators.required]],
    REQUERYID:['', [Validators.required]],
    cardNumber: ['', { validators: [Validators.required], updateOn: "change" }],
    orderNumber: ['',{ validators: [Validators.required], updateOn: "change" }],
    loanAmount:['', { validators: [Validators.required], updateOn: "change" }],
    validationKey: ['',[Validators.required]],
    requestId:['',{ validators: [Validators.required], updateOn: "change" }],
    ACQCHNLID:['',{ validators: [Validators.required], updateOn: "change" }],
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
      let apiName = "Requery"
      this.api.LoadSpecs(apiName).subscribe((data) => {
      
        console.log(data);
        this.requeryCompare = data.Request;
        console.log('requery',this.requeryCompare);
      },
      error => {
        console.log('error occured',error);
        this.showResponse = error;
      });
    //   LoadSpec().cSpecsData.then((data) => {
    //     console.log(data);
    //     this.requeryCompare = data.Request;
    //     console.log('requery',this.requeryCompare);
      
    // });
        //console.log(this.bfl, data, responseData);
    }
    
  register(){
    let apiName;
    // Init('Initiaterequery')
    // let dict =[]
    // dict.push({
    //   JsonTag: "CARDNUMBER",
    //   Value: this.requeryForm.value.cardNumber
    //   },
    //   {
    //     JsonTag: "ORDERNO",
    //     value: this.requeryForm.value.orderNumber
    //   },
    //   {
    //     JsonTag: "DEALERID",
    //     value: this.requeryForm.value.dealerId

    //   },
    //   {
    //     JsonTag: "VALIDATIONKEY",
    //     value: this.requeryForm.value.validationKey

    //   },
    //   {
    //     JsonTag: "REQUESTID",
    //     value: this.requeryForm.value.requestId

    //   },
    //   {
    //     JsonTag: "REQUESTDATE1",
    //     value: this.requeryForm.value.rqstOne

    //   },
    //   {
    //     JsonTag: "REQUESTDATE2",
    //     value: this.requeryForm.value.rqstTwo

    //   },
    //   {
    //     JsonTag: "REQUESTTEXT1",
    //     value: this.requeryForm.value.rqstTextOne

    //   },
    //   {
    //     JsonTag: "REQUESTTEXT2",
    //     value: this.requeryForm.value.rqstTextTwo

    //   },
    //   {
    //     JsonTag: "Manufacturer",
    //     value: this.requeryForm.value.manId

    //   },
    //   {
    //     JsonTag: "ASSETID",
    //     value: this.requeryForm.value.assetId

    //   },
    //   {
    //     JsonTag: "LOANAMT",
    //     value: this.requeryForm.value.loanAmount

    //   },
    //   {
    //     JsonTag: "TncACCEP",
    //     value: this.requeryForm.value.tncAccept

    //   },
    //   {
    //     JsonTag: "requeryNO",
    //     value: this.requeryForm.value.requeryNo
    //   },
    //   {
    //     JsonTag: "ParamNameONCARD",
    //     value: this.requeryForm.value.name

    //   },
    //   {
    //     JsonTag: "IPADDR",
    //     value: this.requeryForm.value.ip

    //   },
    //   {
    //     JsonTag: "Tenure",
    //     value: this.requeryForm.value.tenure

    //   },
    //   {
    //     JsonTag: "PIN",
    //     value: this.requeryForm.value.pinCode

    //   },
    //   {
    //     JsonTag: "SALETYPE",
    //     value: this.requeryForm.value.saleType

    //   },
    //   {
    //     JsonTag: "PRODDESC",
    //     value: this.requeryForm.value.desc
    //   },
    //   {
    //     JsonTag: "SCHEMEID",
    //     value: this.requeryForm.value.schemeId


    //   },
    //   {
    //     JsonTag: "MOBILENO",
    //     value: this.requeryForm.value.mobile

    //   }
    //   );
    
    // setValues(dict);
    // sendRequest();
    this.isSubmit = true;
    if(this.isSubmit === true) {

      //console.log('values',this.requeryForm.value.data[0], this.requeryForm.value.value[0],this.requeryForm.value.key[0]);
      let all = [this.requeryForm.value.dealerId, this.requeryForm.value.REQUERYID, this.requeryForm.value.cardNumber, this.requeryForm.value.orderNumber,this.requeryForm.value.loanAmount,this.requeryForm.value.validationKey, this.requeryForm.value.requestId, this.requeryForm.value.ACQCHNLID, this.requeryForm.value.rqstOne, this.requeryForm.value.rqstTwo, this.requeryForm.value.rqstTextOne, this.requeryForm.value.rqstTextTwo]
      for(let a in all ){
        console.log('its data',a,this.requeryCompare[a])
        if(this.requeryCompare[a].IsMandatory === "Yes"){
        
          console.log(all[a]);
          
            let data: patnerInput[] = [{
            JSON_TAG: this.requeryCompare[a].JsonTag,
              value: all[a]
            }]
          //BflBase.setValue(data[0].JSON_TAG,data[0].value);
          console.log('entered Data', data);
           this.isValid = this.check(data, a);
           if(this.isValid === true){
            //let apiName = "Initiaterequery"
             let num = data[0].value;
               let c = num.toString()
               storedata(c,a,this.requeryCompare);
               //this.allData.push(storedata(c,a,this.requeryCompare));
            // this.param = this.requeryCompare[a].ParamName;
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
            // if(this.requeryCompare[a].ParamName === "Request Date 1" || this.requeryCompare[a].ParamName === "Request Date 2")
            // {
            // const data = {
            //   JSON_TAG: this.requeryCompare[a].JsonTag,
            //   value: new Date()
            // }
            //  console.log('entered Data', data);
            //  console.log(data);
            //   this.isValid = true;
            //   if(this.isValid === true){
            //     let apiName = "Initiaterequery"
            //     let num = data[0].value;
            //       let c = num.toString()
            //       this.allData.push(storedata(c,a,this.requeryCompare));
            //    // this.param = this.requeryCompare[a].ParamName;
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
                JSON_TAG: this.requeryCompare[a].JsonTag,
                value: ""
              }
               console.log('entered Data', data);
               console.log(data);
                this.isValid = true;
                if(this.isValid === true){
                  //let apiName = "Initiaterequery"
                  let c = null;
                  storedata(c,a,this.requeryCompare);
                 // this.allData.push(storedata(c,a,this.requeryCompare));
                  //this.param = this.requeryCompare[a].ParamName;
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
               JSON_TAG: this.requeryCompare[a].JsonTag,
               value: all[a]
             }]
             console.log('entered Data', data);
             
              this.isValid = this.check(data, a);
              if(this.isValid === true){
               // let apiName = "Initiaterequery"
                let num = data[0].value;
                  let c = num.toString()
                  storedata(c,a,this.requeryCompare);
                  //this.allData.push(storedata(c,a,this.requeryCompare));
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
                  apiName = "Requery"
                  let encrypt = new encrypt_decrypt();
                  let obj= {}
                  allData.forEach(element => {
                   obj[element?.cSpec?.JsonTag]=element.value
                    
                  });
                  let s = encrypt.encryptdata(obj);
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
                    this.showResponse = error;
                  });
                  let dc = encrypt.decryptionData(s);
  }
}
  
  public errorHandling = (control: string, error: string) => {
    return this.requeryForm.controls[control].hasError(error);
  }
  
  check(data, step){
   
    let a = step;
      let num = data[0].value;
      console.log(num);
      let mand =  this.requeryCompare[a].IsMandatory;;
      let min = parseInt(this.requeryCompare[a].Min_len);
      let max = parseInt(this.requeryCompare[a].Max_len);
      let valid = ( this.requeryCompare[a].DataType === 'N') ? checkNumber(mand,num,min,max) : ( this.requeryCompare[a].DataType === 'AN') ? checkAlpha(mand,num,min,max) : ( this.requeryCompare[a].DataType === 'C') ? checkChar(mand,num,min,max): 'fail';
      (valid === true)?this.isValid =true:this.isValid=false;
      (valid === 'empty field')?this.showResponse = {"Message": "The field " +this.requeryCompare[a].ParamName+ " is required"}:(valid === "not number")? this.showResponse = {"Message":'Please Enter only numbers for field '+ this.requeryCompare[a].ParamName +'.'}:(valid === "not alphanumeric")?this.showResponse = {"Message":'Please Enter only alphanumeric Characters for field '+ this.requeryCompare[a].ParamName +'.'}:(valid === "not char")?this.showResponse = {"Message":'Please Enter only alphanumeric Characters for field '+ this.requeryCompare[a].ParamName +'.'}:(valid=== false)?this.showResponse ={"Message":'Please Enter a '+ this.requeryCompare[a].ParamName +' with Minimum and Maximum Length of '+ this.requeryCompare[a].Min_len +' & ' + this.requeryCompare[a].Max_len +'.'}:this.onReset();
       if(valid !== true){
         alert(this.showResponse.Message);
       }
      console.log('is valid',this.isValid);  
          
            return this.isValid;
           

         
 }
  onReset() {
    this.isSubmit = false;
    this.requeryForm.reset();
  }
}
