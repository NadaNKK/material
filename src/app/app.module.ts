import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatRadioModule} from '@angular/material/radio';

import {MatTableModule} from '@angular/material/table';

import {CdkTableModule} from '@angular/cdk/table';

import {MatPaginatorModule} from '@angular/material/paginator';

import {MatSortModule} from '@angular/material/sort';

import {OnInit, ViewChild} from '@angular/core';

import {MatSort, MatTableDataSource} from '@angular/material';

import {Component} from '@angular/core';
import {Sort} from '@angular/material';

import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';


export class PaginatorOverviewExample {}


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserModule,
	HttpModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
