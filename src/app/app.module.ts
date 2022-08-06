import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmployeeListItemComponent } from './employee-list-item/employee-list-item.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { SortingListComponent } from './sorting-list/sorting-list.component';
import { EmployeeShowComponent } from './employee-show/employee-show.component';
import { ProgressbarComponent } from './helper/progressbar/progressbar.component';
import { NotificationComponent } from './helper/notification/notification.component';
import { StarsComponent } from './helper/stars/stars.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    EmployeeListComponent,
    EmployeeListItemComponent,
    EmployeeCreateComponent,
    SortingListComponent,
    EmployeeShowComponent,
    ProgressbarComponent,
    NotificationComponent,
    StarsComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
