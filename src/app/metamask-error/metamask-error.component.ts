import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { ContractService } from '../services/contract.service';
declare let window: any;
import * as Web3 from 'web3';
@Component({
  selector: 'app-metamask-error',
  templateUrl: './metamask-error.component.html',
  styleUrls: ['./metamask-error.component.css']
})
export class MetamaskErrorComponent implements OnInit,OnDestroy {

  public account;
  public  _web3: any;
  public id1: any;

  constructor(private cs:ContractService,private route:Router) { }

  ngOnInit() 
  {
    // let meta = this;
    // this.id1 = setInterval(function() {
    //   if (typeof window.web3 !== 'undefined') {
    //     meta._web3 = new Web3(window.web3.currentProvider);
    //     if (meta._web3.eth.accounts[0] !== undefined) {
    //       meta.route.navigate(['service']);
    //     }
    //   }
    //   else
    //   {
    //     window.location.reload()
    //   }
    // }, 200);
  }
         ngOnDestroy() {
             if (this.id1) { 
               clearInterval(this.id1);
             }
    }


}
