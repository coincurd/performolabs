import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-sam',
    standalone: true,
    imports: [RouterLink, RouterOutlet],
    templateUrl: './sam.component.html',
    styleUrl: './sam.component.scss'
})
export class SamInputComponent {}
