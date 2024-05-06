import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-config',
    standalone: true,
    imports: [RouterLink, RouterOutlet],
    templateUrl: './config.component.html',
    styleUrl: './config.component.scss'
})
export class ProjectConfigComponent {}
