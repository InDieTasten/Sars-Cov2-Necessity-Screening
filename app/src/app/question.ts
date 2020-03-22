
export class Question {
    display: string;
    choices: Answer[];
    type: string;
    value: any;
    linkHref: string;
    linkText: string;
}

export interface Answer {
    display: string,
    riskValue: number
}
