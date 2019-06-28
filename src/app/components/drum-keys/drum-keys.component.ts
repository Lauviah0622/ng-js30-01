import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-drum-keys',
  templateUrl: './drum-keys.component.html',
  styleUrls: ['./drum-keys.component.css']
})
export class DrumKeysComponent implements OnInit {

  @Input() keyInfos;

  @Output() public pressEvent = new EventEmitter

  constructor() {
    console.log(this.keyInfos)
  }

  ngOnInit() {
  }

  sendPressEvent(event) {
    // this.pressEvent = event;
    // console.log(`keys`)
    // console.log(event)
    this.pressEvent.emit(event)
  }

}
