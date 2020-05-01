import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service.ts.service';
import { ICreateUserRes, ICreateUser, IUsers } from '../../models/IUsers';
import { ToastComponent } from 'src/app/shared/toast/toast.container.component';

@Component({
    selector: 'user-add-edit',
    templateUrl: './user-add-edit-container.component.html',
    styles: [`
        :host ::ng-deep .ui-button {
            margin: .5em .5em .5em 0;
            width: 140px;
        }
        @media screen and (max-width: 40em) {
            :host ::ng-deep .ui-dialog {
                width: 75vw !important;
            }
        }
    `]
})


export class UserAddEditComponent {
    displayModal: boolean = false;
    registerForm: FormGroup;

    get f() { return this.registerForm.controls; }

    constructor(private _formBuilder: FormBuilder, private _userService: UserService, private _toastService: ToastComponent) {
        this.createForm();
    }

    private createForm() {
        this.registerForm = this._formBuilder.group({
            Name: ['', [Validators.required]],
            Salary: ['', [Validators.required]],
            Age: [''],
            Id: [''],
        });
    }

    showModalDialog(user: IUsers) {
        
        if (user != null) {
            this.f.Age.setValue(user.employee_age);
            this.f.Salary.setValue(user.employee_salary);
            this.f.Name.setValue(user.employee_name);
            this.f.Id.setValue(user.id);
        }
        this.displayModal = true;
    }

    hideModalDialog(): void {
        this.displayModal = false;
    }

    registerUser(): void {
        if (this.registerForm.invalid) {
            this.markFormControllsAsDirty();
            return;
        }

        let user: ICreateUser = {
            age: this.f.Age.value,
            salary: this.f.Salary.value,
            name: this.f.Name.value,
            id: this.f.Id.value
        };
        

        if (user.id > 0) {
            this._userService.updateUser(user, user.id).subscribe((data: ICreateUserRes) => {
                
                if (data.status == "success") {
                    this._toastService.showSucces('User details updated successfully.');
                    this.hideModalDialog();

                }
                let res = data.data;
            });
        }
        else {

            this._userService.createUser(user).subscribe((data: ICreateUserRes) => {
                
                if (data.status == "success") {
                    this._toastService.showSucces('User created successfully.');
                    this.hideModalDialog();
                }
                let res = data.data;
            });
        }

    }

    private markFormControllsAsDirty() {

        this.registerForm.controls.Name.markAsDirty();
        this.registerForm.controls.Age.markAsDirty();
        this.registerForm.controls.Salary.markAsDirty();
    }

}