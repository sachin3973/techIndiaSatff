import { Injectable } from '@angular/core';
import { Activity } from 'src/domain/Acivity';
import { activities } from 'src/modals/Activity';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getOngoingActivities() {
    return activities;
  }
}
