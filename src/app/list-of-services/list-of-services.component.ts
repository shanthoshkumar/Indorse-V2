import { Component, OnInit,OnDestroy } from '@angular/core';
import { ContractService } from '../services/contract.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import  Web3 from 'web3';
import swal from "sweetalert";
declare let window: any;
import { CookieService } from 'ngx-cookie-service';

import { HeaderComponent } from '../header/header.component';

import { AppComponent } from "../app.component";

@Component({
  selector: 'app-list-of-services',
  templateUrl: './list-of-services.component.html',
  styleUrls: ['./list-of-services.component.css']
})
export class ListOfServicesComponent implements OnInit,OnDestroy {
  public services=[];
  public  details=[];
  public id1;
  public web3;
  public price;
  
  public service_id;

  constructor(private cs:ContractService,private route:Router,private spin:NgxSpinnerService,private cookie:CookieService) { 
    
    var ins = new AppComponent();
    ins.change();
    this.list_services();
    this.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/Vr1GWcLG0XzcdrZHWMPu'));     
    var obj = new HeaderComponent(cs,cookie,route)
    obj.fetch_balances();

  }

  
  Basket_1(id)
  {
   this.cs.get_cookie().then(input_key=>{ 
    this.cs.getAccount(input_key).then(account=>{
      this.cs.balanceOf(account).then(tkns =>{
      var obj={}
        this.cs.service_details(id).then(data =>{ 
          obj['id'] = id;
          obj['name'] = data[0];
          obj['price'] = data[1]/1000000000000000000;
          if(tkns>=data[1]/1000000000000000000)
          {
          //swal("swal")
          this.spin.show();
          this.cs.buy_service(input_key,id).then(res =>{
          //this.spin.show();
          if(res == 1)
          {
            this.user_services();
            swal("You bought a Service...!")
            var instance = new HeaderComponent(this.cs,this.cookie,this.route)
            instance.fetch_balances()
            this.spin.hide();
          }
          else if(res==0)
          {
            swal("Unable to Proceed So Please try again...!");
            this.spin.hide();
          }
          else if(res==2)
          {
            swal("Transaction failed...!");
            this.spin.hide();
          }
        });
     }
     else
     {
        swal(" You are having insufficient Native token balance ");
     }
    });
   });
   })
  })
  }


  Basket_2(id)
  {
  
    this.route.navigate(['purchase'])
  }


  list_services()
  {
    this.cs.service_id().then(ids=>{
      ids.forEach(i => {
          var obj={}
          this.cs.service_details(i).then(detail=>{
              
              obj['id'] = i;
              obj['name'] = detail[0];
              obj['price'] = detail[1]/1000000000000000000;
            this.services.push(obj) 
          })          
      });
    })
  }
  user_services()
  {
    this.details.length = 0;
    this.cs.service_id().then(ids=>{
      ids.forEach(i=>{        
        this.cs.get_cookie().then(input_key =>{
        this.cs.user_services(input_key,i).then(result =>{
          let data={};      
          if(result[0]!=0)
          {
            this.cs.service_details(i).then(details =>{
              data['id']=i;
              data['name']=details[0];
              data['price']=details[1]/1000000000000000000;
              var tm = new Date(result[1]*1000);
              var time= tm.toString();
              data['time']=time;
              this.details.push(data)
             })
          }
        })
        })
      })
    })
    }
  
    ngOnInit() 
    {
      this.user_services();
      //this.list_services();
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
            
            
    }
}