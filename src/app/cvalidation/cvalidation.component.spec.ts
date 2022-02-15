import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ApiServiceService} from '../apiServices/api-service.service'
import { MaterialModule } from '../metrial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CvalidationComponent } from './cvalidation.component';
import { AppRoutingModule } from '../app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('CvalidationComponent', () => {
  let component: CvalidationComponent;
  let fixture: ComponentFixture<CvalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule,BrowserAnimationsModule,AppRoutingModule,CommonModule,HttpClientModule],
      declarations: [ CvalidationComponent ],
      providers: [ApiServiceService]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
