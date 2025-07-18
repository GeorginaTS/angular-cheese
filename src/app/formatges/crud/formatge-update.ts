import { Component, input, inject } from '@angular/core';
import { Formatge } from '../formatge.interface';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { formatgesList } from '../formatges.data';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formatge-update',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './formatge-update.html',
  styleUrl: '../formatges.css',
})
export class FormatgeUpdate {
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
  formatgeForm: FormGroup;
  nom: FormControl;
  pais_procedencia: FormControl;
  tipus_llet: FormControl;
  tipus_fermentacio: FormControl;
  temps_maduracio: FormControl;
  descripcio: FormControl;

  constructor(private router: Router) {
    const id: string = this.route.snapshot.params['id'];
    this.formatge = this.formatgeById(id);
    
    this.nom = new FormControl(this.formatge.nom);
    this.pais_procedencia = new FormControl(this.formatge.pais_procedencia);
    this.tipus_llet = new FormControl(this.formatge.tipus_llet);
    this.tipus_fermentacio = new FormControl(this.formatge.tipus_fermentacio);
    this.temps_maduracio = new FormControl(this.formatge.temps_maduracio);
    this.descripcio = new FormControl(this.formatge.descripcio);

    this.formatgeForm = new FormGroup({
      nom: this.nom,
      pais_procedencia: this.pais_procedencia,
      tipus_llet: this.tipus_llet,
      tipus_fermentacio: this.tipus_fermentacio,
      temps_maduracio: this.temps_maduracio,
      descripcio: this.descripcio
    });

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
  updateFormatge(id: string):Formatge {
    const index = formatgesList.findIndex((formatge) => formatge.id === id);
    formatgesList[index] = this.formatgeForm.value;
    console.log(formatgesList[index].nom+" -->updated");
    this.router.navigate(['/formatges/']);
    return formatgesList[index];
  }
}
