
export const scoreClasses: ScoreClass[] = [
    {
        title: "A",
        textColor: "white",
        description: "Sehr niedrige Priorität",
        isActive: (score) => score <= 6
    },
    {
        title: "B",
        textColor: "white",
        description: "Niedrige Priorität",
        isActive: (score) => score > 6 && score <= 12
    },
    {
        title: "C",
        textColor: "black",
        description: "Hohe Priorität",
        isActive: (score) => score > 12 && score <= 18
    },
    {
        title: "D",
        textColor: "white",
        description: "Erhöhte Priorität",
        isActive: (score) => score > 18 && score <= 24
    },
    {
        title: "E",
        textColor: "white",
        description: "Höchste Priorität",
        isActive: (score) => score > 24
    }
];

export class ScoreClass {
    textColor: string;
    title: string;
    description: string;
    isActive: (score: number) => boolean;
}