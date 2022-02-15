import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ApiServiceService} from '../apiServices/api-service.service'
import { MaterialModule } from '../metrial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OtpComponent } from './otp.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
describe('OtpComponent', () => {
  let component: OtpComponent;
  let fixture: ComponentFixture<OtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule,BrowserAnimationsModule,CommonModule,AppRoutingModule,ReactiveFormsModule,HttpClientModule],
      declarations: [ OtpComponent ],
      providers: [ApiServiceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  it("Check component", ()=>{
    expect(component).toBeDefined();
  })
});
