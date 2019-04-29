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
    console.log(this.tabs);
  }

}
