import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  experience: any[] = [];
  // aos = require('aos');
 
  constructor() {}

  ngOnInit() {
    // this.aos.init();
    // window.addEventListener('load', this.aos.refreshHard())

    this.experience = [
      {
        name: 'Burapha University',
        logo: 'ng-logo-buu',
        year: '2015 - 2016',
        url: 'https://www.buu.ac.th/',
        icon: PrimeIcons.BOOK,
        color: "#FF9800",
        systems: [
          {
            name: 'Inventory Management System ',
            year: '2015',
            position: 'FullStack Developer',
            tools: 'PHP Codeigniter Bootstrap',
          },
          {
            name: 'Student Affairs and Alumni System ',
            year: '2016',
            position: 'FullStack Developer',
            tools: 'PHP Codeigniter Bootstrap',
          },
        ],
      },
      {
        name: 'CDG Systems Ltd.',
        logo: 'ng-logo-cdg',
        year: '2017 - 2021',
        url: 'https://www.cdg.co.th/',
        icon: PrimeIcons.BUILDING,
        color: "#337",
        systems: [
          {
            name: 'Programmer Allocation Management System',
            year: '2017',
            position: 'Trainee',
            tools: 'Java EE PrimeFaces Apache POI',
          },
          {
            name: 'DJOP - Department of Juvenile Observation and Protection',
            year: '2018',
            position: 'FullStack Developer ',
            tools: 'Java EE Angular PrimeNG',
            url: 'http://www.djop.go.th',
          },
          {
            name: 'DLD - Department of Livestock Development',
            year: '2019',
            position: 'FullStack Developer ',
            tools: 'Java EE Angular PrimeNG',
            url: 'https://dld.go.th'
          },
          {
            name: 'DLPW - Department of Labour Protection and Welfare',
            year: '2020',
            position: 'FullStack Developer ',
            tools: 'Java Struts Java EE GraphQL Angular PrimeNG',
            url: 'https://www.labour.go.th/'
          },
          {
            name: 'Timesheet - inhouse production',
            year: '2020',
            position: 'FullStack Developer ',
            tools:
              'Java EE GraphQL Angular PrimeNG Redisson CI/CD deployment Jenkins Kubernetes Docker Apache POI',
          },
          {
            name: 'C-Drive MyCar',
            year: '2021',
            position: 'FullStack Developer ',
            tools: 'Quarkus Java EE GraphQL Angular PrimeNG RabbitMQ ElasticSearch Redisson CI/CD deployment Jenkins Kubernetes Docker NodeJS JasperReports',
            url: 'https://play.google.com/store/apps/details?id=th.co.cdgs.cdrive.mycar'
          },
        ],
      },
      {
        name: 'Cube SoftTech Co., Ltd.',
        logo: 'ng-logo-cube',
        year: '2021 - Present',
        url: 'http://www.cubesofttech.com/',
        icon: PrimeIcons.BOX,
        color: "#ea124e",
        systems: [
          {
            name: 'Digital Student Loan Fund System',
            year: '2021 - Present',
            position: 'FullStack Developer',
            outsource: "Outsource @ KTB",
            tools: 'Micronaut Spring Boot Vue.js SAP-Crystal Reports ',
            url: 'https://www.studentloan.or.th/'
          }
        ],
      },
    ];
  }
}
