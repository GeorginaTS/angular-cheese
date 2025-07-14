import { Component, inject } from '@angular/core';
import { Formatge } from '../formatges/formatge.interface';
import { FormatgeService } from '../formatges/formatge.service';
import { CommonModule } from '@angular/common';
import { FormatgeCard } from '../formatges/formatge-card';
@Component({
  selector: 'app-home',
  imports: [CommonModule, FormatgeCard],
  template: `<h1>Formatges</h1>
  <section class="home-list"> 
    @defer (when formatgeList.length > 0){
      @for(formatge of formatgeList; track formatge.id) {<article class="formatge-card"><h3>{{formatge.nom}}</h3><p>{{formatge.pais_procedencia}}</p></article>}
        <!-- <app-formatge-card  *ngFor="let formatge of formatgeList" [formatge]="formatge"></app-formatge-card>  -->
    }
  </section>`,
  styleUrl: './home.css',
})
export class Home {
  formatgeList: Formatge[] = [];
  formatgeService: FormatgeService = inject(FormatgeService);
  constructor() {
    this.formatgeService
      .getFormatges()
      .then((formatges: Formatge[]) => {
        this.formatgeList = formatges;
        console.log('Formatges fetched successfully:', this.formatgeList);
      })
      .catch((error: Error) => {
        console.error('Error fetching formatges:', error);
      });
  }
  onInit() {
    this.formatgeService
      .getFormatges()
      .then((formatges: Formatge[]) => {
        this.formatgeList = formatges;
        console.log('Formatges fetched successfully:', this.formatgeList);
      })
      .catch((error: Error) => {
        console.error('Error fetching formatges:', error);
      });
  }
}
