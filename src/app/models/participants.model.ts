export interface Participant {
    nom:  string;
    numPmu: number;
    age: number;
    sexe: string;
    race: string;
    statut: string;
    placeCorde: 2;
    oeilleres: string;
    proprietaire: string;
    entraineur: string;
    driver: string;
    driverChange: false;
    robe: {
      code: number;
      libelleCourt: string;
      libelleLong: string
      };
    indicateurInedit: false;
    musique: string;
    nombreCourses: number;
    nombreVictoires: number;
    nombrePlaces: number;
    nombrePlacesSecond: number;
    nombrePlacesTroisieme: number;
    gainsParticipant: {
      gainsCarriere: number;
      gainsVictoires: number;
      gainsPlace: number;
      gainsAnneeEnCours: number;
      gainsAnneePrecedente: number
    };
    dernierRapportDirect: {
      typePari: string;
      rapport: number;
      typeRapport: string;
      indicateurTendance: string ;
      nombreIndicateurTendance: number;
      dateRapport: number;
      permutation: number;
      favoris: true;
      numPmu1: number;
      grossePrise: false
      };
}
