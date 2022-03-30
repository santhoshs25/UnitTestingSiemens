import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit, OnChanges {

  @Input()
  content: string = "";
  message: string = "";

  ngOnChanges(): void {
    this.message = this.content;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
