import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';

const appRoutes: Routes = [
    {
        path: 'contacts',
        component: ContactsComponent,
    }

]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule { }
