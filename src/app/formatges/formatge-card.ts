import { Component, input } from '@angular/core';
import { Formatge } from './formatge.interface';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-formatge-card',
  imports: [RouterModule],
  templateUrl: './formatge-card.html',
  styles: `
  .formatge-card { 
    padding: 1rem; 
    background-color:var(--bg-card-color); 
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    width: 300px;
    border-radius: 1rem;
    height: 100%;
    box-sizing: border-box;
    } `,
})
export class FormatgeCard {
    formatge = input.required<Formatge>();
}