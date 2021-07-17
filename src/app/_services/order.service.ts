import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = `${environment.backendURL}/finish-order`
  constructor(private http: HttpClient) { }

  /**
   * Finalize Subscription order and send
   * data to backend server.
   *
   * @param body
   */
  finalizeSubscriptionOrder(body: any):Observable<HttpResponse<any>> {
    return this.http.post(this.url,body, {observe: 'response'});
  }
}
