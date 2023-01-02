import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  finished: boolean = false;
  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    entranceFee: ['', Validators.required],
    date: ['', Validators.required],
    maxPlayers: ['', Validators.required],
    price: ['', Validators.required],
    participating: [''],
    img: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  createTournament(){
    console.log(this.form);
  }

}
