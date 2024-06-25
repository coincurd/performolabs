import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-reports',
    standalone: true,
    imports: [RouterLink, RouterOutlet],
    templateUrl: './zeel_reports.component.html',
    styleUrl: './zeel_reports.component.scss'
})
export class ReportComponent {}
