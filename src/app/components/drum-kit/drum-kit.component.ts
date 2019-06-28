import { Component, OnInit} from '@angular/core';
import { keyInfoArray } from '../../info/key-info-arr';
import { KeyInterface } from '../../models/keyframe';
import { Subject } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-drum-kit',
  templateUrl: './drum-kit.component.html',
  styleUrls: ['./drum-kit.component.css']
})
export class DrumKitComponent implements OnInit {

  keyInfos:KeyInterface[] = [];

  pressEvent:KeyboardEvent;

  parentSubject:Subject<any> = new Subject();

  notifyChildren() {
    this.parentSubject.next(this.pressEvent);
  }

  makeKey(infoArray):KeyInterface {
    return {
      keyName: infoArray[0],
      instrumentName: infoArray[1]
    }
  }

  
  
  constructor() { 
    keyInfoArray.forEach(e => {
        this.keyInfos.push(this.makeKey(e))
    })
    // console.log(this.keyInfo)
  }
  
  ngOnInit() {
  }

  getPressEvent(event) {
    // console.log('kit')
    // console.log(event)
    this.pressEvent = event
    this.notifyChildren()
  }

}
