import { Component, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()

  text: string = ''
  date: string = ''
  reminder: boolean = false
  showAddTask: boolean = false
  subscription?: Subscription 

  constructor(
    private uiService: UiService
  ){
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
  }

  onSubmit(){
    if(!this.text){
      alert('add text, please!')
      return
    }
    if(!this.date){
      alert('add date, please!')
      return
    }
    
    const { text, date, reminder } = this

    const newTask = { text, date, reminder }
    
    this.onAddTask.emit(newTask)
  }
}
