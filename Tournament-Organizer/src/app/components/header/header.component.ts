import { Component, OnInit, Input } from '@angular/core';
import { Location } from "@angular/common";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() name: string = "Alejandro RR";
  @Input() points: number = 250;
  @Input() header: string = "main";

  constructor(private location: Location) { }

  ngOnInit() {}

  isMain(){
    return this.header == "main";
  }

  myBackButton(){
    this.location.back();
  }

}
