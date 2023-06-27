import { Injectable } from '@angular/core';
import {  CanActivate, Router} from '@angular/router';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Injectable({
  providedIn: 'root'
})
export class FinishGuard implements CanActivate {
  constructor(private quizService: QuizService, private router: Router) {}

  canActivate(): boolean {
    const quizFinished = this.quizService.getQuizFinished();

    if (!quizFinished) {
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }
  
}
