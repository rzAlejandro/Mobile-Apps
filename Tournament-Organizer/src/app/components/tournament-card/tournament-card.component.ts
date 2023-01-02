import { Component, OnInit, Input } from '@angular/core';
import { Tournament } from '../../interfaces/tournament';

@Component({
  selector: 'app-tournament-card',
  templateUrl: './tournament-card.component.html',
  styleUrls: ['./tournament-card.component.scss'],
})
export class TournamentCardComponent implements OnInit {

  @Input() tournament: Tournament = {
    id: 0,
    title: "",
    manager: "",
    date: "",
    numberPlayers: 0,
    maxNumberPlayers: 0,
    entranceFee: 0,
    price: 0,
    city: "",
    location: "",
    participating: false,
    img: ""
  }

  constructor() { }

  ngOnInit() {}

  /*
  <ion-card button class = "card-t" routerLink = "/tournament-details/{{tournament.id}}">
  <ion-grid class = "grid">
    <ion-row class = "row">
      <ion-col class = "colI" size = "3">
        <img alt = "Tournament image" src = "./assets/avatar.svg"/>
      </ion-col>
      <ion-col>
        <ion-grid class = "grid">
          <ion-row class = "row ion-align-items-center" >
            <ion-col>
              <ion-label class = "title">{{tournament.title}}</ion-label>
            </ion-col>
            <ion-col>
              <ion-item lines = "none">
                <ion-icon class = "icon" name = "star"></ion-icon>
                <ion-label class = "points">{{tournament.price}}</ion-label>
              </ion-item>
            </ion-col>
          </ion-row>
          <ion-row class ="row ion-align-items-center">
            <ion-col size = "7">
              <ion-label>{{tournament.city}}, {{tournament.location}}</ion-label>
            </ion-col>
            <ion-col>
              <ion-label>Players: {{tournament.numberPlayers}}/{{tournament.maxNumberPlayers}}</ion-label>
            </ion-col>
          </ion-row>
          <ion-row style = "margin-bottom: 5px;" class ="row ion-align-items-center">
            <ion-col>
              <ion-label>{{tournament.date | date: 'medium'}}</ion-label>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-col>
    </ion-row>
  </ion-grid>
</ion-card>


<ion-grid>
  <ion-row>
    <ion-col size = "3">
      <img class = "img-td" src = "./assets/avatar.svg">
    </ion-col>
    <ion-col>
      <ion-card button class = "card-td" routerLink = "/tournament-details/{{tournament.id}}">
        <ion-grid class = "grid">
          <ion-row class = "row ion-align-items-center" >
            <ion-col>
              <ion-label class = "title">{{tournament.title}}</ion-label>
            </ion-col>
            <ion-col>
              <ion-item lines = "none">
                <ion-icon class = "icon" name = "star"></ion-icon>
                <ion-label class = "points">{{tournament.price}}</ion-label>
              </ion-item>
            </ion-col>
          </ion-row>
          <ion-row class ="row ion-align-items-center">
            <ion-col size = "7">
              <ion-label>{{tournament.city}}, {{tournament.location}}</ion-label>
            </ion-col>
            <ion-col>
              <ion-label>Players: {{tournament.numberPlayers}}/{{tournament.maxNumberPlayers}}</ion-label>
            </ion-col>
          </ion-row>
          <ion-row style = "margin-bottom: 5px;" class ="row ion-align-items-center">
            <ion-col>
              <ion-label>{{tournament.date | date: 'medium'}}</ion-label>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card>
    </ion-col>
  </ion-row>
</ion-grid>
*/

}
