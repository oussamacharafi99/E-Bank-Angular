import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../Services/user-service.service';
import { Transaction } from '../models/account';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactionsList !: Array<Transaction>
  constructor(private service : UserServiceService , private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const accountId = params.get('id');
      console.log("-------- > > "+accountId);
      
      if (accountId) {
        this.onGet(+accountId);
      }
    });
  }

  onGet(id : number){
    this.service.get_all_Cartes(id).subscribe({
      next: (data: Array<ransaction>) => {
        this.carte = data;
      },
      error: (err) => {
        console.error('Error fetching card details', err);
      }
    });
  }

}
