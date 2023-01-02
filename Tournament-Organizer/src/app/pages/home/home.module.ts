import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HeaderComponent } from '../../components/header/header.component';
import { TournamentCardComponent } from '../../components/tournament-card/tournament-card.component';
import { ProfileCardComponent } from '../../components/profile-card/profile-card.component';
import { SwiperModule } from 'swiper/angular';
import { MySwiperComponent } from '../../components/my-swiper/my-swiper.component';
import { RankingComponent } from '../../components/ranking/ranking.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SwiperModule
  ],
  declarations: [
    HomePage, 
    HeaderComponent, 
    TournamentCardComponent, 
    ProfileCardComponent, 
    MySwiperComponent,
    RankingComponent
  ]
})
export class HomePageModule {}
