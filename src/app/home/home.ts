import { Component, inject } from '@angular/core';
import { Formatge } from '../formatges/formatge.interface';
import { FormatgeService } from '../formatges/formatge.service';
import { CommonModule } from '@angular/common';
import { FormatgeCard } from '../formatges/formatge-card';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  imports: [CommonModule, FormatgeCard],
  template: `<h1>Formatges</h1>
  <section class="home-list"> 
    @for (formatge of formatgeList$ | async; track formatge.id) {
      <app-formatge-card [formatge]="formatge"></app-formatge-card>
    }
  </section>`,
  styleUrl: './home.css',
})
export class Home {
  formatgeList$: Observable<Formatge[]>;
  formatgeService = inject(FormatgeService);

  constructor() {
    this.formatgeList$ = this.formatgeService.getFormatges();
  }
}
