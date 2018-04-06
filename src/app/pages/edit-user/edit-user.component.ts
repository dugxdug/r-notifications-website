import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { UsersService } from '../../services/users/users.service';
import { DepartmentService } from '../../services/departments/departments.service';
import { User } from '../../services/users/users.dto';
import { ActivatedRoute } from '@angular/router';


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
    private departmentService: DepartmentService,
    private route: ActivatedRoute) {
        this.user = new User();
    }

    ngOnInit() {
        this.departmentService.getDepartments().subscribe((res) => {
            res.forEach(item => {
                this.departments.push(item);
            });
        });

        let email;
        this.route.params.subscribe(params => email = params.email);
        this.usersService.GetUserByEmail(email).subscribe((res) => {
            this.selectedDepartment = res[0].departments[0];
            this.selectedPerference = res[0].notificationPref;
            this.selectedName = res[0].email;
            this.selectedEmail = res[0].name;
        });
    }

    backToList() {

    }

    updateUser() {
        this.user.departments.push(this.selectedDepartment);
        this.user.email = this.selectedName;
        this.user.name = this.selectedEmail;
        this.user.notificationPref = this.selectedPerference;

        this.usersService.updateUser(this.user).subscribe(res => {
            console.log(res);
        }, error => {
            console.log(error);
        });
    }
}
