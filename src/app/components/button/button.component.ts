import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string = "button";
  @Input() color: string = "primary";
  @Output() btnClick = new EventEmitter()

  onClick = (): void => {
    this.btnClick.emit()
  }
}
