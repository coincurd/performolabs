import { Component, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { NgFor } from '@angular/common';


import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-producion_config',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, NgFor, MatButtonModule, RouterLink, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule, FileUploadModule, MatRadioModule, MatCheckboxModule],
    templateUrl: './add.component.html',
    styleUrl: './add.component.scss'
})
export class AddProductionConfigComponent {

    private _unsubscribeAll: Subject<any>;

    deptSB: any = [];
    designationSB: any = [];


    productionConfigData: any = {};
    productionConfigSubmitted: boolean = false;

    @ViewChild('productionConfig', { read: NgForm }) productionConfig: NgForm;

    constructor(private _activatedRoute: ActivatedRoute,
        private HttpService: HttpService,
        private _router: Router
    ) {

        this._unsubscribeAll = new Subject();


        this.HttpService.postData('masters/DeptSB', {}).subscribe((response: any) => {
            this.deptSB = response.result;

            this.HttpService.postData('masters/DesignationSB', {}).subscribe((response: any) => {
                this.designationSB = response.result;

                this.HttpService.postData('masters/getMainConfig', {}).subscribe((response: any) => {
                    this.productionConfigData = response.result;
                });

            });
        });

    }

    save() {
        this.HttpService.postData('masters/saveMainConfig', this.productionConfigData).pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this._router.navigateByUrl('/production_config');
            this.productionConfigSubmitted = false;
        });

    }

}
