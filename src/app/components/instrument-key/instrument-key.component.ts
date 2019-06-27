import { Component, OnInit, Input } from '@angular/core';
import { KeyInterface } from '../../models/keyframe'

@Component({
  selector: 'app-instrument-key',
  templateUrl: './instrument-key.component.html',
  styleUrls: ['./instrument-key.component.css']
})
export class InstrumentKeyComponent implements OnInit {

  @Input() keyInfo:KeyInterface

  constructor() {
    console.log(this.keyInfo)
   }

  ngOnInit() {
  }

}
