import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { NotificationsService } from '../../services/notifications/notifications.service';
import { Notification } from '../notification/notification.model';
import { not } from '@angular/compiler/src/output/output_ast';
import { MessagingService, FirebaseNotification } from '../../messaging/messaging.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'notifications-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardPageComponent implements OnInit {
    notifications: Notification[] = [];
    displayedColumns = ['alerts', 'author', 'date', 'icon'];
    dataSource = new MatTableDataSource(this.notifications);

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
    constructor(
        private _notificationService: NotificationsService,
        private msgService: MessagingService,
    ) {
    }

    ngOnInit() {
        this._notificationService.getNotifications().subscribe(res => {
            res.forEach(notification => this.notifications.push({
                title: notification.title,
                body: notification.body,
                recipients: notification.recipients,
                author: notification.author,
                type: notification.type,
                created: notification.createdDate
            }));
            this.dataSource = new MatTableDataSource(this.notifications);
        });
    }

    sendClicked(event: any) {
        const notification: any = {
            title: event.title,
            body: event.body,
            recipients: event.recipients,
            author: event.author,
        };

        this._notificationService.sendNotification(notification).subscribe(res => {
            console.log(res);
        });

        const firebase: FirebaseNotification = {
            notification: {
                title: event.title,
                body: event.body,
                click_action: 'http://reliaslearning.com/',
                icon: 'https://r-notifications-website.azurewebsites.net/assets/lion2.png'
            },
            // tslint:disable-next-line:max-line-length
            to: 'cD0bVm1QX-8:APA91bEKyWOhkDVRXcbxlISZCi1LLLFWgvYXFoYZzfSclW0tdeyiVW9IS_dWv8FbeRvee0V-UyCSkZrltC7hR6v4pgWCIoL70D2PI9G_9tvTU5aXNERPrgVJGoEbAoeu9h2GPKGzQWJF',
        };
        this.msgService.sendMessage(firebase);
    }
}

export interface Element {
    name: string;
    position: string;
  }

const ELEMENT_DATA: Element[] = [
    {position: '1/3/2018', name: 'Sample Alert 1'},
    {position: '1/3/2018', name: 'Sample Alert 2'},
    {position: '1/3/2018', name: 'Sample Alert 3'},
    {position: '1/3/2018', name: 'Sample Alert 4'},
    {position: '1/3/2018', name: 'Sample Alert 5'},
    {position: '1/3/2018', name: 'Sample Alert 6'},
    {position: '1/3/2018', name: 'Sample Alert 7'},
    {position: '1/3/2018', name: 'Sample Alert 8'},
    {position: '1/3/2018', name: 'Sample Alert 9'},
];
