import { Component, OnInit, NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';

@Component({
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource;
  constructor() {}

  ngOnInit(): void {}
}
@NgModule({
  imports: [MaterialModule],
  declarations: [TableComponent],
})
class TableModule {}
