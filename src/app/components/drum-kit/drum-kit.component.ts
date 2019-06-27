import { Component, OnInit } from '@angular/core';
import { keyInfoArray } from '../../info/key-info-arr';
import { KeyInterface } from '../../models/keyframe';

@Component({
  selector: 'app-drum-kit',
  templateUrl: './drum-kit.component.html',
  styleUrls: ['./drum-kit.component.css']
})
export class DrumKitComponent implements OnInit {

  keyInfos:KeyInterface[] = [];

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

}
