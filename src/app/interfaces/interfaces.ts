export interface ApiData {
    response_code: number
    results: Questions[]
}
export interface Questions {
    category:string
    correct_answer:string
    difficulty:string
    incorrect_answers:string[]
    question:string
    type:string
}
export interface Quiz{
    name:string
    questions:Questions[]
} 