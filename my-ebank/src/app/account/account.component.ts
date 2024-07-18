import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  _form_add_account !:FormGroup;
  

  constructor(private fb: FormBuilder, private service : UserServiceService) { }

  ngOnInit(): void {

    this._form_add_account = this.fb.group({
      accountNumber: ['', Validators.required],
      type: ['', Validators.required],
      solde: ['', [Validators.required, Validators.min(0)]],
      date_creation: ['', Validators.required],
      status: ['', Validators.required],
      userId: ['', Validators.required]
    })


  }

}
