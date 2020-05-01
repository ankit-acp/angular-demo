import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserContainerComponent } from './user/components/user-list/user-container.component';

import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule } from 'primeng/dialog';

import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user/services/user.service.ts.service';
import { NgbModule, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { UserAddEditComponent } from './user/components/user-add-edit/user-add-edit-container.component';
import { ToastComponent } from './shared/toast/toast.container.component';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    UserAddEditComponent,
    ToastComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    PaginatorModule,
    NgbModule,
    DialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [UserService, NgbModalConfig, NgbModal, ToastComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
