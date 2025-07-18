import { Component, inject } from '@angular/core';
import { Formatge } from '../formatges/formatge.interface';
import { CommonModule } from '@angular/common';
import { FormatgeCard } from '../formatges/formatge-card';
import { formatgesList } from '../formatges/formatges.data';
@Component({
  selector: 'app-home',
  imports: [CommonModule, FormatgeCard],
  templateUrl: `./home.html`,
  styleUrl: './home.css',
})
export class Home {
    // formatgeListLS = localStorage.getItem('formatgesListLS');
    formatgeList: Formatge[] = formatgesList;
    filteredformatgeList: Formatge[] = this.formatgeList;
    // OnInit() {
    //   this.formatgeList = !localStorage.getItem('formatgesListLS') ? formatgesList : JSON.parse(localStorage.getItem('formatgesListLS')!);
    //   localStorage.setItem('formatgesListLS', JSON.stringify(this.formatgeList)); 
    // }

  constructor() {

  }

  filterResults(text: string) {
    if (!text) {
      this.formatgeList = this.formatgeList;
     return;
    }
    this.filteredformatgeList = this.formatgeList.filter((formatge) =>
      formatge?.nom.toLowerCase().includes(text.toLowerCase()),
    );}
}

