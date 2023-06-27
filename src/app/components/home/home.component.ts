import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiData, Quiz } from 'src/app/interfaces/interfaces';
import { ApiService } from 'src/app/services/api/api.service';
import { QuizService } from 'src/app/services/quiz/quiz.service';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  quizzes !: Quiz[];
  private subscription: Subscription | undefined;

  constructor(private apiService: ApiService, private router: Router, private quizService: QuizService, private tokenService: TokenService) { }

  ngOnInit() {

    this.fetchQuizQuestions();
    this.quizService.removeQuiz()
    this.generateGuestToken();

  }

  fetchQuizQuestions() {
    this.subscription = this.apiService.getQuiz().subscribe(
      (response: ApiData) => {
        const questions = response.results;
        this.quizzes = this.apiService.formQuizzes(questions);
      },
      (error: Error) => {
        console.log(error)
      }
    );
  }
  getPictureForQuiz(name: string): string {
    name = name.split(' ').join('_');
    return `assets/images/${name}.jpg`
  }
  goToRandomQuiz() {
    const randomIndex = Math.floor(Math.random() * this.quizzes.length);
    const randomQuiz = this.quizzes[randomIndex];
    this.quizService.setQuiz(randomQuiz);
    this.router.navigate([`/play/${randomQuiz.name}`]);

  }
  generateGuestToken(): void {
    const guestToken = this.tokenService.generateToken();
    this.tokenService.setToken(guestToken);
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
