import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../Services/user-service.service';
import { Carte } from '../models/account';

@Component({
  selector: 'app-carte-bancaire',
  templateUrl: './carte-bancaire.component.html',
  styleUrls: ['./carte-bancaire.component.css']
})
export class CarteBancaireComponent implements OnInit {
  carte: Carte | undefined;

  constructor(private service: UserServiceService) { }

  ngOnInit(): void {
    this.service.getfirstCarte(1).subscribe({
      next: (data: Carte) => {
        this.carte = data;
      },
      error: (err) => {
        console.error('Error fetching card details', err);
      }
    });
  }

  getFormattedCardNumber(): string {
    if (this.carte?.carte_numero) {
      return this.carte.carte_numero.replace(/(\d{4})(?=\d)/g, '$1 ');
    }
    return '';
  }

  // Method to format the expiration date
  getFormattedExpirationDate(): string {
    if (this.carte?.date_expiration) {
      const [year, month] = this.carte.date_expiration.split('-');
      return `${month}/${year.slice(-2)}`;
    }
    return '';
  }
}
