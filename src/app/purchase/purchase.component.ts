import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ContractService } from '../services/contract.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import swal from "sweetalert";
import { CookieService } from 'ngx-cookie-service';
import { HeaderComponent } from '../header/header.component';


import { AppComponent } from "../app.component";
declare let window: any;
declare let require: any;

var unit = require('./Unit.js')


@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit, OnDestroy  {
  public eth:any;
  public doll:any;
  public result;
  public resul;
  public usd_price;
  public tot_supply;
  public id1;
  public id2;
  public Indtoken_in_ether;
  public ether_for_total_tokens;
  public ethereum_price;
  public i="1027";
  public account; 
  public  _web3: any;
  public header;
constructor(private cs:ContractService,private http:HttpClient,private route:Router,private spin:NgxSpinnerService,private cookie: CookieService ) { 
    
  (document.getElementById('navbar') as HTMLInputElement).hidden=true;
    
  var ins = new AppComponent();
  ins.change();
    this.Fetch_values()    

    var obj = new HeaderComponent(cs,cookie,route)
    obj.fetch_balances();
   }

set(count){
  this.Fetch_values()
  
  if(this.Indtoken_in_ether == "NaN")
  {
   this.set(count)
  }
   this.eth=count*this.Indtoken_in_ether;
   this.doll=count*this.usd_price;
  (document.getElementById('ether') as HTMLInputElement ).value= this.eth;
  (document.getElementById('dollar') as HTMLInputElement ).value= this.doll;
  
  if((document.getElementById('ether') as HTMLInputElement ).value == "NaN")
  {
     swal("Please Re-enter the value")
  }
}


Purchase(tokens){

  if(tokens != '')
  {
  if((document.getElementById('verify') as HTMLInputElement).checked == true)
  {
    document.getElementById("p2").innerHTML = "Transaction in Progress...";
    document.getElementById("p1").innerHTML = "";
    this.ether_for_total_tokens=tokens*this.Indtoken_in_ether;

    
    this.spin.show();
      // var a = this.Indtoken_in_ether.toString().split(".")[0]
      var a = this.Indtoken_in_ether.toString().split('.')[1]
      var b = this.Indtoken_in_ether.toString().split('.')[0]
      var temp1 = a.substring(0,18)
      var amt=b+"."+temp1;
      var argument = unit.toWei(amt.toString(),'ether')
      // alert("One Token" + argument)
      // alert("in Ether"+ unit.fromWei(argument, 'ether'))
      // this.spin.hide()
      // return
      var x = this.ether_for_total_tokens.toString().split(".")[1]
      var y = this.ether_for_total_tokens.toString().split(".")[0]
      var temp2 = x.substring(0,18)
      var total=y+"."+temp2;
      var msgvalue =  unit.toWei(total.toString(),'ether')

      // alert("Total"+"--"+msgvalue)

      // alert("Check"+"--"+msgvalue/argument)
      this.cs.get_cookie().then(input_key =>{
      this.cs.buy_token(input_key,argument,msgvalue).then(result =>{
        this.spin.hide();   
      if(result == 1)
      {
      swal("Tokens Purchased Successfully...!")
      var instance = new HeaderComponent(this.cs,this.cookie,this.route)
      instance.fetch_balances()
      document.getElementById("p2").innerHTML = " ";
      
      (document.getElementById("t1") as HTMLInputElement).value ='';
      (document.getElementById('verify') as HTMLInputElement).checked == false
      // this.hc.fetch_balances()
      this.route.navigate(['service'])
      }
      
      else if(result==0)
      {
        swal("Unable to Proceed So Please try again...!");
        (document.getElementById("t1") as HTMLInputElement).value ='';
        (document.getElementById('verify') as HTMLInputElement).checked == false
        
      }
      else if(result==2)
      {
        swal("Transaction failed...!");
        (document.getElementById("t1") as HTMLInputElement).value ='';
        (document.getElementById('verify') as HTMLInputElement).checked == false
       
      }
    })
  })
    
  }
  else
    {
      document.getElementById("p2").innerHTML = "";
      document.getElementById("p1").innerHTML = "Please confirm your transaction";
    }
  }
  else
  {
   swal('Please Enter a Value')
  }
}

Fetch_values()
    {
      
      this.http.get('https://api.coinmarketcap.com/v2/ticker/1027/')
      .subscribe(
        (resp:Response)=>{
          this.resul=resp;
          this.ethereum_price=this.resul.data.quotes.USD.price;

        }
      )
      this.http.get('https://api.coinmarketcap.com/v2/ticker/1967/')
      .subscribe(
        (res:Response)=>{
         this.result=res;
        this.usd_price=this.result.data.quotes.USD.price;
        this.tot_supply=this.result.data.total_supply;

            this.Indtoken_in_ether=(this.usd_price*(1/this.ethereum_price));
            
          
        }  
      )
    }
    ngOnInit() 
    {    
      // let meta = this;
      // meta.cs.getAccount().then(acc => {
      //     this.account = acc;
      //     meta.id1 = setInterval(function() {
      //      if (typeof window.web3 !== 'undefined') {
      //          meta._web3 = new Web3(window.web3.currentProvider);
      //          if (meta._web3.eth.accounts[0] !== meta.account) {
      //              meta.account = meta._web3.eth.accounts[0];
      //              if (meta._web3.eth.accounts[0] === undefined) {
      //                  meta.route.navigate(['metamask']);
      //                  clearInterval(this.interval);
      //              }
      //               else 
      //              {
      //               window.location.reload(true);
      //              }
      //          }
      //      } else {
      //          meta.route.navigate(['metamask']);
      //      }
      //     }, 200);
      //  });
         }
         ngOnDestroy() {
             if (this.id1) { 
               clearInterval(this.id1);
             }
             if (this.id2) { 
              clearInterval(this.id2);
            }
            
    }

}
