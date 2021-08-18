import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ForgotPasswordComponent } from 'src/app/components/auth/recoverPassword/forgot-password/forgot-password.component';
import { NewPasswordComponent } from 'src/app/components/auth/recoverPassword/new-password/new-password.component';
import { NotificationComponent } from 'src/app/components/auth/recoverPassword/notification/notification.component';
import { OtpVerificationPage } from 'src/app/components/auth/signin/otp-verification/otp-verification.page';
import { SigninPage } from 'src/app/components/auth/signin/signin.page';
import { SignupPage } from 'src/app/components/auth/signup/signup.page';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() { }

  async _openModalLogin() {
    const modal = await this.modalCtrl.create({
      component: NotificationComponent,
      cssClass: "modal__component",
      swipeToClose: true,
      mode: 'ios',
      backdropDismiss: true,
      showBackdrop: false
    });
    modal.onDidDismiss()
      .then(() => {
        this._openOTP();
      })
    return await modal.present();
  }

  async _openModalSignUp() {
    const modal = await this.modalCtrl.create({
      component: SignupPage,
      cssClass: "modal__component",
      swipeToClose: true,
      mode: 'ios',
      backdropDismiss: true,
      showBackdrop: false
    });
    return await modal.present();
  }

  async _openOTP() {
    const modal = await this.modalCtrl.create({
      component: OtpVerificationPage,
      cssClass: "modal__component",
      swipeToClose: true,
      backdropDismiss: true,
      mode: 'ios',
      showBackdrop: false
    })
    return await modal.present();
  }

}
