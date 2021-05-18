import { Component, OnInit, Input } from '@angular/core';
import { Plan } from '../../_models/plan';

@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.css']
})
export class TrainingCardComponent implements OnInit {
  @Input() plan: Plan;
  

  constructor() { }

  ngOnInit() {
  }

}
