import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  // public canshow:boolean=true;
  constructor(){ 
    // (document.getElementById('navbar') as HTMLInputElement).hidden=true;
  }

  
  hide()
  {
        (document.getElementById('navbar') as HTMLInputElement).hidden=true;
  }
   change(){   
    (document.getElementById('navbar') as HTMLInputElement).hidden=false;
  }
  
  ngOnInit() 
  {  
    this.hide()
   }
}
