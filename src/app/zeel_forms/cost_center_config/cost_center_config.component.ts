import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-config',
    standalone: true,
    imports: [RouterLink, RouterOutlet],
    templateUrl: './cost_center_config.component.html',
    styleUrl: './cost_center_config.component.scss'
})
export class CsConfigComponent {}
