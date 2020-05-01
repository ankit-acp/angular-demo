import { Component, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api/messageservice';
import { ToastrService } from 'ngx-toastr';


@Component({
    templateUrl: './toast-container.component.html',
    selector: 'toast-alert'
})


export class ToastComponent {
    constructor(private toastService: ToastrService) {

    }

    showSucces(message: string) {
        const options = { toastClass: 'ngx-toastr', preventDuplicates: false, positionClass: 'toast-top-right', newestOnTop: true, progressBar: true, closeButton: true };
        this.toastService.success(message, '', options);
    }

    showWarning(message: string) {
        const options = { toastClass: 'ngx-toastr', preventDuplicates: false, positionClass: 'toast-top-right', newestOnTop: true, progressBar: true, closeButton: true };
        this.toastService.warning(message, '', options);
    }

    showInformation(message: string) {
        const options = { toastClass: 'ngx-toastr', preventDuplicates: false, positionClass: 'toast-top-right', newestOnTop: true, progressBar: true, closeButton: true };
        this.toastService.info(message, '', options);
    }

    showError(message: string) {
        const options = { toastClass: 'ngx-toastr', preventDuplicates: false, positionClass: 'toast-top-right', newestOnTop: true, progressBar: true, closeButton: true };
        this.toastService.error(message, '', options);
    }


}