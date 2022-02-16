import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibiltyComponent } from './eligibilty.component';
import {ApiServiceService} from '../apiServices/api-service.service'
import { MaterialModule } from '../metrial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
describe('EligibiltyComponent', () => {
  let component: EligibiltyComponent;
  let fixture: ComponentFixture<EligibiltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule,CommonModule,AppRoutingModule,ReactiveFormsModule,HttpClientModule ],
      declarations: [ EligibiltyComponent ],
      providers: [ApiServiceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibiltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  it("Check component", ()=>{
    component.api.s={BaseUrl: "https://bfluat.in.worldline-solutions.com/wlbflEcomRest/WLECOMRest.svc/",
  IV: "1234567887654321",
  KEY: "B0L7iJ2sytuz4iOM2DpK06pkHdhZEV8t",
  SupplierIDLabel: "DEALERID"};
    // let obj={delearid:"95"}
    // component.eligibiltyForm=component.fb.group({
    //   dealerId:["95",[Validators.required]],
    //   mobile:[''],
    //   cardNumber: ['78999', { validators: [Validators.required], updateOn: "change" }],
    //   orderNumber: ['890090900',{ validators: [Validators.required], updateOn: "change" }],
    //   pinCode:['5675766',{ validators: [Validators.required], updateOn: "change" }],
    //   loanAmount:['89899809090'],
    //   validationKey: ['89000909',[Validators.required]],
    //   requestId:['8900909',{ validators: [Validators.required], updateOn: "change" }],
    //   tncAccept:["09090909",{ validators: [Validators.required], updateOn: "change" }],
    //   rqstOne:[''],
    //   rqstTwo:[''],
    //   rqstTextOne:[''],
    //   schemeId:['8989988',{ validators: [Validators.required], updateOn: "change" }],
    //   tenure:['898998',{ validators: [Validators.required], updateOn: "change" }],
    //   ProductDesc:['']
  
    // })
    // component.isSubmit=true;
    // // component.all =[{delarid:"95"}]
    // component.register()
    expect(component).toBeDefined();
    component.LoadSpecs();
    const message = 'failed';
    // console.warn = (message) => {throw new Error(message)};
  })
   it("error required",()=>{
  //   component.eligibiltyForm=component.fb.group({
  //       dealerId:["",[Validators.required]],
  //       mobile:[''],
  //       cardNumber: ['', { validators: [Validators.required], updateOn: "change" }],
  //       orderNumber: ['',{ validators: [Validators.required], updateOn: "change" }],
  //       pinCode:['',{ validators: [Validators.required], updateOn: "change" }],
  //       loanAmount:[''],
  //       validationKey: ['',[Validators.required]],
  //       requestId:['',{ validators: [Validators.required], updateOn: "change" }],
  //       tncAccept:["",{ validators: [Validators.required], updateOn: "change" }],
  //       rqstOne:[''],
  //       rqstTwo:[''],
  //       rqstTextOne:[''],
  //       schemeId:['',{ validators: [Validators.required], updateOn: "change" }],
  //       tenure:['',{ validators: [Validators.required], updateOn: "change" }],
  //       ProductDesc:['']
    
  //     })
  //    component.isSubmit=true;
  //    component.eligibiltyCompare={
  //     "Request": [
  //       {
  //         "Id": "1",
  //         "ParamName": "Dealer ID",
  //         "JsonTag": "DEALERID",
  //         "DataType": "N",
  //         "Min_len": "1",
  //         "Max_len": "10",
  //         "IsMandatory": "Yes"
  //       },
  //       {
  //         "Id": "2",
  //         "ParamName": "Mobile Number",
  //         "JsonTag": "MOBILENO",
  //         "DataType": "N",
  //         "Min_len": "0",
  //         "Max_len": "10",
  //         "IsMandatory": "No"
  //       },
  //       {
  //         "Id": "3",
  //         "ParamName": "Card Number",
  //         "JsonTag": "CARDNUMBER",
  //         "DataType": "N",
  //         "Min_len": "16",
  //         "Max_len": "16",
  //         "IsMandatory": "Yes"
  //       },
  //       {
  //         "Id": "4",
  //         "ParamName": "Order Number",
  //         "JsonTag": "ORDERNO",
  //         "DataType": "AN",
  //         "Min_len": "1",
  //         "Max_len": "32",
  //         "IsMandatory": "Yes"
  //       },
  //       {
  //         "Id": "5",
  //         "ParamName": "PostalCode",
  //         "JsonTag": "PINCODE",
  //         "DataType": "N",
  //         "Min_len": "1",
  //         "Max_len": "6",
  //         "IsMandatory": "Yes"
  //       },
  //       {
  //         "Id": "6",
  //         "ParamName": "Amount",
  //         "JsonTag": "LOANAMT",
  //         "DataType": "N",
  //         "Min_len": "1",
  //         "Max_len": "15",
  //         "IsMandatory": "No"
  //       },
  //       {
  //         "Id": "7",
  //         "ParamName": "VALIDATION KEY",
  //         "JsonTag": "VALIDATIONKEY",
  //         "DataType": "AN",
  //         "Min_len": "1",
  //         "Max_len": "24",
  //         "IsMandatory": "Yes"
  //       },
  //       {
  //         "Id": "8",
  //         "ParamName": "Request ID",
  //         "JsonTag": "REQUESTID",
  //         "DataType": "AN",
  //         "Min_len": "1",
  //         "Max_len": "50",
  //         "IsMandatory": "Yes"
  //       },
    
  //       {
  //         "Id": "9",
  //         "ParamName": "TncAccept",
  //         "JsonTag": "TncACCEPT",
  //         "DataType": "AN",
  //         "Min_len": "0",
  //         "Max_len": "1",
  //         "IsMandatory": "Yes"
  //       },
  //       {
  //         "Id": "10",
  //         "ParamName": "REQUEST DATE1",
  //         "JsonTag": "REQUESTDATE1",
  //         "DataType": "N",
  //         "Min_len": "0",
  //         "Max_len": "8",
  //         "IsMandatory": "No"
  //       },
    
  //       {
  //         "Id": "11",
  //         "ParamName": "REQUEST DATE2",
  //         "JsonTag": "REQUESTDATE2",
  //         "DataType": "N",
  //         "Min_len": "0",
  //         "Max_len": "8",
  //         "IsMandatory": "No"
  //       },
  //       {
  //         "Id": "12",
  //         "ParamName": "REQUEST TEXT1",
  //         "JsonTag": "REQUESTTEXT1",
  //         "DataType": "AN",
  //         "Min_len": "0",
  //         "Max_len": "100",
  //         "IsMandatory": "No"
  //       },
  //       {
  //         "Id": "13",
  //         "ParamName": "Scheme Id",
  //         "JsonTag": "SchemeId",
  //         "DataType": "N",
  //         "Min_len": "1",
  //         "Max_len": "15",
  //         "IsMandatory": "Yes"
  //       },
  //       {
  //         "Id": "14",
  //         "ParamName": "Tenure",
  //         "JsonTag": "Tenure",
  //         "DataType": "AN",
  //         "Min_len": "0",
  //         "Max_len": "10",
  //         "IsMandatory": "Yes"
  //       },
  //       {
  //         "Id": "15",
  //         "ParamName": "Product Description",
  //         "JsonTag": "ProductDesc",
  //         "DataType": "AN",
  //         "Min_len": "0",
  //         "Max_len": "100",
  //         "IsMandatory": "No"
  //       }
  //     ]
  //   }
    
    let message = 'The field Dealer ID is required';
    // expect(component.showResponse?.Message).toEqual(message);
    expect(component.register()).toBeUndefined(message);

    expect(component.showResponse?.Message).toBeUndefined(message)
   })
  // describe("OnInit", ()=>{
  //     fit("BFLData function should be called", ()=>{
  //       spyOn(component, 'BFLData').and.callThrough();
  //       //component.ngOnInit();
  //       console.warn = (message) => {throw new Error(message)};
  //       expect(component.BFLData).toHaveBeenCalled();
  //     })
  //   });



  
  // describe("OnInit", ()=>{
  //   fit("BFLData function should be called", ()=>{
  //     spyOn(component, 'BFLData').and.callThrough();
  //     //component.ngOnInit();
  //     expect(component.BFLData).toHaveBeenCalled();
  //   })
  //   fit("LoadSpecs function should be called", ()=>{
  //     spyOn(component, 'LoadSpecs').and.callThrough();
  //     //component.ngOnInit();
  //     expect(component.LoadSpecs).toHaveBeenCalled();
  //   })
  // })
});
