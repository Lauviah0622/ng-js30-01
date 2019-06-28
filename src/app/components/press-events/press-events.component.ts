import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-press-events',
  templateUrl: './press-events.component.html',
  styleUrls: ['./press-events.component.css']
})
export class PressEventsComponent implements OnInit {

  keyEventArray:KeyboardEvent[] = []

  @Input() parentSubject:Subject<any>;

  ngOnInit() {
    this.parentSubject.subscribe(event => {
      // console.log(event)a
      this.keyEventArray.push(event.key)
      console.log(this.keyEventArray)
      if(this.keyEventArray.length > 10) this.keyEventArray.shift()
    })
  }

  printEvent(pressEvent) {
    console.log('pressevent')
    console.log(pressEvent)
    // this.instrumentKeyEvents.push(pressEvent)
  }

}
