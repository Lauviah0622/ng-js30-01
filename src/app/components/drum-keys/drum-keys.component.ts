import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drum-keys',
  templateUrl: './drum-keys.component.html',
  styleUrls: ['./drum-keys.component.css']
})
export class DrumKeysComponent implements OnInit {

  @Input() keyInfos 

  constructor() { }

  ngOnInit() {
  }

}
