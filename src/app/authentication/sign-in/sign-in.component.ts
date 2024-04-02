import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { AuthService} from '../../auth.service';
import { HttpService } from '../../services/http.service';

@Component({
    selector: 'app-sign-in',
    standalone: true,
    imports: [RouterLink, MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule, ReactiveFormsModule, NgIf],
    templateUrl: './sign-in.component.html',
    styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

    // isToggled
    isToggled = false;

    btnClicked = false;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        public themeService: CustomizerSettingsService,
        private HttpService: HttpService,
        private AuthService: AuthService,
    ) {
        this.authForm = this.fb.group({
            username: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(4)]],
        });
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // Password Hide
    hide = true;

    ngOnInit() {
        if(this.AuthService.LogAuthenticate()){
          this.router.navigate(['/zeel_dashboard']);
        }
    }

    // Form
    authForm: FormGroup;
    onSubmit() {
        this.btnClicked=true;
        if (this.authForm.valid) {
        this.HttpService.postData('auth/sign_in', this.authForm.value).subscribe((response : any) => {
            console.log(response);
            if(response.result)
            {
                if(response.result.is_logged)
                {
                    localStorage.setItem('is_logged',response.result.is_logged);
                    localStorage.setItem('session_user',JSON.stringify(response.result.user_info));
                    this.router.navigate(['/zeel_dashboard']);
                }
                else
                {
                    this.btnClicked=false;
                }
            }

            });
        }
        else
        {
            console.log('Form is invalid. Please check the fields.');
        }
    }

    // Dark Mode
    toggleTheme() {
        this.themeService.toggleTheme();
    }

    // Card Border
    toggleCardBorderTheme() {
        this.themeService.toggleCardBorderTheme();
    }

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}
