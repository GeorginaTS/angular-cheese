import { Component, inject } from '@angular/core';
import { Formatge } from '../formatges/formatge.interface';
import { FormatgeService } from '../formatges/formatge.service';
import { CommonModule } from '@angular/common';
import { FormatgeCard } from '../formatges/formatge-card';
import { formatgesList } from '../formatges/formatges.data';
@Component({
  selector: 'app-home',
  imports: [CommonModule, FormatgeCard],
  templateUrl: `./home.html`,
  styleUrl: './home.css',
})
export class Home {
  formatgeList = formatgesList;
}
