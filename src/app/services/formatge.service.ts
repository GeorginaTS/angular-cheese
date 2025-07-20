import { inject, Injectable } from '@angular/core';
import { Formatge } from '@/models/formatge.interface';
import { formatgesList } from '@/formatges/formatges.data';
import { Observable } from 'rxjs';
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

  generarNouId(): string {
    const formatges = formatgesList;

    if (!formatges.length) return 'fmt001';

    // Extreu el número de cada id
    const nums = formatges
      .map((f) => parseInt(f.id.replace('fmt', ''), 10))
      .filter((n) => !isNaN(n));

    const maxim = Math.max(...nums);
    const nouNum = maxim + 1;

    // Formata amb 3 dígits (zero padding)
    const nouId = 'fmt' + nouNum.toString().padStart(3, '0');

    return nouId;
  }

  saveFormatgesLS(formatges: Formatge[] | null): void {
    if (formatges === null) {
      throw new Error('formatges is null');
    }
    console.log(' Formatges.service saveFormatgesLS');
    //console.table(formatges);
    //window.localStorage.setItem('formatges', JSON.stringify(formatges)!);
  }
  getFormatgesLS(): Formatge[] {
    const formatges: Formatge[] = formatgesList;
    //  const formatgesLS: Formatge[] = JSON.parse(window.localStorage.getItem('formatges')!) || formatges;
    //   console.log(formatgesLS);
    return formatges;
  }


  // async getFormatges(): Promise<Formatge[]> {
  //   const response = await fetch(this.url); // Replace with your actual API endpoint
  //   if (!response.ok) {
  //     // Check if the request was successful
  //     throw new Error('Failed to fetch formatges');
  //   }
  //   const data = await response.json();
  //   return data as Formatge[];
  // }
  // async getFormatgeById(id: string): Promise<Formatge> {
  //   const response = await fetch(`${this.url}?id=${id}`); // Replace with your actual API endpoint
  //   if (!response.ok) {
  //     // Check if the request was successful
  //     throw new Error(`Failed to fetch formatge with id ${id}`);
  //   }
  //   const data = await response.json();
  //   return (data[0] as Formatge) ?? {};
  // }
}
