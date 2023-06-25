import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Quiz } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private quiz!: Quiz;
  private quizKey = "quizzes"
  private currentQuiz = 'currentQuiz'

  setQuiz(quiz: Quiz): void {
    localStorage.setItem(this.currentQuiz,JSON.stringify(quiz))
  }

  getQuiz(): Quiz {
    const quiz = localStorage.getItem(this.currentQuiz);
    if(quiz){
      return JSON.parse(quiz)
    }
    return this.quiz;
  }
  removeQuiz():void{
    localStorage.removeItem(this.currentQuiz)
  }
  setQuizzes(quizzes: Quiz[]) {
    localStorage.setItem("quizzes", JSON.stringify(quizzes))
  }
  getQuizzes():Quiz[]{
    const quizzes = localStorage.getItem(this.quizKey)
    if(quizzes){
      return JSON.parse(quizzes);

    }
    return [];
  }

}
