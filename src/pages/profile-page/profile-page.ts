import { Observable } from 'rxjs/Observable';
import { FirebaseService } from './../../providers/firebase-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile-page',
  templateUrl: 'profile-page.html',
})
export class ProfilePage {
  nameForm: FormGroup;
  invitations: Observable<any[]>;

  constructor(public navCtrl: NavController, public firebaseService: FirebaseService, public formBuilder: FormBuilder, public toastCtrl: ToastController) {
    this.nameForm = formBuilder.group({
      name: ['', Validators.compose([Validators.minLength(1), Validators.required])]
    });
  }

  ionViewWillEnter() {
    this.firebaseService.authState.subscribe(user => {
      if (user) {
        this.firebaseService.getUserData().subscribe(data => {
          let value = data.name;
          this.nameForm.patchValue({name: value});
        }, err => {
          console.log('some err: ', err);
        });
        this.invitations = this.firebaseService.getUserInvitations();
      }
    })
  }

  updateUser() {
    this.firebaseService.updateUserName(this.nameForm.value.name).then(() => {
      this.presentToast('Name changed!');
    })
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  accepInvitation(invitation) {
    this.firebaseService.acceptInvitation(invitation).then(() => {
      this.presentToast('Invitation accepted!');
    })
  }

  discardInvitation(invitationId) {
    this.firebaseService.discardInvitation(invitationId);
  }
}
