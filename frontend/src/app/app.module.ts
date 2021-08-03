import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        ContactsComponent,
        NavbarComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AgGridModule.withComponents([]),
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
