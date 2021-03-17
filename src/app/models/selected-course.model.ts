import { Participant } from "./participant.model";

export interface SelectedCourse {
numOfficiel: number;
numExterneReunion: number;
numOrdre: number;
numExterneCourse: number;
heureDepart: number;
timezoneOffset: number;
libelle: string;
libelleCourtReunion: string;
specialite: string;
nombreDeclaresPartants: number;
dateReunion: number;
participants: Participant[];
}
