import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {  MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';
import { HttpService } from '../../services/http.service';
import { MatNativeDateModule } from '@angular/material/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule , } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgFor, DatePipe } from '@angular/common';

@Component({
    selector: 'app-proddates-list',
    standalone: true,
    providers : [ DatePipe ],
    imports: [MatCardModule, FormsModule, NgFor,MatDatepickerModule, MatNativeDateModule,MatFormFieldModule,MatInputModule, MatSelectModule,MatMenuModule, MatButtonModule, RouterLink, MatTableModule, MatPaginatorModule, NgIf, MatCheckboxModule, MatTooltipModule],
    templateUrl: './proddates.component.html',
    styleUrl: './proddates.component.scss'
})
export class datesListComponent {

    private _unsubscribeAll: Subject<any>;

    filterFormData: any = {
        cmp_id : '1',
        to_date: this.DatePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss'),
        from_date: this.DatePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      };

    companies: any = [];

    BtnTriggered : boolean = false;

    paginatorData: any = {
    itemPageIndex: 0,
    itemPageSize: 10,
    itemPageLength: 0,
    sortingActive: 'prod_date',
    sortingDirection: 'desc',
    };

    data: any = [];

    displayedColumns: string[] = [];
    dataSource:  MatTableDataSource<any>;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;


    constructor( private HttpService : HttpService,
        private DatePipe  : DatePipe) {
        this._unsubscribeAll = new Subject();

        this.HttpService.postData('masters/CompanySB', {}).subscribe((response: any) => {
            this.companies = response.result;
        });

      this.getInformation(this.filterFormData, false, false);

      this.displayedColumns = ['company_name', 'prod_date', 'cacl1','cacl2', 'calculated'];

    }

    itemPageEvent: PageEvent;

    getInformation(d : any, e: any = false, sorting: any = false, search: any = ''): PageEvent {

        let from_date = this.DatePipe.transform(d.from_date, 'yyyy-MM-dd');
        let to_date = this.DatePipe.transform(d.to_date, 'yyyy-MM-dd');

        d.pageIndex = e.pageIndex !== undefined ? e.pageIndex : this.paginatorData.itemPageIndex;
        d.pageSize = e.pageSize !== undefined ? e.pageSize : this.paginatorData.itemPageSize;
        d.from_date = from_date !== undefined ? from_date : '';
        d.to_date = to_date !== undefined ? to_date : '';
        d.cmp_id = d.cmp_id !== undefined ? d.cmp_id : '';
        d.sorting_col = sorting.active && sorting !== false ? sorting.active : this.paginatorData.sortingActive;
        d.sorting_type = sorting.direction && sorting !== false ? sorting.direction : this.paginatorData.sortingDirection;

        this.HttpService.postData('masters/ListProDates', d).subscribe((response : any) => {
          this.data = response.result.data;
          this.dataSource = new MatTableDataSource(this.data);
          this.paginatorData.itemPageIndex = response.result.pageIndex;
          this.paginatorData.itemPageSize = response.result.pageSize;
          this.paginatorData.itemPageLength = response.result.length;

          console.log(this.data);
        });
        return e;
      }


      UpdateServeData(date : any) {
        this.BtnTriggered = true;
         this.HttpService.postData('masters/UpdateProductionServerData/' + date,{}).pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
          this.BtnTriggered = false;
        });

      }

      updateFabUtlz() {
        this.BtnTriggered = true;
         this.HttpService.postData('masters/updateFabUtlz',{}).pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
          this.BtnTriggered = false;
        });
      }

      UpdateHrServerData(date : any) {
        this.BtnTriggered = true;
         this.HttpService.postData('masters/UpdateHrServerData/' + date,{}).pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
          this.BtnTriggered = false;
        });

      }

      CalcDate(cmp_id : any,prod_date : any)
      {
        this.BtnTriggered = true;

        this.HttpService.postData('masters/Calculate/' + cmp_id + '/' + prod_date,{}).pipe(takeUntil(this._unsubscribeAll)).subscribe(res => {
          // this.getInformation(this.filterFormData);
          this.BtnTriggered = false;
        });
      }






}
