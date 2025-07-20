import { Component, input, inject } from '@angular/core';
import { Formatge } from '@/models/formatge.interface';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormatgeService } from '@/services/formatge.service';
import { FormatgeSelectLlet } from '@/formatges/components/formatge-select-llet';
import { Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-formatge-update',
  imports: [RouterModule, ReactiveFormsModule, FormatgeSelectLlet],
  templateUrl: './formatge-update.html',
  styleUrl: '../formatges.css',
})
export class FormatgeUpdate {
  route: ActivatedRoute = inject(ActivatedRoute);
  formatge$: Observable<Formatge> = of({} as Formatge);
  tipus_lletSelected: string = '';
  formatgeForm: FormGroup;
  nom: FormControl;
  pais_procedencia: FormControl;
  tipus_llet: FormControl;
  tipus_fermentacio: FormControl;
  temps_maduracio: FormControl;
  descripcio: FormControl;
  id: FormControl;

  constructor(
    private router: Router,
    private formatgeService: FormatgeService
  ) {
    const idQuery: string = this.route.snapshot.params['id'];
    this.formatge$ = this.formatgeService.getFormatgesById(idQuery);

    // Initialize empty controls first
    this.id = new FormControl('');
    this.nom = new FormControl('');
    this.pais_procedencia = new FormControl('');
    this.tipus_llet = new FormControl('');
    this.tipus_lletSelected = '';
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

    // Subscribe to the observable to populate the form when data arrives
    this.formatge$.subscribe((formatge: Formatge) => {
      if (formatge) {
        this.id.setValue(formatge.id);
        this.nom.setValue(formatge.nom);
        this.pais_procedencia.setValue(formatge.pais_procedencia);
        this.tipus_llet.setValue(formatge.tipus_llet);
        this.tipus_lletSelected = formatge.tipus_llet;
        this.tipus_fermentacio.setValue(formatge.tipus_fermentacio);
        this.temps_maduracio.setValue(formatge.temps_maduracio);
        this.descripcio.setValue(formatge.descripcio);
      }
    });
  }
  ngOnInit(): void {
    this.formatge$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = params.get('id');
        if (id) {
          return this.formatgeService.getFormatgesById(id);
        } else {
          this.router.navigate(['/formatges']);
          return of({} as Formatge); // observable buit però tipat
        }
      })
    );
  }

  tipusLletInput(valor: string) {
    this.tipus_lletSelected = valor;
    this.tipus_llet.setValue(this.tipus_lletSelected);
  }

  updateFormatge() {
    try {
      this.formatgeService
        .updateFormatge(this.formatgeForm.value.id, this.formatgeForm.value)
        .subscribe({
          next: (res) => console.log('Actualitzat:', res),
          error: (err) => console.error('Error actualitzant formatge:', err),
        });
    } catch (error) {
      console.log(error);
    }
    this.router.navigate(['/formatges/']);
    return this.formatgeForm.value;
  }
}
