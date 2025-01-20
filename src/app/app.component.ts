import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';

// declare let AOS: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-profile';
  deviceInfo: any = null;
  style = null;
  aos = require('aos');
  
  constructor(private deviceService: DeviceDetectorService) {
    // console.log(this.aos); 
  }

  epicFunction() {

    this.deviceInfo = this.deviceService.getDeviceInfo();
    const isTablet = this.deviceService.isTablet();
    const isDesktopDevice = this.deviceService.isDesktop();
  }

  isMobile(){ 
    return this.deviceService.isMobile();
  }

  ngOnInit(): void {
    this.aos.init();
  }

  
}
