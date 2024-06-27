import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { HttpService } from '../../../services/http.service';
import {Sort, MatSortModule} from '@angular/material/sort';

@Component({
    selector: 'app-list',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatSortModule, MatButtonModule, RouterLink, MatTableModule, MatPaginatorModule, NgIf, MatCheckboxModule, MatTooltipModule],
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss'
})
export class ListSamComponent {

    private _unsubscribeAll: Subject<any>;
    groupData: any[] = [];

    displayedColumns: string[] = ['id', 'company', 'style_no', 'edit'];

    dataSource: MatTableDataSource<any>;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    // Search Filter
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    // isToggled
    isToggled = false;

    constructor(  private HttpService : HttpService) {

        this._unsubscribeAll = new Subject();

        this.HttpService.postData('masters/listSAMInput',{}).pipe(takeUntil(this._unsubscribeAll)).subscribe((res: any) => {
          this.groupData = res.result;
          this.dataSource = new MatTableDataSource(this.groupData);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
    }
}
