import { Component, OnInit } from '@angular/core';
import { Statistic } from 'src/app/interfaces/interfaces';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {
  statistic!:Statistic;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.statistic=this.quizService.getStatistic();
  }


  get percentageCorrect(): number {
    return (this.statistic.correctAnswers / this.statistic.totalQuestions) * 100;
  }

  get percentageIncorrect(): number {
    return 100 - this.percentageCorrect;
  }
}
