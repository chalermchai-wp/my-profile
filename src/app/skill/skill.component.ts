import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent implements OnInit {
  skills = [
    {
      path: "../../assets/angular.svg",
      width: '100',
      height: '100'
    },
    {
      path: "../../assets/docker.svg",
      width: '100',
      height: '100'
    },
    {
      path: "../../assets/elastic.svg",
      width: '250',
      height: '150'
    },
    {
      path: "../../assets/graphql.svg",
      width: '250',
      height: '150'
    },
    {
      path: "../../assets/java.svg",
      width: '100',
      height: '100'
    },
    {
      path: "../../assets/jenkins.svg",
      width: '250',
      height: '150'
    },
    {
      path: "../../assets/kubernetes.svg",
    },
    {
      path: "../../assets/primeng.svg",
      width: '250',
      height: '150'
    },
    {
      path: "../../assets/quarkus.svg",
      width: '250',
      height: '150'
    },
    {
      path: "../../assets/rabbitmq.svg",
      width: '250',
      height: '150'
    },
    {
      path: "../../assets/redis.svg",
      width: '250',
      height: '150'
    },
    {
      path: "../../assets/micronaut.svg",
      width: '250',
      height: '150'
    },
    {
      path: "../../assets/spring_boot.svg",
      width: '250',
      height: '150'
    },
    {
      path: "../../assets/vuejs.svg",
      width: '250',
      height: '150'
    },
    {
      path: "../../assets/SAP-Crystal-Reports.png",
      width: '250',
      height: '150'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
