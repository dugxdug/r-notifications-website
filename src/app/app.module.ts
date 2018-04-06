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
import { AdminToolsPageComponent } from './pages/admin-tools/admin-tools.component';
import { EditUserPageComponent } from './pages/edit-user/edit-user.component';

import { NavbarComponent } from './components/nav-bar/nav-bar.component';
import { MessageStepperComponent } from './components/message-stepper/message-stepper.component';
import { AuthComponent } from './auth/auth.component';

import { AuthService } from './auth/auth.service';
import { NotificationsService } from './services/notifications/notifications.service';
import { UsersService } from './services/users/users.service';
import { DepartmentService } from './services/departments/departments.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthGuard } from './shared/auth.guard';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { MessagingService } from './messaging/messaging.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    NotificationPageComponent,
    MainPageComponent,
    NavbarComponent,
    MessageStepperComponent,
    AuthComponent,
    AdminToolsPageComponent,
    EditUserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [BrowserAnimationsModule],
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    AuthService,
    NotificationsService,
    UsersService,
    DepartmentService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthService,
    NotificationsService,
    UsersService,
    AuthGuard,
    MessagingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
