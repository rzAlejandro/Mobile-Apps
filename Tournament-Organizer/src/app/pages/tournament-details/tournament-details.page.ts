import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { TournamentService } from '../../services/tournament.service';
import { Tournament } from '../../interfaces/tournament';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tournament-details',
  templateUrl: './tournament-details.page.html',
  styleUrls: ['./tournament-details.page.scss'],
})
export class TournamentDetailsPage implements OnInit {

  tournament: Tournament = {
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

  constructor(
    private route: ActivatedRoute,
    private ts: TournamentService,
    private actionSheetCtrl: ActionSheetController,
    private alertController: AlertController       
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.ts.getTournament(id).subscribe(
      (data) => {
        this.tournament = data;
      }
    )
  }

  disableSignIn(){
    return this.tournament.numberPlayers == this.tournament.maxNumberPlayers;
  }

  async unsign() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'UNSIGN',
      subHeader: 'Unsigning from this tournament. Are you sure?',
      buttons: [
        {
          text: 'Yes',
          handler: () => { 
              this.tournament.numberPlayers--;
              this.tournament.participating = false;
              this.ts.unsignTournament({...this.tournament}).subscribe(
                (data) => {
                  this.alertUnsigned();
                }
              )
            }
        },
        {
          text: 'No',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }
  
  async alertUnsigned(){
    const alert = await this.alertController.create({
      header: 'Succesfully unsigned!!',
      message: `You were removed from the tournament: ${this.tournament.title}. If you have already paid, in 2 days we will return your money.`,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async sign() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'SIGN IN',
      subHeader: 'Joining the tournament... Do you want to pay the entrance fee in this moment?',
      buttons: [
        {
          text: 'Yes',
          handler: () => { 
              //ir a ventana de pago
          }
        },
        {
          text: 'No',
          handler: () => { 
            this.tournament.numberPlayers++;
            this.tournament.participating = true;
            this.ts.signInTournament({...this.tournament}).subscribe(
              (data) => {
                this.alertSignedIn();
              }
            )
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });
    await actionSheet.present();
  }
  
  async alertSignedIn(){
    const alert = await this.alertController.create({
      header: 'Succesfully signed in!!',
      message: `You have joined the tournament: ${this.tournament.title}. We will send you a notification when the date arrives. Good luck!`,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
