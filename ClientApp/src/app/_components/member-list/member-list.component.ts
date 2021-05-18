import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { PaginationModule, PaginationConfig } from 'ngx-bootstrap/pagination';
import { Pagination, PaginatedResult } from '../../_models/pagination';



@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
   providers: [{
    provide: PaginationConfig
  }]
})
export class MemberListComponent implements OnInit {
  users: User[];
  p: number = 1;
  collection: any[] = this.users;  
  
  

  constructor(private userService: UserService, private alertify: AlertifyService,
    private route: ActivatedRoute) { }
  

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.users = data['users'].result;
    });
    
  }
}
