export interface Patient {
    id: string,
    firstName: string,
    lastName: string,
    gender?: number,
    allergies?: string,
    height?: string,
    weight?: number,
    lastIncome?: string,
    lastSubjet?: string,
    bloodGroup?: number,
    socialNumber?: string,
    notes?: string,
    documents?: PatientDocument[],
    treatments?: PatientTreatments[],
}

export interface PatientDocument {
    name: string,
    extension: string,
    uploadAt: string,
}

export interface PatientTreatments {
    drug: number,
    repeat: number[],
    duration: number,
}