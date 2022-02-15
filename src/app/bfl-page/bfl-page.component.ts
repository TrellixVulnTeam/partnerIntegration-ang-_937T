import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../apiServices/api-service.service';
import { HttpClient } from "@angular/common/http";
import  * as data from './bflData.json';  
import {Spec} from "../../apiCalls/models";
import { pathToFileURL } from 'url';
import { CvalidationComponent } from '../cvalidation/cvalidation.component';
import { cSpecs } from 'src/apiCalls/Cspecs.models';
import {patnerInput} from  "../../apiCalls/CPartnerInput.models";
import {cFieldValue} from  "../../apiCalls/CFieldValue.models";
import {storedata} from  "../../apiCalls/storedata.models";

import {Init,setValues, sendRequest} from "../../apiCalls/bflcontroller-Base";
import {IsNumber,IsAlphaNum,IsChar,check_min_max } from 'src/apiCalls/valid';
import { encrypt_decrypt } from 'src/apiCalls/encryption';
@Component({
  selector: 'app-bfl-page',
  templateUrl: './bfl-page.component.html',
  styleUrls: ['./bfl-page.component.css']
})
export class BflPageComponent implements OnInit {
  isSubmit: boolean = false;
  otpCompare: any =[]
  isValid: Boolean;
  status:Boolean = false;
  step = 0;
  allData = [];
  n = 'CARDNUMBER';
  param: any;
  selected2:any;
  val:any;
  errorMessage: any = 'blabla';

  errors: any = ['', null, undefined];

  // bflForm: FormGroup = this.fb.group({
  //   cardNumber: ['', { validators: [Validators.required], updateOn: "change" }],
  //   tagg: ['', { validators: [Validators.required]}],
  // });
    constructor(private httpClient: HttpClient,public fb: FormBuilder, private router: Router, public api: ApiServiceService) { 
  
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
  ngOnInit(): void {
  
  

    
  }
  register(){
    Init('InitiateOTP')
    let dict =[]
    dict.push({
      JsonTag: "CARDNUMBER",
      Value: this.otpForm.value.cardNumber
      },
      {
        JsonTag: "ORDERNO",
        value: this.otpForm.value.orderNumber
      },
      {
        JsonTag: "DEALERID",
        value: this.otpForm.value.dealerId

      },
      {
        JsonTag: "VALIDATIONKEY",
        value: this.otpForm.value.validationKey

      },
      {
        JsonTag: "REQUESTID",
        value: this.otpForm.value.requestId

      },
      {
        JsonTag: "REQUESTDATE1",
        value: this.otpForm.value.rqstOne

      },
      {
        JsonTag: "REQUESTDATE2",
        value: this.otpForm.value.rqstTwo

      },
      {
        JsonTag: "REQUESTTEXT1",
        value: this.otpForm.value.rqstTextOne

      },
      {
        JsonTag: "REQUESTTEXT2",
        value: this.otpForm.value.rqstTextTwo

      },
      {
        JsonTag: "Manufacturer",
        value: this.otpForm.value.manId

      },
      {
        JsonTag: "ASSETID",
        value: this.otpForm.value.assetId

      },
      {
        JsonTag: "LOANAMT",
        value: this.otpForm.value.loanAmount

      },
      {
        JsonTag: "TncACCEP",
        value: this.otpForm.value.tncAccept

      },
      {
        JsonTag: "OTPNO",
        value: this.otpForm.value.otpNo
      },
      {
        JsonTag: "ParamNameONCARD",
        value: this.otpForm.value.name

      },
      {
        JsonTag: "IPADDR",
        value: this.otpForm.value.ip

      },
      {
        JsonTag: "Tenure",
        value: this.otpForm.value.tenure

      },
      {
        JsonTag: "PIN",
        value: this.otpForm.value.pinCode

      },
      {
        JsonTag: "SALETYPE",
        value: this.otpForm.value.saleType

      },
      {
        JsonTag: "PRODDESC",
        value: this.otpForm.value.desc
      },
      {
        JsonTag: "SCHEMEID",
        value: this.otpForm.value.schemeId


      },
      {
        JsonTag: "MOBILENO",
        value: this.otpForm.value.mobile

      }
      );
    
    setValues(dict);
    sendRequest();
  }
  public errorHandling = (control: string, error: string) => {
    return this.otpForm.controls[control].hasError(error);
  }
  onReset() {
    this.isSubmit = false;
    this.otpForm.reset();
  }
  
 
}
