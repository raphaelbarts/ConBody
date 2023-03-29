import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeginnerExercisePage } from './beginner-exercise.page';

const routes: Routes = [
  {
    path: '',
    component: BeginnerExercisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeginnerExercisePageRoutingModule {}
