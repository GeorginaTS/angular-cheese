import { Injectable } from '@angular/core';
import { Formatge } from './formatge.interface';
import { formatgesList } from './formatges.data';

@Injectable({
  providedIn: 'root',
})
export class FormatgeService {
  //url = 'http://localhost:3000/formatges';
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
    return formatges ;
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
