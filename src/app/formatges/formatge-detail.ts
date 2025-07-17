import { Component, input, inject } from '@angular/core';
import { Formatge } from './formatge.interface';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { formatgesList } from './formatges.data';


@Component({
  selector: 'app-formatge-detail',
  imports: [RouterModule],
  templateUrl: './formatge-detail.html',
  styles: `
  .formatge-card { 
    padding: 1rem; 
    background-color:var(--bg-card-color); 
    width: 100%;
    border-radius: 1rem;
    height: 100%;
    box-sizing: border-box;
    } `,
})
export class FormatgeDetail {
  route: ActivatedRoute = inject(ActivatedRoute);
  formatge: Formatge ={id: '', nom: '', pais_procedencia: '', tipus_llet: '', tipus_fermentacio: '', temps_maduracio: '', descripcio: ''};
  
  
  constructor() {
    const id: string = this.route.snapshot.params["id"]
    this.formatge = this.formatgeById(id)
  }
  formatgeById(id: string): Formatge {
    this.formatge = formatgesList.find(formatge => formatge.id === id) ?? {id: '', nom: '', pais_procedencia: '', tipus_llet: '', tipus_fermentacio: '', temps_maduracio: '', descripcio: ''};
    return this.formatge
  }
}