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
import { HttpService } from '../../services/http.service';
import { NgFor,NgForOf, NgIf, DatePipe } from '@angular/common';


import { Subject } from 'rxjs';

@Component({
    selector: 'app-cost_and_eff',
    standalone: true,
    providers : [ DatePipe,  ],
    imports: [MatCardModule, NgIf, MatMenuModule, NgFor,NgForOf, MatButtonModule, RouterLink, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule, FileUploadModule, MatRadioModule, MatCheckboxModule],
    templateUrl: './add.component.html',
    styleUrl: './add.component.scss'
})
export class CostAndEffreportComponent {

    private _unsubscribeAll: Subject<any>;

    Styles: any = [];
    CompanySB: any = [];

    dpr_report_data : any = [];


    FilterData: any = {
        cmp_id: '1',
        date: this.DatePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss'),
    };
    csConfigSubmitted: boolean = false;

    @ViewChild('csConfig', { read: NgForm }) csConfig: NgForm;

    constructor(private _activatedRoute: ActivatedRoute,
        private HttpService: HttpService,
        private _router: Router,
        public DatePipe  : DatePipe
    ) {

        this._unsubscribeAll = new Subject();

        this.HttpService.postData('masters/CompanySB', {}).subscribe((response: any) => {
            this.CompanySB = response.result;
        });

        this.getData();
        this.getStyles();


    }

    getStyles()
    {
        this.HttpService.postData('masters/StylesSB/' + this.FilterData.cmp_id, {}).subscribe((response: any) => {
            this.Styles = response.result;
        });
    }

    getData() {
        this.FilterData.date = this.DatePipe.transform(this.FilterData.date, 'yyyy-MM-dd');
        this.HttpService.postData('reports/getSewCostEffreport', this.FilterData).subscribe(response => {
            this.dpr_report_data = response.result;
        });
    }

}
