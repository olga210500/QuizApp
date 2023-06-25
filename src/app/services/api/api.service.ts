import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiData, Question, Quiz } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://opentdb.com/api.php?amount=50';
  constructor(private http:HttpClient) { }
  getQuiz(): Observable<ApiData> {  
    return this.http.get<ApiData>(this.apiUrl);
  }
  formQuizzes(data: Question[]): Quiz[] {
    const quizArray:Quiz[] = Object.values(data.reduce((result:any, obj:Question) => {
      const category = obj.category;
      if (!result[category]) {
        result[category] = { name: category, questions: [] };
      }
      result[category].questions.push(obj);
      return result;
    }, {}));
    quizArray.length=10;
    return quizArray

  }

}
