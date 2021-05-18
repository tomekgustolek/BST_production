import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plan } from '../../_models/plan';
import { Training } from '../../_models/training';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {
  plans: Plan[];
  name: string = "";
  photoUrl: string = "";
  trainings: Training[]

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.plans = [
      {
        name: 'todo',
        photoUrl: 'first',
        trainings: []
      }
    ]
  }

  deletePlan(id: number) {
    this.plans = this.plans.filter((v, i) => i !== id);
  }

  addPlan() {
    this.plans.push({
      name: this.name,
      photoUrl: this.photoUrl,
      trainings: this.trainings
    });
  }
}
