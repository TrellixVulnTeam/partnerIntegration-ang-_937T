import { patnerInput } from "./CPartnerInput.models";
import { CBFLConfigData } from "./CBFLConfigData.models";
import { cSpecs } from "./Cspecs.models";
import { Request} from "./CSpecsMaster";
import { ApiServiceService } from '../app/apiServices/api-service.service';
import * as myJson from '../../src/ConfigFiles/BFLAppConfig.json';
//ConfigFiles/BFLAppConig.json';
import * as data from '../../src/ConfigFiles/InitiateOTPRequest.json';
import { OnInit } from "@angular/core";
import { Injectable } from '@angular/core';
//let data: patnerInput[] ;
export let setdata: patnerInput[];
//let setdata = new patnerInput[];
//export let test;
export let  CBFLConfig: CBFLConfigData
export let Current_Api_Name: String;
export let supplierId: String;
export let sealValue: String;
export let  Current_Api_Url: String;
export let currentPath: String;
export let cspecsData: cSpecs[];
// @Injectable({
//     providedIn: 'root'
//   })
// export class Test {
   
//     constructor(public api: ApiServiceService){}
    
// m_test(): String{
//     let a = 'i am called for testing';
//     console.log(a);
//     return a;
//    // console.log('LOAD SPEC DATA',data);
// }

//  LoadSpec(){
//     this.api.LoadSpecs("InitiateOTP").then((data) => {
//         let cspecmaster: Request = data
//         cspecsData= Request;
//         console.log('data for this request', cspecsData)
//     })
       
//      //let cspecmaster: Request = this.http.get('ConfigFiles/'+Current_Api_Name+'Request.json').toPromise()
//     // cspecsData= Request;
//     // return this.http.get('ConfigFiles/'+Current_Api_Name+'Request.json').toPromise().then((data) =>{
 
//    //  })
//  }
// }
const StringBuilder = require("string-builder");
let arr = ['',null,undefined];

export function setValueHelper (){

}
export function Set_ValueHelper(jsonTag: String, setval: String)
        {
            let PI: patnerInput;
            PI.JSON_TAG = jsonTag;
            PI.value = setval;
            if(setdata.find(m => m.JSON_TAG === PI.JSON_TAG)) {//Add only latest value for matching
             setdata.find(m => m.JSON_TAG == PI.JSON_TAG)// please test update belong to jsontag
                setdata.forEach((m => m.value = PI.value)) 
              //return setdata;
            }
        else {
            setdata.push(PI);
            //return setdata;
           }
           
    }

export function LoadSpec(){
   // ApiServiceService.LoadSpecs().then((data) => {
       // let cspecmaster: Request = data
       // cspecsData= Request;
        console.log('LOAD SPEC DATA',data);
    //let cspecmaster: Request = this.http.get('ConfigFiles/'+Current_Api_Name+'Request.json').toPromise()
   // cspecsData= Request;
   // return this.http.get('ConfigFiles/'+Current_Api_Name+'Request.json').toPromise().then((data) =>{

  //  })
}

export function GetSpecs() {
if(cspecsData === null){
    LoadSpec();
}
return cspecsData
}

export function LoadBFLConfigData() {
    //const data  = this.http.get("assets/BFLAppConig.json").toPromise()
     
    return myJson;
}

export function GetRequestBody()
{
    const requestBuild = new StringBuilder();
    let requestBody: String;

    setdata.forEach(element => { 
        if (element.value===''||element.value===null)
                {
                       requestBuild.Append("\"" + element.JSON_TAG + "\":null,");
                  }
else {
requestBuild.Append("\"" + element.JSON_TAG + "\":\"" + element.value + "\",");
}
    });
requestBuild.Remove(requestBuild.Length - 1, 1);//the last comma in tha requestBuild
requestBody = "{" + requestBuild.ToString() + "}";
return requestBody;

}

export function ApiRequest(encrypt: string){
   // this.BFLDATA();

   this.api.SendRequest(encrypt,Current_Api_Url,Current_Api_Name).subscribe((data) => {
               
        console.log(data);
      });
}
