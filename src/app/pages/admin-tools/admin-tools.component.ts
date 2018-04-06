import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { UsersService } from '../../services/users/users.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'admin-tools',
    templateUrl: './admin-tools.component.html',
    styleUrls: ['./admin-tools.component.scss']
})

export class AdminToolsPageComponent implements OnInit {
    displayedColumns = ['name', 'email', 'notificationPref', 'departments'];
    USER_LIST: Array<User> = [];
    dataSource: MatTableDataSource<User>;
    constructor(private usersService: UsersService) {}

    ngOnInit() {
        this.usersService.getAllUsers().subscribe((res) => {
            res.forEach(item => {
                this.USER_LIST.push(item);
            });
            this.dataSource = new MatTableDataSource(this.USER_LIST);
        });
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    rowClicked(userInfo: any) {
        console.log(userInfo);
    }
}


export interface User {
    name: string;
    notificationPref: string;
    email: string;
    departments: any[];
}
