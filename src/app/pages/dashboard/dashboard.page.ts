import { Component, OnInit } from '@angular/core';
import { AppdataService } from 'src/app/services/appdata.service';
import { Activity } from 'src/domain/Acivity';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  staffName: string;
  activities: Activity[];

  constructor(private dataService: AppdataService, private dashboardService: DashboardService, private router: Router) { }

  ngOnInit() {
    this.activities = this.dashboardService.getOngoingActivities();
  }

  ionViewWillEnter() {
    this.staffName = this.dataService.globalvars.get('staffName');
  }

  progressBarTitleFormat(progress: number): string {
    return progress + "%";
  }

  goToActivityDetails(activity: Activity) {
    this.dataService.globalvars.set('selectedActivity', activity);
    this.dataService.simpleLoader();
    setTimeout(() => {
      this.router.navigate(['/activitydetail'])
      this.dataService.dismissLoader();
    }, 300)
  }
}
