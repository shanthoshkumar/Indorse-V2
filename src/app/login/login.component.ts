import { Component, OnInit } from '@angular/core';
import { ContractService } from '../services/contract.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from "@angular/router";
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // public web3;
  public canshow:boolean;
  public account;
  public key;
  constructor(private cs:ContractService,private cookie:CookieService,private route:Router) {

    var state = this.cookie.check('Secret_key')
    if(state ==  false)
    {
      console.log(state);
    }
    else
    {
      this.route.navigate(['service'])
    }

    var ins = new AppComponent();
    ins.hide();
  }  



  fetch_account(private_key)
  { 
    if(private_key.length == 64)
    {        
      this.cs.getAccount(private_key).then(account =>{
        this.account = account;
        this.key = private_key;
        this.canshow = true;
      })
      }      
    else 
    {
      alert("Invalid Key")
    }
  }

  validate()
  {

    if((document.getElementById('verify') as HTMLInputElement).checked != false )
    {
      this.cs.set_cookie(this.key).then(result =>{      
      if(result == true)
      {        
        
      }      
    else 
    {
      alert("Invalid Key")
    } 

    })
      this.route.navigate(['service']);
    }
    else
    {
      alert('Please Verify your Account')
    }
  }

  ngOnInit() 
  { }
  

}
