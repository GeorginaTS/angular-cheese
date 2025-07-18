import { Component } from '@angular/core';
import { Formatge } from '../formatge.interface';
import {
  Form,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { formatgesList } from '../formatges.data';
import { FormatgeSelectLlet } from '../components/formatge-select-llet';

@Component({
  selector: 'app-formatge-add',
  imports: [RouterModule, ReactiveFormsModule, FormatgeSelectLlet],
  templateUrl: './formatge-add.html',
  styleUrl: '../formatges.css',
})
export class FormatgeAdd {
  formatge: Formatge = {
    id: '',
    nom: '',
    pais_procedencia: '',
    tipus_llet: '',
    tipus_fermentacio: '',
    temps_maduracio: '',
    descripcio: '',
  };
  tipus_lletSelected: string = '';
  formatgeForm: FormGroup;
  id: FormControl;
  nom: FormControl;
  pais_procedencia: FormControl;
  tipus_llet: FormControl;
  tipus_fermentacio: FormControl;
  temps_maduracio: FormControl;
  descripcio: FormControl;

  constructor(private router: Router) {
    this.id = new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]);
    this.nom = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(28)
    ]);
    this.pais_procedencia = new FormControl('', [
      Validators.required, Validators.minLength(3),
      Validators.maxLength(50)
    ]);
    this.tipus_llet = new FormControl('');
    this.tipus_fermentacio = new FormControl('');
    this.temps_maduracio = new FormControl('');
    this.descripcio = new FormControl('');

    this.formatgeForm = new FormGroup({
      id: this.id,
      nom: this.nom,
      pais_procedencia: this.pais_procedencia,
      tipus_llet: this.tipus_llet,
      tipus_fermentacio: this.tipus_fermentacio,
      temps_maduracio: this.temps_maduracio,
      descripcio: this.descripcio,
    });
  }
  tipusLletInput(valor: string) {
    this.tipus_lletSelected = valor;
    this.tipus_llet.setValue(this.tipus_lletSelected);
  }
  
  addFormatge() {
    console.log('-->' + this.formatgeForm.value);
    formatgesList.push(this.formatgeForm.value);
    window.localStorage.setItem('formatges', JSON.stringify(formatgesList));
    this.formatgeForm.reset();
    this.router.navigate(['/formatges/']);
  }
}
