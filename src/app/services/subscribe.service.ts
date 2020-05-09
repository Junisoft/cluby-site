import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  idGroup = 'group[7198][1]';
  idUserMailChimp = 'u=b9375677e055dff34d0184af0&id=cdde1c9875';

  mailChimpEndpoint = `https://telus.us3.list-manage.com/subscribe/post-json?${this.idUserMailChimp}`;
  constructor(
    private http: HttpClient
  ) { }
  subscribeToList(data) {
    const params = new HttpParams()
      .set('FNAME', data.nombre)
      .set('LNAME', data.comentario)
      .set('EMAIL', data.correo)
      .set(this.idGroup, 'true')
      .set('b_b9375677e055dff34d0184af0_cdde1c9875', '');
    const mailChimpUrl = `${this.mailChimpEndpoint}&${params.toString()}`;
    return this.http.jsonp(mailChimpUrl, 'c');
  }
}
