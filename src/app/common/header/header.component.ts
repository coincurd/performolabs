import { NgClass } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { ToggleService } from '../sidebar/toggle.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { HttpService } from '../../services/http.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [NgClass, MatMenuModule,NgIf, MatButtonModule, RouterLink, RouterLinkActive, MatCardModule, MatProgressBarModule,MatProgressSpinnerModule ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

    // isSidebarToggled
    isSidebarToggled = false;

    // isToggled
    isToggled = false;
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ProgressBarService} _ProgressBarService
     */

    constructor(
        private toggleService: ToggleService,
        public themeService: CustomizerSettingsService,
        private HttpService : HttpService,
        private router: Router
    ) {
        this.toggleService.isSidebarToggled$.subscribe(isSidebarToggled => {
            this.isSidebarToggled = isSidebarToggled;
        });
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // Burger Menu Toggle
    toggle() {
        this.toggleService.toggle();
    }

    visible : boolean = false;

    ngOnInit(): void
    {

    }


    // Header Sticky
    isSticky: boolean = false;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }

    // Dark Mode
    toggleTheme() {
        this.themeService.toggleTheme();
    }

    // Sidebar Dark
    toggleSidebarTheme() {
        this.themeService.toggleSidebarTheme();
    }

    // Right Sidebar
    toggleRightSidebarTheme() {
        this.themeService.toggleRightSidebarTheme();
    }

    // Hide Sidebar
    toggleHideSidebarTheme() {
        this.themeService.toggleHideSidebarTheme();
    }

    // Header Dark Mode
    toggleHeaderTheme() {
        this.themeService.toggleHeaderTheme();
    }

    // Card Border
    toggleCardBorderTheme() {
        this.themeService.toggleCardBorderTheme();
    }

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }



  DoLogout()
  {
    this.HttpService.postData('auth/sign_out',{}).subscribe((response : any) => {
        if(!response.is_logged)
            {
                this.router.navigate(['/authentication/logout']);
                localStorage.clear();
            }
    });
  }

}
