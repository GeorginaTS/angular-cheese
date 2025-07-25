import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  template: `
    <form id="buscador" class="w-full flex gap-2 items-center" (submit)="sendText(filter.value, $event)">
      <input
        type="text"
        name="buscador-string"
        id="buscador-string"
        placeholder="Cerca per nom"
        #filter 
        (change)="sendText(filter.value, $event)"
        class="w-96"
      />
      <button type="button" (click)="sendText(filter.value, $event)">
        Cercar
      </button>
    </form>
  `,
  styleUrl: '../formatges/formatges.css',
})
export class Searchbar {
  @Output() searchString = new EventEmitter<string>();
  sendText(text: string, event: Event) {
    event.preventDefault(); // evita el recarregament del formulari
    this.searchString.emit(text.trim());
    console.log('Emetent text:', text);
  }
}
