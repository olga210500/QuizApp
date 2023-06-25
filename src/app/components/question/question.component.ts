import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Question, Quiz } from 'src/app/interfaces/interfaces';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() quiz!: Quiz;
  @Input() questionIndex!: number;
  @Input() isLastQuestion!: boolean;
  @Output() nextQuestion = new EventEmitter<number>();


  answers!: string[];
  question!:string;
  constructor(private quizService: QuizService, private router: Router) {

  }

  ngOnInit(): void {
    this.getAnswers(0)
  }

  getAnswers(questionIndex: number): void {
    const question = this.quiz.questions[questionIndex]
    const answers = question.incorrect_answers;
    const correct_answer = question.correct_answer
    const randomIndex = Math.floor(Math.random() * (answers.length + 1));
    answers.splice(randomIndex, 0, correct_answer);
    this.answers = answers;
    this.question = question.question;
    console.log(answers, '.........', questionIndex);

  }
  cancelQuiz() {
    this.router.navigate(['/home'])
    this.quizService.removeQuiz()
  }
  getNextQuestion(index: number) {

    this.nextQuestion.emit(index + 1)
    this.getAnswers(index + 1);

  }

  finishQuiz(){
    this.router.navigate(['/finish'])
  }

}
