import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-config',
    standalone: true,
    imports: [RouterLink, RouterOutlet],
    templateUrl: './production_config.component.html',
    styleUrl: './production_config.component.scss'
})
export class ProdcutionConfigComponent {}
