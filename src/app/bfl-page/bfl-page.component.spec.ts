import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ApiServiceService} from '../apiServices/api-service.service'
import { MaterialModule } from '../metrial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BflPageComponent } from './bfl-page.component';
import { AppRoutingModule } from '../app-routing.module';

describe('BflPageComponent', () => {
  let component: BflPageComponent;
  let fixture: ComponentFixture<BflPageComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule,BrowserAnimationsModule,CommonModule,ReactiveFormsModule,HttpClientModule,AppRoutingModule],
      declarations: [ BflPageComponent ],
      providers: [ApiServiceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BflPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
