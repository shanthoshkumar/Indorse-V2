import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { ContractService } from './services/contract.service';
import * as Web3 from 'web3';
declare let window: any;


@Injectable({
  providedIn: 'root'
})
export class CheckAdminGuard implements CanActivate {
  public account;
  public id1;
  public  _web3: any;


  constructor(private cs:ContractService,private route:Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.cs.check_admin().then(admin => {    
        if (admin){        
          return true;
        }
        else
        {    
          this.route.navigate(['service']);
          return false;
        }
        
      });
      }
      ngOnInit() 
      {    
        // let meta = this;
        // meta.cs.getAccount().then(acc => { 
        //     this.account = acc;
        //     meta.id1 = setInterval(function() {
        //       if (typeof window.web3 !== 'undefined') {
        //           meta._web3 = new Web3(window.web3.currentProvider);
        //           if (meta._web3.eth.accounts[0] !== meta.account) {
        //               meta.account = meta._web3.eth.accounts[0];
        //               if (meta._web3.eth.accounts[0] === undefined) {
        //                   // meta.router.navigate(['metamask']);
        //                   clearInterval(this.interval);
        //               } else {
        //                   window.location.reload(true);                   }
        //           }
        //       } else {
        //           // meta.router.navigate(['metamask']);
        //       }
        //      }, 200);
        //  }); 
           }
           ngOnDestroy() {
               if (this.id1) { 
                 clearInterval(this.id1);
               }
              
      }
  
}
