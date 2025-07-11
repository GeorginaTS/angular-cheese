import { Component, input } from '@angular/core';
import { Formatge } from './formatge.interface';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-formatge-card',
  imports: [RouterModule],
  templateUrl: './formatge-card.html',
  styles: '.formatge-card { border: 1px solid #ccc; padding: 10px; margin: 10px; background-color:rgb(129, 21, 21); height: 300px; width: 300px } ',
})
export class FormatgeCard {
    formatge = input.required<Formatge>();
}