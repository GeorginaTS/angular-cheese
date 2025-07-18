import { Component, inject } from '@angular/core';
import { Formatge } from '../formatges/formatge.interface';
import { CommonModule } from '@angular/common';
import { FormatgeCard } from '../formatges/components/formatge-card/formatge-card';
import { formatgesList } from '../formatges/formatges.data';
import { FormatgeService } from '../formatges/formatge.service';
@Component({
  selector: 'app-home',
  imports: [CommonModule, FormatgeCard],
  templateUrl: `./home.html`,
  styleUrl: './home.css',
})
export class Home {
  formatgeList: Formatge[];
  filteredformatgeList: Formatge[];

  constructor(private formatgeService: FormatgeService) {
    //this.formatgeService.saveFormatgesLS(formatgesList);
    this.formatgeList = this.formatgeService.getFormatgesLS();
    this.filteredformatgeList = this.formatgeList;
  }
  filterResults(text: string): void {
    if (!text) {
      this.formatgeList = this.formatgeList;
      return;
    }
    this.filteredformatgeList = this.formatgeList.filter((formatge) =>
      formatge?.nom.toLowerCase().includes(text.toLowerCase())
    );
  }
}
