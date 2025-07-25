import { Component } from '@angular/core';
import { Formatge } from '@/models/formatge.interface';
import {
  Form,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { FormatgeSelectLlet } from '../components/formatge-select-llet';
import { FormatgeService } from '../../services/formatge.service';

@Component({
  selector: 'app-formatge-add',
  imports: [RouterModule, ReactiveFormsModule, FormatgeSelectLlet],
  templateUrl: './formatge-add.html',
  styleUrl: '../formatges.css',
})
export class FormatgeAdd {
  formatge: Formatge = {
    id: 'sense id',
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
  idFormatge: string = 'sense idformatge';
  nom: FormControl;
  pais_procedencia: FormControl;
  tipus_llet: FormControl;
  tipus_fermentacio: FormControl;
  temps_maduracio: FormControl;
  descripcio: FormControl;

  constructor(
    private router: Router,
    private formatgeService: FormatgeService
  ) {
    this.formatgeService.generarNouId().subscribe({
      next: (id) => {
        this.idFormatge = id;
        this.id.setValue(id);
        console.log('ID generat:', this.idFormatge);
      },
      error: (err) => {
        console.error('Error generant ID:', err);
      },
    });
    this.id = new FormControl(this.idFormatge.toString(), [
      Validators.required,
      Validators.minLength(3),
    ]);
    this.nom = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(28),
    ]);
    this.pais_procedencia = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
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
    try {
      this.formatgeService.addFormatge(this.formatgeForm.value).subscribe({
        next: (res) => console.log('Afegit:', res),
        error: (err) => console.error('Error afegint formatge:', err),
      });
      this.router.navigate(['/formatges/']);
    } catch (error) {
      console.log(error);
    }
  }
}
