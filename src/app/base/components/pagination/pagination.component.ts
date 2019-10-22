import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cs-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() totalCount: number;
  @Input() pageSize: number;
  @Output() OnSelectItem: EventEmitter<number> = new EventEmitter<number>();

  numberPages: number;
  previousPage: number;
  currentPage: number;
  nextPage: number;

  constructor() {
    this.previousPage = 1;
    this.currentPage = 1;
    this.nextPage = 1;
  }

  ngOnInit() {
    this.pageSize = this.pageSize || 10;
    this.totalCount = this.totalCount || 0;

    this.calculatePages();
  }

  calculatePages() {
    this.numberPages = Math.ceil(this.totalCount / this.pageSize);
    if (this.numberPages === 1) {
      this.previousPage = 1;
      this.nextPage = 1;
    } else if (this.numberPages >= this.currentPage) {
      this.previousPage = (this.currentPage === 1)
        ? this.currentPage
        : (this.currentPage - 1);
      this.nextPage = (this.numberPages === this.currentPage)
        ? this.currentPage
        : (this.currentPage + 1);
    }
  }

  onSelectItem(page: number) {
    this.currentPage = page;
    this.calculatePages();
    this.OnSelectItem.next(page);
  }

  ngOnChanges(_: SimpleChanges): void {
    if (this.totalCount) { this.calculatePages(); }
  }
}
