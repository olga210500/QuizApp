import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from 'src/app/interfaces/interfaces';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit, OnDestroy {
  currentQuiz!: Quiz
  currentQuestionIndex = 0;
  startTime!: Date;
  timeElapsed!: number;
  timerInterval: any;


  answers!: string[];
  currentQuestion!: string;
  correctAnswer!: string;

  countCorrectAnswers = 0;
  countPoints = 0;
  constructor(private quizService: QuizService, private router: Router) {

  }
  ngOnInit(): void {
    const currentQuiz = this.quizService.getQuiz()
    if (currentQuiz) {
      this.currentQuiz = currentQuiz;
      this.getAnswers(0)
    } else {
      console.log('Something went wrong');

    }

    this.startQuiz();
  }



  ngOnDestroy(): void {
    clearInterval(this.timerInterval);
  }

  startQuiz(): void {
    this.startTime = new Date();
    this.timerInterval = setInterval(() => {
      const currentTime = new Date();
      this.timeElapsed = Math.floor((currentTime.getTime() - this.startTime.getTime()) / 1000);
    }, 1000);
  }

  getAnswers(questionIndex: number): void {
    const question = this.currentQuiz.questions[questionIndex]
    const answers = question.incorrect_answers;
    this.correctAnswer = question.correct_answer
    const randomIndex = Math.floor(Math.random() * (answers.length + 1));
    answers.splice(randomIndex, 0, this.correctAnswer);
    this.answers = answers;
    this.currentQuestion = question.question;
  }

  cancelQuiz() {
    this.router.navigate(['/home'])
  }

  onNext(answer: string) {
    this.getStatistic(answer)
    if (this.currentQuestionIndex + 1 === this.currentQuiz.questions.length) {
      this.quizService.setStatistic({ points: this.countPoints, correctAnswers: this.countCorrectAnswers, time: this.timeElapsed, totalQuestions: this.currentQuiz.questions.length })
      this.router.navigate(['/finish'])
    } else {
      this.currentQuestionIndex++
      this.getAnswers(this.currentQuestionIndex)

    }
  }
  getStatistic(answer: string): void {
    if (answer === this.correctAnswer) {
      this.countCorrectAnswers++
    }
    this.countPoints = this.countCorrectAnswers * 2;

  }

}
