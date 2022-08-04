import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmployeeListItemComponent } from './employee-list-item/employee-list-item.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    EmployeeListComponent,
    EmployeeListItemComponent,
    EmployeeCreateComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
