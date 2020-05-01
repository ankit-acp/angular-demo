import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { IUsers, IUsersRes } from '../../models/IUsers';
import { UserService } from '../../services/user.service.ts.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserAddEditComponent } from '../user-add-edit/user-add-edit-container.component';

@Component({
    selector: 'user-container',
    templateUrl: './user-container.component.html',
})

export class UserContainerComponent implements AfterViewInit {
    users: IUsers[] = [];
    selectedCustomers: IUsers[];

    @ViewChild(UserAddEditComponent, { static: false }) userAddEditComponent: UserAddEditComponent;

    ngAfterViewInit() {
    }

    constructor(private _userService: UserService, private modalService: NgbModal) {
        _userService.getUsers().subscribe((data: IUsersRes) => {
            this.users = data.data;
        });
    }

    showModal(user: IUsers): void {
        this.userAddEditComponent.showModalDialog(user);
    }
}