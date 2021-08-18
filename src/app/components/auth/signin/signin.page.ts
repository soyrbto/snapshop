import { Component, OnInit } from '@angular/core';
import {
  ModalController
} from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private keyboard: Keyboard
  ) { }

  ngOnInit() {
  }

  _closeModal() {
    this.modalCtrl.dismiss();
  }
}
