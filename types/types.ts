import React from "react"

export enum Pages {
    EntryMenu,
    MainMenu,
    Fields,
    ViewFields,
    Treatments,
    ViewTreatments,
    AddFields,
    SingleField,
    RemoveField,
    FieldAddedCorrectly,
    AddTreatments,
    TreatmentAddedCorrectly,
    Seedings,
    AddSeedings,
    ViewSeedings,
    RemoveSeedings,
    SeedingAddedCorrectly,
}

export type Field = {
    field: number,
    registerDate: Date,
}

export type Treatment = {
    field: number,
    registerDate: Date,
    title: string,
    description: string,
}

export type Seeding = {
    field: number,
    registerDate: Date,
    title: string,
    description: string,
}

export interface PageProps {
    setCurrentPage: React.Dispatch<React.SetStateAction<Pages>>;
    setHistory: React.Dispatch<React.SetStateAction<Pages[]>>;
}