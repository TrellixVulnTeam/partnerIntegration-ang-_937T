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
    const message = 'failed';
    console.warn = (message) => {throw new Error(message)};
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
