import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Service } from './service';
import { CountryInfoComponent } from './country/country.component';
import { HistoryComponent } from './history/history.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {  MatButtonModule,  MatFormFieldModule,  MatInputModule,  MatRippleModule,  MatAutocompleteModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CountryInfoComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatTableModule,
    HttpModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
