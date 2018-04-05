import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material.module';

import { DashboardPageComponent } from './pages/dashboard/dashboard.component';
import { NotificationPageComponent } from './pages/notification/notification.component';
import { MainPageComponent } from './pages/main/main.component';

import { NavbarComponent } from './components/nav-bar/nav-bar.component';
import { MessageStepperComponent } from './components/message-stepper/message-stepper.component';
import { AuthComponent } from './auth/auth.component';

import { AuthService } from './auth/auth.service';
<<<<<<< HEAD
import { NotificationsService } from './services/notifications/notifications.service';
=======
import { AuthInterceptor } from './auth/auth.interceptor';
>>>>>>> 526a8a65d2620a843f0405bf9f9b943d3bf9ba4d

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    NotificationPageComponent,
    MainPageComponent,
    NavbarComponent,
    MessageStepperComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [BrowserAnimationsModule],
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
<<<<<<< HEAD
    AuthService,
    NotificationsService
=======
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthService
>>>>>>> 526a8a65d2620a843f0405bf9f9b943d3bf9ba4d
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
