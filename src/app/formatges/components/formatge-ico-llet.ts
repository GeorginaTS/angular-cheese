import { Component, Input} from '@angular/core';
@Component({
  selector: 'app-formatge-ico-llet',
  imports: [],
  template: `      
      @if(tipus =="vaca") { <h1>🐄</h1> } 
      @if(tipus =="ovella") {<h1>🐑</h1>}
      @if(tipus =="cabra") { <h1>🐐</h1>}
      @if(tipus =="búfala") { <h1>🐂</h1>}`,
  styleUrl: '../formatges.css',
})
export class FormatgeICOLlet {
  @Input() tipus!: string;
}