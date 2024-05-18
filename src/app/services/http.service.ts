import { Injectable } from '@angular/core';
import { Subject,ReplaySubject,BehaviorSubject,Observable,Subscribable,Subscription} from 'rxjs';
import { environment } from '../environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';
import {
  HttpClient,
  HttpHeaders,
  HttpEventType,
  HttpEvent
} from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private httpClient: HttpClient,private _snackBar: MatSnackBar,
    private router: Router) { }

  postData(
    post_url: String,
    post_data: any,

  ):  Observable<any> {

    let url = environment.apiUrl;

    const httpPostOptions = {
      headers: new HttpHeaders(),
      withCredentials: true,
      reportProgress: true,
      observe: 'events'
    };

    let postHeader : {} = httpPostOptions;
    let postingUrl = url + '/' + post_url.toString();

    let d = new FormData();

    for (let key in post_data) {
      d.append(key, post_data[key]);
    }


    return new Observable(observer => {
      this.httpClient.post<any>(postingUrl , d, postHeader).subscribe(e => {
        if(e.body)
        {

            observer.next(e.body);
            observer.complete();

            if (e.body.toast == 'true' && e.body.msg !== '')
            {
              this.openSnackBar(e.body.msg,'ok');
            }
            else if(e.body.result === '' && !e.body.result.is_logged)
            {
                localStorage.clear();
                this.router.navigate(['/authentication/logout']);
                observer.complete();
            }

        }
      });
    })
  }

  durationInSeconds : number = 2;

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
        duration: this.durationInSeconds * 1000,
      });
  }

  getData(

    get_url: String,

  ){
    const httpGetOptions = {
        headers: new HttpHeaders(),
        withCredentials: true
      };

    let gettingUrl = environment.apiUrl +'/'+ get_url.toString();

    return new Observable(observer => {
      this.httpClient.get<any>(gettingUrl).subscribe(e => {

        if(e.body)
        {
            if (e.body.toast == 'true' && e.body.msg !== '')
            {
                alert(e.body.msg);
            }

            observer.next(e.body);
            observer.complete();
        }
      });
    })
  }



}

