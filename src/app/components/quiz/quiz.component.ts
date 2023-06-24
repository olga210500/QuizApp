import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from 'src/app/interfaces/interfaces';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],


})
export class QuizComponent {
  @Input() quiz!:Quiz;
  @Input() picture!:string
  constructor(private router:Router, private quizService:QuizService){
  
  }
  goToQuiz(quiz:Quiz){
    this.quizService.setQuiz(quiz);
    this.router.navigate(['/play',quiz.name]);
  }
}