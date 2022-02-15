import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ApiServiceService} from '../apiServices/api-service.service'
import { MaterialModule } from '../metrial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EmploymentIncomeComponent } from './employment-income.component';
import { AppRoutingModule } from '../app-routing.module';

describe('EmploymentIncomeComponent', () => {
  let component: EmploymentIncomeComponent;
  let fixture: ComponentFixture<EmploymentIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule,BrowserAnimationsModule,AppRoutingModule,CommonModule,ReactiveFormsModule,HttpClientModule],
      declarations: [ EmploymentIncomeComponent ],
      providers: [ApiServiceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
