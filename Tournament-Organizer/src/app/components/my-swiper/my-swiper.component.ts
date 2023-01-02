import { Component, AfterContentChecked, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { Tournament } from '../../interfaces/tournament';
import { TournamentService } from '../../services/tournament.service';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-my-swiper',
  templateUrl: './my-swiper.component.html',
  styleUrls: ['./my-swiper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MySwiperComponent implements AfterContentChecked, OnInit {

  tournaments: Tournament[] = [];

  @ViewChild('swiper') swiper: SwiperComponent;
  
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: true
  }

  constructor(private ts: TournamentService) { }

  ngOnInit(){
    this.ts.getTournaments().subscribe(
      (data) => { this.tournaments = data.slice(0,4)}
    )
  }

  ngAfterContentChecked() {
    if(this.swiper){
      this.swiper.updateSwiper({});
    }
  }

  swiperSlideChanged(e){}
}
