import { Component, OnInit } from '@angular/core';
import { Training } from '../../_models/training';
import { Exercise } from '../../_models/exercise';

@Component({
  selector: 'app-training-edit',
  templateUrl: './training-edit.component.html',
  styleUrls: ['./training-edit.component.css']
})
export class TrainingEditComponent implements OnInit {
  trainings: Training[]
  day: string = "";
  exercises: Exercise[];
  exerciseName: string = "";
  sets: number = 0;
  reps: number = 0;
  comments: string = "";

  constructor() { }

  ngOnInit() {
    this.exercises = [
      {
        exerciseName: 'push press',
        sets: 0,
        reps: 0,
        comments: 'brak'
      }
    ],
    this.trainings = [
      {
        day: 'poniedzialek',
        exercises: []
      }
    ]   
    console.log(this.trainings);
    console.log(this.exercises)
  }

  comp(id: number) {
    if (id > 0) {
      return true;
    }
  }

  deleteExercise(id: number) {
    this.exercises = this.exercises.filter((v, j) => j !== id);
  }

  deleteTraining(id: number) {
    this.trainings = this.trainings.filter((v, i) => i !== id);
  }

  addExercise() {
    this.exercises.push({
      exerciseName: this.exerciseName,
      sets: this.sets,
      reps: this.reps,
      comments: this.comments
    });
  }

  addTraining() {
    this.trainings.push({
      day: this.day,
      exercises: this.exercises,
    });
    console.log(this.trainings);
    console.log(this.exercises);
  }
}

