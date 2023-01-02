import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../../interfaces/profile';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {

  @Input() profile: Profile = {
    name: "",
    points: 0,
    age: 0,
    tournamentsPlayed: 0,
    tournamentsWon: 0,
    moneyWon: 0,
    city: ""
  }

  constructor() { }

  ngOnInit() {}

}
