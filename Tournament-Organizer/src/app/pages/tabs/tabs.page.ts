import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  items: any[] = [
    {
      route: "home",
      icon: "home-outline"
    },
    {
      route: "tournaments",
      icon: "globe-outline"
    },
    {
      route: "create",
      icon: "add-circle-outline"
    },
    {
      route: "ranking",
      icon: "trophy-outline"
    },
    {
      route: "profile",
      icon: "person-circle-outline"
    }
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
