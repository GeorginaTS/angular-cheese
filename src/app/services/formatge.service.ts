import { inject, Injectable } from '@angular/core';
import { Formatge } from '@/models/formatge.interface';
import { formatgesList } from '@/formatges/formatges.data';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FormatgeService {
  private url = 'http://localhost:3000/formatges';
  // private http = inject(HttpClient);
  constructor(private http: HttpClient) {}
  getFormatges(): Observable<Formatge[]>  {
    return this.http.get<Formatge[]>(this.url);
  }
  getFormatgesById(id: string): Observable<Formatge>  {
    return this.http.get<Formatge>(`${this.url}/${id}`);
  }
  addFormatge(formatge: Formatge): Observable<Formatge> {
    return this.http.post<Formatge>(this.url, formatge);
  }
  updateFormatge(id: string, formatge: Formatge): Observable<Formatge> {
    return this.http.put<Formatge>(`${this.url}/${id}`, formatge);
  }
  deleteFormatge(id: string): Observable<Formatge> {
    return this.http.delete<Formatge>(`${this.url}/${id}`);
  }
generarNouId(): Observable<string> {
  return this.getFormatges().pipe(
    map((formatges) => {
      const nums = formatges
        .map(f => {
          const match = f.id?.match(/^fmt(\d+)$/); // comprova si l'id comença amb 'fmt' seguit de números
          return match ? parseInt(match[1], 10) : NaN;
        })
        .filter(n => !isNaN(n)); // filtra només els vàlids

      const maxim = nums.length ? Math.max(...nums) : 0;
      const nouNum = maxim + 1;
      return 'fmt' + nouNum.toString().padStart(3, '0');
    })
  );
}
}

