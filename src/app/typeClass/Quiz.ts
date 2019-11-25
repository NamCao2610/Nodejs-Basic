export class Quiz{
    Id: number;
    Text: string;
    Marks: number;
    AnswerId: number;
    Answers: [
        { Id: number, text:string},
        { Id: number, text:string},
        { Id: number, text:string},
        { Id: number, text:string}
    ]
}