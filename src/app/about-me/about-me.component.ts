import { Component, OnInit } from '@angular/core';
import Typed, { TypedOptions } from 'typed.js';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  Shell = require('shell.js');

  constructor() {}

  ngOnInit(): void {
    this.initCommand();
  }

  calculateAge = () => {
    var dob = new Date(1995, 10, 13);
    var currentDate = new Date();

    let age = currentDate.getFullYear() - dob.getFullYear();
    const monthDifference = currentDate.getMonth() - dob.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && currentDate.getDate() < dob.getDate())
    ) {
      age--;
    }

    return age;
  };

  headerCommand = () => {
    return [
      "<b>&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color: #ffa929'>__&nbsp;&nbsp;__</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </b>",
      "<b>&nbsp;&nbsp;/_\\&nbsp;|&nbsp;|__&nbsp;&nbsp;___&nbsp;_&nbsp;&nbsp;_|&nbsp;|_&nbsp;&nbsp;<span style='color: #ffa929'>|&nbsp;&nbsp;\\/&nbsp;&nbsp;|___&nbsp;</span></b>",
      "<b>&nbsp;/&nbsp;_&nbsp;\\|&nbsp;'_&nbsp;\\/&nbsp;_&nbsp;\\&nbsp;||&nbsp;|&nbsp;&nbsp;_|&nbsp;<span style='color: #ffa929'>|&nbsp;|\\/|&nbsp;/&nbsp;-_) </span></b>",
      "<b>/_/&nbsp;\\_\\_.__/\\___/\\_,_|\\__|&nbsp;<span style='color: #ffa929'>|_|&nbsp;&nbsp;|_\\___| </span></b>",
      '<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </b>',
    ];
  };

  linebrakeCommand = () => {
    return ["<span style='color: #51c2d5;'>#####################################</span>"]
  };

  profileCommand = () => {
    var command: string[] = [];
    Object.entries(this.getProfileDetail()).forEach(([key, value]) => {
      command.push(`<span style='color: #8ad733'>${key}</span>: ${value}`);
    });

    return command;
  };

  getProfileDetail = () => {
    return {
      name: 'Chalerrmchai Wongfiang',
      nickname: 'neung',
      dateOfBirth: '13 Nov 1995',
      age: this.calculateAge() + ' years old',
      gender: 'male',
      email: 'chalermchai.wp@gmail.com',
      tel: '0624595263',
      position: 'Fullstack Developer',
    };
  };

  initCommand() {
    let command: (string[])[] = [];
    command.push(this.headerCommand());
    command.push(this.linebrakeCommand());
    command.push(this.profileCommand());
    command.push(this.linebrakeCommand());
    command.push(['....']);

    console.log(command)

    var option = {
      user: 'root',
      host: 'chalermchai.dev',
      path: '/~/',
      theme: 'dark',
      style: 'osx',
      responsive: true,
      commands: command.flatMap(innerArray => innerArray),
      root: false,
      typed: Typed,
      typedSpeed: 5,
      typedDelay: 50,
      typedLoop: false,
    };

    new this.Shell('#awesome-shell', option);
  }
}
