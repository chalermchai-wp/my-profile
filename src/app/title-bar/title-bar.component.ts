import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css'],
})
export class TitleBarComponent implements OnInit, AfterViewInit {
  @ViewChild('stickyTopbar')
  topbarElement!: ElementRef;
  @Input() isMobile: Boolean = false;

  sticky: boolean = false;
  elementPosition: any;
  isDarkMode: boolean = false;

  drakModeIcon: string = 'pi pi-moon';

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.elementPosition = this.topbarElement.nativeElement.offsetTop;
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    if (element) element.classList.toggle('my-app-dark');
  }

  getIcon() {
    const element = document.querySelector('html');
    if (element && element.classList.contains('my-app-dark')) {
      return PrimeIcons.SUN;
    }
    return PrimeIcons.MOON;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.elementPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
}
