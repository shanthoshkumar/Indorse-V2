import { Component, OnInit ,OnDestroy} from '@angular/core';
import { ContractService } from '../services/contract.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import  Web3 from 'web3';
declare let require: any;
import { FormGroup, FormBuilder ,Validators } from '@angular/forms';
import swal from "sweetalert";
import { HeaderComponent } from '../header/header.component';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from "../app.component";

var unit = require('./Unit.js')

@Component({
  selector: 'app-create_service',
  templateUrl: './create_service.component.html',
  styleUrls: ['./create_service.component.css']
})
export class create_serviceComponent implements OnInit ,OnDestroy{
  public account;
  public web3:any;
  public id1;
  public id2;
  public token_balance:number = null;
   public servicename = ' ';
   public serviceprice = ' ';
  public withdrawamt=null;
  public header;
  
  angForm:FormGroup;

  constructor(private cs:ContractService,private route:Router,private spin:NgxSpinnerService,private cookie:CookieService)
   {  
    var ins = new AppComponent();
    ins.change();
    this.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/Vr1GWcLG0XzcdrZHWMPu'));
    var obj = new HeaderComponent(cs,cookie,route)
    obj.fetch_balances();
   }
    
  create(name,price)
    {
      if (name=="")
      {
        swal("Please Enter Service Name"); 
        return;
      }
      else if (price =="")
      {
        swal("Please Enter Native Token Value");
        return;
      }
      else 
      {
        this.spin.show();
        this.cs.get_cookie().then(input_key =>{
        this.cs.add_service(input_key,name,price).then(res =>{       
          if(res==0)
          {
            this.spin.hide();
            swal("Unable to Proceed So Please try again...!");
            (document.getElementById('n')  as HTMLInputElement).value='';
            (document.getElementById('p')  as HTMLInputElement).value='';
          }
          else if(res==2)
          {
            this.spin.hide();
            swal("Tranaction failed..!");
            (document.getElementById('n')  as HTMLInputElement).value='';
            (document.getElementById('p')  as HTMLInputElement).value='';
          } 
          else if(res == 1)
          {
            swal("Service created Successfully");
            var instance = new HeaderComponent(this.cs,this.cookie,this.route)
            instance.fetch_balances()
            this.spin.hide();
            (document.getElementById('n')  as HTMLInputElement).value='';
            (document.getElementById('p')  as HTMLInputElement).value='';
            
          }  
          
        })
      })
      }
    }

  withdraw(amount)
   {
       if (amount =="")
       {
        document.getElementById("p2").innerHTML = "";
        document.getElementById("p1").innerHTML = "Please enter amount to Withdraw";
       }
       else
       {
        document.getElementById("p2").innerHTML = "Request in Progress";
        document.getElementById("p1").innerHTML = "";
         var amt = unit.toWei(amount.toString(),'ether')
        this.cs.get_cookie().then(input_key=>{
        this.cs.withdraw(input_key,amt).then(res =>{
        if(res==1)
        {
          (document.getElementById('with_amt')  as HTMLInputElement).value='';
          this.spin.hide();
          document.getElementById("p2").innerHTML = "";
          swal("Amount Withdrew Successfully...!")
          var instance = new HeaderComponent(this.cs,this.cookie,this.route)
          instance.fetch_balances()
          this.cs.token_contract_balance().then(result =>this.token_balance =result)

        }
        else if(res==0)
        {
          (document.getElementById('with_amt')  as HTMLInputElement).value='';
          this.spin.hide();
          document.getElementById("p2").innerHTML = "";
          swal("Unable to Proceed So Please try again...!");
        }
        else if(res == 2)
        {
          this.spin.hide()
          document.getElementById("p2").innerHTML = "";
          swal('Transaction Reverted')
        }
        //document.getElementById("p2").innerHTML = " ";
        //this.spin.hide();
      })
      })
      
       amount='';
       }
      
    } 

    ngOnInit() 
    { 
      let meta = this; 
      meta.cs.token_contract_balance().then(result =>this.token_balance = result)
      // meta.id1 =setInterval(function(){
      //    meta.cs.token_contract_balance().then(result =>meta.token_balance =result)
      //  },200)
     
     }

         ngOnDestroy() {
            //  if (this.id1) { 
            //    clearInterval(this.id1);
            //  }
    //          if (this.id2) { 
    //   clearInterval(this.id2);
    // }
   
}


}
