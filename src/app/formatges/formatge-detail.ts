import { Component, input, inject } from '@angular/core';
import { Formatge } from './formatge.interface';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { formatgesList } from './formatges.data';
import { FormatgeICOLlet } from './components/formatge-ico-llet'; 

@Component({
  selector: 'app-formatge-detail',
  imports: [RouterModule, FormatgeICOLlet],
  templateUrl: './formatge-detail.html',
  styleUrl: './formatges.css'
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

  constructor(private router: Router) {
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
  
  deleteFormatge(id: string) {
    console.log("delete formatge: "+id);
    const index = formatgesList.findIndex((formatge) => formatge.id === id);
    formatgesList.splice(index, 1);
    this.router.navigate(['/formatges/']);
  } 
}
