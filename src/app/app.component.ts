import {
  Component,
  ViewContainerRef,
  ComponentFactoryResolver,
} from '@angular/core';
import { LoginComponent } from './login/login.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sample';
  constructor() {}

  // async getLazy2() {
  //   this.viewContainerRef.clear();
  //   const { Lazy2Component } = await import('./lazy2.component');
  //   this.viewContainerRef.createComponent(
  //     this.cfr.resolveComponentFactory(Lazy2Component)
  //   );
  // }
}
