import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { KeyInterface } from '../../models/keyframe';


@Component({
  selector: 'app-instrument-key',
  templateUrl: './instrument-key.component.html',
  styleUrls: ['./instrument-key.component.css']
})
export class InstrumentKeyComponent implements OnInit {

  @Input() keyInfo:KeyInterface;
  @Output() pressEvent:EventEmitter<any> = new EventEmitter;

  keyClass:boolean;
  audio


  constructor() {
    this.keyClass = false;
  }
  
  ngOnInit() {
    console.log(this.keyInfo)
  }



  @HostListener('document:keypress', ['$event'])
  KeyboardEvent(event: KeyboardEvent) {
    if(event.key === this.keyInfo.keyName.toLowerCase()) {
      // console.log(event)
      this.keyClass = true;
      // this.keyClass = false;
      this.playSound()
      this.sendPressEvent(event)
      
    }
  }

  @HostListener('document:transitionend', ['$event'])
  classEvent(event: TransitionEvent) {
    // console.log(event)
    this.keyClass = false;
  }

  playing() {
    return {'playing': this.keyClass}
  }

  playSound() {
    let audio = new Audio();
    audio.src = `assets/sounds/${this.keyInfo.instrumentName}.wav`;
    audio.load();
    audio.play();
  }

  sendPressEvent(event) {
    this.pressEvent.emit(event)
  }
  
      

}
