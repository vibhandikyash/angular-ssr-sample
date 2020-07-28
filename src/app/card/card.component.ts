import { Component, OnInit, NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
@Component({
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  imageText: string;
  title: string;
  subtitle: string;
  image: string;
  constructor() {}

  ngOnInit(): void {}
}
@NgModule({
  imports: [MaterialModule],
  declarations: [CardComponent],
})
class CardModule {}
