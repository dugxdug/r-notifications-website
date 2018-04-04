import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import { DashboardPageComponent } from './pages/dashboard/dashboard.component';
import { NotificationPageComponent } from './pages/notification/notification.component';
import { MainPageComponent } from './pages/main/main.component';

import { NavbarComponent } from './components/nav-bar/nav-bar.component';
import { WelcomeMessageComponent } from './components/welcome-message/welcome-message.component';
import { MessageStepperComponent } from './components/message-stepper/message-stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    NotificationPageComponent,
    MainPageComponent,
    NavbarComponent,
    WelcomeMessageComponent,
    MessageStepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [BrowserAnimationsModule],
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
