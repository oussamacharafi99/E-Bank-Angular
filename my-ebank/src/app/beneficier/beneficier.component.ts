import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../Services/user-service.service';
import { Beneficier } from '../models/account';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-beneficier',
  templateUrl: './beneficier.component.html',
  styleUrls: ['./beneficier.component.css']
})
export class BeneficierComponent implements OnInit {
  BeneficierList !: Beneficier[];

  constructor(private service : UserServiceService , private fb : FormBuilder , private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const accountId = params.get('id');
      console.log("-------- > > "+accountId);
      
      if (accountId) {
        this.getAllBeneficier(+accountId);
      }
    });
  }

  getAllBeneficier(id : number){
      this.service.get_all_beneficiers(id).subscribe(data => {
        this.BeneficierList = data;
      })
  }

}
