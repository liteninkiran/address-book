import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

    public columnDefs = [
        { headerName: 'First Name', field: 'first_name' },
        { headerName: 'Middle Name', field: 'middle_name' },
        { headerName: 'Last Name', field: 'last_name' },
    ];
    public rowData: any;

    constructor(private http: HttpClient) {

    }

    ngOnInit(): void {
        this.rowData = this.http.get('/api/contacts/list');
    }

}
