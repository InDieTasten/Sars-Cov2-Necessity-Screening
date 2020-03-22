
export const scoreClasses: ScoreClass[] = [
    {
        title: "A",
        backgroundColor: "#004F00",
        textColor: "white",
        isActive: (score) => score <= 6
    },
    {
        title: "B",
        backgroundColor: "#00AF00",
        textColor: "white",
        isActive: (score) => score > 6 && score <= 12
    },
    {
        title: "C",
        backgroundColor: "#FFFF00",
        textColor: "black",
        isActive: (score) => score > 12 && score <= 18
    },
    {
        title: "D",
        backgroundColor: "#FF7F00",
        textColor: "white",
        isActive: (score) => score > 18 && score <= 24
    },
    {
        title: "E",
        backgroundColor: "#AF0000",
        textColor: "white",
        isActive: (score) => score > 24
    }
];

export class ScoreClass {
    backgroundColor: string;
    textColor: string;
    title: string;
    isActive: (score: number) => boolean;
}