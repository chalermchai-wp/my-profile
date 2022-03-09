import { Component, OnInit } from '@angular/core';
import Typed, { TypedOptions } from 'typed.js';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  Shell = require('shell.js');

  constructor() { }

  ngOnInit(): void {
    this.initCommand();  
  }

  initCommand() {

    var option = {
        user: 'root',
        host: 'chalermchai.dev',
        path: '/~/',
        theme: 'dark',
        style: 'osx',
        responsive: true,
        commands: [
          "<b>&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color: #ffa929'>__&nbsp;&nbsp;__</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </b>",
          "<b>&nbsp;&nbsp;/_\\&nbsp;|&nbsp;|__&nbsp;&nbsp;___&nbsp;_&nbsp;&nbsp;_|&nbsp;|_&nbsp;&nbsp;<span style='color: #ffa929'>|&nbsp;&nbsp;\\/&nbsp;&nbsp;|___&nbsp;</span></b>",
          "<b>&nbsp;/&nbsp;_&nbsp;\\|&nbsp;'_&nbsp;\\/&nbsp;_&nbsp;\\&nbsp;||&nbsp;|&nbsp;&nbsp;_|&nbsp;<span style='color: #ffa929'>|&nbsp;|\\/|&nbsp;/&nbsp;-_) </span></b>",
          "<b>/_/&nbsp;\\_\\_.__/\\___/\\_,_|\\__|&nbsp;<span style='color: #ffa929'>|_|&nbsp;&nbsp;|_\\___| </span></b>",
          "<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </b>",
          "<span style='color: #51c2d5;'>#####################################</span>",
          "<span style='color: #8ad733'>name</span>: Chalerrmchai Wongfiang",
          "<span style='color: #8ad733'>nickname</span>: neung",
          "<span style='color: #8ad733'>dateOfBirth</span>: 13 Nov 1995",
          "<span style='color: #8ad733'>age</span>: 26 years old",
          "<span style='color: #8ad733'>gender</span>: male",
          "<span style='color: #8ad733'>email</span>: chalermchai.wp@gmail.com",
          "<span style='color: #8ad733'>tel</span>: 062-459-5263",
          "<span style='color: #8ad733'>position</span>: Full Stack Developer",
          "<span style='color: #51c2d5;'>#####################################</span>",
          '...',
        ],
        root: false,
        typed: Typed,
        typedSpeed: 5,
        typedDelay: 50,
        typedLoop:  false
      }

    new this.Shell('#awesome-shell', option);

  }

}
