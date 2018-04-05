import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'notifications-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardPageComponent implements OnInit {
    displayedColumns = ['alerts', 'date'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
    constructor() { }

    ngOnInit() {

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
