import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home/home.component'
import { HomeService } from '../services/home.service'
import { AuthService } from '../services/auth.service'

import { google } from '@google/maps';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    HttpClientModule, 
  ],
  providers:[HomeService, AuthService]
})
export class HomeModule { }
