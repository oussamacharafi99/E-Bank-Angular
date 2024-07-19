import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../Services/user-service.service';
import { Account } from '../models/account';
import { JwtDto } from '../models/jwt-dto';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  _form_add_account!: FormGroup;

  constructor(private fb: FormBuilder, private service: UserServiceService) { }

  ngOnInit(): void {
    this._form_add_account = this.fb.group({
      accountNumber: [''],
      type: ['', Validators.required],
      solde: ['', [Validators.required, Validators.min(0)]],
      date_creation: ['', Validators.required],
      status: [true],
      user: [null],
      Beneficier: [[]],
      Transaction: [[]],
      Carte: [[]]
    });
  }

  onSubmit() {
    if (this._form_add_account.valid) {
      const newAccount: Account = this._form_add_account.value;
      const storedJwtData = localStorage.getItem('jwtData');

      if (storedJwtData) {
        const jwtData: JwtDto = JSON.parse(storedJwtData);
        const userId = jwtData.user_id;
        
        this.service.add_account(userId, newAccount).subscribe(
          response => {
            console.log(response);
          },
          error => {
            console.error(error);
          }
        );
      }
    }
  }
  
}
