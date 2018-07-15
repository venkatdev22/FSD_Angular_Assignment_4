import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../app/shared.service';
import { CurrencyDetails } from '../currency/currencydetails';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  currencyDetails: CurrencyDetails;
  constructor(private sharedService: SharedService) {
    sharedService.getCurrencyDetails('USD').subscribe(c => {
      //log currency service API response 
      console.log(c.rates);
    });

    sharedService.getCurrencyDetails('').subscribe(c => {
      //log currency service API response 
      console.log(c.rates);
      this.currencyDetails = c;
    });
  }

  ngOnInit() {
  }

}
