import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tournament } from '../interfaces/tournament';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(private http: HttpClient) { }

  getTournaments(){
    return this.http.get<Tournament[]>(environment.serverURLEmulator);
  }

  getTournament(id: string){
    return this.http.get<Tournament>(environment.serverURLEmulator + '/' + id); 
  }

  unsignTournament(body){
    return this.http.put<Tournament>(environment.serverURLEmulator + '/' + body.id, body);
  }

  signInTournament(body){
    return this.http.put<Tournament>(environment.serverURLEmulator + '/' + body.id, body);
  }


}
