import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {

  message:string="Hello Child"
  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  sendMessage(){
    this.messageEvent.emit(this.message);
  }

}
