import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { AuTabComponent } from 'app/au-tab/au-tab.component';

@Component({
  selector: 'au-tab-panel',
  templateUrl: './au-tab-panel.component.html',
  styleUrls: ['../tab-panel.component.scss']
})
export class AuTabPanelComponent implements OnInit, AfterContentInit {

  @ContentChildren(AuTabComponent) tabs: QueryList<AuTabComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    const selectedTab = this.tabs.find(({ selected }) => selected);

    if (!selectedTab) {
      this.tabs.first.selected = true;
    }
  }

  selectTab(selectedTab: AuTabComponent) {
    this.tabs.forEach(tab => tab.selected = false);
    selectedTab.selected = true;
  }

}
