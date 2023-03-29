import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeginnerExercisePageRoutingModule } from './beginner-exercise-routing.module';

import { BeginnerExercisePage } from './beginner-exercise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeginnerExercisePageRoutingModule
  ],
  declarations: [BeginnerExercisePage]
})
export class BeginnerExercisePageModule {}
