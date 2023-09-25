import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppdataService } from 'src/app/services/appdata.service';
import { Activity } from 'src/domain/Acivity';
import { FunctionalArea } from 'src/domain/functionalArea';
import { Switchboard } from 'src/domain/switchboard';

@Component({
  selector: 'app-selectswitchboard',
  templateUrl: './selectswitchboard.page.html',
  styleUrls: ['./selectswitchboard.page.scss'],
})
export class SelectswitchboardPage implements OnInit {
  selectedActivity: Activity;
  title: string;
  isFunctionalAreaOpen: boolean;
  isSwitchboardAreaOpen: boolean;
  selectedFunctionArea: FunctionalArea;
  selectedSwitchBoard: Switchboard;

  constructor(private dataService: AppdataService, private router: Router) { }

  ngOnInit() {
    this.selectedActivity = this.dataService.globalvars.get('selectedActivity');
    this.title = this.selectedActivity.locationName;
  }

  selectFunctionalArea() {
    this.isFunctionalAreaOpen = !this.isFunctionalAreaOpen;
    this.isSwitchboardAreaOpen = false;
  }

  selectSwitchBoardArea() {
    this.isSwitchboardAreaOpen = !this.isSwitchboardAreaOpen;
    this.isFunctionalAreaOpen = false;
  }

  onSelectFunctionalArea(functionalArea: FunctionalArea) {
    this.selectedFunctionArea = functionalArea;
    this.isFunctionalAreaOpen = false;
    this.dataService.simpleLoader();
    setTimeout(() => {
      this.dataService.dismissLoader();
      this.isSwitchboardAreaOpen = true;
    }, 300)
  }

  onSelectSwitchBoard(switchboard: Switchboard) {
    this.selectedSwitchBoard = switchboard;
    this.dataService.globalvars.set('selectedswitchboard', this.selectedSwitchBoard);
    this.isSwitchboardAreaOpen = false;
    this.dataService.simpleLoader();
    setTimeout(() => {
      this.dataService.dismissLoader();
      this.router.navigate(['productlist']);
    }, 300)
  }
}
