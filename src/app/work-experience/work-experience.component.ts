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

  calculateAge = (start: Date, end: Date) => {
    var monthUnit = 'mo';
    var yearUnit = 'yr';

    // Calculate the year and month difference
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    // Adjust if the difference in months is negative
    if (months < 0) {
      years--;
      months += 12;
    }

    // Include the current month if the end date is greater than or equal to the start date's day
    if (end.getDate() >= start.getDate()) {
      months++;
    }

    // Adjust if months exceeds 12
    if (months >= 12) {
      years++;
      months -= 12;
    }

    if (months > 1) {
      monthUnit += 's';
    }
    if (years > 1) {
      yearUnit += 's';
    }

    if (years === 0) {
      return `${months} ${monthUnit}`;
    }

    if (months === 0) {
      return `${years} ${yearUnit}`;
    }

    return `${years} ${yearUnit} , ${months} ${monthUnit}`;

    // return { years, months };
  };

  ngOnInit() {
    // this.aos.init();
    // window.addEventListener('load', this.aos.refreshHard())

    this.experience = [
      {
        name: 'Burapha University',
        logo: 'ng-logo-buu',
        year: '2015 - 2016',
        age: this.calculateAge(new Date(2015, 0, 1), new Date(2016, 0, 1)),
        url: 'https://www.buu.ac.th/',
        icon: PrimeIcons.BOOK,
        color: '#FF9800',
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
        year: 'Jul 2018 - Jun 2021',
        age: this.calculateAge(new Date(2018, 6, 1), new Date(2021, 5, 30)),
        url: 'https://www.cdg.co.th/',
        icon: PrimeIcons.BUILDING,
        color: '#004e98',
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
            url: 'https://dld.go.th',
          },
          {
            name: 'DLPW - Department of Labour Protection and Welfare',
            year: '2020',
            position: 'FullStack Developer ',
            tools: 'Java Struts Java EE GraphQL Angular PrimeNG',
            url: 'https://www.labour.go.th/',
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
            tools:
              'Quarkus Java EE GraphQL Angular PrimeNG RabbitMQ ElasticSearch Redisson CI/CD deployment Jenkins Kubernetes Docker NodeJS JasperReports',
            url: 'https://play.google.com/store/apps/details?id=th.co.cdgs.cdrive.mycar',
          },
        ],
      },
      {
        name: 'Cube SoftTech Co.,Ltd.',
        logo: 'ng-logo-cube',
        year: 'Jul 2021 - Apr 2022',
        age: this.calculateAge(new Date(2021, 6, 1), new Date(2022, 3, 30)),
        url: 'http://www.cubesofttech.com/',
        icon: PrimeIcons.BOX,
        color: '#ea124e',
        systems: [
          {
            name: 'Digital Student Loan Fund System',
            year: 'Jul 2021 - Apr 2022',
            position: 'FullStack Developer',
            outsource: 'Outsource @ KTB',
            tools: 'Micronaut Spring Boot Vue.js SAP-Crystal Reports ',
            url: 'https://www.studentloan.or.th/',
          },
        ],
      },
      {
        name: 'Prior Solution Co.,Ltd.',
        logo: 'ng-logo-prior',
        year: 'May 2022 - Aug 2022',
        age: this.calculateAge(new Date(2022, 4, 1), new Date(2022, 7, 31)),
        url: 'https://www.priorsolution.co.th/',
        icon: PrimeIcons.DESKTOP,
        color: '#a7c957',
        systems: [
          {
            name: 'คนละครึ่ง Delivery',
            year: 'May 2022 - Aug 2022',
            position: 'Backend Developer',
            outsource: 'infinitas by krungthai',
            tools: 'Spring Boot My',
            url: 'https://www.studentloan.or.th/',
          },
        ],
      },
      {
        name: 'SCB – Siam Commercial Bank',
        logo: 'ng-logo-scb',
        year: 'Sep 2022 - Nov 2022',
        age: this.calculateAge(new Date(2022, 8, 1), new Date(2022, 10, 30)),
        url: 'https://www.scb.co.th/',
        icon: PrimeIcons.BOX,
        color: '#c77dff',
        systems: [
          {
            name: 'Sales and Service Solution',
            year: 'Sep 2022 - Nov 2022',
            position: 'Professional',
            // outsource: 'Outsource @ KTB',
            tools: 'Spring Boot Next.js Mui MongoDB Jenkins Kubernetes Docker',
            // url: 'https://www.studentloan.or.th/',
          },
        ],
      },
      {
        name: 'CardX Thailand',
        logo: 'ng-logo-cardx',
        year: 'Dec 2022 - Present',
        age: this.calculateAge(new Date(2022, 11, 1), new Date()),
        url: 'https://www.cardx.co.th/',
        icon: PrimeIcons.BOX,
        color: '#72ddf7',
        systems: [
          {
            name: 'Sales and Service Solution',
            year: 'Dec 2022 - Jul 2024',
            position: 'Professional',
            // outsource: 'Outsource @ KTB',
            tools: 'Spring-Boot Next.js Mui MongoDB Redis Jenkins Kubernetes Docker',
            // url: 'https://www.studentloan.or.th/',
          },
          {
            name: 'API Platform Solution',
            year: 'Aug 2024 - Present',
            position: 'Professional',
            // outsource: 'Outsource @ KTB',
            tools: 'Spring-Boot Next.js Mui MongoDB Jasper-Report Kafka Redis Jenkins Kubernetes Docker',
            // url: 'https://www.studentloan.or.th/',
          },
        ],
      },
    ];
  }
}
