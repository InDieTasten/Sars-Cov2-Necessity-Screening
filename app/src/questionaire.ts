export const questionaire = {
    demographics: {
        age: {
            display: "In welche Altersgruppe fallen Sie?",
            type: "choice",
            choices: {
                below60: { display: "Ich bin jünger als 60 Jahre.", riskValue: 0.5 },
                between60_65: { display: "Ich bin zwischen 60 und 65 Jahre alt.", riskValue: 1 },
                between65_70: { display: "Ich bin zwischen 66 und 70 Jahre alt.", riskValue: 1.5 },
                over70: { display: "Ich bin über 70 Jahre alt.", riskValue: 2 }
            }
        },
        firstName: {
            display: "Vorname",
            type: "text"
        },
        lastName: {
            display: "Nachname",
            type: "text"
        },
        zipCode: {
            display: "PLZ",
            type: "zip"
        },
        phoneNumber: {
            display: "Telefonnummer",
            type: "phone"
        },
        isHealthCareStaff: {
            display: "Arbeiten Sie im Gesundheitswesen?",
            type: "choice",
            choices: {
                yes: { display: "Ja" },
                no: { display: "Nein" }
            }
        }
    },
    preconditions: {
        cancer: {
            display: "Haben oder hatten Sie eine Krebserkrankung?",
            type: "choice",
            choices: {
                no: { display: "Nein", riskValue: 1 },
                currently: { display: "Ja, aktuell", riskValue: 3 },
                previously: { display: "Ja, in der Vergangenheit", riskValue: 1.3 }
            }
        },
        highBloodPressure: {},
        cardiovascularDiseases: {},
        diabetes: {},
        chronicLungDiseases: {}
    },
    symptoms: {
        fever: {
            display: "Haben Sie eine Krebserkrankung?",
            choices: {
                yes: { display: "Ja" },
                no: { display: "Nein" }
            }
        }
    }
}
