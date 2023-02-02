import { Component, Input } from '@angular/core';
import { RyM } from '../../interfaces/RyM';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() rym!:RyM;
}
