import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway-binding',
  templateUrl: './oneway-binding.component.html',
  styleUrls: ['./oneway-binding.component.scss'],
})
export class OnewayBindingComponent implements OnInit {
  fullname: string = 'Le Vu';
  age: number = 20;
  constructor() {}

  ngOnInit(): void {}

  eventBinding(value: string) {
    // console.log(value);
    this.fullname = value;
  }
}
