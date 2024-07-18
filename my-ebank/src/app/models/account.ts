// src/app/models/account.model.ts
export interface Account {
    id: number;
    accountNumber: string;
    type: string; // Utilisez un type énuméré si vous avez défini CompteType en TypeScript
    solde: number;
    date_creation: string; // Utilisez 'string' pour les dates JSON
    status: boolean;
    userId: number;
    listOfBeneficier: Beneficier[]; // Créez l'interface correspondante
    listOfTransactions: Transaction[]; // Créez l'interface correspondante
    listOfCarte: Carte[]; // Créez l'interface correspondante
  }
  
  export interface Beneficier {
    // Définissez les propriétés selon votre modèle Java
  }
  
  export interface Transaction {
    // Définissez les propriétés selon votre modèle Java
  }
  
  export interface Carte {
    // Définissez les propriétés selon votre modèle Java
  }
  