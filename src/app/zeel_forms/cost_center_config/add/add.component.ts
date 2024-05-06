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
import { NgFor, NgIf } from '@angular/common';


import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-cs_config',
    standalone: true,
    imports: [MatCardModule, NgIf, MatMenuModule, NgFor, MatButtonModule, RouterLink, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule, FileUploadModule, MatRadioModule, MatCheckboxModule],
    templateUrl: './add.component.html',
    styleUrl: './add.component.scss'
})
export class AddCsConfigComponent {

    private _unsubscribeAll: Subject<any>;

    deptSB: any = [];
    CompanySB: any = [];


    csConfigData: any = {};
    csConfigSubmitted: boolean = false;

    @ViewChild('csConfig', { read: NgForm }) csConfig: NgForm;

    constructor(private _activatedRoute: ActivatedRoute,
        private HttpService: HttpService,
        private _router: Router
    ) {

        this._unsubscribeAll = new Subject();

        this.HttpService.postData('masters/CompanySB', {}).subscribe((response: any) => {
            this.CompanySB = response.result;
        });

    }

    getData() {
        this.HttpService.postData('masters/getCostCenters/' + this.csConfigData.cmp_id, {}).subscribe(response => {
            this.csConfigData.cost_center_list = response.result;
        });
    }

    save() {

        let d: any = {
            value: JSON.stringify(this.csConfigData)
        };

        this.HttpService.postData('masters/addCostCenter', d).pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this._router.navigateByUrl('/cs_config');
            this.csConfigSubmitted = false;
        });

    }

    trackByFn(index: any, item: any) {
        return index;
    }

}
