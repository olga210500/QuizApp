import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Question, Quiz } from 'src/app/interfaces/interfaces';
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
  lastQuestion!: boolean;

  constructor(private quizService: QuizService) {

  }
  ngOnInit(): void {
    this.currentQuiz = this.quizService.getQuiz();
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

  submitQuiz(): void {
    clearInterval(this.timerInterval);
 }
  onNext(questionIndex: number) {
    if (questionIndex+1 < this.currentQuiz.questions.length) {
      this.currentQuestionIndex++

    } else {
      this.currentQuestionIndex++
      this.lastQuestion = true
    }
  }

}
