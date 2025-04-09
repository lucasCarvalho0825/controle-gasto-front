import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GastoService {
  private apiUrl = 'http://localhost:8080/novo-gasto'; // URL do backend

  constructor(private http: HttpClient) {}

  salvar(gasto: any): Observable<any> {




    return this.http.post(this.apiUrl, gasto);
  }
}
