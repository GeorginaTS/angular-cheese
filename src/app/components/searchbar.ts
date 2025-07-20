import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app--searchbar',
    template: `
<form id="buscador">
  <input type="text" name="buscador-string" id="buscador-string"  placeholder="Cerca per nom"  #filter (change)="sendText(filter.value, $event)">
  <button type="button">Cercar</button>
</form>
    `,
    styleUrl: '../formatges/formatges.css'
})
export class FormatgesSearchbar {

    @Output() searchString = new EventEmitter<string>();
    sendText(text: string, event: Event) {
    const target = event.target as HTMLSelectElement | null;
    if (target && target.value) {
      this.searchString.emit(target.value);
      console.log("search string: "+target.value+" text: "+text);
    }
    }
}