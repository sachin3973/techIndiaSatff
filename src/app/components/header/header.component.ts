import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppdataService } from 'src/app/services/appdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  @Input() title: string;
  @Input() goBackToDashboard!: boolean;
  @Input() goBackToActivity!: boolean;
  @Input() goBackToSelectSwitchboard!: boolean;
  
  constructor(private router: Router, private dataService: AppdataService) { }

  ngOnInit() {
    if (!this.title) {
      this.title = this.dataService.globalvars.get('staffName')
    }
  }

  goToDashboard() {
    this.router.navigate(['/dashboard'])
  }

  goToActvity() {
    this.router.navigate(['/activitydetail'])
  }

  goToSelectSwitchboard() {
    this.router.navigate(['/selectswitchboard'])
  }

  public alertButtons = [
    {
      text: 'Yes',
      role: 'confirm',
      cssClass: 'alert-button-confirm',
      handler: () => {
        this.goToDashboard();
      },
    },
    {
      text: 'No',
      role: 'cancel',
      cssClass: 'alert-button-cancel',
    },
  ];

  setResult(ev:any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }
}
