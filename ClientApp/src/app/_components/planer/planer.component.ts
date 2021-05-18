import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-planer',
  templateUrl: './planer.component.html',
  styleUrls: ['./planer.component.css']
})
export class PlanerComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {

  }

  //isItemForCoachVisible(): boolean {
  //  return this.authService.roleMatch(['Coach']);
  //}
}
