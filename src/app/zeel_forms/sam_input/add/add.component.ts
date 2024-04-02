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


import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule, FileUploadModule, MatRadioModule, MatCheckboxModule],
    templateUrl: './add.component.html',
    styleUrl: './add.component.scss'
})
export class AddSamComponent {

    private _unsubscribeAll: Subject<any>;

    SAMInputFormData : any = {};
    SAMInputFormSubmitted : boolean = false;

    @ViewChild('SAMInputForm', { read: NgForm }) SAMInputForm: NgForm;

    constructor( private _activatedRoute: ActivatedRoute,
        private HttpService: HttpService,
        private _router: Router,) {

        this._unsubscribeAll = new Subject();

        this._activatedRoute.queryParamMap.pipe(takeUntil(this._unsubscribeAll)).subscribe(params => {
          if (params.has('style_id') && params.has('cmp_id')) {
            this.SAMInputFormData.style_id = params.get('style_id');
            this.SAMInputFormData.cmp_id = params.get('cmp_id');
            this.HttpService.getData('masters/getSAMInput/' + params.get('cmp_id') + '/' + params.get('style_id')).subscribe((response : any) => {
              this.SAMInputFormData = response.result;
            });

          }
        });

    }


  save() {
    this.HttpService.postData('masters/addSAMInput', this.SAMInputFormData).pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
        this._router.navigateByUrl('/sam/list');
      this.SAMInputFormSubmitted = false;
    });

  }

}
