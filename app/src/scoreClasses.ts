
export const scoreClasses: ScoreClass[] = [
    {
        title: "A",
        color: "#007F00",
        isActive: (score) => score <= 6
    },
    {
        title: "B",
        color: "#00AF00",
        isActive: (score) => score > 6 && score <= 12
    },
    {
        title: "C",
        color: "#FFFF00",
        isActive: (score) => score > 12 && score <= 18
    },
    {
        title: "D",
        color: "#FF7F00",
        isActive: (score) => score > 18 && score <= 24
    },
    {
        title: "E",
        color: "#AF0000",
        isActive: (score) => score > 24
    }
];

export class ScoreClass {
    color: string;
    title: string;
    isActive: (score: number) => boolean;
}