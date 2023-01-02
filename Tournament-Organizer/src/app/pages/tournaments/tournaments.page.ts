import { Component, OnInit } from '@angular/core';
import { Tournament } from '../../interfaces/tournament';
import { TournamentService } from '../../services/tournament.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.page.html',
  styleUrls: ['./tournaments.page.scss'],
})
export class TournamentsPage implements OnInit {

  openSearchBar: boolean = false;
  notSearching: boolean = true;
  resultSearch: Tournament[] = [];
  today = new Date(Date.now());
  maxTournaments = 4;
  minimumPrice = 15;
  myTournaments: Tournament[] = [];
  myTournamentsClose: Tournament[] = [];
  myTournamentsMedium: Tournament[] = [];
  myTournamentsFar: Tournament[] = [];
  exploreTournaments: Tournament[] = [];
  exploreTournamentsNext: Tournament[] = [];
  exploreTournamentsClose: Tournament[] = [];
  exploreTournamentsPrices: Tournament[] = [];
  segmentValue: string = "participating";

  constructor(private ts: TournamentService) { }

  ngOnInit() {
    this.ts.getTournaments().subscribe(
      (data) => {
        this.myTournaments = data.filter( tournament => tournament.participating ).sort((a,b) => this.convert(a.date) - this.convert(b.date));
        this.exploreTournaments = data.filter( tournament => !tournament.participating )
        this.buildParticipatingArrays();
        this.buildExploringArray();
      }
    )
  }

  handleSearch(event){
    this.notSearching = false;
    const query = event.target.value.toLowerCase();
    if(this.segmentValue == "participating")
      this.resultSearch = this.myTournaments.filter( t => t.title.toLowerCase() == query);
    else
      this.resultSearch = this.exploreTournaments.filter( t => t.title.toLowerCase() == query);
    console.log(this.resultSearch);
  }

  buildParticipatingArrays(){
    const z = this.today.getTime();
    let x, y;
    for(let i = 0; i<this.myTournaments.length; ++i ){
      x = this.convertClose(this.myTournaments[i].date);
      y = this.convertMedium(this.myTournaments[i].date);
      if(x < z && this.myTournamentsClose.length < this.maxTournaments)
        this.myTournamentsClose.push(this.myTournaments[i]);
      else{
        if(y < z && this.myTournamentsMedium.length < this.maxTournaments)
          this.myTournamentsMedium.push(this.myTournaments[i]);
        else{
          if(this.myTournamentsFar.length < this.maxTournaments)
            this.myTournamentsFar.push(this.myTournaments[i]);
        }
      }
    }
  }

  buildExploringArray(){
    this.exploreTournamentsClose = this.exploreTournaments.filter( t => t.city == environment.user_city).slice(0,this.maxTournaments);
    this.exploreTournamentsPrices = this.exploreTournaments.sort((a,b) => b.price - a.price).slice(0,this.maxTournaments);
    this.exploreTournamentsNext = this.exploreTournaments.sort((a,b) => this.convert(a.date) - this.convert(b.date)).slice(0,this.maxTournaments);
  }

  convert(a: string){
    let o = new Date(a);
    return o.getTime();
  }

  convertClose(a: string){
    let d = new Date(a);
    return d.getTime() - 2.628e9;
  }

  convertMedium(a: string){
   let m = new Date(a);
   return m.getTime() - 7.884e9;
  }
 
  clickSearch(){
    if(this.openSearchBar)
      this.notSearching = true;
    this.openSearchBar = !this.openSearchBar;
  }

  selectParticipating(){
    this.segmentValue = "participating";
  }

  selectExplore(){
    this.segmentValue = "explore";  
  }

  isParticipating(){
    return this.segmentValue == "participating";
  }

}
