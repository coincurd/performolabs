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
    selector: 'app-users',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule, FileUploadModule, MatRadioModule, MatCheckboxModule],
    templateUrl: './add.component.html',
    styleUrl: './add.component.scss'
})
export class AddUsersComponent {

    private _unsubscribeAll: Subject<any>;


    UsersFormData : any = {};
    UsersFormSubmitted : boolean = false;

    @ViewChild('UsersForm', { read: NgForm }) UsersForm: NgForm;

    constructor( private _activatedRoute: ActivatedRoute,
        private HttpService: HttpService,
        private _router: Router,) {

        this._unsubscribeAll = new Subject();


        this._activatedRoute.queryParamMap.pipe(takeUntil(this._unsubscribeAll)).subscribe(params => {
          if (params.has('id')) {
            // this.UsersFormData.style_id = params.get('style_id');
            // this.UsersFormData.cmp_id = params.get('cmp_id');
            this.HttpService.postData('masters/getUsers/' + params.get('id'),{}).subscribe((response : any) => {
              this.UsersFormData = response.result;
            });

          }
        });

    }


  save() {
    this.HttpService.postData('masters/addUsers', this.UsersFormData).pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
        this._router.navigateByUrl('/users/list');
      this.UsersFormSubmitted = false;
    });

  }

}
