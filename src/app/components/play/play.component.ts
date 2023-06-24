import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/interfaces/interfaces';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit{
  currentQuiz!: Quiz
  constructor(private quizService: QuizService) {

  }
  ngOnInit(): void {
    this.currentQuiz=this.quizService.getQuiz();
    console.log(this.currentQuiz)
  }

  
}
