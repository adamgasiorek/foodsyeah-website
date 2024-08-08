import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandpageComponent} from "./pages/landpage/landpage.component";
import {TermsComponent} from "./pages/terms/terms.component";
import {PrivacyComponent} from "./pages/privacy/privacy.component";

const routes: Routes = [
  {
    path: '',
    component: LandpageComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: 'terms/privacy',
    component: PrivacyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
