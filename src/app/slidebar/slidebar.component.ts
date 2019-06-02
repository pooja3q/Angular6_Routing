import { Component, OnInit } from '@angular/core';
import {Router , NavigationEnd}  from '@angular/router'

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent implements OnInit {
 currentUrl : string;

  constructor(private route: Router) {
      route.events.subscribe((_:NavigationEnd)=> {
        return this.currentUrl = _.url;
      });
      console.log(this.currentUrl);
   }
   
  ngOnInit() {
    
  }

}
