 
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map,catchError, retry } from 'rxjs/operators';
import {BASE_URL, GETOTP} from "../../apiCalls/api";
import { cSpecs} from "../../apiCalls/Cspecs.models";
import { Data } from '@angular/router';
import { CBFLConfigData} from "../../apiCalls/CBFLConfigData.models"
import {encrypt_decrypt} from "../../apiCalls/encryption"
 
import { LoadBFLConfigData} from "../../apiCalls/ccommon"
import { Injectable } from '@angular/core';
import { responseDto } from 'src/apiCalls/response.dto';
//import {NgbToast} from '@ng-bootstrap/ng-bootstrap';
//let s = LoadBFLConfigData();

const headers= new HttpHeaders();
  
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  loading: any;
  toasts: any[] = [];
  BASE_URL: any;
  OTP_API: any;
  SupplierId:any;
  s: any;
  response = new responseDto();
  encrypted = new encrypt_decrypt();

//console.log('our base', BASE_URL);
  constructor(private http: HttpClient
		//public loadingController: LoadingController,
    ) { 
      this.http.get("./ConfigFiles/BFLAppConfig.json" ).subscribe(res=> {
        this.s= res;
    headers.set('content-type', 'application/json')
 // .set('Access-Control-Allow-Origin', '*')
  headers.set('sealValue','8641237ce1f3daf26d819f8500441204')
  headers.set('supplierID',this.s.SupplierIDLabel);
      })
     
  }

  // a() {
  //   return myJson;
  // }
  registerUser(data:any): Observable<any>{
     
     return this.http.get(`${BASE_URL}${GETOTP}`).pipe(map((responseData) => {
			return responseData;
		})
     )
  }
  
  public LoadSpecs(apiName): Observable<any> {
      // synchronous operation
     return this.http.get('ConfigFiles/'+apiName+'Request.json').pipe(map((responseData) => {
        console.log('load Specs data',responseData);
        return responseData;
       }),
        catchError(this.handleError)
       );
       //return httpResponse;
        
       }
  
 BFLDATA():Observable <any> {
  
   const data = this.http.get("ConfigFiles/BFLApppConfig.json").pipe(map((response) => {
    console.log('bfl',response);
    return response;
   }),
    catchError(this.handleError)
   );
   return data;
    
   }
    //console.log('bfl---', data[0].BFLConfig[0]);

    
    // this.BASE_URL = data[0].BFLConfig[0].BasrUrl;
     //this.SupplierId = data[0].BFLCnfig[0].SupplierIDLabel;
    //this.OTP_API = data[0].BFLConfig[0].ENDPOINT;
    
SendRequest(encrypt,apiName):Observable <any>{
  let sealvalue = this.encrypted.hashenc(encrypt.toString())

  let header = new HttpHeaders({

    'Content-Type': 'application/json',

    'SealValue': `${sealvalue}`,

    'SupplierID': '95'

    // "95"
  })
  if(apiName === ''|| apiName === null ||apiName ===undefined){
    const message :any = `{"Error": 'Api Name Not found'}`
   return message;
  }
  if(this.s.BaseUrl === ''|| this.s.BaseUrl === null || this.s.BaseUrl === undefined){
   const responseData:any = `{"Error": 'Base Url Not Found'}`
      return responseData;
  }
  //try {
    else {
    const httpResponse = this.http.post(`${this.s.BaseUrl}${apiName}`,`"${encrypt}"`, { headers: header }).pipe(map((responseData) => {
 this.response.Init(responseData);
 responseData = {...this.response}
  return responseData;
}),
catchError(this.handleError)
);
return httpResponse;
    }
 // }
  //return;
 // finally
}
//return httpResponse
  // catch(error){
  //   throw error;
  //   //console.log('error occoures:', error);
  //   //return error;
  // }
//}
// getStudents():Observable <any> {
//   return this.http.get<any>(this.url).pipe(catchError(this.handleError))
// }

handleError(error) {
  let message = '';
  if(error  === 'apiNameNotFound'){
    message = `{"Error": Please provide API name}`;
  }
  if (error.error instanceof ErrorEvent) {
    // handle client-side errors
    message = `{"Error": ${error.error.message}}`;
} else {
    // handle server-side errors
    message = `{"Error Code": ${error.status},"Message": ${error.message}}`;
    //message = `{"Error Code": ${error.status}}`
    (error.status == 404)?
      message = `{"Error Code": ${error.status},"Message": File Not Found}`:''
     // return throwError(message);
    
}
console.log(message);
return throwError(JSON.parse(JSON.stringify(message)));
  //return throwError("Server Error") 
}
  
 


  
	

}
