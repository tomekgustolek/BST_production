import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetConfig, TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
  providers: [{
    provide: TabsetConfig
  }]
})
export class AdminPanelComponent implements OnInit {
  @ViewChild('memberTabs', { static: true }) memberTabs: TabsetComponent

  constructor() { }

  ngOnInit() {
  }

}
