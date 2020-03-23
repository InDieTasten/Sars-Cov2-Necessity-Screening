
export const scoreClasses: ScoreClass[] = [
    {
        title: "A",
        image: "Farbfrequenz_Stufe_1.png",
        textColor: "white",
        description: "Sehr niedrige Priorität",
        isActive: (score) => score <= 6
    },
    {
        title: "B",
        image: "Farbfrequenz_Stufe_2.png",
        textColor: "white",
        description: "Niedrige Priorität",
        isActive: (score) => score > 6 && score <= 12
    },
    {
        title: "C",
        image: "Farbfrequenz_Stufe_3.png",
        textColor: "black",
        description: "Hohe Priorität",
        isActive: (score) => score > 12 && score <= 18
    },
    {
        title: "D",
        image: "Farbfrequenz_Stufe_4.png",
        textColor: "white",
        description: "Erhöhte Priorität",
        isActive: (score) => score > 18 && score <= 24
    },
    {
        title: "E",
        image: "Farbfrequenz_Stufe_5.png",
        textColor: "white",
        description: "Höchste Priorität",
        isActive: (score) => score > 24
    }
];

export class ScoreClass {
    image: string;
    textColor: string;
    title: string;
    description: string;
    isActive: (score: number) => boolean;
}