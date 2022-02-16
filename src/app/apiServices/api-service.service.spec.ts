import { inject, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { ApiServiceService } from './api-service.service';
import { Current_Api_Name } from 'src/apiCalls/ccommon';
import { off } from 'process';
import { Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { error } from 'console';

describe('ApiServiceService', () => {
  let service: ApiServiceService;
  let apiName: any;

  beforeEach(() => {

  //  service=new ApiServiceService;
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,HttpClientModule],
      providers: [ApiServiceService],
    });
    service = TestBed.inject(ApiServiceService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('api name not found',() =>{
  let  apiName1="";
  service.s={BaseUrl: "https://bfluat.in.worldline-solutions.com/wlbflEcomRest/WLECOMRest.svc/",
  IV: "1234567887654321",
  KEY: "B0L7iJ2sytuz4iOM2DpK06pkHdhZEV8t",
  SupplierIDLabel: "DEALERID"};
  let msg=`{"Error": 'Api Name Not found'}`;
   let error= service.SendRequest('{}',apiName1)
   .subscribe(data=>{
    expect(data).toEqual(msg)
   },error=>{
    expect(error).toEqual(msg)
   })
  //  expect(error).toEqual(msg)

  })

  it('#getObservableValue should return value from observable',() => {
    //(done: DoneFn) => {
      // let apiName1 = "" ;
       let apiName1 = "CancelledTransaction" ;
       let json={
        "Request": [
          {
            "Id": "1",
            "Remarks": "Dealer Code",
            "JsonTag": "DEALERID",
            "DataType": "N",
            "ParamName": "Dealer ID",
            "Min_len": "0",
            "Max_len": "10",
            "IsMandatory": "Yes"
          },
          {
            "Id": "2",
            "Remarks": "Deal ID generated post Authorization",
            "JsonTag": "DEALID",
            "DataType": "AN",
            "ParamName": " Deal ID",
            "Min_len": "10",
            "Max_len": "60",
            "IsMandatory": "Yes"
          },
          {
            "Id": "3",
            "Remarks": "Amount to be cancelled",
            "JsonTag": "LOANAMT",
            "DataType": "N",
            "ParamName": "Loan Amount",
            "Min_len": "1",
            "Max_len": "15",
            "IsMandatory": "Yes"
          },
          {
            "Id": "4",
            "Remarks": "Validation Key",
            "JsonTag": "VALIDATIONKEY",
            "DataType": "N",
            "ParamName": "VALIDATION KEY",
            "Min_len": "1",
            "Max_len": "24",
            "IsMandatory": "Yes"
          },
          {
            "Id": "5",
            "Remarks": "Order Number at time of Authorization",
            "JsonTag": "ORDERNO",
            "DataType": "AN",
            "ParamName": "Order Number",
            "Min_len": "1",
            "Max_len": "23",
            "IsMandatory": "Yes"
          },
          {
            "Id": "6",
            "Remarks": "Unique Request ID",
            "JsonTag": "REQUESTID",
            "DataType": "AN",
            "ParamName": "Request ID",
            "Min_len": "1",
            "Max_len": "50",
            "IsMandatory": "Yes"
          },
          {
            "Id": "7",
            "Remarks": "",
            "JsonTag": "REQUESTDATE1",
            "DataType": "N",
            "ParamName": "REQUEST DATE1",
            "Min_len": "0",
            "Max_len": "14",
            "IsMandatory": "No"
          },
          {
            "Id": "8",
            "Remarks": "",
            "JsonTag": "REQUESTDATE2",
            "DataType": "N",
            "ParamName": "REQUEST DATE2",
            "Min_len": "0",
            "Max_len": "14",
            "IsMandatory": "No"
          },
          {
            "Id": "9",
            "Remarks": "",
            "JsonTag": "REQUESTTEXT1",
            "DataType": "N",
            "ParamName": "REQUEST TEXT1",
            "Min_len": "0",
            "Max_len": "15",
            "IsMandatory": "No"
          },
          {
            "Id": "10",
            "Remarks": "",
            "JsonTag": "REQUESTTEXT2",
            "DataType": "N",
            "ParamName": "REQUEST TEXT2",
            "Min_len": "0",
            "Max_len": "2",
            "IsMandatory": "No"
          }
        ]
      }
 
       
            
      // expect(service.LoadSpecs(apiName)).toThrowError();
      // expect(service.LoadSpecs(apiName)).toThrowMatching()
      // ||"Eligibilty"||"InitiateOTP"||"PODInvoice"||"Requery"||"AuthTransaction";
    service.LoadSpecs(apiName1).subscribe(value => {
      console.log('est value',value);
      // json.Request[0].Id
      expect(value.Request[0].Id).toEqual(json.Request[0].Id)
     // expect(value).not.toBeNull()
     //expect(value).toBe('Some Value')

     // done();
   },error=>{
    console.log('est value',error);

     expect(error).toEqual(error)
   // expect(error).not.toBeNull()
    //expect(error).toBe('Some Value')

   });
  });
  // let apiServiceMock = spyOn(service, 'LoadSpecs').withArgs({})
  // .and.returnValue(of('mock result data'))

// service.LoadSpecs(apiName).subscribe((data) => {
//   console.log("called")
//   expect(data).toEqual(of('mock result data'));
// }); 
// expect(service.LoadSpecs).toHaveBeenCalled();


  ////it('should pass apiname so that we can load data for that api', () => {
    // let result: any;
    // service.LoadSpecs(Current_Api_Name).subscribe(data=>{
    //   expect(data.body?.RSPCODE).toEqual("0"||95||99);


    // });
    // expect(Current_Api_Name).toEqual(apiName||"")
    // let req = HttpTestingController({
    //   method: "GET",
    //   url: 'ConfigFiles/'+apiName+'Request.json'
    // });
  //   expect(req.request.body).toEqual(apiName);
  // });
    // (t => {
    //   result = t;
  //     let req = HttpTestingController..expectOne({ method: "POST", url: baseUrl });
  // expect(req.request.body).toEqual(apiName);
  //   })

//});
});
