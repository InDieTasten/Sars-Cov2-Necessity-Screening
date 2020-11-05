# Sars-Cov2-Necessity-Screening

This project was created as part of the [#WirVsVirus Hackathon](https://wirvsvirus.org/), a hackathon backed by the German Government.

The project is documented in German on [DevPost](https://devpost.com/software/sars-cov2-necessity-screening).

A video has also been published:

[![YouTube Video showcasing the app idea and finished result](https://img.youtube.com/vi/tmF91w9iA7U/0.jpg)](https://www.youtube.com/watch?v=tmF91w9iA7U)

## Idea of this project

Create a survey-like form for people being tested. The application will then determine the priority of the test sample for laboratories.
All samples will still be tested, but priority tests will always be tested first. The classification of the sample is determined according to recommendations of the European Union. It considers likelihood of infection, severity of possible infection, and profession (it's important to quickly free medical staff from quarantine).

## Implementation details

The project is a standalone Angular app. No databases required.
The survey questions are configured in questionaire.ts, together with their weights to the classification.
The code is a bit messy, but looks good for a 48 hour hackathon.
