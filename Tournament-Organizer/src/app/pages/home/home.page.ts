import { Component, OnInit } from '@angular/core';
import { Tournament } from '../../interfaces/tournament';
import { TournamentService } from '../../services/tournament.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit{
  
  tournaments: Tournament[] = [];

  constructor(private ts: TournamentService) {}

  ngOnInit(){
    this.ts.getTournaments().subscribe(
      (data) => {
        this.tournaments = data.filter(t => t.participating)
        this.tournaments.sort((a,b) => this.convert(a.date) - this.convert(b.date))
        this.tournaments = this.tournaments.slice(0,3);
      }
    )
  }

  handleRefresh(event){
    console.log("h");
    setTimeout(() => {
      this.ts.getTournaments().subscribe(
        (data) => {
          this.tournaments = data.filter(t => t.participating)
          this.tournaments.sort((a,b) => this.convert(a.date) - this.convert(b.date))
          this.tournaments = this.tournaments.slice(0,3);
          console.log(data);
          event.target.complete();
        }
      )
    }, 2000);
  }
  convert(a: string){
    let d = new Date(a);
    return d.getTime();
  }
}
