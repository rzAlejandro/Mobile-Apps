import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TournamentsPageRoutingModule } from './tournaments-routing.module';

import { TournamentsPage } from './tournaments.page';
import { TournamentCardComponent } from '../../components/tournament-card/tournament-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TournamentsPageRoutingModule
  ],
  declarations: [TournamentsPage, TournamentCardComponent]
})
export class TournamentsPageModule {}
