import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ApiServiceService} from '../apiServices/api-service.service'
import { MaterialModule } from '../metrial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PodComponent } from './pod.component';
import { AppRoutingModule } from '../app-routing.module';

describe('PodComponent', () => {
  let component: PodComponent;
  let fixture: ComponentFixture<PodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule,BrowserAnimationsModule,AppRoutingModule,CommonModule,ReactiveFormsModule,HttpClientModule],
      declarations: [ PodComponent ],
      providers: [ApiServiceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
