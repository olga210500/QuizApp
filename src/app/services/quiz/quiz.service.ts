import { Injectable } from '@angular/core';
import { Quiz } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private quiz!: Quiz;

  setQuiz(quiz: Quiz): void {
    this.quiz = quiz;
  }

  getQuiz(): Quiz {
    return this.quiz;
  }
}
