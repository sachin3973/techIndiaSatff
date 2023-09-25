import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AppdataService} from './services/appdata.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  userDetails = {
    firstName: 'nirav',
    lastName: 'poojara',
  };
  userInitails: string = '';

  constructor(private router: Router, private alertController: AlertController, private dataService: AppdataService) {
    this.userInitialsConvertor()
  }

  userInitialsConvertor() {
    this.userInitails += this.userDetails.firstName[0];
    this.userInitails += this.userDetails.lastName[0];
    this.dataService.globalvars.set('staffName', this.userDetails.firstName + " " + this.userDetails.lastName)
    this.dataService.globalvars.set('userInitials', this.userInitails);
  }
}
