import { Patient } from "./patient";

export interface Visit {
    type: string;
    id: string;
}

export interface IndividualVisit extends Visit {
    patient: Patient;
    date: string;
    startTime: string;
    subject: string;
    tour: string;
}

export interface TourVisit extends Visit {
    title: string;
    startTime: string;
    individuals: IndividualVisit[];
}