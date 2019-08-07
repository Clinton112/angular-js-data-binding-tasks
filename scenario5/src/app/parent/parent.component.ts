import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public message1;
  constructor() { }
  @Output() public childEvent=new EventEmitter();

  ngOnInit() {
  }

  public forward(value){
    this.message1=value.toString();
    this.childEvent.emit(this.message1);
  }

}
