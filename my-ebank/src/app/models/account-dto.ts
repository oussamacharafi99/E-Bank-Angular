import { CompteType } from "../enums/compte-type";

export interface AccountDTO {
        id: number;
        accountNumber: string;
        type: CompteType;
        solde: number;
        dateCreation: string; // Using ISO string format for date
        status: boolean;
        idUser: number;
    
}
