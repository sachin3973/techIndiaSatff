import { Injectable } from '@angular/core';
import {AlertController,LoadingController,ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AppdataService {
  globalvars = new Map();
  constructor(public alertController: AlertController,public toastController: ToastController,public loadingController: LoadingController) { }

  public async displayToast(msg: string, alerttype: string) {
    var stricon;
    var strcssclass;

    if (alerttype == 'SUCCESS') { stricon = 'checkmark-circle'; strcssclass = 'success-toast'; }
      else if (alerttype == 'FAIL') { stricon = 'ban'; strcssclass = 'fail-toast'; }
      else if (alerttype == 'WARNING') {stricon = 'warning'; strcssclass = 'warning-toast';}

      const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      cssClass: strcssclass,
      buttons: [
        {
          side: 'start',
          icon: stricon,
        },
      ],
    });
    toast.present();
  }

  // Simple loader
  simpleLoader(message?: string | undefined) {
    var strmsg = 'Loading..';
    if (message) strmsg = message;

    this.loadingController
      .create({
        message: strmsg,
      })
      .then((response) => {
        response.present();
      });
  }

  // Dismiss loader
  dismissLoader() {
    this.loadingController
      .dismiss()
      .then((response) => {
        console.log('Loader closed!', response);
      })
      .catch((err) => {
        console.log('Error occured : ', err);
      });
  }
}
