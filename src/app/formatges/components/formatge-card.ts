import { Component, input } from '@angular/core';
import { Formatge } from '../formatge.interface';
import { RouterModule } from '@angular/router';
import { FormatgeICOLlet } from './formatge-ico-llet';
@Component({
  selector: 'app-formatge-card',
  imports: [RouterModule, FormatgeICOLlet],
  templateUrl: './formatge-card.html',
  styleUrl: '../formatges.css',
})
export class FormatgeCard {
  formatge = input.required<Formatge>();
}
