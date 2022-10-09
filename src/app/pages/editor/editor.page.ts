import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.page.html',
  styleUrls: ['./editor.page.scss'],
})
export class EditorPage implements OnInit {
  constructor(private alertController: AlertController) {}

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: `<ion-icon name="alert-circle-outline"></ion-icon>`,
      subHeader: 'Save changes ?',
      mode: 'md',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'Discard',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Save',
          cssClass: 'alert-button-confirm',
        },
      ],
    });

    await alert.present();
  }
}
