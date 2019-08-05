import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, /* other http imports */ } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule, MatNativeDateModule, MatInputModule, MatButtonModule } from '@angular/material';
import { HeroInformationComponent } from './hero-information/hero-information.component';
import { HeroInformationService } from './hero-information/hero-information.service';
import { DatePipe } from "@angular/common";
import {HeroInformationResolveService} from './hero-information/hero-information-resolver.service';
@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    HeroListComponent,
    HeroInformationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  providers: [DatePipe, HeroInformationService, HeroInformationResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
