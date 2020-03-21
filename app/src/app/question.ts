
export class Question {
    display: string;
    choices: Answer[];
    type: string;
    value: any;
}

export interface Answer {
    display: string,
    riskValue: number
}
