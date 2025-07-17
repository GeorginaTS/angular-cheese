import { Component, input, inject } from '@angular/core';
import { Formatge } from './formatge.interface';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { formatgesList } from './formatges.data';

@Component({
  selector: 'app-formatge-detail',
  imports: [RouterModule],
  templateUrl: './formatge-detail.html',
  styles: `
  .formatge-detail { 
    padding: 1rem; 
    background-color:var(--bg-card-color); 
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    min-width: 50%;
    border-radius: 1rem;
    } `,
})
export class FormatgeDetail {
  route: ActivatedRoute = inject(ActivatedRoute);
  formatge: Formatge = {
    id: '',
    nom: '',
    pais_procedencia: '',
    tipus_llet: '',
    tipus_fermentacio: '',
    temps_maduracio: '',
    descripcio: '',
  };

  constructor() {
    const id: string = this.route.snapshot.params['id'];
    this.formatge = this.formatgeById(id);
  }
  formatgeById(id: string): Formatge {
    this.formatge = formatgesList.find((formatge) => formatge.id === id) ?? {
      id: '',
      nom: 'Not found Formatge',
      pais_procedencia: '',
      tipus_llet: '',
      tipus_fermentacio: '',
      temps_maduracio: '',
      descripcio: '',
    };
    return this.formatge;
  }
}
