import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationsService } from '../../services/notifications/notifications.service';

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
    notification: {
        recipients: any[],
        author: string;
        title: string;
        body: string;
        type: string;
    };

    constructor(private _formBuilder: FormBuilder,
    private notificationsService: NotificationsService) {
        this.notification = {
            recipients: [],
            author: 'default',
            title: '',
            body: '',
            type: 'email'
        };
        this.departments.push({
            name: 'Engineering',
            selected: false
        });
        this.departments.push({
            name: 'Sales',
            selected: false
        });
        this.departments.push({
            name: 'Marketing Research',
            selected: false
        });
        this.departments.push({
            name: 'Project Management',
            selected: false
        });
        this.departments.push({
            name: 'Human Resources',
            selected: false
        });
        this.departments.push({
            name: 'Content',
            selected: false
        });
        this.departments.push({
            name: 'Implementations',
            selected: false
        });
        this.departments.push({
            name: 'Finance',
            selected: false
        });
    }

    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
          firstCtrl: ['', Validators.required],
          secondCtrl: ['']
        });
        this.secondFormGroup = this._formBuilder.group({
        });
    }

    gridClicked(selectedDepartment: string) {
        this.departments[this.departments.findIndex(department => department.name === selectedDepartment)].selected =
         !this.departments[this.departments.findIndex(department => department.name === selectedDepartment)].selected;
    }

    sendNotification() {
        this.departments.forEach(department => {
            if (department.selected) {
                this.selectedDepartments.push(department);
            }
        });
        this.notification.recipients = this.selectedDepartments;
        this.notification.title = this.firstFormGroup.controls['firstCtrl'].value;
        this.notification.body = this.firstFormGroup.controls['secondCtrl'].value;

        this.notificationsService.sendNotification(this.notification).subscribe(res => {
            console.log(res);
        });
    }
}
