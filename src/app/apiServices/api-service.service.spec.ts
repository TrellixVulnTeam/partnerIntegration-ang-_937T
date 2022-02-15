import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { ApiServiceService } from './api-service.service';
import { Current_Api_Name } from 'src/apiCalls/ccommon';
import { off } from 'process';
import { Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

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
  it('#getObservableValue should return value from observable',() => {
    //(done: DoneFn) => {
      let apiName:any = "CancelledTransaction" ;
      // ||"Eligibilty"||"InitiateOTP"||"PODInvoice"||"Requery"||"AuthTransaction";
    service.LoadSpecs(apiName).subscribe(value => {
      console.log('est value',value);
      expect(value).toBeDefined()
     // expect(value).not.toBeNull()
     //expect(value).toBe('Some Value')

     // done();
   },error=>{
     expect(error).toBeDefined()
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
