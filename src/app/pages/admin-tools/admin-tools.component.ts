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
    displayedColumns = ['name', 'perference', 'department', 'editLink'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    constructor(private usersService: UsersService) { }

    ngOnInit() {
        this.usersService.getAllUsers().subscribe((res) => {
            console.log(res);
        });
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
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
