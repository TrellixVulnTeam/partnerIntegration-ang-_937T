import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HomeComponent } from './home/home.component';
import { OtpComponent } from './otp/otp.component';
import { AuthComponent } from './auth/auth.component';
// import { FooterComponent } from './footer/footer.component';
// import { GenralComponent } from './genral/genral.component';
// //import { TabsComponent } from './tabs/tabs.component';
// import { GenrateOtpComponent } from './genrate-otp/genrate-otp.component';
//import {SidebarComponent} from './sidebar/sidebar.component';
import { EmploymentIncomeComponent } from './employment-income/employment-income.component';
import { BflPageComponent } from './bfl-page/bfl-page.component';
//import { CcommonComponent } from './ccommon/ccommon.component';
import { CvalidationComponent } from './cvalidation/cvalidation.component';
import { EligibiltyComponent } from './eligibilty/eligibilty.component';
import { ReQueryComponent } from './re-query/re-query.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { PodComponent } from './pod/pod.component';
const routes: Routes = [
  { path: 'otp', component: OtpComponent },
  { path: 'otp', redirectTo: '/otp', pathMatch: 'full' },
  { path: 'eligibilty', redirectTo: '/eligibilty', pathMatch: 'full' },
  { path: 're-query', redirectTo: '/re-query', pathMatch: 'full' },
  { path: 'cancellation', redirectTo: '/cancellation', pathMatch: 'full' },
  { path: 'pod', redirectTo: '/pod', pathMatch: 'full' },
  { path: 'eligibilty', component: EligibiltyComponent },
  { path: 're-query', component: ReQueryComponent },
  { path: 'cancellation', component: CancellationComponent },
  { path: 'pod', component: PodComponent },
  { path: 'auth', component: AuthComponent },
  // { path: 'footer', component: FooterComponent },
  // { path: 'genral', component: GenralComponent },
  // {path:'genrate-otp',component: GenrateOtpComponent},
  {path:'employment',component:EmploymentIncomeComponent},
  {path: 'bfl-page',component:BflPageComponent},
  {path: 'cvalidation', component: CvalidationComponent}
  //{ path: 'otp', redirectTo: '/otp', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
