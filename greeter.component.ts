import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent implements OnInit {


  @Input()
  message: string | undefined;

  displayText: string | undefined;

  constructor() { }
  ngOnInit(): void {

  }

  ngOnChanges() {
    this.displayText = this.message;
  }
}
