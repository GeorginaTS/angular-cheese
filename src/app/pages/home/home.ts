import { Component, inject } from '@angular/core';
import { Formatge } from '../../models/formatge.interface';
import { AsyncPipe } from '@angular/common';
import { FormatgeCard } from '../../formatges/components/formatge-card/formatge-card';
import { FormatgeService } from '../../services/formatge.service';
import { map, Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  imports: [FormatgeCard, AsyncPipe],
  templateUrl: `./home.html`,
  styleUrl: './home.css',
})
export class Home {
  formatgeList$: Observable<Formatge[]>;
  filteredformatgeList$: Observable<Formatge[]>;

  constructor(private formatgeService: FormatgeService) {
    this.formatgeList$ = this.formatgeService.getFormatges();
    this.filteredformatgeList$ = this.formatgeList$;
  }
  filterResults(text: string): void {
    if (!text) {
      this.filteredformatgeList$ = this.formatgeList$;
      return;
    }

    this.filteredformatgeList$ = this.formatgeList$.pipe(
      map((formatges) =>
        formatges.filter((formatge) =>
          formatge.nom.toLowerCase().includes(text.toLowerCase())
        )
      )
    );
  }
}
