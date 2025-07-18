import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormatgeICOLlet } from './formatge-ico-llet';
@Component({
  selector: 'app-formatge-select-llet',
  imports: [ReactiveFormsModule, FormatgeICOLlet],
  template: `
    <select id="tipusLlet" name="tipusLlet" (change)="seleccionar($event)">
      @for(llet of tipusLlet; track llet) { 
        @if(tipus == llet) {
      <option [value]="llet" selected>
        <app-formatge-ico-llet [tipus]="llet"></app-formatge-ico-llet>
        {{ llet }}
      </option>
      } @else {
      <option [value]="llet">
        <app-formatge-ico-llet [tipus]="llet"></app-formatge-ico-llet>
        {{ llet }}
      </option>
      } }
    </select>
  `,
  styleUrl: '../formatges.css',
})
export class FormatgeSelectLlet {
  @Input() tipus!: string;
  tipusLlet = ['vaca', 'ovella', 'cabra', 'búfala', 'mixta'];
  tipusLletControl = new FormControl('');
  @Output() tipusLletSeleccionat = new EventEmitter<string>();

  seleccionar(event: Event) {
    const target = event.target as HTMLSelectElement | null;
    if (target && target.value) {
      this.tipusLletSeleccionat.emit(target.value);
      console.log("formatge-select-llet: "+target.value);
    }
  }
}
