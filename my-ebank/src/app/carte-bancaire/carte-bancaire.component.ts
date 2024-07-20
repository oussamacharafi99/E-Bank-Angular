import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../Services/user-service.service';
import { Carte } from '../models/account';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carte-bancaire',
  templateUrl: './carte-bancaire.component.html',
  styleUrls: ['./carte-bancaire.component.css']
})
export class CarteBancaireComponent implements OnInit {
  carte !: Array<Carte>;

  constructor(private service: UserServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const accountId = params.get('id');
      console.log("-------- > > "+accountId);
      
      if (accountId) {
        this.getAllCartes(+accountId);
      }
    });
  }

  

  getAllCartes(id: number): void {
    this.service.get_all_Cartes(id).subscribe({
      next: (data: Array<Carte>) => {
        this.carte = data;
      },
      error: (err) => {
        console.error('Error fetching card details', err);
      }
    });
  }

  getFormattedCardNumber(carte: Carte): string {
    if (carte?.carte_numero) {
      return carte.carte_numero.replace(/(\d{4})(?=\d)/g, '$1 ');
    }
    return '';
  }

  getFormattedExpirationDate(carte: Carte): string {
    if (carte?.date_expiration) {
      const [year, month] = carte.date_expiration.split('-');
      return `${month}/${year.slice(-2)}`;
    }
    return '';
  }
}
