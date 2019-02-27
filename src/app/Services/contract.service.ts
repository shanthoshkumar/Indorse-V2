import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
declare let require: any;
declare let window: any;
import { NgxSpinnerService } from 'ngx-spinner';
import * as Tx from 'ethereumjs-tx';
import Web3 from 'web3'
var Buffer = require('buffer/').Buffer 
let contractAbi= require('./contract.json');
import { CookieService } from 'ngx-cookie-service';
import { ResourceLoader } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class ContractService {
  public account: string = null;
  public balance:number;
  public  web3:any = null;
  public acc:string =null;

  public contract: any;
  public contractAddress: string = "0xc9de0da933af20ecb53bd50814f21005e37a8f87";


  constructor(private spin:NgxSpinnerService,private route: Router,private cookie:CookieService) {
    this.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/Vr1GWcLG0XzcdrZHWMPu')); 
    this.contract =new this.web3.eth.Contract(contractAbi,this.contractAddress,{
    gaslimit:3000000,
    })
  }

  
public async set_cookie(input_key): Promise<boolean> {
  let indor = this;  
indor.cookie.set('Secret_key',input_key)
  return await new Promise((resolve, reject) => {  
indor.check_cookie('Secret_key').then(result =>{
  if(input_key === result)
  {
    resolve(true)
  }
  else
  {
    resolve(false)
  }
  })

}) as Promise<boolean>;
}


public async check_cookie(input_key): Promise<string> {
  let indor = this;
  return await new Promise((resolve, reject) => {  
var key = indor.cookie.get('Secret_key')
  resolve(key)
}) as Promise<string>;
}

  
public async get_cookie(): Promise<string> {
  let indor = this;  
  return await new Promise((resolve, reject) => {
    var key = indor.cookie.get('Secret_key')
    resolve(key)

  }) as Promise<string>;
}  
  
public async getAccount(input_key): Promise<string> {
  let indor = this;
  return await new Promise((resolve, reject) => {     
  var obj = indor.web3.eth.accounts.privateKeyToAccount('0x'+input_key)
  var account = obj['address'] 
  resolve(account)
}) as Promise<string>;
}


public async getUserBalance(account): Promise<number> {
  let indor = this;
  return new Promise((resolve, reject) => {
    indor.web3.eth.getBalance(account,function(err,result){
      if(err != null) {
        reject(err);
      }
      else{
        resolve(indor.web3.utils.fromWei(result,'ether'));
      }
    })
  }) as Promise<number>;
}
                                                                              

//purchase token
public async buy_token(input_key,argument,msgvalue): Promise<number> {
  let indor = this;
  indor.spin.show()
  return new Promise((resolve, reject) => {
    // var arg1= indor.web3.utils.toWei(Indtoken_in_ether.toString(),'ether').split(".")[0]
    // var msgvalue = this.web3.utils.toWei(ether_for_total_tokens.toString(),'ether').split(".")[0]

  const privatekeydetails = indor.web3.eth.accounts.privateKeyToAccount("0x"+input_key);
  var senderaddress = privatekeydetails["address"]; 
  indor.web3.eth.getTransactionCount(senderaddress,function(err,result){
  var nonce=result.toString(16);
  const private_key = Buffer.from(input_key,'hex'); 
  var contract_function =indor.contract.methods.buy_token(argument);                                                                                                                                  
  var contract_function_abi = contract_function.encodeABI();
  var txParams = {
  nonce: '0x' +nonce,
  gasPrice: 0x4A817C800*1.40,
  gasLimit: 4000000,
  from :senderaddress,
  to:indor.contractAddress,
  value: msgvalue,
  data: contract_function_abi
  } 
  var tx = new Tx(txParams);
  tx.sign(private_key);
  const serializedtx = tx.serialize() 
  console.log("Getting receipt...");
  
  indor.web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'),function(err,result){
  if(err != null){
  console.log("err")
  resolve(0)
  }
  else{
  indor.hash(result).then(res =>{
  if(res == true) {
  resolve(1)
  }
  else if(res == false) {
  resolve(2)
  }
  })
  }
  })
  }) 
  }) as Promise<number>;

}


//withdraw token
public async withdraw(privatekey,amount): Promise<number> { 
  let indor = this;
  indor.spin.show()
  return new Promise((resolve, reject) => {
  const privatekeydetails = indor.web3.eth.accounts.privateKeyToAccount("0x"+privatekey);
  var senderaddress = privatekeydetails["address"]; 
  indor.web3.eth.getTransactionCount(senderaddress,function(err,result){
  var nonce=result.toString(16);
  const private_key = Buffer.from(privatekey,'hex'); 
  var contract_function =indor.contract.methods.withdraw(amount); 
  var contract_function_abi = contract_function.encodeABI();
  var txParams = {
  nonce: '0x' +nonce,
  gasPrice: '0x4A817C800',
  gasLimit: 4000000,
  from :senderaddress,
  to:indor.contractAddress,
  value: '0x00',
  data: contract_function_abi
  } 
  var tx = new Tx(txParams);
  tx.sign(private_key);
  const serializedtx = tx.serialize() 
  console.log("Getting receipt...");
  
  indor.web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'),function(err,result){
  if(err != null){
  console.log("err")
  resolve(0)
  }
  else{
  indor.hash(result).then(res =>{
  if(res == true) {
  resolve(1)
  }
  else if(res == false) {
  resolve(2)
  }
  })
  }
  })
  }) 
  }) as Promise<number>;
}



//token balance
public async token_contract_balance(): Promise<number> {
  let indor =this; 
  return new Promise((resolve, reject) => {  
    
    indor.contract.methods.token_contract_balance().call(function(err,result) 
   {
    if(err) 
    {
      console.log(err);
      
      reject(err);
    }
    else
    {   
      var out=result/1000000000000000000;
  resolve(out)
     }        
    
   });
 }) as Promise<number>;
}

//transfer
public async transfer(input_key,tokens): Promise<number> {
  let meta =this;
  
  return new Promise((resolve, reject) => {  
    var tkn_address=0x88b9cf7bea8f50847e300034b3e28f6279b5829e;
    const privateKey = Buffer(input_key,'hex'); 
    const obj = this.web3.eth.accounts.privateKeyToAccount('0x' + input_key);
    var senderAddress = obj['address'];
    const contractFunction = this.contract.methods.transfer(tkn_address,tokens);  
    const functionAbi = contractFunction.encodeABI()
    meta.web3.eth.getTransactionCount(senderAddress,function(err,nonce)
      {

        var txParams = {
          nonce: '0x' +nonce,
          gasPrice:  '0x4A817C800',
          gasLimit: 4000000,
          from :senderAddress,
          to: meta.contractAddress,
          value: '',
          data: functionAbi
     }      
     var tx = new Tx(txParams);
     tx.sign(privateKey);
     const serializedTx = tx.serialize();
     meta.web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'),function(error,receipt){
       if(error)
       {
         reject(error) && resolve(0)
       }
    console.log(receipt);
    meta.hash(receipt['transactionHash']).then(result =>{
      if(result == true)
      {
          resolve(1)
      }
      else if(result == false)
      {
          resolve(2)
      }
    })
  })  
})
  
 }) as Promise<number>;
}


 //create_service 
  public async add_service(input_key,name,price): Promise<number> {                             
   let indor = this;
  indor.spin.show()
  return new Promise((resolve, reject) => {
  const privatekeydetails = indor.web3.eth.accounts.privateKeyToAccount("0x"+input_key);
  var senderaddress = privatekeydetails["address"]; 
  indor.web3.eth.getTransactionCount(senderaddress,function(err,result){
  var nonce=result.toString(16);
  const private_key = Buffer.from(input_key,'hex'); 
  var contract_function =indor.contract.methods.add_service(name,indor.web3.utils.toWei(price.toString(),'ether')); 
  var contract_function_abi = contract_function.encodeABI();
  var txParams = {
  nonce: '0x' +nonce,
  gasPrice: 0x4A817C800*1.40,
  gasLimit: 4000000,
  from :senderaddress,
  to:indor.contractAddress,
  value: '0x00',
  data: contract_function_abi
  } 
  var tx = new Tx(txParams);
  tx.sign(private_key);
  const serializedtx = tx.serialize() 
  console.log("Getting receipt...");
  
  indor.web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'),function(err,result){
  if(err != null){
  console.log("err")
  resolve(0)
  }
  else{
  indor.hash(result).then(res =>{
  if(res == true) {
  resolve(1)
  }
  else if(res == false) {
  resolve(2)
  }
  })
  }
  })
  }) 
  }) as Promise<number>;
  }
 
 //get service id
 public async service_id(): Promise<any> {                             
  let indor = this;    
  return new Promise((resolve, reject) => {
    indor.contract.methods.service_id().call(function(err,result) 
  {  
  if(err!=null) 
  {
    // resolve(result)
    reject(err);
    
  }
   else
   {
     var array=[];
     for(var i=1;i<=result;i++)
     {
       array.push(i);
     }
      resolve(array)
      console.log("RESULT"+result);
      
   }   
  });
  }) as Promise<any>;
}

//get service details
public async service_details(id): Promise<object> {                             
  let indor = this;  
  return new Promise((resolve, reject) => {
  indor.contract.methods.service_details(id).call(function(err,result) 
  {  
  if(err) 
  {
    // resolve(result)  
    reject(err);
    
  }
   else
   {
      resolve(result)      
   }   
  });
  }) as Promise<object>;
}
 
//buy_service
public async buy_service(input_key,id): Promise<number> {                             
  let indor = this;
  indor.spin.show()
  return new Promise((resolve, reject) => {
  const privatekeydetails = indor.web3.eth.accounts.privateKeyToAccount("0x"+input_key);
  var senderaddress = privatekeydetails["address"]; 
  indor.web3.eth.getTransactionCount(senderaddress,function(err,result){
  var nonce=result.toString(16);
  const private_key = Buffer.from(input_key,'hex'); 
  var contract_function =indor.contract.methods.buy_service(id); 
  var contract_function_abi = contract_function.encodeABI();
  var txParams = {
  nonce: '0x' +nonce,
  gasPrice: 0x4A817C800*1.40,
  gasLimit: 4000000,
  from :senderaddress,
  to:indor.contractAddress,
  value: '0x00',
  data: contract_function_abi
  } 
  var tx = new Tx(txParams);
  tx.sign(private_key);
  const serializedtx = tx.serialize() 
  console.log("Getting receipt...");
  
  indor.web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'),function(err,result){
  if(err != null){
  console.log("err")
  resolve(0)
  }
  else{
  indor.hash(result).then(res =>{
  if(res == true) {
  resolve(1)
  }
  else if(res == false) {
  resolve(2)
  }
  })
  }
  })
  }) 
  }) as Promise<number>;
}

//hashing
public async hash(a): Promise<boolean> {
  let meta = this;
  return new Promise((resolve, reject) => {
    var accountInterval = setInterval(function()
    {      
      meta.web3.eth.getTransactionReceipt(a,function(err,result){
        if(err != null) {
        resolve(err);
        }

        if(result !== null)
        {
          clearInterval(accountInterval);
          if(result.status == 0x1)
          {
            clearInterval(accountInterval);
            resolve(true);
          }
          else
          {           
            resolve(false);
          }
        }
      })
    },100)
  }) as Promise<boolean>;
}

//check admin
public async check_admin(): Promise<boolean> {                             
  let indor = this; 
  return new Promise((resolve, reject) => {    
    indor.get_cookie().then(address =>{
    indor.getAccount(address).then(account =>{
    indor.contract.methods.admin().call(function (err, result) 
  {  
  if(err) 
  {
    reject(err);    
  }
   else if(account == result)
    {         
      resolve(true)      
     }
     else
     {
      resolve(false)      

     }
   }) 
  }); 
})
  }) as Promise<boolean>;
}

//user_services
public async user_services(input_key,id): Promise<object> {                             
    let indor = this;
    const obj = indor.web3.eth.accounts.privateKeyToAccount('0x'+input_key,'hex');
    var senderAddress = obj['address'];
  return new Promise((resolve, reject) => {
    indor.contract.methods.user_services(senderAddress,id).call(function(err,result) 
  {  
  if(err) 
  {
    // resolve(result)
    reject(err);
    
  }
   else
   {
      resolve(result)      
   }   
  });
  }) as Promise<object>;
} 

//balance of
public async balanceOf(account): Promise<number> {                             
  let indor = this;
return new Promise((resolve, reject) => {
  indor.contract.methods.balanceOf(account).call(function(err,result) 
{  
if(err) 
{
  // resolve(result)
  reject(err);
  
}
 else
 {
    resolve(result/1000000000000000000)      
 }   
});
}) as Promise<number>;
}

}