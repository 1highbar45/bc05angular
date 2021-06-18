import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss'],
})
export class GheComponent implements OnInit {
  @Input() ghe: any;
  @Output() chonGhe = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  bookGhe() {
    if (!this.ghe.TrangThai) {
      this.chonGhe.emit(this.ghe);
    }
  }
}
