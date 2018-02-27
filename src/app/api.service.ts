import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ApiService {

  url_api = 'https://patrimonio-api.herokuapp.com/item';

  constructor(
    private http: Http
  ) { }

  listar(){
    return this.http.get(this.url_api);
  }

  adicionar(item: any) {
    return this.http.post(this.url_api,item);
  }

}
