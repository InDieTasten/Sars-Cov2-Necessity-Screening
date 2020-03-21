export const questionaire = {
    demographics: {
        age: {
            display: "Ihre Altersgruppe",
            type: "choice",
            choices: {
                below40: { display: "jünger als 40 Jahre.", riskValue: 0.2 },
                between40_49: { display: "zwischen 40 und 49 Jahre alt.", riskValue: 0.4 },
                between50_59: { display: "zwischen 50 und 59 Jahre alt.", riskValue: 1.3 },
                between60_69: { display: "zwischen 60 und 69 Jahre alt.", riskValue: 3.6 },
                between70_79: { display: "zwischen 70 und 79 Jahre alt.", riskValue: 8.0 },
                over80: { display: "80 Jahre oder älter.", riskValue: 14.8 }
            }
        },
        // firstName: {
        //     display: "Ihr Vorname",
        //     type: "text",
        // },
        // lastName: {
        //     display: "Ihr Nachname",
        //     type: "text"
        // },
        // zipCode: {
        //     display: "Ihre PLZ",
        //     type: "zip"
        // },
        // phoneNumber: {
        //     display: "Ihre Telefonnummer",
        //     type: "tel"
        // },
        isHealthCareStaff: {
            display: "Arbeiten Sie im Gesundheitswesen?",
            type: "choice",
            choices: {
                no: { display: "Nein" },
                yes: { display: "Ja" },
            }
        }
    },
    preconditions: {
        cancer: {
            display: "Haben oder hatten Sie eine Krebserkrankung?",
            type: "choice",
            choices: {
                no: { display: "Nein", riskValue: 0.0 },
                currently: { display: "Ja, aktuell", riskValue: 5.6 },
                previously: { display: "Ja, in der Vergangenheit", riskValue: 2.0 }
            }
        },
        highBloodPressure: {
            display: "Haben Sie Bluthochdruck?",
            type: "choice",
            choices: {
                no: { display: "Nein", riskValue: 0.0 },
                yes: { display: "Ja", riskValue: 6.0 }
            }
        },
        cardiovascularDiseases: {
            display: "Haben Sie eine Herzkrankheit?",
            type: "choice",
            choices: {
                no: { display: "Nein", riskValue: 0.0 },
                yes: { display: "Ja", riskValue: 10.5 }
            }
        },
        diabetes: {
            display: "Haben Sie Diabetes?",
            type: "choice",
            choices: {
                no: { display: "Nein", riskValue: 0.0 },
                yes: { display: "Ja", riskValue: 7.3 }
            }
        },
        chronicLungDiseases: {
            display: "Haben Sie eine chronische Lungenerkrankung?",
            type: "choice",
            choices: {
                no: { display: "Nein", riskValue: 0.0 },
                yes: { display: "Ja", riskValue: 6.3 }
            }
        }
    },
    symptoms: {
        fever: {
            display: "Haben Sie Fieber?",
            type: "choice",
            choices: {
                no: { display: "Nein", riskValue: 0.0 },
                light: { display: "37,5 °C bis 38 °C", riskValue: 0.5 },
                medium: { display: "38 °C bis 39 °C", riskValue: 1.0 },
                heavy: { display: "über 39 °C", riskValue: 1.5 }
            }
        },
        cough: {
            display: "Haben Sie Husten?",
            type: "choice",
            choices: {
                no: { display: "Nein", riskValue: 0.8 },
                yes: { display: "Ja", riskValue: 1.2 }
            }
        },
        shortOfBreath: {
            display: "Leiden Sie unter Kurzatmigkeit?",
            type: "choice",
            choices: {
                no: { display: "Nein", riskValue: 0.0 },
                yes: { display: "Ja", riskValue: 1.0 }
            }
        },
        breathlessness: {
            display: "Leiden Sie unter Atemnot?",
            type: "choice",
            choices: {
                no: { display: "Nein", riskValue: 0.0 },
                yes: { display: "Ja", riskValue: 1.5 }
            }
        },
        soreThroat: {
            display: "Haben Sie Halsschmerzen?",
            type: "choice",
            choices: {
                no: { display: "Nein", riskValue: 0.0 },
                yes: { display: "Ja", riskValue: 0.5 }
            }
        },
        headCold: {
            display: "Haben Sie Schnupfen?",
            type: "choice",
            choices: {
                no: { display: "Nein", riskValue: 0.0 },
                yes: { display: "Ja", riskValue: 0.5 }
            }
        },
    },
    environmentInfo: {
        riskyRegion: {
            display: "Waren Sie innerhalb der letzten 14 Tage im Ausland oder einem Risikogebiet?",
            type: "choice",
            choices: {
                no: { display: "Nein", riskValue: 0.8 },
                yes: { display: "Ja", riskValue: 1.2 }
            }
        },
        contactToRiskyRegion: {
            display: "Hatten Sie Kontakt zu einer Person, die innerhalb den letzten 14 Tagen im Ausland oder einem Risikogebiet war?",
            type: "choice",
            choices: {
                no: { display: "Nein", riskValue: 0.8 },
                yes: { display: "Ja", riskValue: 1.2 }
            }
        },
        contactWithCovidPositive: {
            display: "Hatten Sie Kontakt zu einer Person, die positiv auf das Coronavirus getestet wurde?",
            type: "choice",
            choices: {
                no: { display: "Nein", riskValue: 0.8 },
                yes: { display: "Ja", riskValue: 1.2 }
            }
        }
    }
}

