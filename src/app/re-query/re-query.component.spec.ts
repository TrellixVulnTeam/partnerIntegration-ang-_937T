import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ApiServiceService} from '../apiServices/api-service.service'
import { MaterialModule } from '../metrial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ReQueryComponent } from './re-query.component';
import { AppRoutingModule } from '../app-routing.module';

describe('ReQueryComponent', () => {
  let component: ReQueryComponent;
  let fixture: ComponentFixture<ReQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule,BrowserAnimationsModule,AppRoutingModule,CommonModule,ReactiveFormsModule,HttpClientModule],
      declarations: [ ReQueryComponent ],
      providers: [ApiServiceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReQueryComponent);
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
