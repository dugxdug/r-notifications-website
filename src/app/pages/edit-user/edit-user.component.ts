import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { UsersService } from '../../services/users/users.service';
import { DepartmentService } from '../../services/departments/departments.service';
import { User } from '../../services/users/users.dto';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.scss']
})

export class EditUserPageComponent implements OnInit {
    selectedDepartment: string;
    selectedPerference: string;
    selectedName: string;
    selectedEmail: string;
    user: User;

    departments: Array<string> = [];
    constructor(private usersService: UsersService,
    private departmentService: DepartmentService) {
        this.user = new User();
    }

    ngOnInit() {
        this.departmentService.getDepartments().subscribe((res) => {
            res.forEach(item => {
                this.departments.push(item);
            });
        });

        this.usersService.GetUserByEmail('dcoble@relias.com').subscribe((res) => {
            this.selectedDepartment = res.departments[0];
            this.selectedPerference = res.notificationPref;
            this.selectedName = res.email;
            this.selectedEmail = res.name;
        });
    }

    backToList() {

    }

    updateUser() {
        console.log(this.selectedName);
        this.user.departments.push(this.selectedDepartment);
        this.user.email = this.selectedName;
        this.user.name = this.selectedEmail;
        this.user.notificationPref = this.selectedPerference;

        this.usersService.updateUser(this.user);
    }
}
