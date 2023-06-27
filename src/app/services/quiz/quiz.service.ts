import { Injectable } from '@angular/core';
import { Quiz, Statistic } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private quizKey = "quizzes"
  private currentQuiz = 'currentQuiz'
  private quizStatistic: Statistic={
    points: 0,
    correctAnswers: 0,
    time: 0,
    totalQuestions:0
  }

  setQuiz(quiz: Quiz): void {
    localStorage.setItem(this.currentQuiz, JSON.stringify(quiz))
  }

  getQuiz(): Quiz | null {
    const quiz = localStorage.getItem(this.currentQuiz);
    return JSON.parse(quiz || '')
  }
  removeQuiz(): void {
    localStorage.removeItem(this.currentQuiz)
  }
  getQuizzes(): Quiz[] {
    const quizzes = localStorage.getItem(this.quizKey)
    if (quizzes) {
      return JSON.parse(quizzes);

    }
    return [];
  }
  setStatistic(statistic:Statistic){
    this.quizStatistic = statistic;
  }
  getStatistic(){
    return this.quizStatistic;
  }

}
