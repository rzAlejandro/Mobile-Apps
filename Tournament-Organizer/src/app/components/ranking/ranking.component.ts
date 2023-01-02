import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
})
export class RankingComponent implements OnInit {

  ranking: any[] = [
    {
      name: "PlayerXX",
      points: 1100,
      money: 13000,
      img: "./assets/avatares/gamer.png"
    },
    {
      name: "PlayerYY",
      points: 1090,
      money: 16735,
      img: "./assets/avatares/woman.png"
    },
    {
      name: "PlayerZZ",
      points: 1085,
      money: 10000,
      img: "./assets/avatares/hacker.png"
    }
  ]
  constructor() { }

  ngOnInit() {}

}
