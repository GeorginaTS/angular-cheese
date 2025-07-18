import { Component, Input, Output } from '@angular/core';
@Component({
  selector: 'app-formatge-ico-llet',
  imports: [],
  template: `
    <div class="text-2xl">
      @if(tipus =="vaca") {🐄} 
      @if(tipus =="ovella") {🐑} 
      @if(tipus =="cabra"){🐐} 
      @if(tipus =="búfala") {🐂}
    </div>
  `,
  styleUrl: '../formatges.css',
})
export class FormatgeICOLlet {
  @Input() tipus!: string;
}
