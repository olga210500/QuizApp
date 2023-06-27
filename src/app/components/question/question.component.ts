import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() question !: string;
  @Input() answers!: string[];
  @Input() questionIndex!: number;
  @Input() questionsCount!: number;
  @Output() nextQuestion = new EventEmitter<string>();
  @Output() cancelQuiz = new EventEmitter<void>();

  answer!: string;
  isSelected!: boolean;

  selectAnswer(selectAnswer: string) {
    this.answer = selectAnswer;
    this.isSelected = true;

  }
  cancel() {
    this.cancelQuiz.emit();
  }
  getNextQuestion() {

    this.nextQuestion.emit(this.answer)
    this.isSelected = false;

  }

}
