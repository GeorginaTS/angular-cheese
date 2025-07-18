import { Component, input } from '@angular/core';
import { Formatge } from './formatge.interface';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-formatge-card',
  imports: [RouterModule],
  templateUrl: './formatge-card.html',
  styleUrl: './formatges.css'
})
export class FormatgeCard {
    formatge = input.required<Formatge>();
}