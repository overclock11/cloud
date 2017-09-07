import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:LoginService) { }

  ngOnInit() {

  }
}
