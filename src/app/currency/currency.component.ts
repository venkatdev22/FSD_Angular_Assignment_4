import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../app/shared.service';
import { CurrencyDetails } from '../currency/currencydetails';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit { 

  rate:string;

  constructor(private sharedService: SharedService) { 
  }

  onClickCurrencySubmit(currency:string)
  {
    this.sharedService.getCurrencyDetails(currency).subscribe(c => {
      //log currency service API response 
      console.log(c.rates);
      this.rate=c.rates.USD.toString(); 
    }); 
  }

  ngOnInit() {
  }

}
