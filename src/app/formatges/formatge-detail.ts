import { Component, inject } from '@angular/core';
import { Formatge } from '../models/formatge.interface';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { FormatgeICOLlet } from './components/formatge-ico-llet';
import { FormatgeService } from '../services/formatge.service';
import { Observable, switchMap, of } from 'rxjs';
import {AsyncPipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-formatge-detail',
  standalone: true,
  imports: [FormatgeICOLlet, AsyncPipe, RouterModule, NgIf],
  template: `<section *ngIf="formatge$| async as f">
  <article class="formatge-detail">
    <div style="display: flex; justify-content: space-between">
      <h3>{{ f.nom }}</h3>
      <app-formatge-ico-llet
        [tipus]="f.tipus_llet"
      ></app-formatge-ico-llet>
    </div>
    <hr />
    <p class="text-zinc-500">
      Llet de {{ f.tipus_llet }} - <b>{{ f.pais_procedencia }}</b>
    </p>
    <p>Fermentació: {{f.tipus_fermentacio }}</p>
    <p>Temps de maduració:{{ f.temps_maduracio }}</p>
    <br />
    <p>{{ f.descripcio }}</p>
    <hr /> 
      <div style="display: flex; justify-content: center; gap: 1rem">
      <a href="formatges/update/{{ f.id }}" class="button">Modificar</a>
      <button (click)="deleteFormatge(f.id)" class="button">
        Eliminar
      </button>
    </div>
  </article>
</section>
`,
  styleUrl: './formatges.css',
})
export class FormatgeDetail {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  
  constructor(private formatgeService: FormatgeService) {
    const id: string = this.route.snapshot.params['id'] as string; 
    this.formatge$ = this.formatgeService.getFormatgesById(id);
  }

formatge$: Observable<Formatge> = of({} as Formatge);

ngOnInit(): void {
  this.formatge$ = this.route.paramMap.pipe(
    switchMap(params => {
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

  deleteFormatge(id: string) {
    this.formatgeService.deleteFormatge(id);
    this.router.navigate(['formatges']);
  }
}
