import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { NotificationsService } from '../../services/notifications/notifications.service';
import { Notification } from '../../pages/notification/notification.model';
import { MessagingService, FirebaseNotification } from '../../messaging/messaging.service';
import { DepartmentService } from '../../services/departments/departments.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'message-stepper',
    templateUrl: './message-stepper.component.html',
    styleUrls: ['./message-stepper.component.scss']
})
export class MessageStepperComponent implements OnInit {
    sales = true;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    departments: any[] = [];
    selectedDepartments: any[] = [];
    notification: Notification;

    constructor(private _formBuilder: FormBuilder,
    private notificationsService: NotificationsService,
    private msgService: MessagingService,
    private departmentService: DepartmentService,
    private router: Router) {
        this.notification = {
            recipients: [],
            author: 'default',
            title: '',
            body: '',
            type: 'email'
        };
    }

    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
          firstCtrl: ['', Validators.required],
          secondCtrl: ['']
        });
        this.secondFormGroup = this._formBuilder.group({
        });
        this.departmentService.getDepartments().subscribe(depts => depts.forEach(dept => {
            this.departments.push({
                name: dept.name,
                selected: false
            });
        }));
    }

    gridClicked(selectedDepartment: string) {
        this.departments[this.departments.findIndex(department => department.name === selectedDepartment)].selected =
         !this.departments[this.departments.findIndex(department => department.name === selectedDepartment)].selected;
    }

    sendNotification() {
        this.departments.forEach(department => {
            if (department.selected) {
                this.selectedDepartments.push(department.name);
            }
        });
        this.notification.recipients = this.selectedDepartments;
        this.notification.title = this.firstFormGroup.controls['firstCtrl'].value;
        this.notification.body = this.firstFormGroup.controls['secondCtrl'].value;
        this.notification.author = localStorage.getItem('email');

        this.notificationsService.sendNotification(this.notification).subscribe(res => {
            console.log(res);
        });

        const firebase: FirebaseNotification = {
            notification: {
                title: this.notification.title,
                body: this.notification.body,
                click_action: 'http://reliaslearning.com/',
                icon: '../../../assets/lion2.png'
            },
            // tslint:disable-next-line:max-line-length
            to: 'drRXzBMboiY:APA91bHTtiTyUjetPANQB3WMJZDI1bzBxNFt0_sYAuZG_LmBsGMIufMsKVxKVakHTs15okaavGxWHlWhYoy0GA-EnTx4Bu-ncrXsswjaPqFMlgBdUWMXGhER8nLBQcj96kfaJpKmHv6U',
        };
        console.log(firebase);
        this.msgService.sendMessage(firebase).subscribe(res => {
            console.log(res);
        });

        this.router.navigate(['']);
    }
}
