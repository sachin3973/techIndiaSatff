import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppdataService } from 'src/app/services/appdata.service';
import { Activity } from 'src/domain/Acivity';

@Component({
  selector: 'app-activitydetail',
  templateUrl: './activitydetail.page.html',
  styleUrls: ['./activitydetail.page.scss'],
})
export class ActivitydetailPage implements OnInit {
  activity: Activity;
  constructor(private dataService: AppdataService, private router: Router) { }

  ngOnInit() {
    this.activity = this.dataService.globalvars.get('selectedActivity');
    if (!this.activity) {
      this.router.navigate(['/'])
    }
  }

  ionViewWillEnter() {
    this.activity = this.dataService.globalvars.get('selectedActivity');
  }

  syncNow() {
    this.dataService.simpleLoader('Syncing...')
    setTimeout(() => {
      this.dataService.dismissLoader();
    }, 300)
  }

  record() {
    this.dataService.simpleLoader();
    setTimeout(() => {
      this.dataService.dismissLoader();
      this.router.navigate(['/selectswitchboard'] )
    }, 300)
  }

}
