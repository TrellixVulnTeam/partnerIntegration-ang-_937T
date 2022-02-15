import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ApiServiceService} from '../apiServices/api-service.service'
import { MaterialModule } from '../metrial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CancellationComponent } from './cancellation.component';
import { AppRoutingModule } from '../app-routing.module';

describe('CancellationComponent', () => {
  let component: CancellationComponent;
  let fixture: ComponentFixture<CancellationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule,BrowserAnimationsModule,CommonModule,ReactiveFormsModule,AppRoutingModule,HttpClientModule],
      declarations: [ CancellationComponent ],
      providers: [ApiServiceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancellationComponent);
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
