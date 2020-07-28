import {
  Component,
  OnInit,
  ViewContainerRef,
  ComponentFactoryResolver,
  ViewChild,
  Injector,
  Inject,
} from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('lazyLoading', { read: ViewContainerRef })
  lazyLoading: ViewContainerRef;
  ELEMENT_DATA: any = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];
  title = 'Chow Chow';
  subtitle = 'Dog Breed';
  image = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  text =
    'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.';
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject('LOCALSTORAGE') private localStorage: any,
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver,
    private injector: Injector,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  async getLazyTable() {
    this.viewContainerRef.clear();
    this.lazyLoading.clear();
    const { TableComponent } = await import('../table/table.component');
    const tableFactory = this.cfr.resolveComponentFactory(TableComponent);
    const { instance } = this.lazyLoading.createComponent(
      tableFactory,
      null,
      this.injector
    );
    instance.dataSource = this.ELEMENT_DATA;
    // this.viewContainerRef.createComponent(
    //   this.cfr.resolveComponentFactory(TableComponent)
    // );
  }
  async getLazyImage() {
    this.viewContainerRef.clear();
    this.lazyLoading.clear();
    const { CardComponent } = await import('../card/card.component');
    const tableFactory = this.cfr.resolveComponentFactory(CardComponent);
    const { instance } = this.lazyLoading.createComponent(
      tableFactory,
      null,
      this.injector
    );
    instance.imageText = this.text;
    instance.title = this.title;
    instance.subtitle = this.subtitle;
    instance.image = this.image;

    // this.viewContainerRef.createComponent(
    //   this.cfr.resolveComponentFactory(CardComponent)
    // );
  }
  logout() {
    this.authService.logout();
  }
}
