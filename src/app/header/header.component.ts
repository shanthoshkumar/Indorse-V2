import { Component, OnInit } from '@angular/core';
import {  ContractService } from '../services/contract.service';
import { Router } from '@angular/router';
import * as Web3 from 'web3';  
declare let window: any;
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public tokens;
public ether_balance;
public  _web3;
public id1;
public id2;
constructor(private cs:ContractService,private cookie:CookieService,private route:Router) {}


fetch_balances() {
  this.cs.get_cookie().then(input_key =>{
    this.cs.getAccount(input_key).then(account=>{
      this.cs.balanceOf(account).then(tkns =>{
    if(tkns>0 && tkns<0.1)
    {
      this.tokens= "<" + 0.1;
    }
    else
    {
      this.tokens = tkns;
      (document.getElementById('lbl_tkn') as HTMLInputElement).value='Tokens:'+(tkns).toString();
    }
    this.cs.getUserBalance(account).then(amt =>{
      (document.getElementById('lbl_eth') as HTMLInputElement).value='Ether:'+(amt).toString();
    })
  })
    })
  })
  }
  
  sign_out()
  {
    this.cookie.delete('Secret_key');
    this.route.navigate(['login'])
  }
 
 
  ngOnInit() {
    let meta = this;
        meta.id1 = setInterval(function() {
          
var state = meta.cookie.check('Secret_key')
  if(state != true)
  {
    clearInterval(this.interval);
    meta.route.navigate(['login'])              
  }
}, 50);
}
     ngOnDestroy() {
         if (this.id1) { 
           clearInterval(this.id1);
         }  
}

    
      

}
