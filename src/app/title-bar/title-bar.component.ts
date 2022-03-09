import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit, AfterViewInit {

  @ViewChild('stickyTopbar')
  topbarElement!: ElementRef;

  sticky: boolean = false;
  elementPosition: any;

  
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.elementPosition = this.topbarElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.elementPosition){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }

}
