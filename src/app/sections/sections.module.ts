import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./footer/footer.component";
import {RouterModule} from "@angular/router";
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { BenefitsComponent } from './benefits/benefits.component';
import {MaterialModule} from "../modules/material.module";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    HeroComponent,
    BenefitsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    MatCardModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    HeroComponent,
    BenefitsComponent
  ]
})
export class SectionsModule { }
