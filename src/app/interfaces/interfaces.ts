export interface ApiData {
    response_code: number
    results: Question[]
}
export interface Question {
    category:string
    correct_answer:string
    difficulty:string
    incorrect_answers:string[]
    question:string
    type:string
}
export interface Quiz{
    name:string
    questions:Question[]
} 
export interface Statistic{
    points:number
    correctAnswers:number
    time:number
    totalQuestions:number
}