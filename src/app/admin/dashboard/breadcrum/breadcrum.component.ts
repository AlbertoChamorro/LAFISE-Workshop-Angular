import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-breadcrum',
  templateUrl: './breadcrum.component.html',
  styleUrls: []
})
export class BreadcrumComponent implements OnInit {

  @Input()
  itemLinks: string[];
  countItems: number;

  constructor() {
    this.itemLinks = this.itemLinks || [];
  }

  ngOnInit() {
    this.countItems = this.itemLinks.length;
  }

}
