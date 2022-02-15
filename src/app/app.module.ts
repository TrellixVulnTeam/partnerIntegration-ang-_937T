import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HomeComponent } from './home/home.component';

//import { HttpModule, RequestOptions } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { TabsComponent } from './tabs/tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HammerModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './metrial.module';
import { OtpComponent } from './otp/otp.component';
import { AuthComponent } from './auth/auth.component';
// import { FooterComponent } from './footer/footer.component';
// import { GenralComponent } from './genral/genral.component';
// import { GenrateOtpComponent } from './genrate-otp/genrate-otp.component';
// //import { SidebarComponent } from './sidebar/sidebar.component';
// import { HeaderComponent } from './header/header.component';
import { EmploymentIncomeComponent } from './employment-income/employment-income.component';
import { BflPageComponent } from './bfl-page/bfl-page.component';
import { CvalidationComponent } from './cvalidation/cvalidation.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { PodComponent } from './pod/pod.component';
import { EligibiltyComponent } from './eligibilty/eligibilty.component';
import { ReQueryComponent } from './re-query/re-query.component';

//import { CFieldValueComponent } from './cfield-value/cfield-value.component';
//import { DpDatePickerModule } from "ng2-date-picker";
//import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    OtpComponent,
    AuthComponent,
   
    EmploymentIncomeComponent,
    BflPageComponent,
    CvalidationComponent,
    CancellationComponent,
    PodComponent,
    EligibiltyComponent,
    ReQueryComponent,
   
   // HomeComponent,
    //TabsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    //DpDatePickerModule,
    HammerModule,
    NgbModule,
    HttpClientModule,
    //HttpModule,
    ReactiveFormsModule,
   // RouterModule.forRoot(routes, { useHash: true }),
    BrowserAnimationsModule,
   // CcommonComponent
  ],
  providers: [CvalidationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
